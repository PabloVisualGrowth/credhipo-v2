import { useState } from "react";
import consultantImage from "@/assets/consultant-meeting.jpg";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { X, Linkedin } from "lucide-react";

const team = [
  {
    name: "Ángel Fernández Simón",
    role: "Socio Fundador",
    photo: null,
    bio: [
      "Emprendedor reconocido en el sector inmobiliario y financiero, con una trayectoria consolidada en la creación, desarrollo y gestión de proyectos de alto impacto.",
      "Fundador de la inmobiliaria “Don Piso”, una de las marcas más relevantes del mercado español, siendo protagonista directo en la profesionalización y modernización del sector inmobiliario en España.",
    ],
    skills: ["Visión estratégica", "Conocimiento de mercado", "Red de contactos", "Solución financiera a medida"],
    education: [],
  },
  {
    name: "Carmen Rosas",
    role: "Especialista Financiera Senior",
    photo: null,
    bio: [
      "Más de 30 años de experiencia en banca. Ha desarrollado su carrera en entidades como Bancaja y Bankia, ocupando puestos de alta responsabilidad en gestión comercial, dirección de red y desarrollo de negocio en Cataluña.",
      "Aplica su experiencia bancaria y el conocimiento del sistema financiero para garantizar operaciones sólidas, viables y en las mejores condiciones del mercado.",
    ],
    skills: ["Financiación hipotecaria", "Análisis de riesgos", "Negociación con entidades", "Estructuración de operaciones"],
    education: [
      "Licenciada en Ciencias Empresariales — Universidad de Barcelona",
      "Intermediación en crédito inmobiliario y asesoramiento — Banco de España",
      "Agente de la Propiedad Inmobiliaria",
    ],
  },
  {
    name: "Marta Oropesa",
    role: "Responsable de Análisis Legal",
    photo: null,
    bio: [
      "Más de 10 años de experiencia en el sector inmobiliario y financiero. Ha desarrollado su carrera en empresas como Aliseda Inmobiliaria, gestionando carteras de activos y operaciones vinculadas a fondos de inversión.",
      "Lidera el análisis legal de las operaciones, garantizando seguridad y transparencia en cada proceso con rigor jurídico y visión práctica del mercado.",
    ],
    skills: ["Operaciones complejas", "Procesos de compraventa", "Procedimientos ejecutivos y subastas", "Viabilidad jurídica"],
    education: [
      "Graduada en Derecho",
      "Intermediación en crédito inmobiliario y asesoramiento — Banco de España",
    ],
  },
];

const TeamModal = ({ member, onClose }: { member: typeof team[0]; onClose: () => void }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    onClick={onClose}
  >
    <div
      className="bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="relative bg-primary rounded-t-2xl p-8 pb-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        {/* Photo placeholder */}
        <div className="w-24 h-24 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center mb-4 mx-auto">
          {member.photo ? (
            <img src={member.photo} alt={member.name} className="w-full h-full rounded-full object-cover" />
          ) : (
            <span className="text-3xl font-heading font-bold text-white/60">
              {member.name.charAt(0)}
            </span>
          )}
        </div>
        <h3 className="text-2xl font-heading font-bold text-white text-center">{member.name}</h3>
        <p className="text-primary-foreground/70 text-center mt-1 text-sm font-medium uppercase tracking-wider">{member.role}</p>
      </div>

      {/* Body */}
      <div className="p-8 space-y-6">
        {/* Bio */}
        <div className="space-y-3">
          {member.bio.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
          ))}
        </div>

        {/* Skills */}
        <div>
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Especialidades</h4>
          <div className="flex flex-wrap gap-2">
            {member.skills.map((s, i) => (
              <span key={i} className="bg-primary/10 text-primary text-xs font-medium px-3 py-1.5 rounded-full">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Education */}
        {member.education.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Formación</h4>
            <ul className="space-y-2">
              {member.education.map((e, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  </div>
);

const About = () => {
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);

  return (
    <section id="nosotros" className="py-12 md:py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <BlurFade inView delay={0}>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center mb-16 lg:mb-24">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={consultantImage}
                  alt="Equipo de profesionales CredHipo"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block text-xs md:text-sm font-medium text-secondary uppercase tracking-wider mb-2 md:mb-4">
                Sobre Nosotros
              </span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 md:mb-6">
                Donde tu Hogar Comienza
              </h2>
              <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>
                  CredHipo nace de la experiencia de profesionales del sector inmobiliario, legal y bancario que comparten un mismo objetivo: ayudar a nuestros clientes a tomar decisiones inmobiliarias e hipotecarias con total seguridad y transparencia.
                </p>
                <p>
                  CredHipo está inscrita en el Registro de Intermediarios de Crédito Inmobiliario del Banco de España, conforme a la Ley 5/2019 reguladora de los contratos de crédito inmobiliario. Esta licencia no es solo un requisito legal: es una garantía para nuestros clientes.
                </p>
                <p>
                  En un sector donde existen intermediarios que operan sin regulación, contar con esta acreditación significa que trabajas con un equipo profesional, supervisado y comprometido con la seguridad de cada decisión.
                </p>
                <p className="font-medium text-foreground">
                  Porque cuando se trata de tu vivienda o tu inversión, la confianza no es opcional.
                </p>
              </div>
            </div>
          </div>

          {/* Team section */}
          <div>
            <div className="text-center mb-10">
              <span className="inline-block text-xs md:text-sm font-medium text-secondary uppercase tracking-wider mb-3">
                El equipo
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground">
                Conócenos
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member, i) => (
                <div
                  key={i}
                  className="group bg-card border border-border/50 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-elevated hover:border-primary/20 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedMember(member)}
                >
                  {/* Photo placeholder */}
                  <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-4 group-hover:border-primary/50 transition-colors">
                    {member.photo ? (
                      <img src={member.photo} alt={member.name} className="w-full h-full rounded-full object-cover" />
                    ) : (
                      <span className="text-2xl font-heading font-bold text-primary/40">
                        {member.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <h4 className="font-heading font-bold text-foreground text-lg mb-1">{member.name}</h4>
                  <p className="text-sm text-secondary font-medium mb-4">{member.role}</p>
                  <Button variant="outline" size="sm" className="rounded-full text-xs mt-auto">
                    Ver perfil
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>

      {selectedMember && (
        <TeamModal member={selectedMember} onClose={() => setSelectedMember(null)} />
      )}
    </section>
  );
};

export default About;
