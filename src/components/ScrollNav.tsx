import { useEffect, useState } from "react";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "calculadora", label: "Calculadora" },
  { id: "como-trabajamos", label: "Cómo trabajamos" },
  { id: "nosotros", label: "Nosotros" },
  { id: "equipo", label: "Equipo" },
  { id: "blog", label: "Blog" },
  { id: "contacto", label: "Contacto" },
];

const ScrollNav = () => {
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="fixed right-5 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3 hidden md:flex">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          title={label}
          className={`block w-2 h-2 rounded-full transition-all duration-300 ${
            active === id
              ? "bg-primary scale-150"
              : "bg-primary/30 hover:bg-primary/60"
          }`}
        />
      ))}
    </nav>
  );
};

export default ScrollNav;
