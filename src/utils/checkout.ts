export async function initiateCheckout() {
  try {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('Supabase configuration missing');
      alert('Грешка в конфигурацията. Моля, свържете се с поддръжката.');
      return;
    }

    const response = await fetch(`${supabaseUrl}/functions/v1/create-checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseAnonKey}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Checkout creation failed:', errorData);
      throw new Error('Failed to create checkout session');
    }

    const data = await response.json();

    if (!data.url) {
      console.error('No checkout URL in response:', data);
      throw new Error('No checkout URL received');
    }

    // Open checkout in a new window
    window.open(data.url, '_blank', 'noopener,noreferrer');

  } catch (error) {
    console.error('Checkout error:', error);
    alert('Нещо се обърка при създаването на поръчката. Моля, опитайте отново или се свържете с нас.');
  }
}
