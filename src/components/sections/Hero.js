import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--surface-alt)]">
      <div className="absolute inset-0">
        <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-[var(--accent)]/40 blur-3xl" />
        <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-[var(--brand)]/30 blur-3xl" />
        <div className="staff-lines absolute inset-x-0 top-10 h-40" aria-hidden="true" />
        <svg
          className="music-ribbon float-slow absolute left-0 top-14 h-24 w-[420px]"
          viewBox="0 0 420 120"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 40 C80 10, 160 70, 240 40 C300 20, 360 50, 420 30"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M0 70 C90 40, 170 90, 250 60 C310 40, 370 70, 420 50"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="110" cy="46" r="3.5" fill="currentColor" />
          <circle cx="210" cy="66" r="3" fill="currentColor" />
          <circle cx="320" cy="38" r="3.5" fill="currentColor" />
        </svg>
        <svg
          className="music-ribbon float-fast absolute right-0 top-24 h-20 w-[360px]"
          viewBox="0 0 360 100"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 30 C70 0, 140 60, 210 30 C270 10, 320 40, 360 20"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M0 55 C80 25, 150 75, 220 50 C280 30, 330 55, 360 40"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="90" cy="34" r="3" fill="currentColor" />
          <circle cx="190" cy="56" r="2.8" fill="currentColor" />
          <circle cx="280" cy="32" r="3" fill="currentColor" />
        </svg>
      </div>
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--brand)]">
            Sociedade Artística
          </span>
          <h1 className="text-4xl font-semibold text-[var(--ink)] sm:text-5xl">
            Arte, educação e inclusão social que transformam futuros.
          </h1>
          <p className="text-lg leading-relaxed text-[var(--muted)]">
            A Soarte promove desenvolvimento sociocultural desde 2009, com
            oficinas gratuitas, formação continuada e projetos culturais que
            fortalecem crianças, jovens e comunidades no Ceará.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/contato" variant="primary">
              Apoiar a Soarte
            </Button>
            <Button href="/projetos" variant="secondary">
              Conhecer projetos
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-[var(--muted)]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--brand)]" />
              1.000+ alunos impactados
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              Formação gratuita e continuada
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -right-4 top-8 h-64 w-64 rounded-3xl bg-[var(--brand)]/20 blur-2xl" />
          <div className="relative flex h-full flex-col justify-center gap-6 rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--card)] p-8 shadow-[var(--shadow)]">
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand)]">
              Núcleos ativos
            </div>
            <div className="space-y-4 text-sm text-[var(--muted)]">
              <div className="flex items-center justify-between">
                <span>Pacatuba</span>
                <span className="font-semibold text-[var(--ink)]">Centro Cultural</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Pecém</span>
                <span className="font-semibold text-[var(--ink)]">ASPEM</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Caucaia</span>
                <span className="font-semibold text-[var(--ink)]">Novo Destino</span>
              </div>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-4">
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                "A música é ponte para cidadania e oportunidades reais."
              </p>
              <div className="mt-3 text-xs uppercase tracking-[0.3em] text-[var(--brand)]">
                Propósito Soarte
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
