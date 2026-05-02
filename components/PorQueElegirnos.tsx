const razones = [
  {
    icon: "🎯",
    titulo: "Cobramos por resultados, no por horas",
    descripcion: "Nuestros proyectos tienen métricas de éxito definidas desde el día uno. Si no movemos tus números, no cumplimos. Así de simple.",
  },
  {
    icon: "🇦🇷",
    titulo: "Pensados para la realidad argentina",
    descripcion: "Trabajamos con costos en pesos, entendemos la volatilidad, los plazos locales y las restricciones que las consultoras de afuera ni registran.",
  },
  {
    icon: "🔧",
    titulo: "Tecnología global, escala local",
    descripcion: "Usamos las mismas herramientas que Silicon Valley pero calibradas para empresas de 10 a 500 empleados. Sin sobredimensionar, sin subestimar.",
  },
  {
    icon: "🤝",
    titulo: "No desaparecemos después del proyecto",
    descripcion: "Seguimos disponibles después de la entrega. Somos un equipo chico a propósito. Cada cliente importa, y se nota en el trato.",
  },
];

export default function PorQueElegirnos() {
  return (
    <section id="por-que" className="py-24 px-6 bg-[var(--color-surface)]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">¿Por qué elegirnos?</h2>
          <p className="text-[var(--color-muted)] text-lg max-w-xl mx-auto">
            No somos una agencia grande con 200 clientes. Somos un equipo especializado que elige pocos proyectos y los ejecuta en serio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {razones.map((r) => (
            <div
              key={r.titulo}
              className="flex gap-5 p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] card-glow"
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
