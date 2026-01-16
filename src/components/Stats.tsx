import { ChartColumnBig, ChartColumnIncreasing, Zap } from "lucide-react";

export default function StatsSection() {
  const steps = [
    {
      id: 1,
      title: "Регистрация и подключение магазина",
    },
    {
      id: 2,
      title: "Автоматическая загрузка товаров",
    },
    {
      id: 3,
      title: "Настройка минимальной цены",
    },
    {
      id: 4,
      title: "Мониторинг конкурентов",
    },
    {
      id: 5,
      title: "Автоматическое снижение цены",
    },
    {
      id: 6,
      title: "Первое место в списке продавцов",
    },
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-32 items-center">
          {/* Left text column */}
          <div className="space-y-10 lg:max-w-xl">
            <div className="inline-flex items-center gap-4 rounded-2xl bg-blue-50 px-6 py-3 text-sm font-semibold text-blue-700 border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300">
              <span className="text-2xl"><ChartColumnBig /></span>
              <span className="tracking-wide uppercase">
                Станьте лидером продаж
              </span>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight">
                Демпинг под контролем
              </h2>
            </div>

            {/* Text list */}

            <ul className="space-y-4 p-6 pb-2 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-300/50 hover:bg-blue-50/30 transition-all duration-400">
              {steps.map(({ id, title }) => (
                <li className="flex items-start gap-3 text-slate-800 hover:text-blue-700 group">
                  <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-transform">
                    {id}
                  </span>
                  <span className="leading-relaxed text-base group-hover:underline">
                    {title}
                  </span>
                </li>
              ))}
            </ul>
              <p className="text-xl lg:text-lg leading-relaxed text-slate-600 max-w-md">
                Настройте бота за 15 минут и готово! Вы первый кого видит клиент. С нашим сервисом вы потеряете нужду в менеджере.
              </p>
          </div>

          {/* Right chart + stats */}
          <div className="relative lg:-mr-20 xl:-mr-0">
            {/* Main pie chart container */}
            <div className="relative mx-auto w-96 h-96 lg:w-[28rem] lg:h-[28rem] rounded-3xl bg-white shadow-2xl border border-slate-200 p-12 lg:p-14 overflow-hidden group hover:shadow-xl hover:border-emerald-300/60 transition-all duration-500">
              {/* Pie chart image */}
              <div className="relative z-10 w-full h-full">
                <img
                  src="/circleStat.png"
                  alt="Демпинг статистика"
                  className="w-full h-full object-contain rounded-2xl shadow-lg group-hover:shadow-md transition-shadow duration-500"
                />
              </div>

              {/* Center badge */}
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="text-center p-8 bg-white/90 rounded-3xl shadow-lg border border-slate-200">
                  <div className="text-4xl lg:text-5xl font-black text-emerald-600 mb-2 leading-none">
                    80%
                  </div>
                  <p className="text-sm uppercase tracking-widest font-bold text-slate-700">
                    ROI
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom stats cards */}
            <div className="grid grid-cols-2 gap-6 mt-12 lg:mt-16">
              <div className="group flex flex-col items-center p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl border border-slate-200 hover:border-blue-300/60 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1">
                <ChartColumnIncreasing className="w-12 h-12 text-slate-600 group-hover:text-blue-500 transition-all duration-400 mb-4" />
                <p className="text-sm lg:text-base font-semibold text-slate-800 text-center leading-tight px-4 group-hover:text-blue-700">
                  Мониторинг всех платформ
                </p>
              </div>

              <div className="group flex flex-col items-center p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl border border-slate-200 hover:border-orange-300/60 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1">
                <Zap className="w-12 h-12 text-slate-600 group-hover:text-amber-500 transition-all duration-400 mb-4" />
                <p className="text-sm lg:text-base font-semibold text-slate-800 text-center leading-tight px-4 group-hover:text-amber-700">
                  Обновления каждые 3 минуты
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
