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
    label: "Podcast",
    links: [
      { label: "Podcast hub", to: "/podcast" },
      { label: "Create a podcast", to: "/podcast/create" },
      { label: "Podcast analytics", to: "/podcast/analytics" },
      { label: "Podcast directory", to: "/podcast/directory" },
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


export function BottomRail() {
  return (
    <footer className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      {/* Global view of the world */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Globe className="absolute -bottom-24 -right-14 w-[min(240px,55vw)] opacity-20 sm:-bottom-32 sm:-right-8 sm:w-[min(300px,22vw)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink to-transparent" />
      </div>

      {/* Rail 1 — link columns */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
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
                      className="text-sm text-ink-foreground/75 transition-colors hover:text-ink-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>


        {/* Rail 2 — signature */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
          <div className="flex min-w-0 items-center gap-3">
            <Logo className="h-7" />
            <p className="truncate text-xs text-ink-muted">Everything music. One place.</p>
          </div>
          <p className="text-xs text-ink-muted">© {new Date().getFullYear()} Musicosy</p>
        </div>
      </div>
    </footer>
  );
}
