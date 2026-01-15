import { ChartNoAxesCombined, MoonStar, Rocket, Zap } from "lucide-react";

// SalesPitchSection.tsx
export default function SalesPitchSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-gray-900 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-[-30%]" />
        <div className="absolute bottom-0 right-1/2 w-[800px] h-[800px] bg-teal-400/3 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4 animate-pulse" />
      </div>

      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-28">
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-teal-400 via-teal-300 to-teal-500 bg-clip-text text-transparent mb-6">
            Удвойте продажи на Kaspi
          </h2>
          <p className="text-xl lg:text-2xl text-slate-200/90 max-w-2xl mx-auto leading-relaxed">
            ArSScout ставит вас первым среди конкурентов. Автоматически. 24/7.
            Без убытков.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Benefit 1 */}
          <div className="group relative bg-slate-900/40 backdrop-blur-xl border border-slate-500/30 rounded-3xl p-8 lg:p-10 shadow-2xl shadow-slate-900/50 hover:shadow-teal-500/30 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/20 to-teal-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl group-hover:animate-ping" />

            <div className="relative flex flex-col items-center text-center h-full">
              <div className="w-20 h-20 bg-teal-500/20 backdrop-blur-xl rounded-3xl flex items-center justify-center mb-6 border-2 border-slate-500/50 shadow-xl group-hover:scale-110 transition-all">
                <span className="text-teal-400 text-3xl font-bold">
                  <Zap color="yellow"/>
                </span>
              </div>
              <h4 className="text-2xl lg:text-3xl font-bold text-slate-50 mb-4">
                Каждые 3 мин
              </h4>
              <p className="text-slate-300 text-lg font-medium leading-relaxed">
                Проверяем цены конкурентов и выводим вас на 1 место
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="group relative bg-slate-900/40 backdrop-blur-xl border border-slate-500/30 rounded-3xl p-8 lg:p-10 shadow-2xl shadow-slate-900/50 hover:shadow-teal-500/30 transition-all duration-500 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
            <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/20 to-teal-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl group-hover:animate-ping" />

            <div className="relative flex flex-col items-center text-center h-full">
              <div className="w-20 h-20 bg-teal-500/20 backdrop-blur-xl rounded-3xl flex items-center justify-center mb-6 border-2 border-slate-500/50 shadow-xl group-hover:scale-110 transition-all">
                <span className="text-teal-400 text-3xl font-bold">
                  <MoonStar color="white"/>
                </span>
              </div>
              <h4 className="text-2xl lg:text-3xl font-bold text-slate-50 mb-4">
                Никогда не спим
              </h4>
              <p className="text-slate-300 text-lg font-medium leading-relaxed">
                Работаем 24/7. Даже ночью получаете заказы
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="group relative bg-slate-900/40 backdrop-blur-xl border border-slate-500/30 rounded-3xl p-8 lg:p-10 shadow-2xl shadow-slate-900/50 hover:shadow-teal-500/30 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/20 to-teal-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl group-hover:animate-ping" />

            <div className="relative flex flex-col items-center text-center h-full">
              <div className="w-20 h-20 bg-teal-500/20 backdrop-blur-xl rounded-3xl flex items-center justify-center mb-6 border-2 border-slate-500/50 shadow-xl group-hover:scale-110 transition-all">
                <span className="text-teal-400 text-3xl font-bold">
                  <ChartNoAxesCombined color="lightGreen"/>
                </span>
              </div>
              <h4 className="text-2xl lg:text-3xl font-bold text-slate-50 mb-4">
                x2-5 заказов
              </h4>
              <p className="text-slate-300 text-lg font-medium leading-relaxed">
                Клиенты подтверждают: продажи растут в 2-10 раз
              </p>
            </div>
          </div>

          {/* CTA Card */}
          <div className="group relative bg-gradient-to-br from-teal-500/20 to-teal-400/10 backdrop-blur-2xl border-2 border-slate-500/50 rounded-3xl p-10 shadow-2xl shadow-slate-900/60 hover:shadow-teal-400/40 transition-all duration-500 hover:scale-[1.02] md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-teal-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative flex flex-col items-center text-center h-full justify-center space-y-6">
              <div className="w-20 h-20 bg-teal-500/20 backdrop-blur-xl rounded-3xl flex items-center justify-center mb-6 border-2 border-slate-500/50 shadow-xl group-hover:scale-110 transition-all">
                <span className="text-teal-400 text-3xl font-bold">
                  <Rocket color="red"/>
                </span>
              </div>

              <div>
                <h4 className="text-2xl lg:text-3xl font-bold text-slate-50 mb-4">
                  Начните сейчас
                </h4>
                <p className="text-slate-200 text-lg mb-8">
                  Бесплатный тест. Без риска.
                </p>
              </div>
              <button className="px-10 py-4 bg-teal-500/90 hover:bg-teal-400 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300 border-2 border-slate-400/50 backdrop-blur-sm">
                Подключить ArSScout
              </button>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-500/40 p-8 shadow-xl">
            <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent mb-4">
              +367%
            </div>
            <p className="text-slate-300 text-lg font-semibold">
              Рост заказов (средний)
            </p>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-500/40 p-8 shadow-xl">
            <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent mb-4">
              12k+
            </div>
            <p className="text-slate-300 text-lg font-semibold">
              Заказов за 24ч
            </p>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-500/40 p-8 shadow-xl">
            <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent mb-4">
              3 мин
            </div>
            <p className="text-slate-300 text-lg font-semibold">
              Обновление цен
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}