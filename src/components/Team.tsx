import { motion } from "framer-motion";

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

const Team = () => (
  <section id="equipo" className="py-20 lg:py-32" style={{ backgroundColor: "#1B2C59" }}>
    <div className="container mx-auto px-4">

      {/* Header */}
      <motion.div
        className="text-center mb-16 lg:mb-20"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span
          className="block text-xs font-semibold uppercase tracking-widest mb-4 font-body"
          style={{ color: "#757e98" }}
        >
          El Equipo
        </span>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold"
          style={{ color: "#FAF9F6" }}
        >
          Liderazgo y Experiencia
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="space-y-8 lg:space-y-10 max-w-4xl mx-auto">
        {members.map((member, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden flex flex-col md:flex-row"
            style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {/* Photo — left on desktop, top on mobile */}
            <div
              className="flex-shrink-0 flex items-center justify-center md:w-56 lg:w-64 min-h-[220px] md:min-h-0"
              style={{ backgroundColor: "rgba(73,85,121,0.35)" }}
            >
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center gap-3 py-10 px-8">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(250,249,246,0.10)" }}
                  >
                    <span
                      className="text-3xl font-heading font-bold"
                      style={{ color: "rgba(250,249,246,0.35)" }}
                    >
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <span
                    className="text-xs font-body"
                    style={{ color: "rgba(250,249,246,0.2)" }}
                  >
                    Foto próximamente
                  </span>
                </div>
              )}
            </div>

            {/* Text — slides in from right */}
            <motion.div
              className="flex-1 p-8 lg:p-10"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2 font-body"
                style={{ color: "#a1a7b7" }}
              >
                {member.role}
              </p>
              <h3
                className="text-xl lg:text-2xl font-heading font-bold mb-5"
                style={{ color: "#FAF9F6" }}
              >
                {member.name}
              </h3>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: "15px", lineHeight: "1.7", color: "rgba(250,249,246,0.72)" }}
              >
                {member.bio}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
