import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

async function verifyStripeSignature(
  payload: string,
  signature: string,
  secret: string
): Promise<boolean> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const parts = signature.split(",");
  const timestamp = parts.find((p) => p.startsWith("t="))?.split("=")[1];
  const expectedSig = parts.find((p) => p.startsWith("v1="))?.split("=")[1];

  if (!timestamp || !expectedSig) return false;

  const signedPayload = `${timestamp}.${payload}`;
  const signatureBuffer = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(signedPayload)
  );

  const actualSig = Array.from(new Uint8Array(signatureBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return actualSig === expectedSig;
}

async function addToBrevoList(
  recipientEmail: string,
  recipientName: string,
  recipientPhone: string,
  orderDetails: {
    orderId: string;
    amount: number;
    currency: string;
    date: string;
  }
): Promise<void> {
  const brevoApiKey = Deno.env.get("BREVO_API_KEY");
  const brevoListId = Deno.env.get("BREVO_LIST_ID");

  if (!brevoApiKey) {
    throw new Error("BREVO_API_KEY not configured");
  }

  if (!brevoListId) {
    throw new Error("BREVO_LIST_ID not configured");
  }

  const contactData = {
    email: recipientEmail,
    attributes: {
      FIRSTNAME: recipientName.split(" ")[0] || "",
      LASTNAME: recipientName.split(" ").slice(1).join(" ") || "",
      SMS: recipientPhone || "",
      ORDER_ID: orderDetails.orderId,
      ORDER_AMOUNT: (orderDetails.amount / 100).toFixed(2),
      ORDER_CURRENCY: orderDetails.currency.toUpperCase(),
      ORDER_DATE: orderDetails.date,
    },
    listIds: [parseInt(brevoListId)],
    updateEnabled: true,
  };

  console.log("Sending to Brevo:", JSON.stringify(contactData, null, 2));

  const response = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "accept": "application/json",
      "api-key": brevoApiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify(contactData),
  });

  const responseText = await response.text();
  console.log("Brevo response status:", response.status);
  console.log("Brevo response:", responseText);

  if (!response.ok) {
    throw new Error(`Brevo API error (${response.status}): ${responseText}`);
  }
}

async function sendMetaConversionEvent(
  email: string,
  orderDetails: {
    orderId: string;
    amount: number;
    currency: string;
  }
): Promise<void> {
  const pixelId = "1333238881385501";
  const accessToken = Deno.env.get("META_CONVERSION_API_TOKEN");

  if (!accessToken) {
    console.log("Meta Conversion API token not configured, skipping");
    return;
  }

  const encoder = new TextEncoder();
  const data = encoder.encode(email.toLowerCase().trim());
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashedEmail = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  const eventData = {
    data: [
      {
        event_name: "Purchase",
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: "https://your-domain.com/thank-you",
        user_data: {
          em: hashedEmail,
        },
        custom_data: {
          currency: orderDetails.currency.toUpperCase(),
          value: (orderDetails.amount / 100).toFixed(2),
          content_type: "product",
          content_ids: ["real-estate-mastery-course"],
          content_name: "Real Estate Mastery Course",
        },
      },
    ],
  };

  const response = await fetch(
    `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${accessToken}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    console.error("Meta Conversion API error:", error);
    throw new Error(`Meta Conversion API error: ${error}`);
  }

  const result = await response.json();
  console.log("Meta Conversion API response:", result);
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const stripeWebhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!stripeWebhookSecret || !supabaseUrl || !supabaseServiceKey) {
      throw new Error("Missing required environment variables");
    }

    const signature = req.headers.get("stripe-signature");
    if (!signature) {
      throw new Error("Missing stripe signature");
    }

    const body = await req.text();
    const isValid = await verifyStripeSignature(
      body,
      signature,
      stripeWebhookSecret
    );

    if (!isValid) {
      throw new Error("Invalid signature");
    }

    const event = JSON.parse(body);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      const supabase = createClient(supabaseUrl, supabaseServiceKey);

      const orderData = {
        stripe_session_id: session.id,
        stripe_payment_intent_id: session.payment_intent,
        customer_email: session.customer_details?.email || session.customer_email,
        customer_name: session.customer_details?.name || "",
        customer_phone: session.customer_details?.phone || "",
        amount: session.amount_total,
        currency: session.currency,
        status: "completed",
      };

      const { data: order, error: dbError } = await supabase
        .from("orders")
        .insert(orderData)
        .select()
        .single();

      if (dbError) {
        console.error("Database error:", dbError);
        throw dbError;
      }

      try {
        await addToBrevoList(
          orderData.customer_email,
          orderData.customer_name,
          orderData.customer_phone,
          {
            orderId: order.id,
            amount: orderData.amount,
            currency: orderData.currency,
            date: new Date().toLocaleDateString("bg-BG"),
          }
        );

        await supabase
          .from("orders")
          .update({
            added_to_brevo: true,
            brevo_response: "Successfully added to Brevo"
          })
          .eq("id", order.id);

        console.log(`Contact added to Brevo list: ${orderData.customer_email}`);
      } catch (brevoError) {
        console.error("Brevo error:", brevoError);

        const errorMessage = brevoError instanceof Error ? brevoError.message : String(brevoError);

        await supabase
          .from("orders")
          .update({
            added_to_brevo: false,
            brevo_error: errorMessage,
            brevo_response: errorMessage
          })
          .eq("id", order.id);
      }

      try {
        await sendMetaConversionEvent(orderData.customer_email, {
          orderId: order.id,
          amount: orderData.amount,
          currency: orderData.currency,
        });
        console.log(`Meta Conversion event sent for: ${orderData.customer_email}`);
      } catch (metaError) {
        console.error("Meta Conversion API error:", metaError);
      }
    }

    return new Response(
      JSON.stringify({ received: true }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Webhook error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
