import { X } from "lucide-react";

interface Props {
  onClose: () => void;
}

const ReclamacionesModal = ({ onClose }: Props) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    onClick={onClose}
  >
    <div
      className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
      style={{ backgroundColor: "#FAF9F6", color: "#1B2C59" }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="sticky top-0 flex items-center justify-between px-8 pt-8 pb-4" style={{ backgroundColor: "#FAF9F6" }}>
        <h2 className="font-heading font-bold text-2xl md:text-3xl" style={{ color: "#1B2C59" }}>
          Reclamaciones
        </h2>
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-black/8 flex-shrink-0 ml-4"
          style={{ color: "#1B2C59" }}
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Divider */}
      <div className="mx-8 h-px" style={{ backgroundColor: "#1B2C59", opacity: 0.12 }} />

      {/* Body */}
      <div className="px-8 py-6 space-y-5 font-body text-sm md:text-base leading-relaxed" style={{ color: "#1B2C59" }}>
        <p>
          De conformidad con lo dispuesto en la Ley 5/2019, de 15 de marzo, reguladora de los contratos de crédito inmobiliario, y su normativa de desarrollo, la sociedad dispone de un <strong>Departamento de Atención y Reclamaciones</strong>, encargado de la recepción, tramitación y resolución de las quejas y reclamaciones que puedan presentar los clientes en relación con los servicios de intermediación de crédito inmobiliario prestados.
        </p>

        <p>
          Las reclamaciones podrán dirigirse al servicio designado a estos efectos, siendo el <strong>Despacho de Abogados Caramany Bonet</strong>.
        </p>

        <p>Las reclamaciones podrán ser presentadas tanto presencialmente como telemáticamente:</p>

        <ul className="space-y-2 pl-4">
          <li className="flex items-start gap-2">
            <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#1B2C59" }} />
            <span>
              <strong>Por correo electrónico:</strong>{" "}
              <a
                href="mailto:reclamaciones@credhipo.es"
                className="underline underline-offset-2 hover:opacity-70 transition-opacity"
                style={{ color: "#1B2C59" }}
              >
                reclamaciones@credhipo.es
              </a>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#1B2C59" }} />
            <span>
              <strong>Presencialmente en:</strong> C/LONDRES, 6, ENT 3ª, 08029, BARCELONA (ESPAÑA)
            </span>
          </li>
        </ul>

        <p>
          El plazo máximo para la resolución y notificación de la respuesta será de <strong>un (1) mes</strong> desde la fecha de recepción de la reclamación, conforme a la normativa aplicable.
        </p>

        <p>
          En caso de disconformidad con la resolución adoptada, o transcurrido dicho plazo sin respuesta, el cliente podrá dirigirse al <strong>Departamento de Conducta de Entidades del Banco de España</strong>, de acuerdo con el procedimiento legalmente establecido.
        </p>

        <div className="pt-2 pb-1">
          <div className="h-px w-full" style={{ backgroundColor: "#1B2C59", opacity: 0.1 }} />
        </div>

        <p className="text-xs md:text-sm opacity-70 leading-relaxed">
          La sociedad tratará los datos del cliente de forma confidencial y únicamente para la prestación de los servicios de intermediación de crédito inmobiliario, cumpliendo con el <strong>RGPD (Reglamento UE 2016/679)</strong> y la <strong>LOPDGDD (Ley Orgánica 3/2018)</strong>. El cliente tiene derecho a acceder, rectificar, suprimir y limitar el tratamiento de sus datos, así como a oponerse a su uso y presentar reclamación ante la <strong>Agencia Española de Protección de Datos</strong>, en caso de no cumplirse con ello. La sociedad adopta las medidas necesarias para garantizar la seguridad e integridad de los datos.
        </p>
      </div>

      {/* Footer */}
      <div className="px-8 pb-8">
        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl font-body font-semibold text-sm transition-opacity hover:opacity-80"
          style={{ backgroundColor: "#1B2C59", color: "#FAF9F6" }}
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>
);

export default ReclamacionesModal;
