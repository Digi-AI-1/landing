const metrics = [
  { value: "−73%",         label: "quiebre de stock" },
  { value: "12hs → 4min", label: "de tiempo de reporting" },
  { value: "2.4x",         label: "ROI promedio en 12 meses" },
  { value: "6 sem.",       label: "de implementación promedio" },
  { value: "23hs",         label: "semanales recuperadas" },
  { value: "−34%",         label: "sobrestock eliminado" },
  { value: "$850K ARS/mes",label: "en ahorros operativos" },
  { value: "60%",          label: "de consultas automatizables con IA" },
];

const items = [...metrics, ...metrics];

export default function MetricsTicker() {
  return (
    <div
      aria-hidden="true"
      className="border-y border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden py-3.5 select-none"
    >
      <div className="ticker-track flex whitespace-nowrap">
        {items.map((m, i) => (
          <span key={i} className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 text-xs sm:text-sm">
            <span className="text-[var(--color-primary)] font-bold font-mono">{m.value}</span>
            <span className="text-[var(--color-muted)]">{m.label}</span>
            <span className="text-[var(--color-border)] text-xs ml-3">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
