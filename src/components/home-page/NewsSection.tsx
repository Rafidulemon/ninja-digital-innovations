"use client"
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { FiClock, FiTag } from "react-icons/fi";
import Button from "@/components/button/Button";
import newsData from "@/app/data/news.json";

type NewsItem = {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  link: string;
};

const news = newsData as NewsItem[];

const categoryAccent: Record<string, { from: string; to: string; pill: string }> = {
  Holiday: { from: "#f97316", to: "#fb7185", pill: "bg-gradient-to-r from-[#f97316]/90 to-[#fb7185]/90 text-white" },
  "Job Vacancy": { from: "#0ea5e9", to: "#6366f1", pill: "bg-gradient-to-r from-[#0ea5e9]/90 to-[#6366f1]/90 text-white" },
  "Product Updates / Releases": { from: "#22c55e", to: "#14b8a6", pill: "bg-gradient-to-r from-[#22c55e]/90 to-[#14b8a6]/90 text-white" },
  "Technology & Engineering": { from: "#8b5cf6", to: "#22d3ee", pill: "bg-gradient-to-r from-[#8b5cf6]/90 to-[#22d3ee]/90 text-white" },
};

const NewsSection = () => {
  const [index, setIndex] = useState(0);
  const ordered = useMemo(
    () => [...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    []
  );

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % ordered.length);
    }, 4800);
    return () => clearInterval(t);
  }, [ordered.length]);

  const active = ordered[index];
  const next = ordered[(index + 1) % ordered.length];
  const accent = categoryAccent[active.category] ?? { from: "#5874a8", to: "#22d3ee", pill: "bg-primary/10 text-primary" };

  return (
    <section
      id="news"
      className="relative isolate overflow-hidden bg-slate-50 py-16 text-slate-900 sm:py-20 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70" aria-hidden
           style={{
             background:
               "radial-gradient(circle at 18% 22%, rgba(88,116,168,0.08), transparent 32%), radial-gradient(circle at 82% 18%, rgba(14,165,233,0.08), transparent 30%), radial-gradient(circle at 70% 76%, rgba(88,116,168,0.08), transparent 30%)",
           }}
      />

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 sm:px-6 md:px-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-[11px] uppercase tracking-[0.24em] text-primary">News</p>
            <h2 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
              Updates from the NDI crew.
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Product launches, hiring updates, holidays, and engineering notes—on a quick swipe carousel.
            </p>
          </div>
          <Link href="/news">
            <Button theme="dark" className="px-5 py-2 text-sm font-semibold">
              See news
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          {/* Active card */}
          <div
            className="relative overflow-hidden rounded-3xl border border-transparent bg-gradient-to-br p-[1px] shadow-[0_24px_80px_-52px_rgba(15,23,42,0.32)]"
            style={{ backgroundImage: `linear-gradient(135deg, ${accent.from}, ${accent.to})` }}
          >
            <div className="relative h-full w-full rounded-[calc(1rem-1px)] bg-white/95 p-6">
              <div className="flex flex-col gap-3">
                <span className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${accent.pill}`}>
                  <FiTag size={14} aria-hidden /> {active.category}
                </span>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  <FiClock size={12} aria-hidden /> {new Date(active.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{active.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{active.summary}</p>
              </div>
            </div>
          </div>

          {/* Upcoming list with swipe effect */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-4 shadow-[0_20px_70px_-52px_rgba(15,23,42,0.28)]">
            <div className="flex items-center justify-between px-2 py-1">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Up next</span>
              <div className="text-xs text-slate-500">{index + 1} / {ordered.length}</div>
            </div>
            <div className="relative h-[240px] overflow-hidden">
              {[active, next].map((item, idx) => {
                const isActive = idx === 0;
                return (
                  <div
                    key={`${item.id}-${idx}`}
                    className={`absolute inset-0 rounded-2xl border border-slate-100 bg-slate-50/90 px-4 py-4 transition-all duration-600 ease-out ${
                      isActive ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                    }`}
                    style={{ animation: isActive ? "news-in 0.6s ease" : undefined }}
                  >
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                      <FiTag size={12} aria-hidden /> {item.category}
                    </div>
                    <p className="mt-2 text-sm font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-2 line-clamp-3 text-sm text-slate-600">{item.summary}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes news-in {
          0% { transform: translateX(24px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default NewsSection;
