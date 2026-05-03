"use client";

import { useState } from "react";
import Script from "next/script";
import { useInView } from "@/hooks/useInView";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contacto() {
  const [state, setState] = useState<FormState>("idle");
  const { ref, inView } = useInView(0.08);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");

    const formData = new FormData(e.currentTarget);
    const body = {
      nombre: formData.get("nombre"),
      email: formData.get("email"),
      mensaje: formData.get("mensaje"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <section id="contacto" className="py-16 md:py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">

        {/* Title */}
        <div
          className={`text-center mb-10 md:mb-16 transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Hablemos</h2>
          <p className="text-[var(--color-muted)] text-sm sm:text-lg max-w-3xl mx-auto">
            Si llegaste hasta acá, ya sabés que hay algo en tu operación que la tecnología puede
            resolver mejor. No lo dejes enfriar — en 48hs tenés un diagnóstico concreto y un plan
            accionable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left pillar — Contact form */}
          <div
            className={`rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-8 transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: inView ? "300ms" : "0ms" }}
          >
            <h3 className="text-white font-semibold text-xl mb-2">Contanos Sobre Tu Empresa</h3>
            <p className="text-[var(--color-muted)] text-sm mb-6">
              Dejanos tu consulta y te respondemos en menos de 24hs hábiles.
            </p>

            {state === "success" ? (
              <div className="p-6 rounded-lg border border-[var(--color-cyan)]/30 bg-[var(--color-cyan)]/10 text-center">
                <div className="text-3xl mb-3">✓</div>
                <h4 className="text-white font-semibold text-lg mb-1">¡Mensaje enviado!</h4>
                <p className="text-[var(--color-muted)] text-sm">Te respondemos a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  name="nombre"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-white placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="tu@empresa.com"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-white placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                />
                <textarea
                  name="mensaje"
                  required
                  rows={4}
                  placeholder="Contanos Sobre Tu Empresa y qué necesitás..."
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-white placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
                />
                {state === "error" && (
                  <p className="text-red-400 text-sm text-center">
                    Algo salió mal. Intentá de nuevo.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="w-full py-3 rounded-lg bg-[var(--color-btn)] hover:bg-[var(--color-btn-hover)] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold transition-colors"
                >
                  {state === "loading" ? "Enviando..." : "Enviar Mensaje"}
                </button>
              </form>
            )}
          </div>

          {/* Right pillar — Calendly */}
          <div
            className={`rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-6 flex flex-col transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: inView ? "450ms" : "0ms" }}
          >
            <h3 className="text-white font-semibold text-xl mb-1">¿Listo Para Arrancar?</h3>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
              Agendá 20 minutos. Sin vueltas, directo a tu problema.
            </p>

            <div className="rounded-xl overflow-hidden border border-[var(--color-border)] h-[540px]">
              <div style={{ marginRight: "-15px", height: "540px" }}>
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/ignafb101/consultoria-digiai-clone-clone?hide_event_type_details=1"
                  style={{ minWidth: "280px", height: "540px" }}
                />
              </div>
            </div>

            <Script
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="afterInteractive"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
