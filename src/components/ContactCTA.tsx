import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";

const ContactCTA = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo lo antes posible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Teléfono",
      value: "900 000 000",
      href: "tel:+34900000000",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@credhipo.es",
      href: "mailto:info@credhipo.es",
    },
    {
      icon: MapPin,
      label: "Dirección",
      value: "Calle Principal 123, Madrid",
      href: "#",
    },
  ];

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <BlurFade inView delay={0}>
              <span className="inline-block text-sm font-medium text-secondary uppercase tracking-wider mb-4">
                Contacto
              </span>
            </BlurFade>
            <TextAnimate 
              animation="blurInUp" 
              by="word" 
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6"
              as="h2"
            >
              ¿Listo para encontrar tu hipoteca ideal?
            </TextAnimate>
            <BlurFade inView delay={0.2}>
              <p className="text-lg text-muted-foreground mb-10">
                Déjanos tus datos y un experto hipotecario se pondrá en contacto
                contigo en menos de 24 horas. Sin compromiso.
              </p>
            </BlurFade>

            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <BlurFade key={index} inView delay={0.1 * index + 0.3}>
                  <a
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <info.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {info.label}
                      </div>
                      <div className="font-medium text-foreground">
                        {info.value}
                      </div>
                    </div>
                  </a>
                </BlurFade>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <BlurFade inView delay={0.2}>
            <Card className="shadow-elevated">
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
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
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
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Teléfono
                      </label>
                      <Input
                        type="tel"
                        placeholder="600 000 000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                        className="bg-background"
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
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="bg-background"
                    />
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
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
