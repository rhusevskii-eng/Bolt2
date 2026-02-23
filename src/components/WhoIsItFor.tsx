import { CheckCircle2, XCircle } from 'lucide-react';

const forYou = [
  {
    title: 'Имаш капитал но нямаш яснота',
    description: 'Имаш между 30-50 хиляди евро настрана, но не знаеш как да ги използваш за имоти без да направиш скъпа грешка.'
  },
  {
    title: 'Искаш да започнеш, и да действаш',
    description: 'Не търсиш теория и вдъхновение. Търсиш конкретна система, ясни стъпки, и реални примери.'
  },
  {
    title: 'Работиш на пълен работен ден',
    description: 'Нямаш цял ден да се ровиш в обяви. Искаш ефективна система която можеш да приложиш с ограничено време.'
  },
  {
    title: 'Готов си да действаш бързо',
    description: 'Когато получиш ясна информация и система, не чакаш "перфектния момент". Искаш да започнеш в рамките на седмици.'
  },
  {
    title: 'Искаш пасивен доход и сигурност',
    description: 'Разбираш че имотите са едно от малкото неща които носят стабилен пасивен доход и дългосрочна сигурност.'
  }
];

const notForYou = [
  {
    title: 'Не искаш да научиш нови неща',
    description: 'Ако не искаш да учиш от най-добрите и да разбереш какви нови типове инвестиции има в имотите...това не е за теб.'
  },
  {
    title: 'Търсиш "бързо забогатяване"',
    description: 'Ако очакваш да станеш милионер за 6 месеца или търсиш "хак" за безрискови печалби, това не е за теб.'
  },
  {
    title: 'Не си готов да инвестираш време',
    description: 'Ако не можеш да отделиш 6 часа за 3 дни на живо срещи и още няколко часа след това за действие, по-добре не започвай.'
  },
  {
    title: 'Искаш само да "научиш повече"',
    description: 'Ако събираш информация без намерение да действаш в рамките на следващите 1-2 месеца, това ще е загуба на време.'
  },
  {
    title: 'Очакваш да работи без твое участие',
    description: 'Ако търсиш напълно пасивна инвестиция без никакво твое участие в началото - това не е то.'
  }
];

export default function WhoIsItFor() {
  return (
    <section className="py-16 sm:py-24 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-16">
          ЗА КОГО Е ТОВА ОБУЧЕНИЕ
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="group relative bg-gradient-to-br from-emerald-900/30 via-emerald-800/20 to-slate-900/50 backdrop-blur-sm border-2 border-emerald-500/40 rounded-2xl p-8 hover:border-emerald-400/60 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20">
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl opacity-50" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-emerald-500/30 to-emerald-600/30 rounded-xl backdrop-blur-sm">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  ТОВА Е ЗА ТЕБ АКО:
                </h3>
              </div>

              <div className="space-y-6">
                {forYou.map((item, index) => (
                  <div key={index} className="group/item p-4 bg-slate-800/40 backdrop-blur-sm border border-emerald-500/20 rounded-xl hover:border-emerald-500/40 hover:bg-slate-800/60 transition-all duration-300">
                    <h4 className="text-lg font-bold text-emerald-400 mb-2 group-hover/item:text-emerald-300 transition-colors flex items-start gap-2">
                      <span className="text-emerald-500 text-xl mt-0.5">✓</span>
                      {item.title}
                    </h4>
                    <p className="text-slate-300 leading-relaxed pl-7">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-red-900/30 via-red-800/20 to-slate-900/50 backdrop-blur-sm border-2 border-red-500/40 rounded-2xl p-8 hover:border-red-400/60 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-red-500/20">
            <div className="absolute top-0 left-0 w-40 h-40 bg-red-500/10 rounded-full blur-3xl opacity-50" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-red-500/30 to-red-600/30 rounded-xl backdrop-blur-sm">
                  <XCircle className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  ТОВА НЕ Е ЗА ТЕБ АКО:
                </h3>
              </div>

              <div className="space-y-6">
                {notForYou.map((item, index) => (
                  <div key={index} className="group/item p-4 bg-slate-800/40 backdrop-blur-sm border border-red-500/20 rounded-xl hover:border-red-500/40 hover:bg-slate-800/60 transition-all duration-300">
                    <h4 className="text-lg font-bold text-red-400 mb-2 group-hover/item:text-red-300 transition-colors flex items-start gap-2">
                      <span className="text-red-500 text-xl mt-0.5">✗</span>
                      {item.title}
                    </h4>
                    <p className="text-slate-300 leading-relaxed pl-7">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
