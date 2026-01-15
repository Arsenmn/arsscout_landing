import { useRef } from "react";

// Footer.tsx - FIXED GRID
export default function Footer() {
  const subscribeRef = useRef<HTMLInputElement>(null);

  return (
    <footer className="bg-[#0b1b17]/95 backdrop-blur-xl border-t border-emerald-500/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_repeat(3,1fr)] xl:grid-cols-[1.8fr_repeat(3,1fr)] gap-8 py-16 lg:py-24">
          
          {/* Subscribe Card - Fixed responsive span */}
          <div className="bg-emerald-900/40 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-emerald-500/30 shadow-2xl shadow-emerald-900/50 lg:col-span-1">
            <h3 className="text-2xl lg:text-3xl font-bold text-emerald-50 mb-6">
              Подпишись на новости SaleScout
            </h3>
            <p className="text-emerald-200 mb-8 text-base lg:text-lg leading-relaxed">
              Получай уведомления о новых функциях и акциях
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                ref={subscribeRef}
                type="email"
                placeholder="Твой email"
                className="flex-1 bg-emerald-900/60 border border-emerald-500/40 rounded-2xl px-6 py-4 text-emerald-100 placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-transparent transition-all shadow-lg"
              />
              <button 
                type="submit"
                className="bg-linear-to-r from-emerald-500/95 to-emerald-400/95 hover:from-emerald-600 hover:to-emerald-500 px-8 py-4 rounded-2xl text-[#0b1b17] font-semibold shadow-xl hover:shadow-emerald-500/50 transition-all whitespace-nowrap w-full sm:w-auto"
              >
                Подписаться →
              </button>
            </form>
          </div>

          {/* Column 1 */}
          <div>
            <h4 className="text-xl font-bold text-emerald-50 mb-6">Продукт</h4>
            <ul className="space-y-3 text-emerald-200">
              <li><a href="#" className="hover:text-emerald-100 transition-colors block py-1">Kaspi</a></li>
              <li><a href="#" className="hover:text-emerald-100 transition-colors block py-1">Аналитика</a></li>
              <li><a href="#" className="hover:text-emerald-100 transition-colors block py-1">Рассылка</a></li>
              <li><a href="#" className="hover:text-emerald-100 transition-colors block py-1">Консультация</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-xl font-bold text-emerald-50 mb-6">Обучение</h4>
            <ul className="space-y-3 text-emerald-200">
              <li><a href="#" className="hover:text-emerald-100 transition-colors block py-1">Блог</a></li>
              <li><a href="#" className="hover:text-emerald-100 transition-colors block py-1">Курсы</a></li>
              <li><a href="#" className="hover:text-emerald-100 transition-colors block py-1">Вебинары</a></li>
              <li><a href="#" className="hover:text-emerald-100 transition-colors block py-1">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-xl font-bold text-emerald-50 mb-6">Компания</h4>
            <ul className="space-y-3 text-emerald-200">
              <li><a href="#" className="hover:text-emerald-100 transition-colors block py-1">О нас</a></li>
              <li><a href="#" className="hover:text-emerald-100 transition-colors block py-1">Контакты</a></li>
              <li><a href="#" className="hover:text-emerald-100 transition-colors block py-1">Вакансии</a></li>
              <li><a href="#" className="hover:text-emerald-100 transition-colors block py-1">Astana Hub</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-500/20 pt-12 pb-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
            <div className="text-emerald-300">
              <p className="text-lg font-semibold text-emerald-50 mb-2">SaleScout</p>
              <p className="text-sm">© 2026. Резидент Astana Hub</p>
            </div>
            <div className="flex flex-wrap gap-6 text-emerald-300 text-sm justify-center lg:justify-start">
              <a href="#">Политика конфиденциальности</a>
              <a href="#">Условия использования</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
