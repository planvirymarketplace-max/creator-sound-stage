import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/PageShell";

export const Route = createFileRoute("/community/support")({
  head: () => ({
    meta: [
      { title: "Creator support — Musicosy" },
      {
        name: "description",
        content:
          "Help with publishing, payouts, appeals, roster management and rights disputes for Musicosy creators, artists and labels.",
      },
      { property: "og:title", content: "Creator support — Musicosy" },
      {
        property: "og:description",
        content: "Publishing help, payout questions, appeals and rights disputes.",
      },
    ],
  }),
  component: Support,
});

const sections = [
  {
    heading: "Publishing & Creator Studio",
    body: [
      "Creator Studio unlocks the first time you publish — there is no application. If your upload is stuck in processing, transcode status and retry live in Studio → Uploads.",
    ],
  },
  {
    heading: "Payouts & splits",
    body: [
      "Splits are set per release and can include collaborators who aren't on Musicosy yet. Payout holds usually mean incomplete KYC on one recipient.",
    ],
  },
  {
    heading: "Rights disputes",
    body: [
      "Counter-claims are reviewed by the rights team, not general moderation. Revenue is held in escrow while a dispute is open rather than paid to either side.",
    ],
  },
  {
    heading: "Label & agency support",
    body: [
      "Verified business tenants get a named reviewer for roster escalations, catalog migrations and bulk delivery issues.",
    ],
  },
  {
    heading: "Appeals",
    body: [
      "Any enforcement action can be appealed once, with the original notice attached. Appeals on live restrictions are prioritised because the window matters.",
    ],
  },
];

function Support() {
  return (
    <PageShell
      eyebrow="Community"
      title="Creator support"
      lede="Answers for the things that actually stall a release: processing, splits, claims and appeals."
    >
      {sections.map((s) => (
        <Section key={s.heading} heading={s.heading} body={s.body} />
      ))}
    </PageShell>
  );
}
