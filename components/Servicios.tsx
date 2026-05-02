const servicios = [
  {
    icon: "⚡",
    titulo: "Transformación Digital",
    descripcion: "Mapeamos tus procesos, identificamos los cuellos de botella y diseñamos un plan de digitalización que se paga solo en los primeros meses.",
  },
  {
    icon: "🤖",
    titulo: "Inteligencia Artificial",
    descripcion: "Implementamos modelos de IA donde realmente importan: automatización de tareas repetitivas, análisis predictivo y asistentes internos que trabajan 24/7.",
  },
  {
    icon: "📊",
    titulo: "Estrategia de Datos",
    descripcion: "Convertimos tus datos desordenados en dashboards accionables. Dejás de decidir por instinto y empezás a decidir con evidencia.",
  },
  {
    icon: "🌐",
    titulo: "Presencia Digital",
    descripcion: "Sitios web, aplicaciones y plataformas diseñadas para convertir visitantes en clientes. Rápidas, profesionales y optimizadas para posicionamiento.",
  },
  {
    icon: "🛒",
    titulo: "E-Commerce",
    descripcion: "Tiendas online que venden de verdad: integraciones con medios de pago locales, logística automatizada y métricas de conversión en tiempo real.",
  },
  {
    icon: "📈",
    titulo: "Marketing Digital",
    descripcion: "Campañas de adquisición con presupuesto optimizado, SEO técnico y estrategias de crecimiento medibles. Cada peso invertido tiene un retorno claro.",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 px-6 bg-[var(--color-surface)]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Nuestros Servicios</h2>
          <p className="text-[var(--color-muted)] text-lg max-w-xl mx-auto">
            Soluciones digitales completas para llevar tu negocio al siguiente nivel.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s) => (
            <div
              key={s.titulo}
              className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary)]/40 transition-colors"
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{s.titulo}</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">{s.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
