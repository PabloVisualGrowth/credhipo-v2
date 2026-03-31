import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoMain from "@/assets/logo-main.png";

// Sections with dark (blue/primary) backgrounds
const DARK_SECTION_IDS = ["inicio", "como-trabajamos"];
const ALL_SECTION_IDS = ["inicio", "servicios", "calculadora", "como-trabajamos", "nosotros", "blog", "contacto"];

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [isDarkBg, setIsDarkBg] = useState(true); // hero is first and dark

  // Scroll direction hide/show + atTop detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setAtTop(currentScrollY < 80);
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

  // IntersectionObserver: detect which section is at the top of viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsDarkBg(DARK_SECTION_IDS.includes(entry.target.id));
          }
        });
      },
      // rootMargin: only trigger when section top is in the top ~15% of viewport (below header)
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
    { href: "#como-trabajamos", label: "C\u00f3mo trabajamos" },
    { href: "#calculadora", label: "Calculador hipoteca" },
    { href: "#blog", label: "Blog" },
  ];

  // Derived styles
  const scrolled = !atTop;
  const showWhite = scrolled && isDarkBg;

  const navBg = atTop
    ? "bg-white shadow-md border border-transparent"
    : "bg-transparent border border-transparent shadow-none";

  const textClass = showWhite
    ? "text-white/90 hover:text-white"
    : "text-foreground/80 hover:text-primary";

  const logoFilter = showWhite ? "brightness-0 invert" : "";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className={`flex items-center justify-between h-16 md:h-20 rounded-2xl px-6 transition-all duration-500 ${navBg}`}>
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img
              src={logoMain}
              alt="CredHipo"
              className={`h-10 md:h-14 w-auto transition-all duration-500 ${logoFilter}`}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-underline whitespace-nowrap text-sm font-semibold transition-colors duration-500 px-3 py-2 ${textClass}`}
              >
                {link.label}
              </a>
            ))}
            <a href="#contacto" className="btn-contactanos ml-3">
              Cont\u00e1ctanos
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`xl:hidden p-2 transition-colors duration-500 ${showWhite ? "text-white" : "text-primary"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Men\u00fa"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu - always light bg for readability */}
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
              <div className="px-4 py-3">
                <a
                  href="#contacto"
                  className="btn-contactanos"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Cont\u00e1ctanos
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
