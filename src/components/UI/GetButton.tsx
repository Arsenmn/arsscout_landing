import React from "react";

export default function GetButton() {
  return (
    <button
      className="
        group relative inline-flex items-center gap-3
        rounded-full px-7 py-3 border-r border-l  dark:border-slate-800
        bg-white/10 dark:bg-slate-900/30
        text-slate-400 dark:text-neutral-200
        transition-all duration-500 ease-out
        shadow-[0_0_13px_3px_rgba(255,255,255,0.05)]
        hover:text-shadow-slate-950 dark:hover:text-white
        hover:scale-[1.015]
      "
      style={{
        WebkitBackdropFilter: "blur(6px)",
        backdropFilter: "blur(6px)",
      }}
    >
      {/* Play Circle */}
      <span
        className="
          flex items-center justify-center
          w-6 h-6 rounded-full border
          border-current text-slate-400
          transition-all duration-500 ease-out
          shadow-[inset_0_0_4px_rgba(255,255,255,0.1)]
          group-hover:shadow-[inset_0_0_6px_rgba(140,0,255,0.3)]
        "
      >
        <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>

      Watch demo

      {/* Bottom Light Line */}
      <span
        className="
          absolute left-0 right-0 bottom-0
          mx-auto w-[75%] h-[1px]
          rounded-full
          bg-gradient-to-r from-transparent via-neutral-400 to-transparent
          opacity-70
          transition-all duration-[650ms] ease-out
          group-hover:from-transparent group-hover:via-purple-400 group-hover:to-transparent
          group-hover:opacity-100
          group-hover:blur-[1px]
        "
      />

      {/* Bottom Bloom / Aura */}
      <span
        className="
          absolute left-1/2 bottom-0 -translate-x-1/2
          w-[60%] h-3
          rounded-full pointer-events-none
          opacity-0 scale-90
          transition-all duration-700 ease-out
          group-hover:opacity-40 group-hover:scale-105
          bg-purple-500/30 dark:bg-purple-600/40
          blur-sm
        "
      />
    </button>
  );
}
