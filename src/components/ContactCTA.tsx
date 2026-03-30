import { useState } from "react";
import logoFooter from "@/assets/logo-footer.png";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { BlurFade } from "@/components/ui/blur-fade";
import { Iphone } from "@/components/ui/iphone";
import { Checkbox } from "@/components/ui/checkbox";

const ContactCTA = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    terms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.terms) {
      toast({
        title: "Error",
        description: "Debes aceptar la política de privacidad.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo lo antes posible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "", terms: false });
  };

  const contactInfo = [
    { icon: Phone, label: "Teléfono", value: "900 000 000", href: "tel:+34900000000" },
    { icon: Mail, label: "Email", value: "info@credhipo.es", href: "mailto:info@credhipo.es" },
    { icon: MapPin, label: "Dirección", value: "Calle Principal 123, Madrid", href: "#" },
  ];

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Split Background (Desktop) */}
      <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full bg-primary z-0" />

      <div className="w-full relative z-10">
        <BlurFade inView delay={0}>
          <div className="grid lg:grid-cols-2 w-full">
            {/* Left Content */}
            <div className="flex justify-center items-center p-8 lg:p-20">
              <div className="w-[300px] md:w-[320px] lg:w-[350px]">
                <Iphone>
                  <div className="h-full bg-primary p-6 pt-12 flex flex-col overflow-y-auto scrollbar-hide">
                    <img
                      src={logoFooter}
                      alt="CredHipo Logo"
                      className="h-12 w-auto mb-6"
                    />
                    <span className="inline-block text-xs font-medium text-primary-foreground/90 uppercase tracking-wider mb-4">
                      Contacto
                    </span>
                    <h2 className="text-2xl font-heading font-bold text-primary-foreground mb-4">
                      ¿Listo para encontrar tu hipoteca ideal?
                    </h2>
                    <p className="text-sm text-primary-foreground/80 mb-8">
                      Déjanos tus datos y un experto hipotecario se pondrá en contacto contigo en menos de 24 horas. Sin compromiso.
                    </p>
                    <div className="space-y-3 mt-auto pb-4">
                      {contactInfo.map((info, index) => (
                        <a
                          key={index}
                          href={info.href}
                          className="flex items-center gap-3 p-3 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center group-hover:bg-primary-foreground transition-colors shrink-0">
                            <info.icon className="h-4 w-4 text-primary-foreground group-hover:text-primary transition-colors" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs text-primary-foreground/70">{info.label}</div>
                            <div className="font-medium text-primary-foreground text-sm truncate">{info.value}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </Iphone>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex justify-center items-center p-8 lg:p-20">
              <div className="w-full max-w-md">
                <Card className="shadow-2xl bg-card border-none text-card-foreground">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Nombre completo
                        </label>
                        <Input
                          type="text"
                          placeholder="Tu nombre"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="bg-background border-input"
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                          <Input
                            type="email"
                            placeholder="tu@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="bg-background border-input"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Teléfono</label>
                          <Input
                            type="tel"
                            placeholder="600 000 000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                            className="bg-background border-input"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          ¿Cómo podemos ayudarte?
                        </label>
                        <Textarea
                          placeholder="Cuéntanos sobre tu situación y qué buscas..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={4}
                          className="bg-background border-input resize-none"
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.terms}
                          onCheckedChange={(checked) => setFormData({ ...formData, terms: checked as boolean })}
                        />
                        <label
                          htmlFor="terms"
                          className="text-xs text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Acepto el tratamiento de datos y la política de privacidad
                        </label>
                      </div>
                      <Button type="submit" variant="cta" size="lg" className="w-full">
                        <Send className="mr-2 h-4 w-4" />
                        Solicitar asesoría gratuita
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">
                        Al enviar este formulario, aceptas nuestra{" "}
                        <a href="#" className="underline hover:text-primary">
                          política de privacidad
                        </a>
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default ContactCTA;
