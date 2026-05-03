const testimonios = [
  {
    nombre: "María García",
    empresa: "Empresa SA — Buenos Aires",
    texto:
      "Placeholder — testimonio real de un cliente satisfecho. Qué problema tenían, cómo Digi-AI los ayudó y qué resultado lograron.",
  },
  {
    nombre: "Carlos López",
    empresa: "Startup Tech — Rosario",
    texto:
      "Placeholder — segundo testimonio. Destacar un aspecto diferente: velocidad de implementación, atención al cliente, ROI, etc.",
  },
  {
    nombre: "Ana Martínez",
    empresa: "Comercio Digital — Córdoba",
    texto:
      "Placeholder — tercer testimonio. Puede enfocarse en el impacto humano o en resultados numéricos concretos.",
  },
];

export default function Testimonios() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Lo que dicen nuestros clientes</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonios.map((t) => (
            <div
              key={t.nombre}
              className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col gap-4"
            >
              <p className="text-[var(--color-muted)] text-sm leading-relaxed italic">&ldquo;{t.texto}&rdquo;</p>
              <div className="mt-auto">
                <div className="text-white font-semibold text-sm">{t.nombre}</div>
                <div className="text-[var(--color-muted)] text-xs">{t.empresa}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
