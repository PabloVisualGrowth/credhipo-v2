import { useState } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logoFooter from "@/assets/logo-footer.png";
import ReclamacionesModal from "@/components/ReclamacionesModal";

const Footer = () => {
  const [showReclamaciones, setShowReclamaciones] = useState(false);

  const links = {
    empresa: [
      { label: "Sobre nosotros", href: "#nosotros" },
      { label: "Blog", href: "#blog" },
      { label: "Trabaja con nosotros", href: "#" },
      { label: "Contacto", href: "#contacto" },
    ],
    legal: [
      { label: "Política de privacidad", href: "#" },
      { label: "Política de cookies", href: "#" },
      { label: "Aviso legal", href: "#" },
      { label: "Términos y condiciones", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <>
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <img
                src={logoFooter}
                alt="CredHipo - Donde tu Hogar Comienza"
                className="h-16 w-auto mb-6"
              />
              <p className="text-primary-foreground/70 mb-6 max-w-sm leading-relaxed">
                Somos expertos en intermediación hipotecaria. Te ayudamos a
                conseguir la mejor hipoteca del mercado con un proceso
                transparente y personalizado.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Empresa */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Empresa</h4>
              <ul className="space-y-3">
                {links.empresa.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Legal</h4>
              <ul className="space-y-3">
                {links.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => setShowReclamaciones(true)}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-left"
                  >
                    Atención al Cliente y Reclamaciones
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2026 CredHipo. Todos los derechos reservados.
            </p>
            <p className="text-sm text-primary-foreground/60">
              CredHipo es un intermediario de crédito inmobiliario registrado.
            </p>
          </div>
        </div>
      </footer>

      {showReclamaciones && (
        <ReclamacionesModal onClose={() => setShowReclamaciones(false)} />
      )}
    </>
  );
};

export default Footer;
