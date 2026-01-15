// CtaSection.tsx
export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-emerald-900/95 to-emerald-950/95 py-20 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <div className="bg-emerald-900/60 backdrop-blur-2xl rounded-3xl border border-emerald-600/40 shadow-2xl shadow-emerald-900/60 p-8 lg:p-12 text-center">
          {/* Header */}
          <div className="mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-emerald-50/95 mb-4 leading-tight drop-shadow-lg">
              Хочешь быть в топе продавцов Kaspi?
            </h2>
            <p className="text-lg lg:text-xl text-emerald-100/95 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Подключись к SaleScout прямо сейчас!
            </p>
          </div>

          {/* Main CTA */}
          <div className="bg-linear-to-r from-emerald-500 to-emerald-400 rounded-3xl p-1 shadow-2xl shadow-emerald-600/60 mb-8 lg:mb-12 max-w-md mx-auto">
            <button className="w-full block bg-emerald-950/95 hover:bg-emerald-900/95 rounded-3xl px-8 py-6 lg:py-7 text-lg lg:text-xl font-bold text-emerald-50 shadow-2xl hover:shadow-emerald-600/70 transition-all duration-300 hover:-translate-y-1 border border-emerald-600/50">
              Подключить SaleScout
            </button>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 pt-8 lg:pt-12 border-t border-emerald-500/40">
            <div className="flex flex-col items-center p-4 lg:p-6 rounded-2xl hover:bg-emerald-800/50 border border-emerald-600/30 hover:border-emerald-500/60 transition-all duration-200 group backdrop-blur-xl">
              <span className="w-12 h-12 lg:w-14 lg:h-14 bg-emerald-500/30 hover:bg-emerald-500/50 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-all shadow-lg">
                ⚡
              </span>
              <p className="text-sm lg:text-base font-semibold text-emerald-100 group-hover:text-emerald-50 text-center">
                Обновление каждые 3 мин
              </p>
            </div>

            <div className="flex flex-col items-center p-4 lg:p-6 rounded-2xl hover:bg-emerald-800/50 border border-emerald-600/30 hover:border-emerald-500/60 transition-all duration-200 group backdrop-blur-xl">
              <span className="w-12 h-12 lg:w-14 lg:h-14 bg-emerald-500/30 hover:bg-emerald-500/50 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-all shadow-lg">
                📊
              </span>
              <p className="text-sm lg:text-base font-semibold text-emerald-100 group-hover:text-emerald-50 text-center">
                Аналитика конкурентов
              </p>
            </div>

            <div className="flex flex-col items-center p-4 lg:p-6 rounded-2xl hover:bg-emerald-800/50 border border-emerald-600/30 hover:border-emerald-500/60 transition-all duration-200 group backdrop-blur-xl">
              <span className="w-12 h-12 lg:w-14 lg:h-14 bg-emerald-500/30 hover:bg-emerald-500/50 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-all shadow-lg">
                🏆
              </span>
              <p className="text-sm lg:text-base font-semibold text-emerald-100 group-hover:text-emerald-50 text-center">
                ТОП‑1 продавцов
              </p>
            </div>

            <div className="flex flex-col items-center p-4 lg:p-6 rounded-2xl hover:bg-emerald-800/50 border border-emerald-600/30 hover:border-emerald-500/60 transition-all duration-200 group backdrop-blur-xl">
              <span className="w-12 h-12 lg:w-14 lg:h-14 bg-emerald-500/30 hover:bg-emerald-500/50 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-all shadow-lg">
                🔒
              </span>
              <p className="text-sm lg:text-base font-semibold text-emerald-100 group-hover:text-emerald-50 text-center">
                Безопасно и надежно
              </p>
            </div>
          </div>

          {/* Bottom CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-emerald-500/40">
            <button className="flex-1 rounded-2xl bg-emerald-600/95 hover:bg-emerald-500/95 px-6 py-4 text-emerald-950 font-bold shadow-xl hover:shadow-emerald-600/60 transition-all duration-300 border border-emerald-500/50">
              Связаться с нами
            </button>
            <button className="flex-1 rounded-2xl border-2 border-emerald-500/60 bg-emerald-900/40 hover:bg-emerald-800/50 px-6 py-4 text-emerald-100 font-semibold shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 backdrop-blur-xl">
              Тарифы
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
