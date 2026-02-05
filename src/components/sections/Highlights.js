import { highlights } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";

export default function Highlights() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="O que fazemos"
          title="Arte que fortalece comunidades"
          description="A Soarte conecta educação, cultura e inclusão social para ampliar oportunidades reais de crianças e jovens."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[var(--border)] bg-[var(--surface-alt)] p-6 shadow-[var(--shadow)]"
            >
              <h3 className="text-lg font-semibold text-[var(--ink)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
