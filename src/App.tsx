import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InfoCard from "./components/InfoCard";
import QA from "./components/QA";
import StatsSection from "./components/Stats";
import RunningCard from "./components/UI/RunningCards";
import Statistics from "./components/Statistics";
import { Pricing } from "./components/Pricing";
import { BanknoteArrowUpIcon, Eye, Shield } from "lucide-react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Apply/remove the `dark` class on <html>
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);


const plans = [
  {
    badge: "Контроль цен",
    price: "$29",
    description: "Сразу видишь, кто демпингует", // subtitle → description
    cta: "Выбрать план", // CTA button
    active: true,
    features: [
      "Все продавцы твоего товара на одном экране",
      "Понимаешь, кто снижает цену",
      "Отслеживание рынка за минуты",
      "Никакой игры вслепую",
    ],
    textColor: "text-violet-400",
    icon: Eye,
    bgColor: "bg-violet-400",
    borderColor: "rgba(203,181,255,0.4)",
  },
  {
    badge: "Защита от демпинга",
    price: "$49",
    description: "Реагируешь быстрее конкурентов",
    cta: "Выбрать план",
    active: false,
    features: [
      "Сигналы о падении цен сразу",
      "Не снижай цену без причины",
      "Сохраняй маржу",
      "Продавай умнее, а не дешевле",
    ],
    textColor: "text-blue-400",
    icon: Shield,
    bgColor: "bg-blue-400",
    borderColor: "rgba(147,197,253,0.4)",
  },
  {
    badge: "Рост прибыли",
    price: "$99",
    description: "Цена под контролем — доход растёт",
    cta: "Выбрать план",
    active: false,
    features: [
      "Реальные цены рынка под рукой",
      "Поднимаешь цену, когда можно",
      "Убираешь лишние скидки",
      "Зарабатываешь, а не выживаешь",
    ],
    textColor: "text-emerald-400",
    icon: BanknoteArrowUpIcon,
    bgColor: "bg-emerald-400",
    borderColor: "rgba(110,231,183,0.4)",
  },
];
  return (
    <div className="min-h-screen text-on-background overflow-hidden relative">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <RunningCard />
      <Statistics />
      <div
        className="relative z-[1000] overflow-hidden
            shadow-2xl md:shadow-4xl
            bg-white dark:bg-slate-950
            border border-white/10 dark:border-slate-800
            dark:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)]"
      >
        <StatsSection />
      </div>
      <InfoCard plans={plans} />
      <div className="flex justify-center ">
        <Pricing />
      </div>
      <QA />
      <Footer />
    </div>
  );
}

export default App;
