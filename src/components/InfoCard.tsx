interface InfoCardProps {
  name: string;
  subtitle: string;
  price: string;
  features: string[];
  color: string;
}

export default function InfoCards() {
  const cardInfo: InfoCardProps[] = [
    {
      name: "Контроль цен",
      subtitle: "Сразу видишь, кто демпингует",
      price: "Все на ваших глазах",
      features: [
        "Все продавцы твоего товара на одном экране",
        "Понимаешь, кто снижает цену",
        "Отслеживание рынка за минуты",
        "Никакой игры вслепую",
      ],
      color: "text-red-400",
    },
    {
      name: "Защита от демпинга",
      subtitle: "Реагируешь быстрее конкурентов",
      price: "Мгновенная отдача",
      features: [
        "Сигналы о падении цен сразу",
        "Не снижай цену без причины",
        "Сохраняй маржу",
        "Продавай умнее, а не дешевле",
      ],
      color: "text-green-400",
    },
    {
      name: "Рост прибыли",
      subtitle: "Цена под контролем — доход растёт",
      price: "Когда готов зарабатывать",
      features: [
        "Реальные цены рынка под рукой",
        "Поднимаешь цену, когда можно",
        "Убираешь лишние скидки",
        "Зарабатываешь, а не выживаешь",
      ],
      color: "text-blue-400",
    },
  ];

  return (
    <div className="relative w-full p-20 px-4 lg:px-8 mx-auto overflow-hidden">
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mx-auto">
        {cardInfo.map(({ name, subtitle, price, features, color }, index) => (
          <div
            key={index}
            className="group relative h-[42rem] lg:h-[48rem] border border-white/10 rounded-3xl shadow-2xl shadow-black/40 hover:shadow-white/20 hover:shadow-2xl hover:border-white/30 transition-all duration-500 overflow-hidden backdrop-blur-xl hover:bg-white/2 hover:backdrop-blur-[20px]"
          >
            {/* Minimal inner content - NO GRADIENTS */}
            <div className="relative bg-gray-950/80 backdrop-blur-xl rounded-3xl p-8 lg:p-10 h-full flex flex-col shadow-inner border border-gray-900/50 hover:border-gray-800/70 transition-all duration-300">
              {/* Top */}
              <div className="flex items-start justify-between mb-8 lg:mb-12 flex-shrink-0">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white/5 hover:bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 shadow-lg shrink-0 backdrop-blur-sm hover:border-white/40 transition-all duration-300">
                    <span className="text-yellow-300 text-2xl lg:text-3xl font-bold drop-shadow-sm">
                      ★
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 pt-1">
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-2 leading-tight truncate">
                      {name}
                    </h3>
                    <p className="text-gray-400 text-base lg:text-lg leading-tight line-clamp-2">
                      {subtitle}
                    </p>
                  </div>
                </div>
                <div className="w-12 h-12 lg:w-14 lg:h-14 ml-4 bg-white/5 hover:bg-white/15 rounded-2xl flex items-center justify-center border border-white/30 shadow-md hover:border-white/50 transition-all duration-300 flex-shrink-0 group-hover:scale-110 group-hover:rotate-180">
                  <span
                    className={`${color} text-xl lg:text-2xl font-bold drop-shadow-sm`}
                  >
                    ●
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-10 lg:mb-14 flex-shrink-0">
                <p className="text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-none drop-shadow-lg tracking-tight">
                  {price}
                </p>
              </div>

              <ul className="flex-1 space-y-4 lg:space-y-5 overflow-hidden">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className={`
        flex items-start gap-3 h-20 lg:h-23 p-4 lg:p-5 rounded-xl
        hover:bg-white/5 border border-white/10
        text-gray-300 hover:text-white flex-shrink-0
        ${
          index !== 0
            ? "transition-all scale-[0.98] hover:scale-[1] hover:-translate-y-1 hover:shadow-sm hover:shadow-white/10 duration-300"
            : ""
        }
      `}
                  >
                    <div className="w-7 h-7 lg:w-8 lg:h-8 mt-0.5 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center border border-white/30 hover:border-emerald-400/60 shadow-sm hover:shadow-md backdrop-blur-sm transition-all duration-300 flex-shrink-0">
                      <span className="text-emerald-300 font-bold text-lg lg:text-xl drop-shadow-sm">
                        ✓
                      </span>
                    </div>
                    <span className="leading-relaxed font-medium text-sm lg:text-base flex-1 line-clamp-2 transition-transform duration-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Bottom bar - simplified */}
              <div className="w-full h-px bg-linear-to-r from-transparent via-white/30 to-transparent mt-auto opacity-0 group-hover:opacity-100 transition-all duration-500 mx-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
