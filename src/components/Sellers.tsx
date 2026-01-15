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

  // YOUR SLIDES DATA - RIGHT HERE
  const SLIDES: Slide[] = [
    {
      image: "/topuria.jpg",
      name: "Илья Топурия",
      review:
        "Раньше сам следил за ценами, теперь всё делает ArSScout. Освободил себе время и заработал больше",
      rating: 5,
      social: Instagram
    },
    {
      image: "/erkebulan.jpg",
      name: "Еркебулан Токтар",
      review:
        "Работаю с ArSScout, доволен. экономит время и помогает держать продажи на высоком уровне.",
      rating: 5,
      social: Instagram,
    },
    {
      image: "/daraboz.jpeg",
      name: "Дикий Дарабоз",
      review:
        "Аналитика ArSScout помогает не ошибаться с товаром. Закупаю то, что надо — продажи и доход растут",
      rating: 5,
      social: Instagram
    },
  ];

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-24 px-3 bg-[#0b1b17]/95 text-emerald-50">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-emerald-50 mb-4">
            Получил миллионные обороты с помощью ArSScout
          </h2>
          <p className="text-lg text-emerald-100/70 max-w-2xl mx-auto">
            Клиенты говорят о росте продаж в 2 раза и больше месяцев
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
            <div className="flex">
              {SLIDES.map((slide, index) => (
                <div key={index} className="min-w-full px-6 lg:px-8">
                  <div className="bg-emerald-900/40 backdrop-blur-xl rounded-3xl shadow-2xl shadow-emerald-900/50 border border-emerald-500/20 h-[380px] lg:h-[420px] flex flex-col p-8 lg:p-10">
                    <div className="flex items-start gap-6 mb-6">
                      {/* BIGGER IMAGE */}
                      <img
                        src={slide.image}
                        alt={slide.name}
                        className="w-28 h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-2xl object-cover border-4 border-emerald-500/30 shadow-xl flex-shrink-0 mt-1"
                      />
                      <div className="flex-1 min-w-0 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="flex text-amber-400 text-lg">
                            {Array.from({ length: slide.rating }).map(
                              (_, i) => (
                                <span key={i}>★</span>
                              )
                            )}
                          </div>
                          <span className="text-xs lg:text-sm text-emerald-300 whitespace-nowrap">
                            5 звезд
                          </span>
                        </div>

                        <p className="text-lg lg:text-xl font-medium text-emerald-50 leading-tight line-clamp-3 break-words">
                          "{slide.review}"
                        </p>

                        <div className="flex items-center gap-4">
                          <p className="font-semibold text-emerald-300 text-base lg:text-lg truncate flex-1 min-w-0">
                            {slide.name}
                          </p>
                          <div className="flex gap-1 text-sm text-emerald-400 whitespace-nowrap flex-shrink-0">
                            <span>📱</span> БирКаспи
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-emerald-500/30 mt-auto">
                      <div className="flex items-center gap-3 text-sm lg:text-base text-emerald-300">
                        <span className="truncate">
                          <slide.social />
                        </span>
                      </div>
                      <button className="px-6 py-3 lg:px-8 lg:py-3.5 rounded-xl bg-gradient-to-r from-emerald-500/90 to-emerald-400/90 text-[#0b1b17] font-semibold shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 whitespace-nowrap text-sm lg:text-base">
                        Читать тест
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
