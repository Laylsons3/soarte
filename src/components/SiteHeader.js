"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/data/site";
import ThemeToggle from "@/components/ThemeToggle";
import Button from "@/components/Button";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border)] bg-[var(--surface-alt)]/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#conteudo" className="sr-only focus:not-sr-only">
          Pular para conteúdo
        </a>
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand)] text-white shadow-[var(--glow)]">
            S
          </span>
          <div className="flex flex-col">
            <span className="text-base font-semibold text-[var(--ink)]">
              Soarte
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Sociedade Artística
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--brand)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button href="/contato" variant="primary">
            Apoiar
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-alt)] text-[var(--ink)] lg:hidden"
          aria-label="Abrir menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {open ? (
        <div className="border-t border-[var(--border)] bg-[var(--surface-alt)] lg:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[var(--ink)]"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button href="/contato">Apoiar</Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
