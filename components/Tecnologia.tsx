const insights = [
  {
    titulo: "La IA ya no es un experimento",
    texto:
      "Placeholder — las empresas que implementan IA en 2026 no están experimentando, están ejecutando. Los modelos son más baratos, más rápidos y más precisos que hace 12 meses.",
  },
  {
    titulo: "Automatizar no es despedir",
    texto:
      "Placeholder — la automatización libera a tu equipo de tareas repetitivas para que se enfoquen en lo que realmente mueve la aguja: estrategia, creatividad y relaciones.",
  },
  {
    titulo: "2026: el año de las PyMEs argentinas",
    texto:
      "Placeholder — la tecnología que antes era exclusiva de multinacionales hoy es accesible para cualquier empresa con 10+ empleados. La ventana de ventaja competitiva se está cerrando.",
  },
];

export default function Tecnologia() {
  return (
    <section id="tecnologia" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">La tecnología cambió. ¿Y tu empresa?</h2>
          <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto">
            Sin promesas vacías. Te mostramos qué está pasando y por qué importa para tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((insight) => (
            <div
              key={insight.titulo}
              className="flex flex-col gap-4 p-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]"
            >
              <div className="h-1 w-12 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-cyan)] rounded-full" />
              <h3 className="text-white font-semibold text-xl">{insight.titulo}</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">{insight.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
