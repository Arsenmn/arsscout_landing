declare module 'embla-carousel-react' {
  import { RefObject } from 'react';
  import { EmblaCarouselType, OptionsType } from 'embla-carousel';

  export default function useEmblaCarousel(
    options?: Partial<OptionsType>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    plugins?: any[]
  ): [RefObject<HTMLDivElement>, EmblaCarouselType | undefined];
}
