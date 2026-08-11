import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  Heart,
  MessageCircle,
  Repeat2,
  Play,
  Radio,
  Headphones,
  Users,
  Briefcase,
  Megaphone,
  Truck,
  Apple,
  Chrome,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import heroCreator from "@/assets/hero-creator.jpg";
import personaBand from "@/assets/persona-band.jpg";
import personaLabel from "@/assets/persona-label.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Musicosy — Log in. Post music. Get paid." },
      {
        name: "description",
        content:
          "The social feed for music. Post tracks, clips, podcasts and live sets, follow artists, and get discovered by labels, sync agents and distributors.",
      },
      { property: "og:title", content: "Musicosy — Log in. Post music. Get paid." },
      {
        property: "og:description",
        content:
          "Join the social platform for creators, indie artists, labels, sync agents, distributors and advertisers.",
      },
    ],
  }),
  component: Landing,
});

const feed = [
  {
    img: heroCreator,
    handle: "@carlaristov",
    kind: "New track",
    caption: "cut the demo at 3am — turn it up 🔊",
    likes: "12.4k",
    comments: "832",
    reposts: "1.1k",
  },
  {
    img: personaBand,
    handle: "@recovet",
    kind: "Live clip",
    caption: "sold out the back room again. thank you.",
    likes: "8.9k",
    comments: "410",
    reposts: "672",
  },
  {
    img: personaLabel,
    handle: "@nightshiftrecs",
    kind: "Roster drop",
    caption: "signed two new acts this week. splits already live.",
    likes: "5.2k",
    comments: "298",
    reposts: "455",
  },
];

const lanes = [
  { icon: Headphones, title: "Creators", body: "Post tracks, clips, podcasts, live.", to: "/onboarding" },
  { icon: Users, title: "Artists & bands", body: "Keep your fans and your masters.", to: "/onboarding" },
  { icon: Briefcase, title: "Labels", body: "Run your roster beyond the platform.", to: "/onboarding/business" },
  { icon: Radio, title: "Sync agents", body: "Search cleared, rights-tagged talent.", to: "/for/sync-agents" },
  { icon: Truck, title: "Distributors", body: "Pull native content into your pipeline.", to: "/for/distributors" },
  { icon: Megaphone, title: "Advertisers", body: "Buy space inside the music feed.", to: "/advertising/businesses" },
];

function Landing() {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-8 lg:grid-cols-[1.1fr_380px] lg:gap-16 lg:py-14">
        {/* Feed preview */}
        <div className="min-w-0">
          <Logo className="h-9" />
          <h1 className="mt-6 text-3xl font-bold leading-[1.05] text-balance-tight sm:text-4xl">
            The feed that sounds like <span className="text-primary">you</span>.
          </h1>
          <p className="mt-3 max-w-md text-muted-foreground">
            Follow, post, repost, get paid. Music, video, podcasts and live — one social app.
          </p>

          <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-3 lg:grid lg:grid-cols-3 lg:overflow-visible">
            {feed.map((p) => (
              <article
                key={p.handle}
                className="w-[78%] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card lg:w-auto"
              >
                <div className="relative">
                  <img
                    src={p.img}
                    alt={`Post by ${p.handle}`}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="aspect-square w-full object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-2.5 py-1 text-[11px] font-medium text-ink-foreground backdrop-blur">
                    {p.kind}
                  </span>
                  <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Play className="h-4 w-4" fill="currentColor" />
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold">{p.handle}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{p.caption}</p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Heart className="h-4 w-4 text-primary" /> {p.likes}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MessageCircle className="h-4 w-4" /> {p.comments}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Repeat2 className="h-4 w-4" /> {p.reposts}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Login card */}
        <div className="lg:sticky lg:top-8 lg:self-start">
          <form
            className="rounded-2xl border border-border bg-card p-6"
            onSubmit={(e) => {
              e.preventDefault();
              navigate({ to: "/onboarding", search: { id: identifier || undefined } });
            }}
          >
            <h2 className="text-lg font-semibold">Log in or sign up</h2>
            <input
              id="identifier"
              aria-label="Email, phone or username"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="Email, phone or username"
              className="mt-4 w-full rounded-xl border border-input bg-background px-4 py-3 text-base outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              className="mt-3 w-full rounded-xl bg-primary px-4 py-3 text-base font-semibold text-primary-foreground shadow-glow"
            >
              Continue
            </button>

            <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="h-px flex-1 bg-border" /> or <span className="h-px flex-1 bg-border" />
            </div>

            <div className="grid gap-2">
              <Link
                to="/onboarding"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-4 py-3 text-sm font-medium text-secondary-foreground hover:bg-accent"
              >
                <Chrome className="h-4 w-4" /> Continue with Google
              </Link>
              <Link
                to="/onboarding"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-4 py-3 text-sm font-medium text-secondary-foreground hover:bg-accent"
              >
                <Apple className="h-4 w-4" /> Continue with Apple
              </Link>
            </div>

            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
              By continuing you agree to our{" "}
              <Link to="/legal/terms" className="underline underline-offset-4">
                Terms
              </Link>{" "}
              and{" "}
              <Link to="/legal/privacy" className="underline underline-offset-4">
                Privacy Policy
              </Link>
              .
            </p>

            <div className="mt-5 border-t border-border pt-4 text-sm">
              <Link to="/onboarding/business" className="block hover:text-primary">
                Label or roster account →
              </Link>
              <Link to="/advertising/businesses" className="mt-2 block hover:text-primary">
                Advertise on Musicosy →
              </Link>
            </div>
          </form>

          <div className="mt-4 grid grid-cols-2 gap-2">
            {lanes.map((l) => (
              <Link
                key={l.title}
                to={l.to}
                className="rounded-xl border border-border bg-surface p-3.5 transition-colors hover:border-primary"
              >
                <l.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                <p className="mt-2 text-sm font-semibold">{l.title}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{l.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
