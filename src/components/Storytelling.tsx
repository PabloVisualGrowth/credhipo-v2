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
    above: false,
  },
  {
    number: "02",
    title: "Cierre con Cliente",
    tasks: [
      "Avisar al cliente de las condiciones conseguidas",
      "Presentar al cliente las condiciones y escoger la propuesta más interesante",
      "Firmar FEIN",
    ],
    above: true,
  },
  {
    number: "03",
    title: "Preparar Firma",
    tasks: [
      "Preparar y coordinar firma con notaría y clientes",
    ],
    above: false,
  },
  {
    number: "04",
    title: "Notaría",
    tasks: [
      "Acompañamiento a notaría",
    ],
    above: true,
  },
];

// Fixed heights for layout alignment
const ABOVE_H = 160; // px reserved for "above" text area
const CIRCLE_H = 56; // px — matches w-14 h-14
const BELOW_H = 160; // px reserved for "below" text area

const TextBlock = ({ step, isHovered }: { step: typeof steps[0]; isHovered: boolean }) => (
  <div className="text-center px-2">
    <h3
      className="font-heading font-bold mb-2 leading-snug transition-colors duration-300"
      style={{ fontSize: "14px", color: isHovered ? "#FAF9F6" : "rgba(250,249,246,0.85)" }}
    >
      {step.title}
    </h3>
    <ul className="space-y-1.5">
      {step.tasks.map((task, j) => (
        <li
          key={j}
          className="font-body leading-snug transition-colors duration-300"
          style={{ fontSize: "12px", color: isHovered ? "rgba(250,249,246,0.70)" : "rgba(250,249,246,0.42)" }}
        >
          {task}
        </li>
      ))}
    </ul>
  </div>
);

const Storytelling = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="como-trabajamos" className="py-20 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${dreamHome})` }}
      >
        <div className="absolute inset-0 bg-primary/95" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <BlurFade inView delay={0}>

          {/* Header */}
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

          {/* ── DESKTOP timeline ── */}
          <div className="hidden md:block">
            {/* Wrapper: fixed total height so SVG and grid align perfectly */}
            <div
              className="relative w-full"
              style={{ height: `${ABOVE_H + CIRCLE_H + BELOW_H}px` }}
            >

              {/* SVG: only the wavy dashed path, no circles */}
              {/* Positioned to sit exactly over the circle row */}
              <svg
                className="absolute left-0 w-full"
                style={{
                  top: `${ABOVE_H}px`,
                  height: `${CIRCLE_H}px`,
                  overflow: "visible",
                  pointerEvents: "none",
                }}
                viewBox="0 0 1000 56"
                preserveAspectRatio="none"
              >
                {/*
                  Nodes at x = 12.5%, 37.5%, 62.5%, 87.5% of 1000 = 125, 375, 625, 875
                  Center y = 28 (half of 56)
                  Wave amplitude ±18px: odd gaps go up (y=10), even gaps go down (y=46)
                */}
                <path
                  d="M 125,28 C 210,28 290,10 375,28 C 460,46 540,46 625,28 C 710,10 790,10 875,28"
                  fill="none"
                  stroke="rgba(250,249,246,0.28)"
                  strokeWidth="2"
                  strokeDasharray="8 7"
                  strokeLinecap="round"
                />
              </svg>

              {/* 4-column grid for nodes and text — overlays the SVG */}
              <div className="absolute inset-0 grid grid-cols-4">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center cursor-default"
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {/* Above text area (fixed height) */}
                    <div
                      className="flex items-end justify-center pb-3 w-full"
                      style={{ height: `${ABOVE_H}px` }}
                    >
                      {step.above && <TextBlock step={step} isHovered={hovered === i} />}
                    </div>

                    {/* Circle — HTML div, always perfectly round */}
                    <div
                      className="flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        width: `${CIRCLE_H}px`,
                        height: `${CIRCLE_H}px`,
                        border: "2px solid rgba(250,249,246,0.65)",
                        backgroundColor: hovered === i ? "rgba(250,249,246,0.15)" : "transparent",
                        boxShadow: hovered === i
                          ? "0 0 0 10px rgba(250,249,246,0.06), 0 0 28px rgba(250,249,246,0.10)"
                          : "none",
                      }}
                    >
                      <span
                        className="font-body font-bold transition-colors duration-300"
                        style={{
                          fontSize: "13px",
                          letterSpacing: "0.05em",
                          color: hovered === i ? "#FAF9F6" : "rgba(250,249,246,0.70)",
                        }}
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Below text area (fixed height) */}
                    <div
                      className="flex items-start justify-center pt-3 w-full"
                      style={{ height: `${BELOW_H}px` }}
                    >
                      {!step.above && <TextBlock step={step} isHovered={hovered === i} />}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Final message */}
            <div className="flex flex-col items-center mt-8 gap-3">
              {/* Diamond / star icon */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <polygon
                  points="16,2 20,12 30,12 22,19 25,30 16,23 7,30 10,19 2,12 12,12"
                  fill="none"
                  stroke="rgba(250,249,246,0.55)"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              <p
                className="font-heading font-bold text-center"
                style={{ fontSize: "20px", color: "rgba(250,249,246,0.85)" }}
              >
                ¡Empieza a disfrutar de tu nuevo hogar!
              </p>
            </div>
          </div>

          {/* ── MOBILE: vertical dashed list ── */}
          <div className="md:hidden">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex flex-col items-center flex-shrink-0" style={{ width: "48px" }}>
                  <div
                    className="rounded-full border-2 flex items-center justify-center flex-shrink-0"
                    style={{
                      width: "48px", height: "48px",
                      borderColor: "rgba(250,249,246,0.60)",
                      backgroundColor: "transparent",
                    }}
                  >
                    <span className="font-body font-bold text-primary-foreground/70" style={{ fontSize: "12px" }}>
                      {step.number}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      style={{
                        flex: 1, minHeight: "32px", marginTop: "6px", marginBottom: "6px",
                        borderLeft: "2px dashed rgba(250,249,246,0.25)",
                      }}
                    />
                  )}
                </div>
                <div className="pb-8 pt-2">
                  <h3 className="font-heading font-bold mb-2 text-primary-foreground" style={{ fontSize: "15px" }}>
                    {step.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {step.tasks.map((task, j) => (
                      <li key={j} className="font-body text-primary-foreground/50" style={{ fontSize: "13px" }}>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            {/* Mobile final message */}
            <div className="flex flex-col items-center mt-4 gap-3">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <polygon points="16,2 20,12 30,12 22,19 25,30 16,23 7,30 10,19 2,12 12,12"
                  fill="none" stroke="rgba(250,249,246,0.55)" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
              <p className="font-heading font-bold text-center" style={{ fontSize: "18px", color: "rgba(250,249,246,0.85)" }}>
                ¡Empieza a disfrutar de tu nuevo hogar!
              </p>
            </div>
          </div>

        </BlurFade>
      </div>
    </section>
  );
};

export default Storytelling;
