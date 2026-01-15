import { ChartBarBig, Lock, Trophy, Zap } from "lucide-react";

// CtaSection.tsx
export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900/95 via-slate-950/95 to-slate-900/95 py-20 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <div className="bg-slate-900/70 backdrop-blur-2xl rounded-3xl border border-slate-600/40 shadow-2xl shadow-slate-900/60 p-8 lg:p-12 text-center">
          {/* Header */}
          <div className="mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-50/95 mb-4 leading-tight drop-shadow-lg">
              Будь на шаг впереди конкурентов
            </h2>
            <p className="text-lg lg:text-xl text-slate-300/95 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Подключись к нашему демпинг-сервису и контролируй цены, сохраняя маржу
            </p>
          </div>

          {/* Main CTA */}
          <div className="bg-gradient-to-r from-emerald-500/30 to-teal-400/30 rounded-3xl p-1 shadow-2xl shadow-slate-600/50 mb-8 lg:mb-12 max-w-md mx-auto">
            <button className="w-full block bg-slate-950/90 hover:bg-slate-900/90 rounded-3xl px-8 py-6 lg:py-7 text-lg lg:text-xl font-bold text-slate-50 shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-1 border border-slate-600/50">
              Подключить демпинг‑бот
            </button>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 pt-8 lg:pt-12 border-t border-slate-600/40">
            <div className="flex flex-col items-center p-4 lg:p-6 rounded-2xl hover:bg-slate-800/50 border border-slate-600/30 hover:border-blue-400/40 transition-all duration-200 group backdrop-blur-xl">
              <span className="w-12 h-12 lg:w-14 lg:h-14 bg-blue-500/80 hover:bg-blue-500/100 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-all shadow-lg">
                <Zap />
              </span>
              <p className="text-sm lg:text-base font-semibold text-slate-200 group-hover:text-slate-50 text-center">
                Проверка каждые 3 минуты
              </p>
            </div>

            <div className="flex flex-col items-center p-4 lg:p-6 rounded-2xl hover:bg-slate-800/50 border border-slate-600/30 hover:border-purple-400/40 transition-all duration-200 group backdrop-blur-xl">
              <span className="w-12 h-12 lg:w-14 lg:h-14 bg-purple-400/80 hover:bg-purple-400 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-all shadow-lg">
                <ChartBarBig />
              </span>
              <p className="text-sm lg:text-base font-semibold text-slate-200 group-hover:text-slate-50 text-center">
                Аналитика конкурентов
              </p>
            </div>

            <div className="flex flex-col items-center p-4 lg:p-6 rounded-2xl hover:bg-slate-800/50 border border-slate-600/30 hover:border-amber-400/40 transition-all duration-200 group backdrop-blur-xl">
              <span className="w-12 h-12 lg:w-14 lg:h-14 bg-amber-400/80 hover:bg-amber-400 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-all shadow-lg">
                <Trophy />
              </span>
              <p className="text-sm lg:text-base font-semibold text-slate-200 group-hover:text-slate-50 text-center">
                ТОП‑1 на рынке
              </p>
            </div>

            <div className="flex flex-col items-center p-4 lg:p-6 rounded-2xl hover:bg-slate-800/50 border border-slate-600/30 hover:border-green-400/40 transition-all duration-200 group backdrop-blur-xl">
              <span className="w-12 h-12 lg:w-14 lg:h-14 bg-green-400/80 hover:bg-green-400 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-all shadow-lg">
                <Lock />
              </span>
              <p className="text-sm lg:text-base font-semibold text-slate-200 group-hover:text-slate-50 text-center">
                Безопасно и надежно
              </p>
            </div>
          </div>

          {/* Bottom CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-slate-600/40">
            <button className="flex-1 rounded-2xl bg-teal-500/80 hover:bg-teal-400 px-6 py-4 text-slate-800 font-bold shadow-xl hover:shadow-teal-500/50 transition-all duration-300 border border-emerald-400/50">
              Связаться с нами
            </button>
            <button className="flex-1 rounded-2xl border-2 border-blue-400/50 bg-slate-900/40 hover:bg-slate-800/50 px-6 py-4 font-semibold shadow-xl hover:shadow-blue-400/40 transition-all duration-300 backdrop-blur-xl text-blue-400">
              Тарифы
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
