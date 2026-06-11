import { ShieldCheck } from 'lucide-react';

export default function GuaranteeBadge() {
  return (
    <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border" style={{ background: 'rgba(5,40,30,0.50)', borderColor: 'rgba(52,211,153,0.25)' }}>
      <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
      <p className="text-sm font-medium text-left" style={{ color: 'rgba(240,253,244,0.80)' }}>
        <span className="text-emerald-400 font-bold">Гаранция: </span>
        Ако се появиш и на 4-те дни и не си доволен от стойността, ще ти върнем инвестицията без никакви въпроси.
      </p>
    </div>
  );
}
