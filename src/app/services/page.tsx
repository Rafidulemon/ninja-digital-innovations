"use client";

import React, { type ComponentType } from "react";
import Link from "next/link";
import Button from "@/components/button/Button";
import {
  FiActivity,
  FiAperture,
  FiCheckCircle,
  FiCode,
  FiCpu,
  FiDatabase,
  FiHexagon,
  FiMessageSquare,
  FiShield,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";

type ServicePillar = {
  title: string;
  description: string;
  accent: string;
  icon: ComponentType<{ size?: number }>;
  highlights: string[];
};

type Step = {
  title: string;
  detail: string;
  icon: ComponentType<{ size?: number }>;
};

const pillars: ServicePillar[] = [
  {
    title: "Engineering Services",
    description: "Full-stack squads delivering performant, secure, and AI-native products.",
    accent: "from-[#4f8bff] via-[#6f8fc4] to-[#b6d0ff]",
    icon: FiCode,
    highlights: [
      "Product engineering for web, mobile, and platforms",
      "Security-first architecture & cloud hardening",
      "Performance tuning, SRE, and reliability playbooks",
    ],
  },
  {
    title: "AI & Machine Learning",
    description: "Applied AI that ships: generative, predictive, and MLOps in production.",
    accent: "from-[#22c55e] via-[#6ee7b7] to-[#a7f3d0]",
    icon: FiCpu,
    highlights: [
      "GenAI products and LLM-driven workflows",
      "Feature stores, data contracts, and evaluation",
      "Observability-first MLOps pipelines",
    ],
  },
  {
    title: "Security & Governance",
    description: "Secure by design—threat modeling to automated guardrails and compliance.",
    accent: "from-[#fb7185] via-[#f472b6] to-[#f9a8d4]",
    icon: FiShield,
    highlights: [
      "Architecture reviews & penetration testing",
      "Zero-trust identity, secrets, and key management",
      "Policy-as-code and automated compliance",
    ],
  },
  {
    title: "SNS Strategy & Creative",
    description: "Stories that connect data, culture, and community to grow your brand.",
    accent: "from-[#34d399] via-[#22c55e] to-[#16a34a]",
    icon: FiMessageSquare,
    highlights: [
      "Channel strategy, content engines, and ops",
      "Influencer programs and collaboration frameworks",
      "Campaign analytics, experimentation, and lift",
    ],
  },
];

const delivery: Step[] = [
  {
    title: "Discover & Align",
    detail: "Shape the problem, success metrics, and constraints with business and tech in the room.",
    icon: FiAperture,
  },
  {
    title: "Design & Prototype",
    detail: "Experience-first flows, architecture options, and rapid proof points to derisk decisions.",
    icon: FiActivity,
  },
  {
    title: "Build & Automate",
    detail: "Product increments with CI/CD, IaC, and quality gates baked in from day one.",
    icon: FiDatabase,
  },
  {
    title: "Launch & Scale",
    detail: "Observability, SLOs, incident playbooks, and growth experiments to keep improving.",
    icon: FiTrendingUp,
  },
];

const capabilityChips = [
  "Platform Engineering",
  "API Design",
  "Cloud Security",
  "Data Strategy",
  "MLOps",
  "LLM Apps",
  "Product Design",
  "Growth Experiments",
  "Content Ops",
  "Performance",
  "Observability",
];

const ServicesPage = () => {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#0c1a38] via-[#0b2c5c] to-[#0f172a] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18), transparent 30%), radial-gradient(circle at 80% 10%, rgba(120,123,255,0.22), transparent 30%), radial-gradient(circle at 70% 70%, rgba(34,197,94,0.18), transparent 32%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-45"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02), rgba(255,255,255,0.04))",
            backgroundSize: "220% 220%",
            animation: "gradient-shift 16s ease-in-out infinite",
          }}
        />
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 pb-16 pt-20 sm:px-6 md:pb-20 md:pt-24">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[12px] uppercase tracking-[0.28em] text-white/80 backdrop-blur">
              <FiHexagon size={14} aria-hidden /> Services
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              Build. Secure. Scale.
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-spaceGrotesk text-4xl font-semibold leading-tight sm:text-5xl md:text-[52px]">
              Integrated teams to design, build, and grow AI-era products.
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-white/80">
              From concept to scale, we combine engineering, security, data, and social strategy to launch resilient experiences.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/contact">
              <Button theme="primary" className="px-6 py-2 text-sm font-semibold">
                Start a project
              </Button>
            </Link>
            <Link href="/about">
              <Button theme="white" className="px-6 py-2 text-sm font-semibold text-slate-900">
                Meet the team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative isolate -mt-12 bg-white pb-16 pt-6 sm:pt-10 md:pb-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map(({ title, description, accent, icon: Icon, highlights }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_25px_80px_-48px_rgba(15,23,42,0.28)] transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_32px_110px_-60px_rgba(15,23,42,0.32)]"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, rgba(255,255,255,0.08), transparent 35%), linear-gradient(120deg, rgba(255,255,255,0.08), transparent 32%), linear-gradient(90deg, rgba(255,255,255,0.05), transparent 40%)",
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
                      <h3 className="text-xl font-semibold text-slate-900 transition-colors duration-200 group-hover:text-primary">
                        {title}
                      </h3>
                      <p className="text-sm text-slate-500 transition-colors duration-200 group-hover:text-slate-600">
                        {description}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`hidden rounded-full px-3 py-1 text-[12px] font-semibold text-white shadow-sm md:inline-flex bg-gradient-to-r ${accent}`}
                  >
                    <span className="drop-shadow-sm">Core</span>
                  </div>
                </div>

                <div className="relative mt-6 space-y-3">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition duration-200 hover:border-primary/30 hover:bg-white"
                    >
                      <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary shadow-inner">
                        <FiCheckCircle size={16} aria-hidden />
                      </span>
                      <p className="text-sm text-slate-700 transition-colors duration-200 group-hover:text-slate-800">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="relative bg-slate-50 py-16 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 sm:px-6 md:px-10">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">How we ship</p>
              <h2 className="font-spaceGrotesk text-3xl font-semibold text-slate-900 md:text-4xl">
                A delivery model built for momentum and safety.
              </h2>
              <p className="max-w-2xl text-base text-slate-600">
                Cross-functional squads, measurable gates, and security woven into every sprint so you can launch with confidence.
              </p>
            </div>
            <Link href="/contact" className="hidden md:block">
              <Button theme="primary" className="px-5 py-2 text-sm font-semibold">
                Book a discovery call
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {delivery.map(({ title, detail, icon: Icon }, idx) => (
              <div
                key={title}
                className="group relative flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.35)]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon size={18} aria-hidden />
                  </span>
                  <span className="text-xs font-semibold text-slate-400">0{idx + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-primary">
                  {title}
                </h3>
                <p className="text-sm text-slate-600 transition-colors duration-200 group-hover:text-slate-700">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative bg-white py-16 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">
              Capabilities
            </p>
            <h2 className="font-spaceGrotesk text-3xl font-semibold text-slate-900 md:text-4xl">
              Modular services you can mix and match.
            </h2>
            <p className="max-w-3xl text-base text-slate-600">
              Build an engagement around your goals—augment a team, run a sprint, or own a product line with us.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {capabilityChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition duration-200 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Link href="/contact">
              <Button theme="primary" className="px-6 py-2 text-sm font-semibold">
                Build your stack
              </Button>
            </Link>
            <Link href="/career">
              <Button theme="secondary" className="px-6 py-2 text-sm font-semibold">
                Join the crew
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
