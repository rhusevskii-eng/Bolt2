import { Calendar, Clock, TrendingUp } from 'lucide-react';

export default function Hero() {
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
          <div className="space-y-4">
            <p className="text-blue-200/65 text-lg sm:text-xl font-medium tracking-wide uppercase" style={{ letterSpacing: '0.08em' }}>
              Най-Известното 4-Дневно Онлайн Обучение за Имоти С Над 500 Участника До Сега!
            </p>
            <h1 className="font-black leading-none" style={{ letterSpacing: '-0.03em' }}>
              <span
                className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-1"
                style={{
                  background: 'linear-gradient(135deg, #e2e8f0 0%, #ffffff 45%, #cbd5e1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                REAL ESTATE
              </span>

              {/* Decorative divider */}
              <div className="flex items-center justify-center gap-3 my-2">
                <div className="h-px flex-1 max-w-[120px]" style={{ background: 'linear-gradient(to right, transparent, rgba(245,158,11,0.6))' }} />
                <div className="flex gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-amber-500/60" />
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="w-1 h-1 rounded-full bg-amber-500/60" />
                </div>
                <div className="h-px flex-1 max-w-[120px]" style={{ background: 'linear-gradient(to left, transparent, rgba(245,158,11,0.6))' }} />
              </div>

              <span
                className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl"
                style={{
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 30%, #fde68a 60%, #f59e0b 80%, #d97706 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 40px rgba(245,158,11,0.45))',
                }}
              >
                MASTERY
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

          {/* VSL Video */}
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute -inset-1.5 rounded-3xl blur-2xl" style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.25) 0%, rgba(30,64,102,0.40) 50%, rgba(245,158,11,0.20) 100%)' }} />
            <div className="relative rounded-2xl overflow-hidden border shadow-2xl" style={{ borderColor: 'rgba(245,158,11,0.35)', boxShadow: '0 30px 80px rgba(5,18,31,0.60), 0 0 0 1px rgba(245,158,11,0.15)' }}>
              {/* Top bar chrome */}
              <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: 'rgba(10,32,64,0.95)' }}>
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full" style={{ background: 'rgba(248,113,113,0.70)' }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: 'rgba(251,191,36,0.70)' }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: 'rgba(52,211,153,0.70)' }} />
                </div>
                <div className="flex-1 flex justify-center">
                  <span className="text-xs font-medium" style={{ color: 'rgba(148,163,184,0.60)' }}>Real Estate Mastery — Гледай преди да решиш</span>
                </div>
              </div>
              {/* 16:9 video */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/66R3c_3-yL4?rel=0&modestbranding=1&color=white"
                  title="Real Estate Mastery VSL"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 'none' }}
                />
              </div>
            </div>
          </div>

          {/* Value proposition box */}
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/25 via-amber-400/15 to-amber-500/25 rounded-3xl blur-xl" />
            <div className="relative p-8 sm:p-10 border border-amber-500/35 rounded-2xl" style={{ background: 'rgba(10,32,64,0.85)' }}>
              <p className="text-xl sm:text-2xl lg:text-3xl text-white font-bold leading-relaxed">
                ВИЖ КАК ДА ИНВЕСТИРАШ В ИМОТИ ПО ПРАВИЛНИЯТ НАЧИН С ПРАВИЛНИТЕ ИНВЕСТИЦИОННИ СТРАТЕГИИ,
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

        </div>
      </div>
    </section>
  );
}
