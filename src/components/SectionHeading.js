export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const alignClass =
    align === "center" ? "text-center items-center" : "text-left";

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand)]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-[var(--muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
