import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/PageShell";

export const Route = createFileRoute("/legal/terms")({
  head: () => ({
    meta: [
      { title: "Terms of service — Musicosy" },
      {
        name: "description",
        content:
          "The agreement covering Musicosy accounts, business tenants, content licensing, monetization and account termination.",
      },
      { property: "og:title", content: "Terms of service — Musicosy" },
      {
        property: "og:description",
        content: "Accounts, content licence, monetization and termination terms for Musicosy.",
      },
    ],
  }),
  component: Terms,
});

const sections = [
  {
    heading: "1. Your account",
    body: [
      "One identity per person. A business tenant (label, roster or agency) is linked to a personal identity but governed separately, including its own payout and tax obligations.",
    ],
  },
  {
    heading: "2. Licence you grant us",
    body: [
      "You keep ownership of everything you upload. You grant Musicosy a non-exclusive licence to host, stream, transcode, cache and promote that content on the platform and in platform marketing, revocable by deleting the content.",
    ],
  },
  {
    heading: "3. Monetization",
    body: [
      "Eligibility depends on rights verification and completed payout KYC. Revenue is calculated per stream, per licence and per ad placement, and reported in Creator Studio.",
    ],
  },
  {
    heading: "4. Sync, licensing and distribution",
    body: [
      "Deals made through sync or distribution partners are contracts between you (or your label) and that partner. Musicosy facilitates discovery and delivery and takes a disclosed platform fee.",
    ],
  },
  {
    heading: "5. Advertising",
    body: [
      "Ad placements are governed by the advertising policy and served through our advertising partner. Advertisers do not receive creator personal data.",
    ],
  },
  {
    heading: "6. Suspension and termination",
    body: [
      "We may suspend accounts for guideline violations, fraud or unresolved rights claims. You may close your account at any time; payouts already earned are still settled.",
    ],
  },
];

function Terms() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Terms of service"
      lede="Plain-language summary first, clause by clause. This governs personal identities, creator monetization and business tenants."
    >
      {sections.map((s) => (
        <Section key={s.heading} heading={s.heading} body={s.body} />
      ))}
    </PageShell>
  );
}
