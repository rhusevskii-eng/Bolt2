import { initiateCheckout } from '../utils/checkout';

export default function EventSchedule() {
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

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden bg-white/[0.015]">
      <div className="absolute top-0 inset-x-0 h-px divider-gold" />
      <div className="absolute bottom-0 inset-x-0 h-px divider-gold" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 sm:mb-16">
          <span className="section-label mb-4">Хронология</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mt-4">
            Как ще протекат <span className="text-amber-400">4-те дни</span>
          </h2>
        </div>

        <div className="space-y-4">
          {schedule.map((item, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl border p-6 sm:p-8 transition-all duration-300 overflow-hidden ${
                item.isBonus
                  ? 'border-teal-500/25 bg-teal-500/[0.04] hover:border-teal-500/40'
                  : 'border-white/8 bg-white/[0.02] hover:border-amber-500/25'
              }`}
            >
              <div className="flex flex-col sm:flex-row gap-6 sm:items-start relative z-10">
                <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:w-36 flex-shrink-0">
                  <span className={`text-5xl sm:text-6xl font-black leading-none transition-colors ${item.isBonus ? 'text-teal-500/15 group-hover:text-teal-500/25' : 'text-white/8 group-hover:text-amber-500/12'}`}>
                    {item.num}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className={`text-xs font-bold tracking-widest uppercase ${item.isBonus ? 'text-teal-400' : 'text-amber-400'}`}>
                        {item.day}
                      </p>
                      {item.isBonus && (
                        <span className="text-[9px] font-black uppercase bg-teal-500/20 text-teal-300 border border-teal-500/30 px-1.5 py-0.5 rounded">БОНУС</span>
                      )}
                    </div>
                    <p className="text-slate-400 text-sm">{item.date}</p>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-3 group-hover:text-amber-50 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-5 text-base">{item.description}</p>
                  <button
                    onClick={initiateCheckout}
                    className={`inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-lg border transition-all duration-200 ${
                      item.isBonus
                        ? 'border-teal-500/30 text-teal-400 hover:bg-teal-500/10'
                        : 'border-amber-500/30 text-amber-400 hover:bg-amber-500/10'
                    }`}
                  >
                    Запиши се →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
