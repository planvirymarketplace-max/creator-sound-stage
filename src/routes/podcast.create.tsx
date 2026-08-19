import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/PageShell";

export const Route = createFileRoute("/podcast/create")({
  head: () => ({
    meta: [
      { title: "Create a podcast — Musicosy" },
      {
        name: "description",
        content:
          "Set up a music podcast on Musicosy: show artwork, episode upload, guest credits, clip export and distribution.",
      },
      { property: "og:title", content: "Create a podcast — Musicosy" },
      {
        property: "og:description",
        content: "From first episode to full distribution in a single setup flow.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CreatePodcast,
});

function CreatePodcast() {
  return (
    <PageShell
      eyebrow="Podcast"
      title="Create a podcast"
      lede="Four steps: claim the show, upload an episode, credit the people in it, choose where it goes."
    >
      <Section
        heading="1. Claim the show"
        body={["Name, artwork, category and hosts. Labels can create shows under a roster tenant."]}
      />
      <Section
        heading="2. Upload and edit"
        body={[
          "Upload audio or video. Chapter markers, music beds and track drops are added on the timeline without leaving the browser.",
        ]}
      />
      <Section
        heading="3. Credit and clear"
        body={[
          "Tag guests, artists and any music used. Cleared usage unlocks monetization; uncleared usage is flagged before publish.",
        ]}
      />
      <Section
        heading="4. Distribute"
        body={["Musicosy feed, podcast directory and external RSS platforms, toggled per episode."]}
      />
    </PageShell>
  );
}
