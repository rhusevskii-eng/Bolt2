import { initiateCheckout } from '../utils/checkout';

export default function TruthSection() {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-red-900/12 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* GIANT STAT */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="section-label mb-6">Горката истина</span>

          <div className="relative inline-block my-6">
            <span className="absolute inset-0 flex items-center justify-center text-[9rem] sm:text-[13rem] lg:text-[16rem] font-black leading-none text-red-500/12 select-none pointer-events-none">
              94%
            </span>
            <span className="relative text-[7rem] sm:text-[10rem] lg:text-[13rem] font-black leading-none bg-gradient-to-b from-red-300 to-red-500 bg-clip-text text-transparent">
              94%
            </span>
          </div>

          <p className="text-2xl sm:text-3xl font-black text-white max-w-2xl mx-auto leading-tight">
            от "инвеститорите" губят пари{' '}
            <span className="text-red-400">още преди да са купили имота</span>
          </p>
        </div>

        {/* Editorial prose */}
        <div className="max-w-3xl mx-auto space-y-8 mb-14">
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed">
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
                <span className="text-slate-300 text-base sm:text-lg">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-amber-400 font-bold text-xl sm:text-2xl">
            Ти вероятно си на път да направиш същите грешки ТОЧНО СЕГА.
          </p>

          <div className="pl-6 sm:pl-8 border-l border-slate-700 space-y-1">
            {['"Купи на добра локация"', '"Избери качествена сграда"', '"Наеми добър нотариус"'].map((q, i) => (
              <p key={i} className="text-slate-500 italic text-lg">{q}</p>
            ))}
          </div>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Това е като да ти кажат "яж здравословно и спортувай" за да отслабнеш.{' '}
            <span className="text-slate-500 italic">Технически вярно. Практически безсмислено.</span>
          </p>

          <div className="p-6 sm:p-8 bg-amber-500/8 border border-amber-500/20 rounded-2xl">
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
          <p className="text-slate-500 mt-4">Само за <span className="text-amber-400 font-bold">37€</span></p>
        </div>
      </div>
    </section>
  );
}
