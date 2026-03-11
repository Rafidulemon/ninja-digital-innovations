import { FiClock, FiUser } from "react-icons/fi";

interface BlogMetaProps {
  date: string;
  readTime: string;
  author: string;
  compact?: boolean;
  invert?: boolean;
}

const BlogMeta = ({ date, readTime, author, compact, invert }: BlogMetaProps) => {
  const base = "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold";
  const tone = compact
    ? "bg-transparent text-slate-500"
    : invert
      ? "bg-white/10 text-white"
      : "bg-slate-100 text-slate-800";

  return (
    <div
      className={`flex flex-wrap items-center gap-2 ${
        compact ? "text-[11px] uppercase tracking-[0.22em]" : "text-xs font-semibold"
      }`}
    >
      <span className={`${base} ${tone}`}>
        <FiUser size={14} aria-hidden />
        {author}
      </span>
      <span className={`${base} ${tone}`}>
        <FiClock size={14} aria-hidden />
        {readTime}
      </span>
      <span className={`${base} ${tone}`}>{date}</span>
    </div>
  );
};

export default BlogMeta;
