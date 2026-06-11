import { Building2, Shield } from 'lucide-react';
import { initiateCheckout } from '../utils/checkout';

export default function Footer() {
  return (
    <>
      {/* Full-bleed CTA */}
      <section className="relative overflow-hidden py-20 sm:py-28" style={{ background: 'linear-gradient(135deg, rgba(30,20,5,0.80) 0%, rgba(10,32,64,0.70) 50%, rgba(30,20,5,0.80) 100%)', borderTop: '1px solid rgba(245,158,11,0.20)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(245,158,11,0.12) 0%, transparent 65%)' }} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="section-label mb-6">Готов ли си?</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight mt-4">
            Вземи своето място<br />
            <span className="text-amber-400">преди да е свършило</span>
          </h2>
          <p className="text-blue-100/75 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Обучението започва на <span className="text-white font-bold">25 Юни, 19:00 ч.</span> Получаваш 4 бонуса на обща стойност{' '}
            <span className="text-amber-400 font-bold">848 евро</span> — само за 37€.
          </p>

          <button
            onClick={initiateCheckout}
            className="btn-shimmer inline-flex items-center gap-4 px-12 sm:px-16 py-6 sm:py-7 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 text-xl sm:text-2xl font-black rounded-2xl shadow-2xl shadow-amber-500/35 hover:shadow-amber-400/55 hover:from-amber-400 hover:to-amber-500 active:scale-95 transition-all duration-300"
          >
            ЗАПИШИ СЕ СЕГА — 37€ →
          </button>

          <div className="mt-10 inline-flex items-center gap-3 px-6 py-4 rounded-2xl border" style={{ background: 'rgba(5,40,30,0.50)', borderColor: 'rgba(52,211,153,0.20)' }}>
            <Shield className="w-6 h-6 text-emerald-400 flex-shrink-0" />
            <p className="text-blue-50/85 text-sm font-medium text-left">
              <span className="text-emerald-400 font-bold">Гаранция за връщане на парите</span> — участваш и в 4-те дни, не доволен → връщаме без въпроси.
            </p>
          </div>
        </div>
      </section>

      {/* Slim footer */}
      <footer className="py-10" style={{ background: '#05121f', borderTop: '1px solid rgba(14,45,87,0.80)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Building2 className="w-6 h-6 text-amber-500" />
              <span className="text-white font-black text-lg tracking-tight">REAL ESTATE MASTERY</span>
            </div>
            <p className="text-sm" style={{ color: 'rgba(30,64,102,0.90)' }}>© 2026 Real Estate Mastery. Всички права запазени.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
