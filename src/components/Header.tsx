import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoMain from "@/assets/logo-main.png";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isInHero, setIsInHero] = useState(window.scrollY < window.innerHeight - 80);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hide on scroll down, show on scroll up + hero detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsInHero(currentScrollY < window.innerHeight - 80);
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

  // Detect dark background sections
  useEffect(() => {
    const darkIds = ["como-trabajamos", "equipo", "contacto"];
    const active = new Set<string>();
    const observers = darkIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          entry.isIntersecting ? active.add(id) : active.delete(id);
          setIsDarkSection(active.size > 0);
        },
        { rootMargin: "-64px 0px -20% 0px", threshold: 0 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const navLinks = [
    { href: "#servicios", label: "Servicios" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#como-trabajamos", label: "Cómo trabajamos" },
    { href: "#calculadora", label: "Calculador hipoteca" },
    { href: "#blog", label: "Blog" },
  ];

  // Page 1 (hero): white opaque pill
  // Page 2+ dark section: transparent + white text
  // Page 2+ light section: semi-transparent white + dark text
  const onDark = !isInHero && isDarkSection;

  const navBg = isInHero
    ? "bg-white shadow-sm border border-gray-100"
    : isDarkSection
      ? "bg-white/10 backdrop-blur-md border border-white/15"
      : "bg-white/75 backdrop-blur-md border border-gray-100/60 shadow-sm";

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
            <a href="#contacto" className="btn-contactanos ml-3">
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
