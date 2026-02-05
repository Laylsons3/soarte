export default function EventCard({ title, date, description }) {
  return (
    <div className="flex flex-col gap-3 rounded-3xl border border-[var(--border)] bg-[var(--surface-alt)] p-6 shadow-[var(--shadow)]">
      <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand)]">
        {date}
      </div>
      <h3 className="text-xl font-semibold text-[var(--ink)]">{title}</h3>
      <p className="text-sm leading-relaxed text-[var(--muted)]">{description}</p>
    </div>
  );
}
