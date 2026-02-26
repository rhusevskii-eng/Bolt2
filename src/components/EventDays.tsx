import { MapPin, TrendingUp, Target, Palmtree } from 'lucide-react';

const days = [
  {
    day: 'ДЕН 1',
    date: '13 Март - Петък',
    time: '19:00 часа',
    icon: MapPin,
    title: 'ИНВЕСТИЦИОННИ СТРАТЕГИИ, ЛОКАЦИИ И РЕАЛНИ ПРИМЕРИ',
    description: 'Ще разбереш различните инвестиционни стратегии, как работи всяка една от тях и кога е правилният момент да я използваш, какви рискове носи, и как да избереш подхода, който ти пасва спрямо целите и капитала ти.',
    bullets: [
      'Ще ти покажа развитите квартали, където вече е скъпо, НО и онези, които тепърва ще избухнат',
      'Местата, където днес влизаш евтино, а утре взимаш ръст, който другите дори няма да усетят',
      'Ще видиш 3 мои реални сделки и точно какво направих добре, какво пропуснах и къде сгреших'
    ]
  },
  {
    day: 'ДЕН 2',
    date: '14 Март - Събота',
    time: '19:00 часа',
    icon: TrendingUp,
    title: 'КАК СЕ АНАЛИЗИРА ИМОТ? ДОБЪР И ЛОШ',
    description: 'Повечето хора се загубват в безкраен анализ и пропускат добри сделки докато мислят. Аз използвам специална формула за всеки имот с която се фокусирам върху 3-ключови неща.',
    bullets: [
      'Ще разбием мита в, който много хора вярват "важна е локацията"',
      'Ще ти покажа върху какво наистина трябва да се фокусираш, за да имаш максимална печалба',
      'Показвам ти кои точно 3 числа носят почти цялата информация за всеки имот и как да ги изчислиш за минути'
    ]
  },
  {
    day: 'ДЕН 3',
    date: '15 Март - Неделя',
    time: '19:00 часа',
    icon: Target,
    title: 'СИСТЕМАТА, КОЯТО РАБОТИ',
    description: 'Давам ти точната система от СТЪПКИ, която лично аз следвам при всеки имот - ясен, структуриран процес от момента в който видиш обявата до момента в който подписваш предварителен договор.',
    bullets: [
      'Списък с НАЙ-ВАЖНИТЕ неща, които проверявам при всеки строител',
      'Точните ПРАВИЛА за ПРЕГОВОРИ, които лично аз използвам',
      'Най-честите знаци за сериозен проблем при имот и кога да бягаш веднага'
    ]
  },
  {
    day: 'ДЕН 4',
    date: '16 Март - Понеделник',
    time: '19:00 часа',
    icon: Palmtree,
    title: 'ДУБАЙ - МЕЖДУНАРОДНИ ВЪЗМОЖНОСТИ',
    description: 'Специален бонус ден, в който разкривам как инвестирам в Дубай, какви са възможностите на международния пазар и как можеш да диверсифицираш портфолиото си извън България.',
    bullets: [
      'Защо Дубай е перфектна възможност за инвеститори с визия',
      'Как работи пазарът в Дубай и какви са реалните числа',
      'Моят личен опит и стъпки за инвестиция в чужбина'
    ],
    isBonus: true
  }
];

export default function EventDays() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ето какво ще разбереш през 4-те дни
          </h2>
          <p className="text-xl text-slate-300">от живото обучение</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {days.map((day, index) => {
            const Icon = day.icon;
            const isDubai = day.isBonus;
            return (
              <div
                key={index}
                className={`group relative ${
                  isDubai
                    ? 'bg-gradient-to-br from-teal-900/70 via-teal-800/50 to-amber-900/60'
                    : 'bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60'
                } backdrop-blur-sm border ${
                  isDubai ? 'border-teal-500/60' : 'border-slate-700/60'
                } rounded-2xl p-8 ${
                  isDubai ? 'hover:border-teal-400/80' : 'hover:border-amber-500/60'
                } transition-all duration-500 hover:transform hover:-translate-y-3 shadow-xl hover:shadow-2xl ${
                  isDubai ? 'hover:shadow-teal-500/30' : 'hover:shadow-amber-500/20'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  isDubai
                    ? 'from-teal-500/15 via-amber-500/10 to-transparent'
                    : 'from-amber-500/10 via-amber-600/5 to-transparent'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                <div className={`absolute top-0 right-0 w-32 h-32 ${
                  isDubai ? 'bg-teal-400/15' : 'bg-amber-500/10'
                } rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex flex-col gap-2">
                      <span className={`px-4 py-2 bg-gradient-to-r ${
                        isDubai
                          ? 'from-teal-500/30 to-amber-500/30 border-teal-400/50 text-teal-300'
                          : 'from-amber-500/20 to-amber-600/20 border-amber-500/40 text-amber-400'
                      } border rounded-full text-sm font-bold tracking-wider backdrop-blur-sm`}>{day.day}</span>
                      {isDubai && (
                        <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 text-xs font-black rounded-full shadow-lg shadow-amber-500/40 animate-pulse">
                          БОНУС
                        </span>
                      )}
                    </div>
                    <div className={`p-3 bg-gradient-to-br ${
                      isDubai
                        ? 'from-teal-500/30 to-amber-500/30'
                        : 'from-amber-500/20 to-amber-600/20'
                    } rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 ${isDubai ? 'text-teal-300' : 'text-amber-400'}`} />
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className={`flex items-center gap-2 ${isDubai ? 'text-teal-200' : 'text-slate-300'}`}>
                      <span className="text-sm">🗓️</span>
                      <span className="font-medium">{day.date}</span>
                    </div>
                    <div className={`flex items-center gap-2 ${isDubai ? 'text-teal-200' : 'text-slate-300'}`}>
                      <span className="text-sm">⏰</span>
                      <span className="font-medium">{day.time}</span>
                    </div>
                  </div>

                  <h3 className={`text-xl font-bold mb-4 leading-tight ${isDubai ? 'text-teal-100' : 'text-white'}`}>
                    {day.title}
                  </h3>

                  <p className={`mb-6 leading-relaxed ${isDubai ? 'text-teal-100' : 'text-slate-300'}`}>
                    {day.description}
                  </p>

                  <ul className="space-y-3">
                    {day.bullets.map((bullet, i) => (
                      <li key={i} className={`flex items-start gap-3 text-sm ${isDubai ? 'text-teal-100' : 'text-slate-300'}`}>
                        <span className={`mt-1 ${isDubai ? 'text-teal-400' : 'text-amber-500'}`}>✓</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
