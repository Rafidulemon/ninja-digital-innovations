import Link from "next/link";
import Button from "@/components/button/Button";

const sections = [
  {
    heading: "1. Acceptance of terms",
    points: [
      "By accessing our sites, products, or services you agree to these Terms of Service (\"Terms\").",
      "If you are using the services on behalf of an organization, you confirm you have authority to bind that organization.",
    ],
  },
  {
    heading: "2. Services",
    points: [
      "We provide software design, engineering, AI, security, and consulting services as described in each statement of work (SOW).",
      "Availability, delivery timelines, and success criteria are defined in the applicable SOW or order form.",
    ],
  },
  {
    heading: "3. Accounts & access",
    points: [
      "You are responsible for safeguarding credentials and all activity under your accounts.",
      "You must promptly notify us of any unauthorized access or security incident.",
    ],
  },
  {
    heading: "4. Fees & payments",
    points: [
      "Fees, billing frequency, and payment terms are set in the SOW or order form.",
      "Late payments may incur finance charges at the maximum rate permitted by law.",
    ],
  },
  {
    heading: "5. Intellectual property",
    points: [
      "Pre-existing IP of each party remains that party’s property.",
      "Custom deliverables are assigned to you upon full payment, unless otherwise stated in the SOW.",
      "We retain a perpetual right to use know-how, generalized skills, and non-confidential learnings.",
    ],
  },
  {
    heading: "6. Confidentiality",
    points: [
      "Each party will protect the other’s Confidential Information with at least the same care it uses for its own.",
      "Confidential Information excludes information that is public, already known, independently developed, or received lawfully from a third party.",
    ],
  },
  {
    heading: "7. Data protection",
    points: [
      "We process personal data as a processor on your documented instructions.",
      "Security, sub-processor list, and data handling are further described in our Privacy and DPA (available on request).",
    ],
  },
  {
    heading: "8. Security",
    points: [
      "We use encryption in transit, access controls, logging, and environment separation for client work.",
      "You are responsible for securing your own systems and third-party accounts used with the services.",
    ],
  },
  {
    heading: "9. Warranties & disclaimers",
    points: [
      "We warrant that services will be provided with reasonable skill and care.",
      "Except as expressly stated, services are provided “as is” without other warranties.",
    ],
  },
  {
    heading: "10. Limitation of liability",
    points: [
      "To the maximum extent permitted by law, neither party is liable for indirect, incidental, or consequential damages.",
      "Each party’s aggregate liability under these Terms is limited to the fees paid or payable for the services giving rise to the claim in the 12 months preceding the claim.",
    ],
  },
  {
    heading: "11. Indemnity",
    points: [
      "You will defend and indemnify us against third-party claims arising from your misuse of the services or violation of these Terms.",
    ],
  },
  {
    heading: "12. Term & termination",
    points: [
      "These Terms apply for as long as you use our services or until terminated per your SOW.",
      "Either party may terminate for material breach after 30 days’ notice if not cured.",
    ],
  },
  {
    heading: "13. Governing law & venue",
    points: [
      "These Terms are governed by the laws of Bangladesh, without regard to conflict of law principles.",
      "Venue for disputes is the courts located in Dhaka, Bangladesh, unless the SOW specifies another jurisdiction.",
    ],
  },
  {
    heading: "14. Updates",
    points: [
      "We may update these Terms from time to time. Material changes will be notified via the site or email.",
    ],
  },
];

const TermsPage = () => {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section
        id="terms-hero"
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
              Terms of Service
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-white/70">Last updated: March 2026</span>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="font-spaceGrotesk text-4xl font-semibold leading-tight sm:text-5xl md:text-[52px]">
              Terms governing your use of Ninja Digital Innovation services.
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-white/80">
              The essentials on eligibility, data protection, ownership, and how we partner to deliver secure, reliable products.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/contact">
              <Button theme="white" className="px-6 py-2 text-sm font-semibold text-slate-900">
                Discuss an engagement
              </Button>
            </Link>
            <Link href="/privacy">
              <Button theme="dark" className="px-6 py-2 text-sm font-semibold">
                View privacy
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Terms list */}
      <section className="relative -mt-12 bg-white pb-16 pt-6 sm:pt-10 md:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(88,116,168,0.08),transparent_28%),radial-gradient(circle_at_82%_14%,rgba(88,144,168,0.08),transparent_30%),radial-gradient(circle_at_70%_74%,rgba(88,116,168,0.08),transparent_28%)]" aria-hidden />
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <div className="grid gap-5 md:grid-cols-2">
            {sections.map((section) => (
              <article
                key={section.heading}
                className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_22px_70px_-56px_rgba(15,23,42,0.32)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[#0ea5e9]/7" aria-hidden />
                <div className="relative flex flex-col gap-3">
                  <h2 className="text-lg font-semibold text-slate-900">{section.heading}</h2>
                  <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
                    {section.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
