import { useState } from 'react';
import { Plus } from 'lucide-react';

const faqItems = [
  "Как подключиться к Kaspi?",
  "Можно ли анализировать не свои?",
  "Можно ли не я?",
  "Есть ли ограничения?",
  "Как получить доступ?",
  "Как узнать трафик?"
];

export default function QA() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 px-4 pb-5 bg-teal-800">
      <h2 className="text-4xl lg:text-4xl font-bold mb-8 block italic font-[EB_Garamond] text-center text-emerald-300 pt-5">Зачем создавать бонус?</h2>
      {faqItems.map((question, index) => (
        <div 
          key={index}
          className="group bg-emerald-900/40 backdrop-blur-xl hover:bg-emerald-900/60 rounded-3xl border border-emerald-500/20 hover:border-emerald-400/40 p-4 lg:p-8 shadow-lg hover:shadow-emerald-900/50 transition-all duration-300 cursor-pointer overflow-hidden"
          onClick={() => toggleItem(index)}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg lg:text-xl font-semibold text-emerald-50 group-hover:text-emerald-100 pr-4 leading-tight">
                {question}
              </h3>
            </div>
            <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-emerald-500/20 group-hover:bg-emerald-500/40 border border-emerald-500/30 flex items-center justify-center text-emerald-300 shadow-md transition-all duration-200 group-hover:scale-110">
              <Plus 
                className={`w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300 ${openIndex === index ? 'rotate-45 scale-125' : ''}`} 
              />
            </div>
          </div>
          {openIndex === index && (
            <div className="mt-6 pt-6 border-t border-emerald-500/30">
              <p className="text-emerald-100/90 leading-relaxed text-sm lg:text-base">
                Ответ на "{question}". ArSScout автоматически анализирует конкурентов Kaspi и 
                поднимает твой магазин в топ с помощью точных рекомендаций.
              </p>
            </div>
          )}
        </div>
      ))}
      <button className="w-full mt-10 bg-linear-to-r from-emerald-500/95 to-emerald-400/95 hover:from-emerald-400 hover:to-emerald-300 text-[#0b1b17] py-5 lg:py-6 px-8 rounded-3xl font-semibold text-lg shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-1">
        Получить демо
      </button>
    </div>
  );
}
