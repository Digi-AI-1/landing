"use client";

import { useInView } from "@/hooks/useInView";
import GlowCard from "@/components/GlowCard";

const servicios = [
  {
    icon: "⚡",
    titulo: "Diagnóstico y Rediseño de Procesos",
    descripcion:
      "Entramos, mapeamos, y en 48hs te mostramos exactamente dónde se te van horas y plata. Sin supuestos, con datos. El resultado: un plan accionable con prioridades claras y ROI estimado por iniciativa.",
  },
  {
    icon: "🤖",
    titulo: "Implementación de IA Aplicada",
    descripcion:
      "Identificamos las 2 o 3 tareas donde un modelo entrenado genera impacto real y lo implementamos hasta que funcione sin nosotros. Sin pilotos eternos. Sin dependencia. Resultados medibles en semanas.",
  },
  {
    icon: "📊",
    titulo: "Inteligencia de Negocios",
    descripcion:
      "Tus datos ya existen. El problema es que viven en 5 planillas que nadie cruza. Construimos dashboards en tiempo real que te muestran qué está pasando, qué va a pasar, y qué decisión tomar antes de que sea tarde.",
  },
  {
    icon: "🌐",
    titulo: "Plataformas Digitales",
    descripcion:
      "Sitios, apps y sistemas internos que no son 'páginas bonitas'. Son plataformas que convierten, retienen y escalan. Cada funcionalidad tiene un KPI de negocio detrás, o no se construye.",
  },
  {
    icon: "🛒",
    titulo: "E-Commerce de Alto Rendimiento",
    descripcion:
      "Tiendas que venden, no que existen. Mercado Pago y medios locales integrados, logística automatizada, y un tablero que te dice por qué compraron y por qué abandonaron el carrito.",
  },
  {
    icon: "📈",
    titulo: "Crecimiento y Adquisición Digital",
    descripcion:
      "Campañas donde cada peso se rastrea de punta a punta. No 'manejamos redes.' Diseñamos máquinas de generación de demanda con atribución real y ROI medible antes de escalar.",
  },
];

export default function Servicios() {
  const { ref, inView } = useInView(0.08);

  return (
    <section id="servicios" className="relative py-16 md:py-24 px-6 orb-section">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-64 -left-56 w-[740px] h-[740px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(52,216,240,0.09) 0%, rgba(52,216,240,0.03) 45%, transparent 70%)" }} />
        <div className="absolute -bottom-64 -right-56 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(91,160,255,0.13) 0%, rgba(91,160,255,0.04) 45%, transparent 70%)" }} />
      </div>
      <div ref={ref} className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-10 md:mb-16 transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Nuestros Servicios</h2>
          <p className="text-[var(--color-muted)] text-sm sm:text-lg max-w-3xl mx-auto">
            Cada servicio arranca con un problema de negocio. No vendemos tecnología: vendemos
            horas recuperadas, errores eliminados y decisiones más rápidas.
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
              <GlowCard className="h-full p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary)]/40 transition-colors card-glow">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{s.titulo}</h3>
                <p className="text-[var(--color-muted)] text-sm sm:text-base leading-relaxed">{s.descripcion}</p>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
