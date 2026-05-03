const insights = [
  {
    titulo: "El 90% de las 'Transformaciones Digitales' en Argentina Fracasan",
    texto:
      "No fracasan por la tecnología. Fracasan porque las implementa gente que no entiende el negocio detrás. Un modelo de IA sin contexto operativo es un gasto, no una inversión. Por eso empezamos por tu operación, no por la herramienta.",
  },
  {
    titulo: "Tu Competencia Ya Está Usando IA. No Te lo Va a Contar.",
    texto:
      "Las empresas que integran IA en procesos críticos no lo anuncian. Lo usan como ventaja silenciosa: costos más bajos, decisiones más rápidas, menos errores. Cada trimestre que pasa, la brecha se agranda.",
  },
  {
    titulo: "La Tecnología No Es Cara. Implementarla Mal, Sí.",
    texto:
      "Una licencia de IA cuesta menos que un sueldo junior. El costo real está en elegir mal qué automatizar, en datos sin estructura y en equipos que no saben interpretar los resultados. Ese es exactamente el problema que resolvemos.",
  },
];

export default function Tecnologia() {
  return (
    <section id="tecnologia" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">La Tecnología Cambió. ¿Y Tu Empresa?</h2>
          <p className="text-[var(--color-muted)] text-lg max-w-3xl mx-auto">
            Los modelos de IA que antes requerían equipos de 20 ingenieros hoy se implementan en semanas. Si tu operación todavía depende de planillas y procesos manuales, estás a tiempo de cambiar eso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((insight) => (
            <div
              key={insight.titulo}
              className="flex flex-col gap-4 p-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] card-glow"
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
