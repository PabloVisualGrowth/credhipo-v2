import { BlurFade } from "@/components/ui/blur-fade";

const steps = [
  {
    step: "01",
    title: "Diagnóstico Financiero",
    description: "Evaluamos tu situación económica y financiera para analizar la viabilidad de tu operación.",
  },
  {
    step: "02",
    title: "Estrategia",
    description: "Definimos la mejor estructura para presentar tu operación ante las entidades financieras.",
  },
  {
    step: "03",
    title: "Negociación con Bancos",
    description: "Contactamos y negociamos con múltiples entidades para conseguir las mejores condiciones.",
  },
  {
    step: "04",
    title: "Firma",
    description: "Te acompañamos en el cierre con notaría y banco hasta la firma final.",
  },
];

const Storytelling = () => {
  return (
    <section id="como-trabajamos" className="py-20 lg:py-32 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <BlurFade inView delay={0}>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="block text-sm font-semibold text-[#C5A47E] uppercase tracking-widest mb-4">
              Proceso
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#0F172A] mb-6">
              Cómo trabajamos
            </h2>
            <p className="text-lg text-[#0F172A]/55 leading-relaxed">
              Supervisamos y acompañamos cada fase de la operación, desde el primer análisis hasta la firma final, para que todo avance de forma clara y sin sorpresas.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connector line — desktop only, spans card centers */}
            <div
              className="hidden lg:block absolute h-px bg-[#C5A47E]/40"
              style={{ top: "10px", left: "12.5%", right: "12.5%" }}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col">
                  {/* Dot indicator */}
                  <div className="flex justify-center mb-6">
                    <div className="w-5 h-5 rounded-full bg-[#C5A47E] ring-4 ring-[#C5A47E]/20 relative z-10 flex-shrink-0" />
                  </div>

                  {/* Card */}
                  <div className="relative bg-white rounded-2xl p-7 border border-[#E5E7EB] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex-1">
                    {/* Decorative number */}
                    <span
                      className="absolute -bottom-3 -right-2 font-heading font-bold text-[#E5E7EB] select-none leading-none"
                      style={{ fontSize: "6rem" }}
                    >
                      {step.step}
                    </span>

                    <div className="relative z-10">
                      <p className="text-xs font-bold text-[#C5A47E] uppercase tracking-widest mb-3">
                        {step.step}
                      </p>
                      <h3 className="text-lg font-heading font-bold text-[#0F172A] mb-3 leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#0F172A]/55 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default Storytelling;
