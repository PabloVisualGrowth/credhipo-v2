import { useState, useEffect } from "react";
import { X, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const LeadModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("credhipo-lead-modal");
    if (!hasSeenModal) {
      const timer = setTimeout(() => setIsVisible(true), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    sessionStorage.setItem("credhipo-lead-modal", "true");
    setIsVisible(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Gracias por registrarte!",
      description: "Te contactaremos pronto con información personalizada.",
    });
    closeModal();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-card rounded-2xl shadow-elevated max-w-md w-full overflow-hidden animate-fade-up">
        {/* Header */}
        <div className="bg-primary p-6 text-primary-foreground relative">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 p-1 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
              <Gift className="h-6 w-6" />
            </div>
          </div>
          <h3 className="text-2xl font-heading font-bold mb-2">
            ¡Consigue tu estudio hipotecario gratis!
          </h3>
          <p className="text-primary-foreground/80">
            Déjanos tus datos y te llamamos para analizar tu caso sin compromiso.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="bg-background"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="bg-background"
            />
          </div>
          <div>
            <Input
              type="tel"
              placeholder="Tu teléfono"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
              className="bg-background"
            />
          </div>
          <Button type="submit" variant="cta" className="w-full">
            Quiero mi estudio gratis
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            Sin compromisos. Tus datos están seguros con nosotros.
          </p>
        </form>
      </div>
    </div>
  );
};

export default LeadModal;
