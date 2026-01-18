import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const MOVING_CARDS = [
  "KASPI",
  "HALYK",
  "WILDBERRIES",
  "OZON",
  "ORBITAL",
  "NOVA",
  "INTERACT",
  "Starlight",
  "VERTEX",
  "ACME",
];

// Map each marketplace to its color
const COMPANY_COLORS: Record<string, string> = {
  KASPI: "#FF3B30",        // red
  HALYK: "#00C853",        // green
  WILDBERRIES: "#9B27AF",  // purple
  OZON: "#0072CE",         // blue
  ORBITAL: "#FF9800",      // orange
  NOVA: "#00BCD4",         // cyan
  INTERACT: "#FFC107",     // yellow
  Starlight: "#FF4081",    // pink
  VERTEX: "#4CAF50",       // green
  ACME: "#2196F3",         // blue
};

export default function RunningCards() {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: { repeat: Infinity, ease: "linear", duration: 10 },
    });
  }, [controls]);

  const handleMouseEnter = () => {
    controls.start({ transition: { repeat: Infinity, ease: "linear", duration: 20 } });
  };
  const handleMouseLeave = () => {
    controls.start({ transition: { repeat: Infinity, ease: "linear", duration: 10 } });
  };

  return (
    <section className="w-full bg-white dark:bg-slate-950 overflow-hidden">
      <div className="h-[1px] bg-linear-to-r from-transparent to-teal-500/70" />
      <div className="relative flex border-y border-slate-200/10 dark:border-white/5 h-[96px]">
        {/* STATIC LEFT CARD */}
        <div className="relative z-10 flex items-center justify-center w-[260px] shrink-0 bg-white dark:bg-slate-950 border-r border-slate-200/20 dark:border-white/10">
          <span className="text-slate-500 dark:text-slate-400 text-sm tracking-widest uppercase">
            Trusted Teams
          </span>
        </div>

        {/* MOVING AREA */}
        <div
          className="relative flex-1 overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div className="flex items-center gap-24 h-full pl-24" animate={controls}>
            {[...MOVING_CARDS, ...MOVING_CARDS].map((name, i) => (
              <div
                key={i}
                className="flex items-center justify-center min-w-[200px] text-slate-600 dark:text-slate-400 text-lg font-semibold opacity-70 transition-colors duration-300 cursor-pointer"
                // hover color dynamically based on the company
                style={{ 
                  "--hover-color": COMPANY_COLORS[name] || "inherit" 
                } as React.CSSProperties}
              >
                <span className="hover:text-[var(--hover-color)]">{name}</span>
              </div>
            ))}
          </motion.div>

          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-linear-to-r from-white dark:from-slate-950 to-transparent" />
          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-linear-to-l from-white dark:from-slate-950 to-transparent" />
        </div>
      </div>
      <div className="h-[1px] bg-linear-to-r from-teal-500/70 to-transparent" />
    </section>
  );
}
