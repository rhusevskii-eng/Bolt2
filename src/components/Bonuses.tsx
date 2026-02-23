import { Gift, MapPin, Globe, TrendingUp, Building } from 'lucide-react';
import { initiateCheckout } from '../utils/checkout';

const bonuses = [
  {
    icon: MapPin,
    title: '5-те най-добри района в България за инвестиция',
    value: '150 евро',
    description: 'Петте района с най-добър потенциал за следващите 3-5 години - конкретни квартали, точно обяснение защо, какво да търсиш, кои цени са разумни, какви предупредителни знаци да следиш. Виждаш как оценявам район - кои 7 фактора проверявам, къде гледам данни, как разбирам дали е на възход или препечен.'
  },
  {
    icon: Globe,
    title: 'Как да инвестираш извън България и да създадеш милионно портфолио',
    value: '254 евро',
    description: 'Цялата система за инвестиции в чужбина - как избрах Германия, Швейцария и Дубай, какво проверявам преди нов пазар, как управлявам от разстояние, как избягвам капаните за чуждестранни инвеститори. Реални числа от моите имоти - доходности, разходи, данъци. Пътна карта за излизане извън България.'
  },
  {
    icon: TrendingUp,
    title: 'Какво се случва след еврото',
    value: '101 евро',
    description: 'Какво се случи в други източноевропейски страни при въвеждане на еврото, какви възможности се появиха, кои инвеститори спечелиха. Конкретна стратегия как да се позиционираш СЕГА - кои имоти ще се възползват най-много, кои райони ще видят ръст, какво да правиш в следващите 12-24 месеца.'
  },
  {
    icon: Building,
    title: '4-ти ден - Навлизаме напълно в Дубай',
    value: '203 евро',
    description: 'Специален бонус ден, посветен изцяло на пазара в Дубай. Как работи имотният пазар там, какви са специфичните правила и регулации, как се избират райони, какви са данъците и разходите, и как да направиш първата си инвестиция в един от най-динамичните имотни пазари в света.'
  }
];

export default function Bonuses() {
  return (
    <section id="register" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Моментът на истината...
          </h2>
          <p className="text-xl text-slate-300">Какво получаваш ако се включиш в 4-дневното обучение?</p>
        </div>

        <div className="relative group bg-gradient-to-br from-amber-900/40 via-amber-800/20 to-slate-900/50 backdrop-blur-sm border-2 border-amber-500/60 rounded-2xl p-8 sm:p-12 mb-8 shadow-2xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-500">
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-600/20 rounded-full blur-2xl" />

          <div className="relative z-10 flex items-start gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-amber-500/30 to-amber-600/30 rounded-xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
              <Gift className="w-10 h-10 text-amber-400 flex-shrink-0" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Достъп до 4-дневното обучение!
              </h3>
              <p className="text-slate-200 leading-relaxed text-lg">
                Четири вечери по 2-2.5 часа интензивна работа на живо. Задаваш въпроси в реално време, виждаш как анализирам имоти, квартали и ситуации, получаваш директен достъп до мен и специалния гост с милионно портфолио. Не уебинар - работна сесия където изграждаме фундамента на твоята система.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 mb-12">
          {bonuses.map((bonus, index) => {
            const Icon = bonus.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-sm border-2 border-slate-700/60 rounded-2xl p-6 sm:p-8 hover:border-amber-500/60 transition-all duration-500 hover:transform hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-amber-500/20"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon className="w-10 h-10 text-slate-900" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-white">БОНУС {index + 1}:</h3>
                      <span className="px-4 py-1.5 bg-gradient-to-r from-amber-500/30 to-amber-600/30 border border-amber-500/50 rounded-full text-amber-400 text-sm font-semibold backdrop-blur-sm">
                        стойност {bonus.value}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-amber-400 mb-3 group-hover:text-amber-300 transition-colors">
                      {bonus.title}
                    </h4>

                    <p className="text-slate-300 leading-relaxed">
                      {bonus.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative group bg-gradient-to-br from-amber-900/40 via-amber-800/30 to-slate-900/50 backdrop-blur-sm border-2 border-amber-500/60 rounded-3xl p-8 sm:p-12 text-center shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/40 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent rounded-3xl" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 space-y-8">
            <div>
              <p className="text-slate-400 text-xl mb-2">ОБЩА СТОЙНОСТ:</p>
              <p className="text-4xl sm:text-5xl font-bold text-slate-500 line-through mb-4">708 евро</p>
            </div>

            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 blur-2xl opacity-40 animate-pulse" />
              <div className="relative px-8 py-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border-2 border-amber-500/50 rounded-2xl">
                <p className="text-2xl text-amber-400 font-bold mb-3">ЗАКУПИ САМО СЕГА ЗА</p>
                <p className="text-6xl sm:text-8xl font-bold text-white tracking-tight">
                  37€
                </p>
              </div>
            </div>

            <button
              onClick={initiateCheckout}
              className="group/btn relative z-50 px-12 py-6 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-900 text-xl sm:text-2xl font-bold rounded-xl hover:from-amber-400 hover:to-amber-500 active:scale-95 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-amber-500/50 hover:shadow-amber-400/70 touch-manipulation cursor-pointer"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                ЗАПОЧНИ ДА ИНВЕСТИРАШ ПРАВИЛНО!
                <span className="text-2xl group-hover/btn:translate-x-2 transition-transform">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-500 rounded-xl blur-lg opacity-50 group-hover/btn:opacity-75 transition-opacity" />
            </button>

            <div className="pt-8 border-t-2 border-amber-500/30 mt-8 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl">🛡️</span>
                <p className="text-xl text-amber-400 font-bold">
                  Гаранция за връщане на парите
                </p>
              </div>
              <p className="text-slate-200 text-lg max-w-2xl mx-auto">
                Ако се появиш и на 4-те дни и не останеш доволен от стойността, която си получил,
                ще възвърнем сумата без никакви въпроси!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
