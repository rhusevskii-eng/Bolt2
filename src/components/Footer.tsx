import { Building2 } from 'lucide-react';
import { initiateCheckout } from '../utils/checkout';

export default function Footer() {

  return (
    <footer className="py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <button
            onClick={initiateCheckout}
            className="group relative px-12 py-6 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 text-xl sm:text-2xl font-bold rounded-lg hover:from-amber-400 hover:to-amber-500 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-amber-500/50"
          >
            <span className="relative z-10">ЗАПИШИ СЕ СЕГА - 37€</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity" />
          </button>
          <p className="text-slate-400 mt-4">Събитието започва на 13 Март</p>
        </div>

        <div className="flex items-center justify-center gap-3 mb-6">
          <Building2 className="w-8 h-8 text-amber-500" />
          <span className="text-2xl font-bold text-white">REAL ESTATE MASTERY</span>
        </div>

        <p className="text-center text-slate-400 text-sm">
          © 2026 Real Estate Mastery. Всички права запазени.
        </p>
      </div>
    </footer>
  );
}
