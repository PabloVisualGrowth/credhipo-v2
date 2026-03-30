import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoMain from "@/assets/logo-main.png";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY < 80);
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { href: "#servicios", label: "Servicios" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#como-trabajamos", label: "Cómo trabajamos" },
    { href: "#calculadora", label: "Calculador hipoteca" },
    { href: "#blog", label: "Blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div
          className={`flex items-center justify-between h-16 md:h-20 rounded-2xl px-6 transition-all duration-500 ${
            isAtTop
              ? "bg-primary/95 border border-primary-foreground/10"
              : "bg-white/15 backdrop-blur-lg shadow-elevated border border-white/10"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img
              src={logoMain}
              alt="CredHipo - Donde tu Hogar Comienza"
              className={`h-10 md:h-14 w-auto transition-all duration-500 ${
                isAtTop ? "brightness-0 invert" : ""
              }`}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden xl:flex items-center gap-1 ${isAtTop ? "nav-dark" : ""}`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-underline whitespace-nowrap text-sm font-semibold transition-colors duration-500 px-3 py-2 ${
                  isAtTop
                    ? "text-primary-foreground/90 hover:text-primary-foreground"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden xl:flex items-center flex-shrink-0">
            <a
              href="#contacto"
              className={`btn-cta-nav ${isAtTop ? "btn-cta-nav--hero" : ""}`}
            >
              Contáctanos
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`xl:hidden p-2 transition-colors duration-500 ${
              isAtTop ? "text-primary-foreground" : "text-primary"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menú"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-card border-t border-border animate-fade-in">
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
              <a
                href="#contacto"
                className="px-4 py-3 text-primary font-semibold hover:bg-muted transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contáctanos
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
