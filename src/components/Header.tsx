import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoMain from "@/assets/logo-main.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#servicios", label: "Servicios" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#como-trabajamos", label: "Cómo trabajamos" },
    { href: "#calculadora", label: "Calculador hipoteca" },
    { href: "#blog", label: "Blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between h-16 md:h-20 rounded-2xl px-6 bg-white shadow-sm border border-gray-100">
          <div className="flex items-center flex-shrink-0">
            <img
              src={logoMain}
              alt="CredHipo"
              className="h-10 md:h-14 w-auto"
            />
          </div>

          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-underline whitespace-nowrap text-sm font-semibold px-3 py-2 text-foreground/80 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a href="#contacto" className="btn-contactanos ml-3">
              Contáctanos
            </a>
          </nav>

          <button
            className="xl:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menú"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-border rounded-b-2xl shadow-md animate-fade-in">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-foreground hover:bg-muted transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-2 pb-3">
                <a href="#contacto" className="btn-contactanos" onClick={() => setIsMobileMenuOpen(false)}>
                  Contáctanos
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
