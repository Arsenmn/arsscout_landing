import { ChartColumnBig, Recycle, Rocket, TabletSmartphone, Users, Wallet, Zap } from "lucide-react";

// SellSection.tsx
export default function SellSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-tr from-emerald-950/90 via-emerald-900/80 to-slate-900/90 overflow-hidden">
      {/* Floating glows */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/4 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-20 w-[500px] h-[500px] bg-emerald-400/3 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Hero split */}
        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-24 mb-24 lg:mb-32">
          {/* Left text + CTA */}
          <div className="lg:order-2 space-y-8 lg:max-w-lg">
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 backdrop-blur-xl shadow-lg">
              <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-300 font-semibold text-sm uppercase tracking-wider">Резидент Astana Hub</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent leading-tight">
              Продавайте<br />больше.<br />Всегда первыми.
            </h2>
            
            <p className="text-xl text-emerald-100/90 leading-relaxed mb-10">
              ArSScout мониторит конкурентов каждые 3 минуты и держит вашу цену на 1 месте. 
              Результат: +300% заказов без демпинга.
            </p>
            
            <button className="group relative w-full lg:w-auto px-12 py-6 bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-600 hover:to-emerald-500 text-emerald-900 font-bold text-xl rounded-3xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-500 backdrop-blur-sm border border-emerald-300/50">
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Rocket /> Начать бесплатно
                <span className="w-0 group-hover:w-24 h-px bg-emerald-900 transition-all duration-500" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/50 to-emerald-300/50 -inset-1 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Right visual */}
          <div className="lg:order-1 relative">
            <div className="bg-emerald-900/60 backdrop-blur-2xl rounded-4xl p-12 lg:p-16 border border-emerald-500/30 shadow-2xl shadow-emerald-900/60">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-emerald-500/20 rounded-2xl p-6 text-center border border-emerald-400/50">
                  <div className="text-3xl mb-2 flex flex-row justify-center items-center text-teal-200"><Zap /></div>
                  <div className="text-emerald-300 font-bold">3 мин</div>
                  <div className="text-emerald-400 text-sm">обновление</div>
                </div>
                <div className="bg-emerald-500/20 rounded-2xl p-6 text-center border border-emerald-400/50">
                  <div className="text-3xl mb-2 flex flex-row justify-center items-center text-teal-200"><TabletSmartphone /></div>
                  <div className="text-emerald-300 font-bold">Kaspi</div>
                  <div className="text-emerald-400 text-sm">автоматически</div>
                </div>
              </div>
              <div className="w-full h-48 lg:h-64 bg-gradient-to-br from-emerald-500/20 to-emerald-400/10 rounded-3xl border-2 border-emerald-400/30 backdrop-blur-xl flex items-center justify-center shadow-2xl">
                <div className="text-6xl animate-bounce flex flex-row justify-center items-center text-teal-200"><ChartColumnBig size={50}/></div>
              </div>
            </div>
          </div>
        </div>

        {/* Features carousel-like */}
        <div className="relative">
          <div className="flex overflow-x-auto pb-8 lg:pb-0 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-emerald-500/50 scrollbar-track-emerald-900/50 lg:grid lg:grid-cols-3 lg:gap-8 lg;overflow-visible">
            {[
              {
                icon: <Users color="white"/>,
                title: 'Все конкуренты',
                desc: 'Видите всех продавцов вашего товара. Знаете кто сливает цены[web:17]'
              },
              {
                icon: <Recycle color="white"/>,
                title: 'Авто-обновление', 
                desc: 'Цена меняется автоматически каждые 3 минуты[web:11]'
              },
              {
                icon: <Wallet color="white"/>,
                title: 'Максимум прибыли',
                desc: 'Всегда на 1 месте без демпинга ниже себестоимости[web:12]'
              }
            ].map((feature, i) => (
              <div key={i} className="flex-none w-80 lg:w-auto snap-center px-4 lg:px-0 lg:flex-1 min-w-0">
                <div className="group h-full bg-emerald-900/40 backdrop-blur-xl border border-emerald-500/40 rounded-3xl p-8 hover:bg-emerald-900/60 transition-all duration-500 hover:shadow-emerald-500/40 hover:-translate-y-4 lg:hover:translate-y-0">
                  <div className="flex flex-col h-full">
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{feature.icon}</div>
                    <h4 className="text-2xl font-bold text-emerald-50 mb-4">{feature.title}</h4>
                    <p className="text-emerald-300 leading-relaxed flex-1">{feature.desc}</p>
                    <div className="mt-auto pt-6">
                      <span className="inline-flex items-center gap-2 text-emerald-400 text-sm font-semibold group-hover:translate-x-2 transition-transform">
                        Узнать больше → 
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-20 lg:mt-32 bg-emerald-900/70 backdrop-blur-xl border border-emerald-500/50 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap items-center gap-8 text-emerald-300 font-semibold text-lg">
            <span><Rocket /> +500 продавцов</span>
            <span>•</span>
            <span><ChartColumnBig /> +347% средний рост</span>
            <span>•</span>
            <span><Zap /> Astana Hub резидент</span>
          </div>
          <button className="px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-900 font-bold rounded-2xl shadow-xl hover:shadow-emerald-400/50 transition-all">
            Попробовать 7 дней бесплатно
          </button>
        </div>
      </div>
    </section>
  );
}
