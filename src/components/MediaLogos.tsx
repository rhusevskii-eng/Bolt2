export default function MediaLogos() {
  const logos = [
    { src: '/DARRIK.webp', alt: 'Darik', width: 120 },
    { src: '/NOVA.webp', alt: 'Nova', width: 100 },
    { src: '/images.png', alt: 'Adidas', width: 80 },
    { src: '/Kapital_.svg', alt: 'Kapital', width: 130 },
  ];

  return (
    <div
      className="relative py-6 border-y"
      style={{ background: 'rgba(4,14,28,0.85)', borderColor: 'rgba(14,45,87,0.70)' }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-0">
          {/* Label */}
          <div className="flex items-center gap-2 sm:pr-8 sm:border-r flex-shrink-0" style={{ borderColor: 'rgba(14,45,87,0.80)' }}>
            <span className="text-xs font-bold tracking-[0.20em] uppercase" style={{ color: 'rgba(148,163,184,0.55)' }}>
              Споменат в
            </span>
          </div>

          {/* Logos */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-8 sm:gap-10 sm:pl-8 w-full">
            {logos.map((logo) => (
              <div key={logo.alt} className="flex items-center opacity-50 hover:opacity-80 transition-opacity duration-300">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{ width: logo.width, height: 'auto', filter: 'brightness(0) invert(1)' }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
