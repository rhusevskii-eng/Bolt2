import { useState } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

const testimonials = [
  {
    name: 'Стилян',
    text: 'Иво ми донесе яснота, каквато сам нямаше да постигна месеци наред. Работихме по реални ситуации, взех конкретни решения и най-важното — започнах да действам уверено. Подходът му е подреден, практичен и супер откровен. Радвам се, че се включих.',
    image: '/stilyan-testimonial.jpeg'
  },
  {
    name: 'Ивелин Гочев',
    text: 'Иво ми спести месеци проби и грешки. Работихме заедно върху реални сделки и благодарение на това успях да направя първата си печеливша инвестиция много по-рано, отколкото очаквах. Програмата му е практична, конкретна и наистина дава резултат.',
    image: '/Ивелин_Гочев.jpeg'
  },
  {
    name: 'Иван Иванов',
    text: 'Програмата е интензивна, изключително практически ориентирана и безкрайно ценна. Тук не говорим само за теория — работи се с реални казуси, числа и хора от бранша, а всяка сесия оставя конкретни стъпки, които можеш да приложиш веднага.',
    image: '/Иван_Иванов.png'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-800/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Отзиви от хора минали през
          </h2>
          <p className="text-xl sm:text-2xl text-amber-400">3-дневното обучение</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div className="relative bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-900/80 backdrop-blur-xl border-2 border-amber-500/40 rounded-3xl p-8 sm:p-12 shadow-2xl">
              <div className="absolute top-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                {testimonials[currentIndex].image ? (
                  <div className="mb-8">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-96 object-cover rounded-2xl border-2 border-amber-500/30"
                    />
                  </div>
                ) : (
                  <div className="mb-8 w-full h-96 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-2xl flex items-center justify-center border-2 border-amber-500/20">
                    <div className="text-center text-slate-500 p-8">
                      <ImageIcon className="w-20 h-20 mx-auto mb-4 opacity-30" />
                      <p className="text-lg">Постави снимка на отзив тук</p>
                      <p className="text-sm mt-2 text-slate-600">({testimonials[currentIndex].name})</p>
                    </div>
                  </div>
                )}

                <div className="text-center max-w-3xl mx-auto">
                  <p className="text-slate-200 leading-relaxed text-lg sm:text-xl mb-8">
                    "{testimonials[currentIndex].text}"
                  </p>

                  <div className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/40 rounded-full">
                    <p className="text-amber-400 font-bold text-xl">{testimonials[currentIndex].name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 p-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 rounded-full hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-2xl shadow-amber-500/50 hover:scale-110 z-20"
            aria-label="Предишен отзив"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 p-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 rounded-full hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-2xl shadow-amber-500/50 hover:scale-110 z-20"
            aria-label="Следващ отзив"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-12 h-3 bg-gradient-to-r from-amber-500 to-amber-600'
                  : 'w-3 h-3 bg-slate-600 hover:bg-slate-500'
              }`}
              aria-label={`Към отзив ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-2xl border-2 border-amber-500/30 shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 hover:scale-105">
              <img
                src="/Screenshot_2026-01-11_at_22.01.24.png"
                alt="Отзив 1"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border-2 border-amber-500/30 shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 hover:scale-105">
              <img
                src="/Screenshot_2026-01-11_at_21.59.46.png"
                alt="Отзив 2"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border-2 border-amber-500/30 shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 hover:scale-105">
              <img
                src="/Screenshot_2026-01-11_at_21.58.46.png"
                alt="Отзив 3"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border-2 border-amber-500/30 shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1">
              <img
                src="/Screenshot_2025-12-14_at_21.52.06.png"
                alt="Отзив 4"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border-2 border-amber-500/30 shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 hover:scale-105 md:col-span-2">
              <img
                src="/Screenshot_2025-12-14_at_21.49.40.png"
                alt="Отзив 5"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border-2 border-amber-500/30 shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 hover:scale-105 lg:col-span-2">
              <img
                src="/Screenshot_2026-01-18_at_11.01.31.png"
                alt="Отзив 6"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border-2 border-amber-500/30 shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 hover:scale-105">
              <img
                src="/Screenshot_2026-01-18_at_10.51.29.png"
                alt="Отзив 7"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border-2 border-amber-500/30 shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-3">
              <img
                src="/Screenshot_2026-01-18_at_10.51.06.png"
                alt="Отзив 8"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
