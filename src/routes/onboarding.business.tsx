import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Building2, ShieldCheck, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/PageShell";

export const Route = createFileRoute("/onboarding/business")({
  head: () => ({
    meta: [
      { title: "Set up a label or roster account — Musicosy" },
      {
        name: "description",
        content:
          "KYB onboarding for indie labels and agencies: business type, legal details, payout KYC, then a business tenant linked to your personal identity.",
      },
      { property: "og:title", content: "Set up a label or roster account — Musicosy" },
      {
        property: "og:description",
        content: "No profile setup, no avatar, no follow graph. Business context only.",
      },
    ],
  }),
  component: BusinessOnboarding,
});

const stages = ["Business type", "Legal & tax", "Payout KYC", "Verification"] as const;

function BusinessOnboarding() {
  const [stage, setStage] = useState(0);
  const [type, setType] = useState<"label" | "agency" | null>(null);

  return (
    <div className="min-h-screen bg-surface">
      <SiteHeader />
      <main className="mx-auto w-full max-w-xl px-6 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          Musicosy for Business
        </p>
        <h1 className="mt-3 text-3xl font-bold">Manage your label beyond the platform</h1>
        <p className="mt-3 text-muted-foreground">
          Optional and never forced. Your personal profile doesn't change — you just get a second
          context in the account switcher.
        </p>

        <ol className="mt-8 flex gap-2">
          {stages.map((s, i) => (
            <li key={s} className="flex-1">
              <span
                className={`block h-1.5 rounded-full ${i <= stage ? "bg-primary" : "bg-border"}`}
              />
              <span className="mt-2 block text-[11px] uppercase tracking-wider text-muted-foreground">
                {s}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-8 rounded-xl border border-border bg-card p-7 shadow-lift">
          {stage === 0 && (
            <>
              <Building2 className="h-7 w-7 text-primary" />
              <h2 className="mt-4 text-xl font-semibold">What are you setting up?</h2>
              <div className="mt-5 grid gap-3">
                {(
                  [
                    {
                      key: "label",
                      title: "Label / roster",
                      body: "Sign artists, manage releases, splits and payouts.",
                    },
                    {
                      key: "agency",
                      title: "Agency",
                      body: "Sync, licensing, management or distribution partner.",
                    },
                  ] as const
                ).map((o) => (
                  <button
                    key={o.key}
                    type="button"
                    onClick={() => setType(o.key)}
                    className={`rounded-lg border p-4 text-left transition-colors ${
                      type === o.key ? "border-primary bg-accent" : "border-border hover:border-primary"
                    }`}
                  >
                    <p className="font-semibold">{o.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{o.body}</p>
                  </button>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Buying ad space instead?{" "}
                <Link to="/advertising/businesses" className="underline underline-offset-4">
                  Advertising lives outside this flow
                </Link>
                .
              </p>
            </>
          )}

          {stage === 1 && (
            <>
              <h2 className="text-xl font-semibold">Legal & tax details</h2>
              <div className="mt-5 grid gap-3">
                {["Registered legal name", "Tax ID / EIN", "Registered address"].map((l) => (
                  <input
                    key={l}
                    placeholder={l}
                    className="w-full rounded-md border border-input bg-background px-3.5 py-3 outline-none focus:ring-2 focus:ring-ring"
                  />
                ))}
              </div>
            </>
          )}

          {stage === 2 && (
            <>
              <h2 className="text-xl font-semibold">Payout KYC</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Where roster earnings land, and who is authorised to move them.
              </p>
              <div className="mt-5 grid gap-3">
                {["Beneficial owner name", "Bank / payout account", "Payout currency"].map((l) => (
                  <input
                    key={l}
                    placeholder={l}
                    className="w-full rounded-md border border-input bg-background px-3.5 py-3 outline-none focus:ring-2 focus:ring-ring"
                  />
                ))}
              </div>
            </>
          )}

          {stage === 3 && (
            <>
              <ShieldCheck className="h-7 w-7 text-primary" />
              <h2 className="mt-4 text-xl font-semibold">In the verification queue</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                When it clears, your {type === "agency" ? "agency" : "label"} tenant is provisioned
                and linked to your personal identity. Catalog upload, roster invites and payout
                splits open at the same time.
              </p>
              <Link
                to="/advertising/labels"
                className="mt-6 inline-block text-sm font-medium underline underline-offset-4 hover:text-primary"
              >
                Promote your roster with label ad space →
              </Link>
            </>
          )}

          {stage < 3 && (
            <button
              type="button"
              onClick={() => setStage((s) => s + 1)}
              disabled={stage === 0 && !type}
              className="mt-7 inline-flex items-center gap-1.5 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow disabled:opacity-40"
            >
              Continue <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
