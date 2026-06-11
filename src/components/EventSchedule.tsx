import { initiateCheckout } from '../utils/checkout';
import GuaranteeBadge from './GuaranteeBadge';

const schedule = [
  {
    num: '01', day: 'ЧЕТВЪРТЪК', date: '25 Юни',
    title: 'Разбиваме митовете и разкриваме механиката',
    description: 'Ще седнем на живо за 2 часа и ще разбием всички митове за имотите. Ще ти покажа как наистина работи играта, откъде идва печалбата и как да разпознаваш добри сделки без да губиш време.',
  },
  {
    num: '02', day: 'ПЕТЪК', date: '26 Юни',
    title: 'Влизаме в анализа',
    description: 'Ще видиш как анализираме истински обяви в реално време. Получаваш точните формули за бърза оценка на място и имот.',
  },
  {
    num: '03', day: 'СЪБОТА', date: '27 Юни',
    title: 'От теория към действие — първите стъпки',
    description: 'Финална 2.5-часова сесия, превръщаща всичко в конкретен план. Получаваш системата, списъците и точните стъпки от понеделник нататък.',
  },
  {
    num: '04', day: 'НЕДЕЛЯ', date: '28 Юни',
    title: 'Застраховане + Инвестиране в чужбина',
    description: 'Бонус ден — разкривам как да защитиш инвестицията и как да инвестираш в Германия и Швейцария.',
    isBonus: true,
  },
];

export default function EventSchedule() {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden" style={{ background: 'rgba(6,21,38,0.55)' }}>
      <div className="absolute top-0 inset-x-0 h-px divider-gold" />
      <div className="absolute bottom-0 inset-x-0 h-px divider-gold" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 sm:mb-16">
          <span className="section-label mb-4">Хронология</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mt-4">
            Как ще протекат <span className="text-amber-400">4-те дни</span>
          </h2>
        </div>

        <div className="space-y-4 mb-14">
          {schedule.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border p-6 sm:p-8 transition-all duration-300 overflow-hidden"
              style={item.isBonus
                ? { background: 'rgba(8,30,46,0.75)', borderColor: 'rgba(20,184,166,0.25)' }
                : { background: 'rgba(10,32,64,0.55)', borderColor: 'rgba(30,64,102,0.60)' }
              }
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" style={{ background: 'linear-gradient(90deg, rgba(245,158,11,0.05) 0%, transparent 60%)' }} />

              <div className="flex flex-col sm:flex-row gap-6 sm:items-start relative z-10">
                <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:w-36 flex-shrink-0">
                  <span className="text-5xl sm:text-6xl font-black leading-none select-none transition-colors duration-400 group-hover:text-amber-500/20" style={{ color: 'rgba(14,45,87,0.90)' }}>
                    {item.num}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-bold tracking-widest uppercase text-amber-400">
                        {item.day}
                      </p>
                      {item.isBonus && (
                        <span className="text-[9px] font-black uppercase border px-1.5 py-0.5 rounded" style={{ background: 'rgba(20,184,166,0.15)', color: 'rgb(94,234,212)', borderColor: 'rgba(20,184,166,0.30)' }}>БОНУС</span>
                      )}
                    </div>
                    <p className="text-blue-300/60 text-sm">{item.date}</p>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-3 group-hover:text-amber-50 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-blue-100/70 leading-relaxed mb-5 text-base">{item.description}</p>
                  <button
                    onClick={initiateCheckout}
                    className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-lg border transition-all duration-200 hover:text-slate-900 hover:bg-amber-400"
                    style={{ borderColor: 'rgba(245,158,11,0.35)', color: 'rgb(251,191,36)' }}
                  >
                    Запиши се →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA after schedule */}
        <div className="text-center">
          <div className="relative inline-block mb-6">
            <div className="absolute -inset-3 rounded-3xl blur-2xl" style={{ background: 'rgba(245,158,11,0.18)' }} />
            <p className="relative text-blue-100/70 text-lg">
              Готов да влезеш в 4-те дни? <span className="text-amber-400 font-bold">Местата са ограничени.</span>
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={initiateCheckout}
              className="btn-shimmer group relative px-10 py-5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-900 text-xl font-black rounded-xl hover:from-amber-400 hover:to-amber-500 active:scale-95 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-amber-500/40"
            >
              <span className="relative z-10 flex items-center gap-3">
                ЗАПИШИ СЕ СЕГА
                <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">→</span>
              </span>
            </button>
          </div>
          <div className="mt-5 flex justify-center">
            <GuaranteeBadge />
          </div>
        </div>
      </div>
    </section>
  );
}
