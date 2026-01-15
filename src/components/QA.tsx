import { useState } from "react";
import { Plus } from "lucide-react";

const faqItems = [
  "Как SaleScout помогает с демпингом?",
  "Можно ли отслеживать чужие товары?",
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
    <div className="space-y-6 px-4 pb-12 bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 relative">
      <h2 className="text-4xl lg:text-5xl font-bold mb-10 text-center italic font-['JetBrains_Mono'] font-bold text-emerald-300 pt-8">
        Вопросы о SaleScout
      </h2>

      {faqItems.map((question, index) => (
        <div
          key={index}
          className="group bg-emerald-900/40 backdrop-blur-xl hover:bg-emerald-900/60 rounded-3xl border border-emerald-500/20 hover:border-emerald-400/40 p-4 lg:p-6 shadow-lg hover:shadow-emerald-900/50 transition-all duration-200 cursor-pointer overflow-hidden"
          onClick={() => toggleItem(index)}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg lg:text-xl font-semibold text-emerald-50 group-hover:text-emerald-100 pr-4 leading-tight">
                {question}
              </h3>
            </div>
            <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-emerald-500/20 group-hover:bg-emerald-500/40 border border-emerald-500/30 flex items-center justify-center text-emerald-300 shadow-md transition-all duration-100 group-hover:scale-110">
              <Plus
                className={`w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-200 ${
                  openIndex === index ? "rotate-45 scale-125" : ""
                }`}
              />
            </div>
          </div>

          {/* Animated answer */}
          <div
            className={`overflow-hidden transition-all duration-400 ease-in-out ${
              openIndex === index ? "max-h-96 mt-6 pt-4 border-t border-emerald-500/30" : "max-h-0 mt-0 pt-0 border-0"
            }`}
          >
            <p className="text-emerald-100/90 leading-relaxed text-sm lg:text-base">
              {(() => {
                switch (index) {
                  case 0:
                    return "SaleScout сразу показывает, кто демпингует на Kaspi и WB, чтобы вы могли корректировать цены и защищать маржу.";
                  case 1:
                    return "Да, вы можете анализировать чужие товары и видеть их цены, рэйтинги и изменения позиции на маркетплейсах.";
                  case 2:
                    return "Подключение к SaleScout доступно от 0 ₸, в зависимости от выбранного тарифного плана и количества товаров.";
                  case 3:
                    return "Сервис работает со всеми категориями, но некоторые специфические товары могут иметь ограничения по аналитике.";
                  case 4:
                    return "Результаты видны уже через несколько часов: вы получаете актуальные данные о конкурентах и ценах.";
                  case 5:
                    return "Да, SaleScout интегрируется напрямую с Kaspi и Wildberries, обновляя данные автоматически в вашем личном кабинете.";
                  default:
                    return "Ответ появится здесь.";
                }
              })()}
            </p>
          </div>
        </div>
      ))}

      <button className="w-full mt-10 bg-gradient-to-r from-emerald-500/95 to-emerald-400/95 hover:from-emerald-400 hover:to-emerald-300 text-[#0b1b17] py-5 lg:py-6 px-8 rounded-3xl font-semibold text-lg shadow-2xl hover:shadow-emerald-500/50 transition-all duration-200 hover:-translate-y-1">
        Получить демо
      </button>
    </div>
  );
}
