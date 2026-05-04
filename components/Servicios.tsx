"use client";

import { useInView } from "@/hooks/useInView";

const servicios = [
  {
    icon: "⚡",
    titulo: "Diagnóstico y Rediseño de Procesos",
    descripcion:
      "Entramos, mapeamos cómo opera tu empresa, y te mostramos exactamente dónde estás perdiendo tiempo y plata. Sin supuestos. Con datos. En 48hs tenés un plan accionable.",
  },
  {
    icon: "🤖",
    titulo: "Implementación de IA Aplicada",
    descripcion:
      "Identificamos las 2 o 3 tareas de tu operación donde un modelo entrenado genera impacto real y lo implementamos hasta que funcione sin nosotros. Nada de pilotos eternos.",
  },
  {
    icon: "📊",
    titulo: "Inteligencia de Negocios",
    descripcion:
      "Tus datos ya existen. El problema es que están en 5 planillas distintas y nadie los cruza. Construimos dashboards que te muestran qué está pasando y qué decisión tomar.",
  },
  {
    icon: "🌐",
    titulo: "Plataformas Digitales",
    descripcion:
      'Sitios, apps y sistemas internos. No hacemos "páginas bonitas." Hacemos plataformas que convierten, retienen y escalan. Cada funcionalidad tiene un motivo de negocio detrás.',
  },
  {
    icon: "🛒",
    titulo: "E-Commerce de Alto Rendimiento",
    descripcion:
      "Tiendas que venden, no que existen. Medios de pago argentinos integrados, logística automatizada, y métricas que te dicen por qué compraron y por qué no.",
  },
  {
    icon: "📈",
    titulo: "Crecimiento y Adquisición Digital",
    descripcion:
      'Campañas donde cada peso se rastrea de punta a punta. No manejamos "redes sociales." Diseñamos máquinas de generación de demanda con ROI medible.',
  },
];

export default function Servicios() {
  const { ref, inView } = useInView(0.08);

  return (
    <section id="servicios" className="relative overflow-hidden py-16 md:py-24 px-6">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-52 -left-52 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(91,160,255,0.10) 0%, rgba(91,160,255,0.03) 45%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-44 -right-44 w-[550px] h-[550px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(52,216,240,0.08) 0%, rgba(52,216,240,0.02) 45%, transparent 70%)" }}
        />
      </div>
      <div ref={ref} className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-10 md:mb-16 transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Nuestros Servicios</h2>
          <p className="text-[var(--color-muted)] text-sm sm:text-lg max-w-3xl mx-auto">
            Desde automatización de procesos con IA hasta plataformas que convierten datos en
            decisiones. Tu negocio funciona — ahora imaginalo funcionando con inteligencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s, i) => (
            <div
              key={s.titulo}
              className={`transition-all duration-700 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: inView ? `${300 + i * 150}ms` : "0ms" }}
            >
              <div className="h-full p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary)]/40 transition-colors card-glow">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{s.titulo}</h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{s.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
