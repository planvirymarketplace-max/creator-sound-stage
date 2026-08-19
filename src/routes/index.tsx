import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import astronautAsset from "@/assets/astronaut.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Musicosy — Stream. Earn. Publish." },
      {
        name: "description",
        content:
          "Musicosy is the social platform for music independents: stream what you love, earn from every play, and publish straight to labels, sync agents and distributors.",
      },
      { property: "og:title", content: "Musicosy — Stream. Earn. Publish." },
      {
        property: "og:description",
        content:
          "Stream, earn, publish, create, engage, manage, promote and advertise — the social platform built around independent music.",
      },
    ],
  }),
  component: Landing,
});

const sections = [
  {
    id: "stream",
    word: "Stream",
    to: "/onboarding",
    cta: "Start listening",
    body: "Your songs and podcasts. Follow and discover the creators you love, build playlists, go live with the people who share your taste.",
  },
  {
    id: "earn",
    word: "Earn",
    to: "/onboarding",
    cta: "Open a creator account",
    body: "Monetize your audience: streams, downloads, subscribers, tips, tickets and merch. Splits pay the people who made the record.",
  },
  {
    id: "publish",
    word: "Publish",
    to: "/onboarding",
    cta: "Publish your first release",
    body: "Post once. Labels, sync agents, distributors and advertisers are already hunting for your sound and your audience.",
  },
  {
    id: "create",
    word: "Create",
    to: "/onboarding",
    cta: "Open the studio",
    body: "Music, video and podcasts with studio tools built to help you finish, master and reach people — not gatekeepers.",
  },
  {
    id: "engage",
    word: "Engage",
    to: "/community",
    cta: "Enter the community",
    body: "Talk to your listeners, run fan clubs, take real-time feedback and sell straight to the room that shows up.",
  },
  {
    id: "manage",
    word: "Manage",
    to: "/onboarding/business",
    cta: "Set up a label account",
    body: "Rights, rosters, touring, distribution and campaigns — a label or agency workspace with roles and approvals built in.",
  },
  {
    id: "promote",
    word: "Promote",
    to: "/for/distributors",
    cta: "Partner with us",
    body: "Schedule events, market shows, sell tickets, and push releases through distribution partners in the same place you post.",
  },
  {
    id: "advertise",
    word: "Advertise",
    to: "/advertising",
    cta: "Buy advertising space",
    body: "Reach the audience that fits your sound. Brands, labels and creators partner with the artists who share their vision.",
  },
];

