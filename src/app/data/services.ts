export type ServiceIconKey = "FiCode" | "FiCpu" | "FiShield" | "FiDatabase" | "FiMessageSquare";

export type ServiceDetail = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  accent: string;
  tint: string;
  icon: ServiceIconKey;
  highlights: string[];
  stats: { label: string; value: string; hint: string }[];
  outcomes: { title: string; detail: string; icon?: "FiZap" | "FiShield" | "FiTarget" | "FiTrendingUp" | "FiActivity" | "FiCheckCircle" }[];
  offerings: { title: string; items: string[] }[];
  playbooks: { title: string; detail: string; items: string[] }[];
  engagementModels: { name: string; duration: string; bestFor: string; inclusions: string[] }[];
  timeline: { phase: string; duration: string; objectives: string[]; artifacts: string[] }[];
  tools: string[];
  useCases: string[];
  faqs: { question: string; answer: string }[];
  featuredOnHome?: boolean;
};

const services: ServiceDetail[] = [
  {
    slug: "engineering-services",
    title: "Engineering Services",
    tagline: "Full-stack squads that ship fast, safely, and with observable quality.",
    summary:
      "Product engineering for web, mobile, and platforms with security, performance, and accessibility built into every sprint.",
    accent: "from-[#4f8bff] via-[#6f8fc4] to-[#b6d0ff]",
    tint: "#4f8bff",
    icon: "FiCode",
    highlights: [
      "Product engineering across web, mobile, and platform",
      "SRE-grade reliability, performance, and accessibility",
      "Secure SDLC with IaC, CI/CD, and automated QA",
    ],
    stats: [
      { label: "Release cadence", value: "2-3 week drops", hint: "Story slicing, CI/CD, feature flags" },
      { label: "Performance", value: "<1.8s LCP targets", hint: "Budgets, profiling, APM" },
      { label: "Security", value: "OWASP-first SDLC", hint: "Threat models, dep scans, SAST/DAST" },
    ],
    outcomes: [
      { title: "Ship safely & quickly", detail: "Automated tests, CI/CD, and flags keep releases fast without risk.", icon: "FiZap" },
      { title: "Resilient architectures", detail: "Clear domain boundaries, typed contracts, tracing, and SLOs.", icon: "FiShield" },
      { title: "Polished experiences", detail: "Accessibility, performance budgets, and UX review in every increment.", icon: "FiTrendingUp" },
    ],
    offerings: [
      {
        title: "Product engineering",
        items: [
          "Responsive web apps with Next.js/React",
          "Native & cross-platform mobile (React Native, Flutter)",
          "Design systems & component libraries with Storybook",
          "Front-of-house experiences: onboarding, billing, dashboards",
        ],
      },
      {
        title: "Platform & API",
        items: [
          "Domain modeling and API contracts (REST/GraphQL)",
          "Service decomposition and migration plans",
          "Caching, queues, and event-driven workflows",
          "Observability baked into services (tracing + logs + metrics)",
        ],
      },
      {
        title: "Quality, SRE & DevOps",
        items: [
          "CI/CD with quality gates (unit, integration, E2E, accessibility)",
          "Infrastructure as code with Terraform and Cloudflare/AWS",
          "Performance and chaos probes with runbooks",
          "SLO/SLA definitions with dashboards and alerting",
        ],
      },
    ],
    playbooks: [
      {
        title: "Architecture runway",
        detail: "Make early decisions visible and reversible before big bets.",
        items: ["Architecture decision records", "Risk & dependency map", "Perf + availability targets"],
      },
      {
        title: "Delivery loops",
        detail: "Tight feedback from design, PM, and engineering every sprint.",
        items: ["Definition of ready/done with tests", "Demo + retro every 2 weeks", "Release notes + feature flags"],
      },
      {
        title: "Launch & hardening",
        detail: "Go-live with confidence and a clear ownership model.",
        items: ["Load + chaos checks", "Runbooks, on-call, escalation tree", "Handover docs + KT sessions"],
      },
    ],
    engagementModels: [
      {
        name: "Product squad",
        duration: "3-9 months",
        bestFor: "Owning a product line or new build",
        inclusions: ["PM/EM + engineers + design as one team", "Backlog & roadmap co-creation", "SLOs, QA, and IaC included"],
      },
      {
        name: "Platform modernization sprint",
        duration: "6-8 weeks",
        bestFor: "Upgrade, refactor, or replatform without downtime",
        inclusions: ["Architecture + migration plan", "Pilot slice shipped to prod", "Observability + rollback playbooks"],
      },
      {
        name: "Performance & accessibility tune-up",
        duration: "4 weeks",
        bestFor: "Improve Core Web Vitals and WCAG compliance",
        inclusions: ["Audit + prioritized fixes", "Budgets in CI", "Coaching for in-house team"],
      },
    ],
    timeline: [
      {
        phase: "Discover",
        duration: "Week 1",
        objectives: ["Align goals, users, constraints", "Assess code, infra, and risks"],
        artifacts: ["Success scorecard", "Architecture sketch", "Backlog draft"],
      },
      {
        phase: "Design & plan",
        duration: "Week 2",
        objectives: ["User flows & UX prototypes", "API + data contracts", "Delivery plan + SLOs"],
        artifacts: ["Prototype or spike", "Tech plan & runway", "QA/observability plan"],
      },
      {
        phase: "Build & validate",
        duration: "Weeks 3-6",
        objectives: ["Ship increments with CI/CD", "Perf + security checks each sprint"],
        artifacts: ["Working features in prod/stage", "Test + monitoring suites", "Release notes"],
      },
      {
        phase: "Hardening & handoff",
        duration: "Weeks 7-8",
        objectives: ["Load/chaos drills", "Runbooks + KT", "Transition plan"],
        artifacts: ["Runbooks & dashboards", "Handover doc", "Next-quarter roadmap"],
      },
    ],
    tools: [
      "Next.js / React",
      "Node.js / NestJS",
      "PostgreSQL, Redis, Prisma",
      "GraphQL / REST",
      "Cypress, Playwright, Storybook",
      "Terraform, AWS, Cloudflare",
      "Sentry, Datadog, Grafana",
      "LaunchDarkly/feature flags",
    ],
    useCases: [
      "0-1 SaaS build with staged launches",
      "Design system + component library rollout",
      "Platform modernization from monolith to services",
      "Performance tuning for Core Web Vitals",
      "Mobile companion app for an existing platform",
    ],
    faqs: [
      {
        question: "Can you work inside our existing codebase?",
        answer: "Yes. We start with a repo + infra review, agree on coding standards, then ship in small PRs with your CI/CD.",
      },
      {
        question: "How do you keep releases safe?",
        answer: "Feature flags, automated tests, preview environments, and a release checklist with rollback paths are standard.",
      },
      {
        question: "Do you provide design?",
        answer: "We can pair with your designers or bring our own design lead and set up a shared design system in Figma + Storybook.",
      },
    ],
    featuredOnHome: true,
  },
  {
    slug: "ai-and-machine-learning",
    title: "AI & Machine Learning",
    tagline: "Applied AI products-generative, predictive, and evaluative-ready for production.",
    summary: "Design, build, and operate AI features with robust data pipelines, eval harnesses, and safety guardrails.",
    accent: "from-[#22c55e] via-[#6ee7b7] to-[#a7f3d0]",
    tint: "#16a34a",
    icon: "FiCpu",
    highlights: [
      "GenAI apps with grounding, guardrails, and evals",
      "Predictive models with MLOps and monitoring",
      "Data contracts, feature stores, and governance",
    ],
    stats: [
      { label: "Prototype to prod", value: "4-6 weeks", hint: "LLM + retrieval with eval loops" },
      { label: "Quality", value: "Live evals & guardrails", hint: "toxicity, PII, hallucination checks" },
      { label: "Ops", value: "Automated drift alerts", hint: "Data + model monitoring" },
    ],
    outcomes: [
      { title: "Grounded answers", detail: "Retrieval, citations, and scoring keep outputs trustworthy.", icon: "FiTarget" },
      { title: "Reliable pipelines", detail: "Versioned data, feature stores, and CI for models.", icon: "FiActivity" },
      { title: "Governed AI", detail: "PII handling, safety filters, and audit trails by default.", icon: "FiShield" },
    ],
    offerings: [
      {
        title: "GenAI products",
        items: [
          "Retrieval-augmented chat/agents with citations",
          "Document understanding, summarization, redaction",
          "Workflow copilots integrated with internal tools",
          "Evaluation harnesses with human + automated scoring",
        ],
      },
      {
        title: "ML systems",
        items: [
          "Prediction services (ranking, forecasting, scoring)",
          "Feature store design and data contracts",
          "Model registry, CI for models, and deployment automation",
          "Canary + shadow deployments with rollback",
        ],
      },
      {
        title: "Data & governance",
        items: [
          "Data quality checks and lineage",
          "Safety guardrails (PII filters, jailbreak tests)",
          "Cost/performance optimization across providers",
          "Playbooks for human-in-the-loop review",
        ],
      },
    ],
    playbooks: [
      {
        title: "AI readiness audit",
        detail: "Assess data, risks, and the right model/provider fit.",
        items: ["Use-case + risk canvas", "Data availability + gaps", "Guardrail plan + KPIs"],
      },
      {
        title: "Prototype & eval",
        detail: "Ship a working slice with evals before scaling.",
        items: ["Prompt + retrieval design", "Automated eval suite (quality, safety)", "Human review loop"],
      },
      {
        title: "Productionize",
        detail: "Operationalize with monitoring, governance, and cost controls.",
        items: ["Model registry + versioning", "Canary/shadow deploy", "Drift, cost, and latency dashboards"],
      },
    ],
    engagementModels: [
      {
        name: "AI discovery + pilot",
        duration: "4-6 weeks",
        bestFor: "Validating an AI use case with stakeholders",
        inclusions: ["Pilot shipped to prod or secure staging", "Eval + safety harness", "Rollout + adoption plan"],
      },
      {
        name: "Productized AI",
        duration: "3-6 months",
        bestFor: "Owning an AI feature end-to-end",
        inclusions: ["Data/feature pipelines", "Model ops + monitoring", "UX + change management"],
      },
      {
        name: "Model lifecycle support",
        duration: "Retainer",
        bestFor: "Teams that need continuous tuning",
        inclusions: ["Evals + guardrails upkeep", "Retraining + cost tuning", "Incident response for AI outputs"],
      },
    ],
    timeline: [
      {
        phase: "Week 1",
        duration: "Discovery",
        objectives: ["Use-case + risk workshop", "Data audit and success metrics"],
        artifacts: ["Canvas + KPI targets", "Annotated sample data"],
      },
      {
        phase: "Weeks 2-3",
        duration: "Prototype",
        objectives: ["Retrieval/prompt design", "Initial eval suite + guardrails"],
        artifacts: ["Pilot deployed to staging", "Eval dashboards"],
      },
      {
        phase: "Weeks 4-6",
        duration: "Productionize",
        objectives: ["Pipeline hardening", "Monitoring + alerts", "Shadow or canary go-live"],
        artifacts: ["Model registry entries", "Runbook + rollback", "Cost + latency budgets"],
      },
      {
        phase: "Post-launch",
        duration: "Operate",
        objectives: ["Collect feedback & retrain", "A/B and quality reviews"],
        artifacts: ["Evals + drift reports", "Iteration backlog"],
      },
    ],
    tools: [
      "OpenAI / Anthropic / Gemini",
      "LangChain / LlamaIndex",
      "Vector DBs (Pinecone, Qdrant, pgvector)",
      "Feature stores (Feast)",
      "Airflow / Dagster",
      "MLflow / Weights & Biases",
      "Evals: DeepEval, Ragas",
      "Observability: Prometheus, OpenTelemetry",
    ],
    useCases: [
      "Knowledge assistants with grounded answers",
      "Document intake: classify, extract, and summarize",
      "Forecasting or scoring models with live monitoring",
      "Content safety and PII redaction pipelines",
      "Copilot-style workflows embedded in internal tools",
    ],
    faqs: [
      {
        question: "Do you only use one model provider?",
        answer: "No. We design for provider choice-OpenAI, Anthropic, Gemini, or local models-based on latency, cost, and data policies.",
      },
      {
        question: "How do you measure quality?",
        answer: "We create automated evals (accuracy, safety, latency), plus human review sampling tied to acceptance thresholds.",
      },
      {
        question: "Can you work with our data team?",
        answer: "Yes. We align on schemas, governance, and infra so data contracts and pipelines fit your existing stack.",
      },
    ],
    featuredOnHome: true,
  },
  {
    slug: "security-and-governance",
    title: "Security & Governance",
    tagline: "Secure-by-design programs, from threat models to automated guardrails and compliance.",
    summary:
      "We combine architecture reviews, testing, identity, and policy-as-code so teams can ship quickly without sacrificing trust.",
    accent: "from-[#fb7185] via-[#f472b6] to-[#f9a8d4]",
    tint: "#fb7185",
    icon: "FiShield",
    highlights: [
      "Threat modeling, pen testing, and code reviews",
      "Zero-trust identity, secrets, and key management",
      "Policy-as-code for SOC 2 / ISO / GDPR readiness",
    ],
    stats: [
      { label: "Findings triage", value: "<48 hrs", hint: "Risk-ranked fixes with owners" },
      { label: "Controls", value: "Guardrails by default", hint: "CI checks, IaC policies, secrets hygiene" },
      { label: "Compliance", value: "SOC 2 / ISO prep", hint: "Evidence collection + workflows" },
    ],
    outcomes: [
      { title: "Reduced risk surface", detail: "Threat models, secure designs, and prioritized remediation.", icon: "FiShield" },
      { title: "Shift-left security", detail: "Security checks in CI, IaC scanners, and secrets hygiene.", icon: "FiCheckCircle" },
      { title: "Audit-ready", detail: "Policies, logging, and evidence mapped to your framework.", icon: "FiTarget" },
    ],
    offerings: [
      {
        title: "Assess & design",
        items: [
          "Threat modeling and architecture reviews",
          "Pen testing (app, API, cloud)",
          "Security scorecards and remediation roadmaps",
          "Vendor + third-party risk assessments",
        ],
      },
      {
        title: "Build guardrails",
        items: [
          "Zero-trust identity and access (SSO/MFA/JIT)",
          "Secrets + key management, rotation policies",
          "Static/dynamic analysis in CI, dependency hygiene",
          "IaC policy enforcement (OPA/Conftest)",
        ],
      },
      {
        title: "Operate & comply",
        items: [
          "Runbooks for incidents and response drills",
          "Log retention, SIEM, and alert tuning",
          "Control evidence collection for SOC 2/ISO/GDPR",
          "Security coaching for engineers and content teams",
        ],
      },
    ],
    playbooks: [
      {
        title: "Security baseline",
        detail: "Rapidly assess and set minimum standards across app + cloud.",
        items: ["Findings mapped by risk", "Quick wins + roadmap", "Baseline controls in CI"],
      },
      {
        title: "Guardrails as code",
        detail: "Automate checks so security scales with delivery speed.",
        items: ["OPA/Conftest policies", "Secrets + dependency scanners", "SAST/DAST gates"],
      },
      {
        title: "Evidence & audits",
        detail: "Stay audit-ready with light processes and automation.",
        items: ["Policy templates", "Logging + SIEM wiring", "Evidence playbook"],
      },
    ],
    engagementModels: [
      {
        name: "Security assessment",
        duration: "3-4 weeks",
        bestFor: "Understanding risk before a release or audit",
        inclusions: ["Threat model + pen test", "Findings with fixes", "Architecture + code recommendations"],
      },
      {
        name: "Guardrails program",
        duration: "2-3 months",
        bestFor: "Teams scaling delivery and needing built-in checks",
        inclusions: ["CI/CD security gates", "Secrets + identity hardening", "IaC policy pack"],
      },
      {
        name: "Compliance runway",
        duration: "Retainer",
        bestFor: "Ongoing SOC 2 / ISO evidence and reviews",
        inclusions: ["Evidence workflows", "Logging + SIEM tuning", "Quarterly drills + refresh"],
      },
    ],
    timeline: [
      {
        phase: "Assess",
        duration: "Weeks 1-2",
        objectives: ["Interviews + architecture review", "Pen test / threat model"],
        artifacts: ["Findings + risk scoring", "Quick wins list"],
      },
      {
        phase: "Design",
        duration: "Week 3",
        objectives: ["Control design + priorities", "Select guardrail tooling"],
        artifacts: ["Control map", "Implementation plan"],
      },
      {
        phase: "Implement",
        duration: "Weeks 4-6",
        objectives: ["CI/CD gates + policies", "Identity/secrets hardening"],
        artifacts: ["Policies as code", "Runbooks + alerts"],
      },
      {
        phase: "Operate",
        duration: "Ongoing",
        objectives: ["Evidence collection", "Drills + tuning"],
        artifacts: ["Audit pack", "Quarterly review notes"],
      },
    ],
    tools: [
      "Zed Attack Proxy / Burp",
      "Snyk / Trivy / Dependabot",
      "OPA / Conftest / Checkov",
      "Vault / AWS KMS",
      "Okta / Auth0 / Keycloak",
      "Elastic / Datadog SIEM",
      "Cloudflare / WAF",
      "OWASP ASVS/Top 10 playbooks",
    ],
    useCases: [
      "Pre-launch security review for a new product",
      "Zero-trust rollout across apps and cloud",
      "SOC 2 readiness with light processes",
      "Secrets rotation and least-privilege access",
      "Security coaching + playbooks for engineers",
    ],
    faqs: [
      {
        question: "Can you work with our security team?",
        answer: "Yes. We co-design controls, add automation, and leave documentation so your team can own it.",
      },
      {
        question: "Do you issue compliance reports?",
        answer: "We prepare evidence and remediation; formal audits are done with your chosen auditor. We stay engaged through it.",
      },
      {
        question: "What about data residency?",
        answer: "We design with data classification, region pinning, and encryption policies that match your legal requirements.",
      },
    ],
    featuredOnHome: true,
  },
  {
    slug: "erp-solutions",
    title: "ERP Solutions",
    tagline: "Custom ERP implementations that unify finance, ops, inventory, and analytics.",
    summary:
      "Plan, configure, and ship ERP modules with clean data, secure integrations, and change management so adoption sticks.",
    accent: "from-[#f59e0b] via-[#f97316] to-[#fb923c]",
    tint: "#f59e0b",
    icon: "FiDatabase",
    highlights: [
      "Process discovery and blueprinting",
      "Module builds for finance, supply chain, HR",
      "Secure integrations and migration playbooks",
    ],
    stats: [
      { label: "Go-live windows", value: "8-14 weeks", hint: "Pilot - phased rollout" },
      { label: "Data quality", value: "Checks in ETL", hint: "Reconciliations + lineage" },
      { label: "Adoption", value: "Playbooks + training", hint: "Role-based enablement" },
    ],
    outcomes: [
      { title: "Aligned processes", detail: "Documented flows with ownership and controls.", icon: "FiActivity" },
      { title: "Reliable data", detail: "Validated migrations, reconciliations, and audit trails.", icon: "FiCheckCircle" },
      { title: "Adopted tooling", detail: "Training, SOPs, and admin handoff keep teams using it.", icon: "FiTrendingUp" },
    ],
    offerings: [
      {
        title: "Discovery & design",
        items: [
          "Process mapping with finance/ops/HR",
          "Gap analysis vs. current tools",
          "Solution blueprint + RACI",
          "Security + segregation-of-duties design",
        ],
      },
      {
        title: "Build & integrate",
        items: [
          "Module setup (finance, supply chain, HR, CRM)",
          "Custom workflows, approvals, and reports",
          "Integrations with commerce, warehouse, BI",
          "Automated testing of critical flows",
        ],
      },
      {
        title: "Migrate & enable",
        items: [
          "Data cleansing + migration runs",
          "Cutover plan with rollback",
          "Role-based training + SOPs",
          "Admin enablement and post-go-live hypercare",
        ],
      },
    ],
    playbooks: [
      {
        title: "Pilot first",
        detail: "Prove value with one process before full rollout.",
        items: ["Pilot scope + KPIs", "Parallel run", "Adoption survey"],
      },
      {
        title: "Data you trust",
        detail: "ETL with reconciliations and audit trails.",
        items: ["Data quality checks", "Reconciliation reports", "Lineage + access controls"],
      },
      {
        title: "Change management",
        detail: "Keep teams engaged with training and clear ownership.",
        items: ["Role-based training", "SOPs + quick references", "Hypercare support"],
      },
    ],
    engagementModels: [
      {
        name: "Process blueprint",
        duration: "3-4 weeks",
        bestFor: "Scoping ERP before selecting modules",
        inclusions: ["Workshops + RACI", "Solution options", "Roadmap + budget ranges"],
      },
      {
        name: "Pilot implementation",
        duration: "8-10 weeks",
        bestFor: "Shipping one high-impact module",
        inclusions: ["Config + integrations", "Data migration with checks", "Pilot training + hypercare"],
      },
      {
        name: "Full rollout",
        duration: "12-20 weeks",
        bestFor: "Multi-module program",
        inclusions: ["Phased go-live plan", "Testing + reconciliations", "Admin enablement"],
      },
    ],
    timeline: [
      {
        phase: "Discover",
        duration: "Weeks 1-2",
        objectives: ["Workshops + AS-IS vs TO-BE", "Data audit"],
        artifacts: ["Process maps", "Solution blueprint"],
      },
      {
        phase: "Design",
        duration: "Weeks 3-4",
        objectives: ["Config decisions", "Integration design"],
        artifacts: ["Design doc", "Test plan"],
      },
      {
        phase: "Build & migrate",
        duration: "Weeks 5-10",
        objectives: ["Module config", "ETL + validation"],
        artifacts: ["Configured modules", "Reconciliation reports"],
      },
      {
        phase: "Go-live",
        duration: "Weeks 11-14",
        objectives: ["Cutover + hypercare", "Training"],
        artifacts: ["Runbooks + SOPs", "Adoption dashboard"],
      },
    ],
    tools: [
      "Odoo / NetSuite / custom modules",
      "PostgreSQL / MySQL",
      "dbt / Fivetran / Airflow",
      "Power BI / Metabase / Looker",
      "Kafka / RabbitMQ",
      "Playwright / Cypress for flows",
      "Terraform / Ansible",
      "Single sign-on + RBAC suites",
    ],
    useCases: [
      "Unified finance + inventory visibility",
      "Automated procure-to-pay approvals",
      "Warehouse + logistics integration",
      "HR onboarding/offboarding automation",
      "Commerce to ERP reconciliation",
    ],
    faqs: [
      {
        question: "Do you work with a specific ERP only?",
        answer: "We implement Odoo and NetSuite most often, and build custom modules where needed. We stay tool-agnostic based on fit.",
      },
      {
        question: "How do you reduce go-live risk?",
        answer: "Pilot-first rollouts, rehearsed cutovers, reconciliations, and clear rollback steps.",
      },
      {
        question: "Can you train our team?",
        answer: "Yes - role-based training, admin enablement, and SOPs are part of every engagement.",
      },
    ],
    featuredOnHome: true,
  },
  {
    slug: "sns-strategy-and-creative",
    title: "SNS Strategy & Creative",
    tagline: "Data-driven social storytelling that blends content, community, and growth experiments.",
    summary:
      "We plan channels, ship content systems, and run experiments so your brand shows up consistently and measurably.",
    accent: "from-[#34d399] via-[#22c55e] to-[#16a34a]",
    tint: "#16a34a",
    icon: "FiMessageSquare",
    highlights: [
      "Channel strategy, content engines, and ops",
      "Influencer programs and collaboration frameworks",
      "Campaign analytics, experimentation, and lift",
    ],
    stats: [
      { label: "Content velocity", value: "2-4 posts/week", hint: "Reusable templates + backlog" },
      { label: "Experiment pace", value: "Bi-weekly", hint: "A/Bs on hooks, formats, CTAs" },
      { label: "Attribution", value: "Full funnel", hint: "UTMs, pixels, CRM sync" },
    ],
    outcomes: [
      { title: "Clear positioning", detail: "Narratives and messaging that stay consistent across channels.", icon: "FiTarget" },
      { title: "Repeatable content engine", detail: "Templates, shoots, and approvals that keep shipping.", icon: "FiActivity" },
      { title: "Measured growth", detail: "Dashboards tying reach, engagement, and leads to campaigns.", icon: "FiTrendingUp" },
    ],
    offerings: [
      {
        title: "Strategy",
        items: [
          "Audience + competitor analysis",
          "Narrative + messaging house",
          "Channel mix and posting cadences",
          "Experiment backlog and success metrics",
        ],
      },
      {
        title: "Creative & production",
        items: [
          "Content calendars and scripts",
          "Template packs for short/long form",
          "Shoots, editing, and motion graphics",
          "UGC + influencer collaboration kits",
        ],
      },
      {
        title: "Ops & analytics",
        items: [
          "Publishing workflows + approvals",
          "Community management scripts",
          "Dashboards with UTMs/pixels/CRM",
          "Lift studies and experiment reviews",
        ],
      },
    ],
    playbooks: [
      {
        title: "Messaging sprint",
        detail: "Align on story, tone, and proof points.",
        items: ["Positioning doc", "Voice + visual guardrails", "Hook library"],
      },
      {
        title: "Content engine",
        detail: "Turn strategy into an executable calendar.",
        items: ["90-day calendar", "Templates + shot lists", "Approval + posting workflow"],
      },
      {
        title: "Measure + optimize",
        detail: "Tie content to business results.",
        items: ["Attribution + UTM plan", "Experiment readouts", "Monthly performance reviews"],
      },
    ],
    engagementModels: [
      {
        name: "Strategy intensive",
        duration: "2-3 weeks",
        bestFor: "Teams needing a clear narrative and plan",
        inclusions: ["Research + positioning", "Channel plan + calendar", "Experiment backlog"],
      },
      {
        name: "Content engine setup",
        duration: "6-8 weeks",
        bestFor: "Standing up production and workflows",
        inclusions: ["Templates + toolchain", "Pilot shoots", "Ops handbook"],
      },
      {
        name: "Managed ops",
        duration: "Retainer",
        bestFor: "Ongoing content + experimentation",
        inclusions: ["Calendar + production", "Community + reporting", "Quarterly strategy refresh"],
      },
    ],
    timeline: [
      {
        phase: "Week 1",
        duration: "Research",
        objectives: ["Audience + competitor scan", "Voice + goals alignment"],
        artifacts: ["Positioning + messaging", "Channel hypotheses"],
      },
      {
        phase: "Weeks 2-3",
        duration: "Plan",
        objectives: ["Calendar + scripts", "Templates + shot lists"],
        artifacts: ["90-day calendar", "Creative templates"],
      },
      {
        phase: "Weeks 4-6",
        duration: "Produce",
        objectives: ["Shoots + edits", "Publishing workflow"],
        artifacts: ["Content library", "Approval + posting SOP"],
      },
      {
        phase: "Weeks 7-8",
        duration: "Optimize",
        objectives: ["Experiments", "Reporting + iteration"],
        artifacts: ["Performance dashboard", "Experiment readouts"],
      },
    ],
    tools: [
      "Figma / Adobe CC",
      "CapCut / Premiere / After Effects",
      "Notion / Asana for calendars",
      "Later / Buffer / native schedulers",
      "HubSpot / Salesforce for attribution",
      "GA4 / Looker Studio / Mixpanel",
      "A/B testing + social platform experiments",
      "Brand + UGC collaboration kits",
    ],
    useCases: [
      "Launch narrative for a new product",
      "Content engine for LinkedIn, TikTok, YouTube",
      "Influencer/UGC program with clear briefs",
      "Campaigns tied to product drops or events",
      "Reporting that connects reach to pipeline",
    ],
    faqs: [
      {
        question: "Do you only handle organic?",
        answer: "We focus on organic + content operations, and can partner with your paid team for creative and measurement.",
      },
      {
        question: "Can you work with our in-house designers?",
        answer: "Yes-templates, brand guardrails, and workflows are set up so any designer or editor can plug in.",
      },
      {
        question: "How do you show impact?",
        answer: "Shared dashboards with UTMs/pixels, CRM sync, and experiment readouts that tie content to signups or pipeline.",
      },
    ],
    featuredOnHome: false,
  },
];

export default services;
