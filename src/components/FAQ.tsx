import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Как мога да съм сигурен че ще получа стойност? Какво ако не ми хареса?',
    answer: 'Ако се появиш и на 4-те дни и не останеш доволен от стойността, която си получил, ще възвърнем сумата без никакви въпроси! Толкова съм сигурен в качеството на обучението.'
  },
  {
    question: 'Кога ще получа линка за включване онлайн?',
    answer: 'След като закупите билет ще получите детайли по имейл - линкът за срещите ще бъде изпратен на 1 март, 5 дни преди първата сесия. Допълнително ще бъде споделен и във Viber групата 1 час преди началото на всяка сесия.'
  },
  {
    question: 'Трябва ли да участвам и в четирите дни?',
    answer: 'Не е задължително, но силно го препоръчваме, защото максималната стойност се постига при участие във всички дни.'
  },
  {
    question: 'Ще има ли запис на събитието?',
    answer: 'Няма да има запис. Целта ни е всички участници да присъстват на живо, да задават въпроси и да извлекат максимална стойност.'
  },
  {
    question: 'Нямам чак толкова много капитал, подходящ ли е спринтът за мен?',
    answer: 'Абсолютно! Системата работи и за хора със по-малко капитал.'
  },
  {
    question: 'Никога не съм купувал имот. Не е ли спринтът твърде напреднал за мен?',
    answer: 'Не, точно обратното! Обучението е създадено специално за хора, които искат да направят първата си инвестиция правилно. Ще получиш цялата система от нулата - стъпка по стъпка.'
  },
  {
    question: 'Ще мога ли да задавам въпроси след обучението?',
    answer: 'Да! По време на живите сесии можеш да задаваш въпроси в реално време. Това не е записан курс - това е интерактивно обучение където работим заедно.'
  },
  {
    question: 'Какво ако нямам време да приложа системата? Няма ли да са изхабени парите?',
    answer: 'Системата е създадена точно за заети професионалисти. Не изисква цял ден работа - можеш да я приложиш с 5-10 часа седмично. Ако не можеш да отделиш толкова време, по-добре изчакай по-подходящ момент.'
  },
  {
    question: 'Защо да те слушам? Какъв е твоят опит?',
    answer: 'Имам над 15 години опит в имоти, портфолио в 4 държави (Германия, Швейцария, България, Дубай), работил съм в adidas и Vodafone, управлявал съм екипи от над 200 души и участвал в 2 IPO на Wall Street. Но най-важното - научих се от собствените си грешки с реални пари, за да не правиш ти същите.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-800/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-16">
          ЧЕСТО ЗАДАВАНИ ВЪПРОСИ
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-sm border-2 border-slate-700/60 rounded-xl overflow-hidden hover:border-amber-500/60 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-amber-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

              <button
                onClick={() => toggleFAQ(index)}
                className="relative z-10 w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
              >
                <span className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">
                  <span className="inline-block w-8 h-8 bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/40 rounded-lg text-center leading-8 text-amber-400 mr-3 text-sm font-bold">
                    {index + 1}
                  </span>
                  {faq.question}
                </span>
                <div className="p-2 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-slate-300 leading-relaxed text-lg border-t border-slate-700/50 pt-4 mx-6">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
