import Link from "next/link";

export default function NewsNotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-white px-6 text-center text-slate-800">
      <h1 className="text-2xl font-semibold">News not found</h1>
      <p className="text-sm text-slate-500">The news item you’re looking for isn’t available.</p>
      <Link href="/news" className="text-sm font-semibold text-primary hover:text-primaryBlueDark">
        Back to news
      </Link>
    </div>
  );
}
