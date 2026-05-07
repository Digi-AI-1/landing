"use client";

import { useInView } from "@/hooks/useInView";
import GlowCard from "@/components/GlowCard";

const razones = [
  {
    icon: "🎯",
    titulo: "Ejecutamos, No Presentamos",
    descripcion:
      "No vas a ver un PowerPoint de 80 slides. En 48hs tenés un diagnóstico con números, prioridades y un plan de acción. Si el proyecto no tiene sentido, te lo decimos y no te cobramos el diagnóstico.",
  },
  {
    icon: "🧠",
    titulo: "Experiencia Senior, No Intermediarios",
    descripcion:
      "Los que te hacen el diagnóstico son los mismos que implementan. No hay un comercial que te vende y un equipo junior que ejecuta. Hablás con quien decide y con quien construye.",
  },
  {
    icon: "🇦🇷",
    titulo: "Hechos Para el Mercado Argentino",
    descripcion:
      "Facturación en pesos, proveedores locales, regulaciones que cambian cada trimestre, y equipos que hacen mucho con poco. Conocemos las restricciones porque las vivimos. No importamos frameworks, los adaptamos.",
  },
  {
    icon: "⚡",
    titulo: "Velocidad Real",
    descripcion:
      "Primer diagnóstico en 48hs. Primer entregable en 2 semanas. Implementación completa en 6. No tenemos fase de 'descubrimiento' de 3 meses. Si sabemos qué hay que hacer, arrancamos.",
  },
];

export default function PorQueElegirnos() {
  const { ref, inView } = useInView(0.08);

  return (
    <section id="por-que" className="relative py-16 md:py-24 px-6 orb-section">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-64 -left-56 w-[760px] h-[760px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(52,216,240,0.10) 0%, rgba(52,216,240,0.03) 45%, transparent 70%)" }} />
        <div className="absolute -bottom-64 -right-56 w-[760px] h-[760px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(91,160,255,0.12) 0%, rgba(91,160,255,0.04) 45%, transparent 70%)" }} />
      </div>
      <div ref={ref} className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-10 md:mb-16 transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">¿Por Qué Elegirnos?</h2>
          <p className="text-[var(--color-muted)] text-sm sm:text-lg max-w-2xl mx-auto">
            No somos una software factory que busca proyectos largos. Somos consultores que
            resuelven problemas rápido y se pagan solos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {razones.map((r, i) => (
            <div
              key={r.titulo}
              className={`transition-all duration-700 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: inView ? `${300 + i * 150}ms` : "0ms" }}
            >
              <GlowCard className="flex gap-5 p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary)]/40 transition-colors card-glow h-full">
                <span className="text-3xl shrink-0 w-10 text-center">{r.icon}</span>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{r.titulo}</h3>
                  <p className="text-[var(--color-muted)] text-sm sm:text-base leading-relaxed">{r.descripcion}</p>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
