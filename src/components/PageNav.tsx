import { useFullPage } from "@/components/FullPage";

const labels = [
  "Inicio", "Servicios", "Calculadora", "Cómo trabajamos",
  "Nosotros", "Equipo", "Blog", "Contacto",
];

const PageNav = () => {
  const { current, total, goTo } = useFullPage();

  return (
    <nav className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          title={labels[i] ?? `Página ${i + 1}`}
          onClick={() => goTo(i)}
          className="block rounded-full transition-all duration-300 focus:outline-none"
          style={{
            width: current === i ? "10px" : "8px",
            height: current === i ? "10px" : "8px",
            backgroundColor: current === i
              ? "hsl(var(--primary))"
              : "hsl(var(--primary) / 0.30)",
            transform: current === i ? "scale(1.3)" : "scale(1)",
          }}
        />
      ))}
    </nav>
  );
};

export default PageNav;
