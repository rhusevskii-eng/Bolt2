import { Star } from 'lucide-react';

const stats = [
  { value: '5M+', label: 'Портфолио' },
  { value: '4', label: 'Държави' },
  { value: '200+', label: 'Управлявани хора' },
  { value: '2', label: 'IPO на Wall St' }
];

export default function WhyTrustMe() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-20">
          <span className="text-white">Защо да ми </span>
          <span className="text-amber-400">вярваш?</span>
        </h2>

        <div className="relative group bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-900/80 backdrop-blur-xl border-2 border-amber-500/40 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl hover:shadow-amber-500/20 transition-all duration-700">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-600/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <div className="relative w-full lg:w-[420px] flex-shrink-0">
              <div className="aspect-[3/4] bg-gradient-to-br from-amber-600/30 via-amber-500/20 to-slate-700/30 rounded-2xl overflow-hidden border-3 border-amber-500/50 shadow-2xl shadow-amber-500/30">
                <img
                  src="/DSC05853.jpg"
                  alt="Иво"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>
            </div>

            <div className="space-y-6 flex-1">
              <div className="flex gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-200 leading-relaxed text-lg">
                <span className="text-amber-400 font-bold">Завърших Cambridge в Pembroke College</span>, работих в <span className="text-amber-400 font-semibold">adidas и Vodafone</span>, управлявах екипи от над 200 души и участвах в <span className="text-amber-400 font-semibold">2 IPO на Wall Street</span>, но истинското ми образование в имотите дойде от грешки, които направих с личните си пари – грешки, които ме научиха на системата, която използвам днес.
              </p>

              <p className="text-slate-200 leading-relaxed text-lg">
                Менторите ми не са от социалните мрежи – това са <span className="text-amber-400 font-semibold">вицепрезиденти на банки в Цюрих</span>, хора които ме научиха да мисля като институционален инвеститор.
              </p>

              <p className="text-slate-200 leading-relaxed text-lg">
                <span className="text-amber-400 font-bold">Имам имоти в четири държави</span> – Германия, Швейцария, България, Дубай – и знам как се управляват активи на различни пазари.
              </p>

              <div className="pt-6 mt-6 border-t border-slate-700">
                <p className="text-slate-100 leading-relaxed text-xl font-bold">
                  Не ти продавам теория от книги – давам ти система, изградена от реален опит, реални сделки и реални грешки, които съм платил, <span className="text-amber-400">за да не ги плащаш ти!</span>
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-12 pt-8 border-t-2 border-amber-500/30">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4"
                >
                  <div className="text-4xl sm:text-5xl font-bold text-amber-400 mb-2">{stat.value}</div>
                  <div className="text-slate-300 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
