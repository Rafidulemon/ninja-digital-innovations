import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiExternalLink, FiLayers } from "react-icons/fi";
import Button from "@/components/button/Button";
import projectsData from "@/app/data/projects.json";

type Project = {
  name: string;
  slug: string;
  details: string;
  image_src: string;
  live_url: string;
};

const projects = projectsData as Project[];

const projectAccent: Record<string, string> = {
  "knowledge-links-ai": "from-[#0ea5e9] via-[#6366f1] to-[#22d3ee]",
  moeguide: "from-[#f59e0b] via-[#f97316] to-[#fb7185]",
  suirikyou: "from-[#8b5cf6] via-[#6366f1] to-[#22c55e]",
  "gmail-triage-automation": "from-[#10b981] via-[#14b8a6] to-[#0ea5e9]",
};

const ProjectsSection = () => {
  const featured = projects.slice(0, 3);

  return (
    <section
      id="projects-home"
      className="relative isolate overflow-hidden bg-white py-16 text-slate-900 sm:py-20 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-80"
        style={{
          background:
            "radial-gradient(circle at 18% 22%, rgba(88,116,168,0.08), transparent 32%), radial-gradient(circle at 82% 18%, rgba(14,165,233,0.08), transparent 30%), radial-gradient(circle at 70% 76%, rgba(88,116,168,0.08), transparent 30%)",
        }}
      />

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 sm:px-6 md:px-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-[11px] uppercase tracking-[0.24em] text-primary">Projects</p>
            <h2 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
              Work shipped with our partners.
            </h2>
            <p className="text-base leading-relaxed text-slate-600 md:max-w-2xl">
              AI products, automation, and digital platforms delivered with secure, observable engineering.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/projects">
              <Button theme="dark" className="px-5 py-2 text-sm font-semibold">
                See projects
              </Button>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primaryBlueDark"
            >
              Start a project <FiArrowUpRight size={14} aria-hidden />
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((project) => {
            const slug = project.slug;
            const accent = projectAccent[slug] ?? "from-[#5874a8] via-[#6f8fc4] to-[#22d3ee]";
            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_26px_80px_-56px_rgba(15,23,42,0.32)] transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_32px_110px_-64px_rgba(15,23,42,0.35)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={project.image_src}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 400px"
                    className="object-contain transition duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent" aria-hidden />
                  <div
                    className={`absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${accent} px-3 py-1 text-xs font-semibold text-white shadow-[0_12px_32px_-18px_rgba(0,0,0,0.4)]`}
                  >
                    <FiLayers size={14} aria-hidden />
                    Case study
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-3 px-5 py-4 sm:px-6 sm:py-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
                      <p className="text-sm text-slate-600 line-clamp-2">{project.details}</p>
                    </div>
                    <FiExternalLink className="text-slate-400 transition group-hover:text-primary" size={16} aria-hidden />
                  </div>
                  <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-primary">
                    View details
                    <FiArrowUpRight size={14} aria-hidden />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
