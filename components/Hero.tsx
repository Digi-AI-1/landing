"use client";

import { useState, useEffect, useCallback } from "react";
import MetricsTicker from "@/components/MetricsTicker";

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
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center pt-16 px-6">

      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Primary orb — top-right, slow drift */}
        <div
          className="absolute -top-64 -right-64 w-[900px] h-[900px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(91,160,255,0.18) 0%, rgba(91,160,255,0.06) 45%, transparent 70%)",
            animation: "hero-orb-1 24s ease-in-out infinite",
          }}
        />
        {/* Cyan orb — bottom-left, different speed */}
        <div
          className="absolute -bottom-64 -left-64 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(52,216,240,0.13) 0%, rgba(52,216,240,0.04) 45%, transparent 70%)",
            animation: "hero-orb-2 30s ease-in-out infinite",
          }}
        />
        {/* Faint center glow behind headline */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(91,160,255,0.07) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block mb-6 px-3 py-1 rounded-full border border-[var(--color-cyan)]/30 bg-[var(--color-cyan)]/10 text-[var(--color-cyan)] text-xs sm:text-sm font-medium">
            Consultoría Digital Especializada para Empresas Argentinas
          </div>
          <h1 className="text-2xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight uppercase tracking-tight">
            Transformá tu empresa<br />
            con <span className="text-[var(--color-primary)]">inteligencia digital</span>
          </h1>
        </div>

        <div
          className={`max-w-2xl mx-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:p-6 font-mono text-xs sm:text-sm transition-opacity duration-500 ${fading ? "opacity-0" : "opacity-100"}`}
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

          <div className="relative">
            <div className="flex flex-col gap-2">
              {scenario.lines.map((line, i) => (
                <div
                  key={i}
                  className={`transition-all duration-500 ${!analyzing && i < visibleLines ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                >
                  <span className="text-green-400">✓</span>{" "}
                  <span className="text-[var(--color-text)]">{line.text}</span>
                </div>
              ))}
            </div>
            <div className={`absolute top-0 left-0 text-[var(--color-muted)] transition-opacity duration-300 ${analyzing ? "opacity-100 animate-pulse" : "opacity-0"}`}>
              &gt; Analizando procesos...
            </div>
          </div>
        </div>

        <p className="text-center text-[var(--color-muted)] mt-8 text-sm sm:text-lg max-w-xl mx-auto">
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

      {/* Ticker pinned to bottom of hero, inside the gap */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <MetricsTicker />
      </div>

    </section>
  );
}
