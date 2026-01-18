;

import { useCallback } from "react";
import { NextButton, PrevButton } from "./UI/CarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import { Instagram, type LucideIcon } from "lucide-react";

export default function Sellers() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
    speed: 8,
  });

  interface Slide {
    image: string;
    name: string;
    review: string;
    rating: number;
    social: LucideIcon;
  }

  const SLIDES: Slide[] = [
    {
      image: "/topuria.jpg",
      name: "Илья Топурия",
      review:
        "С сервисом демпинга я вижу всех конкурентов и сразу реагирую на снижение цены. Продажи выросли в 2 раза.",
      rating: 5,
      social: Instagram,
    },
    {
      image: "/erkebulan.jpg",
      name: "Еркебулан Токтар",
      review:
        "Раньше терял прибыль из‑за демпинга, теперь бот всё отслеживает сам — я всегда на первом месте.",
      rating: 5,
      social: Instagram,
    },
    {
      image: "/daraboz.jpeg",
      name: "Дикий Дарабоз",
      review:
        "Мониторинг цен и быстрые уведомления помогли сохранить маржу и увеличить доход без лишних скидок.",
      rating: 5,
      social: Instagram,
    },
  ];

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <>

      <section className="relative py-24 px-4 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 transition-colors">
        <div className="mx-auto max-w-6xl text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
            Что говорят наши клиенты
          </h2>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Реальные отзывы от тех, кто уже повысил продажи с нашим сервисом
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
            <div className="flex gap-6">
              {SLIDES.map((slide, index) => {
                const SocialIcon = slide.social;

                return (
                  <div key={index} className="min-w-full px-4 lg:px-6">
                    <div
                      className="
                        relative bg-white dark:bg-slate-900
                        rounded-2xl border border-slate-200 dark:border-slate-700
                        shadow-lg dark:shadow-xl p-8 lg:p-10 flex flex-col h-[480px] lg:h-[520px]
                        transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl
                        overflow-hidden
                      "
                    >
                      {/* Background accent / subtle glow */}
                      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-emerald-100/20 via-teal-100/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl" />

                      {/* Top: Avatar + Name + Rating */}
                      <div className="flex items-center gap-6 mb-6 relative z-10">
                        <img
                          src={slide.image}
                          alt={slide.name}
                          className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl object-cover border-2 border-emerald-400 dark:border-teal-500 shadow-md"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-xl lg:text-2xl text-slate-900 dark:text-white truncate">
                            {slide.name}
                          </p>
                          <div className="flex items-center gap-2 mt-1 text-amber-400 text-lg">
                            {Array.from({ length: slide.rating }).map((_, i) => (
                              <span key={i}>★</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Review */}
                      <p className="flex-grow text-lg lg:text-xl text-slate-700 dark:text-slate-300 leading-relaxed relative z-10">
                        “{slide.review}”
                      </p>

                      {/* Bottom: Social + CTA */}
                      <div className="mt-6 flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                          <SocialIcon className="w-5 h-5" />
                          <span className="text-sm">Instagram</span>
                        </div>

                        <button className="
                          px-6 py-3 rounded-xl
                          bg-gradient-to-r from-emerald-500 to-teal-500
                          text-white font-semibold shadow-md
                          hover:shadow-emerald-400/40 dark:hover:shadow-emerald-500/30
                          transition-all duration-300
                        ">
                          Читать отзыв
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          {emblaApi && (
            <>
              <PrevButton onClick={scrollPrev} />
              <NextButton onClick={scrollNext} />
            </>
          )}
        </div>
      </section>
    </>
  );
}
