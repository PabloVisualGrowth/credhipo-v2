import { useState } from "react";
import dreamHome from "@/assets/dream-home.jpg";
import { BlurFade } from "@/components/ui/blur-fade";

const steps = [
  {
    number: "01",
    title: "Contacto con Bancos",
    tasks: ["Contactamos con los bancos para conseguirte las mejores condiciones", "Rellenamos las solicitudes y gestionamos tu tasación"],
    above: false,
  },
  {
    number: "02",
    title: "Cierre con Cliente",
    tasks: ["Te informamos de las condiciones conseguidas", "Te presentamos las opciones y elegimos juntos la más interesante", "Gestionamos la firma de tu FEIN"],
    above: true,
  },
  {
    number: "03",
    title: "Preparar Firma",
    tasks: ["Preparamos y coordinamos tu firma con la notaría"],
    above: false,
  },
  {
    number: "04",
    title: "Notaría",
    tasks: ["Te acompañamos en la firma ante notario"],
    above: true,
  },
];

// Fixed heights — guarantees alignment across all columns
const ABOVE = 148;   // px — reserved for "above" text
const CIRC = 56;     // px — circle diameter (w-14 h-14)
const BELOW = 148;   // px — reserved for "below" text

const Storytelling = () => {
  const [hovered, setHovered] = useState<number | null>(null);

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
            {/*
              Layout:
                Row 1 (height=ABOVE): above-text for steps with above=true
                Row 2 (height=CIRC):  horizontal line + circles
                Row 3 (height=BELOW): below-text for steps with above=false
              All 5 columns (4 steps + star) use flex-1, ensuring equal width.
            */}
            <div className="flex">

              {/* Steps */}
              {steps.map((step, i) => {
                const isHov = hovered === i;
                return (
                  <div
                    key={i}
                    className="flex-1 flex flex-col items-center"
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    style={{ cursor: "default" }}
                  >
                    {/* ABOVE text area */}
                    <div
                      className="flex flex-col justify-end items-center pb-4 px-2 text-center"
                      style={{ height: `${ABOVE}px` }}
                    >
                      {step.above && (
                        <>
                          <p style={{
                            fontFamily: "Roboto Slab, serif", fontWeight: 700,
                            fontSize: "14px", lineHeight: 1.35, marginBottom: "8px",
                            color: isHov ? "#FAF9F6" : "rgba(250,249,246,0.88)",
                            transition: "color 0.3s",
                          }}>
                            {step.title}
                          </p>
                          {step.tasks.map((t, j) => (
                            <p key={j} style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "11.5px", lineHeight: 1.6, marginBottom: "3px",
                              color: isHov ? "rgba(250,249,246,0.68)" : "rgba(250,249,246,0.38)",
                              transition: "color 0.3s",
                            }}>{t}</p>
                          ))}
                        </>
                      )}
                    </div>

                    {/* Circle row */}
                    <div
                      className="flex items-center justify-center relative"
                      style={{ height: `${CIRC}px`, width: "100%" }}
                    >
                      {/* Horizontal line segment — full width, vertically centered */}
                      <div style={{
                        position: "absolute", top: "50%", left: 0, right: 0,
                        height: "2px",
                        backgroundColor: "rgba(250,249,246,0.25)",
                        transform: "translateY(-50%)",
                        zIndex: 0,
                      }} />
                      {/* Circle */}
                      <div style={{
                        width: `${CIRC}px`, height: `${CIRC}px`,
                        borderRadius: "50%",
                        border: "2px solid rgba(250,249,246,0.65)",
                        backgroundColor: isHov ? "#2a3f72" : "#172447",
                        boxShadow: isHov ? "0 0 0 10px rgba(250,249,246,0.06), 0 0 28px rgba(250,249,246,0.12)" : "none",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "all 0.3s ease",
                        position: "relative", zIndex: 1, flexShrink: 0,
                      }}>
                        <span style={{
                          fontSize: "13px", fontWeight: 700,
                          fontFamily: "Poppins, sans-serif",
                          letterSpacing: "0.06em",
                          color: isHov ? "#FAF9F6" : "rgba(250,249,246,0.75)",
                          transition: "color 0.3s",
                        }}>
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* BELOW text area */}
                    <div
                      className="flex flex-col justify-start items-center pt-4 px-2 text-center"
                      style={{ height: `${BELOW}px` }}
                    >
                      {!step.above && (
                        <>
                          <p style={{
                            fontFamily: "Roboto Slab, serif", fontWeight: 700,
                            fontSize: "14px", lineHeight: 1.35, marginBottom: "8px",
                            color: isHov ? "#FAF9F6" : "rgba(250,249,246,0.88)",
                            transition: "color 0.3s",
                          }}>
                            {step.title}
                          </p>
                          {step.tasks.map((t, j) => (
                            <p key={j} style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "11.5px", lineHeight: 1.6, marginBottom: "3px",
                              color: isHov ? "rgba(250,249,246,0.68)" : "rgba(250,249,246,0.38)",
                              transition: "color 0.3s",
                            }}>{t}</p>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Star column */}
              <div className="flex-1 flex flex-col items-center">
                {/* Above: empty */}
                <div style={{ height: `${ABOVE}px` }} />
                {/* Star in circle row */}
                <div className="flex items-center justify-center relative" style={{ height: `${CIRC}px`, width: "100%" }}>
                  <svg
                    style={{
                      position: "absolute", top: "50%", left: 0,
                      width: `calc(50% - ${CIRC / 2 + 8}px)`,
                      height: "20px",
                      transform: "translateY(-50%)",
                      overflow: "visible",
                    }}
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <marker id="arrowhead" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                        <polygon points="0 0, 7 3.5, 0 7" fill="rgba(250,249,246,0.50)" />
                      </marker>
                    </defs>
                    <line
                      x1="0" y1="10"
                      x2="100%" y2="10"
                      stroke="rgba(250,249,246,0.25)"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead)"
                    />
                  </svg>
                  <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width={CIRC} height={CIRC} viewBox="0 0 56 56" fill="none" className="animate-pulse-star">
                      <polygon
                        points="28,5 33.5,20 50,20 37,30 42,47 28,37 14,47 19,30 6,20 22.5,20"
                        fill="rgba(250,249,246,0.90)"
                        stroke="rgba(250,249,246,0.90)"
                        strokeWidth="1"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                {/* Below: final message */}
                <div className="flex flex-col justify-start items-center pt-4 px-2 text-center" style={{ height: `${BELOW}px` }}>
                  <p style={{
                    fontFamily: "Roboto Slab, serif", fontWeight: 700,
                    fontSize: "13px", lineHeight: 1.5,
                    color: "rgba(250,249,246,0.80)",
                  }}>
                    ¡Empieza a disfrutar de tu nuevo hogar!
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ── MOBILE ── */}
          <div className="md:hidden space-y-0">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex flex-col items-center flex-shrink-0" style={{ width: "52px" }}>
                  <div style={{
                    width: "52px", height: "52px", borderRadius: "50%",
                    border: "2px solid rgba(250,249,246,0.55)",
                    backgroundColor: "rgba(27,44,89,0.55)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <span style={{ fontSize: "12px", fontWeight: 700, fontFamily: "Poppins, sans-serif", color: "rgba(250,249,246,0.72)" }}>
                      {step.number}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div style={{ flex: 1, minHeight: "28px", margin: "6px 0", width: "2px", backgroundColor: "rgba(250,249,246,0.20)" }} />
                  )}
                </div>
                <div style={{ paddingBottom: i < steps.length - 1 ? "24px" : "8px", paddingTop: "12px" }}>
                  <p style={{ fontFamily: "Roboto Slab, serif", fontWeight: 700, fontSize: "15px", color: "rgba(250,249,246,0.88)", marginBottom: "8px" }}>
                    {step.title}
                  </p>
                  {step.tasks.map((t, j) => (
                    <p key={j} style={{ fontFamily: "Poppins, sans-serif", fontSize: "13px", color: "rgba(250,249,246,0.48)", lineHeight: 1.6, marginBottom: "4px" }}>{t}</p>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex flex-col items-center gap-3 mt-8">
              <svg width="40" height="40" viewBox="0 0 56 56" fill="none">
                <polygon points="28,5 33.5,20 50,20 37,30 42,47 28,37 14,47 19,30 6,20 22.5,20"
                  fill="rgba(250,249,246,0.10)" stroke="rgba(250,249,246,0.60)" strokeWidth="1.5" strokeLinejoin="round" />
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
