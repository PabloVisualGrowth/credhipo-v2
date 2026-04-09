import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoMain from "@/assets/logo-main.png";

const NAVBAR_HEIGHT = 88; // px — approximate bottom of navbar
const DARK_IDS = ["como-trabajamos", "equipo"];

const isNavbarOverDarkSection = () => {
  return DARK_IDS.some((id) => {
    const el = document.getElementById(id);
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    // Dark if section top is above navbar bottom AND section bottom is below page top
    return rect.top <= NAVBAR_HEIGHT && rect.bottom >= 0;
  });
};

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isInHero, setIsInHero] = useState(window.scrollY < window.innerHeight - 80);
  const [isDarkSection, setIsDarkSection] = useState(isNavbarOverDarkSection);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsInHero(currentScrollY < window.innerHeight - 80);
      setIsDarkSection(isNavbarOverDarkSection());
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

  // White pill always — except when physically over a dark blue section
  const onDark = !isInHero && isDarkSection;

  const navBg = onDark
    ? "bg-white/10 backdrop-blur-md border border-white/15"
    : "bg-white shadow-sm border border-gray-100";

  const textClass = onDark
    ? "text-white/85 hover:text-white"
    : "text-foreground/80 hover:text-primary";

  const logoFilter = onDark ? "brightness-0 invert" : "";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className={`flex items-center justify-between h-16 md:h-20 rounded-2xl px-6 transition-all duration-500 ${navBg}`}>
          <div className="flex items-center flex-shrink-0">
            <img
              src={logoMain}
              alt="CredHipo"
              className={`h-10 md:h-14 w-auto transition-all duration-500 ${logoFilter}`}
            />
          </div>

          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap text-sm font-semibold px-3 py-2 transition-colors duration-300 ${textClass}`}
              >
                {link.label}
              </a>
            ))}
            <a href="https://credhipo-v2.vercel.app/#contacto" className="btn-contactanos ml-3">
              Contáctanos
            </a>
          </nav>

          <button
            className={`xl:hidden p-2 transition-colors duration-300 ${onDark ? "text-white" : "text-primary"}`}
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
                <a href="https://credhipo-v2.vercel.app/#contacto" className="btn-contactanos" onClick={() => setIsMobileMenuOpen(false)}>
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
