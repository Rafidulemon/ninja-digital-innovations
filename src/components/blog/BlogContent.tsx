import Image from "next/image";
import type { BlogContentBlock } from "@/app/data/blogs";

interface BlogContentProps {
  content: BlogContentBlock[];
}

const BlogContent = ({ content }: BlogContentProps) => {
  return (
    <div className="flex flex-col gap-8 text-base leading-relaxed text-slate-700">
      {content.map((block, idx) => {
        if (block.type === "heading") {
          return (
            <h3 key={`${block.text}-${idx}`} className="text-2xl font-semibold text-slate-900">
              {block.text}
            </h3>
          );
        }

        if (block.type === "paragraph") {
          return (
            <p key={`${block.text}-${idx}`} className="text-slate-700">
              {block.text}
            </p>
          );
        }

        if (block.type === "list") {
          return (
            <div key={`${block.title ?? "list"}-${idx}`} className="space-y-3">
              {block.title && <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{block.title}</p>}
              <ul className="grid gap-2 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:grid-cols-2">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        if (block.type === "code") {
          return (
            <figure key={`${block.title ?? "code"}-${idx}`} className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-900/95 text-slate-100 shadow-[0_24px_80px_-60px_rgba(15,23,42,0.52)]">
              {block.title && (
                <figcaption className="border-b border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80">
                  {block.title}
                </figcaption>
              )}
              <pre className="overflow-x-auto px-4 py-4 text-sm leading-relaxed" aria-label={block.title ?? "code sample"}>
                <code className="font-mono whitespace-pre">{block.code}</code>
              </pre>
            </figure>
          );
        }

        if (block.type === "image") {
          return (
            <figure
              key={`${block.alt}-${idx}`}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-[0_24px_80px_-60px_rgba(15,23,42,0.32)]"
            >
              <div className="relative h-72 w-full sm:h-80">
                <Image
                  src={block.src}
                  alt={block.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                  className="h-full w-full object-cover"
                />
              </div>
              {block.caption && (
                <figcaption className="border-t border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote
              key={`${block.text}-${idx}`}
              className="rounded-3xl border border-slate-200 bg-gradient-to-r from-primary/5 via-white to-emerald-50 p-6 text-lg font-semibold text-slate-900 shadow-[0_20px_70px_-52px_rgba(15,23,42,0.32)]"
            >
              <p className="text-lg leading-relaxed text-slate-900">“{block.text}”</p>
              {(block.author || block.role) && (
                <cite className="mt-2 block text-sm font-semibold text-slate-600 not-italic">
                  {block.author}
                  {block.author && block.role ? " • " : ""}
                  <span className="text-slate-500">{block.role}</span>
                </cite>
              )}
            </blockquote>
          );
        }

        if (block.type === "callout") {
          return (
            <div
              key={`${block.label}-${idx}`}
              className="rounded-2xl border border-primary/15 bg-primary/5 p-4 text-sm text-slate-800 shadow-[0_18px_60px_-48px_rgba(15,23,42,0.32)]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">{block.label}</p>
              <p className="mt-1 leading-relaxed text-slate-800">{block.body}</p>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default BlogContent;
