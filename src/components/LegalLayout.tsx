import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Section {
  title: string;
  content: React.ReactNode;
}

interface Props {
  title: string;
  subtitle?: string;
  lastUpdated: string;
  sections: Section[];
}

const LegalLayout = ({ title, subtitle, lastUpdated, sections }: Props) => (
  <div className="min-h-screen bg-background flex flex-col">
    <Header />
    <main className="flex-1 container mx-auto px-4 py-32 max-w-3xl">
      <div className="mb-10">
        <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-6 inline-block">
          ← Volver al inicio
        </a>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">{title}</h1>
        {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        <p className="text-xs text-muted-foreground mt-2">Última actualización: {lastUpdated}</p>
      </div>

      <div className="space-y-10 font-body text-foreground/80 leading-relaxed">
        {sections.map((s, i) => (
          <section key={i}>
            <h2 className="text-lg font-heading font-semibold text-foreground mb-3">{s.title}</h2>
            <div className="space-y-3 text-sm md:text-base">{s.content}</div>
          </section>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default LegalLayout;
