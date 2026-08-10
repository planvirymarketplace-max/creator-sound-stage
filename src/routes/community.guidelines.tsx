import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/PageShell";

export const Route = createFileRoute("/community/guidelines")({
  head: () => ({
    meta: [
      { title: "Community guidelines — Musicosy" },
      {
        name: "description",
        content:
          "The standards for posting music, video, podcasts and live content on Musicosy, plus how enforcement and appeals work.",
      },
      { property: "og:title", content: "Community guidelines — Musicosy" },
      {
        property: "og:description",
        content: "Credit the work, own the rights, keep it human. How Musicosy is moderated.",
      },
    ],
  }),
  component: Guidelines,
});

const sections = [
  {
    heading: "1. Own it or credit it",
    body: [
      "Only post recordings, stems, artwork or video you own or have permission to use. Features, samples and remixes need credited collaborators and cleared splits before monetization opens.",
    ],
  },
  {
    heading: "2. No impersonation of artists or labels",
    body: [
      "Fan pages are welcome and must be labelled as such. Claiming to be an artist, band, label or agency you don't represent removes the account and any linked business tenant.",
    ],
  },
  {
    heading: "3. Keep engagement real",
    body: [
      "Bought streams, bot follows, coordinated comment rings and playlist farms are removed and de-monetized. Ranking is built on genuine listening signals; gaming it harms every independent on the platform.",
    ],
  },
  {
    heading: "4. Harassment, hate and threats",
    body: [
      "No targeted abuse, hate speech, doxxing, or sexual content involving minors — reported once, actioned fast, no strike ladder. Robust criticism of music is fine; attacks on people are not.",
    ],
  },
  {
    heading: "5. Live is held to the same bar",
    body: [
      "Live sets are moderated in real time. Repeated violations during a stream end the stream and restrict future live access before the recording is published.",
    ],
  },
  {
    heading: "6. Advertising and paid content",
    body: [
      "Sponsored posts, label promotions and brand partnerships must be disclosed with the paid-partnership label. Ad inventory follows the separate advertising policy.",
    ],
  },
  {
    heading: "7. Enforcement and appeals",
    body: [
      "Most first violations are a content removal plus a notice. Repeat violations restrict distribution, then monetization, then the account. Every action can be appealed through Creator Support, and business tenants get a named reviewer.",
    ],
  },
];

function Guidelines() {
  return (
    <PageShell
      eyebrow="Community"
      title="Community guidelines"
      lede="Short version: own the work, credit the people on it, and treat other creators like colleagues. Long version below."
    >
      {sections.map((s) => (
        <Section key={s.heading} heading={s.heading} body={s.body} />
      ))}
    </PageShell>
  );
}
