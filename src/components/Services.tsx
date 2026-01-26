import { Home, RefreshCw, Calculator, Users, FileCheck, Handshake } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Hipotecas para compra",
    description:
      "Te ayudamos a conseguir la financiación ideal para tu nueva vivienda con las mejores condiciones del mercado.",
  },
  {
    icon: RefreshCw,
    title: "Subrogación de hipoteca",
    description:
      "Mejora las condiciones de tu hipoteca actual. Negociamos con los bancos para conseguirte un ahorro real.",
  },
  {
    icon: Calculator,
    title: "Hipotecas hasta el 100%",
    description:
      "Financiación completa para que no tengas que preocuparte por la entrada. Analizamos tu perfil y buscamos la mejor opción.",
  },
  {
    icon: Users,
    title: "Hipotecas para extranjeros",
    description:
      "Especialistas en financiación para no residentes. Te guiamos en todo el proceso adaptado a tu situación.",
  },
  {
    icon: FileCheck,
    title: "Gestión integral",
    description:
      "Nos encargamos de todo el papeleo: tasaciones, escrituras, seguros. Tú solo preocúpate de elegir tu casa.",
  },
  {
    icon: Handshake,
    title: "Asesoría personalizada",
    description:
      "Cada cliente es único. Analizamos tu situación financiera para ofrecerte soluciones a medida.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-secondary uppercase tracking-wider mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Todo lo que necesitas para conseguir tu hipoteca ideal
          </h2>
          <p className="text-lg text-muted-foreground">
            Somos expertos en intermediación hipotecaria. Trabajamos con más de
            20 entidades bancarias para encontrar la mejor opción para ti.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-elevated transition-all duration-300 border-border/50 hover:border-primary/30 bg-card"
            >
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
      </div>
    </section>
  );
};

export default Services;
