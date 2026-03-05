import Image from "next/image";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiExternalLink,
  FiGlobe,
  FiLayers,
  FiZap,
} from "react-icons/fi";
import Button from "@/components/button/Button";
import projectsData from "@/app/data/projects.json";

type Project = {
  name: string;
  details: string;
  image_src: string;
  live_url: string;
  slug: string;
  technologies?: { name: string; logo?: string }[];
};

const projects = projectsData as Project[];

const projectMeta: Record<
  string,
  {
    badge: string;
    accent: string;
    tags: string[];
    impact: string;
  }
> = {
  "Knowledge Links AI": {
    badge: "AI / RAG",
    accent: "from-[#0ea5e9] via-[#6366f1] to-[#22d3ee]",
    tags: ["Hybrid retrieval", "Citations", "Eval + feedback"],
    impact: "Grounded answers with traceable context",
  },
  MoeGuide: {
    badge: "Travel tech",
    accent: "from-[#f59e0b] via-[#f97316] to-[#fb7185]",
    tags: ["Guide discovery", "Responsive UI", "Type-safe flows"],
    impact: "Frictionless city discovery for visitors",
  },
  Suirikyou: {
    badge: "EdTech",
    accent: "from-[#8b5cf6] via-[#6366f1] to-[#22c55e]",
    tags: ["Interactive quizzes", "Real-time feedback", "State management"],
    impact: "Keeps learners engaged across devices",
  },
  "Gmail Triage Automation (Cloudflare Workers)": {
    badge: "Automation",
    accent: "from-[#10b981] via-[#14b8a6] to-[#0ea5e9]",
    tags: ["OAuth2", "Cloudflare Workers", "Signal routing"],
    impact: "Deduplicated alerts for faster responses",
  },
};

const deliveryPillars = [
  {
    title: "Discovery → measurable goals",
    detail: "We start with use-case canvases, risks, and a success scorecard before committing engineers.",
  },
  {
    title: "Build with guardrails",
    detail: "Secure-by-default repos, CI, and observability so shipping fast never compromises safety.",
  },
  {
    title: "Launch & keep improving",
    detail: "Runbooks, telemetry, and feedback loops keep products healthy after the first release.",
  },
];

