import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Как мога да съм сигурен, че ще получа стойност?',
    answer: 'Ако се появиш и на 4-те дни и не останеш доволен от стойността, ще възвърнем сумата без никакви въпроси. Толкова съм сигурен в качеството на обучението.',
  },
  {
    question: 'Кога ще получа линка за включване онлайн?',
    answer: 'След покупка ще получиш детайли по имейл. Линкът ще бъде изпратен на 20 Юни — 5 дни преди първата сесия. Споделя се и във Viber групата 1 час преди всяка сесия.',
  },
  {
    question: 'Трябва ли да участвам и в четирите дни?',
    answer: 'Не е задължително, но силно го препоръчваме. Максималната стойност се постига при участие във всички дни.',
  },
  {
    question: 'Ще има ли запис на събитието?',
    answer: 'Няма да има запис. Целта е всички участници да присъстват на живо, да задават въпроси и да извлекат максимална стойност.',
  },
  {
    question: 'Нямам чак толкова много капитал — подходящо ли е?',
    answer: 'Абсолютно! Системата работи и за хора с по-малко капитал.',
  },
  {
    question: 'Никога не съм купувал имот. Не е ли твърде напреднало?',
    answer: 'Точно обратното! Обучението е създадено за хора, искащи да направят първата си инвестиция правилно — цялата система от нулата, стъпка по стъпка.',
  },
  {
    question: 'Ще мога ли да задавам въпроси след обучението?',
    answer: 'По време на живите сесии можеш да задаваш въпроси в реално време. Не е записан курс — интерактивно обучение, работим заедно.',
  },
  {
    question: 'Какво ако нямам време да приложа системата?',
    answer: 'Системата е създадена за заети професионалисти. Не изисква цял ден — 5–10 часа седмично са достатъчни.',
  },
  {
    question: 'Защо да те слушам? Какъв е твоят опит?',
    answer: 'Портфолио в 4 държави (Германия, Швейцария, България, Дубай), работил в adidas и Vodafone, управлявал 200+ души, участвал в 2 IPO на Wall Street. Научих се от собствени грешки с реални пари.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden" style={{ background: 'rgba(10,32,64,0.35)' }}>
      <div className="absolute top-0 inset-x-0 h-px divider-gold" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 sm:mb-16">
          <span className="section-label mb-4">Въпроси & Отговори</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mt-4">
            Имаш <span className="text-amber-400">въпроси?</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={open === i
                ? { background: 'rgba(10,32,64,0.75)', border: '1px solid rgba(245,158,11,0.35)' }
                : { background: 'rgba(7,22,42,0.70)', border: '1px solid rgba(30,64,102,0.55)' }
              }
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center gap-4 sm:gap-6 px-5 sm:px-7 py-5 text-left"
              >
                <span className="text-2xl font-black tabular-nums flex-shrink-0 transition-colors w-10" style={{ color: open === i ? 'rgb(251,191,36)' : 'rgba(30,64,102,0.90)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex-1 font-bold text-base sm:text-lg" style={{ color: open === i ? 'white' : 'rgba(224,231,255,0.85)' }}>
                  {faq.question}
                </span>
                <div className="p-1.5 rounded-lg flex-shrink-0 transition-all" style={open === i ? { background: 'rgba(245,158,11,0.15)', color: 'rgb(251,191,36)' } : { color: 'rgba(30,64,102,0.90)' }}>
                  {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-64' : 'max-h-0'}`}>
                <p className="pb-6 text-blue-100/70 leading-relaxed text-base sm:text-lg" style={{ paddingLeft: 'calc(1.25rem + 2.5rem + 1.5rem)', paddingRight: '1.25rem' }}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
