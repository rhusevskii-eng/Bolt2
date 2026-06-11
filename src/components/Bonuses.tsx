import { Gift, MapPin, Globe, Video, Hammer } from 'lucide-react';
import { initiateCheckout } from '../utils/checkout';

type Bonus = {
  icon: React.ElementType;
  title: string;
  value: string;
  description: string;
  image?: string;
};

const bonuses: Bonus[] = [
  {
    icon: MapPin,
    title: '5-те най-добри района в България за инвестиция',
    value: '150 евро',
    description: 'Петте района с най-добър потенциал за следващите 3-5 години - конкретни квартали, точно обяснение защо, какво да търсиш, кои цени са разумни, какви предупредителни знаци да следиш. Виждаш как оценявам район - кои 7 фактора проверявам, откъде гледам данни, как разбирам дали е на възход или препечен.'
  },
  {
    icon: Globe,
    title: 'Как да инвестираш извън България и да създадеш милионно портфолио',
    value: '254 евро',
    description: 'Цялата система за инвестиции в чужбина - как избрах Германия, Швейцария и Дубай, какво проверявам преди нов пазар, как управлявам от разстояние, как избягвам капаните за чуждестранни инвеститори. Реални числа от моите имоти - доходности, разходи, данъци. Пътна карта за излизане извън България.'
  },
  {
    icon: Video,
    title: 'Пълен 6-часов запис на живото събитие "Квадратни Метри 2026" в "Гранд Хотел Милениум"',
    value: '147 евро',
    description: 'Получаваш пълен достъп до целия запис на едно от най-големите събития за инвеститори в имоти в България. 6 часа концентрирано съдържание, презентации и дискусии от живото събитие в Гранд Хотел Милениум.',
    image: '/IMG_0124.jpg',
  },
  {
    icon: Hammer,
    title: '3-часова жива лекция в София + обиколка на Fix & Flip проекта "Виста"',
    value: '297 евро',
    description: 'Първо — 3-часова лекция На Живо в София, където ще можеш да задаваш въпроси в реално време. После — реална обиколка на Fix & Flip проекта "Виста": виждаш с очите си как изглежда работещ проект на терен, с конкретни числа, взети решения и допуснати грешки.'
  },
];

export default function Bonuses() {
  return (
    <section id="register" className="py-20 sm:py-32 relative overflow-hidden" style={{ background: 'rgba(6,21,38,0.55)' }}>
      <div className="absolute top-0 inset-x-0 h-px divider-gold" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 sm:mb-16">
          <span className="section-label mb-4">Момент на истината</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mt-4">
            Какво получаваш<br />
            <span className="text-amber-400">при включване?</span>
          </h2>
        </div>

        {/* Main offer card */}
        <div className="relative rounded-2xl border p-8 sm:p-10 mb-6 overflow-hidden" style={{ background: 'rgba(30,20,5,0.60)', borderColor: 'rgba(245,158,11,0.40)' }}>
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(245,158,11,0.12)' }} />
          <div className="relative z-10 flex items-start gap-4">
            <div className="p-4 rounded-xl flex-shrink-0" style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.25)' }}>
              <Gift className="w-10 h-10 text-amber-400" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                Достъп до 4-дневното обучение!
              </h3>
              <p className="text-blue-100/75 leading-relaxed text-lg">
                Четири вечери по 2–2.5 часа интензивна работа на живо. Задаваш въпроси в реално време, виждаш как анализирам имоти, квартали и ситуации, получаваш директен достъп до мен и специалния гост с милионно портфолио. Не уебинар — работна сесия, където изграждаме фундамента на твоята система.
              </p>
            </div>
          </div>
        </div>

        {/* Bonuses */}
        <div className="space-y-4 mb-12">
          {bonuses.map((bonus, index) => {
            const Icon = bonus.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden border transition-all duration-300"
                style={{ background: 'rgba(10,32,64,0.55)', borderColor: 'rgba(30,64,102,0.60)' }}
              >
                {bonus.image && (
                  <div className="relative w-full h-72 sm:h-96 overflow-hidden">
                    <img
                      src={bonus.image}
                      alt={bonus.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,18,31,1) 0%, rgba(7,30,56,0.30) 50%, transparent 100%)' }} />
                  </div>
                )}

                <div className="relative z-10 flex flex-col sm:flex-row gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon className="w-8 h-8 text-slate-900" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-black text-white">БОНУС {index + 1}:</h3>
                      <span className="px-3 py-1 rounded-full text-amber-400 text-sm font-bold border" style={{ background: 'rgba(245,158,11,0.12)', borderColor: 'rgba(245,158,11,0.30)' }}>
                        стойност {bonus.value}
                      </span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-amber-400 mb-3">{bonus.title}</h4>
                    <p className="text-blue-100/70 leading-relaxed">{bonus.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final CTA */}
        <div className="relative rounded-3xl border p-8 sm:p-12 text-center overflow-hidden" style={{ background: 'rgba(30,20,5,0.65)', borderColor: 'rgba(245,158,11,0.45)' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(245,158,11,0.10) 0%, transparent 60%)' }} />

          <div className="relative z-10 space-y-8">
            <div>
              <p className="text-blue-300/60 text-xl mb-2">ОБЩА СТОЙНОСТ:</p>
              <p className="text-4xl sm:text-5xl font-bold line-through mb-4" style={{ color: 'rgba(100,116,139,0.60)' }}>848 евро</p>
            </div>

            <div className="relative inline-block">
              <div className="absolute -inset-4 rounded-3xl blur-2xl" style={{ background: 'rgba(245,158,11,0.20)' }} />
              <div className="relative px-8 py-6 rounded-2xl border" style={{ background: 'rgba(10,32,64,0.85)', borderColor: 'rgba(245,158,11,0.45)' }}>
                <p className="text-2xl text-amber-400 font-bold mb-3">ЗАКУПИ САМО СЕГА ЗА</p>
                <p className="text-6xl sm:text-8xl font-black text-white tracking-tight">37€</p>
              </div>
            </div>

            <button
              onClick={initiateCheckout}
              className="btn-shimmer group/btn relative z-50 px-12 py-6 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-900 text-xl sm:text-2xl font-black rounded-xl hover:from-amber-400 hover:to-amber-500 active:scale-95 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-amber-500/40"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                ЗАПОЧНИ ДА ИНВЕСТИРАШ ПРАВИЛНО!
                <span className="text-2xl group-hover/btn:translate-x-2 transition-transform">→</span>
              </span>
            </button>

            <div className="pt-8 mt-4" style={{ borderTop: '1px solid rgba(245,158,11,0.25)' }}>
              <p className="text-xl text-amber-400 font-bold mb-2">Гаранция за връщане на парите</p>
              <p className="text-blue-100/75 text-lg max-w-2xl mx-auto">
                Ако се появиш и на 4-те дни и не останеш доволен от стойността, ще възвърнем сумата без никакви въпроси!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
