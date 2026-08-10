import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/PageShell";

export const Route = createFileRoute("/for/sync-agents")({
  head: () => ({
    meta: [
      { title: "For sync agents — Musicosy" },
      {
        name: "description",
        content:
          "Search rights-tagged independent catalog by mood, tempo and territory, and license directly from the rights holder with the paperwork attached.",
      },
      { property: "og:title", content: "For sync agents — Musicosy" },
      {
        property: "og:description",
        content: "Talent discovery with clearance data attached, not a follow-up email chain.",
      },
    ],
  }),
  component: SyncAgents,
});

const sections = [
  {
    heading: "Search that knows the rights",
    body: [
      "Filter by mood, tempo, key, instrumentation, territory and clearance status. One-stop-cleared recordings are flagged, so a shortlist is already actionable.",
    ],
  },
  {
    heading: "Talent discovery",
    body: [
      "Watchlists on rising independents, alerts on new releases in a brief's lane, and a direct line to the artist or their label tenant.",
    ],
  },
  {
    heading: "License in place",
    body: [
      "Send a licence request against a specific recording with usage, term and territory. Rights holders approve in-platform and a countersigned document is generated.",
    ],
  },
  {
    heading: "Briefs",
    body: [
      "Post a brief privately to selected labels or openly to the platform. Submissions arrive with split sheets and clearance status already filled in.",
    ],
  },
];

function SyncAgents() {
  return (
    <PageShell
      eyebrow="For sync agents"
      title="Find the track, and the rights, in one place"
      lede="The reason sync deals stall is paperwork, not taste. Musicosy attaches clearance data to the catalog you're searching."
    >
      {sections.map((s) => (
        <Section key={s.heading} heading={s.heading} body={s.body} />
      ))}
      <Link
        to="/onboarding/business"
        className="mt-8 inline-block rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
      >
        Set up an agency account
      </Link>
    </PageShell>
  );
}
