import { FiCloud, FiCompass, FiCpu } from "react-icons/fi";

const ventures = [
  {
    title: "Local-market playbooks",
    detail: "Localized strategies for reputation defense and brand lifting tailored to South Asian digital ecosystems.",
    icon: FiCompass,
  },
  {
    title: "Product & platform labs",
    detail: "Prototyping AI-enabled monitoring, sentiment, and trust tools built with Dhaka talent.",
    icon: FiCpu,
  },
  {
    title: "Partnership network",
    detail: "Collaboration with media, legal, and platform partners to respond fast across channels.",
    icon: FiCloud,
  },
];

const presence = [
  { title: "Japan", detail: "Brand Cloud headquarters; consulting DNA and playbooks." },
  { title: "Bangladesh", detail: "Ninja Digital Innovations — physical hub for delivery and growth." },
];

const VenturesPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-24 sm:px-6 md:px-10 md:pb-20 md:pt-28">
        <div className="flex flex-col gap-3 md:w-2/3">
          <p className="text-xs uppercase tracking-[0.22em] text-primary">Company / Ventures</p>
          <h1 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
            Expanding Brand Cloud&apos;s reach through Bangladesh.
          </h1>
          <p className="text-lg leading-relaxed text-slate-700">
            Ninja Digital Innovations is the vehicle for new products, partnerships, and labs that blend Brand Cloud&apos;s
            consulting rigor with Bangladesh&apos;s engineering talent.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {ventures.map(({ title, detail, icon: Icon }) => (
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

        <div className="mt-10 grid gap-4 rounded-3xl border border-slate-100 bg-gradient-to-r from-[#f8fafc] via-white to-[#f0f5ff] p-6 shadow-[0_22px_70px_-52px_rgba(15,23,42,0.28)] sm:grid-cols-3">
          {presence.map(({ title, detail }) => (
            <div key={title} className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{title}</p>
              <p className="text-base font-semibold text-slate-900">{detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VenturesPage;
