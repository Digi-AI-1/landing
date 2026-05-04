"use client";

import { useInView } from "@/hooks/useInView";

const steps = [
  { n: "01", title: "Diagnóstico", desc: "Mapeamos tu operación y encontramos las oportunidades en 48hs." },
  { n: "02", title: "Implementación", desc: "Diseñamos y desplegamos soluciones en semanas, no meses." },
  { n: "03", title: "Resultados", desc: "Medimos impacto real: horas recuperadas, costos reducidos, ROI claro." },
];

export default function Proceso() {
  const { ref, inView } = useInView(0.15);

  return (
    <section className="py-16 md:py-24 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Cómo Funciona</h2>
          <p className="text-[var(--color-muted)] text-sm sm:text-lg max-w-2xl mx-auto">
            Tres pasos. Sin vueltas. Del diagnóstico a los resultados en semanas.
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-0">
          {/* Desktop connector line */}
          <div className="hidden md:block absolute top-6 left-[16.67%] right-[16.67%] h-0.5">
            <div
              className={`h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-cyan)] transition-transform duration-1200 ease-out origin-left ${
                inView ? "scale-x-100" : "scale-x-0"
              }`}
              style={{ transitionDelay: "500ms" }}
            />
          </div>

          {steps.map((step, i) => (
            <div
              key={step.n}
              className={`flex-1 text-center relative z-10 transition-all duration-700 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: inView ? `${300 + i * 250}ms` : "0ms" }}
            >
              <div className="w-12 h-12 mx-auto rounded-full border-2 border-[var(--color-primary)] bg-[var(--color-surface)] flex items-center justify-center mb-4">
                <span className="text-[var(--color-primary)] font-bold font-mono text-sm">{step.n}</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
