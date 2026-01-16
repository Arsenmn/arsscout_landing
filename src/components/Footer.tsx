import { useRef } from "react";

// Footer.tsx - damping theme + teal/emerald accents
export default function Footer() {
  const subscribeRef = useRef<HTMLInputElement>(null);

  return (
    <footer className="bg-slate-950/95 backdrop-blur-xl border-t border-slate-700/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_repeat(3,1fr)] xl:grid-cols-[1.8fr_repeat(3,1fr)] gap-8 py-16 lg:py-24">
          
          {/* Subscribe Card */}
          <div className="bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-slate-700/30 shadow-2xl shadow-slate-900/50 lg:col-span-1">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-50 mb-6">
              Получай уведомления о демпингерах
            </h3>
            <p className="text-slate-300 mb-8 text-base lg:text-lg leading-relaxed">
              Будь первым, кто узнаёт о снижении цен и актуальных позициях конкурентов
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                ref={subscribeRef}
                type="email"
                placeholder="Твой email"
                className="flex-1 bg-slate-900/60 border border-slate-700/40 rounded-2xl px-6 py-4 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-transparent transition-all shadow-lg"
              />
              <button 
                type="submit"
                className="bg-linear-to-r from-teal-500 to-emerald-400 hover:from-teal-400 hover:to-emerald-500 px-8 py-4 rounded-2xl text-slate-950 font-semibold shadow-xl hover:shadow-emerald-400/50 transition-all whitespace-nowrap w-full sm:w-auto"
              >
                Подписаться →
              </button>
            </form>
          </div>

          {/* Column 1 */}
          <div>
            <h4 className="text-xl font-bold text-slate-50 mb-6">Продукт</h4>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#" className="hover:text-teal-400 transition-colors block py-1">Kaspi</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors block py-1">Аналитика демпинга</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors block py-1">Рассылка уведомлений</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors block py-1">Консультации по ценам</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-xl font-bold text-slate-50 mb-6">Обучение</h4>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#" className="hover:text-emerald-400 transition-colors block py-1">Блог о демпинге</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors block py-1">Курсы по ценам</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors block py-1">Вебинары</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors block py-1">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-xl font-bold text-slate-50 mb-6">Компания</h4>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#" className="hover:text-teal-400 transition-colors block py-1">О нас</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors block py-1">Контакты</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors block py-1">Вакансии</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors block py-1">Astana Hub</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/20 pt-12 pb-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
            <div className="text-slate-300">
              <p className="text-lg font-semibold text-slate-50 mb-2">Сервис демпинга</p>
              <p className="text-sm">© 2026. Резидент Astana Hub</p>
            </div>
            <div className="flex flex-wrap gap-6 text-slate-300 text-sm justify-center lg:justify-start">
              <a href="#" className="hover:text-teal-400 transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
