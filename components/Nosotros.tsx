"use client";

import { useInView } from "@/hooks/useInView";

const creencias = [
  { n: "01", texto: "El problema siempre viene antes que la solución" },
  { n: "02", texto: "Un entregable en 2 semanas vale más que un roadmap de 6 meses" },
  { n: "03", texto: "Los datos que ya tenés son el punto de partida" },
  { n: "04", texto: "La tecnología no transforma empresas. Las personas con criterio, sí" },
];

export default function Nosotros() {
  const { ref, inView } = useInView(0.08);

  return (
    <section id="nosotros" className="py-16 md:py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">

        <div
          className={`mb-10 md:mb-16 transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium">
            Nuestra Filosofía
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl">
            Quiénes Somos
          </h2>
        </div>

        <div
          className={`border-l-2 border-[var(--color-primary)] pl-4 md:pl-8 mb-12 md:mb-20 max-w-4xl transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: inView ? "200ms" : "0ms" }}
        >
          <p className="text-white text-base sm:text-xl md:text-2xl leading-relaxed font-light mb-6">
            La mayoría de los proyectos de transformación digital fallan antes de empezar. No por
            la tecnología — por cómo se plantean. Se vende una solución antes de entender el
            problema. Se implementa una herramienta antes de mapear el proceso. El cliente termina
            con un sistema caro que nadie usa.
          </p>
          <p className="text-[var(--color-muted)] text-sm sm:text-lg leading-relaxed">
            Nuestro punto de partida siempre es el mismo: entender cómo funciona tu negocio antes
            de tocar una sola línea de código. Porque la IA más sofisticada del mundo, aplicada al
            problema equivocado, es solo un gasto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[var(--color-border)]">
          {creencias.map((c, i) => (
            <div
              key={c.n}
              className={`bg-[var(--color-bg)] px-6 py-5 md:py-8 flex flex-col gap-3 transition-all duration-700 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: inView ? `${400 + i * 150}ms` : "0ms" }}
            >
              <span className="text-[var(--color-primary)] font-mono text-sm">{c.n}</span>
              <p className="text-white font-medium text-base leading-snug">{c.texto}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
