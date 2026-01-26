import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoMain from "@/assets/logo-main.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#servicios", label: "Servicios" },
    { href: "#calculadora", label: "Calculadora" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#blog", label: "Blog" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logoMain} alt="CredHipo - Donde tu Hogar Comienza" className="h-10 md:h-14 w-auto" />
          </a>

          {/* Desktop Navigation - Circular Bar */}
          <nav className="hidden lg:flex items-center gap-1 bg-card/90 backdrop-blur-md rounded-full px-2 py-1.5 shadow-card border border-border/50">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all px-4 py-2 rounded-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+34900000000"
              className="flex items-center gap-2 text-sm font-medium text-primary"
            >
              <Phone className="h-4 w-4" />
              900 000 000
            </a>
            <Button variant="cta" size="lg" className="rounded-full">
              Solicita tu Hipoteca
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menú"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-fade-in">
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
              <div className="px-4 pt-4 border-t border-border mt-2">
                <Button variant="cta" className="w-full">
                  Solicita tu Hipoteca
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
