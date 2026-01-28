import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-family.jpg";

const Hero = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowContent(window.scrollY > 5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const benefits = [
    "Sin comisiones ocultas",
    "Asesoría personalizada",
    "Las mejores condiciones",
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay que aparece con scroll */}
        <div 
          className={`absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50 md:from-primary/90 md:via-primary/70 md:to-primary/40 transition-opacity duration-500 ${
            showContent ? "opacity-100" : "opacity-0"
          }`} 
        />
      </div>

      {/* Content - aparece con scroll */}
      <div 
        className={`container relative z-10 mx-auto px-4 pt-20 pb-12 md:pt-32 md:pb-20 transition-all duration-500 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full px-3 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-credipo-lime rounded-full animate-pulse" />
            <span className="text-[10px] md:text-sm text-primary-foreground/90">
              Más de 2.000 familias han encontrado su hogar con nosotros
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-3 md:mb-6">
            Encuentra la hipoteca ideal para tu hogar
          </h1>

          {/* Subheadline */}
          <p className="text-sm md:text-xl text-primary-foreground/80 mb-5 md:mb-8 leading-relaxed">
            Te ayudamos a conseguir las mejores condiciones hipotecarias con un
            proceso transparente y personalizado.
          </p>

          {/* Benefits - ocultos en móvil pequeño */}
          <ul className="hidden sm:flex flex-wrap gap-2 md:gap-4 mb-6 md:mb-10">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-primary-foreground/90"
              >
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-credipo-lime" />
                <span className="text-xs md:text-sm font-medium">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
            <Button variant="hero" size="lg" className="w-full sm:w-auto text-xs sm:text-sm md:text-base py-5 md:py-6">
              Quiero comprar una vivienda
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto text-xs sm:text-sm md:text-base py-5 md:py-6">
              Quiero mejorar mi hipoteca
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-8 mt-6 md:mt-12 pt-4 md:pt-8 border-t border-primary-foreground/20">
            <div className="text-center flex-1">
              <div className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary-foreground">
                98%
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm text-primary-foreground/70">
                Aprobaciones
              </div>
            </div>
            <div className="text-center flex-1">
              <div className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary-foreground">
                20+
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm text-primary-foreground/70">
                Entidades
              </div>
            </div>
            <div className="text-center flex-1">
              <div className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary-foreground">
                0€
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm text-primary-foreground/70">
                Costes ocultos
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - visible solo cuando no hay contenido */}
      <div 
        className={`absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${
          showContent ? "opacity-0" : "opacity-100 animate-bounce"
        }`}
      >
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-foreground/40 rounded-full flex justify-center">
          <div className="w-1 h-2 md:w-1.5 md:h-3 bg-foreground/60 rounded-full mt-1.5 md:mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
