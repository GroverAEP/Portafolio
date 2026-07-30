"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "inicio", label: "inicio" },
  { id: "stack", label: "stack" },
  { id: "proyectos", label: "proyectos" },
  { id: "experiencia", label: "experiencia" },
  { id: "formacion", label: "formacion" },
  { id: "contacto", label: "contacto" },
];

export default function Nav() {
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur"
      aria-label="Navegación principal"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex items-center gap-1 overflow-x-auto py-3 font-mono text-xs sm:text-sm scrollbar-none">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`whitespace-nowrap rounded px-2.5 py-1.5 transition-colors ${
                active === s.id
                  ? "bg-panel2 text-amber"
                  : "text-dim hover:text-text"
              }`}
            >
              <span className="text-dim">$ cd</span>{" "}
              <span>~/{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
