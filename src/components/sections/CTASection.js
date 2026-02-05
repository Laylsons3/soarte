import Button from "@/components/Button";

export default function CTASection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-20">
      <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--brand)] px-8 py-12 text-white shadow-[var(--shadow)]">
        <div className="absolute -right-16 top-0 h-56 w-56 rounded-full bg-[var(--accent)]/30 blur-3xl" />
        <svg
          className="music-ribbon float-slow absolute left-6 top-8 h-16 w-[280px] text-white/40"
          viewBox="0 0 280 80"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 26 C60 4, 120 54, 180 26 C220 12, 250 36, 280 20"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M0 46 C70 24, 130 70, 190 44 C230 30, 260 52, 280 40"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="70" cy="30" r="2.5" fill="currentColor" />
          <circle cx="150" cy="48" r="2.3" fill="currentColor" />
          <circle cx="230" cy="28" r="2.5" fill="currentColor" />
        </svg>
        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">
              Junte-se à Soarte e fortaleça a cultura local
            </h2>
            <p className="mt-3 max-w-xl text-sm text-white/80">
              Parcerias, doações e voluntariado são essenciais para ampliar o acesso à arte e transformar vidas.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="/contato" variant="secondary">
              Quero apoiar
            </Button>
            <Button href="/projetos" variant="ghost">
              Ver projetos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
