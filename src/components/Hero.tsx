import { Calendar, Clock, TrendingUp } from 'lucide-react';
import { initiateCheckout } from '../utils/checkout';
import { trackEvent } from '../utils/googleAnalytics';

export default function Hero() {
  const handleCheckoutClick = () => {
    trackEvent('begin_checkout', {
      currency: 'EUR',
      value: 37,
      items: [{ item_id: 'real-estate-mastery', item_name: 'Real Estate Mastery Course', price: 37, quantity: 1 }]
    });
    initiateCheckout();
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
      />
      {/* Navy overlay — not black */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(5,18,31,0.94) 0%, rgba(7,30,56,0.90) 50%, rgba(5,18,31,0.96) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #05121f 0%, transparent 40%)' }} />

      {/* Amber glows */}
      <div className="absolute top-1/4 left-[10%] w-[500px] h-[500px] bg-amber-500/12 rounded-full blur-[120px] animate-glow-pulse pointer-events-none" />
      <div className="absolute top-[10%] right-[5%] w-[350px] h-[350px] bg-amber-600/8 rounded-full blur-[100px] animate-glow-pulse pointer-events-none" style={{ animationDelay: '1.5s' }} />

      {/* Corner accents */}
      <div className="absolute top-6 left-6 w-14 h-14 border-t-2 border-l-2 border-amber-500/30 pointer-events-none" />
      <div className="absolute top-6 right-6 w-14 h-14 border-t-2 border-r-2 border-amber-500/30 pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-14 h-14 border-b-2 border-l-2 border-amber-500/30 pointer-events-none hidden sm:block" />
      <div className="absolute bottom-6 right-6 w-14 h-14 border-b-2 border-r-2 border-amber-500/30 pointer-events-none hidden sm:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative z-10 w-full">
        <div className="text-center space-y-8">

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-amber-500/40" style={{ background: 'rgba(245,158,11,0.12)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-400 text-sm font-bold tracking-wide uppercase">
              Специално за амбициозни професионалисти
            </span>
            <TrendingUp className="w-4 h-4 text-amber-400" />
          </div>

          {/* Headline */}
          <div>
            <p className="text-blue-200/70 text-xl sm:text-2xl font-medium mb-3">4-Дневно Онлайн Обучение</p>
            <h1 className="font-black leading-none tracking-tight">
              <span className="block text-amber-400 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-1">
                "REAL ESTATE
              </span>
              <span className="block text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
                MASTERY"
              </span>
            </h1>
          </div>

          {/* Date pills */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
            <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl border border-blue-700/50" style={{ background: 'rgba(10,36,72,0.70)' }}>
              <Calendar className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <span className="text-white font-semibold">25, 26, 27 и 28 Юни</span>
            </div>
            <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl border border-blue-700/50" style={{ background: 'rgba(10,36,72,0.70)' }}>
              <Clock className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <span className="text-white font-semibold">Четвъртък — Неделя, 19:00 ч.</span>
            </div>
          </div>

          {/* Value proposition box */}
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/25 via-amber-400/15 to-amber-500/25 rounded-3xl blur-xl" />
            <div className="relative p-8 sm:p-10 border border-amber-500/35 rounded-2xl" style={{ background: 'rgba(10,32,64,0.85)' }}>
              <p className="text-xl sm:text-2xl lg:text-3xl text-white font-bold leading-relaxed">
                КАК ДА ИНВЕСТИРАШ В ИМОТИ ПО ПРАВИЛНИЯТ НАЧИН С ПРАВИЛНИТЕ ИНВЕСТИЦИОННИ СТРАТЕГИИ,
                ДА РАЗЛИЧАВАШ{' '}
                <span className="text-amber-400">ДОБРИТЕ СДЕЛКИ</span>
                {' '}И ЛОШИТЕ СДЕЛКИ И ДА НАПРАВИШ{' '}
                <span className="text-amber-400">МАКСИМАЛНА ПЕЧАЛБА</span>.
              </p>
            </div>
          </div>

          {/* Subtext */}
          <p className="text-blue-100/75 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Разкривам моите собствени стратегии, чрез които вече съм помогнал на стотици хора да трансформират
            капитала си и да направят първата стъпка с увереност в рамките на{' '}
            <span className="text-amber-400 font-bold">90 ДНИ!</span>
          </p>

          <p className="text-blue-300/50 text-base">
            Без да рискуват всичко &bull; Без да стават наемодатели на пълен работен ден &bull; Без да губят години
          </p>

          {/* Price + CTA */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-amber-500/18 rounded-3xl blur-2xl" />
              <div className="relative px-10 py-8 border border-amber-500/40 rounded-2xl" style={{ background: 'rgba(10,32,64,0.90)' }}>
                <p className="text-amber-400 text-xl font-bold mb-2">Получи достъп само за</p>
                <p className="text-7xl sm:text-9xl text-white font-black leading-none">
                  37<span className="text-amber-400 text-4xl sm:text-5xl">€</span>
                </p>
              </div>
            </div>

            <button
              onClick={handleCheckoutClick}
              className="btn-shimmer group px-12 sm:px-16 py-6 sm:py-7 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-900 text-xl sm:text-2xl font-black rounded-2xl shadow-2xl shadow-amber-500/50 hover:shadow-amber-400/70 hover:from-amber-400 hover:to-amber-500 active:scale-95 transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                ЗАПИШИ СЕ СЕГА!
                <span className="text-2xl group-hover:translate-x-1 transition-transform inline-block">→</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
