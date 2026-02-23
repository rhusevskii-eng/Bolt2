import { AlertTriangle } from 'lucide-react';
import { initiateCheckout } from '../utils/checkout';

export default function TruthSection() {

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-red-900/10 to-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative group bg-gradient-to-br from-red-900/40 via-red-800/30 to-slate-900/50 backdrop-blur-sm border-2 border-red-500/60 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-red-500/20">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-3xl" />

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-red-500/30 to-red-600/30 rounded-xl backdrop-blur-sm">
                <AlertTriangle className="w-12 h-12 text-red-400 flex-shrink-0 animate-pulse" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                ВНИМАНИЕ: Това ще промени начина, по който гледаш на инвестициите
              </h2>
            </div>

          <div className="space-y-6 text-lg text-slate-200 leading-relaxed">
            <p>
              За последните 2 години съм анализирал стотици имоти.
            </p>

            <p className="font-bold text-xl text-white">
              И открих нещо, което ще те вбеси.
            </p>

            <p>
              Не защото е тайна. А защото е толкова очевидно, че никой не го вижда.
            </p>

            <p className="text-2xl font-bold text-red-400 py-4">
              94% от "инвеститорите" в имоти губят пари още преди да са купили имота.
            </p>

            <p>
              Да, правилно прочете - <span className="text-red-400 font-bold">ГУБЯТ пари ПРЕДИ покупката.</span>
            </p>

            <div className="bg-slate-900/50 rounded-lg p-6 my-6 border border-slate-700">
              <p className="font-bold text-white mb-3">Как?</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Купуват на грешното място.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>На грешната цена.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>С грешните очаквания.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Използвайки съветите на хора, които сами никога не са инвестирали успешно.</span>
                </li>
              </ul>
            </div>

            <p className="font-bold text-xl text-white">
              И най-лошото?
            </p>

            <p className="text-amber-400 font-bold text-xl">
              Ти вероятно си на път да направиш същите грешки ТОЧНО СЕГА.
            </p>

            <p>
              Защото всички статии, всички "експерти", всички брокери ти казват едно и също:
            </p>

            <div className="bg-slate-900/50 rounded-lg p-4 border-l-4 border-slate-600 italic text-slate-400">
              <p>"Купи на добра локация"</p>
              <p>"Избери качествена сграда"</p>
              <p>"Наеми добър нотариус"</p>
            </div>

            <p>
              Това буквално е същото като да ти кажат "яж здравословно и спортувай редовно" за да отслабнеш.
              <br/>
              <span className="text-slate-400 italic">Технически вярно. Практически безсмислено.</span>
            </p>

            <p className="text-xl font-bold text-white pt-6">
              Искаш ли да знаеш каква е ИСТИНСКАТА разлика между имот, който ти носи 6% възвръщаемост
              и имот, който ти носи главоболие и проблеми?
            </p>

            <p className="text-amber-400 font-bold text-2xl">
              На 13, 14, 15 и 16 Март ще ти покажа истинската разлика.
            </p>
          </div>

          <div className="mt-10 text-center">
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
            <p className="text-slate-400 mt-4 text-lg">Само за <span className="text-amber-400 font-bold">37€</span></p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
