"use client";

import {
  FiCloud,
  FiCpu,
  FiGlobe,
  FiSmartphone,
  FiCode,
  FiMonitor,
  FiZap,
  FiDatabase,
} from "react-icons/fi";
import Link from "next/link";

const HeroSection = () => {
  const floatingIcons = [
    { Icon: FiCode, size: 32, top: "18%", left: "12%", duration: 12, delay: 0, blink: 3.4 },
    { Icon: FiCpu, size: 38, top: "26%", left: "78%", duration: 14, delay: 1.5, blink: 2.8 },
    { Icon: FiMonitor, size: 34, top: "44%", left: "8%", duration: 11, delay: 0.8, blink: 3.1 },
    { Icon: FiZap, size: 30, top: "60%", left: "85%", duration: 13, delay: 2, blink: 2.5 },
    { Icon: FiDatabase, size: 30, top: "72%", left: "18%", duration: 15, delay: 1.2, blink: 3.6 },
    { Icon: FiCloud, size: 36, top: "14%", left: "55%", duration: 16, delay: 0.5, blink: 2.9 },
  ];

  const serviceHighlights = [
    { icon: FiGlobe, label: "Global engineering partnerships" },
    { icon: FiSmartphone, label: "SNS strategy & social innovation" },
    { icon: FiCpu, label: "AI platforms & applied ML" },
    { icon: FiCloud, label: "Secure cloud automation" },
  ];

  return (
    <section
      id="home-hero"
      className="relative isolate -mt-16 flex min-h-[calc(100vh)] flex-col justify-center overflow-hidden bg-gradient-to-b from-black via-[#0b2f72] to-[#051331] text-white md:-mt-20 md:min-h-[calc(100vh)]">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      {/* floating tech icons */}
      <div className="pointer-events-none absolute inset-0 -z-5">
        {floatingIcons.map(({ Icon, size, top, left, duration, delay, blink }, idx) => (
          <span
            key={idx}
            className="absolute text-white/50 drop-shadow-md"
            style={{
              top,
              left,
              animation: `float-soft ${duration}s ease-in-out ${delay}s infinite, blink-soft ${blink}s ease-in-out ${delay / 2}s infinite`,
              transformOrigin: "center",
            }}
          >
            <Icon size={size} />
          </span>
        ))}
      </div>
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-45"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.7), transparent), radial-gradient(1.2px 1.2px at 30% 70%, rgba(255,255,255,0.75), transparent), radial-gradient(1px 1px at 60% 30%, rgba(255,255,255,0.6), transparent), radial-gradient(1.4px 1.4px at 80% 55%, rgba(255,255,255,0.65), transparent), radial-gradient(1px 1px at 95% 15%, rgba(255,255,255,0.5), transparent), radial-gradient(1.2px 1.2px at 50% 50%, rgba(255,255,255,0.55), transparent)",
        }}
        aria-hidden
      />
      <div className="hero-smooth-reveal mx-auto flex w-full flex-col items-center justify-center gap-8 px-5 py-10 sm:gap-10 sm:px-6 sm:py-12 md:gap-12 md:px-10 md:py-16">
        <div className="flex h-full flex-col items-center justify-center gap-5 text-center">
          <span className="inline-flex w-fit uppercase tracking-[0.2em] text-white text-[12px]">
            Ninja Digital Innovations
          </span>
          <h1 className="relative max-w-5xl inline-block whitespace-pre-line break-words font-semibold leading-[1.08] text-white drop-shadow-[0_14px_30px_rgba(9,0,16,0.45)] text-[30px] md:text-[60px] font-spaceGrotesk">
            Pioneering the future with AI and human collaboration
          </h1>
          <div className="flex w-full flex-wrap items-center justify-center gap-3 md:gap-4 md:mb-2">
            {serviceHighlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1 rounded-xl border border-white/15 bg-white/8 px-2 py-2 text-sm font-medium text-white/90 backdrop-blur-sm shadow-[0_10px_40px_-18px_rgba(0,0,0,0.65)]"
              >
                <Icon className="text-white" size={16} aria-hidden="true" />
                <span className="whitespace-nowrap">{label}</span>
              </div>
            ))}
          </div>
          <p className="max-w-[560px] text-justify md:text-center text-[16px] leading-[1.7] text-white/70">
            Utilizing cutting-edge AI, automation, and security technologies, we create new value for society and our clients.
          </p>
          <div className="flex w-full flex-col items-stretch justify-center gap-3 md:flex-row md:w-auto">
            <Link
              href="/contact"
              className="group relative w-full h-[56px] px-8 flex flex-col items-center justify-center rounded-[60px] bg-primary text-white border border-transparent overflow-hidden transition-colors duration-300 ease-in-out hover:border-primary"
            >
              <span className="relative z-10 font-medium text-white transition-colors duration-200 ease-in-out group-hover:text-primary">
                Let&apos;s Build Together
              </span>
              <span className="pointer-events-none absolute inset-0 translate-y-full bg-white transition-transform duration-300 ease-in-out group-hover:translate-y-0" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
