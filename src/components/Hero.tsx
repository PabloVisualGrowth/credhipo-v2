import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-family.jpg";

const Hero = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowContent(window.scrollY > 50);
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
          className={`absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40 transition-opacity duration-500 ${
            showContent ? "opacity-100" : "opacity-0"
          }`} 
        />
      </div>

      {/* Content - aparece con scroll */}
      <div 
        className={`container relative z-10 mx-auto px-4 pt-24 md:pt-32 pb-16 md:pb-20 transition-all duration-500 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full px-3 md:px-4 py-1.5 md:py-2 mb-4 md:mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs md:text-sm text-primary-foreground/90">
              Más de 2.000 familias han encontrado su hogar con nosotros
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-4 md:mb-6">
            Encuentra la hipoteca ideal para tu hogar
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-xl text-primary-foreground/80 mb-6 md:mb-8">
            Te ayudamos a conseguir las mejores condiciones hipotecarias con un
            proceso transparente y personalizado. Olvídate del papeleo, nosotros
            nos encargamos de todo.
          </p>

          {/* Benefits */}
          <ul className="flex flex-col sm:flex-row flex-wrap gap-2 md:gap-4 mb-8 md:mb-10">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-primary-foreground/90"
              >
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-emerald-400" />
                <span className="text-xs md:text-sm font-medium">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm md:text-base">
              Quiero comprar una vivienda
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto text-sm md:text-base">
              Quiero mejorar mi hipoteca
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-between sm:justify-start gap-4 md:gap-8 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-primary-foreground/20">
            <div className="text-center sm:text-left">
              <div className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">
                98%
              </div>
              <div className="text-xs md:text-sm text-primary-foreground/70">
                Aprobaciones
              </div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">
                20+
              </div>
              <div className="text-xs md:text-sm text-primary-foreground/70">
                Entidades bancarias
              </div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">
                0€
              </div>
              <div className="text-xs md:text-sm text-primary-foreground/70">
                Sin costes ocultos
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - visible solo cuando no hay contenido */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${
          showContent ? "opacity-0" : "opacity-100 animate-bounce"
        }`}
      >
        <div className="w-6 h-10 border-2 border-foreground/40 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-foreground/60 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
