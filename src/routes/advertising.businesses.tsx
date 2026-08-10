import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/PageShell";

export const Route = createFileRoute("/advertising/businesses")({
  head: () => ({
    meta: [
      { title: "Advertising for businesses — Musicosy" },
      {
        name: "description",
        content:
          "Reach music-first audiences with in-feed, audio, live and Discover placements. Brand-safe inventory, aggregated reporting, no creator personal data.",
      },
      { property: "og:title", content: "Advertising for businesses — Musicosy" },
      {
        property: "og:description",
        content: "Buy audio, in-feed and live-adjacent inventory across the Musicosy ecosystem.",
      },
    ],
  }),
  component: ForBusinesses,
});

const sections = [
  {
    heading: "Where your ads run",
    body: [
      "In-feed native posts, pre-roll and mid-roll audio, live sponsor cards, Discover genre placements and editorial takeovers. Every format is native to a content type rather than bolted on top of it.",
    ],
  },
  {
    heading: "Audience without surveillance",
    body: [
      "Target by genre, mood, listening context, city and language. You get aggregated segments and campaign performance — never a listener's identity, history or contact details.",
    ],
  },
  {
    heading: "Brand safety",
    body: [
      "Inventory is graded by content rating and creator standing. Exclude explicit content, live streams, or specific genres, and you never appear against content under an open rights claim.",
    ],
  },
  {
    heading: "Buying and measurement",
    body: [
      "Self-serve from $500, managed above $10k, with third-party verification and lift studies on larger flights. Billing and creative review are handled by our advertising partner.",
    ],
  },
];

function ForBusinesses() {
  return (
    <PageShell
      eyebrow="Advertising · Businesses"
      title="Space next to music people chose on purpose"
      lede="Musicosy audiences arrive with intent — a genre, an artist, a live set. That context is the targeting, so you don't have to buy guesswork."
    >
      {sections.map((s) => (
        <Section key={s.heading} heading={s.heading} body={s.body} />
      ))}
      <div className="mt-10 rounded-xl border border-border bg-surface p-6">
        <h2 className="text-lg font-semibold">Ready to book inventory?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Advertising sits outside the Musicosy identity system — no social account is created for
          your brand.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="mailto:ads@musicosy.com?subject=Musicosy%20advertising%20inquiry"
            className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            Talk to the ad team
          </a>
          <Link
            to="/advertising"
            className="rounded-md border border-input px-5 py-3 text-sm font-semibold transition-colors hover:bg-accent"
          >
            See all inventory
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
