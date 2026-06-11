import { CheckCircle2, XCircle } from 'lucide-react';

const forYou = [
  { title: 'Имаш капитал, но нямаш яснота', description: 'Имаш 30–50K EUR настрана, но не знаеш как да ги вложиш без скъпа грешка.' },
  { title: 'Искаш да действаш — не просто да учиш', description: 'Не търсиш теория. Търсиш конкретна система, ясни стъпки и реални примери.' },
  { title: 'Работиш на пълен работен ден', description: 'Нямаш цял ден за обяви. Искаш ефективна система с ограничено време.' },
  { title: 'Готов си да действаш бързо', description: 'Когато получиш ясна информация, не чакаш "перфектния момент".' },
  { title: 'Искаш пасивен доход и сигурност', description: 'Разбираш, че имотите носят стабилен пасивен доход и дългосрочна сигурност.' },
];

const notForYou = [
  { title: 'Не искаш да научиш нови неща', description: 'Ако не искаш да разбереш новите типове инвестиции в имотите — това не е за теб.' },
  { title: 'Търсиш "бързо забогатяване"', description: 'Ако очакваш да станеш милионер за 6 месеца — това не е за теб.' },
  { title: 'Не си готов да инвестираш време', description: 'Ако не можеш да отделиш 8 часа за 4 живи сесии — по-добре не започвай.' },
  { title: 'Само събираш информация', description: 'Ако нямаш намерение да действаш в рамките на 1–2 месеца — загуба на време.' },
  { title: 'Очакваш напълно пасивна инвестиция', description: 'Ако търсиш инвестиция без никакво твое участие в началото — това не е то.' },
];

export default function WhoIsItFor() {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden" style={{ background: 'rgba(10,32,64,0.45)' }}>
      <div className="absolute top-0 inset-x-0 h-px divider-gold" />
      <div className="absolute bottom-0 inset-x-0 h-px divider-gold" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 sm:mb-16">
          <span className="section-label mb-4">Идентификация</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mt-4">
            За кого е <span className="text-amber-400">това обучение?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* For you */}
          <div className="relative rounded-3xl overflow-hidden border p-8 sm:p-10" style={{ background: 'rgba(5,40,30,0.50)', borderColor: 'rgba(52,211,153,0.20)' }}>
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(52,211,153,0.07)' }} />
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg" style={{ background: 'rgba(52,211,153,0.15)' }}>
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-black text-white">ТОВА Е ЗА ТЕБ АКО:</h3>
              </div>
              <div className="space-y-3">
                {forYou.map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl border transition-colors" style={{ background: 'rgba(52,211,153,0.05)', borderColor: 'rgba(52,211,153,0.12)' }}>
                    <span className="text-emerald-400 font-black text-lg flex-shrink-0 mt-0.5">✓</span>
                    <div>
                      <p className="font-bold text-white text-sm mb-1">{item.title}</p>
                      <p className="text-blue-100/60 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Not for you */}
          <div className="relative rounded-3xl overflow-hidden border p-8 sm:p-10" style={{ background: 'rgba(45,10,15,0.50)', borderColor: 'rgba(248,113,113,0.20)' }}>
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(248,113,113,0.07)' }} />
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg" style={{ background: 'rgba(248,113,113,0.15)' }}>
                  <XCircle className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-black text-white">ТОВА НЕ Е ЗА ТЕБ АКО:</h3>
              </div>
              <div className="space-y-3">
                {notForYou.map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl border transition-colors" style={{ background: 'rgba(248,113,113,0.05)', borderColor: 'rgba(248,113,113,0.12)' }}>
                    <span className="text-red-400 font-black text-lg flex-shrink-0 mt-0.5">✗</span>
                    <div>
                      <p className="font-bold text-white text-sm mb-1">{item.title}</p>
                      <p className="text-blue-100/60 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
