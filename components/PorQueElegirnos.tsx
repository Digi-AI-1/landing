"use client";

import { useInView } from "@/hooks/useInView";
import GlowCard from "@/components/GlowCard";

const razones = [
  {
    icon: "🎯",
    titulo: "Ejecutamos, No Presentamos",
    descripcion:
      "No vas a ver un PowerPoint de 80 slides. Hacemos un diagnóstico en 48hs, te mostramos los números, y si tiene sentido arrancamos. Si no aplica, te lo decimos con honestidad.",
  },
  {
    icon: "🧠",
    titulo: "Experiencia Senior, No Intermediarios",
    descripcion:
      "Los que te hacen el diagnóstico son los mismos que implementan. No hay un comercial que te vende y después te pasa a un equipo junior que recién arranca.",
  },
  {
    icon: "🇦🇷",
    titulo: "Hechos Para el Mercado Argentino",
    descripcion:
      "Entendemos facturación en pesos, proveedores locales, regulaciones que cambian cada trimestre y equipos que necesitan hacer mucho con poco. No aplicamos frameworks importados que acá no funcionan.",
  },
  {
    icon: "⚡",
    titulo: "Velocidad Real",
    descripcion:
      'Primer diagnóstico en 48hs. Primer entregable en 2 semanas. No tenemos 6 meses de "descubrimiento." Si sabemos qué hay que hacer, lo hacemos.',
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
            Implementar tecnología sin entender el negocio es el error más caro que puede cometer
            una empresa. Nosotros empezamos por entender el tuyo.
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
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">{r.descripcion}</p>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
