import LegalLayout from "@/components/LegalLayout";

const AvisoLegalPage = () => (
  <LegalLayout
    title="Aviso Legal"
    lastUpdated="1 de enero de 2026"
    sections={[
      {
        title: "1. Identificación del Titular",
        content: (
          <ul className="pl-4 space-y-1 list-disc">
            <li><strong>Denominación social:</strong> CredHipo</li>
            <li><strong>Actividad:</strong> Intermediación de crédito inmobiliario</li>
            <li><strong>Registro:</strong> Inscrita en el Registro de Intermediarios de Crédito Inmobiliario del Banco de España, conforme a la Ley 5/2019, de 15 de marzo</li>
            <li><strong>Domicilio:</strong> C/LONDRES, 6, ENT 3ª, 08029, Barcelona (España)</li>
            <li><strong>Email:</strong> info@credhipo.es</li>
          </ul>
        ),
      },
      {
        title: "2. Objeto y Condiciones de Uso",
        content: (
          <p>
            El presente Aviso Legal regula el acceso y uso del sitio web <strong>credhipo.es</strong> (en adelante, «el Sitio»). El acceso al Sitio es gratuito y no requiere registro previo, salvo para la utilización de determinados servicios. El usuario se compromete a hacer un uso adecuado y lícito del Sitio, de conformidad con la legislación vigente, la buena fe y el orden público.
          </p>
        ),
      },
      {
        title: "3. Propiedad Intelectual e Industrial",
        content: (
          <p>
            Todos los contenidos del Sitio — incluyendo textos, imágenes, logotipos, diseño gráfico, código fuente y estructura — son propiedad de CredHipo o de sus licenciantes, y están protegidos por la legislación española e internacional sobre propiedad intelectual e industrial. Queda prohibida su reproducción, distribución, comunicación pública o transformación sin autorización expresa y por escrito.
          </p>
        ),
      },
      {
        title: "4. Exclusión de Responsabilidad",
        content: (
          <>
            <p>
              CredHipo no garantiza la disponibilidad continua e ininterrumpida del Sitio, ni la ausencia de errores en sus contenidos. La información publicada tiene carácter meramente informativo y no constituye asesoramiento financiero, jurídico o fiscal personalizado.
            </p>
            <p>
              CredHipo no se responsabiliza de los daños o perjuicios derivados del uso del Sitio, del uso de los enlaces a sitios de terceros, ni de la actuación de terceros que pudieran acceder al Sitio de forma fraudulenta.
            </p>
          </>
        ),
      },
      {
        title: "5. Actividad Regulada",
        content: (
          <p>
            CredHipo actúa como intermediario de crédito inmobiliario inscrito en el Banco de España. No concede préstamos directamente ni actúa en nombre de ninguna entidad de crédito concreta. Los servicios prestados se rigen por la Ley 5/2019 y su normativa de desarrollo.
          </p>
        ),
      },
      {
        title: "6. Legislación Aplicable y Jurisdicción",
        content: (
          <p>
            El presente Aviso Legal se rige por la legislación española. Para la resolución de cualquier controversia derivada del acceso o uso del Sitio, las partes se someten a los Juzgados y Tribunales de la ciudad de Barcelona, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
          </p>
        ),
      },
    ]}
  />
);

export default AvisoLegalPage;
