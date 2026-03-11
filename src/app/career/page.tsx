import Link from "next/link";
import Button from "@/components/button/Button";
import jobsData from "@/app/data/jobs.json";
import {
  FiAward,
  FiCoffee,
  FiCompass,
  FiCpu,
  FiGlobe,
  FiHeart,
  FiLayers,
  FiMoon,
  FiShield,
  FiZap,
} from "react-icons/fi";

type Role = {
  id: string;
  title: string;
  location: string;
  type: string;
  summary: string;
  tags: string[];
};

const roles: Role[] = (jobsData as Role[]).filter((job) => job.id !== "open-application");

const perks = [
  { icon: FiGlobe, title: "Remote-first, global", text: "Build with teammates across APAC, US, and EU time zones." },
  { icon: FiCompass, title: "Autonomy with guardrails", text: "Clear outcomes, lightweight process, senior trust." },
  { icon: FiShield, title: "Security by default", text: "We invest in tools, reviews, and blameless postmortems." },
  { icon: FiZap, title: "Learning budget", text: "Annual stipend for courses, books, conferences, and certs." },
  { icon: FiAward, title: "Growth paths", text: "Technical and managerial tracks with transparent expectations." },
  { icon: FiCoffee, title: "Recharge time", text: "Flexible PTO and local holiday swaps." },
  { icon: FiMoon, title: "Sane hours", text: "No heroics—healthy cadence with async-first collaboration." },
  { icon: FiHeart, title: "Meaningful work", text: "AI, security, and social impact products that ship." },
];

const process = [
  { title: "Intro & mutual fit", detail: "30 minutes with talent partner; goals, location, expectations." },
  { title: "Craft interview", detail: "Role-specific deep dive with a senior peer; portfolio or repo walkthrough." },
  { title: "Practical exercise", detail: "Short, scoped task or live pairing on real-ish problems." },
  { title: "Team panel", detail: "Meet cross-functional partners to feel the collaboration style." },
  { title: "Offer", detail: "Transparent leveling, comp bands, and start planning." },
];

const stats = [
  { label: "Countries", value: "9", note: "Collaborating across time zones" },
  { label: "Avg. tenure", value: "3.4y", note: "Teams that stay and grow" },
  { label: "Deploys / week", value: "35+", note: "Shipping mindset, steady cadence" },
  { label: "Security drills", value: "Monthly", note: "Practice makes resilient" },
];

