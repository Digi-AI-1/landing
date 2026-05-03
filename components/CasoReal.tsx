"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

function useCounter(target: number, decimals: number, active: boolean, delay = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let rafId = 0;
    const timeout = setTimeout(() => {
      const duration = 1600;
      const startTime = performance.now();
      function tick(now: number) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(parseFloat((eased * target).toFixed(decimals)));
        if (progress < 1) rafId = requestAnimationFrame(tick);
      }
      rafId = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafId);
    };
  }, [active, target, decimals, delay]);

  return value;
}

function TimeStat({ active }: { active: boolean }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (!active) return;
    const t1 = setTimeout(() => setStage(1), 600);
    const t2 = setTimeout(() => setStage(2), 1100);
    const t3 = setTimeout(() => setStage(3), 1500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [active]);

  return (
    <span className="inline-flex items-center gap-1 text-base sm:text-2xl font-bold font-mono">
      <span
        className={`transition-opacity duration-500 text-[var(--color-muted)] line-through decoration-red-400/60 ${
          stage >= 1 ? "opacity-100" : "opacity-0"
        }`}
      >
        12hs
      </span>
      <span
        className={`transition-opacity duration-300 text-[var(--color-muted)] ${
          stage >= 2 ? "opacity-100" : "opacity-0"
        }`}
      >
        →
      </span>
      <span
        className={`transition-opacity duration-500 text-[var(--color-primary)] ${
          stage >= 3 ? "opacity-100" : "opacity-0"
        }`}
      >
        4min
      </span>
    </span>
  );
}

export default function CasoReal() {
  const { ref, inView } = useInView(0.05);

  const pct = useCounter(73, 0, inView, 700);
  const semanas = useCounter(6, 0, inView, 900);
  const roi = useCounter(2.1, 1, inView, 1100);

  return (
    <section className="py-16 md:py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">

        <div
          className={`text-center mb-10 md:mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-[var(--color-cyan)]/30 bg-[var(--color-cyan)]/10 text-[var(--color-cyan)] text-sm font-medium">
            Caso Real
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            De 12 Horas de Reportes a 4 Minutos
          </h2>
          <p className="text-[var(--color-muted)] text-lg max-w-3xl mx-auto">
            Un pipeline de datos, un modelo predictivo y 6 semanas de trabajo. Esto es lo que pasa
            cuando la IA se aplica al problema correcto.
          </p>
        </div>

        <div
          className={`rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-8 md:p-12 card-glow transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: inView ? "150ms" : "0ms" }}
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-10">
            <div className="flex-1">
              <div className="text-[var(--color-cyan)] text-sm font-medium mb-2 uppercase tracking-wider">
                Empresa
              </div>
              <p className="text-white text-base sm:text-lg">
                Distribuidora en Rosario · 45 empleados · Sector alimenticio
              </p>
            </div>
            <div className="flex-1">
              <div className="text-[var(--color-cyan)] text-sm font-medium mb-2 uppercase tracking-wider">
                Problema
              </div>
              <p className="text-[var(--color-muted)]">
                12 horas semanales en reportes manuales, errores frecuentes de stock, decisiones
                basadas en intuición en vez de datos.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-10">
            <div className="flex-1">
              <div className="text-[var(--color-cyan)] text-sm font-medium mb-2 uppercase tracking-wider">
                Solución
              </div>
              <p className="text-[var(--color-muted)]">
                Pipeline de datos automatizado + modelo de IA predictiva para gestión de inventario
                y generación de reportes en tiempo real.
              </p>
            </div>
            <div className="flex-1">
              <div className="text-[var(--color-cyan)] text-sm font-medium mb-2 uppercase tracking-wider">
                Impacto
              </div>
              <p className="text-[var(--color-muted)]">
                Equipo reasignado a tareas de valor. Decisiones basadas en datos. Cero sorpresas de
                stock en temporada alta.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                display: <TimeStat active={inView} />,
                label: "Tiempo de Reporting",
                delay: 550,
              },
              {
                display: <>{pct}%</>,
                label: "Reducción de Quiebre de Stock",
                delay: 650,
              },
              {
                display: <>{semanas} semanas</>,
                label: "Implementación Completa",
                delay: 750,
              },
              {
                display: <>{roi}x</>,
                label: "ROI en el Primer Año",
                delay: 850,
              },
            ].map(({ display, label, delay }) => (
              <div
                key={label}
                className={`text-center p-4 rounded-lg bg-[var(--color-bg)] transition-all duration-500 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
              >
                <div className="text-lg sm:text-2xl font-bold text-[var(--color-primary)] mb-1 min-h-[2rem] flex items-center justify-center">
                  {display}
                </div>
                <div className="text-[var(--color-muted)] text-xs sm:text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <p
          className={`text-center text-[var(--color-muted)] mt-10 text-lg transition-all duration-700 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: inView ? "300ms" : "0ms" }}
        >
          ¿Querés ver los números reales para tu empresa?{" "}
          <a href="#contacto" className="text-[var(--color-primary)] hover:underline font-medium">
            Hacemos un diagnóstico gratuito en 48hs.
          </a>
        </p>
      </div>
    </section>
  );
}
