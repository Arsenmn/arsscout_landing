;

import { FolderKanban } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-white dark:bg-slate-950 transition-colors"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* LEFT: Hero Text */}
        <div className="flex flex-col justify-center px-8 py-16">
          <p className="w-40 flex flex-row items-center justify-center gap-3 px-1 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-[10px] font-semibold uppercase tracking-[0.3em] rounded-full border border-emerald-600/70">
            <FolderKanban size={15} />
            ДемпингПрo
          </p>

          <h1 className="text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl mt-4">
            Контролируй цены
            <span className="block italic font-mono font-black bg-linear-to-r text-[#FFD700] bg-clip-text underline uppercase">
              выигрывай конкурентов
            </span>
          </h1>

          <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-300 mt-4">
            Не позволяй конкурентам демпинговать тебя. С нашим сервисом ты
            увидишь кто снижает цену и сможешь реагировать первым, сохраняя
            прибыль.
          </p>

          <div className="flex flex-row">
            <button className="rounded-l-lg bg-teal-100/50 hover:bg-teal-200/50 dark:bg-slate-950 border border-dashed border-teal-200 hover:border-teal-400 dark:border-teal-700 hover:dark:bg-teal-200/20 px-8 py-4 text-lg font-semibold text-teal-800 dark:text-teal-300 shadow-lg transition mt-6">
              Попробовать бесплатно
            </button>
            <button className="rounded-r-lg dark:bg-slate-950 border border-dashed border-slate-200 hover:border-slate-400 dark:border-slate-700 hover:dark:border-slate-300 hover:bg-slate-200/20  px-8 py-4 text-lg font-semibold dark:text-white text-slate-950 hover:dark:text-white shadow-lg transition mt-6">
              Как это устроено?
            </button>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <div className="flex text-amber-400 text-lg">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              4.9 (1,234 пользователей)
            </p>
          </div>
        </div>

        {/* RIGHT: Hero Card */}
        <div className="relative flex items-center justify-center bg-slate-300 dark:bg-teal-400 overflow-hidden">
          {/* Glow + Pixel overlay */}
          <div className="absolute top-0 right-0 h-full w-1/2 pointer-events-none">
            {/* Gradient glow */}
            <div
              className="absolute top-0 right-0 h-full w-full bg-gradient-to-l from-slate-300 dark:from-teal-400 to-transparent opacity-40 blur-3xl pulse-glow"
            />
            {/* Pixelized overlay */}
            <div className="absolute top-0 right-0 h-full w-full bg-[repeating-linear-gradient(45deg,#ffffff1a,#ffffff1a_1px,#0000_1px,#0000_4px)] opacity-10 pointer-events-none" />
          </div>

          <div className="flex items-center justify-center px-8 py-16 z-10">
            <div className="h-[24rem] rounded-lg bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-700 p-6 w-full max-w-lg">
              <img
                src="/hero.png"
                alt="Сервис демпинга"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
