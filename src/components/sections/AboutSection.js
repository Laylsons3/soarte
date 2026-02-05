import SectionHeading from "@/components/SectionHeading";

const timeline = [
  {
    year: "2009",
    text: "Fundação em Pacatuba com oficinas de música e artes para crianças e jovens.",
  },
  {
    year: "2018",
    text: "Criação do Centro Cultural Sons da Aratanha e expansão das oficinas.",
  },
  {
    year: "2020+",
    text: "Gestão da ASPEM e fundação da Escola de Música Novo Destino em Caucaia.",
  },
];

export default function AboutSection() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--surface-alt)]">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionHeading
            eyebrow="Nossa história"
            title="Uma rede cultural que cresce com as comunidades"
            description="A Soarte nasceu da vontade de garantir acesso à arte como direito. Hoje é referência regional em formação musical e projetos culturais com impacto social." 
          />
          <div className="space-y-6">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="flex gap-4 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6"
              >
                <div className="text-lg font-semibold text-[var(--brand)]">
                  {item.year}
                </div>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
