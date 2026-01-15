// StatsSection.tsx
export default function StatsSection() {
  return (
    <section className="py-24 bg-gray-900 text-gray-100">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left text column */}
          <div className="space-y-8 lg:max-w-lg">
            <div className="inline-flex items-center gap-3 rounded-full bg-gray-700/20 px-4 py-2 text-sm text-gray-300 border border-gray-600/20">
              <span className="text-gray-400">📊</span>
              Демпинг под контролем
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-50">
                Цифры, которые говорят сами за себя
              </h2>
              <p className="text-lg leading-relaxed text-gray-200/70">
                Сервис демпинга показывает, кто снижает цену и когда реагировать. Средняя эффективность наших клиентов — рост продаж на 50–60%.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="space-y-1">
                <p className="text-2xl font-bold text-gray-400">+57%</p>
                <p className="text-sm text-gray-300">Сохранённая маржа</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-gray-400">20ч/сутки</p>
                <p className="text-sm text-gray-300">Мониторинг рынка</p>
              </div>
            </div>
          </div>

          {/* Right chart + stats */}
          <div className="relative">
            {/* Main pie chart container */}
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-700/40 shadow-2xl shadow-gray-900/50 border border-gray-600/20 p-8">
              {/* Pie chart - use your image */}
              <img
                src="/circleStat.png"
                alt="57% ROI Демпинг"
                className="w-full h-full object-contain rounded-2xl"
              />
              
              {/* Center badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
                    57%
                  </div>
                  <p className="text-xs text-gray-300 uppercase tracking-wide">ROI</p>
                </div>
              </div>
            </div>

            {/* Bottom stats cards */}
            <div className="grid grid-cols-2 gap-3 mt-6 lg:mt-8">
              <div className="flex flex-col items-center p-4 rounded-xl bg-gray-800/60 border border-gray-600/30 text-xs text-gray-100">
                <span className="text-gray-300 font-semibold">📈</span>
                <p className="text-xs mt-1">Мониторинг всех платформ</p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-xl bg-gray-800/60 border border-gray-600/30 text-xs text-gray-100">
                <span className="text-gray-300 font-semibold">⚡</span>
                <p className="text-xs mt-1">Обновления каждые 3 минуты</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
