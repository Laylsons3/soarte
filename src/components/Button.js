import Link from "next/link";

const variants = {
  primary:
    "bg-[var(--brand)] text-white shadow-[var(--glow)] hover:bg-[var(--brand-strong)]",
  secondary:
    "bg-[var(--surface-alt)] text-[var(--ink)] border border-[var(--border)] hover:border-[var(--brand)]",
  ghost:
    "text-[var(--ink)] border border-transparent hover:border-[var(--brand)] hover:text-[var(--brand)]",
};

export default function Button({ href, children, variant = "primary" }) {
  const className = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition ${variants[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
}
