const creencias = [
  "El problema siempre viene antes que la solución",
  "Un entregable en 2 semanas vale más que un roadmap de 6 meses",
  "Los datos que ya tenés son el punto de partida",
  "La tecnología no transforma empresas. Las personas con criterio, sí",
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Centered title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Quiénes Somos</h2>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left — manifesto */}
          <div className="flex flex-col gap-6">
            <p className="text-[var(--color-muted)] text-lg leading-relaxed">
              Creemos que la mayoría de los proyectos de transformación digital fallan antes de empezar. No por la tecnología. Por cómo se plantean. Se vende una solución antes de entender el problema, se implementa una herramienta antes de mapear el proceso, y el cliente termina con un sistema caro que nadie usa.
            </p>
            <p className="text-[var(--color-muted)] text-lg leading-relaxed">
              Nuestro punto de partida siempre es el mismo: entender cómo funciona tu negocio antes de tocar una sola línea de código. Porque la IA más sofisticada del mundo, aplicada al problema equivocado, es solo un gasto.
            </p>
          </div>

          {/* Right — 2x2 belief grid */}
          <div className="grid grid-cols-2 gap-4">
            {creencias.map((creencia) => (
              <div
                key={creencia}
                className="px-5 py-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] card-glow flex flex-col gap-3"
              >
                <div className="h-1 w-8 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-cyan)]" />
                <p className="text-white font-medium text-sm leading-snug">{creencia}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
