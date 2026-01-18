

import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export default function Radar() {
  const sweepControls = useAnimationControls();

  useEffect(() => {
    sweepControls.start({
      rotate: 360,
      transition: { repeat: Infinity, ease: "linear", duration: 2 },
    });
  }, [sweepControls]);

  return (
    <div className="relative w-64 h-64 flex-shrink-0">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full border border-teal-700/30 dark:border-teal-400/10"
          style={{ transform: `scale(${i * 0.25})` }}
        />
      ))}

      <motion.div
        className="absolute inset-0 flex justify-center items-start"
        animate={sweepControls}
      >
        <div className="w-[2px] h-full bg-teal-700/70 dark:bg-teal-400/70 rounded-full origin-bottom" />
      </motion.div>

      <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-teal-700/70 dark:bg-teal-400/70 rounded-full -translate-x-1/2 -translate-y-1/2" />

      <motion.div
        className="absolute w-3 h-3 bg-teal-600 rounded-full top-1/3 left-1/2"
        animate={{ scale: [0, 1, 1], opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", repeatDelay: 0.5 }}
      />
      <motion.div
        className="absolute w-3 h-3 bg-teal-600 rounded-full top-2/3 left-1/3"
        animate={{ scale: [0, 1, 1], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop", repeatDelay: 0.8 }}
      />
    </div>
  );
}
