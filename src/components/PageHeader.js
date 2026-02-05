import SectionHeading from "@/components/SectionHeading";

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--surface-alt)] py-16">
      <div className="absolute inset-0 opacity-70">
        <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-[var(--accent)] blur-3xl" />
        <div className="absolute right-10 top-20 h-64 w-64 rounded-full bg-[var(--brand)]/30 blur-3xl" />
      </div>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
      </div>
    </section>
  );
}
