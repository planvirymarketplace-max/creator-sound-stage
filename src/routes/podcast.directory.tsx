import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/PageShell";

export const Route = createFileRoute("/podcast/directory")({
  head: () => ({
    meta: [
      { title: "Podcast directory — Musicosy" },
      {
        name: "description",
        content:
          "Browse independent music podcasts on Musicosy: artist interviews, label shows, scene reports and production talk.",
      },
      { property: "og:title", content: "Podcast directory — Musicosy" },
      {
        property: "og:description",
        content: "Every show, indexed by scene, genre and the artists featured in it.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PodcastDirectory,
});

function PodcastDirectory() {
  return (
    <PageShell
      eyebrow="Podcast"
      title="Podcast directory"
      lede="Shows are indexed by scene, genre and the artists appearing in them, so discovery works both directions."
    >
      <Section
        heading="Browse by scene"
        body={["City scenes, genres and label collectives, each with the releases discussed on the show."]}
      />
      <Section
        heading="Follow guests, not just shows"
        body={["Follow an artist and every episode they appear on lands in your feed."]}
      />
      <Section
        heading="Get listed"
        body={["Publish one episode with complete credits and the show is indexed automatically."]}
      />
    </PageShell>
  );
}
