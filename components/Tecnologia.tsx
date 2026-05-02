const insights = [
  {
    titulo: "La IA ya no es un experimento",
    texto:
      "En 2024, el 78% de las empresas Fortune 500 ya integraron IA en al menos un proceso crítico. En Argentina, la mayoría todavía evalúa. Esa brecha es tu oportunidad — pero se achica cada trimestre.",
  },
  {
    titulo: "Automatizar no es reemplazar personas",
    texto:
      "Tu equipo pierde horas en tareas que una máquina resuelve en segundos. Automatizar esos procesos no elimina puestos — libera a tu gente para hacer lo que una máquina no puede: pensar, negociar y crear.",
  },
  {
    titulo: "La ventaja es de quien se mueve primero",
    texto:
      "La misma tecnología que usaban solo las multinacionales hoy cuesta una fracción. El que la implementa primero en su sector captura el mercado. El que espera, compite contra el que ya la tiene.",
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
