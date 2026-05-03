"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contacto() {
  const [state, setState] = useState<FormState>("idle");

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
    <section id="contacto" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Hablemos</h2>
          <p className="text-[var(--color-muted)] text-lg">
            Elegí Cómo Querés Avanzar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left pillar — Contact form */}
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
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

          {/* Right pillar — Calendly CTA */}
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 flex flex-col">
            <h3 className="text-white font-semibold text-xl mb-1">¿Listo Para Arrancar?</h3>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
              Agendá 20 minutos. Sin vueltas, directo a tu problema.
            </p>

            {/* Calendly wrapper — clips bottom, masks white side bars */}
            <div className="relative -mx-6 -mb-6 overflow-hidden rounded-b-xl" style={{ height: "460px" }}>
              {/* Left mask */}
              <div className="absolute left-0 top-0 bottom-0 w-10 bg-[var(--color-surface)] z-10" />
              {/* Right mask */}
              <div className="absolute right-0 top-0 bottom-0 w-10 bg-[var(--color-surface)] z-10" />
              {/* Bottom mask */}
              <div className="absolute left-0 right-0 bottom-0 h-10 bg-[var(--color-surface)] z-10" />

              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/ignafb101/consultoria-digiai-clone-clone?hide_event_type_details=1"
                style={{ minWidth: "280px", height: "460px" }}
              />
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
