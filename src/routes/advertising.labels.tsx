import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/PageShell";

export const Route = createFileRoute("/advertising/labels")({
  head: () => ({
    meta: [
      { title: "Advertising for labels — Musicosy" },
      {
        name: "description",
        content:
          "Roster-wide campaigns with one budget, per-artist attribution, release-window pacing and shared creative libraries for indie labels.",
      },
      { property: "og:title", content: "Advertising for labels — Musicosy" },
      {
        property: "og:description",
        content: "Run campaigns across a whole roster with per-artist attribution.",
      },
    ],
  }),
  component: ForLabels,
});

const sections = [
  {
    heading: "One budget, many artists",
    body: [
      "Allocate a monthly roster budget and let release windows pull from it, or ring-fence spend per artist. Nothing runs on an artist's page without their release being live.",
    ],
  },
  {
    heading: "Per-artist attribution",
    body: [
      "Every campaign reports at artist, release and track level, so you can see which signings actually convert spend into repeat listeners.",
    ],
  },
  {
    heading: "Release-window pacing",
    body: [
      "Pre-save, release day, week two and tour announce phases are templated. Spend ramps automatically instead of front-loading on day one.",
    ],
  },
  {
    heading: "Shared creative library",
    body: [
      "Artwork, clips and copy live in the label tenant so the same assets serve promotion, distribution delivery and sync pitches.",
    ],
  },
];

function ForLabels() {
  return (
    <PageShell
      eyebrow="Advertising · Labels"
      title="Promote a roster, not one release at a time"
      lede="Built for indie labels running six campaigns at once with two people and a spreadsheet they'd like to delete."
    >
      {sections.map((s) => (
        <Section key={s.heading} heading={s.heading} body={s.body} />
      ))}
      <Link
        to="/onboarding/business"
        className="mt-8 inline-block rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
      >
        Set up a label account
      </Link>
    </PageShell>
  );
}
