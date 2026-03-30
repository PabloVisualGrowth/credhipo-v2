import { Landmark, Scale, ClipboardList, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Landmark,
    title: "Gestión de financiación",
    description:
      "Actuamos como enlace con entidades bancarias para obtener financiación en las mejores condiciones.",
  },
  {
    icon: Scale,
    title: "Intermediación estratégica y supervisión legal",
    description:
      "Analizamos todos los acuerdos y condiciones de la compraventa para la viabilidad legal y financiera de cada operación.",
  },
  {
    icon: ClipboardList,
    title: "Seguimiento integral del proceso",
    description:
      "Supervisamos y te asesoramos en cada fase de la operación, desde el primer análisis hasta la firma final. Te orientamos paso a paso, resolviendo dudas, revisando cada etapa y asegurándonos de que todo avance de forma clara, segura y sin sorpresas.",
  },
];

const profiles = [
  "Profesionales autónomos o empresarios, cuyos ingresos no siempre se presentan de forma clara para las entidades financieras",
  "Personas con ingresos variables o estructuras laborales no tradicionales",
  "Extranjeros residentes o no residentes, que necesitan adaptar su perfil a los requisitos del sistema financiero español",
  "Compradores que quieren asegurarse de que todo el proceso es correcto, más allá de la financiación",
  "Inversores inmobiliarios, que buscan analizar cada operación con una visión estratégica y rentable",
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BlurFade inView delay={0}>
            <span className="inline-block text-sm font-medium text-secondary uppercase tracking-wider mb-4">
              Nuestros Servicios
            </span>
          </BlurFade>
          <TextAnimate
            animation="blurInUp"
            by="word"
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4"
            as="h2"
          >
            Nuestro equipo trabaja sobre tres pilares fundamentales
          </TextAnimate>
          <BlurFade inView delay={0.2}>
            <p className="text-lg text-muted-foreground">
              Un enfoque ideal para cada operación.
            </p>
          </BlurFade>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20 lg:mb-32">
          {services.map((service, index) => (
            <BlurFade key={index} inView delay={0.1 * index}>
              <Card className="group hover:shadow-elevated transition-all duration-300 border-border/50 hover:border-primary/30 bg-card h-full">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-xl font-heading text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>

        {/* ¿A quién ayudamos? */}
        <div className="max-w-4xl mx-auto">
          <BlurFade inView delay={0}>
            <div className="text-center mb-10">
              <span className="inline-block text-sm font-medium text-secondary uppercase tracking-wider mb-4">
                ¿Es para ti?
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                ¿A quién ayudamos?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Los servicios de CredHipo están pensados para personas que quieren tomar decisiones inmobiliarias con seguridad, pero que necesitan apoyo experto para hacerlo.
              </p>
            </div>
          </BlurFade>

          <BlurFade inView delay={0.2}>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              Trabajamos especialmente con perfiles que, por su situación, pueden encontrar más dificultades a la hora de obtener financiación o validar una operación ante el banco:
            </p>
            <ul className="space-y-4 mb-10">
              {profiles.map((profile, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-base text-muted-foreground leading-relaxed">{profile}</span>
                </li>
              ))}
            </ul>
            <p className="text-base text-muted-foreground leading-relaxed mb-10">
              En todos estos casos, en CredHipo trabajamos para estructurar, presentar y defender cada operación con criterio financiero y legal, facilitando el acceso a financiación y reduciendo riesgos durante todo el proceso.
            </p>
          </BlurFade>

          <BlurFade inView delay={0.3}>
            <div className="text-center">
              <Button variant="cta" size="lg" className="rounded-full">
                ¿Necesitas un bróker hipotecario?
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default Services;
