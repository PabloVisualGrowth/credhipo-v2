import { Shield, Users, Lightbulb, Heart, Eye } from "lucide-react";
import consultantImage from "@/assets/consultant-meeting.jpg";

const values = [
  { icon: Shield, label: "Transparencia" },
  { icon: Users, label: "Profesionalismo" },
  { icon: Heart, label: "Empatía" },
  { icon: Lightbulb, label: "Innovación" },
  { icon: Eye, label: "Accesibilidad" },
];

const About = () => {
  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={consultantImage}
                alt="Equipo CredHipo asesorando a clientes"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-elevated p-6 max-w-xs hidden md:block">
              <div className="text-4xl font-heading font-bold text-primary mb-2">
                2.000+
              </div>
              <p className="text-muted-foreground">
                Familias han conseguido su hogar con nosotros
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-sm font-medium text-secondary uppercase tracking-wider mb-4">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Donde tu Hogar Comienza
            </h2>
            
            {/* Mission */}
            <div className="mb-8">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                Nuestra Misión
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ayudar a las personas a conseguir la hipoteca ideal con asesoría
                personalizada y tecnología. Somos cercanos, profesionales,
                resolutivos y confiables.
              </p>
            </div>

            {/* Vision */}
            <div className="mb-8">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                Nuestra Visión
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ser la empresa de referencia en intermediación hipotecaria
                híbrida en España, combinando lo mejor de la tecnología con el
                trato humano.
              </p>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Nuestros Valores
              </h3>
              <div className="flex flex-wrap gap-3">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-primary/5 rounded-full px-4 py-2"
                  >
                    <value.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      {value.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
