const creencias = [
  { n: "01", texto: "El problema siempre viene antes que la solución" },
  { n: "02", texto: "Un entregable en 2 semanas vale más que un roadmap de 6 meses" },
  { n: "03", texto: "Los datos que ya tenés son el punto de partida" },
  { n: "04", texto: "La tecnología no transforma empresas. Las personas con criterio, sí" },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Tag + Title */}
        <div className="mb-10 md:mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium">
            Nuestra Filosofía
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl">
            Quiénes Somos
          </h2>
        </div>

        {/* Blockquote manifesto */}
        <div className="border-l-2 border-[var(--color-primary)] pl-4 md:pl-8 mb-12 md:mb-20 max-w-4xl">
          <p className="text-white text-xl md:text-2xl leading-relaxed font-light mb-6">
            La mayoría de los proyectos de transformación digital fallan antes de empezar. No por la tecnología — por cómo se plantean. Se vende una solución antes de entender el problema. Se implementa una herramienta antes de mapear el proceso. El cliente termina con un sistema caro que nadie usa.
          </p>
          <p className="text-[var(--color-muted)] text-lg leading-relaxed">
            Nuestro punto de partida siempre es el mismo: entender cómo funciona tu negocio antes de tocar una sola línea de código. Porque la IA más sofisticada del mundo, aplicada al problema equivocado, es solo un gasto.
          </p>
        </div>

        {/* Horizontal belief strip */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[var(--color-border)]">
          {creencias.map((c) => (
            <div
              key={c.n}
              className="bg-[var(--color-bg)] px-6 py-8 flex flex-col gap-4"
            >
              <span className="text-[var(--color-primary)] font-mono text-sm">{c.n}</span>
              <p className="text-white font-medium text-base leading-snug">{c.texto}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
