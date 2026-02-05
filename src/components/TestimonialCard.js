export default function TestimonialCard({ quote, name, role }) {
  return (
    <div className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-[var(--border)] bg-[var(--surface-alt)] p-6 shadow-[var(--shadow)]">
      <p className="text-base leading-relaxed text-[var(--muted)]">“{quote}”</p>
      <div>
        <div className="text-sm font-semibold text-[var(--ink)]">{name}</div>
        <div className="text-xs uppercase tracking-[0.3em] text-[var(--brand)]">
          {role}
        </div>
      </div>
    </div>
  );
}
