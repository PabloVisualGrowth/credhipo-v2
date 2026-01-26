import { ArrowRight, TrendingUp, Clock, FileCheck, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import dreamHome from "@/assets/dream-home.jpg";

const steps = [
  {
    icon: FileCheck,
    step: "01",
    title: "Cuéntanos tu situación",
    description:
      "Analizamos tu perfil financiero y entendemos tus necesidades para encontrar la mejor hipoteca.",
  },
  {
    icon: TrendingUp,
    step: "02",
    title: "Comparamos opciones",
    description:
      "Buscamos entre más de 20 entidades bancarias para ofrecerte las mejores condiciones.",
  },
  {
    icon: Clock,
    step: "03",
    title: "Gestionamos todo",
    description:
      "Nos encargamos del papeleo, negociaciones y trámites. Tú solo te preocupas de elegir tu casa.",
  },
  {
    icon: KeyRound,
    step: "04",
    title: "Consigues las llaves",
    description:
      "Firma tu hipoteca con las mejores condiciones y comienza tu nueva vida en tu hogar.",
  },
];

const Storytelling = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${dreamHome})` }}
      >
        <div className="absolute inset-0 bg-primary/95" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary-foreground/70 uppercase tracking-wider mb-4">
            Tu Camino hacia el Hogar
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
            De la búsqueda a las llaves de tu casa
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Somos el mejor intermediario financiero para ayudarte a encontrar tu
            Hipoteca Ideal. Trabajamos enfocados en tus intereses para
            encontrarte la mejor opción del mercado.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-primary-foreground/20 z-0" />
              )}
              
              <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 hover:bg-card/20 transition-all duration-300 relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center group-hover:bg-primary-foreground group-hover:scale-110 transition-all duration-300">
                    <step.icon className="h-6 w-6 text-primary-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-4xl font-heading font-bold text-primary-foreground/20">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl">
            Comienza tu viaje ahora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Storytelling;
