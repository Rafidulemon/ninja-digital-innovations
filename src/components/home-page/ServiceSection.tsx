import Link from "next/link";
import { IconType } from "react-icons";
import {
  FiActivity,
  FiAperture,
  FiCode,
  FiMessageSquare,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";
import Button from "@/components/button/Button";

type ServiceItem = {
  title: string;
  description: string;
  icon: IconType;
};

type ServiceCard = {
  title: string;
  caption: string;
  accent: string;
  icon: IconType;
  items: ServiceItem[];
};

const services: ServiceCard[] = [
  {
    title: "Engineering Services",
    caption: "Full-stack product squads, security-first architecture, and AI-powered platforms.",
    accent: "from-[#3b82f6] via-[#6f8fc4] to-[#b6d0ff]",
    icon: FiCode,
    items: [
      {
        title: "System Development",
        description: "Web, mobile, and AI-native systems built for velocity, reliability, and scale.",
        icon: FiActivity,
      },
      {
        title: "Tech & Security Consulting",
        description: "Architecture design, cloud hardening, and AI + security automation playbooks.",
        icon: FiShield,
      },
      {
        title: "AI & Machine Learning",
        description: "Generative AI products, applied ML models, and MLOps pipelines that ship to prod.",
        icon: FiTrendingUp,
      },
    ],
  },
  {
    title: "SNS Strategy Services",
    caption: "Stories and campaigns that combine data, culture, and influencer ecosystems.",
    accent: "from-[#22c55e] via-[#4ade80] to-[#9ef0c0]",
    icon: FiMessageSquare,
    items: [
      {
        title: "SNS Marketing",
        description: "Strategy, content engines, data loops, and operational support for every channel.",
        icon: FiAperture,
      },
      {
        title: "Brand & Influencer Strategy",
        description: "Narratives, collaborations, and campaign orchestration that amplify brand equity.",
        icon: FiTrendingUp,
      },
    ],
  },
];

const ServiceSection = () => {
  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-white text-slate-900"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "linear-gradient(120deg, rgba(88,116,168,0.08), rgba(34,197,94,0.06), rgba(120,123,255,0.12))",
            backgroundSize: "220% 220%",
            animation: "gradient-shift 18s ease-in-out infinite",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(88,116,168,0.12),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(72,149,255,0.12),transparent_28%),radial-gradient(circle_at_70%_70%,rgba(34,197,94,0.08),transparent_32%),radial-gradient(circle_at_10%_80%,rgba(88,116,168,0.1),transparent_32%)] opacity-35" />
        <div
          className="absolute left-[12%] top-[18%] h-52 w-52 rounded-full bg-primary/16 blur-[110px]"
          style={{ animation: "float-soft 16s ease-in-out infinite" }}
        />
        <div
          className="absolute right-[10%] bottom-[-4%] h-64 w-64 rounded-full bg-[#30f0b6]/16 blur-[130px]"
          style={{ animation: "float-soft 14s ease-in-out infinite" }}
        />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 sm:px-6 md:gap-8 md:px-10 md:py-20">
        <div className="flex items-center gap-3 animate-[home-fade-up_0.85s_ease_both]">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
            <FiAperture className="text-primaryLight" size={20} aria-hidden />
          </span>
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">
              Our Services
            </p>
            <h2 className="font-spaceGrotesk text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
              Engineering x Social Innovation
            </h2>
          </div>
        </div>

        <p className="max-w-3xl text-base text-slate-600 animate-[home-fade-up_0.95s_ease_both_0.05s]">
          We pair senior engineering squads with social-first storytellers to ship resilient platforms, data-driven campaigns, and AI-native products. Built with security, performance, and beautiful UX at the core.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map(({ title, caption, accent, icon: Icon, items }, idx) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_25px_80px_-48px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_32px_110px_-60px_rgba(15,23,42,0.32)] animate-[home-fade-up_0.9s_ease_both]"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.06), transparent 35%), linear-gradient(120deg, rgba(255,255,255,0.08), transparent 32%), linear-gradient(90deg, rgba(255,255,255,0.03), transparent 40%)`,
                  backgroundSize: "220% 220%",
                  animation: "gradient-shift 16s ease-in-out infinite",
                }}
                aria-hidden
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-primary shadow-inner">
                    <Icon size={22} aria-hidden />
                  </span>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                    <span className="text-sm text-slate-500">{caption}</span>
                  </div>
                </div>
 
              </div>

              <div className="relative mt-6 space-y-4">
                {items.map(({ title: itemTitle, description, icon: ItemIcon }) => (
                  <div
                    key={itemTitle}
                    className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition duration-200 hover:border-primary/30 hover:bg-white"
                  >
                    <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary shadow-inner">
                      <ItemIcon size={18} aria-hidden />
                    </span>
                    <div className="flex-1">
                      <h4 className="text-[16px] font-semibold text-slate-900">{itemTitle}</h4>
                      <p className="text-sm leading-relaxed text-slate-600">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 pt-4 animate-[home-fade-up_1s_ease_both_0.12s]">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
            Explore our full capabilities
          </p>
          <Link href="/services" className="group">
            <Button theme="primary" className="px-6 py-2 text-sm font-semibold">
              View all services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
