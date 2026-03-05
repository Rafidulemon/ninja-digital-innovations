import Link from "next/link";
import Image from "next/image";
import Button from "@/components/button/Button";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center justify-center overflow-hidden bg-white px-5 py-16 sm:px-6 md:px-10">
      {/* background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 18% 18%, rgba(88,116,168,0.12), transparent 32%), radial-gradient(circle at 82% 16%, rgba(88,144,168,0.12), transparent 30%), radial-gradient(circle at 70% 82%, rgba(88,116,168,0.12), transparent 32%)",
        }}
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="relative mb-6">
          <div className="absolute -inset-6 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <Image
            src="/images/ndi.logo.png"
            alt="Ninja Digital Innovations logo"
            width={72}
            height={72}
            className="relative mx-auto mb-4 h-auto w-[72px]"
          />
          <div className="relative inline-block">
            <span className="block bg-gradient-to-r from-[#0ea5e9] via-[#6366f1] to-[#f472b6] bg-clip-text text-[64px] font-black leading-none text-transparent sm:text-[88px] md:text-[110px]">
              Oops!
            </span>
          </div>
        </div>

        <p className="text-base font-semibold text-slate-900">404 · Page not found</p>
        <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-600">
          The page you’re looking for might have been moved, renamed, or is temporarily unavailable.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link href="/">
            <Button theme="dark" className="px-6 py-2 text-sm font-semibold">
              Go to homepage
            </Button>
          </Link>
          <Link href="/contact">
            <Button theme="white" className="px-6 py-2 text-sm font-semibold text-slate-900">
              Contact support
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
