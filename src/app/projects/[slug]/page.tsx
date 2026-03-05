import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiExternalLink, FiGlobe, FiLayers, FiZap } from "react-icons/fi";
import Button from "@/components/button/Button";
import projectsData from "@/app/data/projects.json";

type Technology = { name: string; logo?: string };
type Project = {
  name: string;
  slug: string;
  details: string;
  image_src: string;
  live_url: string;
  technologies?: Technology[];
};

const projects = projectsData as Project[];

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const heroAccent =
    slug === "knowledge-links-ai"
      ? ["#0ea5e9", "#6366f1"]
      : slug === "moeguide"
        ? ["#f59e0b", "#f472b6"]
        : slug === "suirikyou"
          ? ["#8b5cf6", "#22c55e"]
          : ["#10b981", "#0ea5e9"];

  return (
    <div className="bg-white text-slate-900">
      {/* Hero */ }
      <section
        id="project-detail-hero"
        className="relative isolate -mt-16 flex flex-col overflow-hidden bg-gradient-to-b from-black via-[#0b2f72] to-[#051331] text-white md:-mt-20"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at 22% 18%, rgba(88,116,168,0.28), transparent 32%), radial-gradient(circle at 78% 14%, rgba(34,197,94,0.18), transparent 30%), radial-gradient(circle at 72% 78%, rgba(14,165,233,0.16), transparent 32%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-45"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02), rgba(255,255,255,0.04))",
            backgroundSize: "240% 240%",
            animation: "gradient-shift 16s ease-in-out infinite",
          }}
        />

        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 pb-14 pt-24 sm:px-6 md:pb-16 md:pt-28">
          <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.28em] text-white/80">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white transition hover:border-white/40 hover:text-white"
            >
              <FiArrowLeft size={14} aria-hidden />
              Back
            </Link>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur">
              <FiLayers size={14} aria-hidden />
              Project
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="font-spaceGrotesk text-4xl font-semibold leading-tight sm:text-5xl md:text-[52px]">
              {project.name}
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-white/80">{project.details}</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Link href={project.live_url} target="_blank" rel="noopener noreferrer">
              <Button theme="white" className="px-6 py-2 text-sm font-semibold text-slate-900">
                Live <FiExternalLink className="inline-block align-middle" size={14} />
              </Button>
            </Link>
            <Link href="/contact">
              <Button theme="dark" className="px-6 py-2 text-sm font-semibold">
                Start a project
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview card */}
      <section className="relative -mt-12 pb-16 pt-6 sm:pt-10 md:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(88,116,168,0.08),transparent_28%),radial-gradient(circle_at_82%_14%,rgba(88,144,168,0.08),transparent_30%),radial-gradient(circle_at_70%_74%,rgba(88,116,168,0.08),transparent_28%)]" aria-hidden />
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_26px_80px_-48px_rgba(15,23,42,0.32)]">
            <div className="relative bg-gradient-to-r from-primary/5 via-white to-[#0ea5e9]/5 px-6 py-5 sm:px-8 sm:py-6">
              <div className="flex items-center gap-3 text-sm font-semibold text-primary">
                <FiGlobe size={16} aria-hidden />
                <span>{project.live_url}</span>
              </div>
            </div>
            <div className="grid gap-6 px-6 pb-8 pt-6 sm:px-8 sm:pt-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
              <div className="flex flex-col gap-4">
                <p className="text-lg font-semibold text-slate-900">What we built</p>
                <p className="text-base leading-relaxed text-slate-700">{project.details}</p>
                <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                  <p className="text-sm font-semibold text-slate-800">Outcome</p>
                  <p className="text-sm leading-relaxed text-slate-600">
                    Secure delivery with observability and user-centric UX. Reach out for a deeper case study deck.
                  </p>
                </div>
              </div>

              {/* Tech stack */}
              <div className="flex flex-col gap-3">
                <p className="text-lg font-semibold text-slate-900">Tech stack</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {(project.technologies ?? []).map((tech, idx) => (
                    <div
                      key={`${tech.name}-${idx}`}
                      className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-3 py-3 shadow-[0_18px_50px_-42px_rgba(15,23,42,0.28)]"
                    >
                      <div
                        className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-slate-200"
                        style={{
                          backgroundImage: tech.logo ? "none" : `linear-gradient(135deg, ${heroAccent[0]}22, ${heroAccent[1]}33)`,
                        }}
                      >
                        {tech.logo ? (
                          <Image
                            src={tech.logo}
                            alt={tech.name}
                            width={40}
                            height={40}
                            className="h-8 w-8 object-contain"
                          />
                        ) : (
                          <span className="text-sm font-semibold text-slate-700">{tech.name.slice(0, 2)}</span>
                        )}
                      </div>
                      <span className="text-sm font-semibold text-slate-800">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 border-t border-slate-100 px-6 py-5 sm:px-8">
              <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primaryBlueDark">
                <FiArrowLeft size={16} aria-hidden />
                Back to projects
              </Link>
              <Link href={project.live_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-primary">
                Live <FiExternalLink size={14} aria-hidden />
              </Link>
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-3 py-1 text-xs font-semibold text-white"
                style={{ backgroundImage: `linear-gradient(90deg, ${heroAccent[0]}, ${heroAccent[1]})` }}>
                <FiZap size={14} aria-hidden />
                Built with NDI
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
