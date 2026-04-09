import { useEffect, useRef, useState } from "react";

const members = [
  {
    name: "Ángel Fernández Simón",
    role: "Socio Fundador",
    photo: null,
    bio: "Ángel Fernández Simón es un reconocido empresario del sector inmobiliario y financiero, con una trayectoria consolidada en la creación, desarrollo y gestión de proyectos de alto impacto. Fundador de la inmobiliaria Don Piso, una de las marcas más relevantes del mercado español, ha sido protagonista directo en la profesionalización y modernización del sector inmobiliario en España. Su visión estratégica y capacidad para identificar oportunidades han marcado su carrera empresarial durante décadas. En la actualidad, como socio fundador de Credhipo, aporta al proyecto su profundo conocimiento del mercado, una sólida red de contactos y una clara orientación a resultados, contribuyendo al desarrollo de soluciones financieras eficientes y adaptadas a las necesidades reales de clientes e inversores.",
  },
  {
    name: "Carmen Rosas",
    role: "Directora Financiera",
    photo: null,
    bio: "Profesional del sector financiero con más de 30 años de experiencia en banca, Carmen Rosas ha desarrollado su carrera en entidades como Bancaja y Bankia, ocupando posiciones de alta responsabilidad en dirección comercial, gestión de redes y desarrollo de negocio en Cataluña. Especialista en financiación hipotecaria, análisis de riesgo y negociación con entidades financieras, aporta una visión estratégica clave en la estructuración de operaciones y en la optimización de condiciones de financiación. Licenciada en Ciencias Empresariales por la Universidad de Barcelona, cuenta además con los Títulos de Intermediación en crédito inmobiliario y asesoramiento, homologado por Banco de España, y de Agente de la Propiedad Inmobiliaria. En Credhipo, aporta su experiencia en banca y su conocimiento del sistema financiero para garantizar operaciones sólidas, viables y con las mejores condiciones de mercado.",
  },
  {
    name: "Marta Oropesa",
    role: "Directora Legal",
    photo: null,
    bio: "Profesional del sector inmobiliario y financiero con más de 10 años de experiencia, Marta Oropesa ha desarrollado su trayectoria en compañías como Aliseda Inmobiliaria, gestionando carteras de activos y operaciones vinculadas a fondos de inversión, así como en entornos de alta exigencia jurídica y financiera. Especialista en la gestión de operaciones complejas y en el acompañamiento integral en procesos de compraventa y financiación, cuenta con experiencia en procedimientos ejecutivos, subastas y cesiones de remate, aportando soluciones eficaces en contextos de elevada complejidad. Graduada en Derecho y poseedora del Título de Intermediación en crédito inmobiliario y asesoramiento, homologado por Banco de España, combina un sólido rigor jurídico con una visión práctica del mercado que le permite analizar la viabilidad de cada operación y estructurar soluciones adaptadas. En Credhipo, lidera el análisis legal de las operaciones, garantizando la seguridad y transparencia en cada proceso.",
  },
];

const N = members.length;
// Each card peek offset when stacked behind
const PEEK = 18; // px — how much of each card below is visible

