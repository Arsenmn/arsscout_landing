// Header.tsx
const Header = () => {
  const navLinks = [
    {
      title: "Главная",
      link: "#home",
    },
    {
      title: "О нас",
      link: "#home",
    },
    {
      title: "Тарифы",
      link: "#home",
    },
    {
      title: "QA",
      link: "#home",
    },
    {
      title: "Контакты",
      link: "#home",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-3">
      <nav className="flex w-full max-w-6xl items-center justify-between rounded-full bg-slate-400/1 px-8 py-3 text-sm text-slate-900 shadow-md shadow-black/30 backdrop-blur-xl border border-gray-700/20">
        {/* Logo */}
        <div className="text-lg block italic font-['JetBrains_Mono'] font-bold text-teal-400">
          ДемпингПро
        </div>

        {/* Nav links */}
        <ul className="flex gap-10">
          {navLinks.map(({ title, link }) => (
            <li
              key={title}
              className="
                relative cursor-pointer text-slate-900
                before:absolute before:left-0 before:-bottom-1
                before:h-0.5 before:w-full before:origin-left
                before:scale-x-0 before:bg-slate-400
                before:transition-transform before:duration-300
                hover:before:scale-x-100
              "
            >
              <a href={link}>{title}</a>
            </li>
          ))}
        </ul>

        {/* Right button */}
        <div className="flex items-center gap-3">
          <button className="flex py-1 px-3 items-center justify-center rounded-full border border-slate-400/20 bg-slate-600/20 hover:bg-slate-500/30 hover:border-slate-400/30 transition-colors duration-150">
            Войти
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
