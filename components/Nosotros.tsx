export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Quiénes somos</h2>
          <p className="text-[var(--color-muted)] text-lg mb-4 leading-relaxed">
            Placeholder — texto sobre la misión y visión del equipo. Quiénes son, de dónde vienen y por qué se enfocan en el mercado argentino.
          </p>
          <p className="text-[var(--color-muted)] text-lg leading-relaxed">
            Placeholder — segundo párrafo sobre la propuesta de valor del equipo y su experiencia en el sector.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { valor: "50+", label: "Clientes atendidos" },
            { valor: "5", label: "Años de experiencia" },
            { valor: "98%", label: "Satisfacción del cliente" },
            { valor: "12", label: "Industrias cubiertas" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-center"
            >
              <div className="text-3xl font-bold text-[var(--color-primary)] mb-1">{stat.valor}</div>
              <div className="text-[var(--color-muted)] text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
