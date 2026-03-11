"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  FiArrowRight,
  FiBookOpen,
  FiFeather,
  FiFilter,
  FiSearch,
} from "react-icons/fi";
import blogs from "@/app/data/blogs";
import BlogCard from "@/components/blog/BlogCard";

type Series = {
  title: string;
  description: string;
  cadence: string;
  focus: string;
};

const series: Series[] = [
  {
    title: "Shipped / Week",
    description: "A Friday snapshot of releases, incidents, and the experiments we’re running to push quality without slowing down.",
    cadence: "Weekly",
    focus: "Delivery & reliability",
  },
  {
    title: "AI in Production",
    description: "Hands-on notes from pairing with clients on LLM features: prompt evals, routing, cost controls, and UX patterns.",
    cadence: "Biweekly",
    focus: "Applied AI",
  },
  {
    title: "Design Ops Dispatch",
    description: "Systems, handoffs, and motion specs that keep engineers and designers shipping in sync across time zones.",
    cadence: "Monthly",
    focus: "Design systems",
  },
];

const BlogsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const categories = useMemo(() => ["All", ...new Set(blogs.map((post) => post.category))], []);

  const filteredPosts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return blogs.filter((post) => {
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      if (!matchesCategory) return false;

      if (!query) return true;
      const haystack = `${post.title} ${post.summary} ${post.tags.join(" ")}`.toLowerCase();
      return haystack.includes(query);
    });
  }, [activeCategory, searchTerm]);

  const featuredPosts = blogs.filter((post) => post.featured);

  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section
        id="blogs-hero"
        className="relative isolate -mt-16 flex min-h-[calc(100vh+3rem)] flex-col justify-center overflow-hidden bg-gradient-to-br from-[#0c1a38] via-[#0b2c5c] to-[#0f172a] text-white md:-mt-20 md:min-h-[calc(100vh+4rem)]"
      >
        <div className="pointer-events-none absolute inset-0 opacity-45">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 18% 28%, rgba(120,123,255,0.28), transparent 32%), radial-gradient(circle at 82% 20%, rgba(59,214,183,0.22), transparent 30%), radial-gradient(circle at 65% 72%, rgba(255,179,71,0.16), transparent 34%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(120deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02), rgba(255,255,255,0.05))",
              backgroundSize: "240% 240%",
              animation: "gradient-shift 18s ease-in-out infinite",
            }}
          />
        </div>

        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 pb-20 pt-24 sm:px-6 md:pb-24 md:pt-28">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[12px] uppercase tracking-[0.28em] text-white/80 backdrop-blur">
            <FiFeather size={14} aria-hidden />
            Blogs
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-spaceGrotesk text-4xl font-semibold leading-tight sm:text-5xl md:text-[52px]">
              Field notes on building resilient, AI-forward products.
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-white/80">
              Essays, playbooks, and retros from the squads shipping Ninja Digital Innovations experiences. Pragmatic, security-first, and relentlessly user-focused.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {["AI craft", "Delivery", "Design systems", "Social innovation"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/85 backdrop-blur-md"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[
              { label: "Stories shipped", value: "180+", note: "Since 2023" },
              { label: "Avg. read", value: "6 min", note: "Bite-sized, practical" },
              { label: "Contributors", value: "14", note: "Engineers, designers, PMs" },
              { label: "Newsletter", value: "8.2k", note: "Subscribers" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/15 bg-white/5 px-4 py-4 text-sm text-white/80 shadow-[0_14px_40px_-22px_rgba(0,0,0,0.6)] backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-white/60">{stat.label}</p>
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="text-white/60">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters + featured */}
      <section className="relative -mt-12 bg-white pb-12 pt-6 sm:pt-10 md:pb-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-6 md:px-10">
          <div className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_25px_80px_-48px_rgba(15,23,42,0.25)]">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                <FiFilter className="text-primary" size={16} aria-hidden />
                Curated for product leaders & builders
              </div>
              <div className="relative w-full md:w-80">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} aria-hidden />
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by topic, tag, or phrase"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-10 py-2.5 text-sm text-slate-800 outline-none transition focus:border-primary/60 focus:bg-white focus:shadow-[0_14px_40px_-26px_rgba(15,23,42,0.32)]"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                      isActive
                        ? "border-primary/60 bg-primary/10 text-primary"
                        : "border-slate-200 bg-white text-slate-700 hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* Article grid */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-6 md:px-10">
          <div className="flex flex-col gap-2">
            <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">Latest stories</p>
            <h2 className="font-spaceGrotesk text-3xl font-semibold text-slate-900 md:text-4xl">
              Practical notes you can ship this week.
            </h2>
            <p className="max-w-3xl text-base text-slate-600">
              Search and filter to find the exact tactic, architecture note, or facilitation script you need for your next launch.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center text-slate-600 shadow-sm">
              No posts match that search yet. Try another keyword or category.
            </div>
          )}
        </div>
      </section>

      {/* Series */}
      <section className="relative bg-white py-14 md:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-35">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 22% 30%, rgba(88,116,168,0.12), transparent 32%), radial-gradient(circle at 78% 18%, rgba(34,197,94,0.12), transparent 30%), radial-gradient(circle at 70% 70%, rgba(120,123,255,0.1), transparent 34%)",
            }}
          />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-6 md:px-10">
          <div className="flex flex-col gap-2">
            <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">Recurring series</p>
            <h2 className="font-spaceGrotesk text-3xl font-semibold text-slate-900 md:text-4xl">
              Follow our favorite deep dives.
            </h2>
            <p className="max-w-3xl text-base text-slate-600">
              Each series is a focused thread with templates, architecture references, and facilitation scripts you can reuse.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {series.map((item) => (
              <article
                key={item.title}
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-slate-100 bg-slate-50/80 p-6 shadow-[0_20px_70px_-58px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:border-primary/30 hover:bg-white"
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <FiBookOpen size={14} aria-hidden />
                  {item.cadence}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 transition-colors duration-200 group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
                <div className="mt-auto flex items-center justify-between text-sm font-semibold text-slate-700">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-inner">
                    <FiFeather size={14} aria-hidden />
                    {item.focus}
                  </span>
                  <Link href="/blogs" className="inline-flex items-center gap-2 text-primary transition group-hover:gap-3">
                    View all
                    <FiArrowRight size={16} aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-primary/10 via-white to-emerald-50 py-14">
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 20% 40%, rgba(88,116,168,0.18), transparent 32%), radial-gradient(circle at 80% 50%, rgba(34,197,94,0.18), transparent 30%)",
            }}
          />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-4 px-5 sm:px-6 md:px-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">Stay ahead</p>
            <h3 className="font-spaceGrotesk text-2xl font-semibold text-slate-900 md:text-3xl">
              Get one concise email with the latest playbooks and templates.
            </h3>
            <p className="text-sm text-slate-600">
              No fluff—just the frameworks, architectures, and facilitation guides we rely on with clients every week.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_18px_60px_-52px_rgba(15,23,42,0.32)] md:w-[360px]">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <FiFeather size={16} className="text-primary" aria-hidden />
              Subscribe to the newsletter
            </div>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-primary/60 focus:bg-white"
            />
            <button className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary via-[#6d36dc] to-[#4b50e6] px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(76,49,201,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(76,49,201,0.32)]">
              Get the brief
            </button>
            <p className="text-[11px] text-slate-500">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