const ProjectsPage = () => {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section
        id="projects-hero"
        className="relative isolate -mt-16 flex min-h-[calc(100vh+2rem)] flex-col justify-center overflow-hidden bg-gradient-to-b from-black via-[#0b2f72] to-[#051331] text-white md:-mt-20 md:min-h-[calc(100vh+3rem)]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(88,116,168,0.32), transparent 32%), radial-gradient(circle at 80% 12%, rgba(34,197,94,0.22), transparent 28%), radial-gradient(circle at 72% 76%, rgba(14,165,233,0.2), transparent 34%)",
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

        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 pb-16 pt-20 sm:px-6 md:pb-20 md:pt-24">
          <div className="flex flex-wrap items-center gap-3 text-[12px] uppercase tracking-[0.28em] text-white/80">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur">
              <FiLayers size={14} aria-hidden />
              Projects
            </span>
            <span className="rounded-full bg-white/5 px-3 py-1 text-white/70">AI, web, automation, content ops</span>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="font-spaceGrotesk text-4xl font-semibold leading-tight sm:text-5xl md:text-[56px]">
              Products and platforms we shipped with our partners.
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-white/80">
              A snapshot of how we blend strategy, engineering, and AI to launch secure, observable, and delightful experiences.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="w-[150px]">
              <Button className="text-sm font-semibold" isWidthFull>
                Start a project
              </Button>
            </Link>
            <Link href="/services" >
              <Button theme="white" className="text-sm font-semibold text-slate-900">
                View services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="relative isolate -mt-12 bg-white pb-16 pt-6 sm:pt-12 md:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(88,116,168,0.08),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(34,197,94,0.08),transparent_30%),radial-gradient(circle_at_76%_76%,rgba(14,165,233,0.07),transparent_30%)]" aria-hidden />

        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <div className="flex flex-col gap-3 md:w-3/4">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Selected work</p>
            <h2 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
              Built for reliability, adoption, and measurable outcomes.
            </h2>
            <p className="text-lg leading-relaxed text-slate-700">
              Each engagement pairs clear success metrics with strong product craft—so the launch story stays as strong as the tech.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {projects.map((project, idx) => {
              const meta = projectMeta[project.name] ?? {
                badge: "Product",
                accent: "from-[#5874a8] via-[#6f8fc4] to-[#22d3ee]",
                tags: [],
                impact: "",
              };

              return (
                <article
                  key={project.name}
                  className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_28px_80px_-48px_rgba(15,23,42,0.32)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_110px_-60px_rgba(15,23,42,0.35)]"
                  style={{ animation: "home-fade-up 0.9s ease both", animationDelay: `${idx * 0.06}s` }}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 p-3 sm:p-4">
                    <Image
                      src={project.image_src}
                      alt={project.name}
                      fill
                      className="object-contain transition duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 600px"
                      priority={idx < 2}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent" aria-hidden />
                    <div
                      className={`absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${meta.accent} px-3 py-1 text-xs font-semibold text-white shadow-[0_10px_30px_-18px_rgba(0,0,0,0.4)]`}
                    >
                      <FiZap size={14} aria-hidden />
                      {meta.badge}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 px-5 py-4 sm:px-6 sm:py-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex flex-col gap-1">
                        <h3 className="text-xl font-semibold text-slate-900">{project.name}</h3>
                        {meta.impact ? (
                          <p className="text-sm font-semibold text-primary/80">{meta.impact}</p>
                        ) : null}
                      </div>
                      <Link
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-primary/40 hover:text-primary"
                        aria-label={`Open ${project.name}`}
                      >
                        Live <FiExternalLink size={14} aria-hidden />
                      </Link>
                    </div>

                    <p className="text-sm leading-relaxed text-slate-700">{project.details}</p>

                    {meta.tags.length ? (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {meta.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[12px] font-medium text-slate-700 transition hover:border-primary/30 hover:bg-primary/5"
                          >
                            <FiCheckCircle size={12} aria-hidden />
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-3 text-sm text-slate-600">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="flex items-center gap-2 text-primary transition hover:text-primaryBlueDark"
                      >
                        <FiArrowUpRight size={16} aria-hidden />
                        <span>See details</span>
                      </Link>
                      <span className="text-slate-500">Shipped with NDI</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* How we run projects */}
      <section className="relative bg-slate-50 py-14 sm:py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(88,116,168,0.09),transparent_28%),radial-gradient(circle_at_82%_14%,rgba(88,144,168,0.08),transparent_30%),radial-gradient(circle_at_70%_74%,rgba(88,116,168,0.08),transparent_28%)]" aria-hidden />
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <div className="flex flex-col gap-3 md:w-2/3">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Delivery</p>
            <h3 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
              Reliable delivery from first workshop to post-launch.
            </h3>
            <p className="text-lg leading-relaxed text-slate-700">
              We operate as a single squad with your team—shipping in short cycles, keeping stakeholders in the loop, and hardening for scale before launch.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {deliveryPillars.map((item) => (
              <div
                key={item.title}
                className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_24px_80px_-52px_rgba(15,23,42,0.3)] transition duration-300 hover:-translate-y-1"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[#0ea5e9]/5" aria-hidden />
                <div className="relative flex flex-col gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <FiGlobe size={18} aria-hidden />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-700">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#0c1a38] via-[#0b2c5c] to-[#0f172a] py-14 text-white sm:py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-45" aria-hidden style={{ background: "radial-gradient(circle at 24% 22%, rgba(255,255,255,0.18), transparent 32%), radial-gradient(circle at 82% 18%, rgba(120,123,255,0.2), transparent 32%), radial-gradient(circle at 68% 76%, rgba(34,197,94,0.18), transparent 32%)" }} />
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:px-6 md:px-10">
          <div className="flex flex-col gap-3 md:w-3/4">
            <p className="text-[11px] uppercase tracking-[0.32em] text-white/70">Let&apos;s collaborate</p>
            <h3 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
              Ready to plan your next launch?
            </h3>
            <p className="text-lg leading-relaxed text-white/80">
              Tell us about your goals—we’ll assemble the right squad, share a lightweight plan, and start shipping within weeks.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/contact">
              <Button theme="white" className="px-6 py-2 text-sm font-semibold text-slate-900">
                Talk to us
              </Button>
            </Link>
            <Link href="/company/team">
              <Button theme="dark" className="px-6 py-2 text-sm font-semibold">
                Meet the crew
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
