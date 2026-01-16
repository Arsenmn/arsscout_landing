import {
  BanknoteArrowUpIcon,
  Eye,
  Shield,
  type LucideIcon,
} from "lucide-react";

interface InfoCardProps {
  name: string;
  subtitle: string;
  title: string;
  features: string[];
  textColor: string;
  icon: LucideIcon;
  shadowColor: string; // HEX or rgba
  borderColor: string; // HEX or rgba
}

export default function InfoCards() {
  const cardInfo: InfoCardProps[] = [
    {
      name: "Контроль цен",
      subtitle: "Сразу видишь, кто демпингует",
      title: "Все на ваших глазах",
      features: [
        "Все продавцы твоего товара на одном экране",
        "Понимаешь, кто снижает цену",
        "Отслеживание рынка за минуты",
        "Никакой игры вслепую",
      ],
      textColor: "text-violet-500",
      icon: Eye,
      shadowColor: "rgba(139, 92, 246, 0.4)", // violet
      borderColor: "#C4B5FD", // violet-300
    },
    {
      name: "Защита от демпинга",
      subtitle: "Реагируешь быстрее конкурентов",
      title: "Мгновенная отдача",
      features: [
        "Сигналы о падении цен сразу",
        "Не снижай цену без причины",
        "Сохраняй маржу",
        "Продавай умнее, а не дешевле",
      ],
      textColor: "text-blue-500",
      icon: Shield,
      shadowColor: "rgba(59, 130, 246, 0.4)", // blue
      borderColor: "#93C5FD", // blue-300
    },
    {
      name: "Рост прибыли",
      subtitle: "Цена под контролем — доход растёт",
      title: "Когда готов зарабатывать",
      features: [
        "Реальные цены рынка под рукой",
        "Поднимаешь цену, когда можно",
        "Убираешь лишние скидки",
        "Зарабатываешь, а не выживаешь",
      ],
      textColor: "text-emerald-500",
      icon: BanknoteArrowUpIcon,
      shadowColor: "rgba(5, 150, 105, 0.4)", // emerald
      borderColor: "#6EE7B7", // emerald-300
    },
  ];

  return (
    <div className="relative w-full py-24 px-4 lg:px-8 mx-auto overflow-hidden bg-gradient-to-b from-slate-50 to-gray-50">
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {cardInfo.map(
          (
            {
              name,
              subtitle,
              title,
              features,
              textColor,
              icon: Icon,
              shadowColor,
            },
            index
          ) => (
            <div
              key={index}
              className="group relative h-[42rem] lg:h-[48rem] rounded-3xl transition-all duration-500 overflow-hidden backdrop-blur-sm bg-white/90 hover:backdrop-blur-md hover:bg-white"
              style={{
                // default shadow/border
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                border: "1px solid rgba(203, 213, 225, 0.6)",
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.boxShadow = `0 10px 25px ${shadowColor}`;
                target.style.border = `1px solid ${shadowColor}`;
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
                target.style.border = "1px solid rgba(203, 213, 225, 0.6)";
              }}
            >
              <div className="relative bg-white/95 backdrop-blur-md rounded-3xl p-8 lg:p-10 h-full flex flex-col shadow-inner border border-slate-100/70 hover:border-slate-200/80 transition-all duration-300">
                {/* Top */}
                <div className="flex items-start justify-between mb-8 lg:mb-12 shrink-0">
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 bg-slate-100/80 hover:bg-slate-200 rounded-2xl flex items-center justify-center border border-slate-300/60 shadow-md shrink-0 backdrop-blur-sm hover:border-slate-400/80 transition-all duration-300">
                      <Icon
                        className={`w-8 h-8 lg:w-9 lg:h-9 ${textColor} transition-transform duration-300 group-hover:scale-110`}
                      />
                    </div>
                    <div className="min-w-0 flex-1 pt-1">
                      <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-slate-900 mb-2 leading-tight truncate">
                        {name}
                      </h3>
                      <p className="text-gray-600 text-base lg:text-lg leading-tight line-clamp-2">
                        {subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div className="mb-10 lg:mb-14 flex-shrink-0">
                  <p className="text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 leading-none drop-shadow-lg tracking-tight">
                    {title}
                  </p>
                </div>

                {/* Features */}
                <ul className="flex-1 space-y-4 lg:space-y-5 overflow-hidden">
                  {features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 h-[5.75rem] lg:h-[6.5rem] p-4 lg:p-5 rounded-xl hover:bg-slate-50 border border-slate-200 hover:border-slate-300/80 transition-all duration-300 hover:shadow-sm hover:shadow-slate-100 hover:-translate-y-1 text-slate-700 hover:text-slate-900 flex-shrink-0"
                    >
                      <div className="w-7 h-7 lg:w-8 lg:h-8 mt-0.5 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center justify-center border border-slate-300 hover:border-emerald-400/60 shadow-sm hover:shadow-md backdrop-blur-sm transition-all duration-300 flex-shrink-0">
                        <span className="text-emerald-500 font-bold text-lg lg:text-xl drop-shadow-sm">
                          ✓
                        </span>
                      </div>
                      <span className="leading-relaxed font-medium text-sm lg:text-base flex-1 line-clamp-2">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Bottom bar */}
                <div className="w-full h-px bg-gradient-to-r from-slate-300/60 via-slate-400/80 to-slate-300/60 mt-auto opacity-0 group-hover:opacity-100 transition-all duration-500 mx-2 shadow-sm" />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
