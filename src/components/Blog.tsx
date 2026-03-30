import { ArrowRight, Calendar, User } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";

const blogPosts = [
  {
    id: 1,
    title: "¿Hipoteca fija, variable o mixta? Guía completa 2026",
    excerpt:
      "Descubre las diferencias entre los tipos de hipoteca y cuál se adapta mejor a tu situación financiera.",
    author: "Equipo CredHipo",
    date: "20 Ene 2026",
    category: "Guías",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Euríbor 2026: Previsiones y cómo afecta a tu hipoteca",
    excerpt:
      "Análisis de las tendencias del Euríbor y consejos para gestionar tu hipoteca variable.",
    author: "Equipo CredHipo",
    date: "15 Ene 2026",
    category: "Actualidad",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "10 errores comunes al solicitar una hipoteca",
    excerpt:
      "Evita estos fallos frecuentes que pueden hacer que pierdas dinero o que te denieguen la financiación.",
    author: "Equipo CredHipo",
    date: "10 Ene 2026",
    category: "Consejos",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 lg:py-32 bg-credipo-cream-dark">
      <div className="container mx-auto px-4">
        <BlurFade inView delay={0}>
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="inline-block text-sm font-medium text-secondary uppercase tracking-wider mb-4">
                Blog
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
                Últimos artículos
              </h2>
            </div>
            <Button variant="outline" className="self-start md:self-auto">
              Ver todos los artículos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden hover:shadow-elevated transition-all duration-300 bg-card h-full">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default Blog;
