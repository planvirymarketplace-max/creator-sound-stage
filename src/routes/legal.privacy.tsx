import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/PageShell";

export const Route = createFileRoute("/legal/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy policy — Musicosy" },
      {
        name: "description",
        content:
          "What Musicosy collects, how listening data shapes Discover, what advertisers never receive, and how to export or delete your data.",
      },
      { property: "og:title", content: "Privacy policy — Musicosy" },
      {
        property: "og:description",
        content: "Data we collect, how ranking uses it, and your export and deletion rights.",
      },
    ],
  }),
  component: Privacy,
});

const sections = [
  {
    heading: "What we collect",
    body: [
      "Identity data (email or phone, birthdate), content you publish, listening and interaction signals, and device data needed for playback and security. Business tenants additionally provide KYB and payout information.",
    ],
  },
  {
    heading: "How ranking uses it",
    body: [
      "Home and Discover rank on your own listening and follow signals. Seed genres picked during onboarding are a starting point only and can be cleared at any time.",
    ],
  },
  {
    heading: "What advertisers get",
    body: [
      "Aggregated, non-identifying audience segments and campaign performance. Advertisers never receive your email, phone, listening history or individual profile data.",
    ],
  },
  {
    heading: "Sharing with partners",
    body: [
      "Distribution and sync partners receive only the catalog metadata and assets needed to fulfil a delivery or licence you or your label approved.",
    ],
  },
  {
    heading: "Your controls",
    body: [
      "Export your data, clear listening history, opt out of personalised advertising, and delete your account with all published content in Settings → Privacy.",
    ],
  },
];

function Privacy() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Privacy policy"
      lede="We need listening signals to make Discover useful. We don't need to sell them, and we don't."
    >
      {sections.map((s) => (
        <Section key={s.heading} heading={s.heading} body={s.body} />
      ))}
    </PageShell>
  );
}
