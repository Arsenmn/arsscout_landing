import { ChevronsLeftRightEllipsis } from "lucide-react";

// Hero.tsx
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0b1b17] text-slate-100 pt-15">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 py-16 lg:px-8">
        {/* Text column */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr,1fr] items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              ArSScout
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-emerald-50 sm:text-5xl lg:text-6xl">
              Увеличь продажи своего{" "}
              <span className="block italic font-['JetBrains_Mono'] font-bold text-emerald-300">Kaspi</span>{" "}
              магазина
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-emerald-100/70">
              Продажи стоят на месте? Не знаете как решить? - Продукты ArSScout это то, что вам требуется. Наша продукция помогает в оптимизации и автомотозиации ваших продаж.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-medium text-[#0b1b17] shadow-lg shadow-emerald-500/40 cursor-pointer">
                Попробовать 3 дня бесплатно
              </button>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-xs text-emerald-100/80">4.9 (2,304 reviews)</p>
            </div>
          </div>

          {/* Cards column */}
          <div className="grid h-[360px] grid-cols-2 grid-rows-2 gap-4">
            {/* Big left card = spans 2 rows */}
            <article className="row-span-2 rounded-3xl bg-emerald-900/40 shadow-[0_24px_80px_rgba(0,0,0,0.65)] overflow-hidden p-3">
              <img
                src="/hero.png"
                alt="Skincare ritual"
                className="h-full w-full object-contain"
              />
            </article>

            {/* Top right card */}
            <article className="flex flex-col justify-between rounded-3xl bg-emerald-900/60 p-5 text-sm text-emerald-50 border border-emerald-500/20">
              <div className="flex items-center gap-2 text-xs">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300">
                  <ChevronsLeftRightEllipsis />
                </span>
                <span className="rounded-full bg-emerald-500/15 px-3 py-2 text-[11px] font-semibold tracking-wide text-emerald-200">
                  astana hub
                </span>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-base font-semibold">Astana Hub</h3>
                <p className="text-xs text-emerald-100/80">
                  Резидент Astana Hub — международного технопарка
                </p>
              </div>
            </article>

            {/* Bottom right card */}
            <article className="flex flex-col justify-between rounded-3xl bg-emerald-900/60 p-5 text-sm text-emerald-50 border border-emerald-500/20">
              <div className="space-y-2">
                <h3 className="text-base font-semibold">Лидер по Казахстану</h3>
                <p className="text-xs text-emerald-100/80">
                  Ведущие продавцы Казахстана доверяют ArSScout. Ниже вы узнаете почему
                </p>
              </div>
              <button className="mt-4 self-start rounded-full bg-emerald-400/10 px-4 py-2 text-[11px] font-medium text-emerald-200">
                История Компании
              </button>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
