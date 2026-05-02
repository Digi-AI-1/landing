const servicios = [
  {
    icon: "⚡",
    titulo: "Transformación Digital",
    descripcion: "Placeholder — descripción del servicio de transformación digital para tu empresa.",
  },
  {
    icon: "🤖",
    titulo: "Inteligencia Artificial",
    descripcion: "Placeholder — descripción de implementación de IA y automatización de procesos.",
  },
  {
    icon: "📊",
    titulo: "Estrategia de Datos",
    descripcion: "Placeholder — descripción de análisis de datos y toma de decisiones basada en métricas.",
  },
  {
    icon: "🌐",
    titulo: "Presencia Digital",
    descripcion: "Placeholder — descripción de desarrollo web, apps y posicionamiento online.",
  },
  {
    icon: "🛒",
    titulo: "E-Commerce",
    descripcion: "Placeholder — descripción de desarrollo y optimización de tiendas online, integraciones y automatización de ventas.",
  },
  {
    icon: "📈",
    titulo: "Marketing Digital",
    descripcion: "Placeholder — descripción de campañas, SEO y estrategias de crecimiento.",
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
