import Link from "next/link";
import { FiCheckCircle, FiCloud, FiGlobe, FiMessageSquare, FiShield, FiTrendingUp } from "react-icons/fi";

const serviceCards = [
  {
    title: "Reputational Damage Protection",
    description: "Safeguard against harmful rumors and defamatory content with rapid monitoring and response.",
    icon: FiShield,
    accent: "from-[#4f8bff]/20 via-[#7c9dff]/15 to-transparent",
  },
  {
    title: "Brand Lifting",
    description: "Elevate your brand with innovative, data-backed storytelling and design systems.",
    icon: FiTrendingUp,
    accent: "from-[#22c55e]/20 via-[#65d6a3]/15 to-transparent",
  },
  {
    title: "Online Reputation Management",
    description: "Go beyond reactive ORM to strengthen corporate branding across channels.",
    icon: FiMessageSquare,
    accent: "from-[#f97316]/20 via-[#f59e0b]/15 to-transparent",
  },
  {
    title: "Platform-Specific Protection",
    description: "Targeted playbooks for blogs, social media, forums, and review sites.",
    icon: FiCloud,
    accent: "from-[#a855f7]/20 via-[#c084fc]/15 to-transparent",
  },
];

const milestones = [
  { label: "Origins", value: "Brand Cloud Inc. BD", detail: "Remote-first consulting for reputation & brand." },
  { label: "Now", value: "Ninja Digital Innovations", detail: "Physical presence in Bangladesh for on-site delivery." },
  { label: "Network", value: "Japan · Bangladesh", detail: "Global expertise, local execution." },
];

const stats = [
  { label: "Industry", value: "IT Services & Consulting" },
  { label: "Parent", value: "Brand Cloud (Japan)" },
  { label: "Focus", value: "Reputation, AI, Engineering" },
  { label: "Model", value: "Hybrid · Onshore + Remote" },
];

const AboutPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-24 sm:px-6 md:px-10 md:pb-20 md:pt-24">
        {/* Top summary */}
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Company / About</p>
            <h1 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
              Ninja Digital Innovations: Brand Cloud&apos;s physical presence in Bangladesh.
            </h1>
            <p className="text-lg leading-relaxed text-slate-700">
              Brand Cloud Inc. BD, a subsidiary of Japan&apos;s Brand Cloud, has operated remotely to date. With Ninja
              Digital Innovations, we anchor that pedigree in Dhaka—bringing global consulting rigor to a local platform
              while keeping Brand Cloud&apos;s commitment to excellence in software engineering and brand consultancy.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {stats.map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 shadow-[0_16px_40px_-32px_rgba(15,23,42,0.28)]"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
                  <p className="text-base font-semibold text-slate-900">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/company/team"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(79,70,229,0.32)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(79,70,229,0.4)]"
              >
                Meet the team
                <span className="text-base">↗</span>
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-b from-white via-[#f6f8ff] to-white p-6 shadow-[0_25px_80px_-48px_rgba(15,23,42,0.28)]">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,139,255,0.12),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(34,197,94,0.14),transparent_36%)]"
              aria-hidden
            />
            <div className="relative flex flex-col gap-4">
              <span className="inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                Brand Cloud: &quot;Your Total Consulting Solution.&quot;
              </span>
              <p className="text-base leading-relaxed text-slate-700">
                We protect and enhance brand reputation through tailored strategies and expert solutions, now with an
                on-the-ground team in Bangladesh to collaborate faster.
              </p>
              <div className="space-y-3">
                {milestones.map(({ label, value, detail }) => (
                  <div
                    key={label}
                    className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-[0_18px_50px_-38px_rgba(15,23,42,0.32)]"
                  >
                    <FiCheckCircle className="mt-[3px] text-primary" aria-hidden />
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{label}</p>
                      <p className="text-sm font-semibold text-slate-900">{value}</p>
                      <p className="text-sm text-slate-600">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                <FiGlobe className="text-primary" aria-hidden />
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Global Presence</p>
                  <p className="text-sm font-semibold text-slate-900">Japan · Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core services */}
      <section className="bg-slate-50 py-14 sm:py-16 md:py-18">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <div className="flex flex-col gap-3 md:w-2/3">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Core Services</p>
            <h2 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
              Protect, elevate, and future-proof your brand.
            </h2>
            <p className="text-lg leading-relaxed text-slate-700">
              The same Brand Cloud playbooks, now executed with an onshore Bangladeshi team for faster collaboration and
              response.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {serviceCards.map(({ title, description, icon: Icon, accent }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_24px_80px_-52px_rgba(15,23,42,0.32)] transition duration-300 hover:-translate-y-1 hover:border-primary/25"
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${accent} opacity-70`} aria-hidden />
                <div className="relative flex items-start gap-4">
                  <span className="mt-[2px] flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={20} aria-hidden />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                    <p className="text-sm leading-relaxed text-slate-700">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Bangladesh */}
      <section className="py-14 sm:py-16 md:py-18">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">Why Bangladesh</p>
              <h2 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
                Onshore confidence, hybrid speed.
              </h2>
              <p className="text-lg leading-relaxed text-slate-700">
                We co-locate with clients for workshops, sprints, and rapid response—pairing Dhaka&apos;s engineering energy
                with Tokyo-grade quality controls and US collaboration rhythms.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Physical hub in Dhaka for faster decisions.",
                  "Shared rituals across Bangladesh and Japan squads.",
                  "Security, privacy, and compliance baked into delivery.",
                  "Content, legal, and platform partners for coordinated response.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 shadow-[0_16px_40px_-32px_rgba(15,23,42,0.28)]"
                  >
                    <FiCheckCircle className="mt-[2px] text-primary" aria-hidden />
                    <p className="text-sm leading-relaxed text-slate-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-[#0b2f72] via-[#0d1d40] to-[#051331] p-6 text-white shadow-[0_28px_90px_-60px_rgba(5,19,49,0.55)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_82%_22%,rgba(120,123,255,0.18),transparent_32%),radial-gradient(circle_at_70%_78%,rgba(34,197,94,0.14),transparent_34%)]" />
              <div className="relative space-y-4">
                <p className="text-xs uppercase tracking-[0.22em] text-white/70">Global Presence</p>
                <h3 className="text-2xl font-semibold leading-tight">Japan · Bangladesh</h3>
                <p className="text-white/80">
                  Brand Cloud&apos;s reputation expertise meets Ninja Digital Innovations&apos; local execution—so you get
                  strategy, build, and response from one integrated team.
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { title: "Workshops", detail: "Onshore discovery and alignment" },
                    { title: "Delivery", detail: "Hybrid squads with shared SLOs" },
                    { title: "Defense", detail: "Always-on monitoring & playbooks" },
                  ].map(({ title, detail }) => (
                    <div key={title} className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3">
                      <p className="text-sm font-semibold text-white">{title}</p>
                      <p className="text-sm text-white/80">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
