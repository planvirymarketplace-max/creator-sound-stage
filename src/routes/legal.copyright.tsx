import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/PageShell";

export const Route = createFileRoute("/legal/copyright")({
  head: () => ({
    meta: [
      { title: "Copyright & DMCA — Musicosy" },
      {
        name: "description",
        content:
          "How to file a copyright takedown or counter-notice on Musicosy, what a valid notice needs, and how repeat infringement is handled.",
      },
      { property: "og:title", content: "Copyright & DMCA — Musicosy" },
      {
        property: "og:description",
        content: "Filing takedowns, counter-notices and the repeat-infringer policy.",
      },
    ],
  }),
  component: Copyright,
});

const sections = [
  {
    heading: "Filing a notice",
    body: [
      "A valid notice identifies the infringed work, the exact Musicosy URL, your contact details, a good-faith statement, and a signature. Notices go to the rights team, not general moderation.",
    ],
  },
  {
    heading: "Counter-notices",
    body: [
      "If your content was removed in error, file a counter-notice with the reason and your licence or ownership evidence. Content is restored if no legal action is filed within the statutory window.",
    ],
  },
  {
    heading: "Samples, covers and remixes",
    body: [
      "Covers need a mechanical licence; samples need clearance from the master and publishing owners. Unclear clearance blocks monetization rather than deleting the post.",
    ],
  },
  {
    heading: "Repeat infringement",
    body: [
      "Accounts and business tenants with repeated upheld claims lose upload and distribution access, then the account. Bad-faith notices are also sanctioned.",
    ],
  },
];

function Copyright() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Copyright & DMCA"
      lede="Rights claims run on their own track with their own reviewers, because getting them wrong costs independents real money."
    >
      {sections.map((s) => (
        <Section key={s.heading} heading={s.heading} body={s.body} />
      ))}
    </PageShell>
  );
}
