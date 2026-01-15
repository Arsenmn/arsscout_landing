// StatsSection.tsx
export default function StatsSection() {
  return (
    <section className="py-24 bg-[#0b1b17]/95 text-emerald-50">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left text column */}
          <div className="space-y-8 lg:max-w-lg">
            <div className="inline-flex items-center gap-3 rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300 border border-emerald-500/20">
              <span className="text-emerald-400">📊</span>
              Результаты клиентов
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-semibold text-emerald-50">
                Ожидаемый рост продаж - цифры говорят сами за себя
              </h2>
              <p className="text-lg leading-relaxed text-emerald-100/80">
                Обычная аналитика конкурентов на Kaspi. ArSScout обходит результаты конкурентов на 57%.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="space-y-1">
                <p className="text-2xl font-bold text-emerald-400">+57%</p>
                <p className="text-sm text-emerald-200">ROI</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-emerald-400">20ч/сутки</p>
                <p className="text-sm text-emerald-200">1-е место</p>
              </div>
            </div>
          </div>

          {/* Right chart + stats */}
          <div className="relative">
            {/* Main pie chart container */}
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-emerald-900/40 to-blue-900/40 shadow-2xl shadow-emerald-900/50 border border-emerald-500/20 p-8">
              {/* Pie chart - use your image */}
              <img
                src="/circleStat.png"
                alt="57% ROI ArSScout"
                className="w-full h-full object-contain rounded-2xl"
              />
              
              {/* Center badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent drop-shadow-lg">
                    57%
                  </div>
                  <p className="text-xs text-emerald-200 uppercase tracking-wide">ROI</p>
                </div>
              </div>
            </div>

            {/* Bottom stats cards */}
            <div className="grid grid-cols-2 gap-3 mt-6 lg:mt-8">
              <div className="flex flex-col items-center p-4 rounded-xl bg-emerald-900/60 border border-emerald-500/30 text-xs text-emerald-100">
                <span className="text-emerald-300 font-semibold">📈</span>
                <p className="text-xs mt-1">Платформы Kaspi, Halyk, Jmart</p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-xl bg-emerald-900/60 border border-emerald-500/30 text-xs text-emerald-100">
                <span className="text-emerald-300 font-semibold">⚡</span>
                <p className="text-xs mt-1">Обновление каждые 3 мин</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
