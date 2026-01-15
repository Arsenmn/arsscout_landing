// Header.tsx
const Header = () => {
  const navLinks = ["Главная", "Аналитика", "Рассылка", "Консультация", "Блог"]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-3">
      <nav className="flex w-full max-w-6xl items-center justify-between rounded-full bg-white/5 px-8 py-3 text-sm text-slate-200 shadow-md shadow-black/40 backdrop-blur-xl border border-white/10">
        <div className="font-semibold text-lg block italic font-['JetBrains_Mono'] font-bold text-emerald-300">ArSScout</div>

        <ul className="flex gap-10">
          {navLinks.map(
            (item) => (
              <li
                key={item}
                className="
                  relative cursor-pointer text-slate-200
                  before:absolute before:left-0 before:-bottom-1
                  before:h-0.5 before:w-full before:origin-left
                  before:scale-x-0 before:bg-emerald-400
                  before:transition-transform before:duration-300
                  hover:before:scale-x-100
                "
              >
                {item}
              </li>
            )
          )}
        </ul>

        {/* Right icons */}
        <div className="flex items-center gap-3">
          <button className="flex py-1 px-2 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-emerald-300/30 hover:border-emerald-400/20 transition-colors duration-100">
            Вход
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
