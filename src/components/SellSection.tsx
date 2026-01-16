import { ChartColumnBig, Rocket, TabletSmartphone, Users, Wallet, Zap } from "lucide-react";

export default function SellSection() {
  const featureSpecs = [
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Все демпингеры',
      desc: 'Видите каждого кто сливает цену. Реагируете первыми',
      baseColor: "text-slate-400",
      hoverColor: "group-hover:text-blue-400"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Мгновенный отклик', 
      desc: 'Каждые 3 мин проверяем конкурентов и корректируем',
      baseColor: "text-slate-400",
      hoverColor: "group-hover:text-amber-400"
    },
    {
      icon: <Wallet className="w-12 h-12" />,
      title: 'Маржа защищена',
      desc: 'Никогда не демпингуем ниже вашей себестоимости',
      baseColor: "text-slate-400",
      hoverColor: "group-hover:text-orange-400"
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Hero split */}
        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-24 mb-24 lg:mb-32">
          {/* Left text + CTA */}
          <div className="lg:order-2 space-y-8 lg:max-w-lg">
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-teal-500/8 border border-teal-500/20 backdrop-blur-xl shadow-lg">
              <span className="w-3 h-3 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-slate-300 font-semibold text-sm uppercase tracking-wider">Антидемпинг бот</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-black bg-linear-to-r from-slate-200/90 via-slate-100 to-teal-400/80 bg-clip-text text-transparent leading-tight">
              Демпингеры крадут<br/>ваши заказы?<br/><span className="text-teal-400">Мы их обходим</span>
            </h2>
            
            <p className="text-xl text-slate-200/90 leading-relaxed mb-10">
              Бот мониторит всех конкурентов каждые 3 минуты. Автоматически ставит вас на 1 место. 
              <strong> +350% заказов без снижения маржи.</strong>
            </p>
            
            <button className="group relative w-full lg:w-auto px-12 py-6 bg-linear-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-slate-900 font-bold text-xl rounded-3xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-500 backdrop-blur-sm border border-teal-400/50">
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Rocket className="w-5 h-5" />
                Занять 1-е место бесплатно
                <span className="w-0 group-hover:w-24 h-px bg-slate-900 transition-all duration-500" />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-teal-400/40 to-emerald-400/40 -inset-1 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Right visual */}
          <div className="lg:order-1 relative">
            <div className="bg-slate-900/70 backdrop-blur-2xl rounded-4xl p-12 lg:p-16 border border-slate-600/50 shadow-2xl shadow-slate-900/60">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-amber-500/8 rounded-2xl p-6 text-center border border-amber-400/20 hover:bg-amber-500/15 transition-colors">
                  <div className="text-3xl mb-2 flex justify-center text-amber-400"><Zap className="w-8 h-8" /></div>
                  <div className="text-slate-200 font-bold text-xl">3 мин</div>
                  <div className="text-slate-400 text-sm uppercase tracking-wider">скорость реакции</div>
                </div>
                <div className="bg-amber-500/8 rounded-2xl p-6 text-center border border-red-400/20 hover:bg-red-500/15 transition-colors">
                  <div className="text-3xl mb-2 flex justify-center text-red-400"><TabletSmartphone className="w-8 h-8" /></div>
                  <div className="text-orange-200 font-bold text-xl">Kaspi</div>
                  <div className="text-slate-400 text-sm uppercase tracking-wider">#1 автоматически</div>
                </div>
              </div>
              <div className="w-full h-48 lg:h-64 bg-linear-to-br from-emerald-500/8 to-green-500/5 rounded-3xl border-2 border-green-400/20 backdrop-blur-xl flex items-center justify-center shadow-2xl relative overflow-hidden">
                <ChartColumnBig className="w-20 h-20 text-green-400 absolute animate-pulse" />
                <div className="absolute top-4 right-4 text-xs text-green-400 font-bold tracking-wider">+350%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features carousel */}
        <div className="relative">
          <div className="flex overflow-x-auto pb-8 lg:pb-0 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-slate-600/40 scrollbar-track-slate-900/20 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible">
            {featureSpecs.map((feature, i) => (
              <div key={i} className="flex-none w-80 lg:w-auto snap-center px-4 lg:px-0 lg:flex-1 min-w-0">
                <div className="group h-full bg-slate-900/40 backdrop-blur-xl border border-slate-600/30 rounded-3xl p-8 hover:bg-slate-900/70 transition-all duration-500 hover:shadow-amber-500/20 hover:-translate-y-4 lg:hover:translate-y-0">
                  <div className="flex flex-col h-full">
                    <div className={`text-5xl mb-6 group-hover:scale-110 transition-transform ${feature.baseColor} ${feature.hoverColor}`}>
                      {feature.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-slate-50 mb-4">{feature.title}</h4>
                    <p className="text-slate-300 leading-relaxed flex-1">{feature.desc}</p>
                    <div className="mt-auto pt-6">
                      <span className={`inline-flex items-center gap-2 text-slate-400 ${feature.hoverColor} text-sm font-semibold group-hover:translate-x-2 transition-all`}>
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
        <div className="mt-20 lg:mt-32 bg-slate-900/70 backdrop-blur-xl border border-slate-600/40 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap items-center gap-8 text-slate-300 font-semibold text-lg">
            <span className="flex items-center gap-2"><Rocket className="w-5 h-5" /> 500+ продавцов</span>
            <span>•</span>
            <span className="flex items-center gap-2"><ChartColumnBig className="w-5 h-5" /> +350% заказов</span>
            <span>•</span>
            <span className="flex items-center gap-2"><Zap className="w-5 h-5" /> 3 мин реакция</span>
          </div>
          <button className="px-10 py-4 bg-linear-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-900 font-bold rounded-2xl shadow-md hover:shadow-teal-500/50 transition-all duration-300">
            Занять 1-е место (7 дней бесплатно)
          </button>
        </div>
      </div>
    </section>
  );
}
