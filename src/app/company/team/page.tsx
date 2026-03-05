import Image from "next/image";
import Link from "next/link";
import { FiMessageSquare, FiShield, FiUsers } from "react-icons/fi";

import teamMembers from "@/app/data/team.json";

const teamValues = [
  {
    title: "Senior-led squads",
    detail: "Hybrid teams across Bangladesh and Japan ship with shared rituals and accountable leads.",
    icon: FiUsers,
  },
  {
    title: "Security-first execution",
    detail: "Privacy, compliance, and platform safety are built in from architecture through launch.",
    icon: FiShield,
  },
  {
    title: "Storytelling x Engineering",
    detail: "Brand consultants pair with designers, analysts, and engineers to deliver measurable lift.",
    icon: FiMessageSquare,
  },
];

type TeamMember = (typeof teamMembers)[number];

const orderedDepartments = [
  "Management and HR Team",
  "Frontend",
  "Backend",
  "UI/UX",
  "Research",
  "SNS",
];

const groupMembersByDepartment = (members: TeamMember[]) => {
  const priorityIds = new Set(members.slice(0, 4).map((member) => member.id));
  const groups = orderedDepartments
    .map((department) => ({
      department,
      members: members.filter((member) => member.department === department),
    }))
    .filter((group) => group.members.length);

  const otherMembers = members.filter(
    (member) => member.department && !orderedDepartments.includes(member.department),
  );
  if (otherMembers.length) {
    groups.push({ department: "Other", members: otherMembers });
  }

  return { groups, priorityIds };
};

const TeamPage = () => {
  const { groups, priorityIds } = groupMembersByDepartment(teamMembers);

  return (
    <div className="bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-24 sm:px-6 md:px-10 md:pb-20 md:pt-28">
        <div className="flex flex-col gap-3 md:w-2/3">
          <p className="text-xs uppercase tracking-[0.22em] text-primary">Company / Our Team</p>
          <h1 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
            A blended crew of brand strategists, engineers, and analysts.
          </h1>
          <p className="text-lg leading-relaxed text-slate-700">
            We staff pods with the right mix of consultants, creatives, and builders—led by senior talent who have shipped
            in Japan, the US, and Bangladesh.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {teamValues.map(({ title, detail, icon: Icon }) => (
            <div
              key={title}
              className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_24px_80px_-52px_rgba(15,23,42,0.32)] transition duration-300 hover:-translate-y-1"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[#0ea5e9]/5" aria-hidden />
              <div className="relative flex items-start gap-4">
                <span className="mt-[2px] flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon size={20} aria-hidden />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-700">{detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/career"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition duration-200 hover:-translate-y-0.5 hover:bg-primary/15"
          >
            Join the team
            <span className="text-base">→</span>
          </Link>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-12 sm:px-6 md:px-10 md:pb-24 md:pt-16">
          <div className="flex flex-col gap-3 md:w-2/3">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Team Directory</p>
            <h2 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
              Meet the people building Ninja Digital Innovations.
            </h2>
            <p className="text-lg leading-relaxed text-slate-700">
              Cross-functional specialists spanning engineering, research, design, and people operations—all working as one crew.
            </p>
          </div>

          <div className="mt-10 space-y-10">
            {groups.map(({ department, members }) => (
              <div key={department} className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">{department}</h3>
                  <span className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-600">
                    {members.length} {members.length === 1 ? "member" : "members"}
                  </span>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                  {members.map((member, index) => (
                    <article
                      key={member.id}
                      className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_28px_72px_-48px_rgba(15,23,42,0.28)] transition duration-300 hover:-translate-y-1"
                    >
                      <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
                        <Image
                          src={member.image_src}
                          alt={member.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 25vw"
                          className="object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                          priority={priorityIds.has(member.id)}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" aria-hidden />
                      </div>

                      <div className="flex flex-col gap-2 px-5 py-4">
                        <h4 className="text-lg font-semibold text-slate-900">{member.name}</h4>
                        <p className="text-sm font-medium text-slate-600">{member.designation}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
