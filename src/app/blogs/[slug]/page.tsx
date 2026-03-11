import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiFeather, FiTag, FiZap } from "react-icons/fi";
import blogs from "@/app/data/blogs";
import Button from "@/components/button/Button";
import BlogCard from "@/components/blog/BlogCard";
import BlogContent from "@/components/blog/BlogContent";
import BlogMeta from "@/components/blog/BlogMeta";
import ShareActions from "@/components/blog/ShareActions";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
  const { slug } = await params;
  const post = blogs.find((item) => item.slug === slug);
  if (!post) return notFound();

  const related = blogs.filter((item) => item.slug !== slug && (item.category === post.category || item.featured)).slice(0, 3);

  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section
        id="blog-detail-hero"
        className="relative isolate -mt-16 overflow-hidden bg-gradient-to-b from-black via-[#0b2c5c] to-[#0f172a] text-white md:-mt-20"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at 18% 22%, rgba(88,116,168,0.32), transparent 32%), radial-gradient(circle at 82% 12%, rgba(34,197,94,0.22), transparent 30%), radial-gradient(circle at 70% 68%, rgba(14,165,233,0.18), transparent 32%)",
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

        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 pb-16 pt-24 sm:px-6 md:pb-20 md:pt-28">
          <div className="flex flex-wrap items-center gap-3 text-[12px] uppercase tracking-[0.28em] text-white/80">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white transition hover:border-white/40 hover:text-white"
            >
              <FiArrowLeft size={14} aria-hidden />
              Back
            </Link>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur">
              <FiFeather size={14} aria-hidden />
              Blog
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur">
              {post.category}
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="flex flex-col gap-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/70">Playbook</p>
              <h1 className="font-spaceGrotesk text-4xl font-semibold leading-tight sm:text-5xl md:text-[52px]">
                {post.title}
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-white/80">{post.summary}</p>
              <div className="flex flex-wrap items-center gap-3">
                <BlogMeta date={post.date} readTime={post.readTime} author={post.author} invert />
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[12px] font-semibold text-white/80"
                    >
                      <FiTag size={12} aria-hidden />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden rounded-3xl bg-white/5 sm:h-80 lg:h-full">
              <Image
                src={post.banner}
                alt={post.title}
                fill
                priority
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 560px"
              />
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${post.accent} opacity-50 mix-blend-multiply`} aria-hidden />
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="relative -mt-12 bg-white pb-16 pt-8 sm:pt-12 md:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(88,116,168,0.08),transparent_28%),radial-gradient(circle_at_82%_14%,rgba(88,144,168,0.08),transparent_30%),radial-gradient(circle_at_70%_74%,rgba(88,116,168,0.08),transparent_28%)]" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 md:px-10 lg:grid-cols-[1.1fr_0.6fr]">
          <article className="flex flex-col gap-8 rounded-3xl border border-slate-100 bg-white shadow-[0_26px_90px_-52px_rgba(15,23,42,0.32)]">
            <div className="overflow-hidden rounded-t-3xl">
              <div className="relative h-64 w-full sm:h-72">
                <Image
                  src={post.banner}
                  alt={`${post.title} banner`}
                  fill
                  className="h-full w-full object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 720px"
                />
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${post.accent} opacity-40 mix-blend-multiply`} aria-hidden />
              </div>
            </div>
            <div className="space-y-6 px-5 pb-10 sm:px-8">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary">
                  <FiZap size={14} aria-hidden />
                  Field note
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">Updated for 2026 launches</span>
              </div>
              <BlogContent content={post.content} />
            </div>
          </article>

          <aside className="flex flex-col gap-4">
            <div className="rounded-3xl border border-slate-100 bg-slate-50/80 p-5 shadow-[0_20px_70px_-58px_rgba(15,23,42,0.32)]">
              <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">Snapshot</p>
              <div className="mt-3 space-y-3 text-sm text-slate-700">
                <div className="flex items-center justify-between rounded-2xl bg-white px-3 py-2 font-semibold">
                  <span>Category</span>
                  <span className="text-primary">{post.category}</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white px-3 py-2 font-semibold">
                  <span>Author</span>
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white px-3 py-2 font-semibold">
                  <span>Read time</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="rounded-2xl bg-white px-3 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Tags</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-[12px] font-semibold text-slate-700">
                        <FiTag size={12} aria-hidden />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-primary/15 bg-primary/5 p-5 text-slate-800 shadow-[0_20px_70px_-58px_rgba(15,23,42,0.32)]">
              <p className="text-[11px] uppercase tracking-[0.28em] text-primary">Try this next</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                Need this pattern in your product? We can pair for a 10-day spike with architecture notes, risk register, and a guarded prototype.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/contact">
                  <Button className="px-5 py-2 text-sm font-semibold">Book a working session</Button>
                </Link>
                <Link href="/services">
                  <Button theme="white" className="px-5 py-2 text-sm font-semibold text-slate-900">
                    View services
                  </Button>
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_18px_60px_-52px_rgba(15,23,42,0.28)]">
              <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">Share</p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold text-primary">
                <ShareActions url={`/blogs/${post.slug}`} />
                <span className="rounded-full bg-slate-100 px-3 py-2 text-slate-700">{post.date}</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:px-6 md:px-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">More like this</p>
              <h3 className="font-spaceGrotesk text-2xl font-semibold text-slate-900 md:text-3xl">Keep exploring</h3>
            </div>
            <Link href="/blogs" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              View all
              <FiArrowLeft className="rotate-180" size={16} aria-hidden />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <BlogCard key={item.slug} post={item} variant="compact" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}
