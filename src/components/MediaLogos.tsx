export default function MediaLogos() {
  const logos = [
    { src: '/DARRIK.webp', alt: 'Darik', width: 130 },
    { src: '/NOVA.webp', alt: 'Nova', width: 110 },
    { src: '/images.png', alt: 'Investor', width: 90 },
    { src: '/Kapital_.svg', alt: 'Kapital', width: 150 },
    { src: '/24chasa-og%20copy.jpg', alt: '24 часа', width: 130 },
    { src: '/Bloomberg_TV_Bulgaria%20copy.jpeg', alt: 'Bloomberg TV Bulgaria', width: 160 },
    { src: '/Screenshot_2026-06-11_at_20.40.16.png', alt: 'Forbes Bulgaria', width: 140 },
  ];

  return (
    <div
      className="relative py-7 border-y"
      style={{ background: 'rgba(4,14,28,0.85)', borderColor: 'rgba(14,45,87,0.70)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 lg:gap-12 w-full">
            {logos.map((logo) => (
              <div key={logo.alt} className="flex items-center opacity-55 hover:opacity-85 transition-opacity duration-300">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    width: logo.width,
                    height: 'auto',
                    maxHeight: 44,
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1)',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}
