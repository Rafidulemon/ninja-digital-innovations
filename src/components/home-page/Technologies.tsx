"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type TechnologyItem = {
  name: string;
  logo: string;
};

type TechnologyGroup = {
  key: string;
  label: string;
  accent: [string, string];
  items: TechnologyItem[];
};

const technologyGroups: TechnologyGroup[] = [
  {
    key: "frontend",
    label: "Frontend",
    accent: ["#38bdf8", "#6366f1"],
    items: [
      { name: "JavaScript", logo: "/images/technologies/javascript.png" },
      { name: "TypeScript", logo: "/images/technologies/typescript.webp" },
      { name: "React", logo: "/images/technologies/react.png" },
      { name: "Next.js", logo: "/images/technologies/next.png" },
      { name: "Vite", logo: "/images/technologies/vite.webp" },
      { name: "Vue", logo: "/images/technologies/vue.png" },
      { name: "Angular", logo: "/images/technologies/angular.png" },
      { name: "HTML5", logo: "/images/technologies/html.png" },
      { name: "CSS3", logo: "/images/technologies/css.png" },
      { name: "Tailwind", logo: "/images/technologies/tailwind.png" },
      { name: "Redux", logo: "/images/technologies/redux.png" },
      { name: "React Native", logo: "/images/technologies/rn.png" },
      { name: "Flutter", logo: "/images/technologies/flutter.png" },
      { name: "Dart", logo: "/images/technologies/dart.png" },
      { name: "Android", logo: "/images/technologies/android.png" },
    ],
  },
  {
    key: "backend",
    label: "Backend",
    accent: ["#22c55e", "#10b981"],
    items: [
      { name: "Node.js", logo: "/images/technologies/node.png" },
      { name: "Python", logo: "/images/technologies/python.png" },
      { name: "Django", logo: "/images/technologies/django.png" },
      { name: "FastAPI", logo: "/images/technologies/fast.png" },
      { name: "Java", logo: "/images/technologies/java.png" },
      { name: "Spring Boot", logo: "/images/technologies/spring.png" },
      { name: "tRPC", logo: "/images/technologies/trpc.png" },
      { name: "Prisma", logo: "/images/technologies/prisma.png" },
    ],
  },
  {
    key: "databases",
    label: "Databases",
    accent: ["#f97316", "#fb7185"],
    items: [
      { name: "PostgreSQL", logo: "/images/technologies/pg.png" },
      { name: "MySQL", logo: "/images/technologies/mysql.png" },
      { name: "SQL", logo: "/images/technologies/sql.png" },
      { name: "Redis", logo: "/images/technologies/redis.png" },
      { name: "Vector DB", logo: "/images/technologies/vector_db.svg" },
    ],
  },
  {
    key: "cms",
    label: "CMS",
    accent: ["#8b5cf6", "#6366f1"],
    items: [
      { name: "WordPress", logo: "/images/technologies/wp.png" },
      { name: "Joomla", logo: "/images/technologies/joomla.png" },
      { name: "microCMS", logo: "/images/technologies/micro.png" },
    ],
  },
  {
    key: "cloud",
    label: "Cloud & Testing",
    accent: ["#0ea5e9", "#22d3ee"],
    items: [
      { name: "AWS", logo: "/images/technologies/aws.png" },
      { name: "Cloudflare", logo: "/images/technologies/cloudflare.png" },
      { name: "Firebase", logo: "/images/technologies/firebase.png" },
      { name: "Vercel", logo: "/images/technologies/vercel.png" },
      { name: "Cypress", logo: "/images/technologies/cy.png" },
      { name: "Google Analytics", logo: "/images/technologies/google_analytics.png" },
    ],
  },
  {
    key: "devops",
    label: "DevOps",
    accent: ["#f59e0b", "#f97316"],
    items: [
      { name: "Docker", logo: "/images/technologies/Docker.png" },
      { name: "JWT / Auth", logo: "/images/technologies/jwt.png" },
      { name: "Stripe", logo: "/images/technologies/stripe.png" },
      { name: "Vercel", logo: "/images/technologies/vercel.png" },
      { name: "AWS", logo: "/images/technologies/aws.png" },
    ],
  },
  {
    key: "ai",
    label: "AI & Data",
    accent: ["#14b8a6", "#06b6d4"],
    items: [
      { name: "OpenAI", logo: "/images/technologies/openAI.png" },
      { name: "Anthropic", logo: "/images/technologies/anthropic.webp" },
      { name: "Gemini", logo: "/images/technologies/gemini.png" },
      { name: "LangChain", logo: "/images/technologies/langChain.png" },
      { name: "Vector DB", logo: "/images/technologies/vector_db.svg" },
      { name: "Qdrant", logo: "/images/technologies/qdrant.png" },
      { name: "Analytics", logo: "/images/technologies/google_analytics.png" },
    ],
  },
];

