"use client";

import { useState } from "react";

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
    <section id="contacto" className="py-24 px-6 bg-[var(--color-surface)]/30">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Hablemos</h2>
          <p className="text-[var(--color-muted)] text-lg">
            Contanos sobre tu proyecto y te respondemos a la brevedad.
          </p>
        </div>

        {state === "success" ? (
          <div className="p-8 rounded-xl border border-[var(--color-cyan)]/30 bg-[var(--color-cyan)]/10 text-center">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-white font-semibold text-xl mb-2">¡Mensaje enviado!</h3>
            <p className="text-[var(--color-muted)]">Te respondemos en menos de 24 horas hábiles.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-sm text-[var(--color-muted)] mb-2" htmlFor="nombre">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                placeholder="Tu nombre"
                className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-white placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-[var(--color-muted)] mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="tu@empresa.com"
                className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-white placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-[var(--color-muted)] mb-2" htmlFor="mensaje">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={5}
                placeholder="Contanos sobre tu empresa y qué necesitás..."
                className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-white placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
              />
            </div>

            {state === "error" && (
              <p className="text-red-400 text-sm text-center">
                Algo salió mal. Por favor intentá de nuevo o escribinos directamente.
              </p>
            )}

            <button
              type="submit"
              disabled={state === "loading"}
              className="w-full py-4 rounded-lg bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-lg transition-colors"
            >
              {state === "loading" ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
