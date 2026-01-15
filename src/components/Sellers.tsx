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
    <section className="py-24 px-3 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-slate-50 overflow-hidden">
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute top-10 left-8 w-96 h-96 bg-blue-500/6 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-[500px] h-[500px] bg-amber-400/8 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-slate-50">
            Клиенты повышают продажи с нашим демпинг-сервисом
          </h2>
          <p className="text-lg text-slate-300/70 max-w-2xl mx-auto">
            Реагируйте быстрее конкурентов, сохраняйте маржу и увеличивайте доход без лишних скидок
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
            <div className="flex">
              {SLIDES.map((slide, index) => (
                <div key={index} className="min-w-full px-6 lg:px-8">
                  <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl shadow-2xl shadow-slate-900/50 border border-slate-600/20 h-[380px] lg:h-[420px] flex flex-col p-8 lg:p-10">
                    <div className="flex items-start gap-6 mb-6">
                      <img
                        src={slide.image}
                        alt={slide.name}
                        className="w-28 h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-2xl object-cover border-4 border-slate-500/30 shadow-lg flex-shrink-0 mt-1"
                      />
                      <div className="flex-1 min-w-0 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="flex text-amber-400 text-lg">
                            {Array.from({ length: slide.rating }).map((_, i) => (
                              <span key={i}>★</span>
                            ))}
                          </div>
                          <span className="text-xs lg:text-sm text-slate-300 whitespace-nowrap">
                            {slide.rating} звезд
                          </span>
                        </div>

                        <p className="text-lg lg:text-xl font-medium text-slate-50 leading-tight line-clamp-3 break-words">
                          "{slide.review}"
                        </p>

                        <div className="flex items-center gap-4">
                          <p className="font-semibold text-slate-300 text-base lg:text-lg truncate flex-1 min-w-0">
                            {slide.name}
                          </p>
                          <div className="flex gap-1 text-sm text-slate-400 whitespace-nowrap flex-shrink-0">
                            <span>📱</span> БирКаспи
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-slate-600/30 mt-auto">
                      <div className="flex items-center gap-3 text-sm lg:text-base text-slate-300">
                        <span className="truncate">
                          <slide.social className="w-5 h-5" />
                        </span>
                      </div>
                      <button className="px-6 py-3 lg:px-8 lg:py-3.5 rounded-xl bg-gradient-to-r from-teal-500/70 to-emerald-400/70 text-slate-900 font-semibold shadow-md hover:shadow-blue-500/50 transition-all duration-300 whitespace-nowrap text-sm lg:text-base">
                        Читать отзыв
                      </button>
                    </div>
                  </div>
                </div>
              ))}
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
  );
}