const CareerPage = () => {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section
        id="career-hero"
        className="relative isolate -mt-16 flex min-h-[calc(100vh+4rem)] flex-col justify-center overflow-hidden bg-gradient-to-b from-black via-[#0b2f72] to-[#051331] text-white md:-mt-20 md:min-h-[calc(100vh+5rem)]"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 18% 22%, rgba(255,255,255,0.18), transparent 30%), radial-gradient(circle at 82% 12%, rgba(120,123,255,0.24), transparent 32%), radial-gradient(circle at 70% 75%, rgba(34,197,94,0.18), transparent 32%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-45"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02), rgba(255,255,255,0.04))",
            backgroundSize: "220% 220%",
            animation: "gradient-shift 16s ease-in-out infinite",
          }}
        />
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 pb-18 pt-20 sm:px-6 md:pb-24 md:pt-24">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[12px] uppercase tracking-[0.28em] text-white/80 backdrop-blur">
            <FiLayers size={14} aria-hidden />
            Careers
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-spaceGrotesk text-4xl font-semibold leading-tight sm:text-5xl md:text-[52px]">
              Build AI-era products with people who ship and care.
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-white/80">
              Ninja Digital Innovations is a remote-first, security-forward studio. We pair senior engineers, designers, and strategists to launch resilient products for global clients.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#roles"
              className="group inline-flex items-center justify-center rounded-[12px] border border-white/30 bg-white px-6 py-2 text-sm font-semibold text-slate-900 shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(0,0,0,0.28)]"
            >
              View open roles
            </Link>
          </div>
        </div>
      </section>

      {/* Values & stats */}
      <section className="relative -mt-12 bg-white pb-14 pt-6 sm:pt-10 md:pb-18">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_25px_80px_-48px_rgba(15,23,42,0.24)]">
              <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">How we work</p>
              <h2 className="mt-2 font-spaceGrotesk text-3xl font-semibold text-slate-900 md:text-4xl">
                High trust, low ego, security-first.
              </h2>
              <ul className="mt-5 space-y-3 text-base text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                  Remote-first with deliberate overlap hours so collaboration stays calm and focused.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                  Security and quality are table stakes—IaC guardrails, peer reviews, and feature flags on by default.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                  We grow together: structured feedback, mentorship loops, and space for deep work.
                </li>
              </ul>
            </div>
            <div className="grid gap-3 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.24)] sm:grid-cols-2">
              {stats.map(({ label, value, note }) => (
                <div key={label} className="flex flex-col gap-1 rounded-2xl border border-slate-100 bg-white p-4">
                  <span className="text-xs uppercase tracking-[0.22em] text-slate-500">{label}</span>
                  <span className="text-2xl font-semibold text-slate-900">{value}</span>
                  <span className="text-xs text-slate-600">{note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section id="roles" className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">Open roles</p>
            <h2 className="font-spaceGrotesk text-3xl font-semibold text-slate-900 md:text-4xl">
              Join the crew.
            </h2>
            <p className="max-w-3xl text-base text-slate-600">
              We hire for craft, curiosity, and collaboration. If you don’t see a perfect fit, send us a note anyway.
            </p>
          </div>

          <div className="space-y-4">
            {roles.map(({ id, title, location, type, summary, tags }) => (
              <article
                key={id}
                className="group flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_22px_70px_-50px_rgba(15,23,42,0.32)] transition duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_30px_100px_-60px_rgba(15,23,42,0.32)]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 transition-colors duration-200 group-hover:text-primary">
                      {title}
                    </h3>
                    <p className="text-sm text-slate-500">{summary}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">{type}</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">{location}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Link href={`/career/apply/${id}`}>
                    <Button theme="primary" className="px-5 py-2 text-xs font-semibold">
                      Apply now
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="relative bg-white py-16 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 sm:px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">Perks & benefits</p>
            <h2 className="font-spaceGrotesk text-3xl font-semibold text-slate-900 md:text-4xl">
              Support to do your best work.
            </h2>
            <p className="max-w-3xl text-base text-slate-600">
              We keep perks focused on what matters: flexibility, health, growth, and meaningful impact.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {perks.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group flex gap-3 rounded-3xl border border-slate-100 bg-slate-50/70 p-5 shadow-[0_18px_60px_-50px_rgba(15,23,42,0.32)] transition hover:-translate-y-1 hover:border-primary/30 hover:bg-white"
              >
                <span className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon size={18} aria-hidden />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-semibold text-slate-900 transition-colors duration-200 group-hover:text-primary">
                    {title}
                  </p>
                  <p className="text-sm text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">Hiring process</p>
            <h2 className="font-spaceGrotesk text-3xl font-semibold text-slate-900 md:text-4xl">
              Transparent steps, quick feedback.
            </h2>
            <p className="max-w-3xl text-base text-slate-600">
              We respect your time with predictable steps and decisions inside a week when possible.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-5">
            {process.map(({ title, detail }, idx) => (
              <div
                key={title}
                className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_18px_60px_-50px_rgba(15,23,42,0.32)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">0{idx + 1}</span>
                  <FiCpu className="text-primary" size={16} aria-hidden />
                </div>
                <p className="text-base font-semibold text-slate-900">{title}</p>
                <p className="text-sm text-slate-600">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-primary/10 via-white to-emerald-50 py-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 sm:px-6 md:px-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">Ready?</p>
            <h3 className="font-spaceGrotesk text-2xl font-semibold text-slate-900 md:text-3xl">
              Don’t see the exact role? We still want to hear from you.
            </h3>
            <p className="text-sm text-slate-600">
              Tell us what you want to build and how you like to work—we hire great people, not just titles.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/career/apply/open-application">
              <Button theme="primary" className="px-5 py-2 text-sm font-semibold">
                Send an open application
              </Button>
            </Link>
            <Link href="/contact" className="text-sm font-semibold text-primary hover:underline">
              Talk to a human
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
