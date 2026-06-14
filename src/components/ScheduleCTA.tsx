import { initiateCheckout } from '../utils/checkout';
import { ArrowRight } from 'lucide-react';

export default function ScheduleCTA() {
  return (
    <div
      className="relative py-14 sm:py-16 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, rgba(5,18,31,0) 0%, rgba(7,30,56,0.70) 40%, rgba(5,18,31,0) 100%)' }}
    >
      {/* Amber glow behind button */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[200px] rounded-full blur-[80px]" style={{ background: 'rgba(245,158,11,0.12)' }} />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-blue-100/60 text-base sm:text-lg mb-6">
          Видя ли програмата? <span className="text-white font-semibold">Запази своето място сега.</span>
        </p>

        <button
          onClick={() => initiateCheckout()}
          className="btn-shimmer group inline-flex items-center gap-3 px-10 sm:px-14 py-5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-900 text-xl font-black rounded-xl shadow-2xl shadow-amber-500/35 hover:from-amber-400 hover:to-amber-500 hover:shadow-amber-500/55 active:scale-95 transform hover:scale-105 transition-all duration-300"
        >
          ЗАПИШИ СЕ СЕГА
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" />
        </button>

        <p className="mt-4 text-blue-300/40 text-sm">
          Само за <span className="text-amber-400 font-bold">37€</span> &bull; Гаранция за връщане на парите
        </p>
      </div>
    </div>
  );
}
