import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Стилян',
    text: 'Иво ми донесе яснота, каквато сам нямаше да постигна месеци наред. Работихме по реални ситуации, взех конкретни решения и най-важното — започнах да действам уверено. Подходът му е подреден, практичен и супер откровен.',
    image: '/stilyan-testimonial.jpeg',
  },
  {
    name: 'Ивелин Гочев',
    text: 'Иво ми спести месеци проби и грешки. Работихме заедно върху реални сделки и благодарение на това успях да направя първата си печеливша инвестиция много по-рано, отколкото очаквах.',
    image: '/Ивелин_Гочев.jpeg',
  },
  {
    name: 'Иван Иванов',
    text: 'Програмата е интензивна, изключително практически ориентирана и безкрайно ценна. Работи се с реални казуси, числа и хора от бранша, а всяка сесия оставя конкретни стъпки, които можеш да приложиш веднага.',
    image: '/Иван_Иванов.png',
  },
];

const screenshots = [
  '/Screenshot_2026-01-11_at_22.01.24.png',
  '/Screenshot_2026-01-11_at_21.59.46.png',
  '/Screenshot_2026-01-11_at_21.58.46.png',
  '/Screenshot_2025-12-14_at_21.52.06.png',
  '/Screenshot_2025-12-14_at_21.49.40.png',
  '/Screenshot_2026-01-18_at_11.01.31.png',
  '/Screenshot_2026-01-18_at_10.51.29.png',
  '/Screenshot_2026-01-18_at_10.51.06.png',
  '/Screenshot_2026-02-16_at_23.09.24.png',
  '/Screenshot_2026-02-17_at_19.29.19.png',
  '/Отзив_1.png',
  '/Отзив_2.png',
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px divider-gold" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-14 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            Какво казват <span className="text-amber-400">хората</span>
          </h2>
          <p className="text-blue-300/60 text-lg mt-3">от минали обучения</p>
        </div>

        {/* Main testimonial */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl blur-2xl" style={{ background: 'rgba(245,158,11,0.08)' }} />
            <div className="relative rounded-2xl overflow-hidden border shadow-2xl" style={{ borderColor: 'rgba(245,158,11,0.20)' }}>
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-full h-auto block transition-opacity duration-300"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,18,31,0.65) 0%, transparent 50%)' }} />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="text-8xl font-black leading-none mb-2 select-none" style={{ color: 'rgba(245,158,11,0.12)' }}>"</div>
            <p className="text-blue-50/90 text-lg sm:text-xl leading-relaxed mb-8 -mt-4">
              {testimonials[current].text}
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-black text-xl">{testimonials[current].name}</p>
                <p className="text-amber-400 text-sm font-medium mt-0.5">Участник в обучението</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="p-3 rounded-xl border text-white transition-all duration-200"
                  style={{ background: 'rgba(10,32,64,0.60)', borderColor: 'rgba(30,64,102,0.70)' }}
                  aria-label="Предишен"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="p-3 rounded-xl border text-white transition-all duration-200"
                  style={{ background: 'rgba(10,32,64,0.60)', borderColor: 'rgba(30,64,102,0.70)' }}
                  aria-label="Следващ"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{ width: i === current ? '2rem' : '0.375rem', background: i === current ? 'rgb(251,191,36)' : 'rgba(30,64,102,0.80)' }}
                  aria-label={`Отзив ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Screenshots masonry */}
        <div>
          <span className="section-label mb-8 text-center block">Още отзиви</span>
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {screenshots.map((src, i) => (
              <div key={i} className="break-inside-avoid rounded-xl overflow-hidden border transition-colors shadow-lg group" style={{ borderColor: 'rgba(30,64,102,0.50)' }}>
                <img
                  src={src}
                  alt={`Отзив ${i + 1}`}
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
