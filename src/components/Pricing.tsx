import Divider from "./UI/Divider";

export function Pricing() {
  const grid = "grid grid-cols-[2fr_1fr_1fr_1fr]";

  const rows = [
    ["Количество товаров в мониторинге", "100", "1 000", "Безлимит"],
    ["Частота проверки цен", "Каждые 60 мин", "Каждые 10 мин", "Каждую минуту"],
    ["Авто‑обнаружение демпинга", "✓", "✓", "✓"],
    ["Уведомления в Telegram", "✓", "✓", "✓"],
    ["Автоматическое снижение цены", "✕", "✓", "✓"],
    ["Гибкие правила реакции", "✕", "✕", "✓"],
    ["Приоритет API / стабильность", "✕", "✓", "✓"],
    ["Поддержка", "Базовая", "Приоритетная", "SLA / Личный менеджер"],
  ];

  const prices = [
    ["₽0", "Бесплатно"],
    ["₽4 990", "В месяц"],
    ["₽14 990", "В месяц"],
  ];

  return (
    <section id="#pricing">
      <Divider />
      <div className="w-full p-4">
        {/* Container with glass essence */}
        <div
          className="
          relative rounded-2xl
          bg-transparent
          backdrop-blur-[30px] backdrop-saturate-150
          border border-slate-200/30 dark:border-slate-700/50
          shadow-2xl dark:shadow-[0_0_50px_rgba(0,0,0,0.5)]
          overflow-hidden
        "
        >
          {/* Header + Pricing */}
          <div
            className={`${grid} border-b border-slate-300/30 dark:border-slate-600/50 text-sm font-semibold`}
          >
            {/* Left heading block */}
            <div className="px-4 py-4 row-span-2 flex flex-col justify-center text-slate-800 dark:text-slate-200">
              <div className="text-lg font-bold">Бот Продаж</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Стоимость плана
              </div>
              <div className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
                ₽0 — ₽14 990
              </div>
            </div>

            {/* Plan Titles */}
            {["Старт", "Профи", "Бизнес"].map((plan) => (
              <div
                key={plan}
                className={`
                py-4 text-center border-l border-slate-300/30 dark:border-slate-600/50
                text-slate-800 dark:text-slate-200
                font-semibold
                relative
                transition-all duration-300
                hover:scale-[1.03] hover:shadow-lg
              `}
                style={{
                  backdropFilter: "blur(20px)",
                  backgroundColor:
                    "rgba(255, 255, 255, 0.25) dark:rgba(30,30,40,0.4)",
                }}
              >
                {plan}
                {/* Accent Glow Line */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-70 rounded-t-md" />
              </div>
            ))}

            {/* Price rows */}
            {prices.map(([price, note], i) => (
              <div
                key={i}
                className={`
                py-4 text-center border-l border-slate-300/30 dark:border-slate-600/50
                text-slate-900 dark:text-white
                font-bold
                relative
                transition-all duration-300
                hover:scale-[1.03] hover:shadow-lg
              `}
                style={{
                  backdropFilter: "blur(20px)",
                  backgroundColor:
                    "rgba(255, 255, 255, 0.25) dark:rgba(30,30,40,0.4)",
                }}
              >
                <div className="text-2xl">{price}</div>
                <div className="text-xs mt-1 text-slate-500 dark:text-slate-400">
                  {note}
                </div>
              </div>
            ))}
          </div>

          {/* Feature rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className={`${grid} border-t border-slate-300/30 dark:border-slate-600/50 text-sm`}
            >
              {/* Feature name */}
              <div className="px-4 py-3 text-slate-600 dark:text-slate-400">
                {row[0]}
              </div>

              {row.slice(1).map((cell, j) => (
                <div
                  key={j}
                  className={`
                  py-3 text-center border-l border-slate-300/30 dark:border-slate-600/50
                  text-slate-800 dark:text-slate-200
                  relative
                  transition-all duration-300
                  hover:scale-[1.02] hover:shadow-md
                `}
                  style={{
                    backdropFilter: "blur(18px)",
                    backgroundColor:
                      "rgba(255, 255, 255, 0.2) dark:rgba(30,30,40,0.3)",
                  }}
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Divider />
    </section>
  );
}

export default Pricing;
