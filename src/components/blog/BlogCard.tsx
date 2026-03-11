"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiClock, FiTag } from "react-icons/fi";
import type { BlogPost } from "@/app/data/blogs";

interface BlogCardProps {
  post: BlogPost;
  variant?: "grid" | "featured" | "compact";
}

const BlogCard = ({ post, variant = "grid" }: BlogCardProps) => {
  const isFeatured = variant === "featured";
  const cardClasses =
    variant === "compact"
      ? "group flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_16px_60px_-48px_rgba(15,23,42,0.32)]"
      : "group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_25px_80px_-52px_rgba(15,23,42,0.32)] transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_32px_110px_-64px_rgba(15,23,42,0.36)]";

  return (
    <article className={cardClasses}>
      <div className="relative h-44 overflow-hidden rounded-2xl bg-slate-100 sm:h-52">
        <Image
          src={post.banner}
          alt={post.title}
          fill
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={isFeatured}
        />
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${post.accent} opacity-50 mix-blend-multiply`}
          aria-hidden
        />
        {isFeatured && (
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Featured
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-500">
          <span>{post.category}</span>
          <span className="flex items-center gap-2 text-[11px] font-semibold text-slate-500">
            <FiClock size={14} aria-hidden />
            {post.readTime}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-primary">
          {post.title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">{post.summary}</p>

        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[12px] font-semibold text-slate-700"
            >
              <FiTag size={12} aria-hidden />
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between text-sm font-semibold text-primary">
          <Link href={`/blogs/${post.slug}`} className="inline-flex items-center gap-2 transition group-hover:gap-3">
            Read article
            <FiArrowRight size={16} aria-hidden />
          </Link>
          <span className="text-slate-500">{post.date}</span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
