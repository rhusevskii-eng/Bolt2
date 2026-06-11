import { initiateCheckout } from '../utils/checkout';

export default function TruthSection() {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(127,29,29,0.18)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[80px] pointer-events-none" style={{ background: 'rgba(7,30,56,0.60)' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Giant stat */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="section-label mb-6">Горката истина</span>

          <div className="relative inline-block my-6 select-none">
            <span className="absolute inset-0 flex items-center justify-center text-[9rem] sm:text-[13rem] lg:text-[16rem] font-black leading-none pointer-events-none" style={{ color: 'rgba(185,28,28,0.10)' }}>
              94%
            </span>
            <span className="relative text-[7rem] sm:text-[10rem] lg:text-[13rem] font-black leading-none" style={{ color: 'rgb(252,165,165)' }}>
              94%
            </span>
          </div>

          <p className="text-2xl sm:text-3xl font-black text-white max-w-2xl mx-auto leading-tight">
            от "инвеститорите" губят пари{' '}
            <span className="text-red-400">още преди да са купили имота</span>
          </p>
        </div>

        {/* Prose */}
        <div className="max-w-3xl mx-auto space-y-7 mb-14">
          <p className="text-blue-100/80 text-lg sm:text-xl leading-relaxed">
            За последните 2 години съм анализирал стотици имоти. И открих нещо, което ще те вбеси. Не защото е тайна. А защото е толкова очевидно, че никой не го вижда.
          </p>

          <p className="text-xl sm:text-2xl font-bold text-white">
            Правилно прочете — <span className="text-red-400">ГУБЯТ пари ПРЕДИ покупката.</span>
          </p>

          <div className="border-l-2 border-red-500/50 pl-6 sm:pl-8 py-2 space-y-3">
            <p className="text-white font-bold text-lg">Как?</p>
            {['Купуват на грешното място.', 'На грешната цена.', 'С грешните очаквания.', 'Използвайки съветите на хора, които сами никога не са инвестирали успешно.'].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-red-400 flex-shrink-0 mt-1 font-black">✗</span>
                <span className="text-blue-100/75 text-base sm:text-lg">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-amber-400 font-bold text-xl sm:text-2xl">
            Ти вероятно си на път да направиш същите грешки ТОЧНО СЕГА.
          </p>

          <div className="pl-6 sm:pl-8 border-l space-y-1" style={{ borderColor: 'rgba(30,64,102,0.80)' }}>
            {['"Купи на добра локация"', '"Избери качествена сграда"', '"Наеми добър нотариус"'].map((q, i) => (
              <p key={i} className="text-blue-300/50 italic text-lg">{q}</p>
            ))}
          </div>

          <p className="text-blue-100/75 text-base sm:text-lg leading-relaxed">
            Това е като да ти кажат "яж здравословно и спортувай" за да отслабнеш.{' '}
            <span className="text-blue-300/50 italic">Технически вярно. Практически безсмислено.</span>
          </p>

          <div className="p-6 sm:p-8 rounded-2xl border" style={{ background: 'rgba(10,32,64,0.60)', borderColor: 'rgba(245,158,11,0.20)' }}>
            <p className="text-white font-bold text-lg sm:text-xl leading-relaxed">
              Искаш ли да знаеш каква е ИСТИНСКАТА разлика между имот, носещ 6% възвръщаемост, и имот, носещ главоболие?
            </p>
            <p className="text-amber-400 font-black text-xl sm:text-2xl mt-3">
              На 25, 26, 27 и 28 Юни ще ти покажа истинската разлика.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={initiateCheckout}
            className="btn-shimmer inline-flex items-center gap-3 px-10 sm:px-14 py-5 sm:py-6 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 text-xl sm:text-2xl font-black rounded-2xl shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:from-amber-400 hover:to-amber-500 active:scale-95 transition-all duration-300"
          >
            ЗАПОЧНИ ДА ИНВЕСТИРАШ ПРАВИЛНО →
          </button>
          <p className="mt-4" style={{ color: 'rgba(148,163,184,0.60)' }}>Само за <span className="text-amber-400 font-bold">37€</span></p>
        </div>
      </div>
    </section>
  );
}
