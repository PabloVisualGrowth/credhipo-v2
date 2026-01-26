import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("credhipo-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("credhipo-cookie-consent", "all");
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("credhipo-cookie-consent", "essential");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-card rounded-2xl shadow-elevated max-w-lg w-full p-6 animate-fade-up">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Cookie className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-heading font-bold text-foreground">
              Tu privacidad importa
            </h3>
          </div>
          <button
            onClick={acceptEssential}
            className="p-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <p className="text-muted-foreground mb-6">
          Utilizamos cookies para mejorar tu experiencia de navegación,
          personalizar contenido y analizar el tráfico. Puedes aceptar todas las
          cookies o solo las esenciales.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="cta" onClick={acceptAll} className="flex-1">
            Aceptar todas
          </Button>
          <Button variant="outline" onClick={acceptEssential} className="flex-1">
            Solo esenciales
          </Button>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-4">
          Más información en nuestra{" "}
          <a href="#" className="underline hover:text-primary">
            política de cookies
          </a>
        </p>
      </div>
    </div>
  );
};

export default CookieConsent;
