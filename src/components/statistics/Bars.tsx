import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const bars = [
  { height: 80 },
  { height: 120 },
  { height: 170 },
  { height: 240, highlight: true },
];

export default function Bars() {
  const outlineControls = useAnimation();
  const fillControls = useAnimation();

  useEffect(() => {
    async function runAnimation() {
      while (true) {
        await outlineControls.set({ scaleY: 0, opacity: 1 });
        await fillControls.set({ scaleY: 0, opacity: 1 });

        await outlineControls.start((i) => ({
          scaleY: 1,
          transition: { duration: 0.9, ease: "easeOut", delay: i * 0.15 },
        }));

        await fillControls.start((i) => ({
          scaleY: 1,
          transition: { duration: 0.9, ease: "easeOut", delay: 0.5 + i * 0.15 },
        }));

        await Promise.all([
          outlineControls.start({
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
          }),
          fillControls.start({
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
          }),
        ]);
      }
    }

    runAnimation();
  }, [outlineControls, fillControls]);

  return (
    <div className="mx-auto max-w-7xl px-6 grid grid-cols-[1.2fr_1fr] items-center gap-12">
      {/* LEFT TEXT (150% Growth) */}
      <div>
        <h2 className="text-[88px] font-bold leading-none text-teal-700 dark:text-teal-400">
          150%
        </h2>
        <p className="mt-4 text-slate-900 dark:text-white font-semibold tracking-wide">
          роста продаж за первые 10 дней 
        </p>
        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-md">
          Удержание топ-позиций на маркетплейсах приносит реальный доход.
        </p>
      </div>

      {/* BARS */}
      <div className="flex items-end justify-center gap-7 h-[260px]">
        {bars.map((bar, i) => (
          <div
            key={i}
            className="relative w-[90px] flex items-end"
            style={{ height: bar.height }}
          >
            <motion.div
              custom={i}
              animate={outlineControls}
              style={{ transformOrigin: "bottom" }}
              className={`absolute inset-0 border ${
                bar.highlight
                  ? "border-teal-700/70 dark:border-teal-400/70"
                  : "border-slate-900/20 dark:border-white/20"
              }`}
            />
            <motion.div
              custom={i}
              animate={fillControls}
              style={{ transformOrigin: "bottom" }}
              className={`absolute inset-0 ${
                bar.highlight
                  ? "bg-teal-700/30 dark:bg-teal-400/30"
                  : "bg-slate-900/10 dark:bg-white/10"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
