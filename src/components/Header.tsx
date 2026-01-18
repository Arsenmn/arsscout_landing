import { HandCoins, Moon, Sun } from "lucide-react";

interface INavLinks {
  title: string;
  link: string;
}

interface IHeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// Header.tsx
const Header = ({ darkMode, toggleDarkMode }: IHeaderProps) => {
  const navLinks: INavLinks[] = [
    { title: "Главная", link: "#home" },
    { title: "О нас", link: "#about" },
    { title: "Демо", link: "#demo" },
    { title: "Тарифы", link: "#pricing" },
    { title: "QA", link: "#qa" },
    { title: "Контакты", link: "#contacts" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[2000] flex items-center justify-between px-7 lg:px-10 xl:px-48 w-full bg-white/80 dark:bg-slate-900/40 text-sm text-slate-900 dark:text-slate-100 shadow-md shadow-black/30 backdrop-blur-xl border border-gray-200/40 dark:border-slate-700/40 transition-colors">
      <div className="flex flex-row gap-3 items-center text-lg italic font-['JetBrains_Mono'] font-bold text-teal-500">
        <HandCoins />
        ДемпингПро
      </div>
      <div className="flex justify-center px-30 py-5">
        <nav className="flex items-center w-full max-w-6xl justify-between rounded-full bg-white/80 dark:bg-slate-900 px-6 py-2 text-sm text-slate-900 dark:text-slate-100 shadow-md shadow-black/30 backdrop-blur-xl border border-gray-200/40 dark:border-slate-700/40 transition-colors">
          {/* Nav links */}
          <ul className="flex gap-10">
            {navLinks.map(({ title, link }) => (
              <li
                key={title}
                className="
                relative cursor-pointer text-teal-600 dark:text-teal-400
                before:absolute before:left-0 before:-bottom-1
                before:h-0.5 before:w-full before:origin-left
                before:scale-x-0 before:bg-teal-400
                before:transition-transform before:duration-300
                hover:before:scale-x-100
              "
              >
                <a href={link}>{title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <button
        onClick={toggleDarkMode}
        aria-label="Toggle theme"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/40 dark:border-slate-600/40 bg-slate-100/60 dark:bg-slate-800/60 hover:bg-slate-200/70 dark:hover:bg-slate-700/70 transition"
      >
        {darkMode ? (
          <Sun className="text-yellow-400 p-1" />
        ) : (
          <Moon className="text-slate-700 p-1" />
        )}
      </button>
    </header>
  );
};

export default Header;
