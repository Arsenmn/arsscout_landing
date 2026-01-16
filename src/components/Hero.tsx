import { Landmark, ShoppingCart } from "lucide-react";

// Hero.tsx - LIGHT THEME CONVERSION
export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-16"
      id="home"
    >
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 py-16 lg:px-8">
        {/* Text column */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr,1fr] items-center">
          <div className="space-y-8 lg:space-y-10">
            <p className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-[0.3em] rounded-full">
              ДемпингПрo
            </p>

            <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Контролируй цены и{" "}
              <span
                className="block italic font-mono font-black bg-gradient-to-r text-[#FFD700] bg-clip-text underline uppercase"
              >
                выигрывай конкурентов
              </span>
            </h1>

            <p className="max-w-xl text-xl leading-relaxed text-slate-600">
              Не позволяй конкурентам демпинговать тебя. С нашим сервисом ты
              увидишь кто снижает цену и сможешь реагировать первым, сохраняя
              прибыль.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="group inline-flex items-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 group-hover:scale-[1.02] border border-emerald-200/50">
                Попробовать бесплатно
              </button>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex text-amber-400 text-lg">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-sm text-slate-500 font-medium">
                4.9 (1,234 пользователей)
              </p>
            </div>
          </div>

          {/* Cards column */}
          <div className="grid h-[28rem] lg:h-[32rem] grid-cols-2 grid-rows-2 gap-6">
            {/* Big left card */}
            <div className="row-span-2 rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl hover:shadow-2xl border border-gray-200/50 hover:border-emerald-200/70 overflow-hidden p-6 hover:-translate-y-2 transition-all duration-400 group">
              <img
                src="/hero.png"
                alt="Сервис демпинга"
                className="h-full w-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* Top right card */}
            <div className="group relative rounded-3xl bg-white shadow-lg hover:shadow-xl border border-gray-200/60 hover:border-red-300/80 p-6 lg:p-8 hover:-translate-y-2 transition-all duration-400 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-red-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-3 text-sm">
                <div className="w-10 h-10 bg-gradient-to-r from-red-100 to-red-200 rounded-2xl flex items-center justify-center shadow-md">
                  <Landmark className="w-5 h-5 text-red-600" />
                </div>
                <span className="rounded-full bg-red-100 px-4 py-2 text-xs font-semibold tracking-wide text-red-800">
                  Kaspi Магазин
                </span>
              </div>
              <div className="mt-6 space-y-3">
                <h3 className="text-lg font-bold text-slate-900">
                  Стань лидирующим продавцом
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Видишь, кто снижает цены и реагируешь первым.
                </p>
              </div>
            </div>

            {/* Bottom right card */}
            <div className="group relative rounded-3xl bg-white shadow-lg hover:shadow-xl border border-gray-200/60 hover:border-blue-300/80 p-6 lg:p-8 hover:-translate-y-2 transition-all duration-400 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-3 text-sm">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center shadow-md">
                  <ShoppingCart className="w-5 h-5 text-blue-600" />
                </div>
                <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold tracking-wide text-blue-800">
                  Пример рынка
                </span>
              </div>
              <div className="mt-6 space-y-3">
                <h3 className="text-lg font-bold text-slate-900">
                  Мы также работаем с:
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Jmart, Halyk Market, Ozon и многими другими платформами.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
