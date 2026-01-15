interface InfoCardProps {
  name: string;
  subtitle: string;
  price: string;
  features: string[];
}

export default function InfoCards() {
  const cardInfo: InfoCardProps[] = [
    {
      name: "Контроль цен",
      subtitle: "Ты знаешь, кто демпингует",
      price: "Бесплатно",
      features: [
        "Видишь всех продавцов по твоему товару",
        "Понимаешь, кто сливает цену",
        "Проверяешь рынок за минуту",
        "Больше никакой игры вслепую",
      ],
    },
    {
      name: "Защита от демпинга",
      subtitle: "Реагируешь раньше конкурентов",
      price: "От 0 ₸",
      features: [
        "Замечаешь падение цен сразу",
        "Не снижаешь цену без причины",
        "Сохраняешь маржу",
        "Продаёшь умнее, а не дешевле",
      ],
    },
    {
      name: "Рост прибыли",
      subtitle: "Цена под контролем — деньги растут",
      price: "Когда готов зарабатывать",
      features: [
        "Понимаешь реальную цену рынка",
        "Поднимаешь цену, когда можно",
        "Убираешь лишние скидки",
        "Зарабатываешь, а не выживаешь",
      ],
    },
  ];

  return (
    <div className="relative w-full py-20 px-4 lg:px-8 mx-auto w-screen overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-950 to-emerald-900">
      
      {/* Glowy floating emerald shapes */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-48 -left-40 w-[30rem] h-[30rem] bg-emerald-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/4 left-1/2 w-72 h-72 bg-emerald-600/10 rounded-full blur-2xl animate-spin-slow" />
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {cardInfo.map(({ name, subtitle, price, features }, index) => (
          <div 
            key={index}
            className="group relative w-full p-px bg-gradient-to-br from-emerald-500/25 to-emerald-400/25 rounded-3xl shadow-xl shadow-emerald-900/50 hover:shadow-emerald-900/70 transition-all duration-500 overflow-hidden backdrop-blur-xl border border-emerald-500/40 hover:border-emerald-400/60"
          >
            <div className="relative bg-gradient-to-br from-emerald-950/90 via-emerald-900/80 to-emerald-950/90 backdrop-blur-2xl rounded-3xl p-6 lg:p-8 h-[480px] flex flex-col shadow-2xl shadow-emerald-900/50 border border-emerald-600/30 hover:border-emerald-500/50 transition-all duration-300">
              
              {/* Top */}
              <div className="flex items-start justify-between mb-6 lg:mb-8">
                <div className="flex items-center gap-3 lg:gap-4 flex-1 min-w-0">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-emerald-500/40 to-emerald-400/40 rounded-2xl flex items-center justify-center border-2 border-emerald-500/60 shadow-lg flex-shrink-0">
                    <span className="text-emerald-300 text-xl lg:text-2xl font-bold">★</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-emerald-50 mb-1 lg:mb-2 truncate leading-tight">
                      {name}
                    </h3>
                    <p className="text-emerald-300 text-sm lg:text-base leading-tight line-clamp-2">
                      {subtitle}
                    </p>
                  </div>
                </div>
                <div className="w-10 h-10 lg:w-12 lg:h-12 ml-3 lg:ml-4 bg-emerald-900/60 rounded-2xl flex items-center justify-center border-2 border-emerald-500/50 shadow-lg hover:bg-emerald-800/80 transition-all flex-shrink-0 group-hover:rotate-90">
                  <span className="text-emerald-400 text-lg font-bold">○</span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6 lg:mb-10 flex-shrink-0">
                <p className="text-2xl lg:text-3xl xl:text-4xl font-black text-emerald-50 bg-gradient-to-r from-emerald-400/95 to-emerald-300/95 bg-clip-text leading-none drop-shadow-lg">
                  {price}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-2 lg:space-y-3 mb-6 lg:mb-10 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-emerald-500/50 scrollbar-track-transparent">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 lg:p-4 rounded-xl hover:bg-emerald-900/50 border border-emerald-700/40 hover:border-emerald-600/60 transition-all text-emerald-200 hover:text-emerald-100 text-sm lg:text-base"
                  >
                    <div className="w-6 h-6 lg:w-7 lg:h-7 flex-shrink-0 mt-0.5 bg-gradient-to-r from-emerald-500/40 to-emerald-400/40 rounded-lg flex items-center justify-center border-2 border-emerald-500/70 shadow-md">
                      <span className="text-emerald-300 font-bold text-sm lg:text-base">✓</span>
                    </div>
                    <span className="leading-relaxed font-medium line-clamp-2 flex-1 text-xs lg:text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Bottom gradient bar */}
              <div className="w-full h-1.5 bg-gradient-to-r from-emerald-500/70 to-emerald-400/70 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
