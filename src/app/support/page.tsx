import Link from "next/link";
import { FiClock, FiMail, FiMessageSquare, FiPhone, FiShield, FiZap } from "react-icons/fi";
import Button from "@/components/button/Button";

const channels = [
  { icon: FiMail, title: "Email", detail: "arpon.hasan@ninja-digital-innovations.com", note: "Replies within business hours" },
  { icon: FiMessageSquare, title: "Project channel", detail: "Slack/Teams channel for active engagements", note: "Best for day-to-day collaboration" },
  { icon: FiPhone, title: "Phone / VC", detail: "+8801303241326", note: "By appointment or incident bridge" },
];

const response = [
  { tier: "Standard", time: "< 24h", coverage: "Business hours, Mon–Fri", scope: "General questions, status, minor issues" },
  { tier: "Priority", time: "< 8h", coverage: "Extended hours", scope: "Important bugs, production risks" },
  { tier: "Incident (P1)", time: "Immediate", coverage: "24/7 bridge when engaged", scope: "Production outage, data loss, security incident" },
];

const faqs = [
  { q: "How do I raise a ticket?", a: "Email arpon.hasan@ninja-digital-innovations.com with a clear subject, impact, repro steps, and links. Active clients can post in the shared Slack/Teams channel." },
  { q: "What info speeds up resolution?", a: "Environment, timestamp, affected users, request IDs/log snippets, screenshots, and the expected vs. actual behavior." },
  { q: "Do you provide SLAs?", a: "Yes. SLAs are defined per SOW. The tiers above are defaults when an SLA isn’t specified." },
  { q: "How are security incidents handled?", a: "Contact us immediately via email and Slack; for P1 we open an incident bridge, start logging preservation, and share updates until closure." },
];

const SupportPage = () => {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section
        id="support-hero"
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
              Support
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-white/70">We respond fast</span>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="font-spaceGrotesk text-4xl font-semibold leading-tight sm:text-5xl md:text-[52px]">
              Need help? The NDI team is one message away.
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-white/80">
              Use email, Slack/Teams, or phone. We triage quickly, open bridges for incidents, and keep stakeholders in the loop.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="mailto:arpon.hasan@ninja-digital-innovations.com">
              <Button theme="white" className="px-6 py-2 text-sm font-semibold text-slate-900">
                Email support
              </Button>
            </Link>
            <Link href="/contact">
              <Button theme="dark" className="px-6 py-2 text-sm font-semibold">
                Contact form
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="relative -mt-12 bg-white pb-16 pt-6 sm:pt-10 md:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(88,116,168,0.08),transparent_28%),radial-gradient(circle_at_82%_14%,rgba(88,144,168,0.08),transparent_30%),radial-gradient(circle_at_70%_74%,rgba(88,116,168,0.08),transparent_28%)]" aria-hidden />
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-6 md:px-10">
          <div className="flex flex-col gap-2 md:w-2/3">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Channels</p>
            <h2 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
              Choose the fastest path for your team.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {channels.map(({ icon: Icon, title, detail, note }) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_22px_70px_-56px_rgba(15,23,42,0.32)]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={18} aria-hidden />
                  </span>
                  <div className="flex flex-col">
                    <p className="text-base font-semibold text-slate-900">{title}</p>
                    <p className="text-sm text-slate-600">{detail}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-slate-500">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response times */}
      <section className="relative bg-slate-50 py-14 sm:py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(88,116,168,0.08),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(14,165,233,0.08),transparent_30%),radial-gradient(circle_at_70%_76%,rgba(88,116,168,0.08),transparent_30%)]" aria-hidden />
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-6 md:px-10">
          <div className="flex flex-col gap-2 md:w-2/3">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Response targets</p>
            <h2 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
              Fast, predictable support—incident ready.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {response.map((r) => (
              <div
                key={r.tier}
                className="rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_22px_70px_-56px_rgba(15,23,42,0.32)]"
              >
                <div className="flex items-center justify-between">
                  <div className="text-base font-semibold text-slate-900">{r.tier}</div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    <FiClock size={12} aria-hidden /> {r.time}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{r.coverage}</p>
                <p className="mt-2 text-sm font-semibold text-slate-800">{r.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & escalation */}
      <section className="relative bg-white pb-16 pt-6 sm:pt-10 md:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(88,116,168,0.08),transparent_28%),radial-gradient(circle_at_82%_14%,rgba(88,144,168,0.08),transparent_30%),radial-gradient(circle_at_70%_74%,rgba(88,116,168,0.08),transparent_28%)]" aria-hidden />
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-6 md:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_22px_70px_-56px_rgba(15,23,42,0.32)]">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <FiShield size={18} aria-hidden />
                </span>
                <div>
                  <p className="text-base font-semibold text-slate-900">Security incidents</p>
                  <p className="text-sm text-slate-600">How we respond</p>
                </div>
              </div>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700">
                <li>• Notify us via email and Slack/Teams channel.</li>
                <li>• We open a P1 bridge, assign an incident lead, and preserve logs.</li>
                <li>• Updates continue until mitigation, recovery, and post-incident review.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_22px_70px_-56px_rgba(15,23,42,0.32)]">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <FiZap size={18} aria-hidden />
                </span>
                <div>
                  <p className="text-base font-semibold text-slate-900">Escalation path</p>
                  <p className="text-sm text-slate-600">Who gets looped</p>
                </div>
              </div>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700">
                <li>• Primary: project lead / engagement manager.</li>
                <li>• Secondary: engineering manager or tech lead.</li>
                <li>• Tertiary: security lead for incidents or data concerns.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#0c1a38] via-[#0b2c5c] to-[#0f172a] py-14 text-white sm:py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-45" aria-hidden style={{ background: "radial-gradient(circle at 24% 22%, rgba(255,255,255,0.18), transparent 32%), radial-gradient(circle at 82% 18%, rgba(120,123,255,0.2), transparent 32%), radial-gradient(circle at 68% 76%, rgba(34,197,94,0.18), transparent 32%)" }} />
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:px-6 md:px-10">
          <div className="flex flex-col gap-3 md:w-3/4">
            <p className="text-[11px] uppercase tracking-[0.32em] text-white/70">We’re here to help</p>
            <h3 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
              Let’s resolve your issue or plan the next release.
            </h3>
            <p className="text-lg leading-relaxed text-white/80">
              Share context and urgency—we’ll respond quickly and keep you updated until it’s done.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/contact">
              <Button theme="white" className="px-6 py-2 text-sm font-semibold text-slate-900">
                Open a request
              </Button>
            </Link>
            <Link href="mailto:arpon.hasan@ninja-digital-innovations.com">
              <Button theme="dark" className="px-6 py-2 text-sm font-semibold">
                Email support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
