import clsx from "clsx";
import type { LucideIcon } from "lucide-react";

interface Plan {
  badge: string;
  price: string;
  description: string;
  cta: string;
  active?: boolean;
  features: string[];
  textColor?: string;
  icon?: LucideIcon;
  bgColor?: string;
  borderColor?: string;
}

interface InfoCardsProps {
  plans: Plan[];
}

export default function InfoCards({ plans }: InfoCardsProps) {
  return (
    <div className="w-full flex flex-row justify-center gap-15 mx-auto my-10">
      {plans.map((plan, i) => {
        const isActive = plan.active;

        return (
          <div
            key={i}
            className={clsx(
              "relative rounded-xl flex flex-col px-6 py-6 transition-all duration-300", // thinner padding
              "bg-white text-slate-900 border border-slate-200 dark:bg-slate-950 dark:text-white dark:border-white/10",
              isActive
                ? "shadow-xl border-teal-500/40 ring-1 ring-teal-500/40 dark:shadow-teal-500/20"
                : "opacity-80 hover:opacity-100 hover:shadow-md hover:-translate-y-1",
            )}
          >
            {/* badge */}
            <span
              className={clsx(
                "inline-block px-2 py-1 mb-3 text-xs font-medium rounded-md border",
                isActive
                  ? "border-teal-500 text-teal-500/80 bg-teal-500/10"
                  : "border-slate-200 text-slate-700 dark:border-white/10 dark:text-slate-400",
              )}
            >
              {plan.badge}
            </span>

            {/* icon */}
            <div className="mb-2 flex flex-col items-start">
              {plan.icon && (
                <span className={`text-3xl font-semibold ${plan.textColor}`}>
                  <plan.icon className="w-8 h-8" />
                </span>
              )}

              {/* teal line */}
              <div className={`w-12 h-[2px] ${plan.bgColor} mt-2 rounded-full`}/>
            </div>

            {/* description */}
            <p className="text-slate-500 dark:text-slate-400 mb-4 text-sm">
              {plan.description}
            </p>

            {/* CTA */}
            <button
              className={clsx(
                "w-full text-sm font-medium rounded-lg py-2 mb-6 transition-all duration-200",
                isActive
                  ? "bg-teal-500 text-white hover:brightness-105"
                  : `border border-slate-200 text-slate-900 ${plan.bgColor} hover:bg-slate-100 dark:border-white/10 dark:text-white dark:hover:bg-white/5`,
              )}
            >
              {plan.cta}
            </button>

            {/* features */}
            <div>
              <ul className="space-y-2">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={clsx(
                      "group relative flex items-center gap-2 p-2 rounded-lg transition-all duration-300 text-sm",
                      "border border-slate-200/10 bg-slate-100/10 dark:border-white/5 dark:bg-white/5 hover:-translate-y-[1px] hover:border-teal-400/20 hover:shadow-[0_0_10px_rgba(45,212,191,0.2)]",
                    )}
                  >
                    <div
                      className={clsx(
                        "w-5 h-5 flex items-center justify-center rounded-md text-teal-500 font-bold",
                        "bg-white/20 group-hover:bg-teal-500 group-hover:text-white dark:bg-white/10 dark:group-hover:bg-teal-500 transition-all duration-300",
                      )}
                    >
                      ✓
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">
                      {feature}
                    </span>

                    <span
                      className="
                        absolute inset-0 rounded-lg pointer-events-none opacity-0
                        bg-gradient-to-r from-transparent via-white/10 to-transparent
                        transition-opacity duration-500
                        group-hover:opacity-60 dark:group-hover:opacity-20
                      "
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
