export default function StatCard({ value, label }) {
  return (
    <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-alt)] p-6 shadow-[var(--shadow)]">
      <div className="text-3xl font-semibold text-[var(--ink)]">{value}</div>
      <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
        {label}
      </p>
    </div>
  );
}
