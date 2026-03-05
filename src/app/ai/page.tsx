"use client";

import Link from "next/link";
import {
  FiActivity,
  FiBarChart2,
  FiCloudLightning,
  FiCompass,
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiShield,
  FiZap,
} from "react-icons/fi";
import Button from "@/components/button/Button";

const capabilityCards = [
  {
    title: "Agentic AI systems",
    description:
      "Tool-using agents that coordinate workflows, route intent, and keep humans-in-the-loop for approvals.",
    icon: FiGitBranch,
    accent: ["#4f46e5", "#a855f7"],
    bullets: ["Action orchestration", "Multi-agent routing", "Human handoff"],
  },
  {
    title: "Retrieval-Augmented Generation",
    description:
      "Grounded answers with hybrid search, vector stores, relevance tuning, and prompt-safe context windows.",
    icon: FiDatabase,
    accent: ["#14b8a6", "#22d3ee"],
    bullets: ["Chunking + embeddings", "Hybrid search & rerank", "Hallucination controls"],
  },
  {
    title: "LLM evaluation & guardrails",
    description:
      "Offline + online evals, toxicity/redaction filters, jailbreak defenses, and policy-as-code for AI safety.",
    icon: FiShield,
    accent: ["#f97316", "#f472b6"],
    bullets: ["Golden sets & adversarial", "PII/toxicity filters", "Policy as code"],
  },
  {
    title: "AI platform & MLOps",
    description:
      "Feature stores, prompt/version management, CI for prompts, telemetry, and rollout gates with canaries.",
    icon: FiCloudLightning,
    accent: ["#22c55e", "#15803d"],
    bullets: ["Prompt CI/CD", "Observability & tracing", "Cost/latency tuning"],
  },
  {
    title: "Data pipelines for LLMs",
    description:
      "Ingestion, cleaning, redaction, and quality scores to keep your knowledge base fresh for RAG + agents.",
    icon: FiLayers,
    accent: ["#0ea5e9", "#6366f1"],
    bullets: ["Syncs & CDC", "Quality scoring", "Versioned corpora"],
  },
  {
    title: "AI product strategy",
    description:
      "Discovery sprints to validate use cases, success metrics, and readiness—before writing the first prompt.",
    icon: FiCompass,
    accent: ["#34d399", "#16a34a"],
    bullets: ["Opportunity mapping", "KPIs & SLAs", "Risk/ROI model"],
  },
];

const blueprints = [
  {
    title: "Agentic runbooks",
    detail:
      "Task planners call domain tools (APIs, SQL, SaaS) with execution memory, safety checks, and live dashboards for ops teams.",
    icon: FiGitBranch,
    chips: ["Toolformer-style", "Guarded actions", "Cost caps", "PagerDuty/Slack"],
  },
  {
    title: "RAG for support & docs",
    detail:
      "Hybrid retrieval (BM25 + vectors), metadata filters, reranking, and answer assembly with citations so agents stay grounded.",
    icon: FiDatabase,
    chips: ["Chunking + rerank", "Citations", "Freshness SLAs", "Vector + keyword"],
  },
  {
    title: "Safety & evaluation mesh",
    detail:
      "Automated eval harness with golden sets, red-team suites, prompt regression tests, and real-time toxicity/PII filters.",
    icon: FiShield,
    chips: ["Offline + online evals", "Jailbreak firewalls", "Prompt diffing", "Scorecards"],
  },
  {
    title: "Observability loop",
    detail:
      "Tracing, embeddings-level metrics, latency heatmaps, and feedback collection to continuously improve the stack.",
    icon: FiBarChart2,
    chips: ["LLM traces", "Human feedback", "Latency budgets", "Auto-tune"],
  },
];

const deliveryTracks = [
  {
    label: "Week 1–2",
    title: "Discovery & architecture",
    points: ["Use-case canvas and risk map", "Reference architecture for agents + RAG", "Data readiness + eval plan"],
  },
  {
    label: "Week 3–5",
    title: "Prototype & evaluate",
    points: ["Pilot agents/RAG flows with guardrails", "Offline evals + golden datasets", "Latency & cost tuning"],
  },
  {
    label: "Week 6–8",
    title: "Harden & launch",
    points: ["Observability, alerts, and SLOs", "Human-in-the-loop + approval gates", "Rollout playbook & training"],
  },
];

const metrics = [
  { label: "Latency budget", value: "< 1.2s", detail: "P95 for RAG answers" },
  { label: "Safety coverage", value: "15+", detail: "red-team suites & filters" },
  { label: "Ops ready", value: "24/7", detail: "monitoring & runbooks" },
];

