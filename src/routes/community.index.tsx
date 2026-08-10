import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/community/")({
  head: () => ({
    meta: [
      { title: "Community hub — Musicosy" },
      {
        name: "description",
        content:
          "Guidelines, safety tools, creator support and the standards that keep Musicosy a place artists want to post to.",
      },
      { property: "og:title", content: "Community hub — Musicosy" },
      {
        property: "og:description",
        content: "How the Musicosy community is governed, moderated and supported.",
      },
    ],
  }),
  component: CommunityHub,
});

const cards = [
  {
    title: "Community guidelines",
    body: "What's welcome, what isn't, and how enforcement escalates.",
    to: "/community/guidelines",
  },
  {
    title: "Safety & reporting",
    body: "Report content, block accounts, age-restricted flows and parental controls.",
    to: "/community/safety",
  },
  {
    title: "Creator support",
    body: "Publishing help, payout questions, appeals and rights disputes.",
    to: "/community/support",
  },
  {
    title: "Rights & royalties",
    body: "Splits, ownership claims and how money moves through the platform.",
    to: "/legal/rights",
  },
];

function CommunityHub() {
  return (
    <PageShell
      eyebrow="Community"
      title="Built by musicians, governed in public"
      lede="Musicosy hosts creators, seasoned independents, labels, agents and advertisers in the same space. These are the rules and tools that make that possible."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {cards.map((c) => (
          <Link
            key={c.to}
            to={c.to}
            className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lift"
          >
            <h2 className="text-lg font-semibold">{c.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
