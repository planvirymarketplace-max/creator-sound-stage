import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/PageShell";

export const Route = createFileRoute("/podcast/analytics")({
  head: () => ({
    meta: [
      { title: "Podcast analytics — Musicosy" },
      {
        name: "description",
        content:
          "Listener retention, episode drop-off, track-through rates and ad performance for podcasts on Musicosy.",
      },
      { property: "og:title", content: "Podcast analytics — Musicosy" },
      {
        property: "og:description",
        content: "See which episodes convert listeners into fans of the music.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PodcastAnalytics,
});

function PodcastAnalytics() {
  return (
    <PageShell
      eyebrow="Podcast"
      title="Podcast analytics"
      lede="Downloads are the vanity number. These are the ones that move a career."
    >
      <Section
        heading="Retention by minute"
        body={["Where listeners leave, where they rewind, and which segments get clipped and shared."]}
      />
      <Section
        heading="Track-through"
        body={[
          "How many listeners tapped from an episode into the track, the artist page or a save — the number sync agents and labels care about.",
        ]}
      />
      <Section
        heading="Revenue"
        body={["Ad slots filled, effective rate per thousand, subscriber conversions and payout timing."]}
      />
    </PageShell>
  );
}
