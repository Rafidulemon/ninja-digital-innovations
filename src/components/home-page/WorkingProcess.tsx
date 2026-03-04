"use client";

import type { ComponentType } from "react";
import {
  FiActivity,
  FiAperture,
  FiCheckCircle,
  FiCompass,
  FiMonitor,
} from "react-icons/fi";

type Step = {
  title: string;
  description: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  colors: [string, string];
  outputs: string[];
};

const steps: Step[] = [
  {
    title: "Discover & Align",
    description:
      "Stakeholder interviews, product vision, success metrics, and risk mapping to lock scope with clarity.",
    icon: FiCompass,
    colors: ["#38bdf8", "#6366f1"],
    outputs: ["Vision brief", "Risk map", "Success metrics"],
  },
  {
    title: "Design & Prototype",
    description:
      "Rapid UX flows, clickable prototypes, and design systems tested with real users for fast signal.",
    icon: FiAperture,
    colors: ["#22d3ee", "#34d399"],
    outputs: ["User flows", "Clickable prototype", "Design tokens"],
  },
  {
    title: "Build in Sprints",
    description:
      "Full-stack delivery with secure CI/CD, code reviews, and QA baked into every increment.",
    icon: FiActivity,
    colors: ["#fbbf24", "#f97316"],
    outputs: ["Sprint demos", "Story points", "CI/CD pipelines"],
  },
  {
    title: "Test & Harden",
    description:
      "Performance, security, and reliability checks—load tests, pen-test fixes, and observability setup.",
    icon: FiMonitor,
    colors: ["#a855f7", "#6366f1"],
    outputs: ["Perf reports", "Pen-test fixes", "Dashboards & alerts"],
  },
  {
    title: "Launch & Improve",
    description:
      "Go-live playbooks, analytics dashboards, and continuous optimizations tied to your KPIs.",
    icon: FiCheckCircle,
    colors: ["#34d399", "#22c55e"],
    outputs: ["Launch runbook", "Analytics board", "Growth backlog"],
  },
];

