export default function Footer() {
  return (
    <footer className="w-full">
      {/* Top Section */}
      <div
        className="bg-teal-500 dark:bg-teal-900 w-full text-black dark:text-white pt-20 pb-28 px-6 md:px-12 lg:px-24 transition-colors"
        id="#contacts"
      >
        <div className="w-full max-w-[1600px] mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 dark:from-teal-400 dark:via-teal-500 dark:to-teal-400 bg-clip-text text-transparent">
              SALAM@DAMPINGPRO.KZ
            </h2>
            <svg
              className="w-10 h-10 shrink-0 stroke-black dark:stroke-white"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 5h14v14M5 19L19 5"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-12 mt-20 text-sm">
            {/* Contact */}
            <div>
              <p className="font-medium mb-3">+7 (777) 123-45-67</p>
              <p>ул. Парампампам</p>
              <p>г. Алматы, Казахстан</p>
              <p>050000</p>
            </div>

            {/* Product */}
            <div>
              <p className="font-semibold mb-3">Сервисы</p>
              <ul className="space-y-1">
                <li>Мониторинг цен</li>
                <li>Автодемпинг</li>
                <li>Аналитика конкурентов</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <p className="font-semibold mb-3">Правовая информация</p>
              <ul className="space-y-1">
                <li>Пользовательское соглашение</li>
                <li>Политика конфиденциальности</li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <p className="font-semibold mb-3">Социальные сети</p>
              <ul className="space-y-1">
                <li>Telegram</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full overflow-hidden h-40 relative flex items-start justify-center bg-white dark:bg-slate-950">
        <span
          className="absolute text-[230px] font-bold leading-none top-1/2 transform -translate-y-1/2 text-black/10 dark:text-white/20"
        >
          DAMPINGPRO
        </span>
      </div>
    </footer>
  );
}
