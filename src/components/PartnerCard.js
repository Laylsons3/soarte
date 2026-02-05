export default function PartnerCard({ label }) {
  return (
    <div className="flex items-center justify-center rounded-3xl border border-dashed border-[var(--border)] bg-[var(--surface-alt)] px-6 py-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
      {label}
    </div>
  );
}
