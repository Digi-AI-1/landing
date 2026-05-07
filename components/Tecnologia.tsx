"use client";

import { useInView } from "@/hooks/useInView";

const insights = [
  {
    titulo: "El 90% de las 'Transformaciones Digitales' en Argentina Fracasan",
    texto:
      "No fracasan por la tecnología. Fracasan porque se implementan sin entender el negocio. Un modelo de IA sin contexto operativo es un gasto, no una inversión. Nosotros empezamos por tu operación, no por la herramienta.",
  },
  {
    titulo: "Tu Competencia Ya Está Usando IA. No Te lo Va a Contar.",
    texto:
      "Las empresas que integran IA en procesos críticos no lo anuncian. Lo usan como ventaja silenciosa: costos más bajos, decisiones más rápidas, menos errores. Cada trimestre que pasa, la brecha se agranda.",
  },
  {
    titulo: "La Tecnología No Es Cara. Implementarla Mal, Sí.",
    texto:
      "Una licencia de IA cuesta menos que un sueldo junior. El costo real está en elegir mal qué automatizar, en datos sin estructura y en equipos que no saben interpretar los resultados. Ese es el problema que resolvemos, y por eso el diagnóstico va primero.",
  },
];

export default function Tecnologia() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="tecnologia" className="relative py-16 md:py-24 px-6 orb-section">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-64 -right-56 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(91,160,255,0.13) 0%, rgba(91,160,255,0.04) 45%, transparent 70%)" }} />
        <div className="absolute -bottom-64 -left-56 w-[750px] h-[750px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(52,216,240,0.10) 0%, rgba(52,216,240,0.03) 45%, transparent 70%)" }} />
      </div>
      <div ref={ref} className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-10 md:mb-16 transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            La Tecnología Cambió. ¿Tu Operación También?
          </h2>
          <p className="text-[var(--color-muted)] text-sm sm:text-lg max-w-3xl mx-auto">
            Lo que en 2022 requería 20 ingenieros y 18 meses, hoy se implementa en 6 semanas.
            Si tu operación depende de planillas y procesos manuales, el costo de no actuar
            crece cada trimestre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((insight, i) => (
            <div
              key={insight.titulo}
              className={`flex flex-col gap-4 p-5 md:p-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] card-glow transition-all duration-700 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: inView ? `${300 + i * 150}ms` : "0ms" }}
            >
              <div className="h-1 w-12 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-cyan)] rounded-full" />
              <h3 className="text-white font-semibold text-xl">{insight.titulo}</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">{insight.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
