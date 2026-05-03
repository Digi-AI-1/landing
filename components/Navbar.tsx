"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { id: "servicios", label: "Servicios" },
  { id: "nosotros", label: "Nosotros" },
  { id: "por-que", label: "¿Por Qué Elegirnos?" },
  { id: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      let current = "";
      for (const { id } of NAV_LINKS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 80) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 border-b transition-all duration-500 ${
        scrolled
          ? "border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-white font-bold text-xl tracking-tight">
          Digi<span className="text-[var(--color-primary)]">-AI</span>
        </span>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {NAV_LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative pb-1.5 transition-colors duration-200 ${
                activeSection === id
                  ? "text-white"
                  : "text-[var(--color-muted)] hover:text-white"
              }`}
            >
              {label}
              <span
                className={`absolute bottom-0 left-0 h-px bg-[var(--color-primary)] transition-all duration-300 ease-out ${
                  activeSection === id ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="text-sm px-4 py-2.5 rounded-lg bg-[var(--color-btn)] hover:bg-[var(--color-btn-hover)] text-white font-medium transition-colors"
        >
          Hablemos
        </a>
      </div>
    </header>
  );
}
