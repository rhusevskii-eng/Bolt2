import { Calendar, Clock, TrendingUp } from 'lucide-react';
import { initiateCheckout } from '../utils/checkout';
import { trackEvent } from '../utils/googleAnalytics';

export default function Hero() {
  const handleCheckoutClick = () => {
    trackEvent('begin_checkout', {
      currency: 'EUR',
      value: 37,
      items: [{
        item_id: 'real-estate-mastery',
        item_name: 'Real Estate Mastery Course',
        price: 37,
        quantity: 1
      }]
    });
    initiateCheckout();
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          filter: 'blur(2px)',
        }}
      />

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/80 to-slate-900/90" />

      {/* Warm Gradient Overlays (Orange-Blue Tones) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-orange-600/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-900/95" />

      {/* Ambient Light Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-gradient-to-br from-amber-500/20 via-amber-400/15 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-gradient-to-bl from-amber-600/15 via-orange-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[5%] left-[30%] w-[450px] h-[450px] bg-gradient-to-tr from-amber-400/15 via-yellow-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-block animate-fade-in">
            <span className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/40 rounded-full text-amber-400 text-sm font-semibold tracking-wide backdrop-blur-md shadow-lg shadow-amber-500/20">
              <TrendingUp className="w-4 h-4 mr-2 animate-bounce" />
              СПЕЦИАЛНО ЗА АМБИЦИОЗНИ ПРОФЕСИОНАЛИСТИ
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight drop-shadow-2xl">
            <span className="block mb-4">4-Дневно Онлайн Обучение</span>
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600">
                "REAL ESTATE MASTERY"
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-amber-600 blur-3xl opacity-40 animate-pulse" />
            </span>
          </h1>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 animate-fade-in">
            <div className="group flex items-center gap-3 px-6 py-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border-2 border-amber-500/30 rounded-xl shadow-2xl hover:border-amber-400/60 hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105">
              <div className="p-2.5 bg-gradient-to-br from-amber-500/30 to-amber-600/30 rounded-lg group-hover:from-amber-400/40 group-hover:to-amber-500/40 transition-all">
                <Calendar className="w-6 h-6 text-amber-400 group-hover:text-amber-300" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">13, 14, 15 и 16 Март</span>
            </div>
            <div className="group flex items-center gap-3 px-6 py-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border-2 border-amber-500/30 rounded-xl shadow-2xl hover:border-amber-400/60 hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105">
              <div className="p-2.5 bg-gradient-to-br from-amber-500/30 to-amber-600/30 rounded-lg group-hover:from-amber-400/40 group-hover:to-amber-500/40 transition-all">
                <Clock className="w-6 h-6 text-amber-400 group-hover:text-amber-300" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">Четвъртък, Петък, Събота, Неделя</span>
            </div>
          </div>

          <div className="max-w-5xl mx-auto p-10 bg-gradient-to-br from-slate-800/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl border-2 border-amber-500/40 rounded-3xl shadow-2xl shadow-amber-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-600/10 rounded-full blur-2xl" />
            <p className="text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed font-bold relative z-10">
              КАК ДА ИНВЕСТИРАШ В ИМОТИ ПО ПРАВИЛНИЯТ НАЧИН С ПРАВИЛНИТЕ ИНВЕСТИЦИОННИ СТРАТЕГИИ,
              ДА РАЗЛИЧАВАШ <span className="text-amber-400">ДОБРИТЕ СДЕЛКИ</span> И ЛОШИТЕ СДЕЛКИ И ДА НАПРАВИШ <span className="text-amber-400">МАКСИМАЛНА ПЕЧАЛБА</span>.
            </p>
          </div>

          <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto">
            Разкривам моите собствени стратегии, чрез които вече съм помогнал на стотици хора да трансформират
            капитала си и да направят първата стъпка с увереност в рамките на <span className="relative inline-block px-3 py-1 text-amber-400 font-bold"><span className="absolute inset-0 bg-amber-500/20 blur-lg"></span><span className="relative">90 ДНИ!</span></span>
          </p>

          <div className="flex flex-col items-center gap-6 pt-4">
            <div className="text-center space-y-4">
              <p className="text-slate-400 text-lg">Без да рискуват всичко • Без да стават наемодатели на пълен работен ден • Без да губят години</p>

              <div className="relative inline-block p-10 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl border-3 border-amber-500/60 rounded-3xl shadow-2xl shadow-amber-500/40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-amber-600/10" />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-400/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-600/20 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <p className="text-2xl sm:text-3xl text-amber-400 font-bold mb-4">Получи достъп само за</p>
                  <p className="text-6xl sm:text-8xl text-white font-black tracking-tight">
                    <span className="relative inline-block">
                      37€
                      <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-amber-600 blur-2xl opacity-50 animate-pulse" />
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleCheckoutClick}
              className="group relative px-12 sm:px-16 py-6 sm:py-8 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-900 text-xl sm:text-3xl font-black rounded-2xl hover:from-amber-400 hover:via-amber-300 hover:to-amber-500 transform hover:scale-110 transition-all duration-300 shadow-2xl shadow-amber-500/60 hover:shadow-amber-400/80 border-4 border-amber-300/50"
            >
              <span className="relative z-10 flex items-center gap-4 drop-shadow-lg">
                ЗАПИШИ СЕ СЕГА!
                <span className="text-3xl animate-bounce">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 rounded-2xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity animate-pulse" />
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
