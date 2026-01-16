import { ChartColumnIncreasing, Zap } from "lucide-react";

// StatsSection.tsx
export default function StatsSection() {
  return (
    <section className="py-24 text-gray-100 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-slate-800 [background-position:-80px_-80px] [mask-image:radial-gradient(circle_at_50%_50%,transparent_40%,black_70%)] after:absolute after:inset-0 after:bg-linear-to-r after:from-gray-900 after:to-transparent after:[mask-image:linear-gradient(to_b,_transparent_30%,white_90%)]" />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-32 items-center">
          {/* Left text column */}
          <div className="space-y-10 lg:max-w-xl">
            <div className="inline-flex items-center gap-3 rounded-full bg-gray-800/50 backdrop-blur-sm px-5 py-2.5 text-sm font-medium text-gray-300 border border-gray-700/50 shadow-lg shadow-black/30">
              <span className="text-lg">📊</span>
              <span>Демпинг под контролем</span>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold bg-linear-to-r from-gray-100 via-white to-gray-300 bg-clip-text text-transparent leading-tight drop-shadow-2xl">
                Цифры, которые говорят сами за себя
              </h2>
              <p className="text-xl leading-relaxed text-gray-300/80 max-w-md">
                Сервис демпинга показывает, кто снижает цену и когда реагировать. Средняя эффективность наших клиентов — рост продаж на 50–60%.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              <div className="group space-y-2 p-6 rounded-2xl bg-linear-to-br from-gray-800/30 to-gray-900/50 border border-gray-700/40 backdrop-blur-md hover:border-gray-600/60 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-900/50 hover:-translate-y-1">
                <div className="text-4xl font-black text-gray-400 group-hover:text-gray-200 transition-colors">+57%</div>
                <p className="text-sm font-medium text-gray-300">Сохранённая маржа</p>
              </div>
              <div className="group space-y-2 p-6 rounded-2xl bg-linear-to-br from-gray-800/30 to-gray-900/50 border border-gray-700/40 backdrop-blur-md hover:border-gray-600/60 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-900/50 hover:-translate-y-1">
                <div className="text-4xl font-black text-gray-400 group-hover:text-gray-200 transition-colors">20ч/сутки</div>
                <p className="text-sm font-medium text-gray-300">Мониторинг рынка</p>
              </div>
            </div>
          </div>

          {/* Right chart + stats */}
          <div className="relative lg:-mr-20 xl:-mr-0">
            {/* Main pie chart container */}
            <div className="relative mx-auto w-96 h-96 lg:w-[28rem] lg:h-[28rem] rounded-3xl bg-linear-to-br from-gray-800/50 via-gray-900/60 to-black/40 shadow-2xl shadow-gray-900/60 border border-gray-600/40 backdrop-blur-xl p-10 lg:p-12 overflow-hidden">
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent rounded-3xl" />
              
              {/* Pie chart image */}
              <div className="relative z-10 w-full h-full">
                <img
                  src="/circleStat.png"
                  alt="57% ROI Демпинг"
                  className="w-full h-full object-contain rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Center badge - enhanced */}
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="text-center p-6 bg-black/50 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl shadow-black/40">
                  <div className="text-5xl lg:text-6xl font-black bg-linear-to-r from-gray-200 via-white to-blue-300 bg-clip-text text-transparent drop-shadow-2xl mb-1 leading-none tracking-tight">
                    57%
                  </div>
                  <p className="text-xs uppercase tracking-widest font-semibold text-gray-400 bg-linear-to-r from-gray-500 to-gray-400 bg-clip-text">
                    ROI
                  </p>
                </div>
              </div>

              {/* Subtle glow */}
              <div className="absolute -inset-2 bg-linear-radial from-blue-500/10 via-transparent to-purple-500/5 rounded-3xl blur-xl animate-pulse" />
            </div>

            {/* Bottom stats cards - enhanced */}
            <div className="grid grid-cols-2 gap-4 mt-10 lg:mt-12">
              <div className="group relative flex flex-col items-center p-6 rounded-2xl bg-linear-to-br from-gray-800/70 to-gray-900/80 border border-gray-600/50 backdrop-blur-xl shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-gray-900/60 transition-all duration-500 hover:scale-[1.02] hover:border-gray-500/70 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-2xl z-10 group-hover:scale-110 transition-transform duration-300"><ChartColumnIncreasing className="group-hover:text-violet-500 transition-colors duration-200"/></span>
                <p className="text-xs font-medium text-gray-300 mt-2 z-10 text-center leading-tight px-2 group-hover:text-violet-500 transition-colors duration-200">
                  Мониторинг всех платформ
                </p>
              </div>
              
              <div className="group relative flex flex-col items-center p-6 rounded-2xl bg-linear-to-br from-gray-800/70 to-gray-900/80 border border-gray-600/50 backdrop-blur-xl shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-gray-900/60 transition-all duration-500 hover:scale-[1.02] hover:border-gray-500/70 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-2xl z-10 group-hover:scale-110 transition-transform duration-300"><Zap className="group-hover:text-amber-400 transition-colors duration-200"/></span>
                <p className="text-xs font-medium text-gray-300 mt-2 z-10 text-center leading-tight px-2 group-hover:text-amber-400 transition-colors duration-200">
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
