import LegalLayout from "@/components/LegalLayout";

const TerminosPage = () => (
  <LegalLayout
    title="Términos y Condiciones"
    lastUpdated="1 de enero de 2026"
    sections={[
      {
        title: "1. Objeto del Servicio",
        content: (
          <p>
            CredHipo presta servicios de intermediación de crédito inmobiliario consistentes en la búsqueda, presentación y negociación de ofertas de préstamo hipotecario con entidades bancarias, con el objetivo de obtener las mejores condiciones posibles para el cliente. CredHipo no es una entidad de crédito y no concede préstamos directamente.
          </p>
        ),
      },
      {
        title: "2. Marco Regulatorio",
        content: (
          <p>
            La actividad de CredHipo se encuentra regulada por la <strong>Ley 5/2019, de 15 de marzo, reguladora de los contratos de crédito inmobiliario</strong>. CredHipo está inscrita en el Registro de Intermediarios de Crédito Inmobiliario del Banco de España, lo que garantiza el cumplimiento de los requisitos de formación, capacidad y conducta exigidos por la normativa vigente.
          </p>
        ),
      },
      {
        title: "3. Proceso de Intermediación",
        content: (
          <ul className="pl-4 space-y-2 list-disc">
            <li><strong>Contacto inicial:</strong> El cliente facilita su situación financiera e inmobiliaria para que CredHipo pueda valorar la operación.</li>
            <li><strong>Gestión bancaria:</strong> CredHipo contacta con las entidades financieras, gestiona la documentación y la tasación.</li>
            <li><strong>Presentación de ofertas:</strong> CredHipo presenta las condiciones obtenidas y asesora al cliente en la elección.</li>
            <li><strong>Gestión de la firma:</strong> CredHipo coordina y acompaña al cliente hasta la firma ante notario.</li>
          </ul>
        ),
      },
      {
        title: "4. Honorarios",
        content: (
          <p>
            Los honorarios de CredHipo por sus servicios de intermediación serán comunicados al cliente de forma transparente y por escrito antes del inicio del servicio, de conformidad con lo establecido en la Ley 5/2019. En ningún caso se cobrarán honorarios sin la previa aceptación expresa del cliente.
          </p>
        ),
      },
      {
        title: "5. Obligaciones del Cliente",
        content: (
          <ul className="pl-4 space-y-2 list-disc">
            <li>Facilitar información veraz, completa y actualizada sobre su situación financiera, laboral y patrimonial.</li>
            <li>Aportar la documentación requerida en los plazos acordados.</li>
            <li>Comunicar de forma inmediata cualquier cambio relevante en su situación que pueda afectar a la operación.</li>
          </ul>
        ),
      },
      {
        title: "6. Limitación de Responsabilidad",
        content: (
          <p>
            CredHipo actúa como intermediario y no puede garantizar la concesión del préstamo hipotecario, ya que la decisión final corresponde a la entidad bancaria. CredHipo tampoco responde de las condiciones financieras ofrecidas por las entidades, que quedan sujetas a su propia política de riesgos y a la situación del mercado en cada momento.
          </p>
        ),
      },
      {
        title: "7. Atención al Cliente y Reclamaciones",
        content: (
          <p>
            Para cualquier queja o reclamación relacionada con los servicios prestados, el cliente puede dirigirse al Departamento de Atención y Reclamaciones en <a href="mailto:reclamaciones@credhipo.es" className="underline hover:text-primary">reclamaciones@credhipo.es</a> o en C/LONDRES, 6, ENT 3ª, 08029, Barcelona. El plazo máximo de resolución es de un (1) mes. En caso de disconformidad, el cliente puede acudir al Departamento de Conducta de Entidades del Banco de España.
          </p>
        ),
      },
      {
        title: "8. Modificaciones",
        content: (
          <p>
            CredHipo se reserva el derecho a modificar los presentes Términos y Condiciones en cualquier momento, publicando la versión actualizada en el Sitio web. El uso continuado del Sitio tras la publicación de los cambios implica la aceptación de los nuevos términos.
          </p>
        ),
      },
      {
        title: "9. Legislación Aplicable",
        content: (
          <p>
            Los presentes Términos y Condiciones se rigen por la legislación española. Cualquier controversia que no pueda resolverse de mutuo acuerdo se someterá a los Juzgados y Tribunales de Barcelona.
          </p>
        ),
      },
    ]}
  />
);

export default TerminosPage;
