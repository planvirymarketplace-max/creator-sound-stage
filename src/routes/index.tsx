import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  Flame,
  Play,
  Mic,
  Sparkles,
  Repeat,
  Headphones,
  Users,
  Radio,
  Briefcase,
  Megaphone,
  Truck,
} from "lucide-react";
import { SiteHeader } from "@/components/PageShell";
import heroCreator from "@/assets/hero-creator.jpg";
import personaBand from "@/assets/persona-band.jpg";
import personaLabel from "@/assets/persona-label.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Musicosy — Everything music. One place." },
      {
        name: "description",
        content:
          "One identity for creators, indie artists and bands, labels, sync agents, distributors and advertisers. Post music, video, podcasts and live in one social platform.",
      },
      { property: "og:title", content: "Musicosy — Everything music. One place." },
      {
        property: "og:description",
        content:
          "Create and post musical content, manage a roster, license for sync, distribute catalog, and buy ad space — all in one place.",
      },
    ],
  }),
  component: Landing,
});

const strip = [
  { icon: Flame, kind: "Trending track", name: "Waveforms" },
  { icon: Play, kind: "Live clip", name: "Marcus Sexton" },
  { icon: Mic, kind: "Podcast ep.", name: "Label Talk" },
  { icon: Sparkles, kind: "New artist", name: "Carla Ristov" },
  { icon: Repeat, kind: "New release", name: "Recovet" },
];

const audiences = [
  {
    icon: Headphones,
    title: "Creators",
    body: "Post tracks, clips, podcasts and live sets to a feed built for sound. Publish once — Creator Studio unlocks itself.",
    cta: { label: "Start creating", to: "/onboarding" },
  },
  {
    icon: Users,
    title: "Indie artists & bands",
    body: "Seasoned independents keep their audience, their masters and their release calendar in one profile.",
    cta: { label: "Claim your artist page", to: "/onboarding" },
  },
  {
    icon: Briefcase,
    title: "Indie labels",
    body: "Run your roster beyond the platform: payouts, splits, release windows and per-artist analytics under one tenant.",
    cta: { label: "Set up a label account", to: "/onboarding/business" },
  },
  {
    icon: Radio,
    title: "Sync agents",
    body: "Search cleared, rights-tagged catalog by mood, tempo and territory. Talent discovery with the paperwork attached.",
    cta: { label: "Browse for talent", to: "/for/sync-agents" },
  },
  {
    icon: Truck,
    title: "Distributors",
    body: "Pull Musicosy-native content into your pipeline with structured metadata and delivery-ready assets.",
    cta: { label: "Become a partner", to: "/for/distributors" },
  },
  {
    icon: Megaphone,
    title: "Advertisers",
    body: "Buy space next to music people actually chose. Creator-adjacent inventory, sold with context, not guesswork.",
    cta: { label: "Get ad space", to: "/advertising/businesses" },
  },
];

function Landing() {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Door */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div>
            <h1 className="text-5xl font-bold leading-[0.95] text-balance-tight sm:text-6xl">
              Everything music.
              <br />
              <span className="text-primary">One place.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Musicosy is where musical content gets made, posted, discovered, licensed and paid
              for. One identity — fan, creator, artist, label or agency.
            </p>
            <div className="mt-8 overflow-hidden rounded-xl border border-border shadow-lift">
              <img
                src={heroCreator}
                alt="Independent artist recording vocals in a home studio"
                width={1280}
                height={800}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:pt-4">
            <form
              className="rounded-xl border border-border bg-card p-6 shadow-lift"
              onSubmit={(e) => {
                e.preventDefault();
                navigate({ to: "/onboarding", search: { id: identifier || undefined } });
              }}
            >
              <label htmlFor="identifier" className="text-sm font-medium">
                Email or phone number
              </label>
              <input
                id="identifier"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="you@studio.com"
                className="mt-2 w-full rounded-md border border-input bg-background px-3.5 py-3 text-base outline-none transition-shadow focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="mt-4 w-full rounded-md bg-primary px-4 py-3 text-base font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Continue
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                One field. We work out log in or sign up for you.
              </p>

              <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="h-px flex-1 bg-border" />
                or
                <span className="h-px flex-1 bg-border" />
              </div>

              <Link
                to="/onboarding"
                search={{ mode: "login" }}
                className="block w-full rounded-md border border-ink bg-ink px-4 py-3 text-center text-base font-semibold text-ink-foreground transition-colors hover:bg-ink/90"
              >
                Log in
              </Link>

              <div className="mt-8 border-t border-border pt-5">
                <p className="text-sm font-medium">Not looking to browse or post?</p>
                <Link
                  to="/onboarding/business"
                  className="mt-3 flex items-center gap-1.5 text-sm font-medium underline underline-offset-4 hover:text-primary"
                >
                  Set up a label or roster account <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/advertising/businesses"
                  className="mt-2 flex items-center gap-1.5 text-sm font-medium underline underline-offset-4 hover:text-primary"
                >
                  Run advertising on Musicosy <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Live strip */}
      <section className="border-b border-border" aria-label="Happening now">
        <div className="mx-auto w-full max-w-6xl px-6 py-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {strip.map((item) => (
              <div
                key={item.kind}
                className="rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-lift"
              >
                <item.icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
                <p className="mt-8 text-sm font-semibold">{item.kind}</p>
                <p className="text-sm text-muted-foreground">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          Who it's for
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold text-balance-tight sm:text-4xl">
          Six ways into the same platform. No second account.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a) => (
            <article
              key={a.title}
              className="flex flex-col rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lift"
            >
              <a.icon className="h-7 w-7 text-primary" strokeWidth={1.75} />
              <h3 className="mt-5 text-xl font-semibold">{a.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              <Link
                to={a.cta.to}
                className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-md bg-secondary px-4 py-2.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-accent"
              >
                {a.cta.label} <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Ecosystem */}
      <section className="border-y border-border bg-ink text-ink-foreground">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Our ecosystem
            </p>
            <h2 className="mt-3 text-3xl font-bold uppercase leading-tight sm:text-4xl">
              The new music economy
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink-muted">
              Passive scrolling and active seeking are different modes. Home is one interleaved feed
              across music, video, podcasts and live. Discover is where you go hunting — and where
              labels, agents and distributors go to find you.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <article className="overflow-hidden rounded-xl bg-white/5">
              <img
                src={personaBand}
                alt="Indie band performing at a small venue"
                width={1024}
                height={768}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">Discover: independent stages</h3>
                <p className="mt-1 text-sm text-ink-muted">
                  Live sets, clips and tour drops from artists without a major behind them.
                </p>
                <Link
                  to="/onboarding"
                  className="mt-4 block rounded-md bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
                >
                  Explore now
                </Link>
              </div>
            </article>
            <article className="overflow-hidden rounded-xl bg-white/5">
              <img
                src={personaLabel}
                alt="Label team reviewing roster analytics"
                width={1024}
                height={768}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">Manage: roster & rights</h3>
                <p className="mt-1 text-sm text-ink-muted">
                  Payouts, splits and delivery for every artist you represent, on and off platform.
                </p>
                <Link
                  to="/onboarding/business"
                  className="mt-4 block rounded-md bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
                >
                  Start distributing
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
