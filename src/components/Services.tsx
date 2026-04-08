import { Landmark, Scale, ClipboardList, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BlurFade } from "@/components/ui/blur-fade";
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
        <BlurFade inView delay={0}>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium text-secondary uppercase tracking-wider mb-4">
              Nuestros Servicios
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Nuestro equipo trabaja sobre tres pilares fundamentales
            </h2>
            <p className="text-lg text-muted-foreground">
              Un enfoque ideal para cada operación.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20 lg:mb-28">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elevated transition-all duration-300 border-border/50 hover:border-primary/30 bg-card h-full">
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
            ))}
          </div>
        </BlurFade>

        {/* ¿A quién ayudamos? — boutique dark panel */}
        <BlurFade inView delay={0}>
          <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: "#1B2C59" }}>

            {/* Panel header */}
            <div
              className="px-8 md:px-14 lg:px-16 pt-12 pb-10"
              style={{ borderBottom: "1px solid rgba(250,249,246,0.08)" }}
            >
              <span
                className="block text-xs font-semibold uppercase tracking-widest mb-3 font-body"
                style={{ color: "#757e98" }}
              >
                ¿Es para ti?
              </span>
              <h2
                className="text-3xl md:text-4xl font-heading font-bold mb-5"
                style={{ color: "#FAF9F6" }}
              >
                ¿A quién ayudamos?
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed font-body max-w-2xl"
                style={{ color: "rgba(250,249,246,0.60)" }}
              >
                Los servicios de CredHipo están pensados para personas que quieren tomar decisiones inmobiliarias con seguridad, pero que necesitan apoyo experto para hacerlo.
              </p>
              <p
                className="mt-4 text-sm md:text-base leading-relaxed font-body"
                style={{ color: "rgba(250,249,246,0.45)" }}
              >
                Trabajamos especialmente con perfiles que, por su situación, pueden encontrar más dificultades a la hora de obtener financiación o validar una operación ante el banco:
              </p>
            </div>

            {/* Profiles grid */}
            <div className="grid md:grid-cols-2">
              {profiles.map((profile, i) => {
                const isLeftCol = i % 2 === 0;
                const isLastAndOdd = i === profiles.length - 1 && profiles.length % 2 === 1;
                const isLast = i === profiles.length - 1;
                return (
                  <div
                    key={i}
                    className={`relative px-8 md:px-14 lg:px-16 py-8 ${isLastAndOdd ? "md:col-span-2" : ""}`}
                    style={{
                      borderBottom: isLast || (i === profiles.length - 2 && !isLeftCol) ? "none" : "1px solid rgba(250,249,246,0.07)",
                      borderRight: isLeftCol && !isLastAndOdd ? "1px solid rgba(250,249,246,0.07)" : "none",
                    }}
                  >
                    {/* Ghost number */}
                    <span
                      className="absolute top-4 right-6 font-heading font-bold select-none leading-none pointer-events-none"
                      style={{ fontSize: "4.5rem", color: "rgba(250,249,246,0.04)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <p
                      className="text-xs font-bold font-body mb-3 uppercase tracking-widest"
                      style={{ color: "#495579" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p
                      className="font-body text-sm md:text-base leading-relaxed"
                      style={{ color: "rgba(250,249,246,0.72)" }}
                    >
                      {profile}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Footer: closing text + CTA */}
            <div
              className="px-8 md:px-14 lg:px-16 py-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10"
              style={{ borderTop: "1px solid rgba(250,249,246,0.08)" }}
            >
              <p
                className="flex-1 text-sm md:text-base leading-relaxed font-body"
                style={{ color: "rgba(250,249,246,0.45)" }}
              >
                En todos estos casos, en CredHipo trabajamos para estructurar, presentar y defender cada operación con criterio financiero y legal, facilitando el acceso a financiación y reduciendo riesgos durante todo el proceso.
              </p>
              <Button variant="hero" size="lg" className="rounded-full flex-shrink-0 self-start md:self-auto">
                ¿Necesitas un bróker hipotecario?
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default Services;
