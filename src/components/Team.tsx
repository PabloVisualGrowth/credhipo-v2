import { useEffect, useRef, useState } from "react";

const members = [
  {
    name: "Ángel Fernández Simón",
    photo: null,
    bio: "Ángel Fernández Simón es un reconocido empresario del sector inmobiliario y financiero, con una trayectoria consolidada en la creación, desarrollo y gestión de proyectos de alto impacto. Fundador de la inmobiliaria Don Piso, una de las marcas más relevantes del mercado español, ha sido protagonista directo en la profesionalización y modernización del sector inmobiliario en España. Su visión estratégica y capacidad para identificar oportunidades han marcado su carrera empresarial durante décadas. En la actualidad, como socio fundador de Credhipo, aporta al proyecto su profundo conocimiento del mercado, una sólida red de contactos y una clara orientación a resultados, contribuyendo al desarrollo de soluciones financieras eficientes y adaptadas a las necesidades reales de clientes e inversores.",
  },
  {
    name: "Carmen Rosas",
    photo: null,
    bio: "Profesional del sector financiero con más de 30 años de experiencia en banca, Carmen Rosas ha desarrollado su carrera en entidades como Bancaja y Bankia, ocupando posiciones de alta responsabilidad en dirección comercial, gestión de redes y desarrollo de negocio en Cataluña. Especialista en financiación hipotecaria, análisis de riesgo y negociación con entidades financieras, aporta una visión estratégica clave en la estructuración de operaciones y en la optimización de condiciones de financiación. Licenciada en Ciencias Empresariales por la Universidad de Barcelona, cuenta además con los Títulos de Intermediación en crédito inmobiliario y asesoramiento, homologado por Banco de España, y de Agente de la Propiedad Inmobiliaria. En Credhipo, aporta su experiencia en banca y su conocimiento del sistema financiero para garantizar operaciones sólidas, viables y con las mejores condiciones de mercado.",
  },
  {
    name: "Marta Oropesa",
    photo: null,
    bio: "Profesional del sector inmobiliario y financiero con más de 10 años de experiencia, Marta Oropesa ha desarrollado su trayectoria en compañías como Aliseda Inmobiliaria, gestionando carteras de activos y operaciones vinculadas a fondos de inversión, así como en entornos de alta exigencia jurídica y financiera. Especialista en la gestión de operaciones complejas y en el acompañamiento integral en procesos de compraventa y financiación, cuenta con experiencia en procedimientos ejecutivos, subastas y cesiones de remate, aportando soluciones eficaces en contextos de elevada complejidad. Graduada en Derecho y poseedora del Título de Intermediación en crédito inmobiliario y asesoramiento, homologado por Banco de España, combina un sólido rigor jurídico con una visión práctica del mercado que le permite analizar la viabilidad de cada operación y estructurar soluciones adaptadas. En Credhipo, lidera el análisis legal de las operaciones, garantizando la seguridad y transparencia en cada proceso.",
  },
];

const N = members.length;
const PEEK = 18;

