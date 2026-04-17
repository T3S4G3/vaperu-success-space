import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import banner1 from "@/assets/banner-1.jpg";
import banner2 from "@/assets/banner-2.jpg";
import banner3 from "@/assets/banner-3.jpg";

const slides = [
  {
    image: banner1,
    title: "Software ERP Integral",
    subtitle: "Gestiona compras, ventas, contabilidad e inventarios en un solo sistema.",
    cta: "Solicita Demo",
    href: "#contacto",
  },
  {
    image: banner2,
    title: "Consultoría Informática",
    subtitle: "Asesoría experta en TI con soporte local en Lima desde 2015.",
    cta: "Conoce más",
    href: "#servicios",
  },
  {
    image: banner3,
    title: "Instalaciones y Soporte 24/7",
    subtitle: "Infraestructura confiable y soporte continuo para tu empresa.",
    cta: "Contáctanos",
    href: "#contacto",
  },
];

const BannerCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section id="inicio" className="pt-20">
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
        className="relative"
      >
        <CarouselContent>
          {slides.map((slide, i) => (
            <CarouselItem key={i}>
              <div className="relative h-[280px] md:h-[360px] lg:h-[420px] overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  width={1920}
                  height={800}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
                <div className="section-container relative h-full flex items-center">
                  <div className="max-w-xl space-y-3 md:space-y-4 text-background">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                      {slide.title}
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg opacity-90">
                      {slide.subtitle}
                    </p>
                    <Button variant="hero" size="lg" asChild>
                      <a href={slide.href}>
                        {slide.cta} <ArrowRight className="ml-1" size={18} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              aria-label={`Ir a slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                current === i ? "w-8 bg-primary" : "w-2 bg-background/60 hover:bg-background"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default BannerCarousel;
