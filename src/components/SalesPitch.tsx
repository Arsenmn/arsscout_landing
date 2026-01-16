// SalesPitchSection.tsx
import { ChartNoAxesCombined, MoonStar, Rocket, Zap } from "lucide-react";

export default function SalesPitchSection() {
  return (
    <section className="relative pb-16 overflow-hidden">
      {/* Background orbs & subtle grid */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-teal-500/8 rounded-full blur-3xl animate-[pulse_12s_cubic-bezier(0.4,0,0.6,1)_infinite]" style={{ animationDelay: "0s" }} />
        <div className="absolute top-1/3 right-20 w-96 h-96 bg-teal-400/6 rounded-full blur-3xl animate-[pulse_16s_cubic-bezier(0.4,0,0.6,1)_infinite]" style={{ animationDelay: "4s" }} />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-teal-300/7 rounded-full blur-3xl animate-[pulse_14s_cubic-bezier(0.4,0,0.6,1)_infinite]" style={{ animationDelay: "8s" }} />

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_25%_25%,rgba(79,70,229,0.1),transparent_50%)]" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_75%_75%,rgba(34,197,94,0.1),transparent_50%)]" />
      </div>

      <div className="mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black bg-linear-to-r from-teal-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent mb-4">
            Повышаем продажи без риска
          </h2>
          <p className="text-2xl lg:text-3xl text-gray-200/90 max-w-3xl mx-auto leading-relaxed tracking-tight">
            Реагируйте быстрее конкурентов, сохраняйте маржу и увеличивайте доход.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-10 mb-16">
          {/* Benefit 1 */}
          <div className="group relative bg-gray-900/50 backdrop-blur-2xl border border-gray-800/60 rounded-3xl p-8 lg:p-10 shadow-2xl shadow-black/40 hover:shadow-teal-500/25 transition-all duration-700 ease-out hover:-translate-y-2 hover:border-teal-500/50 overflow-hidden hover:scale-[1.01]">
            <div className="absolute inset-0 bg-linear-to-br from-teal-500/10 to-emerald-400/5 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse blur-sm transition-all duration-1000" />
            <div className="relative flex flex-col items-center text-center h-full justify-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-linear-to-br from-amber-500/20 to-orange-400/20 backdrop-blur-xl rounded-3xl flex items-center justify-center mb-6 border-2 border-gray-700/50 shadow-2xl group-hover:scale-110 group-hover:shadow-amber-500/30 transition-all duration-500 ease-out">
                <Zap className="w-10 h-10 lg:w-12 lg:h-12 text-amber-400 drop-shadow-lg transition-transform duration-300" />
              </div>
              <h4 className="text-2xl lg:text-3xl font-black text-white mb-2">Каждые 3 мин</h4>
              <p className="text-gray-300 text-lg font-medium leading-relaxed max-w-xs mx-auto tracking-wide">
                Проверяем цены конкурентов и выводим вас на 1 место
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="group relative bg-gray-900/50 backdrop-blur-2xl border border-gray-800/60 rounded-3xl p-8 lg:p-10 shadow-2xl shadow-black/40 hover:shadow-teal-500/25 transition-all duration-700 ease-out hover:-translate-y-2 hover:border-teal-500/50 overflow-hidden hover:scale-[1.01]">
            <div className="absolute inset-0 bg-linear-to-br from-teal-500/10 to-emerald-400/5 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse blur-sm transition-all duration-1000" />
            <div className="relative flex flex-col items-center text-center h-full justify-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-linear-to-br from-blue-500/20 to-blue-300/20 backdrop-blur-xl rounded-3xl flex items-center justify-center mb-6 border-2 border-gray-700/50 shadow-2xl group-hover:scale-110 group-hover:shadow-blue-500/30 transition-all duration-500 ease-out">
                <MoonStar className="w-10 h-10 lg:w-12 lg:h-12 text-blue-400 drop-shadow-lg transition-transform duration-300" />
              </div>
              <h4 className="text-2xl lg:text-3xl font-black text-white mb-2">Никогда не спим</h4>
              <p className="text-gray-300 text-lg font-medium leading-relaxed max-w-xs mx-auto tracking-wide">
                Работаем 24/7. Даже ночью получаете заказы
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="group relative bg-gray-900/50 backdrop-blur-2xl border border-gray-800/60 rounded-3xl p-8 lg:p-10 shadow-2xl shadow-black/40 hover:shadow-teal-500/25 transition-all duration-700 ease-out hover:-translate-y-2 hover:border-teal-500/50 overflow-hidden hover:scale-[1.01]">
            <div className="absolute inset-0 bg-linear-to-br from-teal-500/10 to-emerald-400/5 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse blur-sm transition-all duration-1000" />
            <div className="relative flex flex-col items-center text-center h-full justify-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-linear-to-br from-teal-500/20 to-emerald-400/20 backdrop-blur-xl rounded-3xl flex items-center justify-center mb-6 border-2 border-gray-700/50 shadow-2xl group-hover:scale-110 group-hover:shadow-teal-500/30 transition-all duration-500 ease-out">
                <ChartNoAxesCombined className="w-10 h-10 lg:w-12 lg:h-12 text-teal-400 drop-shadow-lg transition-transform duration-300" />
              </div>
              <h4 className="text-2xl lg:text-3xl font-black text-white mb-2">x2-5 заказов</h4>
              <p className="text-gray-300 text-lg font-medium leading-relaxed max-w-xs mx-auto tracking-wide">
                Клиенты подтверждают: продажи растут в 2-10 раз
              </p>
            </div>
          </div>

          {/* CTA Card */}
          <div className="group relative bg-linear-to-br from-teal-600/20 via-teal-500/15 to-emerald-500/10 backdrop-blur-3xl border-2 border-teal-500/60 rounded-3xl p-10 lg:p-12 shadow-2xl shadow-teal-900/40 hover:shadow-teal-400/50 hover:border-teal-400/80 transition-all duration-700 ease-out hover:scale-[1.02] overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-teal-500/20 via-emerald-400/15 to-teal-400/10 rounded-3xl opacity-60 blur-sm animate-pulse" />
            <div className="relative flex flex-col items-center text-center h-full justify-center space-y-6">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center border-2 border-teal-400/50 shadow-2xl group-hover:scale-110 group-hover:shadow-white/20 transition-all duration-500 ease-out">
                <Rocket className="w-10 h-10 lg:w-12 lg:h-12 text-teal-300 drop-shadow-lg transition-transform duration-300" />
              </div>
              <h4 className="text-2xl lg:text-3xl font-black text-white">Начните сейчас</h4>
              <p className="text-gray-100 text-lg font-semibold opacity-90">Бесплатный тест. Без риска.</p>
              <button className="px-10 py-4 bg-linear-to-r from-teal-500/95 to-emerald-500/95 text-white font-black text-lg rounded-2xl shadow-2xl shadow-teal-500/50 hover:shadow-teal-400/60 hover:scale-105 transition-all duration-300 border border-teal-400/50 backdrop-blur-sm">
                Подключить сервис
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
