import { Shield, Users, Lightbulb, Heart, Eye } from "lucide-react";
import consultantImage from "@/assets/consultant-meeting.jpg";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { NumberTicker } from "@/components/ui/number-ticker";

const values = [
  { icon: Shield, label: "Transparencia" },
  { icon: Users, label: "Profesionalismo" },
  { icon: Heart, label: "Empatía" },
  { icon: Lightbulb, label: "Innovación" },
  { icon: Eye, label: "Accesibilidad" },
];

const About = () => {
  return (
    <section id="nosotros" className="py-12 md:py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Image */}
          <BlurFade inView delay={0}>
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={consultantImage}
                  alt="Familia feliz en su nuevo hogar"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-card rounded-xl shadow-elevated p-4 md:p-6 max-w-[200px] md:max-w-xs hidden sm:block">
                <div className="text-2xl md:text-4xl font-heading font-bold text-primary mb-1 md:mb-2">
                  <NumberTicker value={2000} className="text-primary" />+
                </div>
                <p className="text-sm md:text-base text-muted-foreground">
                  Familias han conseguido su hogar con nosotros
                </p>
              </div>
            </div>
          </BlurFade>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <BlurFade inView delay={0}>
              <span className="inline-block text-xs md:text-sm font-medium text-secondary uppercase tracking-wider mb-2 md:mb-4">
                Sobre Nosotros
              </span>
            </BlurFade>
            <TextAnimate
              animation="blurInUp"
              by="word"
              className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 md:mb-6"
              as="h2"
            >
              Donde tu Hogar Comienza
            </TextAnimate>

            {/* Mission */}
            <BlurFade inView delay={0.2}>
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
            </BlurFade>

            {/* Vision */}
            <BlurFade inView delay={0.3}>
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
            </BlurFade>

            {/* Values */}
            <BlurFade inView delay={0.4}>
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
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
