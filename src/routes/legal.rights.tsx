import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/PageShell";

export const Route = createFileRoute("/legal/rights")({
  head: () => ({
    meta: [
      { title: "Rights & royalties — Musicosy" },
      {
        name: "description",
        content:
          "How ownership, splits, sync licences and royalty payouts work for Musicosy creators, indie artists and labels.",
      },
      { property: "og:title", content: "Rights & royalties — Musicosy" },
      {
        property: "og:description",
        content: "Ownership, splits, sync licences and payout mechanics on Musicosy.",
      },
    ],
  }),
  component: Rights,
});

const sections = [
  {
    heading: "You keep your masters",
    body: [
      "Uploading to Musicosy never transfers ownership of a recording or composition. Nothing in distribution or sync changes that default.",
    ],
  },
  {
    heading: "Splits",
    body: [
      "Every release carries a split sheet: performers, writers, producers and label share. Splits must total 100% before monetization opens, and each recipient completes their own payout KYC.",
    ],
  },
  {
    heading: "Sync licences",
    body: [
      "Sync agents request a licence against a specific recording with usage, term and territory attached. Rights holders approve or decline; approved licences generate a countersigned document and a one-off fee plus any agreed backend.",
    ],
  },
  {
    heading: "Distribution royalties",
    body: [
      "Where a distributor pushes Musicosy content to external services, statements are reconciled monthly and shown per artist inside the label tenant.",
    ],
  },
  {
    heading: "Disputes and escrow",
    body: [
      "While an ownership claim is open, revenue for the disputed asset is held in escrow. Neither party is paid until the claim resolves or a counter-claim lapses.",
    ],
  },
];

function Rights() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Rights & royalties"
      lede="Independent by default: you keep the masters, the split sheet decides the money, and disputes freeze revenue rather than pick a side."
    >
      {sections.map((s) => (
        <Section key={s.heading} heading={s.heading} body={s.body} />
      ))}
    </PageShell>
  );
}