const Technologies = () => {
  const [activeKey, setActiveKey] = useState<string>(technologyGroups[0].key);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);

  const activeGroup = technologyGroups.find((group) => group.key === activeKey) ?? technologyGroups[0];

  useEffect(() => {
    const updateIndicator = () => {
      const nav = navRef.current;
      if (!nav) return;
      const activeButton = nav.querySelector<HTMLButtonElement>(`button[data-key="${activeKey}"]`);
      if (!activeButton) return;

      setIndicator({ left: activeButton.offsetLeft, width: activeButton.offsetWidth });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeKey]);

  return (
    <section
      id="technologies"
      className="relative isolate overflow-hidden bg-white py-16 text-slate-900 sm:py-20 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 12% 20%, rgba(88,116,168,0.12), transparent 32%), radial-gradient(circle at 82% 15%, rgba(14,165,233,0.12), transparent 30%), radial-gradient(circle at 68% 75%, rgba(52,211,153,0.12), transparent 32%), radial-gradient(circle at 8% 82%, rgba(99,102,241,0.12), transparent 28%)",
          }}
        />
        <div
          className="absolute left-[-6%] top-[12%] h-52 w-52 rounded-full bg-primary/12 blur-[120px]"
          style={{ animation: "float-soft 18s ease-in-out infinite" }}
        />
        <div
          className="absolute right-[-8%] bottom-[-6%] h-64 w-64 rounded-full bg-[#5fe7c2]/18 blur-[140px]"
          style={{ animation: "float-soft 16s ease-in-out infinite", animationDelay: "1.5s" }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
        <div className="flex flex-col gap-3 md:w-3/4">
          <p className="text-[11px] uppercase tracking-[0.24em] text-primary">Technologies</p>
          <h2 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
            Modern stacks we design, build, and operate.
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            Frameworks, databases, clouds, and AI platforms our teams use to ship production software across web, mobile, and data products.
          </p>
        </div>

        {/* Desktop tabs */}
        <div
          ref={navRef}
          className="relative mt-8 hidden overflow-hidden p-2 backdrop-blur md:block"
        >
          <div className="flex flex-wrap items-center gap-2">
            {technologyGroups.map((group) => {
              const isActive = group.key === activeKey;
              return (
                <button
                  key={group.key}
                  data-key={group.key}
                  onClick={() => setActiveKey(group.key)}
                  className={`relative cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                    isActive ? "text-slate-900" : "text-slate-500 hover:text-slate-800"
                  }`}
                  aria-pressed={isActive}
                >
                  {group.label}
                </button>
              );
            })}
          </div>

          <span
            className="pointer-events-none absolute bottom-1 left-0 h-[3px] rounded-full transition-all duration-300 ease-out"
            style={{
              width: `${indicator.width}px`,
              transform: `translateX(${indicator.left}px)`,
              backgroundImage: `linear-gradient(90deg, ${activeGroup.accent[0]}, ${activeGroup.accent[1]})`,
              boxShadow: "0 10px 38px -20px rgba(88,116,168,0.5)",
            }}
          />
        </div>

        {/* Mobile carousel */}
        <div className="mt-8 md:hidden">
          <div className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3">
            {technologyGroups.map((group) => {
              const isActive = group.key === activeKey;
              return (
                <button
                  key={group.key}
                  onClick={() => setActiveKey(group.key)}
                  className="group relative min-w-[200px] flex-1 snap-start overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-[0_14px_40px_-22px_rgba(15,23,42,0.35)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.99]"
                  aria-pressed={isActive}
                >
                  <div
                    className="absolute inset-0 opacity-80"
                    style={{
                      background: `linear-gradient(120deg, ${group.accent[0]}22, ${group.accent[1]}15)`,
                    }}
                    aria-hidden
                  />
                  <div className="relative flex items-center justify-between px-4 py-3">
                    <div className="flex flex-col gap-1">
                      <span className="text-[11px] uppercase tracking-[0.26em] text-slate-500">Stack</span>
                      <span className="text-base font-semibold text-slate-900">{group.label}</span>
                    </div>
                    <span
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold ${
                        isActive
                          ? "bg-white text-primary shadow-[0_10px_30px_rgba(15,23,42,0.16)]"
                          : "bg-slate-900 text-white/80"
                      }`}
                      style={{
                        background: isActive
                          ? `linear-gradient(135deg, ${group.accent[0]}, ${group.accent[1]})`
                          : undefined,
                      }}
                    >
                      {group.items.length}
                    </span>
                  </div>
                  <div className="relative flex items-center gap-2 px-4 pb-3">
                    {group.items.slice(0, 4).map((tech) => (
                      <div
                        key={tech.name}
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 ring-1 ring-slate-200 shadow-inner"
                      >
                        <Image
                          src={tech.logo}
                          alt={tech.name}
                          width={40}
                          height={40}
                          className="h-8 w-8 object-contain"
                        />
                      </div>
                    ))}
                    {group.items.length > 4 ? (
                      <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-semibold text-white">
                        +{group.items.length - 4} more
                      </span>
                    ) : null}
                  </div>
                  {isActive ? (
                    <div
                      className="absolute inset-x-0 bottom-0 h-[3px]"
                      style={{
                        background: `linear-gradient(90deg, ${group.accent[0]}, ${group.accent[1]})`,
                      }}
                      aria-hidden
                    />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="mt-10 hidden gap-5 sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {activeGroup.items.map((tech, idx) => (
            <article
              key={tech.name}
              className="group relative overflow-hidden p-4 transition duration-300 hover:-translate-y-1 hover:border-primary/30"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${activeGroup.accent[0]}1a, transparent 30%), linear-gradient(120deg, ${activeGroup.accent[1]}1f, transparent 26%)`,
                  backgroundSize: "200% 200%",
                  animation: "gradient-shift 14s ease-in-out infinite",
                }}
                aria-hidden
              />

              <div className="relative flex flex-col items-center gap-3">
                <div
                  className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50/90 ring-1 ring-slate-200/80 shadow-inner transition duration-300 group-hover:-translate-y-0.5 group-hover:ring-primary/50"
                  style={{ animation: "float-soft 14s ease-in-out infinite", animationDelay: `${(idx % 4) * 0.4}s` }}
                >
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={64}
                    height={64}
                    className="h-12 w-12 object-contain transition duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_14px_26px_-10px_rgba(88,116,168,0.45)]"
                    priority={idx < 4}
                  />
                </div>
                <p className="text-sm font-semibold text-slate-800">{tech.name}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 md:hidden">
          {activeGroup.items.map((tech) => (
            <div
              key={tech.name}
              className="relative flex items-center gap-3 overflow-hidden rounded-2xl border border-slate-100 bg-white px-3 py-3 shadow-[0_14px_32px_-24px_rgba(15,23,42,0.32)]"
            >
              <span
                className="absolute left-0 top-0 h-full w-1"
                style={{
                  background: `linear-gradient(180deg, ${activeGroup.accent[0]}, ${activeGroup.accent[1]})`,
                }}
                aria-hidden
              />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="h-9 w-9 object-contain"
                />
              </div>
              <p className="text-sm font-semibold text-slate-800">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
