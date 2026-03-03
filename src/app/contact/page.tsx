"use client";

import React from "react";
import Button from "@/components/button/Button";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiUsers,
  FiShield,
  FiGlobe,
} from "react-icons/fi";

const projectTypes = [
  "Product build",
  "AI / LLM initiative",
  "Platform & cloud",
  "Security / compliance",
  "Growth & content",
  "Consultation",
];

const ContactPage = () => {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#0c1a38] via-[#0b2c5c] to-[#0f172a] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18), transparent 30%), radial-gradient(circle at 82% 12%, rgba(120,123,255,0.26), transparent 32%), radial-gradient(circle at 68% 75%, rgba(34,197,94,0.18), transparent 32%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-45"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02), rgba(255,255,255,0.04))",
            backgroundSize: "220% 220%",
            animation: "gradient-shift 16s ease-in-out infinite",
          }}
        />
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 pb-16 pt-20 sm:px-6 md:pb-20 md:pt-24">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[12px] uppercase tracking-[0.28em] text-white/80 backdrop-blur">
            <FiSend size={14} aria-hidden />
            Contact
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-spaceGrotesk text-4xl font-semibold leading-tight sm:text-5xl md:text-[52px]">
              Let’s build the next thing together.
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-white/80">
              Share where you want to go—engineering, AI, security, or growth. We’ll assemble the right squad and reply within one business day.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button theme="white" className="px-6 py-2 text-sm font-semibold text-slate-900">
              Our response time: &lt; 24h
            </Button>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              New projects open for Q2
            </div>
          </div>
        </div>
      </section>

      {/* Form + Details */}
      <section className="relative -mt-12 bg-white pb-16 pt-6 sm:pt-10 md:pb-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:px-10">
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_25px_80px_-48px_rgba(15,23,42,0.28)]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">
                  Start a conversation
                </p>
                <h2 className="font-spaceGrotesk text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Tell us about your project
                </h2>
              </div>
              <span className="hidden rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary md:inline-flex">
                Reply in &lt; 24h
              </span>
            </div>

            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                  Full name
                  <input
                    type="text"
                    placeholder="Your name"
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary/60 focus:bg-white focus:shadow-[0_10px_30px_-18px_rgba(88,116,168,0.45)]"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                  Work email
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary/60 focus:bg-white focus:shadow-[0_10px_30px_-18px_rgba(88,116,168,0.45)]"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                  Company
                  <input
                    type="text"
                    placeholder="Company or organization"
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary/60 focus:bg-white focus:shadow-[0_10px_30px_-18px_rgba(88,116,168,0.45)]"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                  Role
                  <input
                    type="text"
                    placeholder="e.g. Product Lead"
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary/60 focus:bg-white focus:shadow-[0_10px_30px_-18px_rgba(88,116,168,0.45)]"
                  />
                </label>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-700">Project type</span>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                What are you looking to achieve?
                <textarea
                  rows={4}
                  placeholder="Share goals, timelines, links, and any must-haves."
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary/60 focus:bg-white focus:shadow-[0_12px_32px_-18px_rgba(88,116,168,0.45)]"
                />
              </label>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button theme="primary" className="px-6 py-2 text-sm font-semibold">
                  Send message
                </Button>
                <span className="text-sm text-slate-500">We keep everything under NDA by default.</span>
              </div>
            </form>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-slate-100 bg-slate-50/80 p-6 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.28)]">
              <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">Reach us</p>
              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-3 text-slate-800">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FiMail size={18} aria-hidden />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">Email</span>
                    <a href="mailto:hello@ninjadigital.io" className="text-sm text-primary hover:underline">
                      hello@ninjadigital.io
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-800">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FiPhone size={18} aria-hidden />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">Phone</span>
                    <a href="tel:+81300000000" className="text-sm text-primary hover:underline">
                      +81 (0)3 0000 0000
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-800">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FiMapPin size={18} aria-hidden />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">HQ</span>
                    <p className="text-sm text-slate-600">Tokyo • Remote-first, global collaborators</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-800">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FiClock size={18} aria-hidden />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">Office hours</span>
                    <p className="text-sm text-slate-600">Mon–Fri / 9:00–19:00 JST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.28)] sm:grid-cols-2">
              {[
                { icon: FiUsers, label: "Leadership sync", text: "Meet product + eng in first call." },
                { icon: FiShield, label: "Secure by default", text: "NDA on; security baked in." },
                { icon: FiGlobe, label: "Global coverage", text: "Follow-the-sun delivery." },
                { icon: FiSend, label: "Fast kickoff", text: "Teams spinning up in 7–10 days." },
              ].map(({ icon: Icon, label, text }) => (
                <div key={label} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon size={16} aria-hidden />
                  </span>
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold text-slate-900">{label}</p>
                    <p className="text-xs text-slate-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-r from-primary/10 via-white to-emerald-50 p-6 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.28)]">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-xl">
                  <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">Not ready to chat?</p>
                  <h3 className="font-spaceGrotesk text-xl font-semibold text-slate-900">
                    Download our capability overview.
                  </h3>
                  <p className="text-sm text-slate-600">
                    Engineering, AI, security, and social strategy—all in one deck you can share internally.
                  </p>
                </div>
                <Button theme="primary" className="px-5 py-2 text-sm font-semibold">
                  Get the deck
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
