import LegalLayout from "@/components/LegalLayout";

const PrivacidadPage = () => (
  <LegalLayout
    title="Política de Privacidad"
    lastUpdated="1 de enero de 2026"
    sections={[
      {
        title: "1. Responsable del Tratamiento",
        content: (
          <>
            <p>
              El responsable del tratamiento de sus datos personales es <strong>CredHipo</strong>, intermediario de crédito inmobiliario inscrito en el Registro del Banco de España conforme a la Ley 5/2019, de 15 de marzo.
            </p>
            <ul className="pl-4 space-y-1 list-disc">
              <li><strong>Dirección:</strong> C/LONDRES, 6, ENT 3ª, 08029, Barcelona (España)</li>
              <li><strong>Email de contacto:</strong> info@credhipo.es</li>
              <li><strong>Email de protección de datos:</strong> reclamaciones@credhipo.es</li>
            </ul>
          </>
        ),
      },
      {
        title: "2. Datos que Recopilamos",
        content: (
          <p>
            Recopilamos los datos que usted nos facilita voluntariamente a través de nuestros formularios de contacto: nombre completo, dirección de correo electrónico, número de teléfono e información sobre su situación hipotecaria. No recopilamos datos especialmente protegidos.
          </p>
        ),
      },
      {
        title: "3. Finalidad y Base Legal del Tratamiento",
        content: (
          <ul className="pl-4 space-y-2 list-disc">
            <li><strong>Prestación del servicio de intermediación hipotecaria:</strong> ejecución de la relación precontractual o contractual (art. 6.1.b RGPD).</li>
            <li><strong>Atención de consultas y reclamaciones:</strong> interés legítimo y cumplimiento de obligaciones legales (art. 6.1.c y 6.1.f RGPD).</li>
            <li><strong>Comunicaciones comerciales:</strong> consentimiento expreso del interesado (art. 6.1.a RGPD), revocable en cualquier momento.</li>
          </ul>
        ),
      },
      {
        title: "4. Conservación de los Datos",
        content: (
          <p>
            Los datos se conservarán durante el tiempo necesario para la prestación del servicio y, posteriormente, durante los plazos de prescripción legal aplicables (con carácter general, hasta 5 años desde la finalización de la relación), salvo que el usuario ejerza su derecho de supresión.
          </p>
        ),
      },
      {
        title: "5. Destinatarios y Cesiones",
        content: (
          <p>
            Los datos no serán cedidos a terceros salvo obligación legal o cuando sea estrictamente necesario para la prestación del servicio (por ejemplo, entidades bancarias a las que se remite la solicitud de financiación, siempre con su consentimiento previo). CredHipo no vende ni alquila datos personales.
          </p>
        ),
      },
      {
        title: "6. Sus Derechos",
        content: (
          <>
            <p>En virtud del RGPD (Reglamento UE 2016/679) y la LOPDGDD (Ley Orgánica 3/2018), usted tiene derecho a:</p>
            <ul className="pl-4 space-y-1 list-disc">
              <li><strong>Acceso:</strong> conocer qué datos tratamos sobre usted.</li>
              <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
              <li><strong>Supresión:</strong> solicitar la eliminación de sus datos.</li>
              <li><strong>Oposición:</strong> oponerse a determinados tratamientos.</li>
              <li><strong>Limitación:</strong> solicitar la restricción del tratamiento.</li>
              <li><strong>Portabilidad:</strong> recibir sus datos en formato estructurado.</li>
            </ul>
            <p>
              Para ejercer estos derechos, diríjase a <a href="mailto:reclamaciones@credhipo.es" className="underline hover:text-primary">reclamaciones@credhipo.es</a>. También puede presentar reclamación ante la <strong>Agencia Española de Protección de Datos</strong> (www.aepd.es).
            </p>
          </>
        ),
      },
      {
        title: "7. Seguridad",
        content: (
          <p>
            CredHipo adopta las medidas técnicas y organizativas necesarias para garantizar la seguridad, integridad y confidencialidad de los datos personales, evitando su alteración, pérdida, tratamiento o acceso no autorizado.
          </p>
        ),
      },
    ]}
  />
);

export default PrivacidadPage;
