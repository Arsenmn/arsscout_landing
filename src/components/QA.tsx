import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "Как сервис помогает с демпингом?",
    answer: "Сервис сразу показывает, кто демпингует на маркетплейсах, чтобы вы могли корректировать цены и сохранять маржу. Получаете уведомления о подозрительных снижениях цен конкурентов."
  },
  {
    question: "Можно ли отслеживать конкурентов?",
    answer: "Да, можно анализировать конкурентов, видеть их цены, рейтинги, количество отзывов и изменения позиции на Kaspi и WB. Полный мониторинг топ-50 продавцов."
  },
  {
    question: "Сколько стоит подключение?",
    answer: "Подключение доступно от 0 ₸ для тестового периода. Полные тарифы от 5 000 ₸/мес в зависимости от количества товаров и глубины анализа."
  },
  {
    question: "Есть ли ограничения по категориям?",
    answer: "Сервис работает со всеми категориями товаров. Единственное ограничение — товары с динамическими ценами (авиабилеты, отели) требуют специальной настройки."
  },
  {
    question: "Как быстро видны результаты?",
    answer: "Результаты видны уже через 2-4 часа после подключения. Вы получаете актуальные данные о ценах, позициях и рекомендациях по корректировке."
  },
  {
    question: "Можно ли интегрировать с Kaspi и WB?",
    answer: "Да, полная интеграция с Kaspi и Wildberries. Автоматические обновления цен, уведомления в Telegram и API для ваших систем."
  }
];

export default function QA() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6 px-4 pb-12 relative">
      <h2 className="text-4xl lg:text-5xl font-bold mb-10 text-center italic font-mono text-slate-300 pt-8">
        Часто задаваемые вопросы
      </h2>

      <div className="space-y-4 max-w-4xl mx-auto">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          
          return (
            <motion.div
              key={index}
              className="group bg-slate-900/40 backdrop-blur-xl hover:bg-slate-900/60 rounded-3xl border border-slate-600/20 hover:border-emerald-400/40 p-6 lg:p-8 shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => toggleItem(index)}
              initial={false}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <motion.h3 
                    className="text-lg lg:text-xl font-semibold text-slate-50 group-hover:text-emerald-400 pr-4 leading-tight"
                    animate={{ color: isOpen ? "#10B981" : "#F8FAFC" }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.question}
                  </motion.h3>
                </div>
                <motion.div 
                  className="shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-teal-500/20 group-hover:bg-teal-500/40 border border-teal-400/30 flex items-center justify-center text-slate-200 shadow-md transition-all duration-200"
                  animate={{ 
                    backgroundColor: isOpen ? "rgba(16, 185, 129, 0.3)" : "rgba(20, 184, 166, 0.2)",
                    scale: isOpen ? 1.1 : 1
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <motion.div
                    animate={{ 
                      rotate: isOpen ? 45 : 0,
                      scale: isOpen ? 1.2 : 1 
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <Plus className="w-5 h-5 lg:w-6 lg:h-6" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Answer - Smooth Framer Motion */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ 
                      opacity: 0, 
                      height: 0, 
                      marginTop: 0,
                      paddingTop: 0,
                      paddingBottom: 0
                    }}
                    animate={{ 
                      opacity: 1, 
                      height: "auto",
                      marginTop: 24,
                      paddingTop: 16,
                      paddingBottom: 16
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      marginTop: 0,
                      paddingTop: 0,
                      paddingBottom: 0
                    }}
                    transition={{ 
                      duration: 0.4, 
                      ease: [0.25, 0.46, 0.45, 0.94] 
                    }}
                    className="border-t border-slate-700/50 overflow-hidden"
                  >
                    <p className="text-slate-300 leading-relaxed text-sm lg:text-base mt-4">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <motion.button 
        className="w-full mt-12 lg:mt-16 bg-linear-to-r from-teal-500 to-emerald-400 hover:from-teal-400 hover:to-emerald-500 text-slate-950 py-5 lg:py-6 px-8 rounded-3xl font-semibold text-lg shadow-2xl hover:shadow-emerald-400/50 transition-all duration-300 mx-auto block max-w-md"
        whileHover={{ 
          scale: 1.02, 
          boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.4)" 
        }}
        whileTap={{ scale: 0.98 }}
      >
        Получить демо
      </motion.button>
    </div>
  );
}
