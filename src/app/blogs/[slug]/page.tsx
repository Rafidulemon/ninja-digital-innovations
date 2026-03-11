import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiArrowLeft,
  FiBookmark,
  FiCalendar,
  FiClock,
  FiFeather,
  FiShare2,
  FiTag,
  FiZap,
} from "react-icons/fi";
import blogs from "@/app/data/blogs";
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

  const sections = post.content.filter((b) => b.type === "heading").map((b) => (b as { text: string }).text);
  const related = blogs
    .filter((item) => item.slug !== slug && (item.category === post.category || item.featured))
    .slice(0, 3);

  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="relative isolate -mt-16 overflow-hidden bg-slate-900 text-white md:-mt-20">
        <div className="absolute inset-0">
          <Image
            src={post.banner}
            alt={post.title}
            fill
            priority
            className="h-full w-full object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-[#0b142a]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(88,116,168,0.28),transparent_32%),radial-gradient(circle_at_82%_12%,rgba(34,197,94,0.18),transparent_30%),radial-gradient(circle_at_70%_68%,rgba(14,165,233,0.18),transparent_32%)]" />
        </div>

        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-5 pb-20 pt-28 sm:px-6 md:pb-24 md:pt-32">
          <div className="flex items-center justify-between text-[12px] uppercase tracking-[0.28em] text-white/80">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-white transition hover:border-white/40 hover:text-white"
              >
                <FiArrowLeft size={14} aria-hidden />
                Back
              </Link>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur">
                <FiFeather size={14} aria-hidden />
                Blog
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur">
                {post.category}
              </span>
            </div>
            <ShareActions url={`/blogs/${post.slug}`} />
          </div>

          <div className="space-y-5">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/70">Playbook</p>
            <h1 className="font-spaceGrotesk text-4xl font-semibold leading-tight sm:text-5xl md:text-[52px]">
              {post.title}
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-white/85">{post.summary}</p>
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-white/80">
              <BlogMeta date={post.date} readTime={post.readTime} author={post.author} invert />
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[12px] uppercase tracking-[0.14em] text-white/75">
                <FiCalendar size={14} aria-hidden />
                Updated
              </span>
            </div>
            {post.highlights && (
              <div className="flex flex-wrap gap-2 text-[12px] font-semibold">
                {post.highlights.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-white/80 backdrop-blur"
                  >
                    <FiZap size={12} aria-hidden />
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="relative -mt-12 bg-white pb-18 pt-10 sm:pt-14 md:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(88,116,168,0.08),transparent_28%),radial-gradient(circle_at_82%_14%,rgba(88,144,168,0.08),transparent_30%),radial-gradient(circle_at_70%_74%,rgba(88,116,168,0.08),transparent_28%)]" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 md:px-10 lg:grid-cols-[1.05fr_0.65fr]">
          {/* Main article */}
          <article className="flex flex-col gap-8 rounded-3xl border border-slate-100 bg-white shadow-[0_26px_90px_-52px_rgba(15,23,42,0.32)]">
            <div className="relative h-72 w-full overflow-hidden rounded-t-3xl sm:h-80">
              <Image
                src={post.banner}
                alt={`${post.title} banner`}
                fill
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 720px"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-white" />
            </div>

            <div className="space-y-6 px-5 pb-10 sm:px-8">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary">
                  <FiBookmark size={14} aria-hidden />
                  Field note
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                  <FiClock size={14} aria-hidden />
                  {post.readTime}
                </span>
              </div>

              <BlogContent content={post.content} />

              {post.highlights && (
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Key takeaways</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700">
                    {post.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-2 border-t border-slate-100 pt-5 text-xs font-semibold text-slate-600">
                {post.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                    <FiTag size={12} aria-hidden />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="flex flex-col gap-5 lg:sticky lg:top-20">
            <div className="rounded-3xl border border-slate-100 bg-slate-50/80 p-5 shadow-[0_20px_70px_-58px_rgba(15,23,42,0.32)]">
              <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">Snapshot</p>
              <div className="mt-3 space-y-3 text-sm text-slate-700">
                <MetaRow label="Category" value={post.category} highlight />
                <MetaRow label="Author" value={post.author} />
                <MetaRow label="Read time" value={post.readTime} />
                <MetaRow label="Published" value={post.date} />
              </div>
            </div>

            {sections.length > 0 && (
              <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_18px_60px_-52px_rgba(15,23,42,0.28)]">
                <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">In this article</p>
                <ol className="mt-3 space-y-2 text-sm text-slate-700 list-decimal list-inside">
                  {sections.map((heading) => (
                    <li key={heading}>{heading}</li>
                  ))}
                </ol>
              </div>
            )}

            <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_18px_60px_-52px_rgba(15,23,42,0.28)]">
              <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">Share</p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm font-semibold text-primary">
                <ShareActions url={`/blogs/${post.slug}`} />
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-slate-700">
                  <FiShare2 size={14} aria-hidden />
                  Copy & send
                </span>
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

const MetaRow = ({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) => (
  <div className="flex items-center justify-between rounded-2xl bg-white px-3 py-2 font-semibold">
    <span className="text-slate-500">{label}</span>
    <span className={highlight ? "text-primary" : "text-slate-800"}>{value}</span>
  </div>
);

export default BlogDetailPage;

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}
