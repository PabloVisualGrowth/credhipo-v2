import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NumberTicker } from "@/components/ui/number-ticker";
import heroImage from "@/assets/hero-family.jpg";

const Hero = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50 md:from-primary/90 md:via-primary/70 md:to-primary/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full px-3 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-credipo-lime rounded-full animate-pulse" />
            <span className="text-[10px] md:text-sm text-primary-foreground/90">
              Donde tu hogar comienza
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-3 md:mb-6">
            Más que un broker hipotecario<sup>*</sup>: una operación segura y bien estructurada.
          </h1>

          {/* Body */}
          <p className="text-sm md:text-xl text-primary-foreground/80 mb-4 md:mb-6 leading-relaxed">
            En Credhipo conectamos oportunidades inmobiliarias con decisiones financieras sólidas. Nuestro equipo, formado por expertos en banca, derecho y economía, sector inmobiliario, analiza cada operación desde su viabilidad financiera, legal y estratégica para que compres o inviertas con total confianza.
          </p>

          {/* Expandable text */}
          {expanded && (
            <div className="text-sm md:text-base text-primary-foreground/75 mb-4 md:mb-6 leading-relaxed space-y-3">
              <p>
                En Credhipo analizamos cada operación desde una perspectiva financiera, legal y estratégica para garantizar que cada decisión sea sólida, viable y segura.
              </p>
              <p>
                Además, supervisamos cada fase del proceso de compraventa, revisando documentación, condiciones y acuerdos clave para asegurar que todo se desarrolle correctamente y sin imprevistos.
              </p>
              <p>
                Nuestro equipo está formado por profesionales con amplia experiencia en el sector legal, inmobiliario y bancario lo que nos permite acompañar a compradores e inversores durante todo el proceso, aportando una visión experta y rigurosa en cada fase.
              </p>
            </div>
          )}

          {/* Expand toggle */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs md:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-6 md:mb-10"
          >
            {expanded ? (
              <>Leer menos <ChevronUp className="h-4 w-4" /></>
            ) : (
              <>Leer más <ChevronDown className="h-4 w-4" /></>
            )}
          </button>

          {/* CTA */}
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
            <Button
              variant="hero"
              size="lg"
              className="w-full sm:w-auto text-xs sm:text-sm md:text-base py-5 md:py-6"
            >
              Hablar con un asesor
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-8 mt-6 md:mt-12 pt-4 md:pt-8 border-t border-primary-foreground/20">
            <div className="text-center flex-1">
              <div className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary-foreground">
                <NumberTicker value={98} className="text-primary-foreground" />%
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm text-primary-foreground/70">
                Aprobaciones
              </div>
            </div>
            <div className="text-center flex-1">
              <div className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary-foreground">
                <NumberTicker value={20} className="text-primary-foreground" />+
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

          {/* Footnote */}
          <p className="text-[10px] md:text-xs text-primary-foreground/50 mt-4">
            * Número de licencia de Banco de España
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
