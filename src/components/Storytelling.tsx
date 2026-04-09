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

// Node positions (cx) as percentages of SVG width
// SVG viewBox="0 0 1000 120", nodes at y=60
const NODE_CX = [125, 375, 625, 875];
const NODE_CY = 60;
const R = 28;

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

          {/* ── DESKTOP: SVG wavy dashed path + nodes ── */}
          <div className="hidden md:block">
            <div className="relative w-full" style={{ paddingBottom: "180px", paddingTop: "160px" }}>

              {/* SVG path layer */}
              <svg
                className="absolute left-0 right-0 mx-auto"
                style={{ top: "140px", width: "100%", height: "120px", overflow: "visible" }}
                viewBox="0 0 1000 120"
                preserveAspectRatio="none"
              >
                {/* Dashed wavy cubic bezier path through node centers */}
                {/* Path goes: node1 (125,60) → node2 (375,60) → node3 (625,60) → node4 (875,60) */}
                {/* Add vertical wave between each pair */}
                <path
                  d="M 125,60 C 200,60 300,20 375,60 C 450,100 550,100 625,60 C 700,20 800,20 875,60"
                  fill="none"
                  stroke="rgba(250,249,246,0.30)"
                  strokeWidth="2.5"
                  strokeDasharray="10 8"
                  strokeLinecap="round"
                />

                {/* Node circles */}
                {NODE_CX.map((cx, i) => {
                  const isHovered = hovered === i;
                  return (
                    <g
                      key={i}
                      style={{ cursor: "default" }}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {/* Outer glow ring */}
                      {isHovered && (
                        <circle
                          cx={cx} cy={NODE_CY} r={R + 12}
                          fill="none"
                          stroke="rgba(250,249,246,0.10)"
                          strokeWidth="8"
                        />
                      )}
                      {/* Circle */}
                      <circle
                        cx={cx} cy={NODE_CY} r={R}
                        fill={isHovered ? "rgba(250,249,246,0.18)" : "transparent"}
                        stroke="rgba(250,249,246,0.70)"
                        strokeWidth="2"
                        style={{ transition: "fill 0.3s ease" }}
                      />
                      {/* Number */}
                      <text
                        x={cx} y={NODE_CY + 5}
                        textAnchor="middle"
                        fontSize="13"
                        fontWeight="700"
                        fontFamily="Poppins, sans-serif"
                        fill={isHovered ? "rgba(250,249,246,1)" : "rgba(250,249,246,0.75)"}
                        style={{ transition: "fill 0.3s ease", letterSpacing: "0.05em" }}
                      >
                        {steps[i].number}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Text labels — above or below each node */}
              {steps.map((step, i) => {
                const isAbove = step.above;
                const isHovered = hovered === i;
                // Position each label at 12.5%, 37.5%, 62.5%, 87.5% of width
                const lefts = ["12.5%", "37.5%", "62.5%", "87.5%"];
                return (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      left: lefts[i],
                      transform: "translateX(-50%)",
                      width: "200px",
                      top: isAbove ? "0px" : "calc(140px + 120px + 8px)",
                      textAlign: "center",
                    }}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <h3
                      className="font-heading font-bold mb-3 leading-snug transition-colors duration-300"
                      style={{
                        fontSize: "14px",
                        color: isHovered ? "#FAF9F6" : "rgba(250,249,246,0.85)",
                      }}
                    >
                      {step.title}
                    </h3>
                    <ul className="space-y-2">
                      {step.tasks.map((task, j) => (
                        <li
                          key={j}
                          className="font-body leading-snug transition-colors duration-300"
                          style={{
                            fontSize: "12px",
                            color: isHovered ? "rgba(250,249,246,0.72)" : "rgba(250,249,246,0.42)",
                          }}
                        >
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── MOBILE: vertical list ── */}
          <div className="md:hidden space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-full border-2 flex items-center justify-center"
                    style={{ borderColor: "rgba(250,249,246,0.60)", backgroundColor: "transparent" }}
                  >
                    <span className="text-xs font-bold font-body text-primary-foreground/80">
                      {step.number}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="flex-1 my-2"
                      style={{
                        width: "2px",
                        borderLeft: "2px dashed rgba(250,249,246,0.25)",
                        minHeight: "32px",
                      }}
                    />
                  )}
                </div>
                <div className="pb-2 pt-2">
                  <h3 className="font-heading font-bold mb-2 text-primary-foreground" style={{ fontSize: "15px" }}>
                    {step.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {step.tasks.map((task, j) => (
                      <li key={j} className="font-body text-primary-foreground/55" style={{ fontSize: "13px" }}>
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
