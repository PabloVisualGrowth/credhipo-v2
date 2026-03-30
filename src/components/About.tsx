import consultantImage from "@/assets/consultant-meeting.jpg";
import { BlurFade } from "@/components/ui/blur-fade";

const About = () => {
  return (
    <section id="nosotros" className="py-12 md:py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <BlurFade inView delay={0}>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={consultantImage}
                  alt="Equipo de profesionales CredHipo"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block text-xs md:text-sm font-medium text-secondary uppercase tracking-wider mb-2 md:mb-4">
                Sobre Nosotros
              </span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 md:mb-6">
                Donde tu Hogar Comienza
              </h2>
              <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>
                  CredHipo nace de la experiencia de profesionales del sector inmobiliario, legal y bancario que comparten un mismo objetivo: ayudar a nuestros clientes a tomar decisiones inmobiliarias e hipotecarias con total seguridad y transparencia.
                </p>
                <p>
                  CredHipo está inscrita en el Registro de Intermediarios de Crédito Inmobiliario del Banco de España, conforme a la Ley 5/2019 reguladora de los contratos de crédito inmobiliario. Esta licencia no es solo un requisito legal: es una garantía para nuestros clientes. Nos obliga a cumplir con estándares estrictos de formación, transparencia y buenas prácticas, así como a ofrecer una información clara, completa y verificable en cada operación.
                </p>
                <p>
                  En un sector donde existen intermediarios que operan sin regulación, contar con esta acreditación significa que trabajas con un equipo profesional, supervisado y comprometido con la seguridad de cada decisión.
                </p>
                <p className="font-medium text-foreground">
                  Porque cuando se trata de tu vivienda o tu inversión, la confianza no es opcional.
                </p>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default About;
