import Link from "next/link";
import { navLinks, contact } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface-alt)]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand)] text-white">
              S
            </span>
            <div>
              <div className="text-base font-semibold text-[var(--ink)]">
                Soarte – Sociedade Artística
              </div>
              <div className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                Transformação social pela arte
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-[var(--muted)]">
            Organização da Sociedade Civil que promove desenvolvimento
            sociocultural por meio da arte, educação e inclusão social.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand)]">
            Navegação
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--muted)] transition hover:text-[var(--brand)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand)]">
            Contato
          </div>
          <div className="text-sm text-[var(--muted)]">{contact.address}</div>
          <div className="text-sm text-[var(--muted)]">{contact.email}</div>
          <div className="text-sm text-[var(--muted)]">{contact.phone}</div>
        </div>
      </div>
      <div className="border-t border-[var(--border)] py-6 text-center text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
        © 2026 Soarte. Todos os direitos reservados.
      </div>
    </footer>
  );
}
