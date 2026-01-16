import { ChartNoAxesCombined, MoonStar, Rocket, Zap } from "lucide-react";

// SalesPitchSection.tsx - LIGHT THEME (COLORS ONLY)
export default function SalesPitchSection() {
  return (
    <section className="relative pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-gray-50">
      {/* Light background orbs & pattern */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-400/6 rounded-full blur-3xl animate-[pulse_12s_cubic-bezier(0.4,0,0.6,1)_infinite]" style={{ animationDelay: "0s" }} />
        <div className="absolute top-1/3 right-20 w-96 h-96 bg-teal-300/4 rounded-full blur-3xl animate-[pulse_16s_cubic-bezier(0.4,0,0.6,1)_infinite]" style={{ animationDelay: "4s" }} />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-emerald-300/5 rounded-full blur-3xl animate-[pulse_14s_cubic-bezier(0.4,0,0.6,1)_infinite]" style={{ animationDelay: "8s" }} />

        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_25%_25%,rgba(16,185,129,0.04),transparent_50%)]" />
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_75%_75%,rgba(20,184,166,0.04),transparent_50%)]" />
      </div>

      <div className="mx-auto px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-24 max-w-4xl mx-auto">
          <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent mb-6 leading-tight">
            Повышаем продажи без риска
          </h2>
          <p className="text-2xl lg:text-3xl text-slate-600/90 max-w-3xl mx-auto leading-relaxed tracking-tight">
            Реагируйте быстрее конкурентов, сохраняйте маржу и увеличивайте доход.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-10 mb-20 lg:mb-24">
          {/* Benefit 1 */}
          <div className="group relative bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-xl hover:shadow-slate-300/40 hover:border-slate-300/80 transition-all duration-700 ease-out hover:-translate-y-3 hover:scale-[1.01] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/60 to-yellow-100/40 opacity-0 group-hover:opacity-100 group-hover:animate-pulse blur-sm transition-all duration-1000 rounded-3xl" />
            <div className="relative flex flex-col items-center text-center h-full justify-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-yellow-100/80 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-8 border-2 border-amber-200/70 shadow-lg hover:shadow-yellow-300/60 group-hover:scale-110 transition-all duration-500 ease-out">
                <Zap className="w-10 h-10 lg:w-12 lg:h-12 text-yellow-600 drop-shadow-md transition-all duration-300" />
              </div>
              <h4 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">Каждые 3 мин</h4>
              <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-xs mx-auto tracking-wide group-hover:text-slate-800">
                Проверяем цены конкурентов и выводим вас на 1 место
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="group relative bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-xl hover:shadow-slate-300/40 hover:border-slate-300/80 transition-all duration-700 ease-out hover:-translate-y-3 hover:scale-[1.01] overflow-hidden md:col-span-2 xl:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-indigo-50/40 opacity-0 group-hover:opacity-100 group-hover:animate-pulse blur-sm transition-all duration-1000 rounded-3xl" />
            <div className="relative flex flex-col items-center text-center h-full justify-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-blue-100/80 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-8 border-2 border-blue-200/70 shadow-lg hover:shadow-blue-300/60 group-hover:scale-110 transition-all duration-500 ease-out">
                <MoonStar className="w-10 h-10 lg:w-12 lg:h-12 text-blue-600 drop-shadow-md transition-all duration-300" />
              </div>
              <h4 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">Никогда не спим</h4>
              <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-xs mx-auto tracking-wide group-hover:text-slate-800">
                Работаем 24/7. Даже ночью получаете заказы
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="group relative bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-xl hover:shadow-slate-300/40 hover:border-slate-300/80 transition-all duration-700 ease-out hover:-translate-y-3 hover:scale-[1.01] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 to-violet-50/40 opacity-0 group-hover:opacity-100 group-hover:animate-pulse blur-sm transition-all duration-1000 rounded-3xl" />
            <div className="relative flex flex-col items-center text-center h-full justify-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-purple-100/80 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-8 border-2 border-violet-200/70 shadow-lg hover:shadow-purple-300/60 group-hover:scale-110 transition-all duration-500 ease-out">
                <ChartNoAxesCombined className="w-10 h-10 lg:w-12 lg:h-12 text-violet-600 drop-shadow-md transition-all duration-300" />
              </div>
              <h4 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">x2-5 заказов</h4>
              <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-xs mx-auto tracking-wide group-hover:text-slate-800">
                Клиенты подтверждают: продажи растут в 2-10 раз
              </p>
            </div>
          </div>

          {/* CTA Card */}
          <div className="group relative bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/90 backdrop-blur-2xl border-2 border-emerald-200/70 rounded-3xl p-10 lg:p-12 shadow-xl hover:shadow-2xl hover:shadow-emerald-300/40 hover:border-emerald-300/90 transition-all duration-700 ease-out hover:scale-[1.02] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/40 to-teal-100/40 opacity-30 blur-sm rounded-3xl animate-pulse" />
            <div className="relative flex flex-col items-center text-center h-full justify-center space-y-6">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-emerald-100/60 backdrop-blur-sm rounded-3xl flex items-center justify-center border-2 border-emerald-300/70 shadow-lg hover:shadow-emerald-400/60 group-hover:scale-110 transition-all duration-500 ease-out">
                <Rocket className="w-10 h-10 lg:w-12 lg:h-12 text-emerald-600 drop-shadow-md transition-all duration-300" />
              </div>
              <h4 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4">Начните сейчас</h4>
              <p className="text-slate-700 text-lg font-semibold">Бесплатный тест. Без риска.</p>
              <button className="px-10 py-4 bg-gradient-to-r from-emerald-500/95 to-teal-500/95 text-white font-black text-lg rounded-2xl shadow-xl hover:shadow-emerald-500/60 hover:scale-105 transition-all duration-300 border border-emerald-400/50 backdrop-blur-sm">
                Подключить сервис
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
