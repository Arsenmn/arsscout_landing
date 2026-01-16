import { useCallback } from "react";
import { NextButton, PrevButton } from "./UI/CarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import { Instagram, type LucideIcon } from "lucide-react";
import Divider from "./UI/Divider";

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
        "Раньше терял прибыль из-за демпинга, теперь бот всё отслеживает сам — я всегда на первом месте.",
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
      <Divider />

      <section className="py-24 px-3 bg-gradient-to-b from-slate-50 to-emerald-50/20 text-slate-900 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
              Клиенты повышают продажи с нашим сервисом
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Реагируйте быстрее конкурентов, сохраняйте маржу и увеличивайте
              доход без лишних скидок
            </p>
          </div>

          {/* Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
              <div className="flex">
                {SLIDES.map((slide, index) => {
                  const SocialIcon = slide.social;

                  return (
                    <div key={index} className="min-w-full px-6 lg:px-8">
                      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 h-[380px] lg:h-[420px] flex flex-col p-8 lg:p-10 hover:shadow-emerald-200/40 transition-all duration-300">
                        <div className="flex items-start gap-6 mb-6">
                          <img
                            src={slide.image}
                            alt={slide.name}
                            className="w-28 h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-2xl object-cover border border-slate-200 shadow-md flex-shrink-0 mt-1"
                          />

                          <div className="flex-1 min-w-0 space-y-4">
                            {/* Rating */}
                            <div className="flex items-center gap-3">
                              <div className="flex text-amber-400 text-lg">
                                {Array.from({ length: slide.rating }).map(
                                  (_, i) => (
                                    <span key={i}>★</span>
                                  )
                                )}
                              </div>
                              <span className="text-xs lg:text-sm text-slate-500 whitespace-nowrap">
                                {slide.rating} звезд
                              </span>
                            </div>

                            {/* Review */}
                            <p className="text-lg lg:text-xl font-medium text-slate-800 leading-tight line-clamp-3">
                              “{slide.review}”
                            </p>

                            {/* Name */}
                            <div className="flex items-center gap-4">
                              <p className="font-semibold text-slate-700 text-base lg:text-lg truncate flex-1">
                                {slide.name}
                              </p>
                              <div className="flex gap-1 text-sm text-slate-400 whitespace-nowrap">
                                <span>📱</span> БирКаспи
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom */}
                        <div className="flex items-center justify-between pt-6 border-t border-slate-200 mt-auto">
                          <div className="flex items-center gap-2 text-slate-500">
                            <SocialIcon className="w-5 h-5" />
                            <span className="text-sm">Instagram</span>
                          </div>

                          <button className="px-6 py-3 lg:px-8 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-md hover:shadow-emerald-400/40 transition-all duration-300">
                            Читать отзыв
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {emblaApi && (
              <>
                <PrevButton onClick={scrollPrev} />
                <NextButton onClick={scrollNext} />
              </>
            )}
          </div>
        </div>
      </section>

      <Divider />
    </>
  );
}
