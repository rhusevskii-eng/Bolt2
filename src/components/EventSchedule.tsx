import { Calendar } from 'lucide-react';
import { initiateCheckout } from '../utils/checkout';

const schedule = [
  {
    day: 'ДЕН 1',
    dayName: 'ПЕТЪК',
    date: '13 Март',
    title: 'Разбиваме митовете и разкриваме механиката',
    description: 'Ще седнем на живо за 2 часа и ще разбием всички митове за имотите. Ще ти покажа как наистина работи играта, откъде идва печалбата, и как да разпознаваш потенциалните квартали, добра сделка от лоша без да губиш време в безкрайни анализи и огледи.'
  },
  {
    day: 'ДЕН 2',
    dayName: 'СЪБОТА',
    date: '14 Март',
    title: 'Влизаме в анализа',
    description: 'Ще седнем отново на живо за 2 часа. Ще видиш как анализираме истински обяви в реално време и ще получиш точните формули които използваме за бърза оценка на място и имот.'
  },
  {
    day: 'ДЕН 3',
    dayName: 'НЕДЕЛЯ',
    date: '15 Март',
    title: 'От теория към действие – първите стъпки',
    description: 'Финална 2.5 часова сесия където превръщаме всичко научено в конкретен план за действие. Ще получиш цялата система, всички списъци, точните стъпки, и план какво да правиш от понеделник нататък за да не изчезнеш обратно в ежедневието.'
  },
  {
    day: 'ДЕН 4',
    dayName: 'ПОНЕДЕЛНИК',
    date: '16 Март',
    title: 'Дубай - Международни възможности',
    description: 'Специален бонус ден, в който ще разкрия як инвестирам в Дубай, какви са възможностите на международния пазар и как можеш да диверсифицираш портфолиото си извън България. Ще видиш реални числа, процеси и моя личен опит от инвестиции в чужбина.'
  }
];

export default function EventSchedule() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ето как ще протекат 4-те дни!
          </h2>
        </div>

        <div className="space-y-6">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-sm border-2 border-slate-700/60 rounded-2xl p-6 sm:p-8 hover:border-amber-500/60 transition-all duration-500 hover:transform hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-amber-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-amber-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-amber-500 via-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Calendar className="w-12 h-12 text-slate-900" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-amber-500/30 to-amber-600/30 border border-amber-500/50 rounded-full text-amber-400 text-sm font-bold backdrop-blur-sm">{item.day}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-white font-bold text-lg">{item.dayName}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-300">{item.date}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                    {item.description}
                  </p>

                  <button
                    onClick={initiateCheckout}
                    className="group/btn px-6 py-3 bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/40 text-amber-400 font-bold rounded-lg hover:from-amber-500 hover:to-amber-600 hover:text-slate-900 transition-all duration-300 inline-flex items-center gap-2 backdrop-blur-sm"
                  >
                    Запиши се!
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
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
