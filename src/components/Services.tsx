import { useState } from "react";
import { Landmark, Scale, ClipboardList, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Landmark,
    title: "Gestión de financiación",
    description: "Actuamos como enlace con entidades bancarias para obtener financiación en las mejores condiciones.",
  },
  {
    icon: Scale,
    title: "Intermediación estratégica y supervisión legal",
    description: "Analizamos todos los acuerdos y condiciones de la compraventa para la viabilidad legal y financiera de cada operación.",
  },
  {
    icon: ClipboardList,
    title: "Seguimiento integral del proceso",
    description: "Supervisamos y te asesoramos en cada fase de la operación, desde el primer análisis hasta la firma final. Te orientamos paso a paso, resolviendo dudas, revisando cada etapa y asegurándonos de que todo avance de forma clara, segura y sin sorpresas.",
  },
];

const profiles = [
  "Profesionales autónomos o empresarios, cuyos ingresos no siempre se presentan de forma clara para las entidades financieras",
  "Personas con ingresos variables o estructuras laborales no tradicionales",
  "Extranjeros residentes o no residentes, que necesitan adaptar su perfil a los requisitos del sistema financiero español",
  "Compradores que quieren asegurarse de que todo el proceso es correcto, más allá de la financiación",
  "Inversores inmobiliarios, que buscan analizar cada operación con una visión estratégica y rentable",
];

const ProfileRow = ({ profile, index }: { profile: string; index: number }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="group flex items-start gap-6 md:gap-10 py-6 md:py-7 border-b cursor-default transition-colors duration-300"
      style={{
        borderColor: "#e2e5ec",
        backgroundColor: hovered ? "rgba(27,44,89,0.03)" : "transparent",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Number */}
      <span
        className="flex-shrink-0 font-heading font-bold leading-none transition-all duration-300 select-none"
        style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          color: hovered ? "#1B2C59" : "#cdd0d7",
          minWidth: "3.5rem",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Text */}
      <p
        className="flex-1 font-body leading-relaxed pt-1 transition-colors duration-300"
        style={{
          fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
          color: hovered ? "#1B2C59" : "#64718a",
          lineHeight: "1.65",
        }}
      >
        {profile}
      </p>


    </div>
  );
};

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
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-24 lg:mb-32">
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

        {/* ¿A quién ayudamos? — editorial list */}
        <BlurFade inView delay={0}>
          {/* Heading block */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-end mb-0 pb-8" style={{ borderBottom: "2px solid #1B2C59" }}>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-widest mb-4 font-body" style={{ color: "#a1a7b7" }}>
                ¿Es para ti?
              </span>
              <h2 className="font-heading font-bold leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1B2C59" }}>
                ¿A quién<br />ayudamos?
              </h2>
            </div>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ fontSize: "15px", color: "#64718a" }}>
                Los servicios de CredHipo están pensados para personas que quieren tomar decisiones inmobiliarias con seguridad, pero que necesitan apoyo experto para hacerlo.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: "14px", color: "#a1a7b7" }}>
                Trabajamos especialmente con perfiles que, por su situación, pueden encontrar más dificultades a la hora de obtener financiación o validar una operación ante el banco:
              </p>
            </div>
          </div>

          {/* Profile rows */}
          <div className="mb-10">
            {profiles.map((profile, i) => (
              <ProfileRow key={i} profile={profile} index={i} />
            ))}
          </div>

          {/* Closing block */}
          <div className="flex flex-col md:flex-row md:items-center gap-8 pt-6">
            <p className="flex-1 font-body" style={{ fontSize: "14px", color: "#a1a7b7", lineHeight: "1.7" }}>
              En todos estos casos, en CredHipo trabajamos para estructurar, presentar y defender cada operación con criterio financiero y legal, facilitando el acceso a financiación y reduciendo riesgos durante todo el proceso.
            </p>
            <Button variant="cta" size="lg" className="rounded-full flex-shrink-0 self-start md:self-auto">
              ¿Necesitas un bróker hipotecario?
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default Services;
