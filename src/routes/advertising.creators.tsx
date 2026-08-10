import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/PageShell";

export const Route = createFileRoute("/advertising/creators")({
  head: () => ({
    meta: [
      { title: "Advertising for creators — Musicosy" },
      {
        name: "description",
        content:
          "Self-serve promotion for independent creators: boost a release, a live set or an episode with a small budget and honest reporting.",
      },
      { property: "og:title", content: "Advertising for creators — Musicosy" },
      {
        property: "og:description",
        content: "Boost releases and live sets from inside Creator Studio, from $5 a day.",
      },
    ],
  }),
  component: ForCreators,
});

const sections = [
  {
    heading: "Boost from inside Creator Studio",
    body: [
      "Any post you've published can become a promotion in two taps. No separate ad account, no media buyer, no minimum spend beyond $5 a day.",
    ],
  },
  {
    heading: "Targeting that speaks music",
    body: [
      "Reach by genre, mood, similar-artist affinity, city and tour radius — not vague interest buckets. Release-week and tour-window presets are built in.",
    ],
  },
  {
    heading: "Reporting you can act on",
    body: [
      "Saves, follows, repeat listens and ticket-link clicks, not just impressions. Every campaign shows cost per new follower and cost per repeat listener.",
    ],
  },
  {
    heading: "Sponsorships and paid partnerships",
    body: [
      "Brand deals brokered on-platform get the paid-partnership label automatically, so disclosure isn't something you have to remember.",
    ],
  },
];

function ForCreators() {
  return (
    <PageShell
      eyebrow="Advertising · Creators"
      title="Promote your own work without an agency"
      lede="Independent budgets, independent controls. Built for a release week, not a quarterly media plan."
    >
      {sections.map((s) => (
        <Section key={s.heading} heading={s.heading} body={s.body} />
      ))}
      <Link
        to="/onboarding"
        className="mt-8 inline-block rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
      >
        Create an account to boost
      </Link>
    </PageShell>
  );
}
