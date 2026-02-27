declare global {
  interface Window {
    fbq: (action: string, event: string, data?: Record<string, unknown>) => void;
  }
}

export const initMetaPixel = () => {
  const pixelId = import.meta.env.VITE_META_PIXEL_ID;

  if (pixelId && window.fbq) {
    window.fbq('init', pixelId);
    window.fbq('track', 'PageView');
  }
};

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
