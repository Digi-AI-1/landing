"use client";

import { useState, useEffect, useCallback, useRef } from "react";

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

const CYCLE_MS = 14200;

export default function Hero() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const [statusText, setStatusText] = useState<string | null>("Conectando con datos de la empresa...");
  const [fading, setFading] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const scenario = scenarios[scenarioIndex];

  const schedule = useCallback((fn: () => void, ms: number) => {
    timers.current.push(setTimeout(fn, ms));
  }, []);

  const runAnimation = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];

    setStatusText("Conectando con datos de la empresa...");
    setVisibleLines(0);
    setFading(false);

    schedule(() => setStatusText("Mapeando procesos operativos..."), 1400);
    schedule(() => setStatusText("Analizando oportunidades de automatización..."), 3000);
    schedule(() => setStatusText("Generando diagnóstico..."), 4600);

    const analysisEnd = 5800;
    schedule(() => setStatusText(null), analysisEnd);

    const lineDelays = [600, 1200, 900, 1400];
    let t = analysisEnd;
    lineDelays.forEach((d, i) => {
      t += d;
      schedule(() => setVisibleLines(i + 1), t);
    });

    schedule(() => setFading(true), t + 3500);
    schedule(() => setScenarioIndex((prev) => (prev + 1) % scenarios.length), t + 4100);
  }, [schedule]);

  useEffect(() => {
    runAnimation();
    const interval = setInterval(runAnimation, CYCLE_MS);
    return () => {
      clearInterval(interval);
      timers.current.forEach(clearTimeout);
    };
  }, [runAnimation]);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center pt-16 pb-20 px-6">

      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-64 -right-64 w-[900px] h-[900px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(91,160,255,0.18) 0%, rgba(91,160,255,0.06) 45%, transparent 70%)",
            animation: "hero-orb-1 24s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-64 -left-64 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(52,216,240,0.13) 0%, rgba(52,216,240,0.04) 45%, transparent 70%)",
            animation: "hero-orb-2 30s ease-in-out infinite",
          }}
        />
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

          {statusText ? (
            <div className="text-[var(--color-muted)]">
              &gt; {statusText}
              <span className="terminal-cursor">▌</span>
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

    </section>
  );
}
