export default function ProjectCard({ title, location, description }) {
  return (
    <div className="group flex h-full flex-col gap-4 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 transition hover:-translate-y-1 hover:border-[var(--brand)] hover:shadow-[var(--glow)]">
      <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand)]">
        {location}
      </div>
      <h3 className="text-2xl font-semibold text-[var(--ink)]">{title}</h3>
      <p className="text-sm leading-relaxed text-[var(--muted)]">{description}</p>
    </div>
  );
}
