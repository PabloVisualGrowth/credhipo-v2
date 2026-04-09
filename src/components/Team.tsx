import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

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
const PEEK = 16;

const Team = () => {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const prev = () => { setActive(i => Math.max(0, i - 1)); setExpanded(false); };
  const next = () => { setActive(i => Math.min(N - 1, i + 1)); setExpanded(false); };

  return (
    <section id="equipo" className="h-screen flex flex-col items-center justify-center" style={{ backgroundColor: "#1B2C59" }}>
      {/* Header */}
      <div className="text-center mb-8 flex-shrink-0">
        <span className="block text-xs font-semibold uppercase tracking-widest mb-2 font-body" style={{ color: "#757e98" }}>
          El Equipo
        </span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold" style={{ color: "#FAF9F6" }}>
          Liderazgo y Experiencia
        </h2>
      </div>

      {/* Card stack */}
      <div className="relative w-full max-w-xl mx-auto px-4 flex-shrink-0" style={{ height: "360px" }}>
        {members.map((member, i) => {
          const isActive = i === active;
          const isBehind = i > active;
          const isPast = i < active;
          const zIndex = N - Math.abs(i - active);
          const translateY = isBehind ? (i - active) * PEEK : isPast ? -420 : 0;
          const scale = isBehind ? 1 - (i - active) * 0.04 : 1;

          return (
            <div
              key={i}
              onClick={() => isActive && setExpanded(e => !e)}
              style={{
                position: "absolute", left: 0, right: 0, top: 0,
                maxHeight: isActive && expanded ? "340px" : "320px",
                overflowY: isActive && expanded ? "auto" : "hidden",
                backgroundColor: i % 2 === 0 ? "#FAF9F6" : "#ffffff",
                borderRadius: "20px", zIndex,
                transform: `translateY(${translateY}px) scale(${scale})`,
                transformOrigin: "top center",
                transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s",
                boxShadow: isActive ? "0 24px 60px rgba(0,0,0,0.35)" : "0 8px 24px rgba(0,0,0,0.20)",
                cursor: isActive ? "pointer" : "default",
              }}
            >
              {/* Card header */}
              <div className="flex items-center gap-5 p-6 pb-0">
                <div className="flex-shrink-0 rounded-full flex items-center justify-center"
                  style={{ width: "64px", height: "64px", backgroundColor: "rgba(27,44,89,0.10)" }}>
                  {member.photo
                    ? <img src={member.photo} alt={member.name} className="w-full h-full rounded-full object-cover" />
                    : <span style={{ fontSize: "22px", fontFamily: "Roboto Slab,serif", fontWeight: 700, color: "#1B2C59" }}>{member.name.charAt(0)}</span>
                  }
                </div>
                <div className="flex-1 min-w-0">
                  <p style={{ fontSize: "10px", fontFamily: "Poppins,sans-serif", fontWeight: 600, color: "#a1a7b7", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "3px" }}>
                    {member.role}
                  </p>
                  <h3 style={{ fontSize: "18px", fontFamily: "Roboto Slab,serif", fontWeight: 700, color: "#1B2C59", lineHeight: 1.2 }}>
                    {member.name}
                  </h3>
                </div>
                {isActive && (
                  <span style={{ fontSize: "11px", fontFamily: "Poppins,sans-serif", color: "#1B2C59", opacity: 0.35 }}>
                    {expanded ? <X size={16}/> : "↓ leer más"}
                  </span>
                )}
              </div>
              <div style={{ margin: "14px 24px 0", height: "1px", backgroundColor: "#1B2C59", opacity: 0.08 }} />
              <p style={{
                padding: "12px 24px 20px",
                fontSize: "13px", fontFamily: "Poppins,sans-serif", color: "#495579", lineHeight: 1.65,
                display: "-webkit-box",
                WebkitLineClamp: isActive && expanded ? "none" : 3,
                WebkitBoxOrient: "vertical",
                overflow: isActive && expanded ? "visible" : "hidden",
              }}>
                {member.bio}
              </p>
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-6 mt-8 flex-shrink-0">
        <button onClick={prev} disabled={active === 0}
          className="rounded-full flex items-center justify-center transition-all"
          style={{ width: "40px", height: "40px", border: "1px solid rgba(250,249,246,0.25)", color: "#FAF9F6", opacity: active === 0 ? 0.25 : 0.8 }}>
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {members.map((_, i) => (
            <button key={i} onClick={() => { setActive(i); setExpanded(false); }}
              style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: i === active ? "#FAF9F6" : "rgba(250,249,246,0.25)", transition: "all 0.3s" }} />
          ))}
        </div>
        <button onClick={next} disabled={active === N - 1}
          className="rounded-full flex items-center justify-center transition-all"
          style={{ width: "40px", height: "40px", border: "1px solid rgba(250,249,246,0.25)", color: "#FAF9F6", opacity: active === N - 1 ? 0.25 : 0.8 }}>
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default Team;
