import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/PageShell";

export const Route = createFileRoute("/for/distributors")({
  head: () => ({
    meta: [
      { title: "For distributors — Musicosy" },
      {
        name: "description",
        content:
          "Pull Musicosy-native releases into your pipeline with structured metadata, delivery-ready assets and reconciled monthly statements.",
      },
      { property: "og:title", content: "For distributors — Musicosy" },
      {
        property: "og:description",
        content: "Delivery-ready independent content with clean metadata and split sheets.",
      },
    ],
  }),
  component: Distributors,
});

const sections = [
  {
    heading: "Clean metadata by default",
    body: [
      "ISRC, UPC, contributor roles, splits and territory restrictions are captured at upload, so deliveries don't bounce on a missing writer credit.",
    ],
  },
  {
    heading: "Delivery-ready assets",
    body: [
      "Masters, artwork at spec, clips and canvas assets pulled from the same library the artist promotes with. Bulk export by label, release window or catalog segment.",
    ],
  },
  {
    heading: "Partner API",
    body: [
      "Subscribe to release events, fetch deliverables, and post back statements. Rate-limited, versioned, and scoped to the labels who opted in to you.",
    ],
  },
  {
    heading: "Statements and reconciliation",
    body: [
      "Post monthly statements back and they surface per artist inside the label tenant, matched to the release they came from.",
    ],
  },
];

function Distributors() {
  return (
    <PageShell
      eyebrow="For distributors"
      title="A supply of independent content that arrives clean"
      lede="Musicosy captures the metadata at the moment of upload, which is the only moment anyone actually knows it."
    >
      {sections.map((s) => (
        <Section key={s.heading} heading={s.heading} body={s.body} />
      ))}
      <Link
        to="/onboarding/business"
        className="mt-8 inline-block rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
      >
        Apply as a partner
      </Link>
    </PageShell>
  );
}
