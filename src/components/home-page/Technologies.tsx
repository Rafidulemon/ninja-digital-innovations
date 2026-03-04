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
      { name: "React", logo: "/images/technologies/react.png" },
      { name: "Next.js", logo: "/images/technologies/next.png" },
      { name: "Vue", logo: "/images/technologies/vue.png" },
      { name: "Angular", logo: "/images/technologies/angular.png" },
      { name: "HTML5", logo: "/images/technologies/html.png" },
      { name: "CSS3", logo: "/images/technologies/css.png" },
      { name: "Tailwind", logo: "/images/technologies/tailwind.png" },
      { name: "React Native", logo: "/images/technologies/rn.png" },
      { name: "Flutter", logo: "/images/technologies/flutter.png" },
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
    ],
  },
  {
    key: "cloud",
    label: "Cloud & Testing",
    accent: ["#0ea5e9", "#22d3ee"],
    items: [
      { name: "AWS", logo: "/images/technologies/aws.png" },
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
      { name: "LangChain", logo: "/images/technologies/langChain.png" },
      { name: "Vector DB", logo: "/images/technologies/vector_db.svg" },
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

        <div
          ref={navRef}
          className="relative mt-8 overflow-hidden rounded-full border border-slate-100 bg-white/90 p-2 shadow-[0_24px_70px_-52px_rgba(15,23,42,0.35)] backdrop-blur"
        >
          <div className="flex flex-wrap items-center gap-2">
            {technologyGroups.map((group) => {
              const isActive = group.key === activeKey;
              return (
                <button
                  key={group.key}
                  data-key={group.key}
                  onClick={() => setActiveKey(group.key)}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
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

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {activeGroup.items.map((tech, idx) => (
            <article
              key={tech.name}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-[0_22px_68px_-50px_rgba(15,23,42,0.32)] transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_28px_90px_-58px_rgba(15,23,42,0.34)]"
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
      </div>
    </section>
  );
};

export default Technologies;
