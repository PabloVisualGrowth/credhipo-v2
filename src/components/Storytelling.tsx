import dreamHome from "@/assets/dream-home.jpg";
import { BlurFade } from "@/components/ui/blur-fade";

const steps = [
  {
    number: "01",
    title: "Contacto con Bancos",
    tasks: [
      "Contactar con bancos para conseguir las mejores condiciones",
      "Rellenar solicitudes y gestionar tasación",
    ],
  },
  {
    number: "02",
    title: "Cierre con Cliente",
    tasks: [
      "Avisar al cliente de las condiciones conseguidas",
      "Presentar al cliente las condiciones y escoger la propuesta más interesante",
      "Firmar FEIN",
    ],
  },
  {
    number: "03",
    title: "Preparar Firma",
    tasks: [
      "Preparar y coordinar firma con notaría y clientes",
    ],
  },
  {
    number: "04",
    title: "Notaría",
    tasks: [
      "Acompañamiento a notaría",
    ],
  },
];

const LINE_COLOR = "rgba(250,249,246,0.20)";
const DOT_COLOR = "rgba(250,249,246,0.90)";
const TEXT_MUTED = "rgba(250,249,246,0.60)";

const Storytelling = () => {
  return (
    <section id="como-trabajamos" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background image + primary overlay — same as original */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${dreamHome})` }}
      >
        <div className="absolute inset-0 bg-primary/95" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <BlurFade inView delay={0}>

          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <span className="block text-xs font-semibold uppercase tracking-widest mb-4 font-body text-primary-foreground/50">
              Proceso
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-5 text-primary-foreground">
              Cómo trabajamos
            </h2>
            <p className="text-base md:text-lg leading-relaxed font-body text-primary-foreground/65">
              Supervisamos y acompañamos cada fase de la operación hasta la firma final,
              para que todo avance de forma clara y sin sorpresas.
            </p>
          </div>

          {/* ── DESKTOP timeline (md+) ── */}
          <div className="hidden md:block relative">
            <div
              className="absolute"
              style={{
                top: "19px",
                left: "calc(12.5% + 20px)",
                right: "calc(12.5% + 20px)",
                height: "1px",
                backgroundColor: LINE_COLOR,
              }}
            />
            <div className="grid grid-cols-4 gap-6 lg:gap-10">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className="relative z-10 w-10 h-10 rounded-full border-2 flex items-center justify-center mb-6 flex-shrink-0"
                    style={{ borderColor: DOT_COLOR, backgroundColor: "rgba(27,44,89,0.6)" }}
                  >
                    <span className="text-xs font-bold font-body text-primary-foreground">
                      {step.number}
                    </span>
                  </div>
                  <h3
                    className="font-heading font-bold text-center mb-4 leading-snug text-primary-foreground"
                    style={{ fontSize: "15px" }}
                  >
                    {step.title}
                  </h3>
                  <ul className="space-y-2.5 w-full">
                    {step.tasks.map((task, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 font-body leading-snug"
                        style={{ fontSize: "13px", color: TEXT_MUTED }}
                      >
                        <span
                          className="mt-1.5 flex-shrink-0 rounded-full"
                          style={{ width: "5px", height: "5px", backgroundColor: DOT_COLOR, opacity: 0.5 }}
                        />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── MOBILE timeline (< md) ── */}
          <div className="md:hidden">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex flex-col items-center flex-shrink-0" style={{ width: "40px" }}>
                  <div
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                    style={{ borderColor: DOT_COLOR, backgroundColor: "rgba(27,44,89,0.6)" }}
                  >
                    <span className="text-xs font-bold font-body text-primary-foreground">
                      {step.number}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 w-px my-2" style={{ backgroundColor: LINE_COLOR }} />
                  )}
                </div>
                <div className={i < steps.length - 1 ? "pb-10" : "pb-2"}>
                  <h3
                    className="font-heading font-bold mb-3 leading-snug text-primary-foreground"
                    style={{ fontSize: "16px" }}
                  >
                    {step.title}
                  </h3>
                  <ul className="space-y-2">
                    {step.tasks.map((task, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 font-body leading-snug"
                        style={{ fontSize: "14px", color: TEXT_MUTED }}
                      >
                        <span
                          className="mt-1.5 flex-shrink-0 rounded-full"
                          style={{ width: "5px", height: "5px", backgroundColor: DOT_COLOR, opacity: 0.5 }}
                        />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </BlurFade>
      </div>
    </section>
  );
};

export default Storytelling;
