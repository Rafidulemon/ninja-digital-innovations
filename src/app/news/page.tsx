import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight, FiClock, FiTag } from "react-icons/fi";
import newsData from "@/app/data/news.json";
import Button from "@/components/button/Button";

type NewsItem = {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  link: string;
};

const news = newsData as NewsItem[];

const NewsPage = () => {
  const categories = Array.from(new Set(news.map((n) => n.category)));
  const grouped = categories.map((cat) => ({
    cat,
    items: news
      .filter((n) => n.category === cat)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
  }));

  return (
    <div className="bg-white text-slate-900">
      <section
        id="news-hero"
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
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white transition hover:border-white/40 hover:text-white"
            >
              <FiArrowLeft size={14} aria-hidden />
              Home
            </Link>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur">
              Newsroom
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="font-spaceGrotesk text-4xl font-semibold leading-tight sm:text-5xl md:text-[52px]">
              News & updates from Ninja Digital Innovations.
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-white/80">
              Product launches, engineering deep-dives, hiring notes, and holiday schedules in one place.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/contact">
              <Button theme="white" className="px-6 py-2 text-sm font-semibold text-slate-900">
                Talk to us
              </Button>
            </Link>
            <Link href="/services">
              <Button theme="dark" className="px-6 py-2 text-sm font-semibold">
                Explore services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative -mt-12 bg-white pb-16 pt-6 sm:pt-10 md:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(88,116,168,0.08),transparent_28%),radial-gradient(circle_at_82%_14%,rgba(88,144,168,0.08),transparent_30%),radial-gradient(circle_at_70%_74%,rgba(88,116,168,0.08),transparent_28%)]" aria-hidden />
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <div className="flex flex-col gap-10">
            {grouped.map(({ cat, items }) => (
              <div key={cat} className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    <FiTag size={14} aria-hidden />
                    {cat}
                  </span>
                  <span className="text-xs text-slate-500">{items.length} updates</span>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {items.map((item) => (
                    <Link
                      key={item.id}
                      href={item.link}
                      className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_20px_70px_-56px_rgba(15,23,42,0.28)] transition duration-300 hover:-translate-y-1 hover:border-primary/30"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                          <FiClock size={12} aria-hidden />{" "}
                          {new Date(item.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                        </div>
                        <FiArrowUpRight className="text-slate-400 transition group-hover:text-primary" size={16} aria-hidden />
                      </div>
                      <h3 className="mt-2 text-lg font-semibold text-slate-900">{item.title}</h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">{item.summary}</p>
                      <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        Read more <FiArrowUpRight size={14} aria-hidden />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
