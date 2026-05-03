"use client";

import { useState, useEffect, useCallback } from "react";

const scenarios = [
  {
    industry: "Distribuidora de alimentos · 45 empleados",
    lines: [
      { type: "check", text: "3 flujos de trabajo con alto potencial de automatización" },
      { type: "check", text: "23hs semanales recuperables en reporting manual" },
      { type: "check", text: "ROI proyectado: 2.4x en los primeros 6 meses" },
      { type: "check", text: "Prioridad recomendada: digitalizar la cadena de despacho" },
    ],
  },
  {
    industry: "E-commerce de indumentaria · 20 empleados",
    lines: [
      { type: "check", text: "Gestión de inventario con 34% de sobrestock eliminable" },
      { type: "check", text: "Atención al cliente automatizable en un 60%" },
      { type: "check", text: "Ahorro estimado: $850.000 ARS/mes en operaciones" },
      { type: "check", text: "Oportunidad detectada: personalización de ofertas con IA predictiva" },
    ],
  },
  {
    industry: "Estudio contable · 12 empleados",
    lines: [
      { type: "check", text: "Carga de datos manual reemplazable con extracción automática" },
      { type: "check", text: "15hs semanales en tareas repetitivas de conciliación" },
      { type: "check", text: "Tiempo de cierre mensual reducible de 5 días a 1" },
      { type: "check", text: "Quick win identificado: automatización de liquidaciones de IVA" },
    ],
  },
];

export default function Hero() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const [analyzing, setAnalyzing] = useState(true);
  const [fading, setFading] = useState(false);

  const scenario = scenarios[scenarioIndex];

  const runAnimation = useCallback(() => {
    setAnalyzing(true);
    setVisibleLines(0);
    setFading(false);

    const analyzeTimer = setTimeout(() => {
      setAnalyzing(false);
      let line = 0;
      const lineInterval = setInterval(() => {
        line++;
        setVisibleLines(line);
        if (line >= scenarios[0].lines.length) {
          clearInterval(lineInterval);
          const fadeTimer = setTimeout(() => {
            setFading(true);
            const nextTimer = setTimeout(() => {
              setScenarioIndex((prev) => (prev + 1) % scenarios.length);
            }, 600);
            return () => clearTimeout(nextTimer);
          }, 3000);
          return () => clearTimeout(fadeTimer);
        }
      }, 800);
      return () => clearInterval(lineInterval);
    }, 1500);

    return () => clearTimeout(analyzeTimer);
  }, []);

  useEffect(() => {
    runAnimation();
    const interval = setInterval(() => {
      runAnimation();
    }, 10500);
    return () => clearInterval(interval);
  }, [runAnimation]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <div className="inline-block mb-6 px-3 py-1 rounded-full border border-[var(--color-cyan)]/30 bg-[var(--color-cyan)]/10 text-[var(--color-cyan)] text-sm font-medium">
            Consultoría Digital Especializada para Empresas Argentinas
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight uppercase tracking-tight">
            Transformá tu empresa<br />
            con <span className="text-[var(--color-primary)]">inteligencia digital</span>
          </h1>
        </div>

        <div
          className={`max-w-2xl mx-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 font-mono text-sm transition-opacity duration-500 ${fading ? "opacity-0" : "opacity-100"}`}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-2 text-[var(--color-muted)] text-xs">digi-ai diagnóstico</span>
          </div>

          <div className="text-[var(--color-cyan)] mb-3">
            <span className="text-[var(--color-muted)]">&gt; Industria:</span> {scenario.industry}
          </div>

          {analyzing ? (
            <div className="text-[var(--color-muted)] animate-pulse">
              &gt; Analizando procesos...
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {scenario.lines.map((line, i) => (
                <div
                  key={i}
                  className={`transition-all duration-500 ${i < visibleLines ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                >
                  <span className="text-green-400">✓</span>{" "}
                  <span className="text-[var(--color-text)]">{line.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <p className="text-center text-[var(--color-muted)] mt-8 text-lg max-w-xl mx-auto">
          Esto no es un video. Es lo que hacemos. Pero con <span className="text-white font-medium">tus datos</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="#contacto"
            className="px-8 py-4 rounded-lg bg-[var(--color-btn)] hover:bg-[var(--color-btn-hover)] text-white font-semibold text-lg transition-colors text-center"
          >
            Quiero un Diagnóstico
          </a>
          <a
            href="#tecnologia"
            className="px-8 py-4 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 text-white font-semibold text-lg transition-colors text-center"
          >
            Cómo Funciona
          </a>
        </div>
      </div>
    </section>
  );
}
