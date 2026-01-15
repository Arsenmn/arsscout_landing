import { useState } from "react";
import { Plus } from "lucide-react";

const faqItems = [
  "Как сервис помогает с демпингом?",
  "Можно ли отслеживать конкурентов?",
  "Сколько стоит подключение?",
  "Есть ли ограничения по категориям?",
  "Как быстро видны результаты?",
  "Можно ли интегрировать с Kaspi и WB?"
];

export default function QA() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6 px-4 pb-12 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative">
      <h2 className="text-4xl lg:text-5xl font-bold mb-10 text-center italic font-['JetBrains_Mono'] text-slate-300 pt-8">
        Часто задаваемые вопросы
      </h2>

      {faqItems.map((question, index) => (
        <div
          key={index}
          className="group bg-slate-900/40 backdrop-blur-xl hover:bg-slate-900/60 rounded-3xl border border-slate-600/20 hover:border-emerald-400/40 p-4 lg:p-6 shadow-lg hover:shadow-emerald-500/20 transition-all duration-200 cursor-pointer overflow-hidden"
          onClick={() => toggleItem(index)}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg lg:text-xl font-semibold text-slate-50 group-hover:text-emerald-400 pr-4 leading-tight">
                {question}
              </h3>
            </div>
            <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-teal-500/20 group-hover:bg-teal-500/40 border border-teal-400/30 flex items-center justify-center text-slate-200 shadow-md transition-all duration-100 group-hover:scale-110">
              <Plus
                className={`w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-200 ${
                  openIndex === index ? "rotate-45 scale-125 text-emerald-400" : ""
                }`}
              />
            </div>
          </div>

          {/* Animated answer */}
          <div
            className={`overflow-hidden transition-all duration-400 ease-in-out ${
              openIndex === index ? "max-h-96 mt-6 pt-4 border-t border-slate-600/30" : "max-h-0 mt-0 pt-0 border-0"
            }`}
          >
            <p className="text-slate-200/90 leading-relaxed text-sm lg:text-base">
              {(() => {
                switch (index) {
                  case 0:
                    return "Сервис сразу показывает, кто демпингует на маркетплейсах, чтобы вы могли корректировать цены и сохранять маржу.";
                  case 1:
                    return "Да, можно анализировать конкурентов, видеть их цены, рейтинги и изменения позиции на Kaspi и WB.";
                  case 2:
                    return "Подключение доступно от 0 ₸, в зависимости от выбранного тарифа и количества товаров.";
                  case 3:
                    return "Сервис работает со всеми категориями, но для некоторых специфических товаров могут быть ограничения.";
                  case 4:
                    return "Результаты видны уже через несколько часов: вы получаете актуальные данные о ценах и позициях.";
                  case 5:
                    return "Да, можно интегрировать с Kaspi и Wildberries, чтобы получать обновления автоматически.";
                  default:
                    return "Ответ появится здесь.";
                }
              })()}
            </p>
          </div>
        </div>
      ))}

      <button className="w-full mt-10 bg-gradient-to-r from-teal-500 to-emerald-400 hover:from-teal-400 hover:to-emerald-500 text-slate-950 py-5 lg:py-6 px-8 rounded-3xl font-semibold text-lg shadow-2xl hover:shadow-emerald-400/50 transition-all duration-200 hover:-translate-y-1">
        Получить демо
      </button>
    </div>
  );
}
