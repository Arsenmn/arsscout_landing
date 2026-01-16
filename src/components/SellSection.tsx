import {
  ChartColumnBig,
  Rocket,
  TabletSmartphone,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

export default function SellSection() {
  const featureSpecs = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Все демпингеры",
      desc: "Видите каждого кто сливает цену. Реагируете первыми",
      baseColor: "text-slate-600",
      hoverColor: "group-hover:text-emerald-600",
      hoverBorderShadow:
        "hover:shadow-emerald-500 group-hover:border-orange-500",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Мгновенный отклик",
      desc: "Каждые 3 мин проверяем конкурентов и корректируем",
      baseColor: "text-slate-600",
      hoverColor: "group-hover:text-amber-500",
      hoverBorderShadow:
        "hover:shadow-amber-500 group-hover:border-orange-500",
    },
    {
      icon: <Wallet className="w-12 h-12" />,
      title: "Маржа защищена",
      desc: "Никогда не демпингуем ниже вашей себестоимости",
      baseColor: "text-slate-600",
      hoverColor: "group-hover:text-orange-800",
      hoverBorderShadow:
        "hover:shadow-orange-800 group-hover:border-orange-800",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-gray-50">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(16,185,129,0.02)_25%,transparent_25%,transparent_50%,rgba(16,185,129,0.02)_50%,rgba(16,185,129,0.02)_75%,transparent_75%,transparent)] animate-gentle-grid opacity-50" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        {/* Hero split */}
        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-24 mb-24 lg:mb-32">
          {/* Left text + CTA */}
          <div className="lg:order-2 space-y-8 lg:max-w-lg">
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-emerald-50/80 border border-emerald-200/50 backdrop-blur-xl shadow-lg shadow-emerald-100/50">
              <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">
                Антидемпинг бот
              </span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-slate-900 via-slate-700 to-emerald-600/90 bg-clip-text text-transparent leading-tight">
              Демпингеры крадут
              <br />
              ваши заказы?
              <br />
              <span className="text-emerald-600">Мы их обходим</span>
            </h2>

            <p className="text-xl text-slate-700/90 leading-relaxed mb-10">
              Бот мониторит всех конкурентов каждые 3 минуты. Автоматически
              ставит вас на 1 место.
              <strong> +350% заказов без снижения маржи.</strong>
            </p>

            <button className="group relative w-full lg:w-auto px-12 py-6 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-xl rounded-3xl shadow-xl hover:shadow-emerald-500/50 transition-all duration-500 backdrop-blur-sm border border-emerald-400/50">
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Rocket className="w-5 h-5" />
                Занять 1-е место бесплатно
                <span className="w-0 group-hover:w-24 h-px bg-white transition-all duration-500" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/50 to-teal-400/50 -inset-1 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Right visual */}
          <div className="lg:order-1 relative">
            <div className="bg-white/80 backdrop-blur-2xl rounded-4xl p-12 lg:p-16 border border-slate-200/50 shadow-2xl shadow-slate-200/50">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-amber-50/50 rounded-2xl p-6 text-center border border-amber-200/50 hover:bg-amber-100/70 transition-colors shadow-sm hover:shadow-amber-200/50">
                  <div className="text-3xl mb-2 flex justify-center text-amber-500">
                    <Zap className="w-8 h-8" />
                  </div>
                  <div className="text-slate-900 font-bold text-xl">3 мин</div>
                  <div className="text-slate-600 text-sm uppercase tracking-wider">
                    скорость реакции
                  </div>
                </div>
                <div className="bg-red-50/50 rounded-2xl p-6 text-center border border-red-200/50 hover:bg-red-100/70 transition-colors shadow-sm hover:shadow-red-200/50">
                  <div className="text-3xl mb-2 flex justify-center text-red-500">
                    <TabletSmartphone className="w-8 h-8" />
                  </div>
                  <div className="text-slate-900 font-bold text-xl">Kaspi</div>
                  <div className="text-slate-600 text-sm uppercase tracking-wider">
                    #1 автоматически
                  </div>
                </div>
              </div>
              <div className="w-full h-48 lg:h-64 bg-gradient-to-br from-emerald-500/10 to-green-500/5 rounded-3xl border-2 border-emerald-200/50 backdrop-blur-xl flex items-center justify-center shadow-xl relative overflow-hidden">
                <ChartColumnBig className="w-20 h-20 text-emerald-500 absolute animate-pulse" />
                <div className="absolute top-4 right-4 text-xs text-emerald-600 font-bold tracking-wider">
                  +350%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features carousel */}
        <div className="relative">
          <div className="flex overflow-x-auto pb-8 lg:pb-0 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-slate-300/50 scrollbar-track-slate-100/50 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible">
            {featureSpecs.map((feature, i) => (
              <div
                key={i}
                className="flex-none w-80 lg:w-auto snap-center px-4 lg:px-0 lg:flex-1 min-w-0"
              >
                <div className={`group h-full bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-8 hover:bg-white shadow-lg hover:shadow-2xl ${feature.hoverBorderShadow} transition-all duration-500 hover:-translate-y-2 lg:hover:translate-y-0`}>
                  <div className="flex flex-col h-full">
                    <div
                      className={`text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 ${feature.baseColor} ${feature.hoverColor}`}
                    >
                      {feature.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-4">
                      {feature.title}
                    </h4>
                    <p className="text-slate-700 leading-relaxed flex-1">
                      {feature.desc}
                    </p>
                    <div className="mt-auto pt-6">
                      <span
                        className={`inline-flex items-center gap-2 text-slate-600 ${feature.hoverColor} text-sm font-semibold group-hover:translate-x-2 transition-all duration-300`}
                      >
                        Подробнее →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-20 lg:mt-32 bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl shadow-slate-200/50">
          <div className="flex flex-wrap items-center gap-8 text-slate-700 font-semibold text-lg">
            <span className="flex items-center gap-2">
              <Rocket className="w-5 h-5 text-red-600" /> 500+ продавцов
            </span>
            <span className="text-slate-400">•</span>
            <span className="flex items-center gap-2">
              <ChartColumnBig className="w-5 h-5 text-emerald-600" /> +350%
              заказов
            </span>
            <span className="text-slate-400">•</span>
            <span className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" /> 3 мин реакция
            </span>
          </div>
          <button className="px-10 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-2xl shadow-lg hover:shadow-red-500/50 transition-all duration-300 font-bold text-lg">
            Начните уже сейчас! (7 дней бесплатно)
          </button>
        </div>
      </div>
    </section>
  );
}
