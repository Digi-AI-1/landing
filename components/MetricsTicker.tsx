const metrics = [
  { value: "73%",          label: "reducción de quiebre de stock" },
  { value: "12hs → 4min", label: "de tiempo de reporting" },
  { value: "2.1x",         label: "ROI en el primer año" },
  { value: "6 semanas",    label: "de implementación" },
  { value: "23hs",         label: "semanales recuperadas" },
  { value: "34%",          label: "sobrestock eliminado" },
  { value: "$850K ARS/mes",label: "en ahorros operativos" },
  { value: "60%",          label: "atención al cliente automatizable" },
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
          <span key={i} className="inline-flex items-center gap-2 px-5 text-sm">
            <span className="text-[var(--color-primary)] font-bold font-mono">{m.value}</span>
            <span className="text-[var(--color-muted)]">{m.label}</span>
            <span className="text-[var(--color-border)] text-xs ml-3">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