const AiPage = () => {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section
        id="ai-hero"
        className="relative isolate -mt-16 flex min-h-[calc(100vh+3rem)] flex-col justify-center overflow-hidden bg-gradient-to-b from-black via-[#0c1a3c] to-[#02060f] text-white md:-mt-20 md:min-h-[calc(100vh+4rem)]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at 18% 22%, rgba(88,116,168,0.32), transparent 32%), radial-gradient(circle at 82% 12%, rgba(34,197,94,0.22), transparent 30%), radial-gradient(circle at 70% 68%, rgba(14,165,233,0.18), transparent 32%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-45"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02), rgba(255,255,255,0.04))",
            backgroundSize: "240% 240%",
            animation: "gradient-shift 16s ease-in-out infinite",
          }}
        />

        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 pb-16 pt-24 sm:px-6 md:pb-20 md:pt-28">
          <div className="flex flex-wrap items-center gap-3 text-[12px] uppercase tracking-[0.28em] text-white/70">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur">
              <FiCpu size={14} aria-hidden /> AI Studio
            </span>
            <span className="rounded-full bg-white/5 px-3 py-1">Agentic AI • RAG • LLM Ops</span>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="font-spaceGrotesk text-4xl font-semibold leading-tight sm:text-5xl md:text-[56px]">
              Ship agentic AI products that stay grounded, observable, and safe.
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-white/80">
              We design and build LLM, RAG, and multi-agent systems with production-grade guardrails—covering data pipelines, evaluation, and human-in-the-loop controls so you can move fast without surprises.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact">
              <Button className="text-sm font-semibold">
                Talk to the AI team
              </Button>
            </Link>
            <Link href="/services">
              <Button theme="white" className="text-sm font-semibold text-slate-900">
                View services
              </Button>
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.45)] backdrop-blur"
              >
                <p className="text-sm uppercase tracking-[0.18em] text-white/60">{item.label}</p>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-2xl font-semibold text-white">{item.value}</span>
                  <span className="text-sm text-white/70">{item.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative isolate -mt-12 bg-white pb-16 pt-8 sm:pt-12 md:pb-24 md:pt-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 12% 20%, rgba(88,116,168,0.12), transparent 30%), radial-gradient(circle at 82% 14%, rgba(14,165,233,0.12), transparent 32%), radial-gradient(circle at 70% 76%, rgba(52,211,153,0.12), transparent 30%), radial-gradient(circle at 8% 82%, rgba(99,102,241,0.12), transparent 28%)",
          }}
        />

        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <div className="flex flex-col gap-3 md:w-3/4">
            <p className="text-[11px] uppercase tracking-[0.24em] text-primary">What we ship</p>
            <h2 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
              Agentic AI, RAG, and LLM platforms built for production.
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              We architect the stack end to end: ingestion and embeddings, retrieval, reasoning, safety, evaluation, and the observability loop that keeps models honest.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilityCards.map(({ title, description, icon: Icon, accent, bullets }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_25px_80px_-52px_rgba(15,23,42,0.32)] transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_32px_110px_-64px_rgba(15,23,42,0.36)]"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.12), transparent 35%), linear-gradient(120deg, rgba(255,255,255,0.08), transparent 30%), linear-gradient(135deg, var(--ndi-primary) 0%, transparent 38%)`,
                    backgroundSize: "220% 220%",
                    animation: "gradient-shift 18s ease-in-out infinite",
                  }}
                  aria-hidden
                />
                <div className="relative flex items-start gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-primary ring-1 ring-slate-200 shadow-inner">
                    <Icon size={20} aria-hidden />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{description}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {bullets.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[12px] font-medium text-slate-700 shadow-sm"
                      style={{
                        backgroundImage: `linear-gradient(90deg, var(--ndi-primary) 0%, transparent 90%)`,
                        backgroundSize: "240% 240%",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px]"
                  style={{ backgroundImage: `linear-gradient(90deg, ${accent[0]}, ${accent[1]})` }}
                  aria-hidden
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blueprints */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#f9fbff] via-white to-[#f7fbff] py-16 sm:py-20 md:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-45"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop offset='0%' stop-color='%235874a8' stop-opacity='0.14'/%3E%3Cstop offset='100%' stop-color='%2322d3ee' stop-opacity='0.08'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='none' stroke='url(%23g)' stroke-width='1.2'%3E%3Cpath d='M0 110h220M110 0v220M-110 110l220 110M-110 110l220-110M110 220L330 110M110 220L330 330'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "320px 320px",
              backgroundPosition: "center",
            }}
          />
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "radial-gradient(circle at 10% 18%, rgba(88,116,168,0.16), transparent 30%), radial-gradient(circle at 80% 22%, rgba(14,165,233,0.16), transparent 28%), radial-gradient(circle at 70% 78%, rgba(52,211,153,0.16), transparent 30%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <div className="flex flex-col gap-3 md:w-2/3">
            <p className="text-[11px] uppercase tracking-[0.24em] text-primary">Reference blueprints</p>
            <h2 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
              Patterns we deploy for agentic AI, RAG, and LLM safety.
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Battle-tested architectures with observability, evals, and governance baked in—adapted to your stack (OpenAI, Anthropic, Vertex, Bedrock, local models).
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {blueprints.map(({ title, detail, icon: Icon, chips }, idx) => (
              <div
                key={title}
                className="grid gap-4 rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-[0_30px_90px_-60px_rgba(15,23,42,0.42)] backdrop-blur md:grid-cols-12"
                style={{ animation: "home-fade-up 0.9s ease both", animationDelay: `${idx * 0.06}s` }}
              >
                <div className="flex items-start gap-3 md:col-span-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-primary ring-1 ring-slate-200 shadow-inner">
                    <Icon size={20} aria-hidden />
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Pattern {idx + 1}</p>
                    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  </div>
                </div>
                <div className="md:col-span-5">
                  <p className="text-sm leading-relaxed text-slate-600">{detail}</p>
                </div>
                <div className="flex flex-wrap gap-2 md:col-span-3 md:justify-end">
                  {chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[12px] font-medium text-slate-700 shadow-sm"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="relative isolate bg-white pb-16 pt-10 sm:pb-20 sm:pt-14 md:pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <div className="flex flex-col gap-3 md:w-2/3">
            <p className="text-[11px] uppercase tracking-[0.24em] text-primary">Delivery tracks</p>
            <h2 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
              A playbook that balances velocity, governance, and trust.
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              We keep security, product, and data teams in the loop—every step ships with evals, observability, and human controls by default.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {deliveryTracks.map((track, idx) => (
              <article
                key={track.title}
                className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_25px_80px_-52px_rgba(15,23,42,0.32)]"
                style={{ animation: "home-fade-up 0.9s ease both", animationDelay: `${idx * 0.05}s` }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 hover:opacity-100"
                  style={{
                    backgroundImage: "linear-gradient(135deg, rgba(88,116,168,0.08), transparent 32%)",
                    backgroundSize: "220% 220%",
                    animation: "gradient-shift 16s ease-in-out infinite",
                  }}
                  aria-hidden
                />
                <div className="relative flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{track.label}</p>
                    <h3 className="text-lg font-semibold text-slate-900">{track.title}</h3>
                  </div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-50 text-primary ring-1 ring-slate-200 shadow-inner">
                    {idx === 0 && <FiCompass size={18} aria-hidden />}
                    {idx === 1 && <FiActivity size={18} aria-hidden />}
                    {idx === 2 && <FiZap size={18} aria-hidden />}
                  </span>
                </div>
                <ul className="relative mt-4 space-y-2 text-sm text-slate-700">
                  {track.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-14">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 24% 24%, rgba(88,116,168,0.16), transparent 30%), radial-gradient(circle at 78% 22%, rgba(14,165,233,0.18), transparent 32%), radial-gradient(circle at 70% 78%, rgba(52,211,153,0.16), transparent 30%)",
          }}
        />
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-r from-[#0b2f72] via-[#1937d6] to-[#0f172a] p-8 text-white shadow-[0_30px_90px_-56px_rgba(15,23,42,0.45)] sm:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col gap-3 md:max-w-2xl">
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/70">Let&apos;s build</p>
                <h3 className="font-spaceGrotesk text-2xl font-semibold sm:text-3xl">
                  Ready to launch an agentic AI or RAG experience?
                </h3>
                <p className="text-base leading-relaxed text-white/80">
                  We can start with a discovery sprint or harden the stack you already have—evals, guardrails, and observability included.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact">
                  <Button theme="white" className="px-5 py-2 text-sm font-semibold text-slate-900">
                    Book a call
                  </Button>
                </Link>
                <Link href="/company">
                  <Button theme="dark" className="px-5 py-2 text-sm font-semibold">
                    See how we work
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiPage;
