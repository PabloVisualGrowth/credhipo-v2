import { useState } from "react";
import dreamHome from "@/assets/dream-home.jpg";
import { BlurFade } from "@/components/ui/blur-fade";

const steps = [
  {
    number: "01",
    title: "Contacto con Bancos",
    tasks: ["Contactar con bancos para conseguir las mejores condiciones", "Rellenar solicitudes y gestionar tasación"],
    above: false,
  },
  {
    number: "02",
    title: "Cierre con Cliente",
    tasks: ["Avisar al cliente de las condiciones conseguidas", "Presentar al cliente las condiciones y escoger la propuesta más interesante", "Firmar FEIN"],
    above: true,
  },
  {
    number: "03",
    title: "Preparar Firma",
    tasks: ["Preparar y coordinar firma con notaría y clientes"],
    above: false,
  },
  {
    number: "04",
    title: "Notaría",
    tasks: ["Acompañamiento a notaría"],
    above: true,
  },
];

const R = 28;
const GAP = 12;
const ABOVE_H = 150;
const BELOW_H = 150;

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
            <div
              className="relative w-full"
              style={{ height: `${ABOVE_H + R * 2 + BELOW_H}px` }}
            >
              {/* Straight horizontal line through circle centers */}
              <div
                className="absolute left-0 right-0"
                style={{
                  top: `${ABOVE_H + R}px`,
                  height: "2px",
                  backgroundColor: "rgba(250,249,246,0.30)",
                }}
              />

              {/* 4 evenly spaced nodes at 12.5%, 37.5%, 62.5%, 87.5% */}
              {steps.map((step, i) => {
                const lefts = ["12.5%", "37.5%", "62.5%", "87.5%"];
                const isHov = hovered === i;
                return (
                  <div key={i}>
                    {/* Circle */}
                    <div
                      style={{
                        position: "absolute",
                        left: lefts[i],
                        top: `${ABOVE_H}px`,
                        width: `${R * 2}px`,
                        height: `${R * 2}px`,
                        transform: "translateX(-50%)",
                        borderRadius: "50%",
                        border: "2px solid rgba(250,249,246,0.65)",
                        backgroundColor: isHov ? "rgba(250,249,246,0.16)" : "rgba(27,44,89,0.6)",
                        boxShadow: isHov ? "0 0 0 10px rgba(250,249,246,0.06), 0 0 28px rgba(250,249,246,0.12)" : "none",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "all 0.3s ease",
                        cursor: "default", zIndex: 2,
                      }}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <span style={{
                        fontSize: "13px", fontWeight: 700,
                        fontFamily: "Poppins, sans-serif",
                        letterSpacing: "0.06em",
                        color: isHov ? "#FAF9F6" : "rgba(250,249,246,0.75)",
                        transition: "color 0.3s ease",
                      }}>
                        {step.number}
                      </span>
                    </div>

                    {/* Text — above or below */}
                    <div
                      style={{
                        position: "absolute",
                        left: lefts[i],
                        ...(step.above
                          ? { top: `${ABOVE_H - GAP}px`, transform: "translate(-50%, -100%)" }
                          : { top: `${ABOVE_H + R * 2 + GAP}px`, transform: "translateX(-50%)" }
                        ),
                        width: "190px",
                        textAlign: "center",
                        cursor: "default", zIndex: 2,
                      }}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <p style={{
                        fontFamily: "Roboto Slab, serif", fontWeight: 700,
                        fontSize: "14px", lineHeight: 1.35, marginBottom: "8px",
                        color: isHov ? "#FAF9F6" : "rgba(250,249,246,0.88)",
                        transition: "color 0.3s ease",
                      }}>
                        {step.title}
                      </p>
                      {step.tasks.map((task, j) => (
                        <p key={j} style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "11.5px", lineHeight: 1.6,
                          marginBottom: "3px",
                          color: isHov ? "rgba(250,249,246,0.68)" : "rgba(250,249,246,0.38)",
                          transition: "color 0.3s ease",
                        }}>
                          {task}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Star at the end of the line */}
              <div style={{
                position: "absolute", left: "96%", top: `${ABOVE_H}px`,
                width: `${R * 2}px`, height: `${R * 2}px`,
                transform: "translateX(-50%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                zIndex: 2,
              }}>
                <svg width="48" height="48" viewBox="0 0 52 52" fill="none">
                  <polygon
                    points="26,4 31.5,19 48,19 35,29.5 40,45 26,35 12,45 17,29.5 4,19 20.5,19"
                    fill="rgba(250,249,246,0.10)"
                    stroke="rgba(250,249,246,0.60)"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {/* Star label */}
              <div style={{
                position: "absolute", left: "96%",
                top: `${ABOVE_H + R * 2 + GAP}px`,
                transform: "translateX(-50%)",
                width: "160px", textAlign: "center", zIndex: 2,
              }}>
                <p style={{
                  fontFamily: "Roboto Slab, serif", fontWeight: 700,
                  fontSize: "12px", lineHeight: 1.5,
                  color: "rgba(250,249,246,0.78)",
                }}>
                  ¡Empieza a disfrutar de tu nuevo hogar!
                </p>
              </div>
            </div>
          </div>

          {/* ── MOBILE: vertical ── */}
          <div className="md:hidden">
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
                <div style={{ paddingBottom: i < steps.length - 1 ? "28px" : "8px", paddingTop: "12px" }}>
                  <p style={{ fontFamily: "Roboto Slab, serif", fontWeight: 700, fontSize: "15px", color: "rgba(250,249,246,0.88)", marginBottom: "8px" }}>
                    {step.title}
                  </p>
                  {step.tasks.map((task, j) => (
                    <p key={j} style={{ fontFamily: "Poppins, sans-serif", fontSize: "13px", color: "rgba(250,249,246,0.48)", lineHeight: 1.6, marginBottom: "4px" }}>
                      {task}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex flex-col items-center gap-3 mt-8">
              <svg width="40" height="40" viewBox="0 0 52 52" fill="none">
                <polygon points="26,4 31.5,19 48,19 35,29.5 40,45 26,35 12,45 17,29.5 4,19 20.5,19"
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
