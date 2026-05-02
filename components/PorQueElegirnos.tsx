const razones = [
  {
    icon: "🎯",
    titulo: "Enfoque en resultados",
    descripcion: "Placeholder — no vendemos horas, vendemos resultados medibles para tu negocio.",
  },
  {
    icon: "🇦🇷",
    titulo: "Conocemos el mercado local",
    descripcion: "Placeholder — entendemos la realidad argentina: volatilidad, costos y oportunidades únicas.",
  },
  {
    icon: "🔧",
    titulo: "Tecnología de punta",
    descripcion: "Placeholder — usamos las herramientas más modernas adaptadas a tu escala y presupuesto.",
  },
  {
    icon: "🤝",
    titulo: "Acompañamiento real",
    descripcion: "Placeholder — estamos disponibles para vos, no somos una agencia que desaparece post-proyecto.",
  },
];

export default function PorQueElegirnos() {
  return (
    <section id="por-que" className="py-24 px-6 bg-[var(--color-surface)]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">¿Por qué elegirnos?</h2>
          <p className="text-[var(--color-muted)] text-lg max-w-xl mx-auto">
            Placeholder — breve argumento de venta sobre la diferenciación del equipo.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {razones.map((r) => (
            <div
              key={r.titulo}
              className="flex gap-5 p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]"
            >
              <span className="text-3xl shrink-0">{r.icon}</span>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">{r.titulo}</h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{r.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
