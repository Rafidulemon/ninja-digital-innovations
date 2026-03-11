export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; title?: string; items: string[] }
  | { type: "code"; title?: string; language: string; code: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "quote"; text: string; author?: string; role?: string }
  | { type: "callout"; label: string; body: string };

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  author: string;
  featured?: boolean;
  accent: string;
  banner: string;
  deck?: string;
  content: BlogContentBlock[];
};

const blogs: BlogPost[] = [
  {
    slug: "shipping-ai-copilots-with-safety-rails",
    title: "Shipping AI copilots with safety rails",
    summary:
      "Architecting LLM-powered assistants with eval loops, policy checks, and graceful fallbacks before you ever hit production.",
    category: "AI",
    tags: ["LLM", "Evaluation", "Product"],
    date: "February 20, 2026",
    readTime: "8 min read",
    author: "Maya Park",
    featured: true,
    accent: "from-[#3b82f6] via-[#7c6bff] to-[#4bd1c8]",
    banner: "/images/blogs/ai-copilot.svg",
    content: [
      {
        type: "heading",
        text: "Guardrails live closest to the user intent",
      },
      {
        type: "paragraph",
        text: "We keep every copilot flow observable by default. Prompts are versioned, evals run on golden sets nightly, and we ship chat transcripts with redaction and policy outcomes so product and security see the same truth.",
      },
      {
        type: "code",
        title: "Policy gate with typed tool calls",
        language: "ts",
        code: `type Escalation = { owner: string; reason: string };\n\nconst approveToolCall = definePolicy<Escalation>({\n  id: "pii-blocker",\n  onViolation: ({ tool, input, reasons }) => ({\n    owner: "trust-and-safety@ndi.studio",\n    reason: \
      \"PII caught before calling \" + tool + \" => \" + JSON.stringify(reasons) + \"\",\n  }),\n});\n\nconst result = await guardedAgent.run({\n  prompt,\n  tools: [crmSearch, createTicket],\n  policies: [approveToolCall],\n});\n\nif (!result.allowed) audit.log(result.violation);`,
      },
      {
        type: "list",
        title: "What ships with every copilot",
        items: [
          "Offline eval harness with regressions tracked per prompt version",
          "Streaming traces + heatmaps so latency budgets stay honest",
          "Fallback UX that keeps agents quiet when confidence drops",
        ],
      },
      {
        type: "quote",
        text: "The difference was the safety telemetry—we could show legal exactly where guardrails triggered before launch.",
        author: "Director of Product, fintech client",
      },
    ],
  },
  {
    slug: "designing-saas-uptime-like-a-ledger",
    title: "Designing SaaS uptime like a reliability ledger",
    summary:
      "How we track golden paths, SLOs, and dependency budgets so every launch comes with clear operational guardrails.",
    category: "Engineering",
    tags: ["SLO", "Reliability", "Playbook"],
    date: "January 28, 2026",
    readTime: "7 min read",
    author: "Leo Tan",
    featured: true,
    accent: "from-[#22c55e] via-[#4ade80] to-[#0ea5e9]",
    banner: "/images/blogs/reliability-ledger.svg",
    content: [
      {
        type: "heading",
        text: "Ledgering uptime keeps owners accountable",
      },
      {
        type: "paragraph",
        text: "We treat SLOs like a balance sheet. Every dependency gets a budget, every breach gets a root-cause memo, and we expose it to product so scope trades are explicit.",
      },
      {
        type: "code",
        title: "SLO fragment",
        language: "yaml",
        code: `service: messaging-hub\nslo:\n  availability: 99.9\n  latency_p95_ms: 600\ndependencies:\n  - name: sendgrid\n    budget: 25%\n  - name: auth0\n    budget: 15%\nalerts:\n  burn_rate: 4h\n  paging: squad-reliability`,
      },
      {
        type: "list",
        title: "Ops rituals",
        items: [
          "Golden-path checks live in CI and block merges when red",
          "Incident PR templates demand hypothesis + rollback path",
          "Blameless review within 48h with SLO debit/credit updates",
        ],
      },
    ],
  },
  {
    slug: "content-engines-that-dont-burn-out-your-team",
    title: "Content engines that don’t burn out your team",
    summary:
      "Our SNS operating model: modular storytelling, creator pods, and analytics loops that keep momentum without burnout.",
    category: "Culture",
    tags: ["SNS", "Operations", "Growth"],
    date: "February 8, 2026",
    readTime: "6 min read",
    author: "Rina Das",
    featured: true,
    accent: "from-[#f59e0b] via-[#fb923c] to-[#ef4444]",
    banner: "/images/blogs/content-engine.svg",
    content: [
      { type: "heading", text: "Modularity beats heroics" },
      {
        type: "paragraph",
        text: "We break narratives into reusable beats: proof, visual, hot take, and CTA. Pods pick beats to assemble weekly drops without relying on a single star creator.",
      },
      {
        type: "list",
        title: "Operating cadence",
        items: [
          "Monday 45m: select beats from backlog with data on prior lift",
          "Wednesday async: draft swaps between creator + editor",
          "Friday 20m: publish, annotate performance, recycle assets",
        ],
      },
      {
        type: "callout",
        label: "Metric",
        body: "We target creator time under 3.5h per drop while maintaining engagement velocity.",
      },
    ],
  },
  {
    slug: "zero-trust-habits-for-small-fast-teams",
    title: "Zero-trust habits for small, fast teams",
    summary:
      "Practical steps—ephemeral dev environments, short-lived creds, and paved roads—that make secure defaults effortless.",
    category: "Security",
    tags: ["AppSec", "Zero Trust", "DevEx"],
    date: "December 12, 2025",
    readTime: "9 min read",
    author: "Akira Ito",
    accent: "from-[#7c3aed] via-[#6366f1] to-[#22c55e]",
    banner: "/images/blogs/zero-trust.svg",
    content: [
      { type: "heading", text: "Ship secure by removing footguns" },
      {
        type: "paragraph",
        text: "We paved a happy path: branch deploys spin up with temporary IAM, secrets are short-lived, and developers never see production tokens.",
      },
      {
        type: "code",
        title: "Rotate a secret per preview",
        language: "bash",
        code: `gh secret set PREVIEW_TOKEN --body \"$(openssl rand -hex 24)\" -R org/app\nrailway variables set PREVIEW_TOKEN=$PREVIEW_TOKEN`,
      },
      {
        type: "list",
        title: "Defaults we enforce",
        items: [
          "OIDC-backed GitHub runners with per-PR IAM roles",
          "Service mesh sidecars for identity + mTLS inside the cluster",
          "SBOM + vuln gates hooked into artifact promotion",
        ],
      },
    ],
  },
  {
    slug: "product-discovery-at-the-speed-of-client-services",
    title: "Product discovery at the speed of client services",
    summary:
      "How we run 10-day spikes with joint squads, user co-design, and explicit decision memos to de-risk scope.",
    category: "Product",
    tags: ["Discovery", "Workshops", "Decision Making"],
    date: "February 2, 2026",
    readTime: "5 min read",
    author: "Noor Rahman",
    accent: "from-[#06b6d4] via-[#0ea5e9] to-[#7c3aed]",
    banner: "/images/blogs/product-discovery.svg",
    content: [
      { type: "heading", text: "A spike with explicit exit criteria" },
      {
        type: "paragraph",
        text: "We front-load alignment: one page on the job-to-be-done, constraints, and definition of success. Every artifact maps back to that page.",
      },
      {
        type: "list",
        title: "10-day rhythm",
        items: [
          "Day 1: problem framing + risks with sponsor and tech lead",
          "Day 3: prototype flows + feasibility notes; book user co-design",
          "Day 8: decision memo with options, cost, appetite, and recommendation",
        ],
      },
      {
        type: "callout",
        label: "Tip",
        body: "Ship the decision memo even if you defer the build—it becomes the north star for future teams.",
      },
    ],
  },
  {
    slug: "telemetry-that-makes-engineers-faster-not-busier",
    title: "Telemetry that makes engineers faster, not busier",
    summary:
      "A lean observability stack built on traces-first thinking, cardinality budgets, and opinionated dashboards.",
    category: "Engineering",
    tags: ["Observability", "Tracing", "DX"],
    date: "January 15, 2026",
    readTime: "6 min read",
    author: "Sofia Mendez",
    accent: "from-[#14b8a6] via-[#34d399] to-[#3b82f6]",
    banner: "/images/blogs/telemetry.svg",
    content: [
      { type: "heading", text: "Lead with traces, not dashboards" },
      {
        type: "paragraph",
        text: "We instrument user journeys end to end, then project metrics off of traces. Dashboards stay slim; exploratory debugging happens in traces with guardrails on cardinality.",
      },
      {
        type: "code",
        title: "OTel starter",
        language: "ts",
        code: `import { trace, context } from \"@opentelemetry/api\";\n\nconst tracer = trace.getTracer(\"checkout\");\n\nexport async function charge(userId: string, payload: ChargeInput) {\n  return tracer.startActiveSpan(\"charge\", async (span) => {\n    span.setAttribute(\"user.id\", userId);\n    span.setAttribute(\"cart.items\", payload.items.length);\n    try {\n      const result = await paymentClient.charge(payload);\n      span.setStatus({ code: 1, message: \"ok\" });\n      return result;\n    } catch (err) {\n      span.recordException(err as Error);\n      span.setStatus({ code: 2, message: \"failed\" });\n      throw err;\n    } finally {\n      span.end();\n    }\n  });\n}`,
      },
      {
        type: "list",
        title: "Rules we keep",
        items: [
          "Every alert links to a runbook and an owning team",
          "Dashboards cap at 12 charts—anything else is a trace query",
          "Sampling tuned per route with business impact in mind",
        ],
      },
    ],
  },
  {
    slug: "building-multilingual-chat-for-regulated-industries",
    title: "Building multilingual chat for regulated industries",
    summary:
      "Data residency, prompt isolation, and evaluation ladders when your users span APAC compliance regimes.",
    category: "AI",
    tags: ["Localization", "Compliance", "Chat"],
    date: "November 30, 2025",
    readTime: "10 min read",
    author: "Maya Park",
    accent: "from-[#ec4899] via-[#a855f7] to-[#6366f1]",
    banner: "/images/blogs/multilingual-chat.svg",
    content: [
      { type: "heading", text: "Segmentation is the first defense" },
      {
        type: "paragraph",
        text: "We isolate tenants by region, route to regional endpoints, and pin prompt templates per locale so translations never leak policy.",
      },
      {
        type: "code",
        title: "Locale-aware router",
        language: "ts",
        code: `const localeToProvider = {\n  JP: { model: \"bedrock.titan-jp\", dataset: \"ap-northeast-1\" },\n  SG: { model: \"vertex.gemini-pro\", dataset: \"asia-southeast1\" },\n  EU: { model: \"openai.gpt-4o-mini\", dataset: \"europe-west1\" },\n};\n\nexport function route(locale: keyof typeof localeToProvider) {\n  const target = localeToProvider[locale];\n  return client(target.model, { dataset: target.dataset });\n}\n\nconst agent = route(user.locale);`,
      },
      {
        type: "list",
        title: "Compliance guardrails",
        items: [
          "PII classifiers per locale with redaction before storage",
          "Region-locked eval sets; no cross-region replay",
          "User-visible consent + data expiry surfaced in the UI",
        ],
      },
    ],
  },
  {
    slug: "why-our-design-system-ships-motion-as-a-first-class-token",
    title: "Why our design system ships motion as a first-class token",
    summary:
      "Motion primitives, focus safety, and a governance loop that keeps brand energy without breaking accessibility.",
    category: "Design",
    tags: ["Design Systems", "Accessibility", "Motion"],
    date: "January 5, 2026",
    readTime: "7 min read",
    author: "Elena Iwasaki",
    accent: "from-[#6366f1] via-[#3b82f6] to-[#22c55e]",
    banner: "/images/blogs/motion-system.svg",
    content: [
      { type: "heading", text: "Motion is codified like color" },
      {
        type: "paragraph",
        text: "Tokens capture duration, easing, and physics so teams don’t reinvent motion each sprint. Accessibility guidelines gate where motion is allowed.",
      },
      {
        type: "code",
        title: "Tokenized motion",
        language: "css",
        code: `:root {\n  --motion-snappy: 160ms cubic-bezier(0.32, 0.72, 0, 1);\n  --motion-soft: 320ms cubic-bezier(0.16, 0.8, 0.32, 1);\n}\n\n.card-enter {\n  animation: rise var(--motion-soft);\n}\n\n@keyframes rise {\n  from { opacity: 0; transform: translateY(12px); }\n  to { opacity: 1; transform: translateY(0); }\n}`,
      },
      {
        type: "callout",
        label: "Governance",
        body: "Each new pattern ships with a reduced-motion variant and automated axe checks in CI.",
      },
    ],
  },
  {
    slug: "client-onboarding-that-respects-engineers-time",
    title: "Client onboarding that respects engineers’ time",
    summary:
      "Templates for briefs, architecture baselines, and risk registers that keep kickoffs concise and accountable.",
    category: "Operations",
    tags: ["Templates", "Process", "Leadership"],
    date: "December 18, 2025",
    readTime: "5 min read",
    author: "Leo Tan",
    accent: "from-[#0ea5e9] via-[#22c55e] to-[#14b8a6]",
    banner: "/images/blogs/client-onboarding.svg",
    content: [
      { type: "heading", text: "Time-boxed clarity" },
      {
        type: "paragraph",
        text: "Our kickoff playbook is four pages: goals, constraints, tech baseline, and decisions required. The team leaves knowing who owns what and what success means.",
      },
      {
        type: "list",
        title: "Artifacts we collect in week one",
        items: [
          "Architecture postcard with data flows and critical paths",
          "Risk register ranked by impact × probability",
          "Decision log with approvers and due dates",
        ],
      },
      {
        type: "quote",
        text: "The kickoff finished in 55 minutes and we had owners for every risk—that never happens.",
        author: "Eng manager, enterprise data team",
      },
    ],
  },
  {
    slug: "running-retros-that-turn-into-roadmaps",
    title: "Running retros that turn into roadmaps",
    summary:
      "A facilitation script, metrics, and follow-through ritual that converts retro notes into prioritized bets.",
    category: "Culture",
    tags: ["Retros", "Teams", "Leadership"],
    date: "February 18, 2026",
    readTime: "4 min read",
    author: "Rina Das",
    accent: "from-[#f97316] via-[#ec4899] to-[#6366f1]",
    banner: "/images/blogs/retro-roadmap.svg",
    content: [
      { type: "heading", text: "Retros that feed the roadmap" },
      {
        type: "paragraph",
        text: "We exit each retro with two prioritized bets and a named owner. Metrics tie to the roadmap so learnings don’t die in docs.",
      },
      {
        type: "list",
        title: "Scoring grid",
        items: [
          "Impact (1-5) × Effort (1-5) with evidence",
          "Health score from incidents, churn, or cycle time",
          "Customer signal: tickets, NPS verbatims, or churn drivers",
        ],
      },
      {
        type: "callout",
        label: "Follow-through",
        body: "Owners report progress in the next retro with a one-slide update tied to the bet they took.",
      },
    ],
  },
];

export default blogs;
