import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Globe } from "./Globe";

const rails: {
  label: string;
  links: { label: string; to: string }[];
}[] = [
  {
    label: "Community",
    links: [
      { label: "Community hub", to: "/community" },
      { label: "Community guidelines", to: "/community/guidelines" },
      { label: "Safety & reporting", to: "/community/safety" },
      { label: "Creator support", to: "/community/support" },
    ],
  },
  {
    label: "Legal",
    links: [
      { label: "Terms of service", to: "/legal/terms" },
      { label: "Privacy policy", to: "/legal/privacy" },
      { label: "Rights & royalties", to: "/legal/rights" },
      { label: "Copyright / DMCA", to: "/legal/copyright" },
    ],
  },
  {
    label: "Advertising space",
    links: [
      { label: "For creators", to: "/advertising/creators" },
      { label: "For businesses", to: "/advertising/businesses" },
      { label: "For labels", to: "/advertising/labels" },
      { label: "Advertising overview", to: "/advertising" },
    ],
  },
  {
    label: "Get on Musicosy",
    links: [
      { label: "Start onboarding", to: "/onboarding" },
      { label: "Label or roster account", to: "/onboarding/business" },
      { label: "Sync & licensing", to: "/for/sync-agents" },
      { label: "Distribution partners", to: "/for/distributors" },
    ],
  },
];

// Flat rail — the wide, marquee-style link strip
const flatRail: { label: string; to: string }[] = [
  { label: "Community hub", to: "/community" },
  { label: "Guidelines", to: "/community/guidelines" },
  { label: "Safety", to: "/community/safety" },
  { label: "Creator support", to: "/community/support" },
  { label: "Terms", to: "/legal/terms" },
  { label: "Privacy", to: "/legal/privacy" },
  { label: "Rights & royalties", to: "/legal/rights" },
  { label: "DMCA", to: "/legal/copyright" },
  { label: "Advertise", to: "/advertising" },
  { label: "For creators", to: "/advertising/creators" },
  { label: "For businesses", to: "/advertising/businesses" },
  { label: "For labels", to: "/advertising/labels" },
  { label: "Sync", to: "/for/sync-agents" },
  { label: "Distributors", to: "/for/distributors" },
  { label: "Join", to: "/onboarding" },
];

export function BottomRail() {
  return (
    <footer className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      {/* Global view of the world */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Globe className="absolute -bottom-16 -right-10 w-[min(300px,70vw)] opacity-70 sm:-bottom-20 sm:right-6 sm:w-[min(380px,32vw)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink to-transparent" />
      </div>

      {/* Tier 1 — structured columns */}
      <div className="mx-auto w-full max-w-6xl px-6 pt-16 pb-10">
        <div className="flex flex-wrap items-end justify-between gap-6 pb-10">
          <p className="max-w-md font-display text-2xl leading-tight sm:text-3xl">
            Built for music independents.{" "}
            <span className="text-primary">Broadcast worldwide.</span>
          </p>
          <Link
            to="/onboarding"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Create your account
          </Link>
        </div>

        <div className="grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {rails.map((rail) => (
            <nav key={rail.label} aria-label={rail.label}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {rail.label}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {rail.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="inline-block text-sm text-ink-muted transition-all hover:translate-x-1 hover:text-ink-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* Tier 2 — the drifting flat rail */}
      <div className="relative border-y border-white/10 bg-black/30 py-3 backdrop-blur-sm">
        <div className="flex w-max animate-rail-drift gap-8 whitespace-nowrap will-change-transform hover:[animation-play-state:paused]">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex gap-8" aria-hidden={dup === 1}>
              {flatRail.map((link) => (
                <Link
                  key={`${dup}-${link.to}-${link.label}`}
                  to={link.to}
                  className="text-xs uppercase tracking-[0.2em] text-ink-muted transition-colors hover:text-primary"
                  tabIndex={dup === 1 ? -1 : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Tier 3 — signature */}
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-10 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center">
        <Logo className="h-10 sm:h-14" />
        <div className="sm:text-right">
          <p className="text-sm text-ink-muted">Everything music. One place.</p>
          <p className="mt-1 text-xs text-ink-muted/70">
            © {new Date().getFullYear()} Musicosy — independent by design.
          </p>
        </div>
      </div>
    </footer>
  );
}
