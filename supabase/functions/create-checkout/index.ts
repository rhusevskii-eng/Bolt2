import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY");
    const stripePriceId = Deno.env.get("STRIPE_PRICE_ID");

    if (!stripeSecretKey || !stripePriceId) {
      throw new Error("Missing required environment variables");
    }

    const origin = req.headers.get("origin") || "https://your-domain.com";

    const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${stripeSecretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        "payment_method_types[]": "card",
        "line_items[0][price]": stripePriceId,
        "line_items[0][quantity]": "1",
        "mode": "payment",
        "success_url": `${origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
        "cancel_url": origin,
        "billing_address_collection": "required",
        "phone_number_collection[enabled]": "true",
        "customer_creation": "always",
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Stripe API Error:", errorData);
      throw new Error(`Stripe API error: ${response.status}`);
    }

    const session = await response.json();

    return new Response(
      JSON.stringify({ url: session.url }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
