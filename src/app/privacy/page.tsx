import Link from "next/link";
import Button from "@/components/button/Button";

const principles = [
  { title: "Minimal collection", detail: "We only collect what we need to deliver services and improve reliability." },
  { title: "Transparency", detail: "You can ask what data we hold and how it is used, at any time." },
  { title: "Security by default", detail: "Access is limited, encrypted in transit and at rest, with least-privilege controls." },
];

const sections = [
  {
    heading: "Data we collect",
    items: [
      "Contact details (name, email, company, role) when you reach out or create an account.",
      "Usage and telemetry (browser, device, pages, events) to improve performance and reliability.",
      "Content you submit (forms, uploads, feedback) for support and delivery.",
      "Commercial data (project scope, invoices) when we engage commercially.",
    ],
  },
  {
    heading: "How we use data",
    items: [
      "Provide and improve our products and services.",
      "Respond to inquiries, support tickets, and project requests.",
      "Operate security, fraud, and abuse prevention controls.",
      "Comply with legal obligations and enforce agreements.",
    ],
  },
  {
    heading: "Sharing",
    items: [
      "Vetted sub‑processors for hosting, email, analytics, and payments—under data protection terms.",
      "Professional advisors (legal, accounting) under confidentiality.",
      "Law enforcement only when required by applicable law.",
      "We do not sell personal data.",
    ],
  },
  {
    heading: "Security",
    items: [
      "Encryption in transit (TLS) and at rest for supported services.",
      "Role-based access, least privilege, and activity logging on production systems.",
      "Regular backups and environment separation for staging vs. production.",
      "Vendor reviews and secret management for third-party integrations.",
    ],
  },
  {
    heading: "Retention",
    items: [
      "Contact and account data: retained while your account or engagement is active.",
      "Operational logs: typically 30–180 days, unless needed for security or compliance.",
      "Contracts, billing, and tax records: retained per legal obligations.",
    ],
  },
  {
    heading: "Your choices & rights",
    items: [
      "Access, correct, or delete your personal data (subject to legal limits).",
      "Opt out of marketing communications at any time.",
      "Request a copy of sub-processor list or data protection terms for engagements.",
      "EU/EEA users: you may contact your supervisory authority with concerns.",
    ],
  },
];

const PrivacyPage = () => {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section
        id="privacy-hero"
        className="relative isolate -mt-16 flex flex-col overflow-hidden bg-gradient-to-b from-black via-[#0b2f72] to-[#051331] text-white md:-mt-20"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at 22% 18%, rgba(88,116,168,0.28), transparent 32%), radial-gradient(circle at 78% 14%, rgba(34,197,94,0.18), transparent 30%), radial-gradient(circle at 72% 78%, rgba(14,165,233,0.16), transparent 32%)",
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

        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 pb-16 pt-24 sm:px-6 md:pb-20 md:pt-28">
          <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.28em] text-white/80">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur">
              Privacy
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-white/70">Trust & Security</span>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="font-spaceGrotesk text-4xl font-semibold leading-tight sm:text-5xl md:text-[52px]">
              Privacy & data protection at Ninja Digital Innovation.
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-white/80">
              We build secure, observable products—and safeguard the data that powers them. This page outlines what we collect, how we use it, and the choices you have.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/contact">
              <Button theme="white" className="px-6 py-2 text-sm font-semibold text-slate-900">
                Contact our team
              </Button>
            </Link>
            <Link href="/services">
              <Button theme="dark" className="px-6 py-2 text-sm font-semibold">
                View services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="relative -mt-12 bg-white pb-16 pt-6 sm:pt-10 md:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(88,116,168,0.08),transparent_28%),radial-gradient(circle_at_82%_14%,rgba(88,144,168,0.08),transparent_30%),radial-gradient(circle_at_70%_74%,rgba(88,116,168,0.08),transparent_28%)]" aria-hidden />
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-6 md:px-10">
          <div className="flex flex-col gap-3 md:w-3/4">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Our approach</p>
            <h2 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
              Guardrails for data across products, clients, and teams.
            </h2>
            <p className="text-base leading-relaxed text-slate-700">
              These principles guide how we collect, use, and protect information in our platforms and client engagements.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_22px_70px_-52px_rgba(15,23,42,0.3)] transition duration-300 hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="relative bg-slate-50 py-14 sm:py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(88,116,168,0.08),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(14,165,233,0.08),transparent_30%),radial-gradient(circle_at_70%_76%,rgba(88,116,168,0.08),transparent_30%)]" aria-hidden />
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-6 md:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            {sections.map((section) => (
              <article
                key={section.heading}
                className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_22px_72px_-56px_rgba(15,23,42,0.3)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/4 via-transparent to-[#0ea5e9]/6" aria-hidden />
                <div className="relative flex flex-col gap-3">
                  <h3 className="text-lg font-semibold text-slate-900">{section.heading}</h3>
                  <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#0c1a38] via-[#0b2c5c] to-[#0f172a] py-14 text-white sm:py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-45" aria-hidden style={{ background: "radial-gradient(circle at 24% 22%, rgba(255,255,255,0.18), transparent 32%), radial-gradient(circle at 82% 18%, rgba(120,123,255,0.2), transparent 32%), radial-gradient(circle at 68% 76%, rgba(34,197,94,0.18), transparent 32%)" }} />
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:px-6 md:px-10">
          <div className="flex flex-col gap-3 md:w-3/4">
            <p className="text-[11px] uppercase tracking-[0.32em] text-white/70">Need more detail?</p>
            <h3 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
              Request our data processing terms or sub-processor list.
            </h3>
            <p className="text-lg leading-relaxed text-white/80">
              We share the specifics for client engagements—including locations, safeguards, and retention policies.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/contact">
              <Button theme="white" className="px-6 py-2 text-sm font-semibold text-slate-900">
                Talk to us
              </Button>
            </Link>
            <Link href="mailto:arpon.hasan@ninja-digital-innovations.com">
              <Button theme="dark" className="px-6 py-2 text-sm font-semibold">
                Email privacy team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
