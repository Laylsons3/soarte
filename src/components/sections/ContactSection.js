import { contact } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";

export default function ContactSection() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--surface-alt)]">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <SectionHeading
            eyebrow="Contato"
            title="Vamos conversar sobre impacto social"
            description="Envie uma mensagem para parcerias, voluntariado ou apoio institucional."
          />
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8">
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nome"
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] px-4 py-3 text-sm text-[var(--ink)]"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] px-4 py-3 text-sm text-[var(--ink)]"
              />
              <textarea
                rows={4}
                placeholder="Mensagem"
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] px-4 py-3 text-sm text-[var(--ink)]"
              />
              <button
                type="submit"
                className="rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-strong)]"
              >
                Enviar mensagem
              </button>
            </form>
            <div className="mt-6 space-y-2 text-sm text-[var(--muted)]">
              <div>{contact.address}</div>
              <div>{contact.email}</div>
              <div>{contact.phone}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
