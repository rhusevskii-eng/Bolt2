import { MapPin, TrendingUp, Target, Globe } from 'lucide-react';

const days = [
  {
    num: '01', day: 'ДЕН 1', date: 'Четвъртък, 25 Юни', time: '19:00', icon: MapPin,
    title: 'ИНВЕСТИЦИОННИ СТРАТЕГИИ, ЛОКАЦИИ И РЕАЛНИ ПРИМЕРИ',
    description: 'Ще разбереш различните инвестиционни стратегии, как работи всяка една от тях и кога е правилният момент да я използваш, какви рискове носи, и как да избереш подхода, който ти пасва спрямо целите и капитала ти.',
    bullets: [
      'Ще ти покажа развитите квартали, където вече е скъпо, НО и онези, които тепърва ще избухнат',
      'Местата, където днес влизаш евтино, а утре взимаш ръст, който другите дори няма да усетят',
      'Ще видиш 3 мои реални сделки и точно какво направих добре, какво пропуснах и къде сгреших',
    ],
  },
  {
    num: '02', day: 'ДЕН 2', date: 'Петък, 26 Юни', time: '19:00', icon: TrendingUp,
    title: 'КАК СЕ АНАЛИЗИРА ИМОТ? ДОБЪР И ЛОШ',
    description: 'Повечето хора се загубват в безкраен анализ и пропускат добри сделки докато мислят. Аз използвам специална формула за всеки имот, с която се фокусирам върху 3 ключови неща.',
    bullets: [
      'Ще разбием мита, в който много хора вярват — "важна е локацията"',
      'Ще ти покажа върху какво наистина трябва да се фокусираш, за да имаш максимална печалба',
      'Показвам ти кои точно 3 числа носят почти цялата информация за всеки имот и как да ги изчислиш за минути',
    ],
  },
  {
    num: '03', day: 'ДЕН 3', date: 'Събота, 27 Юни', time: '19:00', icon: Target,
    title: 'СИСТЕМАТА, КОЯТО РАБОТИ',
    description: 'Давам ти точната система от стъпки, която лично аз следвам при всеки имот — ясен, структуриран процес от момента в който видиш обявата до момента в който подписваш предварителен договор.',
    bullets: [
      'Списък с НАЙ-ВАЖНИТЕ неща, които проверявам при всеки строител',
      'Точните ПРАВИЛА за ПРЕГОВОРИ, които лично аз използвам',
      'Най-честите знаци за сериозен проблем при имот и кога да бягаш веднага',
    ],
  },
  {
    num: '04', day: 'ДЕН 4', date: 'Неделя, 28 Юни', time: '19:00', icon: Globe, isBonus: true,
    title: 'ЗАСТРАХОВАНЕ ПРИ ИМОТИТЕ + ИНВЕСТИРАНЕ В ЧУЖБИНА',
    description: 'Специален бонус ден, в който разкривам как да защитиш инвестицията си чрез правилното застраховане и как да инвестираш на международните пазари в Германия и Швейцария.',
    bullets: [
      'Как работи застраховането при имотни инвестиции и какви рискове покрива',
      'Германия и Швейцария — как работят пазарите, какви са реалните числа и входни бариери',
      'Стъпки за първа инвестиция в чужбина и как да диверсифицираш портфолиото си',
    ],
  },
];

export default function EventDays() {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px divider-gold" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 sm:mb-20">
          <span className="section-label mb-4">Програма на обучението</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mt-4">
            Ето какво ще разбереш<br />
            <span className="text-amber-400">през 4-те дни</span>
          </h2>
        </div>

        <div className="space-y-0">
          {days.map((day, index) => {
            const Icon = day.icon;
            const accentColor = day.isBonus ? 'teal' : 'amber';
            return (
              <div
                key={index}
                className="group relative border-t border-slate-700/60 py-10 sm:py-12 hover:border-amber-500/40 transition-colors duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12">
                  {/* Number + meta */}
                  <div className="flex items-start gap-5 lg:w-56 flex-shrink-0">
                    <span className="text-7xl sm:text-8xl font-black text-slate-700/80 group-hover:text-amber-500/20 leading-none transition-colors duration-500 select-none -mt-2 flex-shrink-0">
                      {day.num}
                    </span>
                    <div className="pt-1 flex-shrink-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="section-label">{day.day}</span>
                        {day.isBonus && (
                          <span className="text-[9px] font-black tracking-widest uppercase px-1.5 py-0.5 bg-amber-500 text-slate-900 rounded">
                            БОНУС
                          </span>
                        )}
                      </div>
                      <p className="text-slate-400 text-sm">{day.date}</p>
                      <p className="text-amber-400 text-sm font-bold">{day.time} ч.</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`p-2.5 rounded-xl flex-shrink-0 mt-0.5 ${accentColor === 'teal' ? 'bg-teal-500/20 border border-teal-500/30' : 'bg-amber-500/20 border border-amber-500/30'}`}>
                        <Icon className={`w-5 h-5 ${accentColor === 'teal' ? 'text-teal-400' : 'text-amber-400'}`} />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white leading-tight group-hover:text-amber-50 transition-colors">
                        {day.title}
                      </h3>
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-6 text-base max-w-2xl">{day.description}</p>

                    <div className="grid sm:grid-cols-3 gap-3">
                      {day.bullets.map((bullet, i) => (
                        <div key={i} className={`flex items-start gap-2.5 p-4 rounded-xl border transition-colors ${
                          accentColor === 'teal'
                            ? 'bg-teal-900/30 border-teal-700/50 group-hover:border-teal-600/60'
                            : 'bg-slate-800/70 border-slate-600/50 group-hover:border-amber-500/30'
                        }`}>
                          <span className={`flex-shrink-0 font-bold text-sm mt-0.5 ${accentColor === 'teal' ? 'text-teal-400' : 'text-amber-400'}`}>✓</span>
                          <span className="text-slate-200 text-sm leading-snug">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="border-t border-slate-700/60" />
        </div>
      </div>
    </section>
  );
}
