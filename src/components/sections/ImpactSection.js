import SectionHeading from "@/components/SectionHeading";
import StatCard from "@/components/StatCard";
import { stats, ods } from "@/data/site";

export default function ImpactSection() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--surface-alt)]">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Impacto social"
            title="Resultados que comprovam transformação"
            description="Mais de mil alunos já passaram pela Soarte. Os projetos se conectam aos Objetivos de Desenvolvimento Sustentável e fortalecem comunidades inteiras." 
          />
          <div className="grid gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
          <div className="grid gap-6 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h3 className="text-2xl font-semibold text-[var(--ink)]">
                Conexão direta com os ODS
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                Cada projeto busca educação de qualidade, redução das desigualdades e inclusão social sustentável, ampliando o acesso à cultura e à cidadania.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {ods.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] px-4 py-3 text-sm font-semibold text-[var(--ink)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
