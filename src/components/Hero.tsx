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
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#07070f]/96 via-[#07070f]/90 to-[#07070f]/96" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07070f] via-transparent to-transparent" />

      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-600/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-20 h-20 border-t border-l border-amber-500/20 pointer-events-none" />
      <div className="absolute top-8 right-8 w-20 h-20 border-t border-r border-amber-500/20 pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-b border-l border-amber-500/20 pointer-events-none hidden sm:block" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-b border-r border-amber-500/20 pointer-events-none hidden sm:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left: Editorial headline */}
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="section-label">Живо онлайн обучение &mdash; Юни 2026</span>
            </div>

            <div>
              <p className="text-slate-400 text-xl sm:text-2xl font-medium mb-3">4-Дневно Онлайн Обучение</p>
              <h1 className="font-black leading-none tracking-tight">
                <span className="block text-white text-6xl sm:text-7xl lg:text-8xl xl:text-[7rem] mb-1">REAL</span>
                <span className="block text-gold-gradient text-6xl sm:text-7xl lg:text-8xl xl:text-[7rem] mb-1">ESTATE</span>
                <span className="block text-white text-6xl sm:text-7xl lg:text-8xl xl:text-[7rem]">MASTERY</span>
              </h1>
            </div>

            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-xl">
              Разкривам моите стратегии, чрез които съм помогнал на стотици хора да трансформират
              капитала си и да направят първата стъпка с увереност в рамките на{' '}
              <span className="text-amber-400 font-bold">90 дни</span>.
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2.5 px-5 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:border-amber-500/30 transition-colors">
                <Calendar className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-white font-semibold">25 – 28 Юни</span>
              </div>
              <div className="flex items-center gap-2.5 px-5 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:border-amber-500/30 transition-colors">
                <Clock className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-white font-semibold">19:00 часа</span>
              </div>
              <div className="flex items-center gap-2.5 px-5 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:border-amber-500/30 transition-colors">
                <TrendingUp className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-white font-semibold">Онлайн</span>
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="lg:hidden">
              <button
                onClick={handleCheckoutClick}
                className="btn-shimmer w-full py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 text-xl font-black rounded-xl shadow-2xl shadow-amber-500/40 hover:from-amber-400 hover:to-amber-500 active:scale-95 transition-all duration-300"
              >
                ЗАПИШИ СЕ СЕГА — 37€
              </button>
            </div>
          </div>

          {/* Right: Price card */}
          <div className="w-full lg:w-[420px] flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-amber-500/15 rounded-3xl blur-2xl" />
              <div className="relative bg-white/[0.04] border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-xl shadow-2xl">
                <div className="text-center mb-8">
                  <p className="section-label mb-3">Получи достъп само за</p>
                  <div className="relative inline-block">
                    <span className="text-9xl font-black text-white leading-none">37</span>
                    <span className="text-4xl font-black text-amber-400 align-top mt-6 ml-1">€</span>
                    <div className="absolute -inset-4 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />
                  </div>
                </div>

                <div className="divider-gold mb-8" />

                <div className="space-y-3 mb-8">
                  {[
                    '4 живи сесии по 2–2.5 часа',
                    'Въпроси в реално време',
                    '4 ексклузивни бонуса (стойност 848€)',
                    'Система за анализ на имоти',
                    'Гаранция за връщане на парите',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      </div>
                      <span className="text-slate-200 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleCheckoutClick}
                  className="btn-shimmer hidden lg:block w-full py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 text-xl font-black rounded-xl shadow-2xl shadow-amber-500/40 hover:from-amber-400 hover:to-amber-500 active:scale-95 transition-all duration-300"
                >
                  ЗАПИШИ СЕ СЕГА →
                </button>

                <p className="text-center text-slate-500 text-xs mt-4">
                  Без да рискуваш всичко &bull; Без да губиш години
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
