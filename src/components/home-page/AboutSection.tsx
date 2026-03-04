"use client";

import Image from "next/image";
import Link from "next/link";
import { FiPlay } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Project Complete" },
  { value: 10, suffix: "+", label: "Happy Clients" },
  { value: 30, suffix: "+", label: "Team Members" },
  { value: 3, suffix: "", label: "Years Experience" },
];

const CountUp = ({ target, suffix = "", duration = 1200 }: { target: number; suffix?: string; duration?: number }) => {
  const [value, setValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    const start = performance.now();
    const update = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) {
        frame.current = requestAnimationFrame(update);
      }
    };
    frame.current = requestAnimationFrame(update);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [hasStarted, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-white py-16 text-slate-900 sm:py-20 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 18% 18%, rgba(88,116,168,0.08), transparent 32%), radial-gradient(circle at 82% 12%, rgba(88,144,168,0.08), transparent 30%), radial-gradient(circle at 70% 76%, rgba(88,116,168,0.09), transparent 32%)",
        }}
      />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 sm:px-6 md:flex-row md:items-center md:gap-12 md:px-10">
        {/* Left collage */}
        <div className="relative w-full max-w-xl">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-40 overflow-hidden rounded-3xl bg-slate-100 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.4)] sm:h-48">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                alt="Team collaborating"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 400px"
                priority
              />
            </div>
            <div className="relative h-40 overflow-hidden rounded-3xl bg-slate-100 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.4)] sm:h-48">
              <Image
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
                alt="Engineer at workstation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 400px"
              />
            </div>
            <div className="relative h-40 overflow-hidden rounded-3xl bg-slate-100 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.4)] sm:h-48">
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80"
                alt="Remote collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 400px"
              />
            </div>
            <div className="relative h-40 overflow-hidden rounded-3xl bg-slate-100 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.4)] sm:h-48">
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
                alt="Developer coding"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 400px"
              />
            </div>
          </div>

          {/* Experience badge */}
          <div className="absolute -left-6 top-12 flex flex-col items-center rounded-3xl bg-white px-4 py-5 text-center shadow-[0_24px_80px_-60px_rgba(15,23,42,0.45)] sm:-left-10 sm:top-14 sm:px-6 sm:py-6">
            <span className="text-3xl font-bold text-[#5890a8] sm:text-4xl">3+</span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Years
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Experience
            </span>
          </div>

          {/* Play button */}
          <button
            className="group absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#5890a8] shadow-[0_18px_50px_-28px_rgba(0,0,0,0.5)] transition duration-200 hover:scale-105"
            aria-label="Play company intro video"
          >
            <span className="absolute inset-0 rounded-full bg-[#5890a8]/10 blur-lg transition duration-300 group-hover:scale-110" />
            <FiPlay size={18} className="relative" aria-hidden />
          </button>
        </div>

        {/* Right content */}
        <div className="flex w-full flex-col gap-6 md:max-w-xl">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.32em] text-primary">About Us</p>
            <h2 className="font-spaceGrotesk text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              Highly tailored technology, development & support services.
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              We deliver secure software, data, and AI solutions for teams at home and abroad. Senior engineers and consultants
              pair industry best practices with deep technical expertise to drive your digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-start gap-1 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-[0_18px_60px_-48px_rgba(15,23,42,0.32)]"
              >
                <span className="text-2xl font-semibold text-[#5890a8]">
                  <CountUp target={value} suffix={typeof value === "number" ? (label === "Years Experience" ? "" : "+") : ""} />
                </span>
                <span className="text-sm font-semibold text-primary">{label}</span>
              </div>
            ))}
          </div>

          <div>
            <Link
              href="/company"
              className="inline-flex items-center justify-center rounded-full border border-[#5890a8] px-5 py-2.5 text-sm font-semibold text-[#5890a8] transition duration-200 hover:-translate-y-[1px] hover:bg-[#5890a8]/8"
            >
              Know more about us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
