import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoMain from "@/assets/logo-main.png";

// Sections with dark (primary/blue) backgrounds
const DARK_SECTION_IDS = ["inicio", "como-trabajamos", "contacto"];
const ALL_SECTION_IDS = ["inicio", "servicios", "calculadora", "como-trabajamos", "nosotros", "blog", "contacto"];

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInHero, setIsInHero] = useState(true);
  const [isDarkBg, setIsDarkBg] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      setIsInHero(currentScrollY < heroHeight - 80);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsDarkBg(DARK_SECTION_IDS.includes(entry.target.id));
          }
        });
      },
      { rootMargin: "-64px 0px -80% 0px", threshold: 0 }
    );
    ALL_SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { href: "#servicios", label: "Servicios" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#como-trabajamos", label: "Cómo trabajamos" },
    { href: "#calculadora", label: "Calculador hipoteca" },
    { href: "#blog", label: "Blog" },
  ];

  // Navbar bg logic:
  // - In Hero: fully white, solid
  // - Past Hero + light section: slightly transparent white
  // - Past Hero + dark section: slightly transparent (dark bg shows through)
  const navBg = isInHero
    ? "bg-white shadow-sm border border-gray-100"
    : isDarkBg
      ? "bg-white/15 backdrop-blur-md border border-white/10 shadow-none"
      : "bg-white/80 backdrop-blur-md border border-white/20 shadow-sm";

  // Text/logo color logic:
  // - In Hero (white bar): use primary (dark blue)
  // - Past Hero on dark bg: white
  // - Past Hero on light bg: primary (dark blue)
  const showWhiteText = !isInHero && isDarkBg;

  const textClass = showWhiteText
    ? "text-white/90 hover:text-white"
    : "text-foreground/80 hover:text-primary";

  const logoFilter = showWhiteText ? "brightness-0 invert" : "";

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
                className={`nav-underline whitespace-nowrap text-sm font-semibold transition-all duration-500 px-3 py-2 ${textClass}`}
              >
                {link.label}
              </a>
            ))}
            <a href="#contacto" className="btn-contactanos ml-3">
              Contáctanos
            </a>
          </nav>

          <button
            className={`xl:hidden p-2 transition-colors duration-500 ${showWhiteText ? "text-white" : "text-primary"}`}
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
