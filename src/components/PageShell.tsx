import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Logo } from "./Logo";

const nav = [
  { label: "Community", to: "/community" },
  { label: "Advertising", to: "/advertising" },
  { label: "For sync agents", to: "/for/sync-agents" },
  { label: "For distributors", to: "/for/distributors" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-3 sm:flex sm:justify-between">
        <div className="flex min-w-0 items-center gap-6">
          <Logo className="h-7" />
          <nav className="hidden items-center gap-5 lg:flex" aria-label="Main">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground font-medium" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <Link
          to="/onboarding"
          className="shrink-0 rounded-md bg-ink px-4 py-2 text-sm font-medium text-ink-foreground transition-colors hover:bg-ink/90"
        >
          Continue
        </Link>
      </div>
    </header>
  );
}

export function PageShell({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl px-6 py-16">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 text-4xl font-bold text-balance-tight sm:text-5xl">{title}</h1>
        {lede ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lede}</p>
        ) : null}
        <div className="mt-12">{children}</div>
      </main>
    </div>
  );
}

export function Section({ heading, body }: { heading: string; body: string[] }) {
  return (
    <section className="border-t border-border py-8 first:border-t-0 first:pt-0">
      <h2 className="text-xl font-semibold">{heading}</h2>
      {body.map((p) => (
        <p key={p} className="mt-3 leading-relaxed text-muted-foreground">
          {p}
        </p>
      ))}
    </section>
  );
}
