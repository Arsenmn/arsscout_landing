// CarouselButtons.tsx
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function PrevButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute -left-12 top-1/2 -translate-y-1/2 w-14 h-14 bg-zinc-900/60 hover:bg-zinc-800/80 rounded-full border border-zinc-500/30 flex items-center justify-center text-zinc-300 hover:text-zinc-50 shadow-lg transition-all duration-200 hover:scale-110"
      aria-label="Previous slide"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  );
}

export function NextButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute -right-12 top-1/2 -translate-y-1/2 w-14 h-14 bg-zinc-900/60 hover:bg-zinc-800/80 rounded-full border border-zinc-500/30 flex items-center justify-center text-zinc-300 hover:text-zinc-50 shadow-lg transition-all duration-200 hover:scale-110"
      aria-label="Next slide"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );
}