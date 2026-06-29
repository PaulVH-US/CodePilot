import Link from "next/link";
import { AnimateIn } from "~/components/animate-in";

const BRAND = "oklch(0.65 0.2 255)";
const BRAND_DIM = "oklch(0.65 0.2 255 / 0.12)";

const features = [
  {
    icon: "✦",
    title: "Prompt Optimizer",
    description:
      "Rewrites your prompts before they reach the AI — clarifying intent, filling gaps, and flagging ambiguity so the output is right the first time.",
  },
  {
    icon: "◈",
    title: "Code Explainer",
    description:
      "Translates every function, variable, and architecture decision into plain English. Understand exactly what was built and why.",
  },
  {
    icon: "◎",
    title: "Intelligent Debugging",
    description:
      "Detects common mistakes, explains error messages in plain language, and walks you through a fix — step by step.",
  },
  {
    icon: "⬢",
    title: "Architecture Map",
    description:
      "Visual overview of files, APIs, components, and databases. See how your entire project fits together at a glance.",
  },
];

const steps = [
  {
    number: "01",
    title: "Describe your idea",
    body: "Create a project and write what you want to build in plain language.",
  },
  {
    number: "02",
    title: "CodePilot sharpens your prompt",
    body: "The optimizer rewrites your request for clarity before it reaches the AI.",
  },
  {
    number: "03",
    title: "AI builds it, CodePilot explains it",
    body: "Every generated file is annotated, mapped, and ready to explore.",
  },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "",
    highlight: false,
    features: ["3 projects", "Basic prompt optimization", "Code explanations"],
    cta: "Join Waitlist",
  },
  {
    name: "Pro",
    price: "$20",
    period: "/month",
    highlight: true,
    features: [
      "Unlimited projects",
      "Advanced debugging",
      "Architecture visualization",
      "AI project memory",
      "Deployment assistant",
    ],
    cta: "Join Waitlist",
  },
  {
    name: "Teams",
    price: "$25",
    period: "/user/month",
    highlight: false,
    features: [
      "Shared workspaces",
      "Team knowledge base",
      "Collaboration tools",
      "Admin dashboard",
    ],
    cta: "Join Waitlist",
  },
];

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero — CSS animations (above the fold, no JS needed) */}
      <section className="relative mx-auto max-w-6xl px-6 pt-28 pb-24 text-center">
        <div
          className="absolute inset-0 -z-10 opacity-20 blur-[120px]"
          style={{
            background: `radial-gradient(ellipse at 60% 0%, ${BRAND}, transparent 70%)`,
          }}
        />
        <p
          className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground tracking-widest uppercase"
          style={{
            animation: "fade-up 0.6s ease-out both",
            animationDelay: "0ms",
          }}
        >
          AI-Powered Development Companion
        </p>
        <h1
          className="text-5xl font-bold tracking-tight leading-tight sm:text-6xl lg:text-7xl"
          style={{
            animation: "fade-up 0.6s ease-out both",
            animationDelay: "120ms",
          }}
        >
          Understand More.
          <br />
          <span style={{ color: BRAND }}>Build Better.</span>
        </h1>
        <p
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed"
          style={{
            animation: "fade-up 0.6s ease-out both",
            animationDelay: "240ms",
          }}
        >
          CodePilot goes beyond code generation — it teaches you why the code
          works, organizes your AI conversations, and guides you through every
          bug. Software development for anyone with an idea.
        </p>
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{
            animation: "fade-up 0.6s ease-out both",
            animationDelay: "360ms",
          }}
        >
          <Link
            href="/waitlist"
            className="rounded-md px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: BRAND }}
          >
            Join Waitlist
          </Link>
          <Link
            href="#features"
            className="rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            See features
          </Link>
        </div>
      </section>

      {/* Problem */}
      <section className="border-y border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimateIn>
            <h2 className="text-2xl font-bold tracking-tight">
              AI generates code fast. Understanding it is still hard.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Inconsistent prompts, confusing errors, no project memory — most
              AI coding tools leave you with working code you can't maintain or
              learn from. CodePilot bridges that gap.
            </p>
          </AnimateIn>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              "Lost productivity",
              "Debugging frustration",
              "Low confidence",
              "Abandoned projects",
            ].map((pain, i) => (
              <AnimateIn key={pain} delay={i * 80} className="h-full">
                <div className="h-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-muted-foreground">
                  {pain}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-24">
        <AnimateIn className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Everything you need to build with confidence
          </h2>
          <p className="mt-3 text-muted-foreground">
            Four tools designed to make AI-assisted development organized,
            understandable, and repeatable.
          </p>
        </AnimateIn>
        <div className="grid gap-px bg-border grid-cols-2 rounded-xl overflow-hidden">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-background p-8 hover:bg-muted/40 transition-colors"
            >
              <AnimateIn delay={i * 80}>
                <span className="block text-2xl mb-4" style={{ color: BRAND }}>
                  {f.icon}
                </span>
                <h3 className="font-semibold text-foreground mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </AnimateIn>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-border bg-muted/30 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <AnimateIn className="mb-14 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              From idea to deployed app
            </h2>
            <p className="mt-3 text-muted-foreground">
              Three steps. Zero confusion.
            </p>
          </AnimateIn>
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((s, i) => (
              <AnimateIn key={s.number} delay={i * 150}>
                <span
                  className="block text-4xl font-black tracking-tighter"
                  style={{ color: BRAND }}
                >
                  {s.number}
                </span>
                <h3 className="mt-3 font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {s.body}
                </p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-6 py-24">
        <AnimateIn className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Simple pricing</h2>
          <p className="mt-3 text-muted-foreground">
            Start free. Scale when you're ready.
          </p>
        </AnimateIn>
        <div className="grid gap-6 sm:grid-cols-3">
          {plans.map((plan, i) => (
            <AnimateIn key={plan.name} delay={i * 120}>
              <div
                className="relative flex flex-col rounded-xl border p-8 transition-colors h-full"
                style={
                  plan.highlight
                    ? { borderColor: BRAND, backgroundColor: BRAND_DIM }
                    : undefined
                }
              >
                {plan.highlight && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-xs font-semibold text-white"
                    style={{ backgroundColor: BRAND }}
                  >
                    Most popular
                  </span>
                )}
                <div className="mb-6">
                  <p className="text-sm font-medium text-muted-foreground">
                    {plan.name}
                  </p>
                  <p className="mt-1 text-4xl font-bold tracking-tight">
                    {plan.price}
                    <span className="text-base font-normal text-muted-foreground">
                      {plan.period}
                    </span>
                  </p>
                </div>
                <ul className="flex-1 space-y-2.5 mb-8">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span
                        style={{ color: BRAND }}
                        className="mt-0.5 shrink-0"
                      >
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/waitlist"
                  className="block rounded-md py-2.5 text-center text-sm font-semibold transition-opacity hover:opacity-90"
                  style={
                    plan.highlight
                      ? { backgroundColor: BRAND, color: "white" }
                      : undefined
                  }
                >
                  {plan.cta}
                </Link>
              </div>
            </AnimateIn>
          ))}
        </div>
        <AnimateIn delay={200}>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Need more?{" "}
            <Link href="/waitlist" className="underline hover:text-foreground">
              Contact us for Enterprise pricing
            </Link>{" "}
            — private AI models, SSO, and API access.
          </p>
        </AnimateIn>
      </section>

      {/* CTA Banner */}
      <section className="border-t border-border py-24">
        <AnimateIn className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            A future where anyone with an idea can build software.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Not by guessing. By understanding.
          </p>
          <Link
            href="/waitlist"
            className="mt-8 inline-block rounded-md px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: BRAND }}
          >
            Join Waitlist
          </Link>
        </AnimateIn>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-bold text-sm">
            Code<span style={{ color: BRAND }}>Pilot</span>
          </p>
          <p className="text-xs text-muted-foreground">
            © 2026 CodePilot. Understand More. Build Better.
          </p>
        </div>
      </footer>
    </main>
  );
}