const Team = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);

  // Drive active card from scroll position within the section
  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const sectionH = el.offsetHeight;
      const scrolled = -rect.top; // px scrolled into section
      if (scrolled < 0) { setActiveIndex(0); return; }
      // Each card activates after 1 viewport height of scroll; last card gets extra dwell
      const wh = window.innerHeight;
      const breaks = Array.from({ length: N }, (_, i) => i * wh);
      const idx = breaks.filter(b => scrolled >= b).length - 1;
      setActiveIndex(Math.min(idx, N - 1));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // When active card changes, close expanded view
  useEffect(() => { setExpanded(null); }, [activeIndex]);

  return (
    <section
      id="equipo"
      ref={sectionRef}
      // Tall enough to scroll through all cards
      style={{ height: `${(N + 1) * 100}vh`, backgroundColor: "#1B2C59" }}
    >
      {/* Sticky viewport — stays on screen while section scrolls */}
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

            // Stack offset: cards behind peek out below
            const stackOffset = isBehind ? (i - activeIndex) * PEEK : 0;
            // Past cards slide up and out
            const pastOffset = isPast ? -440 : 0;
            const scale = isBehind ? 1 - (i - activeIndex) * 0.04 : 1;
            const zIndex = N - Math.abs(i - activeIndex);

            return (
              <div
                key={i}
                onClick={() => isActive && setExpanded(isExpanded ? null : i)}
                style={{
                  position: "absolute",
                  left: 0, right: 0,
                  top: 0,
                  height: isExpanded ? "auto" : "360px",
                  maxHeight: isExpanded ? "80vh" : "360px",
                  overflowY: isExpanded ? "auto" : "hidden",
                  backgroundColor: i % 2 === 0 ? "#FAF9F6" : "#ffffff",
                  borderRadius: "20px",
                  zIndex,
                  transform: `translateY(${stackOffset + pastOffset}px) scale(${scale})`,
                  transformOrigin: "top center",
                  opacity: isPast ? 0 : 1,
                  pointerEvents: isPast ? "none" : "auto",
                  transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease, max-height 0.4s ease, box-shadow 0.3s",
                  boxShadow: isActive
                    ? "0 24px 60px rgba(0,0,0,0.35)"
                    : "0 8px 24px rgba(0,0,0,0.20)",
                  cursor: isActive ? "pointer" : "default",
                }}
              >
                {/* Collapsed view — always visible */}
                <div className="flex items-center gap-5 p-7 pb-0">
                  {/* Photo placeholder */}
                  <div
                    className="flex-shrink-0 rounded-full flex items-center justify-center"
                    style={{ width: "72px", height: "72px", backgroundColor: "#1B2C59", opacity: 0.10 }}
                  >
                    {member.photo ? (
                      <img src={member.photo} alt={member.name} className="w-full h-full rounded-full object-cover" />
                    ) : (
                      <span style={{ fontSize: "26px", fontFamily: "Roboto Slab, serif", fontWeight: 700, color: "#1B2C59", opacity: 1 }}>
                        {member.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 style={{ fontSize: "20px", fontFamily: "Roboto Slab, serif", fontWeight: 700, color: "#1B2C59", lineHeight: 1.2 }}>
                      {member.name}
                    </h3>
                  </div>
                  {isActive && (
                    <div style={{ flexShrink: 0, color: "#1B2C59", opacity: 0.35, fontSize: "12px", fontFamily: "Poppins, sans-serif" }}>
                      {isExpanded ? <X size={18} /> : <span>↓ Leer más</span>}
                    </div>
                  )}
                </div>

                {/* Divider */}
                <div style={{ margin: "20px 28px 0", height: "1px", backgroundColor: "#1B2C59", opacity: 0.08 }} />

                {/* Teaser — 2 lines visible when collapsed */}
                <p style={{
                  padding: "16px 28px 28px",
                  fontSize: "14px", fontFamily: "Poppins, sans-serif",
                  color: "#495579", lineHeight: 1.65,
                  display: "-webkit-box",
                  WebkitLineClamp: isExpanded ? "none" : 3,
                  WebkitBoxOrient: "vertical",
                  overflow: isExpanded ? "visible" : "hidden",
                }}>
                  {member.bio}
                </p>

                {/* Scroll hint dots — only on active, collapsed */}
                {isActive && !isExpanded && (
                  <div className="flex justify-center gap-1.5 pb-5">
                    {members.map((_, di) => (
                      <div key={di} style={{
                        width: "6px", height: "6px", borderRadius: "50%",
                        backgroundColor: di === activeIndex ? "#1B2C59" : "#1B2C59",
                        opacity: di === activeIndex ? 0.7 : 0.15,
                      }} />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Scroll hint */}
        <p className="mt-8 font-body text-xs" style={{ color: "rgba(250,249,246,0.30)", letterSpacing: "0.08em" }}>
          {activeIndex < N - 1 ? "Sigue haciendo scroll ↓" : "Haz clic en la tarjeta para leer el perfil completo"}
        </p>
      </div>
    </section>
  );
};

export default Team;
