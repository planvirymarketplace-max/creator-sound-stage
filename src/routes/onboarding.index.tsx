import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ArrowLeft, ArrowRight, PartyPopper } from "lucide-react";
import { SiteHeader } from "@/components/PageShell";

type Search = { id?: string; mode?: "login" | "signup" };

export const Route = createFileRoute("/onboarding")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    id: typeof search["id"] === "string" ? (search["id"] as string) : undefined,
    mode: search["mode"] === "login" ? "login" : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Join Musicosy — one field, one identity" },
      {
        name: "description",
        content:
          "Verify, set an age, pick a handle and land in Home. Creator tools unlock the first time you publish — no persona forms.",
      },
      { property: "og:title", content: "Join Musicosy — one field, one identity" },
      {
        property: "og:description",
        content: "A five-step onboarding: identity, verification, age gate, seed, Home.",
      },
    ],
  }),
  component: Onboarding,
});

const steps = ["Identity", "Verify", "Age", "Seed", "Home"] as const;

const genres = [
  "Indie rock",
  "R&B / Soul",
  "Hip-hop",
  "Electronic",
  "Americana",
  "Jazz",
  "Afrobeats",
  "Psych",
  "Podcast",
];

function Onboarding() {
  const { id, mode } = Route.useSearch();
  const [step, setStep] = useState(0);
  const [identifier, setIdentifier] = useState(id ?? "");
  const [code, setCode] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [picks, setPicks] = useState<string[]>([]);

  const handle =
    displayName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "")
      .slice(0, 18) || "yourhandle";

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="min-h-screen bg-surface">
      <SiteHeader />
      <main className="mx-auto w-full max-w-xl px-6 py-14">
        <ol className="flex items-center gap-2" aria-label="Onboarding progress">
          {steps.map((label, i) => (
            <li key={label} className="flex flex-1 flex-col gap-2">
              <span
                className={`h-1.5 rounded-full ${i <= step ? "bg-primary" : "bg-border"}`}
                aria-hidden
              />
              <span
                className={`text-[11px] font-medium uppercase tracking-wider ${
                  i === step ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {label}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-8 rounded-xl border border-border bg-card p-7 shadow-lift">
          {step === 0 && (
            <>
              <h1 className="text-2xl font-bold">
                {mode === "login" ? "Welcome back" : "Enter your email or phone"}
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                One field. If the identifier exists we log you in, otherwise we send a code.
              </p>
              <input
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="you@studio.com"
                className="mt-6 w-full rounded-md border border-input bg-background px-3.5 py-3 outline-none focus:ring-2 focus:ring-ring"
              />
            </>
          )}

          {step === 1 && (
            <>
              <h1 className="text-2xl font-bold">Verify it's you</h1>
              <p className="mt-2 text-sm text-muted-foreground">
                We sent a 6-digit code to {identifier || "your identifier"}. No persona, no profile
                is created yet — just an identity record.
              </p>
              <input
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                placeholder="123456"
                inputMode="numeric"
                className="mt-6 w-full rounded-md border border-input bg-background px-3.5 py-3 text-center text-2xl tracking-[0.4em] outline-none focus:ring-2 focus:ring-ring"
              />
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="text-2xl font-bold">Your birthdate</h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Checked against regional minimums. Under age routes to our restricted / parental
                flow in the{" "}
                <Link to="/community/safety" className="underline underline-offset-4">
                  Safety center
                </Link>
                .
              </p>
              <input
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                className="mt-6 w-full rounded-md border border-input bg-background px-3.5 py-3 outline-none focus:ring-2 focus:ring-ring"
              />
            </>
          )}

          {step === 3 && (
            <>
              <h1 className="text-2xl font-bold">Minimal seed</h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Display name and a handle. No bio, no avatar, no follows required — all skippable.
              </p>
              <input
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Display name"
                className="mt-6 w-full rounded-md border border-input bg-background px-3.5 py-3 outline-none focus:ring-2 focus:ring-ring"
              />
              <p className="mt-2 text-sm text-muted-foreground">
                Handle: <span className="font-medium text-foreground">@{handle}</span>
              </p>
              <p className="mt-6 text-sm font-medium">Seed Discover (optional)</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {genres.map((g) => {
                  const on = picks.includes(g);
                  return (
                    <button
                      key={g}
                      type="button"
                      onClick={() =>
                        setPicks((p) => (on ? p.filter((x) => x !== g) : [...p, g]))
                      }
                      className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                        on
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-muted-foreground hover:border-primary"
                      }`}
                    >
                      {g}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <PartyPopper className="h-8 w-8 text-primary" />
              <h1 className="mt-4 text-2xl font-bold">You're in, @{handle}</h1>
              <p className="mt-2 text-sm text-muted-foreground">
                You land in Home as Personal · Fan — able to follow, play and post. Creator Studio
                unlocks silently the first time you hit Publish. No persona step, ever.
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {[
                  "One interleaved feed: music, video, podcast clips, live",
                  "Discover filters by type when you're actively seeking",
                  "Business context is optional and added later, never forced",
                ].map((t) => (
                  <li key={t} className="flex gap-2 text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
              <Link
                to="/onboarding/business"
                className="mt-7 inline-block text-sm font-medium underline underline-offset-4 hover:text-primary"
              >
                Also managing a label or roster? Set up business →
              </Link>
            </>
          )}

          {step < 4 && (
            <div className="mt-8 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={back}
                disabled={step === 0}
                className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-muted-foreground disabled:opacity-40"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
              <div className="flex items-center gap-3">
                {step === 3 && (
                  <button
                    type="button"
                    onClick={next}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Skip
                  </button>
                )}
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex items-center gap-1.5 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"
                >
                  Continue <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          By continuing you agree to our{" "}
          <Link to="/legal/terms" className="underline underline-offset-4">
            Terms
          </Link>{" "}
          and{" "}
          <Link to="/community/guidelines" className="underline underline-offset-4">
            Community Guidelines
          </Link>
          .
        </p>
      </main>
    </div>
  );
}
