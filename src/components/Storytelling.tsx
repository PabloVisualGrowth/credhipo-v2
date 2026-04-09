import { useState } from "react";
import dreamHome from "@/assets/dream-home.jpg";
import { BlurFade } from "@/components/ui/blur-fade";

// Layout constants
const H = 480;       // container height px
const R = 28;        // circle radius px
const GAP = 14;      // gap between circle edge and text px

// Node definitions — positions as % strings matching the SVG path below
const steps = [
  {
    number: "01",
    title: "Contacto con Bancos",
    tasks: ["Contactar con bancos para conseguir las mejores condiciones", "Rellenar solicitudes y gestionar tasación"],
    left: "10%", top: "72%", above: false,
  },
  {
    number: "02",
    title: "Cierre con Cliente",
    tasks: ["Avisar al cliente de las condiciones conseguidas", "Presentar al cliente las condiciones y escoger la propuesta más interesante", "Firmar FEIN"],
    left: "31%", top: "24%", above: true,
  },
  {
    number: "03",
    title: "Preparar Firma",
    tasks: ["Preparar y coordinar firma con notaría y clientes"],
    left: "57%", top: "72%", above: false,
  },
  {
    number: "04",
    title: "Notaría",
    tasks: ["Acompañamiento a notaría"],
    left: "78%", top: "24%", above: true,
  },
];

// Star positioned at the end of the wave
const STAR = { left: "93%", top: "48%" };

// SVG path coordinates match the % positions above:
// viewBox 0 0 100 100, preserveAspectRatio="none"
// (10,72)→(31,24)→(57,72)→(78,24)→(93,48)
// Bezier control points create smooth wave:
const PATH_D = "M 10,72 C 20,72 21,24 31,24 C 41,24 47,72 57,72 C 67,72 68,24 78,24 C 88,24 90,48 93,48";

