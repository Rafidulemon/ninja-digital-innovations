import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/button/Button";
import servicesData, { ServiceIconKey } from "@/app/data/services";
import {
  FiActivity,
  FiArrowLeft,
  FiArrowUpRight,
  FiCheckCircle,
  FiClock,
  FiCode,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiMessageSquare,
  FiShield,
  FiTarget,
  FiTool,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";

const iconMap: Record<ServiceIconKey, typeof FiCode> = {
  FiCode,
  FiCpu,
  FiShield,
  FiDatabase,
  FiMessageSquare,
};

const outcomeIconMap = {
  FiZap,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiActivity,
  FiCheckCircle,
} as const;

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

const ServiceDetailPage = async ({ params }: ServicePageProps) => {
  const { slug } = await params;
  const service = servicesData.find((item) => item.slug === slug);
  if (!service) return notFound();

  const Icon = iconMap[service.icon];

  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section
        id="service-detail-hero"
        className="relative isolate -mt-16 flex flex-col overflow-hidden bg-gradient-to-b from-black via-[#0b2f72] to-[#051331] text-white md:-mt-20"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background: `radial-gradient(circle at 20% 18%, ${service.tint}26, transparent 32%), radial-gradient(circle at 80% 12%, rgba(34,197,94,0.18), transparent 30%), radial-gradient(circle at 72% 78%, rgba(14,165,233,0.2), transparent 34%)`,
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

        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 pb-14 pt-24 sm:px-6 md:pb-20 md:pt-28">
          <div className="flex flex-wrap items-center gap-3 text-[12px] uppercase tracking-[0.28em] text-white/80">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white transition hover:border-white/40 hover:text-white"
            >
              <FiArrowLeft size={14} aria-hidden />
              Back
            </Link>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur">
              <FiLayers size={14} aria-hidden />
              Service
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/20 shadow-inner">
                <Icon size={20} aria-hidden />
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/75">
                {service.tagline}
              </p>
            </div>
            <h1 className="font-spaceGrotesk text-4xl font-semibold leading-tight sm:text-5xl md:text-[52px]">
              {service.title}
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-white/80">{service.summary}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/contact">
              <Button theme="white" className="px-6 py-2 text-sm font-semibold text-slate-900">
                Start a project
              </Button>
            </Link>
            <Link href="/projects">
              <Button theme="dark" className="px-6 py-2 text-sm font-semibold">
                See our work
              </Button>
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {service.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 shadow-[0_16px_40px_-28px_rgba(0,0,0,0.4)] backdrop-blur transition hover:border-white/25"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-white/60">{stat.label}</p>
                <p className="mt-2 text-lg font-semibold text-white">{stat.value}</p>
                <p className="text-sm text-white/70">{stat.hint}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {service.highlights.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur"
              >
                <FiCheckCircle size={14} aria-hidden />
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="relative -mt-12 bg-white pb-14 pt-6 sm:pt-10 md:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(88,116,168,0.08),transparent_28%),radial-gradient(circle_at_82%_14%,rgba(88,144,168,0.08),transparent_30%),radial-gradient(circle_at_70%_74%,rgba(88,116,168,0.08),transparent_28%)]" aria-hidden />
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <div className="flex flex-col gap-3 md:w-3/4">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">What you get</p>
            <h2 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
              Outcomes we anchor every engagement to.
            </h2>
            <p className="text-base leading-relaxed text-slate-700">
              Clear measures of success up front-so we design workstreams, checkpoints, and KPIs that prove value early and often.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {service.outcomes.map((outcome) => {
              const OutcomeIcon = outcome.icon ? outcomeIconMap[outcome.icon] : FiCheckCircle;
              return (
                <div
                  key={outcome.title}
                  className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_24px_80px_-52px_rgba(15,23,42,0.3)] transition duration-300 hover:-translate-y-1"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-slate-50" aria-hidden />
                  <div className="relative flex flex-col gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <OutcomeIcon size={18} aria-hidden />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{outcome.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-700">{outcome.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="relative bg-slate-50 py-14 sm:py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_24%,rgba(88,116,168,0.08),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(34,197,94,0.08),transparent_32%),radial-gradient(circle_at_72%_78%,rgba(14,165,233,0.07),transparent_34%)]" aria-hidden />
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <div className="flex flex-col gap-3 md:w-3/4">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Service modules</p>
            <h2 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
              Mix-and-match modules to fit your goals.
            </h2>
            <p className="text-base leading-relaxed text-slate-700">
              Each module includes concrete deliverables and owners. We start with the smallest set that proves value, then scale.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {service.offerings.map((offering) => (
              <div
                key={offering.title}
                className="relative flex h-full flex-col gap-3 overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_24px_80px_-52px_rgba(15,23,42,0.3)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-transparent to-slate-50" aria-hidden />
                <div className="relative flex flex-col gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <FiTool size={16} aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{offering.title}</h3>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700">
                    {offering.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <FiCheckCircle size={14} className="mt-[2px] text-primary" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Playbooks */}
      <section className="relative bg-white py-14 sm:py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(88,116,168,0.08),transparent_32%),radial-gradient(circle_at_84%_18%,rgba(16,185,129,0.08),transparent_32%),radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.08),transparent_30%)]" aria-hidden />
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <div className="flex flex-col gap-3 md:w-3/4">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Delivery playbook</p>
            <h2 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
              How we run the work day to day.
            </h2>
            <p className="text-base leading-relaxed text-slate-700">
              Transparent cadence, artifacts you can keep, and checkpoints that keep stakeholders aligned without slowing velocity.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {service.playbooks.map((play) => (
              <div
                key={play.title}
                className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_24px_80px_-52px_rgba(15,23,42,0.3)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-slate-50" aria-hidden />
                <div className="relative flex flex-col gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <FiClock size={16} aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{play.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-700">{play.detail}</p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {play.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <FiCheckCircle size={14} className="mt-[2px] text-primary" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="relative bg-slate-50 py-14 sm:py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(88,116,168,0.08),transparent_28%),radial-gradient(circle_at_82%_14%,rgba(88,144,168,0.08),transparent_30%),radial-gradient(circle_at_70%_74%,rgba(88,116,168,0.08),transparent_28%)]" aria-hidden />
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <div className="flex flex-col gap-3 md:w-3/4">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Engagement models</p>
            <h2 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
              Choose the shape that matches your stage.
            </h2>
            <p className="text-base leading-relaxed text-slate-700">
              Time-boxed sprints for validation, squads for ownership, or retainers for steady improvements.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {service.engagementModels.map((model) => (
              <div
                key={model.name}
                className="relative flex h-full flex-col gap-3 rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_24px_80px_-52px_rgba(15,23,42,0.3)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-transparent to-slate-50" aria-hidden />
                <div className="relative flex flex-col gap-2">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    <FiClock size={14} aria-hidden />
                    {model.duration}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{model.name}</h3>
                  <p className="text-sm font-semibold text-primary/80">{model.bestFor}</p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700">
                    {model.inclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <FiCheckCircle size={14} className="mt-[2px] text-primary" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative bg-white py-14 sm:py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(88,116,168,0.08),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.08),transparent_32%)]" aria-hidden />
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <div className="flex flex-col gap-3 md:w-3/4">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Sample timeline</p>
            <h2 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
              How the first weeks typically unfold.
            </h2>
            <p className="text-base leading-relaxed text-slate-700">
              We tailor depth and duration to the scope, but every phase ends with tangible artifacts you can use.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {service.timeline.map((step, idx) => (
              <div
                key={`${step.phase}-${idx}`}
                className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_24px_80px_-52px_rgba(15,23,42,0.3)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-slate-50" aria-hidden />
                <div className="relative flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      <FiClock size={14} aria-hidden />
                      {step.duration}
                    </div>
                    <span className="text-xs font-semibold text-slate-400">Step {idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{step.phase}</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-slate-50 p-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Objectives</p>
                      <ul className="mt-2 space-y-2 text-sm text-slate-700">
                        {step.objectives.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <FiCheckCircle size={14} className="mt-[2px] text-primary" aria-hidden />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Artifacts</p>
                      <ul className="mt-2 space-y-2 text-sm text-slate-700">
                        {step.artifacts.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <FiCheckCircle size={14} className="mt-[2px] text-primary" aria-hidden />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & use cases */}
      <section className="relative bg-slate-50 py-14 sm:py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_24%,rgba(88,116,168,0.08),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(34,197,94,0.08),transparent_32%)]" aria-hidden />
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">Tools & accelerators</p>
              <h3 className="text-2xl font-semibold text-slate-900">Stacks and accelerators we bring.</h3>
              <p className="text-base leading-relaxed text-slate-700">
                We stay tool-agnostic but opinionated. These are our defaults; we adapt to your standards and vendors.
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-[0_10px_28px_-24px_rgba(15,23,42,0.35)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_24px_80px_-52px_rgba(15,23,42,0.3)]">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">Use cases</p>
              <h3 className="text-xl font-semibold text-slate-900">Where this service fits best.</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {service.useCases.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <FiArrowUpRight size={14} className="mt-[2px] text-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative bg-white py-14 sm:py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_18%,rgba(88,116,168,0.08),transparent_28%),radial-gradient(circle_at_80%_16%,rgba(34,197,94,0.08),transparent_30%)]" aria-hidden />
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <div className="flex flex-col gap-3 md:w-2/3">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">FAQs</p>
            <h2 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
              Details teams usually ask us about.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {service.faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_20px_70px_-50px_rgba(15,23,42,0.32)]"
              >
                <p className="text-sm font-semibold text-slate-900">{faq.question}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#0c1a38] via-[#0b2c5c] to-[#0f172a] py-14 text-white sm:py-16 md:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-45"
          aria-hidden
          style={{
            background:
              "radial-gradient(circle at 24% 22%, rgba(255,255,255,0.18), transparent 32%), radial-gradient(circle at 82% 18%, rgba(120,123,255,0.2), transparent 32%), radial-gradient(circle at 68% 76%, rgba(34,197,94,0.18), transparent 32%)",
          }}
        />
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:px-6 md:px-10">
          <div className="flex flex-col gap-3 md:w-3/4">
            <p className="text-[11px] uppercase tracking-[0.32em] text-white/70">Next step</p>
            <h3 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
              Ready to tailor {service.title} to your roadmap?
            </h3>
            <p className="text-lg leading-relaxed text-white/80">
              Tell us what you are aiming for-reliability, growth, compliance, or a specific launch date-and we will propose a lean starter plan within a few days.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/contact">
              <Button theme="white" className="px-6 py-2 text-sm font-semibold text-slate-900">
                Book a discovery call
              </Button>
            </Link>
            <Link href="/services">
              <Button theme="dark" className="px-6 py-2 text-sm font-semibold">
                Browse all services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;

export async function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}
