import { ChevronsLeftRightEllipsis } from "lucide-react";

// Hero.tsx
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-900 text-slate-100 pt-16">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 py-16 lg:px-8">
        {/* Text column */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr,1fr] items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
              ДемпингПро
            </p>

            <h1 className="text-4xl font-semibold leading-tight text-gray-50 sm:text-5xl lg:text-6xl">
              Контролируй цены и <span className="block italic font-['JetBrains_Mono'] font-bold text-teal-400">выигрывай конкурентов</span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-gray-200/70">
              Не позволяй конкурентам демпинговать тебя. С нашим сервисом ты увидишь кто снижает цену и сможешь реагировать первым, сохраняя прибыль.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center rounded-full bg-teal-500/90 hover:bg-teal-400/80 px-6 py-3 text-sm font-medium text-gray-900 shadow-lg shadow-black/40 cursor-pointer transition-all duration-200">
                Попробовать бесплатно
              </button>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-xs text-gray-300/80">4.9 (1,234 пользователей)</p>
            </div>
          </div>

          {/* Cards column */}
          <div className="grid h-[360px] grid-cols-2 grid-rows-2 gap-4">
            {/* Big left card */}
            <article className="row-span-2 rounded-3xl bg-gray-800/50 shadow-[0_24px_80px_rgba(0,0,0,0.65)] overflow-hidden p-3">
              <img
                src="/hero.png"
                alt="Сервис демпинга"
                className="h-full w-full object-contain"
              />
            </article>

            {/* Top right card */}
            <article className="flex flex-col justify-between rounded-3xl bg-gray-700/60 p-5 text-sm text-gray-100 border border-gray-600/20">
              <div className="flex items-center gap-2 text-xs">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600/10 text-gray-300">
                  <ChevronsLeftRightEllipsis />
                </span>
                <span className="rounded-full bg-gray-600/20 px-3 py-2 text-[11px] font-semibold tracking-wide text-gray-200">
                  Пример рынка
                </span>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-base font-semibold">Отслеживай конкурентов</h3>
                <p className="text-xs text-gray-200/80">
                  Видишь, кто снижает цены и реагируешь первым.
                </p>
              </div>
            </article>

            {/* Bottom right card */}
            <article className="flex flex-col justify-between rounded-3xl bg-gray-700/60 p-5 text-sm text-gray-100 border border-gray-600/20">
              <div className="space-y-2">
                <h3 className="text-base font-semibold">Сохраняй прибыль</h3>
                <p className="text-xs text-gray-200/80">
                  Контроль цен помогает не снижать цену без причины и увеличивать доход.
                </p>
              </div>
              <button className="mt-4 self-start rounded-full bg-gray-500/20 px-4 py-2 text-[11px] font-medium text-gray-100 hover:bg-gray-400/25 transition-all">
                Подробнее
              </button>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
