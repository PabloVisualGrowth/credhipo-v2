import { useState } from "react";
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

const StepNode = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex flex-col items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Circle node */}
      <div
        className="relative w-14 h-14 rounded-full flex items-center justify-center mb-6 flex-shrink-0 cursor-default"
        style={{
          border: "2px solid rgba(250,249,246,0.55)",
          backgroundColor: hovered ? "rgba(250,249,246,0.15)" : "transparent",
          boxShadow: hovered ? "0 0 0 8px rgba(250,249,246,0.07), 0 0 24px rgba(250,249,246,0.12)" : "none",
          transition: "all 0.35s ease",
        }}
      >
        <span
          className="text-sm font-bold font-body"
          style={{
            color: hovered ? "#FAF9F6" : "rgba(250,249,246,0.75)",
            transition: "color 0.35s ease",
            letterSpacing: "0.05em",
          }}
        >
          {step.number}
        </span>
      </div>

      {/* Title */}
      <h3
        className="font-heading font-bold text-center mb-4 leading-snug transition-colors duration-300"
        style={{
          color: hovered ? "#FAF9F6" : "rgba(250,249,246,0.85)",
          fontSize: "15px",
        }}
      >
        {step.title}
      </h3>

      {/* Tasks */}
      <ul className="space-y-2.5 w-full">
        {step.tasks.map((task, j) => (
          <li
            key={j}
            className="flex items-start gap-2 font-body leading-snug transition-colors duration-300"
            style={{
              fontSize: "13px",
              color: hovered ? "rgba(250,249,246,0.75)" : "rgba(250,249,246,0.45)",
            }}
          >
            <span
              className="mt-1.5 flex-shrink-0 rounded-full transition-opacity duration-300"
              style={{
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(250,249,246,0.6)",
                opacity: hovered ? 1 : 0.5,
              }}
            />
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Storytelling = () => {
  return (
    <section id="como-trabajamos" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background image + primary overlay */}
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

          {/* Desktop grid — no connector line */}
          <div className="hidden md:grid grid-cols-4 gap-6 lg:gap-10">
            {steps.map((step, i) => (
              <StepNode key={i} step={step} index={i} />
            ))}
          </div>

          {/* Mobile vertical */}
          <div className="md:hidden space-y-10">
            {steps.map((step, i) => (
              <StepNode key={i} step={step} index={i} />
            ))}
          </div>

        </BlurFade>
      </div>
    </section>
  );
};

export default Storytelling;
