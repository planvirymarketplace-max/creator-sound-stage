import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/advertising/")({
  head: () => ({
    meta: [
      { title: "Advertising space on Musicosy" },
      {
        name: "description",
        content:
          "Ad space for creators promoting releases, businesses reaching music audiences, and labels pushing a roster. Three inventory types, one marketplace.",
      },
      { property: "og:title", content: "Advertising space on Musicosy" },
      {
        property: "og:description",
        content: "Creator promos, brand campaigns and label roster pushes across feed, live and Discover.",
      },
    ],
  }),
  component: AdvertisingHub,
});

const lanes = [
  {
    title: "For creators",
    body: "Boost a release, a live set or a podcast episode to listeners already leaning your way.",
    to: "/advertising/creators",
  },
  {
    title: "For businesses",
    body: "Buy audio, feed and live-adjacent inventory next to genres your customers actually pick.",
    to: "/advertising/businesses",
  },
  {
    title: "For labels",
    body: "Run campaigns across a whole roster from one budget, with per-artist attribution.",
    to: "/advertising/labels",
  },
];

function AdvertisingHub() {
  return (
    <PageShell
      eyebrow="Advertising"
      title="Ad space, sold with context"
      lede="Musicosy inventory sits inside a feed people opened on purpose. Three lanes, depending on whether you're promoting your own work, a brand, or a roster."
    >
      <div className="grid gap-5 sm:grid-cols-3">
        {lanes.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lift"
          >
            <h2 className="text-lg font-semibold">{l.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{l.body}</p>
            <span className="mt-4 inline-block text-sm font-medium text-primary">Learn more →</span>
          </Link>
        ))}
      </div>
      <div className="mt-12 rounded-xl border border-border bg-surface p-6">
        <h2 className="text-lg font-semibold">Inventory at a glance</h2>
        <ul className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
          {[
            "In-feed native post (music, video, podcast card)",
            "Pre-roll and mid-roll audio on non-subscriber playback",
            "Live stream sponsor card and lower third",
            "Discover placement by genre, mood or territory",
            "Playlist and editorial takeover",
            "Artist page sponsorship for tour and release windows",
          ].map((i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {i}
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
