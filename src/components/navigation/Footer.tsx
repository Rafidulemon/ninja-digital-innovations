import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { getNavItems } from "@/app/contants/navItems";

const accentRing =
  "relative overflow-hidden rounded-[14px] border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_20px_40px_rgba(0,0,0,0.18)] transition hover:border-white/30 hover:shadow-[0_28px_60px_rgba(0,0,0,0.22)]";

const Footer = () => {
  const navItems = getNavItems();

  return (
    <footer className="relative mt-16 bg-gradient-to-br from-[#0b1024] via-[#0f172e] to-[#0f1e3d] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-[#3dd6b7]/15 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-[#7cc6ff]/10 blur-3xl" />
        <div className="absolute -bottom-10 left-1/4 h-72 w-72 rounded-full bg-[#ffb347]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-6 py-14 md:px-10 md:py-16 lg:px-12">
        <div className={`${accentRing} flex flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between`}>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">Let&apos;s build what&apos;s next</p>
            <h3 className="mt-2 text-2xl font-semibold leading-tight md:text-3xl">
              Bold digital experiences, engineered with care.
            </h3>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-[12px] bg-gradient-to-r from-[#3dd6b7] via-[#5fb4ff] to-[#7c6bff] px-5 py-3 text-sm font-semibold text-[#0b1024] shadow-[0_14px_30px_rgba(59,166,255,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(59,166,255,0.45)]"
          >
            Start a project
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-12 md:gap-6">
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
                  className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15"
                >
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
                <p>Level 12, Innovation Tower</p>
                <p>Dhaka, Bangladesh</p>
                <p className="mt-2 text-white/60">Open for in-person sessions by appointment.</p>
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
