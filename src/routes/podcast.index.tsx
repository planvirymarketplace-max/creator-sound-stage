import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/PageShell";

export const Route = createFileRoute("/podcast/")({
  head: () => ({
    meta: [
      { title: "Podcast hub — Musicosy" },
      {
        name: "description",
        content:
          "Host, publish and monetize music podcasts on Musicosy — episodes, guests, clips and analytics in one place.",
      },
      { property: "og:title", content: "Podcast hub — Musicosy" },
      {
        property: "og:description",
        content: "Music talk, artist interviews and label shows, hosted next to the music itself.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PodcastHub,
});

function PodcastHub() {
  return (
    <PageShell
      eyebrow="Podcast"
      title="Podcast hub"
      lede="Your show lives beside the catalogue it talks about. Episodes, guest credits and clips all link back to real releases."
    >
      <Section
        heading="Built for music shows"
        body={[
          "Drop a track into an episode and the release, artist and splits stay attached. Listeners tap through from the episode to the song, the artist page or the label roster.",
        ]}
      />
      <Section
        heading="One publish, every surface"
        body={[
          "Publishing pushes the episode to the feed, the podcast directory and your RSS distribution at once, with clip cutting for social in the same step.",
        ]}
      />
      <Section
        heading="Monetization"
        body={[
          "Host-read slots, dynamic ad insertion from the advertising marketplace, and paid subscriber episodes for your community.",
        ]}
      />
    </PageShell>
  );
}
