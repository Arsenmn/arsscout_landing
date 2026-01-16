"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    id: '1',
    title: 'Как сервис помогает с демпингом?',
    content: 'Сервис сразу показывает, кто демпингует на маркетплейсах, чтобы вы могли корректировать цены и сохранять маржу. Получаете уведомления о подозрительных снижениях цен конкурентов.',
  },
  {
    id: '2',
    title: 'Можно ли отслеживать конкурентов?',
    content: 'Да, можно анализировать конкурентов, видеть их цены, рейтинги, количество отзывов и изменения позиции на Kaspi и WB. Полный мониторинг топ-50 продавцов.',
  },
  {
    id: '3',
    title: 'Сколько стоит подключение?',
    content: 'Подключение доступно от 0 ₸ для тестового периода. Полные тарифы от 5 000 ₸/мес в зависимости от количества товаров и глубины анализа.',
  },
  {
    id: '4',
    title: 'Есть ли ограничения по категориям?',
    content: 'Сервис работает со всеми категориями товаров. Единственное ограничение — товары с динамическими ценами (авиабилеты, отели) требуют специальной настройки.',
  },
  {
    id: '5',
    title: 'Как быстро видны результаты?',
    content: 'Результаты видны уже через 2-4 часа после подключения. Вы получаете актуальные данные о ценах, позициях и рекомендациях по корректировке.',
  },
  {
    id: '6',
    title: 'Можно ли интегрировать с Kaspi и WB?',
    content: 'Да, полная интеграция с Kaspi и Wildberries. Автоматические обновления цен, уведомления в Telegram и API для ваших систем.',
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.4,
    },
  }),
};

const QA = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-50" id="qa">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-700 bg-clip-text text-transparent"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Часто задаваемые вопросы
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Всё о демпинг-контроле и мониторинге конкурентов
          </motion.p>
        </motion.div>

        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={item.id}
                custom={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 shadow-sm hover:shadow-md hover:border-emerald-400/60 hover:shadow-emerald-200/30 transition-all duration-300 cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 hover:bg-slate-50/50 hover:rounded-t-2xl transition-colors">
                  <motion.h3 
                    className="text-lg lg:text-xl font-semibold text-slate-900 flex-1 pr-4 leading-tight"
                    animate={{ color: isOpen ? '#047857' : '#111827' }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.div 
                    className="w-11 h-11 rounded-xl bg-emerald-100 border-2 border-emerald-200 flex items-center justify-center text-emerald-700 shadow-sm hover:shadow-md transition-all duration-300 flex-shrink-0"
                    animate={{ 
                      backgroundColor: isOpen ? '#BEF5D9' : '#D1F5E8',
                      scale: isOpen ? 1.15 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: isOpen ? 45 : 0,
                        scale: isOpen ? 1.25 : 1 
                      }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <Plus className="w-5 h-5" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Answer */}
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
                        marginTop: 0,
                        paddingTop: 20,
                        paddingBottom: 20
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
                      className="px-6 pb-6 border-t border-slate-200 bg-slate-50"
                    >
                      <p className="text-slate-700 leading-relaxed text-base">
                        {item.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QA;