const Team = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrolled = -rect.top;
      if (scrolled < 0) { setActiveIndex(0); return; }
      const wh = window.innerHeight;
      const breaks = Array.from({ length: N }, (_, i) => i * wh);
      const idx = breaks.filter(b => scrolled >= b).length - 1;
      setActiveIndex(Math.min(idx, N - 1));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setExpanded(null); }, [activeIndex]);

  return (
    <section
      id="equipo"
      ref={sectionRef}
      style={{ height: `${(N + 1) * 100}vh`, backgroundColor: "#1B2C59" }}
    >
      <div
        className="sticky top-0 flex flex-col items-center justify-center overflow-hidden"
        style={{ height: "100vh" }}
      >
        {/* Section header */}
        <div className="text-center mb-10 z-10 relative">
          <span className="block text-xs font-semibold uppercase tracking-widest mb-3 font-body" style={{ color: "#757e98" }}>
            El Equipo
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold" style={{ color: "#FAF9F6" }}>
            Liderazgo y Experiencia
          </h2>
        </div>

        {/* Card stack */}
        <div className="relative w-full max-w-xl mx-auto px-4" style={{ height: "400px" }}>
          {members.map((member, i) => {
            const isActive = i === activeIndex;
            const isBehind = i > activeIndex;
            const isPast = i < activeIndex;
            const isExpanded = expanded === i && isActive;

            const stackOffset = isBehind ? (i - activeIndex) * PEEK : 0;
            const pastOffset = isPast ? -460 : 0;
            const scale = isBehind ? 1 - (i - activeIndex) * 0.04 : 1;
            const zIndex = N - Math.abs(i - activeIndex);

            return (
              <div
                key={i}
                onClick={() => isActive && setExpanded(isExpanded ? null : i)}
                style={{
                  position: "absolute",
                  left: 0, right: 0, top: 0,
                  height: isExpanded ? "auto" : "370px",
                  maxHeight: isExpanded ? "75vh" : "370px",
                  overflowY: isExpanded ? "auto" : "hidden",
                  backgroundColor: "#FAF9F6",
                  borderRadius: "20px",
                  zIndex,
                  transform: `translateY(${stackOffset + pastOffset}px) scale(${scale})`,
                  transformOrigin: "top center",
                  opacity: isPast ? 0 : 1,
                  pointerEvents: isPast ? "none" : "auto",
                  transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease, max-height 0.4s ease, box-shadow 0.3s",
                  boxShadow: isActive ? "0 28px 64px rgba(0,0,0,0.38)" : "0 8px 24px rgba(0,0,0,0.20)",
                  cursor: isActive ? "pointer" : "default",
                }}
              >
                {/* Top accent bar */}
                <div style={{
                  height: "3px",
                  background: "linear-gradient(90deg, #1B2C59 0%, rgba(27,44,89,0.15) 100%)",
                  borderRadius: "20px 20px 0 0",
                }} />

                {/* Card content */}
                <div style={{ padding: "32px 36px 0" }}>
                  {/* Index */}
                  <span style={{
                    display: "block",
                    fontSize: "10px", fontFamily: "Poppins, sans-serif", fontWeight: 700,
                    letterSpacing: "0.2em", textTransform: "uppercase",
                    color: "#a1a7b7", marginBottom: "16px",
                  }}>
                    {String(i + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
                  </span>

                  {/* Name */}
                  <h3 style={{
                    fontSize: "26px", fontFamily: "Roboto Slab, serif", fontWeight: 700,
                    color: "#1B2C59", lineHeight: 1.2, margin: 0,
                  }}>
                    {member.name}
                  </h3>

                  {/* Thin rule */}
                  <div style={{
                    width: "40px", height: "2px",
                    backgroundColor: "#1B2C59", opacity: 0.15,
                    marginTop: "18px", marginBottom: "20px",
                  }} />

                  {/* Bio */}
                  <p style={{
                    fontSize: "14px", fontFamily: "Poppins, sans-serif",
                    color: "#495579", lineHeight: 1.8, margin: 0,
                    display: "-webkit-box",
                    WebkitLineClamp: isExpanded ? "none" : 4,
                    WebkitBoxOrient: "vertical" as const,
                    overflow: isExpanded ? "visible" : "hidden",
                  }}>
                    {member.bio}
                  </p>
                </div>

                {/* Bottom bar */}
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "20px 36px 28px",
                }}>
                  <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                    {members.map((_, di) => (
                      <div key={di} style={{
                        width: di === activeIndex ? "18px" : "5px",
                        height: "5px",
                        borderRadius: "3px",
                        backgroundColor: "#1B2C59",
                        opacity: di === activeIndex ? 0.55 : 0.12,
                        transition: "width 0.3s ease, opacity 0.3s ease",
                      }} />
                    ))}
                  </div>
                  {isActive && (
                    <span style={{
                      fontSize: "10px", fontFamily: "Poppins, sans-serif", fontWeight: 700,
                      letterSpacing: "0.15em", textTransform: "uppercase",
                      color: "#1B2C59", opacity: 0.35,
                    }}>
                      {isExpanded ? "Cerrar" : "Leer perfil ↓"}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll hint */}
        <p className="mt-8 font-body text-xs" style={{ color: "rgba(250,249,246,0.28)", letterSpacing: "0.08em" }}>
          {activeIndex < N - 1 ? "Sigue haciendo scroll ↓" : "Haz clic en la tarjeta para leer el perfil completo"}
        </p>
      </div>
    </section>
  );
};

export default Team;
