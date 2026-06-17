declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

export const trackPurchase = (value: number, currency: string, orderId: string) => {
  if (window.fbq) {
    // Use order ID as event_id for deduplication with server-side tracking
    window.fbq('track', 'Purchase', {
      value: value,
      currency: currency,
      content_type: 'product',
      content_ids: ['real-estate-mastery-course'],
      content_name: 'Real Estate Mastery Course'
    }, {
      eventID: `order_${orderId}`
    });
  }
};