const Storytelling = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const nodeStyle = (i: number): React.CSSProperties => ({
    position: "absolute",
    left: steps[i].left,
    top: steps[i].top,
    width: `${R * 2}px`,
    height: `${R * 2}px`,
    transform: "translate(-50%, -50%)",
    borderRadius: "50%",
    border: "2px solid rgba(250,249,246,0.65)",
    backgroundColor: hovered === i ? "rgba(250,249,246,0.16)" : "rgba(27,44,89,0.55)",
    boxShadow: hovered === i ? "0 0 0 10px rgba(250,249,246,0.06), 0 0 30px rgba(250,249,246,0.12)" : "none",
    display: "flex", alignItems: "center", justifyContent: "center",
    transition: "all 0.3s ease",
    cursor: "default",
    zIndex: 2,
  });

  const textStyle = (i: number, above: boolean): React.CSSProperties => ({
    position: "absolute",
    left: steps[i].left,
    ...(above
      ? { top: `calc(${steps[i].top} - ${R + GAP}px)`, transform: "translate(-50%, -100%)" }
      : { top: `calc(${steps[i].top} + ${R + GAP}px)`, transform: "translate(-50%, 0)" }),
    width: "175px",
    textAlign: "center",
    cursor: "default",
    zIndex: 2,
  });

  return (
    <section id="como-trabajamos" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${dreamHome})` }}>
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

          {/* ── DESKTOP ── */}
          <div className="hidden md:block">
            <div className="relative w-full" style={{ height: `${H}px` }}>

              {/* SVG: only the smooth wave path.
                  preserveAspectRatio="none" stretches X to fill width.
                  vector-effect keeps stroke at a constant screen width. */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{ pointerEvents: "none", zIndex: 1 }}
              >
                <path
                  d={PATH_D}
                  fill="none"
                  stroke="rgba(250,249,246,0.40)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Circles + text for each step */}
              {steps.map((step, i) => (
                <div key={i}>
                  {/* Circle */}
                  <div
                    style={nodeStyle(i)}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <span style={{
                      fontSize: "13px", fontWeight: 700,
                      fontFamily: "Poppins, sans-serif",
                      letterSpacing: "0.06em",
                      color: hovered === i ? "#FAF9F6" : "rgba(250,249,246,0.75)",
                      transition: "color 0.3s ease",
                    }}>
                      {step.number}
                    </span>
                  </div>

                  {/* Text */}
                  <div
                    style={textStyle(i, step.above)}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <p style={{
                      fontFamily: "Roboto Slab, serif", fontWeight: 700,
                      fontSize: "14px", lineHeight: 1.35, marginBottom: "8px",
                      color: hovered === i ? "#FAF9F6" : "rgba(250,249,246,0.88)",
                      transition: "color 0.3s ease",
                    }}>
                      {step.title}
                    </p>
                    {step.tasks.map((task, j) => (
                      <p key={j} style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "11.5px", lineHeight: 1.55,
                        marginBottom: "4px",
                        color: hovered === i ? "rgba(250,249,246,0.68)" : "rgba(250,249,246,0.38)",
                        transition: "color 0.3s ease",
                      }}>
                        {task}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Star node */}
              <div style={{
                position: "absolute", left: STAR.left, top: STAR.top,
                transform: "translate(-50%, -50%)", zIndex: 2,
              }}>
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                  <polygon
                    points="26,4 31.5,19 48,19 35,29.5 40,45 26,35 12,45 17,29.5 4,19 20.5,19"
                    fill="rgba(250,249,246,0.12)"
                    stroke="rgba(250,249,246,0.65)"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Star label */}
              <div style={{
                position: "absolute",
                left: STAR.left,
                top: `calc(${STAR.top} + ${R + GAP}px)`,
                transform: "translate(-50%, 0)",
                width: "170px", textAlign: "center", zIndex: 2,
              }}>
                <p style={{
                  fontFamily: "Roboto Slab, serif", fontWeight: 700,
                  fontSize: "13px", lineHeight: 1.45,
                  color: "rgba(250,249,246,0.82)",
                }}>
                  ¡Empieza a disfrutar de tu nuevo hogar!
                </p>
              </div>

            </div>
          </div>

          {/* ── MOBILE: vertical dashed ── */}
          <div className="md:hidden">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex flex-col items-center flex-shrink-0" style={{ width: "52px" }}>
                  <div style={{
                    width: "52px", height: "52px", borderRadius: "50%",
                    border: "2px solid rgba(250,249,246,0.55)",
                    backgroundColor: "rgba(27,44,89,0.55)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <span style={{ fontSize: "12px", fontWeight: 700, fontFamily: "Poppins, sans-serif", color: "rgba(250,249,246,0.72)" }}>
                      {step.number}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div style={{ flex: 1, minHeight: "28px", margin: "6px 0", borderLeft: "2px solid rgba(250,249,246,0.20)", width: 0 }} />
                  )}
                </div>
                <div style={{ paddingBottom: i < steps.length - 1 ? "28px" : "8px", paddingTop: "12px" }}>
                  <p style={{ fontFamily: "Roboto Slab, serif", fontWeight: 700, fontSize: "15px", color: "rgba(250,249,246,0.88)", marginBottom: "8px", lineHeight: 1.35 }}>
                    {step.title}
                  </p>
                  {step.tasks.map((task, j) => (
                    <p key={j} style={{ fontFamily: "Poppins, sans-serif", fontSize: "13px", color: "rgba(250,249,246,0.48)", lineHeight: 1.55, marginBottom: "4px" }}>
                      {task}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            {/* Mobile star */}
            <div className="flex flex-col items-center gap-3 mt-8">
              <svg width="44" height="44" viewBox="0 0 52 52" fill="none">
                <polygon points="26,4 31.5,19 48,19 35,29.5 40,45 26,35 12,45 17,29.5 4,19 20.5,19"
                  fill="rgba(250,249,246,0.12)" stroke="rgba(250,249,246,0.60)" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
              <p style={{ fontFamily: "Roboto Slab, serif", fontWeight: 700, fontSize: "17px", color: "rgba(250,249,246,0.85)", textAlign: "center" }}>
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
