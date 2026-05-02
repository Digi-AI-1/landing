const stats = [
  { valor: "12hs → 4min", label: "Tiempo de reporting" },
  { valor: "73%", label: "Reducción de quiebre de stock" },
  { valor: "6 semanas", label: "Implementación completa" },
  { valor: "2.1x", label: "ROI en el primer año" },
];

export default function CasoReal() {
  return (
    <section className="py-24 px-6 bg-[var(--color-surface)]/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-[var(--color-cyan)]/30 bg-[var(--color-cyan)]/10 text-[var(--color-cyan)] text-sm font-medium">
            Caso Real
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            De 12 horas de reportes a 4 minutos
          </h2>
        </div>

        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-10">
            <div className="flex-1">
              <div className="text-[var(--color-cyan)] text-sm font-medium mb-2 uppercase tracking-wider">Empresa</div>
              <p className="text-white text-lg">Distribuidora en Rosario · 45 empleados · Sector alimenticio</p>
            </div>
            <div className="flex-1">
              <div className="text-[var(--color-cyan)] text-sm font-medium mb-2 uppercase tracking-wider">Problema</div>
              <p className="text-[var(--color-muted)]">
                12 horas semanales en reportes manuales, errores frecuentes de stock, decisiones basadas en intuición en vez de datos.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-10">
            <div className="flex-1">
              <div className="text-[var(--color-cyan)] text-sm font-medium mb-2 uppercase tracking-wider">Solución</div>
              <p className="text-[var(--color-muted)]">
                Pipeline de datos automatizado + modelo de IA predictiva para gestión de inventario y generación de reportes en tiempo real.
              </p>
            </div>
            <div className="flex-1">
              <div className="text-[var(--color-cyan)] text-sm font-medium mb-2 uppercase tracking-wider">Impacto</div>
              <p className="text-[var(--color-muted)]">
                Equipo reasignado a tareas de valor. Decisiones basadas en datos. Cero sorpresas de stock en temporada alta.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-4 rounded-lg bg-[var(--color-bg)]">
                <div className="text-2xl font-bold text-[var(--color-primary)] mb-1">{s.valor}</div>
                <div className="text-[var(--color-muted)] text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-[var(--color-muted)] mt-10 text-lg">
          ¿Querés ver los números reales para tu empresa?{" "}
          <a href="#contacto" className="text-[var(--color-primary)] hover:underline font-medium">
            Hacemos un diagnóstico gratuito en 48hs.
          </a>
        </p>
      </div>
    </section>
  );
}
