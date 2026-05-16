import { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";

interface AboutCarouselProps {
  images: string[];
  title?: string;
  subtitle?: string;
}

const AboutCarousel = ({
  images,
  title = "Moments from the Field",
  subtitle = "Glimpses of our work alongside the communities we serve",
}: AboutCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Camera className="w-4 h-4" />
            Our Gallery
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {title}
          </h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ align: "center", loop: true }}
          plugins={[Autoplay({ delay: 4500, stopOnInteraction: true })]}
          className="max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {images.map((src, index) => {
              const isActive = index === current;
              return (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-full md:basis-2/3 lg:basis-1/2"
                >
                  <div
                    className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ${
                      isActive
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-60"
                    }`}
                  >
                    <img
                      src={src}
                      alt={`KELLENA in the community ${index + 1}`}
                      className="w-full h-[280px] md:h-[460px] object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-1">
                        Field Story · {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="text-lg md:text-xl font-semibold">
                        Building trust, one community at a time
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-11 w-11 border-primary/30 hover:bg-primary hover:text-primary-foreground"
            onClick={() => api?.scrollPrev()}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="flex items-center gap-2">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-primary"
                    : "w-2 bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-11 w-11 border-primary/30 hover:bg-primary hover:text-primary-foreground"
            onClick={() => api?.scrollNext()}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutCarousel;
