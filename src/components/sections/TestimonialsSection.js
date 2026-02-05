import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/site";

export default function TestimonialsSection() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--surface-alt)]">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Depoimentos"
            title="Histórias que mostram o impacto real"
            description="Famílias, alunos e educadores relatam como a música e a arte transformam perspectivas de vida." 
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