const WorkingProcess = () => {
  return (
    <section
      id="process"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#f9fbff] via-white to-[#f7fbff] py-16 text-slate-900 sm:py-20 md:py-24"
    >
      {/* soft background atmospherics */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(circle at 14% 18%, rgba(88,116,168,0.12), transparent 28%), radial-gradient(circle at 82% 14%, rgba(14,165,233,0.12), transparent 28%), radial-gradient(circle at 68% 80%, rgba(52,211,153,0.12), transparent 30%), radial-gradient(circle at 6% 82%, rgba(99,102,241,0.12), transparent 28%)",
          }}
        />
        {/* futuristic isometric grid + noise */}
        <div
          className="absolute inset-0 opacity-45 mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop offset='0%' stop-color='%235874a8' stop-opacity='0.14'/%3E%3Cstop offset='100%' stop-color='%2322d3ee' stop-opacity='0.08'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='none' stroke='url(%23g)' stroke-width='1.2'%3E%3Cpath d='M0 110h220M110 0v220M-110 110l220 110M-110 110l220-110M110 220L330 110M110 220L330 330'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "320px 320px",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(125deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 32%, rgba(88,116,168,0.06) 48%, rgba(14,165,233,0.05) 62%, rgba(255,255,255,0.02) 100%)",
          }}
        />
        {/* grain for depth */}
        <div
          className="absolute inset-0 opacity-[0.18] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.32'/%3E%3C/svg%3E\")",
          }}
        />
        <div
          className="absolute left-[8%] top-[16%] h-48 w-48 rounded-full bg-primary/14 blur-[120px]"
          style={{ animation: "float-soft 18s ease-in-out infinite" }}
        />
        <div
          className="absolute right-[-6%] bottom-[-8%] h-64 w-64 rounded-full bg-[#5fe7c2]/18 blur-[140px]"
          style={{ animation: "float-soft 16s ease-in-out infinite", animationDelay: "1.3s" }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
        <div className="flex flex-col gap-3 md:w-2/3">
          <p className="text-[11px] uppercase tracking-[0.24em] text-primary">Our Working Process</p>
          <h2 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
            A delivery rhythm that keeps strategy, design, and engineering in sync.
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            Borrowed from our playbooks on data, AI, and product launches—built to stay transparent, measurable, and fast.
          </p>
        </div>

        <div className="relative mt-14">
          {/* central connector line for desktop */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary/40 via-primary/10 to-transparent md:block"
            aria-hidden
          >
            <div className="h-full w-full bg-[linear-gradient(180deg,rgba(88,116,168,0.65),rgba(88,116,168,0.15),transparent)] bg-[length:2px_240px] animate-[connector-flow-vert_12s_linear_infinite]" />
          </div>

          <div className="space-y-6 md:space-y-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={step.title}
                  className="grid gap-4 md:grid-cols-12 md:items-center"
                  style={{ animation: "home-fade-up 0.9s ease both", animationDelay: `${idx * 0.06}s` }}
                >
                  <div
                    className={`order-2 md:col-span-5 ${isLeft ? "md:order-1 md:pr-6" : "md:order-2 md:pl-6"}`}
                  >
                    <article
                      className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-[0_30px_90px_-60px_rgba(15,23,42,0.42)] transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_38px_120px_-72px_rgba(15,23,42,0.36)]"
                    >
                      <div
                        className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                        style={{
                          backgroundImage: `linear-gradient(135deg, ${step.colors[0]}1c, ${step.colors[1]}1f), linear-gradient(120deg, rgba(255,255,255,0.94), transparent 32%)`,
                          backgroundSize: "200% 200%",
                          animation: "gradient-shift 16s ease-in-out infinite",
                        }}
                        aria-hidden
                      />

                      <div className="relative flex items-start gap-3">
                        <div className="relative">
                          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-primary ring-1 ring-slate-200 shadow-inner">
                            <Icon size={20} aria-hidden />
                          </span>
                          <span className="pointer-events-none absolute inset-0 rounded-2xl border border-primary/30 opacity-60 [animation:pulse-ring_2.6s_ease-in-out_infinite]" />
                        </div>
                        <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        <span>Step {idx + 1}</span>
                        <span
                          className="inline-block h-[3px] w-10 rounded-full"
                          style={{
                            backgroundImage: `linear-gradient(90deg, ${step.colors[0]}, ${step.colors[1]})`,
                          }}
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
                    </div>
                  </div>

                      <div className="relative mt-4 flex flex-wrap gap-2">
                        {step.outputs.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[12px] font-medium text-slate-700 shadow-sm backdrop-blur transition duration-200 group-hover:border-primary/30"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </article>
                  </div>

                  {/* connector + dot */}
                  <div className="relative order-1 flex items-center justify-center md:order-2 md:col-span-2">
                    <div
                      className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_18px_40px_-20px_rgba(15,23,42,0.35)] ring-2 ring-white/90"
                    >
                      <span
                        className="absolute inset-0 rounded-full blur-[18px]"
                        style={{
                          background: `linear-gradient(135deg, ${step.colors[0]}, ${step.colors[1]})`,
                          opacity: 0.35,
                        }}
                        aria-hidden
                      />
                      <span
                        className="relative h-3 w-3 rounded-full"
                        style={{
                          background: `linear-gradient(135deg, ${step.colors[0]}, ${step.colors[1]})`,
                        }}
                      />
                    </div>
                  </div>

                  <div
                    className={`order-3 md:col-span-5 ${isLeft ? "md:order-3 md:pl-6" : "md:order-1 md:pr-6"}`}
                  >
                    <div className="hidden h-[1px] w-full rounded-full bg-gradient-to-r from-transparent via-slate-200 to-transparent md:block" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-ring {
          0% {
            transform: scale(0.9);
            opacity: 0.35;
          }
          50% {
            transform: scale(1.04);
            opacity: 0.9;
          }
          100% {
            transform: scale(0.9);
            opacity: 0.35;
          }
        }
        @keyframes connector-flow-vert {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 240px;
          }
        }
      `}</style>
    </section>
  );
};

export default WorkingProcess;
