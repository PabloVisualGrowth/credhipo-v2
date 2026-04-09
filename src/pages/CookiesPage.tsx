import LegalLayout from "@/components/LegalLayout";

const CookiesPage = () => (
  <LegalLayout
    title="Política de Cookies"
    lastUpdated="1 de enero de 2026"
    sections={[
      {
        title: "1. ¿Qué son las Cookies?",
        content: (
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Permiten que el sitio recuerde sus acciones y preferencias durante un período de tiempo, para que no tenga que volver a introducirlas cada vez que regrese.
          </p>
        ),
      },
      {
        title: "2. Cookies que Utilizamos",
        content: (
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">Nombre</th>
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">Tipo</th>
                  <th className="text-left py-2 font-semibold text-foreground">Finalidad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 pr-4">cookie_consent</td>
                  <td className="py-2 pr-4">Técnica</td>
                  <td className="py-2">Almacena la preferencia del usuario sobre el aviso de cookies.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">_ga, _gid</td>
                  <td className="py-2 pr-4">Analítica</td>
                  <td className="py-2">Google Analytics: mide el tráfico y el comportamiento de los usuarios de forma anónima.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">_fbp</td>
                  <td className="py-2 pr-4">Marketing</td>
                  <td className="py-2">Meta Pixel: seguimiento de conversiones para campañas publicitarias.</td>
                </tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        title: "3. Tipos de Cookies por Categoría",
        content: (
          <ul className="pl-4 space-y-2 list-disc">
            <li><strong>Cookies técnicas o necesarias:</strong> imprescindibles para el funcionamiento del sitio web. No requieren consentimiento.</li>
            <li><strong>Cookies analíticas:</strong> permiten conocer el número de visitantes y cómo interactúan con el sitio, de forma agregada y anónima.</li>
            <li><strong>Cookies de marketing:</strong> utilizadas para mostrar publicidad relevante y medir la efectividad de las campañas.</li>
          </ul>
        ),
      },
      {
        title: "4. Base Legal",
        content: (
          <p>
            El uso de cookies técnicas se fundamenta en el interés legítimo del titular del sitio web (art. 6.1.f RGPD). Las cookies analíticas y de marketing se instalan únicamente con su consentimiento expreso, conforme al art. 6.1.a RGPD y la Ley 34/2002 de Servicios de la Sociedad de la Información (LSSI).
          </p>
        ),
      },
      {
        title: "5. Cómo Gestionar o Desactivar las Cookies",
        content: (
          <>
            <p>Puede gestionar sus preferencias en cualquier momento desde el aviso de cookies de la web. También puede configurar su navegador para bloquear o eliminar cookies:</p>
            <ul className="pl-4 space-y-1 list-disc">
              <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
              <li><strong>Firefox:</strong> Preferencias → Privacidad y seguridad</li>
              <li><strong>Safari:</strong> Preferencias → Privacidad</li>
              <li><strong>Edge:</strong> Configuración → Privacidad, búsqueda y servicios</li>
            </ul>
            <p>La desactivación de cookies técnicas puede afectar al correcto funcionamiento del sitio.</p>
          </>
        ),
      },
      {
        title: "6. Más Información",
        content: (
          <p>
            Para cualquier consulta sobre nuestra política de cookies, puede contactar con nosotros en <a href="mailto:reclamaciones@credhipo.es" className="underline hover:text-primary">reclamaciones@credhipo.es</a>.
          </p>
        ),
      },
    ]}
  />
);

export default CookiesPage;
