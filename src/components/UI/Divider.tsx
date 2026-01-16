// TealDivider.tsx
export default function Divider() {
  return (
    <div className="relative w-full h-1 overflow-hidden">
      {/* Base line */}
      <div className="absolute inset-0 h-full bg-linear-to-r from-transparent via-teal-400/40 to-transparent" />

      {/* Animated shimmer */}
      <div
        className="absolute inset-0 h-full bg-linear-to-r from-teal-400/50 via-teal-200/80 to-teal-400/50 
                      animate-[shimmer_2s_linear_infinite]"
      />
    </div>
  );
}
