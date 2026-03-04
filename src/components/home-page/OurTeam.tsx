"use client";

import Image from "next/image";
import Link from "next/link";

import teamMembers from "@/app/data/team.json";

const OurTeam = () => {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
        <div className="flex flex-col gap-3 md:w-2/3">
          <p className="text-xs uppercase tracking-[0.22em] text-primary">People</p>
          <h2 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
            The crew behind Ninja Digital Innovations.
          </h2>
          <p className="text-lg leading-relaxed text-slate-700">
            Cross-functional squads spanning engineering, design, research, and people operations—working as one unit across Dhaka and Tokyo.
          </p>
          <div className="mt-2">
            <Link
              href="/company/team"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(79,70,229,0.26)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(79,70,229,0.35)]"
            >
              Meet the full team
              <span className="text-base">↗</span>
            </Link>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-3xl border border-slate-100 bg-slate-50/80 p-4 shadow-[0_28px_72px_-52px_rgba(15,23,42,0.28)]">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-50 to-transparent" aria-hidden />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-50 to-transparent" aria-hidden />

          <div className="team-marquee flex w-max items-stretch gap-4 will-change-transform">
            {[...teamMembers, ...teamMembers].map((member, idx) => (
              <article
                key={`${member.id}-${idx}`}
                className="group w-[220px] shrink-0 overflow-hidden rounded-2xl border border-white/60 bg-white/90 shadow-[0_22px_60px_-40px_rgba(15,23,42,0.32)] backdrop-blur"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={member.image_src}
                    alt={member.name}
                    fill
                    sizes="220px"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                    priority={idx < 4}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" aria-hidden />
                </div>
                <div className="flex flex-col gap-1 px-4 py-3">
                  <h3 className="text-sm font-semibold text-slate-900">{member.name}</h3>
                  <p className="text-xs font-medium text-slate-600">{member.designation}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes team-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .team-marquee {
          animation: team-marquee 65s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default OurTeam;
