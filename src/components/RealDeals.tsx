import { ArrowRight, TrendingUp, Home, Building2 } from 'lucide-react';

const deals = [
  {
    strategy: 'Buy & Hold',
    strategyColor: 'amber',
    icon: Home,
    location: 'Младост 4, София',
    title: 'Двустаен апартамент — пасивен доход',
    beforeImg: 'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImg: 'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: [
      { label: 'Покупна цена', value: '95 000 €' },
      { label: 'Ремонт', value: '8 000 €' },
      { label: 'Месечен наем', value: '700 €' },
      { label: 'Годишна доходност', value: '8.1%', highlight: true },
    ],
    lesson: 'Как да намериш имот с над 7% доходност и да осигуриш постоянен паричен поток.',
  },
  {
    strategy: 'Fix & Flip',
    strategyColor: 'teal',
    icon: TrendingUp,
    location: 'Лозенец, София',
    title: 'Тристаен в нужда от ремонт — препродажба',
    beforeImg: 'https://images.pexels.com/photos/7937491/pexels-photo-7937491.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImg: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: [
      { label: 'Покупна цена', value: '120 000 €' },
      { label: 'Ремонт + разходи', value: '22 000 €' },
      { label: 'Продажна цена', value: '178 000 €' },
      { label: 'Чиста печалба', value: '36 000 €', highlight: true },
    ],
    lesson: 'Точните критерии за "добра" сделка за флип — и кога да кажеш НЕ.',
  },
  {
    strategy: 'Off-Plan',
    strategyColor: 'blue',
    icon: Building2,
    location: 'Витоша, София',
    title: 'Ново строителство — покупка на зелено',
    beforeImg: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImg: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: [
      { label: 'Цена на зелено', value: '85 000 €' },
      { label: 'Пазарна стойност', value: '118 000 €' },
      { label: 'Капиталов ръст', value: '+39%' },
      { label: 'Реализирана печалба', value: '33 000 €', highlight: true },
    ],
    lesson: 'Как да избереш правилния строител и да предвидиш растежа на локацията.',
  },
];

const strategyStyles: Record<string, { badge: React.CSSProperties; highlight: string }> = {
  amber: {
    badge: { background: 'rgba(245,158,11,0.15)', borderColor: 'rgba(245,158,11,0.40)', color: '#fbbf24' },
    highlight: 'text-amber-400',
  },
  teal: {
    badge: { background: 'rgba(20,184,166,0.15)', borderColor: 'rgba(20,184,166,0.40)', color: '#2dd4bf' },
    highlight: 'text-teal-400',
  },
  blue: {
    badge: { background: 'rgba(59,130,246,0.15)', borderColor: 'rgba(59,130,246,0.40)', color: '#60a5fa' },
    highlight: 'text-blue-400',
  },
};

function BeforeAfterCard({ deal }: { deal: typeof deals[0] }) {
  const styles = strategyStyles[deal.strategyColor];
  const Icon = deal.icon;

  return (
    <div className="rounded-2xl overflow-hidden border" style={{ background: 'rgba(8,26,52,0.80)', borderColor: 'rgba(30,64,102,0.70)' }}>
      {/* Image split */}
      <div className="relative flex h-56 sm:h-64 overflow-hidden">
        {/* Before */}
        <div className="relative w-1/2 overflow-hidden">
          <img src={deal.beforeImg} alt="Преди" className="w-full h-full object-cover" />
          <span className="absolute top-3 left-3 text-xs font-black tracking-widest uppercase px-2.5 py-1 rounded-lg" style={{ background: 'rgba(5,18,31,0.80)', color: 'rgba(148,163,184,0.90)', border: '1px solid rgba(100,116,139,0.35)' }}>
            СТРАТЕГИЯ
          </span>
        </div>

        {/* Divider arrow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center shadow-xl" style={{ background: 'rgba(245,158,11,1)', boxShadow: '0 0 0 3px rgba(5,18,31,0.90)' }}>
          <ArrowRight className="w-4 h-4 text-slate-900" />
        </div>

        {/* After */}
        <div className="relative w-1/2 overflow-hidden">
          <img src={deal.afterImg} alt="След" className="w-full h-full object-cover" />
          <span className="absolute top-3 right-3 text-xs font-black tracking-widest uppercase px-2.5 py-1 rounded-lg" style={{ background: 'rgba(245,158,11,0.90)', color: '#0f172a' }}>
            РЕЗУЛТАТ
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 sm:p-6">
        {/* Strategy badge + location */}
        <div className="flex items-center gap-2.5 mb-3">
          <span className="flex items-center gap-1.5 text-xs font-black tracking-widest uppercase px-2.5 py-1 rounded-lg border" style={styles.badge}>
            <Icon className="w-3 h-3" />
            {deal.strategy}
          </span>
          <span className="text-blue-300/50 text-xs">{deal.location}</span>
        </div>

        <h3 className="text-white font-bold text-base sm:text-lg leading-snug mb-4">{deal.title}</h3>

        {/* Numbers grid */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {deal.stats.map((s) => (
            <div key={s.label} className="px-3 py-2.5 rounded-xl" style={{ background: 'rgba(10,32,64,0.70)', border: '1px solid rgba(30,64,102,0.60)' }}>
              <p className="text-blue-300/50 text-[10px] uppercase tracking-wider mb-0.5">{s.label}</p>
              <p className={`font-black text-sm ${s.highlight ? styles.highlight : 'text-white'}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Lesson */}
        <div className="flex items-start gap-2.5 px-3.5 py-3 rounded-xl" style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.18)' }}>
          <span className="text-amber-400 font-black text-sm flex-shrink-0 mt-0.5">→</span>
          <p className="text-blue-100/75 text-sm leading-snug">{deal.lesson}</p>
        </div>
      </div>
    </div>
  );
}

export default function RealDeals() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px divider-gold" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <span className="section-label mb-4">Реални примери — Ден 1</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mt-4">
            3 стратегии, които<br />
            <span className="text-amber-400">ще разгледаме заедно</span>
          </h2>
          <p className="text-blue-100/65 text-lg mt-5 max-w-2xl leading-relaxed">
            Това не са хипотетични примери. Всяка сделка е реална — с точни числа, грешки и уроци,
            извлечени от личния ми опит.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {deals.map((deal) => (
            <BeforeAfterCard key={deal.strategy} deal={deal} />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex items-start gap-3 max-w-2xl">
          <span className="text-amber-400 text-xl font-black flex-shrink-0">*</span>
          <p className="text-blue-300/50 text-sm leading-relaxed">
            На живо по време на обучението ще разгледаме и реалните снимки, документи и финансови
            изчисления за всяка една от тези сделки.
          </p>
        </div>
      </div>
    </section>
  );
}
