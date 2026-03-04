import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { getNavItems } from "@/app/contants/navItems";

const Footer = () => {
  const navItems = getNavItems();

  return (
    <footer className="relative mt-16 overflow-hidden bg-gradient-to-br from-[#050915] via-[#0a1632] to-[#081129] text-white">
      {/* Futuristic glow field */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#4fd1c5]/15 blur-[90px]" />
        <div className="absolute right-[-12%] top-[14%] h-80 w-80 rounded-full bg-[#7c6bff]/18 blur-[110px]" />
        <div className="absolute left-[18%] bottom-[-10%] h-96 w-96 rounded-full bg-[#38bdf8]/12 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(60deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:120px_120px] opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.08),transparent_25%),radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.08),transparent_30%)] opacity-35" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-6 py-14 md:px-10 md:py-16 lg:px-12">
        {/* CTA rail */}
        <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-white/5 px-6 py-5 shadow-[0_24px_70px_-50px_rgba(0,0,0,0.8)] backdrop-blur-md md:flex md:items-center md:justify-between">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4fd1c5]/25 via-[#7c6bff]/20 to-[#38bdf8]/18" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_40%,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.06),transparent_26%)]" />
          </div>
          <div className="relative flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.28em] text-white/70">Let&apos;s build what&apos;s next</p>
            <h3 className="text-2xl font-semibold leading-tight md:text-3xl">
              Bold digital experiences, engineered with care.
            </h3>
            <p className="text-sm text-white/70">
              AI-native products, security-first platforms, and social-first storytelling—shipped by senior squads.
            </p>
          </div>
          <Link
            href="/contact"
            className="relative mt-4 inline-flex items-center justify-center gap-2 rounded-[14px] bg-primaryBlue px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_38px_rgba(107,140,255,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(107,140,255,0.45)] md:mt-0"
          >
            Start a project
            <span className="text-base">↗</span>
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/ndi.logo.png"
                alt="Ninja Digital Innovations logo"
                width={150}
                height={48}
                className="h-auto w-[150px]"
                sizes="150px"
              />
            </Link>
            <p className="mt-4 max-w-xl text-base text-white/70">
              We partner with ambitious teams to ship resilient products, intuitive interfaces, and AI-powered workflows
              that move faster than the market.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {[
                { href: "https://www.linkedin.com", label: "LinkedIn", icon: <FaLinkedinIn /> },
                { href: "https://twitter.com", label: "Twitter", icon: <FaTwitter /> },
                { href: "https://github.com", label: "GitHub", icon: <FaGithub /> },
                { href: "https://www.facebook.com", label: "Facebook", icon: <FaFacebookF /> },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-label={item.label}
                  className="relative flex size-10 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10 text-white transition hover:-translate-y-0.5 hover:border-white/50 hover:shadow-[0_12px_30px_rgba(79,209,197,0.3)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/0 opacity-0 transition group-hover:opacity-100" />
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-8 text-sm font-medium md:col-span-7 md:grid-cols-3">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.18em] text-white/50">Navigation</p>
              <div className="flex flex-col gap-3 text-white/80">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.18em] text-white/50">Contact</p>
              <div className="flex flex-col gap-3 text-white/80">
                <Link href="mailto:hello@ninjadigital.com" className="hover:text-white">
                  hello@ninjadigital.com
                </Link>
                <Link href="tel:+15550124477" className="hover:text-white">
                  +1 (555) 012-4477
                </Link>
                <p className="text-white/60">Mon–Fri · 9:00–18:00 (GMT+6)</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.18em] text-white/50">Visit</p>
              <div className="text-white/80">
                <p>27 Shaptak Square, Plot No. 380 (Old), 2 (New)</p>
                <p>Road No. 27 (Old), 16 (New)</p>
                <p>Dhanmondi, Dhaka-1209, Bangladesh</p>
                <Link
                  href="https://maps.app.goo.gl/vuML4DtrZp9mCHQR8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-white"
                >
                  View on Google Maps
                  <span className="text-base">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Ninja Digital Innovations. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <span className="text-white/30">·</span>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <span className="text-white/30">·</span>
            <Link href="/contact" className="hover:text-white">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
