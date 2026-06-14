import { Star } from 'lucide-react';

const stats = [
  { value: '5M+', label: 'EUR Портфолио' },
  { value: '4', label: 'Държави' },
  { value: '200+', label: 'Управлявани хора' },
  { value: '2', label: 'IPO на Wall St.' },
];

export default function WhyTrustMe() {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden" style={{ background: 'rgba(10,32,64,0.45)' }}>
      <div className="absolute top-0 inset-x-0 h-px divider-gold" />
      <div className="absolute bottom-0 inset-x-0 h-px divider-gold" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-14 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            <span className="text-white">Защо да ми </span>
            <span className="text-amber-400">вярваш?</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          {/* Photo */}
          <div className="w-full lg:w-[360px] flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl blur-2xl" style={{ background: 'rgba(245,158,11,0.12)' }} />
             <div className="relative rounded-2xl border shadow-2xl" style={{ borderColor: 'rgba(245,158,11,0.25)', boxShadow: '0 25px 50px rgba(245,158,11,0.15)' }}>
                <img
                  src="/IMG_0304.jpg"
                  alt="Иво Димовски"
                  className="w-full h-auto block"
                  loading="eager"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: 'linear-gradient(to top, rgba(5,18,31,0.95) 0%, rgba(7,30,56,0.70) 50%, transparent 100%)' }}>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-white font-black text-lg">Иво Димовски</p>
                  <p className="text-amber-400 text-sm font-medium">Real Estate Investor & Educator</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1 space-y-5 text-base sm:text-lg leading-relaxed">
            <p className="text-blue-50/85">
              <span className="text-amber-400 font-bold">Завърших Cambridge в Pembroke College</span>, работих в{' '}
              <span className="text-amber-400 font-semibold">adidas и Vodafone</span>, управлявах екипи от над 200 души и участвах в{' '}
              <span className="text-amber-400 font-semibold">2 IPO на Wall Street</span> — но истинското ми образование в имотите дойде от грешки, платени с лични пари.
            </p>

            <p className="text-blue-100/70">
              Менторите ми не са от социалните мрежи. Това са{' '}
              <span className="text-amber-400 font-semibold">вицепрезиденти на банки в Цюрих</span> — хора, научили ме да мисля като институционален инвеститор.
            </p>

            <p className="text-blue-100/70">
              <span className="text-amber-400 font-bold">Имам имоти в четири държави</span> — Германия, Швейцария, България и Дубай.
            </p>

            <p className="text-blue-100/70">
              <span className="text-amber-400 font-bold">Организатор на "Квадратни Метри"</span> — едно от най-големите събития за инвеститори в имоти в България с над 500 участника в Гранд Хотел Милениум.
            </p>

            <div className="p-5 sm:p-6 rounded-2xl border" style={{ background: 'rgba(10,32,64,0.65)', borderColor: 'rgba(245,158,11,0.20)' }}>
              <p className="text-white font-bold text-base sm:text-lg leading-relaxed">
                Не ти продавам теория от книги. Давам ти система, изградена от реален опит, реални сделки и реални грешки, за да не ги плащаш{' '}
                <span className="text-amber-400">ти!</span>
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 pt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8" style={{ borderTop: '1px solid rgba(30,64,102,0.60)' }}>
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-amber-400 mb-2 group-hover:scale-105 transition-transform inline-block">
                {stat.value}
              </div>
              <div className="text-blue-300/60 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
