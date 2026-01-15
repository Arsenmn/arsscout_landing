interface InfoCardProps {
  name: string;
  subtitle: string;
  price: string;
  features: string[];
  color: string
}

export default function InfoCards() {
  const cardInfo: InfoCardProps[] = [
    {
      name: "Контроль цен",
      subtitle: "Сразу видишь, кто демпингует",
      price: "Бесплатно",
      features: [
        "Все продавцы твоего товара на одном экране",
        "Понимаешь, кто снижает цену",
        "Отслеживание рынка за минуты",
        "Никакой игры вслепую",
      ],
      color: "text-red-400"
    },
    {
      name: "Защита от демпинга",
      subtitle: "Реагируешь быстрее конкурентов",
      price: "От 0 ₸",
      features: [
        "Сигналы о падении цен сразу",
        "Не снижай цену без причины",
        "Сохраняй маржу",
        "Продавай умнее, а не дешевле",
      ],
      color: "text-green-400"
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
      color: "text-blue-400"
    },
  ];

  return (
    <div className="relative w-full py-20 px-4 lg:px-8 mx-auto overflow-hidden bg-gray-900">
      
      {/* Floating soft shapes */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gray-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-48 -left-40 w-[30rem] h-[30rem] bg-gray-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/4 left-1/2 w-72 h-72 bg-gray-700/10 rounded-full blur-2xl animate-spin-slow" />
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {cardInfo.map(({ name, subtitle, price, features, color }, index) => (
          <div 
            key={index}
            className="group relative w-full p-px bg-linear-to-br from-gray-600/25 to-gray-500/25 rounded-3xl shadow-xl shadow-gray-900/50 hover:shadow-gray-900/70 transition-all duration-500 overflow-hidden backdrop-blur-xl border border-gray-600/40 hover:border-gray-500/60"
          >
            <div className="relative bg-linear-to-br from-gray-950/90 via-gray-900/80 to-gray-950/90 backdrop-blur-2xl rounded-3xl p-6 lg:p-8 h-[480px] flex flex-col shadow-2xl shadow-gray-900/50 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300">
              
              {/* Top */}
              <div className="flex items-start justify-between mb-6 lg:mb-8">
                <div className="flex items-center gap-3 lg:gap-4 flex-1 min-w-0">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-linear-to-br from-yellow-500/50 to-yellow-400/70 rounded-2xl flex items-center justify-center border-2 border-yellow-500/60 shadow-lg shrink-0">
                    <span className="text-yellow-300 text-xl lg:text-2xl font-bold">★</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-50 mb-1 lg:mb-2 truncate leading-tight">
                      {name}
                    </h3>
                    <p className="text-gray-300 text-sm lg:text-base leading-tight line-clamp-2">
                      {subtitle}
                    </p>
                  </div>
                </div>
                <div className="w-10 h-10 lg:w-12 lg:h-12 ml-3 lg:ml-4 bg-gray-900/60 rounded-2xl flex items-center justify-center border-2 border-gray-500/50 shadow-lg hover:bg-gray-800/80 transition-all flex-shrink-0 group-hover:rotate-90">
                  <span className={`${color} text-lg font-bold`}>○</span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6 lg:mb-10 shrink-0">
                <p className="text-2xl lg:text-3xl xl:text-4xl font-black text-gray-50 bg-linear-to-r from-gray-400/95 to-gray-300/95 bg-clip-text leading-none drop-shadow-lg">
                  {price}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-2 lg:space-y-3 mb-6 lg:mb-10 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500/50 scrollbar-track-transparent">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 lg:p-4 rounded-xl hover:bg-gray-900/50 border border-gray-700/40 hover:border-gray-600/60 transition-all text-gray-200 hover:text-gray-100 text-sm lg:text-base"
                  >
                    <div className="w-6 h-6 lg:w-7 lg:h-7 shrink-0 mt-0.5 bg-linear-to-r from-emerald-500/50 to-emerald-400/60 rounded-lg flex items-center justify-center border-2 border-teal-500/70 shadow-md">
                      <span className="text-emerald-300 font-bold text-sm lg:text-base">✓</span>
                    </div>
                    <span className="leading-relaxed font-medium line-clamp-2 flex-1 text-xs lg:text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Bottom gradient bar */}
              <div className="w-full h-1.5 bg-linear-to-r from-gray-500/70 to-gray-400/70 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
