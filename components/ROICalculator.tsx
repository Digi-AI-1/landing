"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";

function formatARS(n: number): string {
  return new Intl.NumberFormat("es-AR").format(Math.round(n));
}

export default function ROICalculator() {
  const { ref, inView } = useInView(0.08);
  const [hours, setHours] = useState(12);
  const [rate, setRate] = useState(5000);
  const [result, setResult] = useState<{ hours: number; savings: number } | null>(null);
  const [calculating, setCalculating] = useState(false);

  function calculate() {
    setCalculating(true);
    setResult(null);
    setTimeout(() => {
      const h = Math.round(hours * 0.7 * 52);
      setResult({ hours: h, savings: h * rate });
      setCalculating(false);
    }, 1200);
  }

  return (
    <section className="relative py-16 md:py-24 px-6 orb-section">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-64 -right-56 w-[780px] h-[780px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(91,160,255,0.12) 0%, rgba(91,160,255,0.04) 45%, transparent 70%)" }} />
        <div className="absolute -bottom-64 -left-56 w-[740px] h-[740px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(52,216,240,0.09) 0%, rgba(52,216,240,0.03) 45%, transparent 70%)" }} />
      </div>
      <div ref={ref} className="max-w-4xl mx-auto">

        {/* Header */}
        <div
          className={`text-center mb-10 md:mb-14 transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium">
            Calculadora de ROI
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            ¿Cuánto Te Cuesta No Automatizar?
          </h2>
          <p className="text-[var(--color-muted)] text-sm sm:text-lg mx-auto">
            Mové los valores, tocá Calcular, y mirá lo que tu empresa pierde cada año en tareas que una máquina hace mejor.
          </p>
        </div>

        {/* Calculator card */}
        <div
          className={`rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-10 card-glow transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: inView ? "250ms" : "0ms" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

            {/* Inputs */}
            <div className="flex flex-col gap-9">
              {/* Hours slider */}
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-white font-medium">Horas manuales por semana</label>
                  <span className="text-[var(--color-primary)] font-bold font-mono text-xl">
                    {hours}
                    <span className="text-sm text-[var(--color-muted)] font-normal ml-1">hs</span>
                  </span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={60}
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full cursor-pointer accent-[var(--color-primary)]"
                />
                <div className="flex justify-between text-[var(--color-muted)] text-xs mt-2">
                  <span>2hs</span>
                  <span>60hs</span>
                </div>
              </div>

              {/* Rate slider */}
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-white font-medium">Costo hora promedio</label>
                  <span className="text-[var(--color-primary)] font-bold font-mono text-xl">
                    ${formatARS(rate)}
                    <span className="text-sm text-[var(--color-muted)] font-normal ml-1">ARS</span>
                  </span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={25000}
                  step={500}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full cursor-pointer accent-[var(--color-primary)]"
                />
                <div className="flex justify-between text-[var(--color-muted)] text-xs mt-2">
                  <span>$1.000</span>
                  <span>$25.000</span>
                </div>
              </div>

              <button
                onClick={calculate}
                className="w-full py-3 rounded-lg bg-[var(--color-btn)] hover:bg-[var(--color-btn-hover)] text-white font-semibold transition-colors text-sm sm:text-base"
              >
                Calcular Ahorro
              </button>

              <p className="text-[var(--color-muted)] text-xs leading-relaxed">
                Estimación conservadora: 70% de automatización de tareas repetitivas. Resultados reales suelen superar la proyección.
              </p>
            </div>

            {/* Outputs */}
            <div className="flex flex-col gap-4 justify-center">
              {calculating ? (
                <div className="flex flex-col items-center justify-center h-full gap-3">
                  <div className="w-10 h-10 border-3 border-[var(--color-primary)]/20 border-t-[var(--color-primary)] rounded-full animate-spin" />
                  <p className="text-[var(--color-muted)] text-sm">Calculando...</p>
                </div>
              ) : result ? (
                <>
                  <div className="p-5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)]">
                    <div className="text-[var(--color-muted)] text-sm mb-2">Horas recuperables por año</div>
                    <div className="text-3xl sm:text-4xl font-bold text-white font-mono">
                      {result.hours}
                      <span className="text-lg sm:text-xl text-[var(--color-muted)] font-normal ml-1">hs</span>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/25">
                    <div className="text-[var(--color-muted)] text-sm mb-2">Ahorro anual estimado</div>
                    <div className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] font-mono">
                      ${formatARS(result.savings)}
                      <span className="text-lg sm:text-xl text-[var(--color-muted)] font-normal ml-1">ARS</span>
                    </div>
                  </div>

                  <div className="px-5 py-3 rounded-xl border border-[var(--color-border)] flex items-center gap-3">
                    <span className="text-[var(--color-cyan)]">⚡</span>
                    <span className="text-[var(--color-muted)] text-sm">
                      Resultados visibles en{" "}
                      <span className="text-white font-medium">6 semanas</span> de implementación.
                    </span>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-[var(--color-muted)] text-sm text-center">
                    Ajustá los valores y tocá<br /><span className="text-white font-medium">Calcular Ahorro</span> para ver los resultados.
                  </p>
                </div>
              )}
            </div>

          </div>

          {/* CTA row */}
          <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[var(--color-muted)] text-sm text-center sm:text-left">
              Estos números son genéricos. Los reales, con tus datos, suelen ser más altos.
            </p>
            <a
              href="#contacto"
              className="shrink-0 px-6 py-3 rounded-lg bg-[var(--color-btn)] hover:bg-[var(--color-btn-hover)] text-white font-semibold transition-colors text-sm"
            >
              Quiero mi Diagnóstico Gratuito
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