function Landing() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const wordRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoWrapRef = useRef<HTMLDivElement | null>(null);
  const vidA = useRef<HTMLVideoElement>(null);
  const vidB = useRef<HTMLVideoElement>(null);
  const [showA, setShowA] = useState(true);

  // Crossfade loop: two videos alternate so the loop seam is a smooth dissolve
  useEffect(() => {
    const lead = showA ? vidA : vidB;
    const lag = showA ? vidB : vidA;

    function onTimeUpdate() {
      const el = lead.current;
      if (!el) return;
      const duration = el.duration || 10;
      const fadeStart = Math.max(duration - 2, 0.1);
      if (el.currentTime < fadeStart) return;
      el.removeEventListener("timeupdate", onTimeUpdate);

      if (lag.current) {
        lag.current.currentTime = 0;
        void lag.current.play();
      }
      setShowA((s) => !s);

      setTimeout(() => {
        el.pause();
        el.currentTime = 0;
      }, 2200);
    }

    const el = lead.current;
    el?.addEventListener("timeupdate", onTimeUpdate);
    void el?.play();
    return () => el?.removeEventListener("timeupdate", onTimeUpdate);
  }, [showA]);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const vh = window.innerHeight;
        let current = 0;
        wordRefs.current.forEach((el, i) => {
          if (!el) return;
          const rect = el.getBoundingClientRect();
          // 0 when entering from the bottom, 1 when parked at its position
          const p = Math.min(Math.max(1 - (rect.top - vh * 0.2) / (vh * 0.8), 0), 1);
          el.style.setProperty("--p", String(p));
          if (p > 0.65) current = i;
        });
        setActive(current);

        // parallax + gradual darkening of the video as you travel down
        const wrap = videoWrapRef.current;
        if (wrap) {
          const total = wrap.offsetHeight - vh;
          const travelled = Math.min(Math.max(-wrap.getBoundingClientRect().top, 0), total);
          setProgress(total > 0 ? travelled / total : 0);
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="relative bg-ink text-ink-foreground">
      {/* Top bar */}
      <header className="fixed inset-x-0 top-0 z-30 flex items-center justify-between px-5 py-4 sm:px-10">
        <Logo className="h-8" />
        <div className="flex items-center gap-2">
          <Link
            to="/onboarding"
            className="rounded-full border border-ink-foreground/25 px-4 py-2 text-sm font-medium text-ink-foreground/90 backdrop-blur transition-colors hover:border-primary hover:text-primary"
          >
            Log in
          </Link>
          <Link
            to="/onboarding"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Join
          </Link>
        </div>
      </header>

      {/* Far-left rail */}
      <nav
        aria-label="Sections"
        className="fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-2.5 sm:flex"
      >
        {sections.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`group flex items-center gap-2 font-display text-[0.7rem] uppercase tracking-[0.28em] transition-all ${
              active === i
                ? "translate-x-1 text-primary"
                : "text-ink-muted hover:translate-x-1 hover:text-ink-foreground"
            }`}
          >
            <span
              className={`h-px transition-all ${
                active === i ? "w-5 bg-primary" : "w-2 bg-ink-muted/50 group-hover:w-4"
              }`}
            />
            {s.word}
            <span className="text-primary">+</span>
          </a>
        ))}
      </nav>

      {/* ===== Video stage: the video lives here only, and stops before the footer ===== */}
      <div ref={videoWrapRef} className="relative">
        {/* sticky keeps it full-bleed while scrolling, clipped to this stage */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <video
            ref={vidA}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[2000ms] ${
              showA ? "opacity-100" : "opacity-0"
            }`}
            style={{ transform: `scale(${1 + progress * 0.12})` }}
            src={astronautAsset.url}
            autoPlay
            muted
            playsInline
            aria-hidden="true"
          />
          <video
            ref={vidB}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[2000ms] ${
              showA ? "opacity-0" : "opacity-100"
            }`}
            style={{ transform: `scale(${1 + progress * 0.12})` }}
            src={astronautAsset.url}
            muted
            playsInline
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/30" />
          <div
            className="absolute inset-0 bg-ink transition-opacity duration-300"
            style={{ opacity: 0.3 + progress * 0.45 }}
          />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-ink" />
        </div>

        {/* Content rides on top of the sticky video */}
        <div className="relative z-10 -mt-[100vh]">
          {/* Hero */}
          <section className="relative flex min-h-screen flex-col justify-end px-5 pb-24 sm:px-10 lg:pl-32">
            <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-black/25 px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-primary backdrop-blur">
              A social platform for music independents
            </p>
            <h1 className="font-display text-[13vw] font-bold leading-[0.85] tracking-tight sm:text-[9vw]">
              Everything music.
              <span className="block text-primary">One place.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-ink-muted">
              Zero gravity, zero gatekeepers. Scroll down.
            </p>
          </section>

          {/* Scrolling block-letter sections */}
          {sections.map((s, i) => (
            <section
              key={s.id}
              id={s.id}
              className="relative flex min-h-screen items-center overflow-hidden px-5 sm:px-10 lg:pl-32"
            >
              <div className="w-full">
                <div
                  ref={(el) => {
                    wordRefs.current[i] = el;
                  }}
                  style={{ "--p": 0 } as React.CSSProperties}
                  className="[transform:translateX(calc((1_-_var(--p))_*_60vw))] [opacity:calc(0.12_+_var(--p)_*_0.88)] will-change-transform"
                >
                  <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">
                    0{i + 1}
                  </p>
                  <h2 className="flex items-baseline gap-2 font-display text-[20vw] font-bold uppercase leading-[0.8] tracking-tighter sm:text-[15vw]">
                    {s.word}
                    <Link
                      to={s.to}
                      className="text-[0.3em] font-semibold normal-case tracking-normal text-primary transition-transform hover:scale-110"
                      aria-label={s.cta}
                    >
                      +
                    </Link>
                  </h2>
                </div>
                <div className="max-w-lg">
                  <p className="mt-8 text-lg leading-relaxed text-ink-muted">{s.body}</p>
                  <Link
                    to={s.to}
                    className="mt-7 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-black/25 px-6 py-3 text-sm font-semibold text-primary backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
                  >
                    {s.cta}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
      {/* Footer follows in the root layout — solid, no video behind it */}
    </div>
  );
}
