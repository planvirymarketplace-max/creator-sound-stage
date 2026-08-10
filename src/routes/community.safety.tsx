import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/PageShell";

export const Route = createFileRoute("/community/safety")({
  head: () => ({
    meta: [
      { title: "Safety & reporting — Musicosy" },
      {
        name: "description",
        content:
          "Reporting tools, blocking, age gating and parental controls on Musicosy, and what happens after you file a report.",
      },
      { property: "og:title", content: "Safety & reporting — Musicosy" },
      {
        property: "og:description",
        content: "How to report content, restrict accounts, and how age gating works.",
      },
    ],
  }),
  component: Safety,
});

const sections = [
  {
    heading: "Reporting content",
    body: [
      "Every post, clip, episode, live stream and comment has a report action. Reports are triaged by type — rights, safety, spam — and rights claims route straight to the copyright team rather than general moderation.",
    ],
  },
  {
    heading: "Blocking and restricting",
    body: [
      "Blocking removes an account from your feed, your comments and your live chat. Restricting keeps their comments visible only to them while you decide.",
    ],
  },
  {
    heading: "Age gating",
    body: [
      "Birthdate is captured during onboarding and checked against regional minimums. Accounts under the minimum age route into a restricted experience with parental consent, limited discovery and no monetization.",
    ],
  },
  {
    heading: "Live safety",
    body: [
      "Live chat has keyword filters, slow mode and moderator seats. Stream-level takedowns happen before a replay is published.",
    ],
  },
  {
    heading: "After a report",
    body: [
      "You get an outcome notification. Where a report leads to enforcement, the reported party is told which rule was broken and how to appeal.",
    ],
  },
];

function Safety() {
  return (
    <PageShell
      eyebrow="Community"
      title="Safety & reporting"
      lede="Tools to control your own space, and a moderation pipeline that treats rights claims differently from safety claims."
    >
      {sections.map((s) => (
        <Section key={s.heading} heading={s.heading} body={s.body} />
      ))}
    </PageShell>
  );
}
