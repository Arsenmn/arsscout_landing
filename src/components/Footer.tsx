import { useRef } from "react";

// Footer.tsx - LIGHT THEME (subtle standout)
export default function Footer() {
  const subscribeRef = useRef<HTMLInputElement>(null);

  return (
    <footer className="bg-linear-to-b from-slate-200 to-slate-300 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_repeat(3,1fr)] xl:grid-cols-[1.8fr_repeat(3,1fr)] gap-8 py-16 lg:py-24">
          
          {/* Subscribe Card - slightly elevated */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-lg hover:shadow-xl hover:shadow-emerald-300/30 lg:col-span-1 transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
              Получай уведомления о демпингерах
            </h3>
            <p className="text-slate-700 mb-8 text-base lg:text-lg leading-relaxed">
              Будь первым, кто узнаёт о снижении цен и актуальных позициях конкурентов
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                ref={subscribeRef}
                type="email"
                placeholder="Твой email"
                className="flex-1 bg-slate-50 border border-slate-300 rounded-2xl px-6 py-4 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all shadow-sm hover:shadow-md"
              />
              <button 
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-2xl text-white font-semibold shadow-lg hover:shadow-emerald-400 transition-all whitespace-nowrap w-full sm:w-auto border border-emerald-500 hover:border-emerald-600"
              >
                Подписаться →
              </button>
            </form>
          </div>

          {/* Column 1 */}
          <div>
            <h4 className="text-xl font-bold text-slate-900 mb-6">Продукт</h4>
            <ul className="space-y-3 text-slate-600">
              <li><a href="#" className="hover:text-emerald-600 transition-colors block py-1 hover:underline">Kaspi</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors block py-1 hover:underline">Аналитика демпинга</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors block py-1 hover:underline">Рассылка уведомлений</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors block py-1 hover:underline">Консультации по ценам</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-xl font-bold text-slate-900 mb-6">Обучение</h4>
            <ul className="space-y-3 text-slate-600">
              <li><a href="#" className="hover:text-emerald-600 transition-colors block py-1 hover:underline">Блог о демпинге</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors block py-1 hover:underline">Курсы по ценам</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors block py-1 hover:underline">Вебинары</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors block py-1 hover:underline">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-xl font-bold text-slate-900 mb-6">Компания</h4>
            <ul className="space-y-3 text-slate-600">
              <li><a href="#" className="hover:text-emerald-600 transition-colors block py-1 hover:underline">О нас</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors block py-1 hover:underline">Контакты</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors block py-1 hover:underline">Вакансии</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors block py-1 hover:underline">Astana Hub</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-12 pb-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
            <div className="text-slate-600">
              <p className="text-lg font-semibold text-slate-900 mb-2">Сервис демпинга</p>
              <p className="text-sm">© 2026. Резидент Astana Hub</p>
            </div>
            <div className="flex flex-wrap gap-6 text-slate-600 text-sm justify-center lg:justify-start">
              <a href="#" className="hover:text-emerald-600 transition-colors hover:underline">Политика конфиденциальности</a>
              <a href="#" className="hover:text-emerald-600 transition-colors hover:underline">Условия использования</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
