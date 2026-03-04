import { FiActivity, FiAnchor, FiAperture, FiGlobe, FiMapPin, FiShield, FiTarget, FiTrendingUp } from "react-icons/fi";

const horizon = [
  {
    title: "Onshore confidence",
    detail: "Physical presence in Dhaka for workshops, sprints, and rapid response.",
    icon: FiMapPin,
  },
  {
    title: "Quality without compromise",
    detail: "Tokyo-grade standards, US collaboration rhythms, Dhaka craftsmanship.",
    icon: FiTarget,
  },
  {
    title: "Impact you can measure",
    detail: "Reputation lift, risk reduction, and brand resilience with clear KPIs.",
    icon: FiTrendingUp,
  },
];

const pillars = [
  {
    title: "AI-era brand protection",
    detail: "Applied AI for detection, summarization, and incident triage across social, search, and owned channels.",
    icon: FiActivity,
  },
  {
    title: "Security-first delivery",
    detail: "Zero-trust defaults, data residency awareness, and policy-as-code baked into every engagement.",
    icon: FiShield,
  },
  {
    title: "Human-centered narratives",
    detail: "Brand Cloud consultants and local storytellers co-create narratives that resonate in South Asian contexts.",
    icon: FiAperture,
  },
  {
    title: "Hybrid collaboration",
    detail: "Onsite facilitation in Dhaka + async global rituals to keep velocity high and decisions transparent.",
    icon: FiAnchor,
  },
];

const roadmap = [
  { phase: "0-30 days", focus: "Discover & align", output: "Reputation baseline, risk map, shared KPIs." },
  { phase: "30-90 days", focus: "Design & pilot", output: "Playbooks, AI monitoring pilots, creative test flights." },
  { phase: "90-180 days", focus: "Scale & govern", output: "Automation, policy-as-code, SLOs, weekly scorecards." },
];

const metrics = [
  { label: "Detection latency", value: "< 15 min", note: "Across priority channels during active campaigns." },
  { label: "Brand lift", value: "+8–12%", note: "Sentiment and share-of-voice improvements quarter over quarter." },
  { label: "Incident closure", value: " < 48 hrs", note: "From flag to resolution for tier-1 incidents." },
  { label: "Confidence score", value: "90%+", note: "Executive readiness for launches and reputational risks." },
];

const VisionPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-24 sm:px-6 md:px-10 md:pb-20 md:pt-28">
        <div className="flex flex-col gap-3 md:w-3/4">
          <p className="text-xs uppercase tracking-[0.22em] text-primary">Company / Vision</p>
          <h1 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
            A resilient bridge between global brands and Bangladesh&apos;s tech talent.
          </h1>
          <p className="text-lg leading-relaxed text-slate-700">
            We translate Brand Cloud&apos;s proven reputation frameworks into locally-led delivery. That means co-locating
            with clients, activating Dhaka&apos;s engineering community, and orchestrating hybrid teams that move with
            Japanese precision and Bangladeshi pace.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {horizon.map(({ title, detail, icon: Icon }) => (
            <div
              key={title}
              className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_24px_80px_-52px_rgba(15,23,42,0.32)] transition duration-300 hover:-translate-y-1"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[#0ea5e9]/5" aria-hidden />
              <div className="relative flex items-start gap-4">
                <span className="mt-[2px] flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon size={20} aria-hidden />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-700">{detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pillars */}
        <div className="mt-12 flex flex-col gap-3 md:w-2/3">
          <p className="text-xs uppercase tracking-[0.22em] text-primary">Pillars</p>
          <h2 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
            How we deliver the vision.
          </h2>
          <p className="text-lg leading-relaxed text-slate-700">
            Four operating pillars guide every engagement—balancing automation, safety, storytelling, and collaboration.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {pillars.map(({ title, detail, icon: Icon }) => (
            <div
              key={title}
              className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_24px_80px_-52px_rgba(15,23,42,0.32)] transition duration-300 hover:-translate-y-1"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[#0ea5e9]/5" aria-hidden />
              <div className="relative flex items-start gap-4">
                <span className="mt-[2px] flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon size={20} aria-hidden />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-700">{detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Roadmap */}
        <div className="mt-12 flex flex-col gap-3 md:w-2/3">
          <p className="text-xs uppercase tracking-[0.22em] text-primary">Roadmap</p>
          <h2 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
            From discovery to governed scale.
          </h2>
        </div>
        <div className="mt-6 grid gap-4 rounded-3xl border border-slate-100 bg-slate-50 p-4 shadow-[0_18px_60px_-48px_rgba(15,23,42,0.28)] md:grid-cols-3">
          {roadmap.map(({ phase, focus, output }) => (
            <div key={phase} className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_18px_50px_-42px_rgba(15,23,42,0.25)]">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{phase}</p>
              <p className="mt-1 text-base font-semibold text-slate-900">{focus}</p>
              <p className="text-sm text-slate-700">{output}</p>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="mt-12 flex flex-col gap-3 md:w-2/3">
          <p className="text-xs uppercase tracking-[0.22em] text-primary">What success looks like</p>
          <h2 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
            Measured, reported, improved.
          </h2>
          <p className="text-lg leading-relaxed text-slate-700">
            Every engagement ships with scorecards, SLOs, and executive-ready reporting that map to business outcomes.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {metrics.map(({ label, value, note }) => (
            <div
              key={label}
              className="flex flex-col gap-1 rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-[0_18px_50px_-42px_rgba(15,23,42,0.25)]"
            >
              <div className="flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-slate-500">
                <FiGlobe className="text-primary" aria-hidden />
                {label}
              </div>
              <p className="text-xl font-semibold text-slate-900">{value}</p>
              <p className="text-sm text-slate-700">{note}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VisionPage;
