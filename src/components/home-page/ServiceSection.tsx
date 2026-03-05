import Link from "next/link";
import { FiCode, FiCpu, FiDatabase, FiMessageSquare, FiShield, FiZap } from "react-icons/fi";
import servicesData, { ServiceDetail, ServiceIconKey } from "@/app/data/services";

const iconMap: Record<ServiceIconKey, typeof FiCode> = {
  FiCode,
  FiCpu,
  FiShield,
  FiDatabase,
  FiMessageSquare,
};

const services: ServiceDetail[] = servicesData.filter((service) => service.featuredOnHome !== false);

const ServiceSection = () => {
  return (
    <section
      id="services"
      className="relative isolate overflow-hidden text-slate-900"
      style={{
        backgroundImage:
          "linear-gradient(160deg, rgba(88,144,168,0.82), rgba(88,116,168,0.88)), url('https://images.unsplash.com/photo-1552960562-daf630e9278b?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40" aria-hidden />
      <div className="absolute inset-0 mix-blend-screen opacity-30" aria-hidden style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12), transparent 32%), radial-gradient(circle at 80% 15%, rgba(255,255,255,0.1), transparent 30%), radial-gradient(circle at 68% 75%, rgba(255,255,255,0.12), transparent 32%)" }} />

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 sm:px-6 md:gap-10 md:px-10 md:py-20">
        <div className="flex flex-col items-center gap-3 text-center text-white animate-[home-fade-up_0.85s_ease_both]">
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/70">Our Services</p>
          <h2 className="font-spaceGrotesk text-3xl font-semibold leading-tight sm:text-4xl">
            Solution-focused delivery from design to operations.
          </h2>
          <p className="max-w-3xl text-base text-white/80">
            We partner end-to-end—strategy, build, and managed support—so you ship secure, intelligent products faster.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon];
            return (
            <article
              key={service.slug}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-white text-slate-900 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.6)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_40px_110px_-65px_rgba(0,0,0,0.65)]"
              style={{ animation: "home-fade-up 0.9s ease both", animationDelay: `${idx * 0.06}s` }}
            >
              <div
                className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 20%, rgba(88,144,168,0.16), transparent 45%), radial-gradient(circle at 80% 70%, rgba(88,116,168,0.14), transparent 42%)",
                }}
                aria-hidden
              />
              <div className="relative flex flex-1 flex-col gap-4 px-5 pb-5 pt-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5890a8]/12 text-[#5890a8] ring-1 ring-[#5890a8]/25 shadow-inner">
                  <Icon size={22} aria-hidden />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 min-h-[90px]">
                    {service.summary}
                  </p>
                </div>
                <div className="mt-auto">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-[#5890a8]/45 px-4 py-2 text-sm font-semibold text-[#5890a8] transition duration-200 hover:-translate-y-[2px] hover:bg-[#5890a8]/12"
                  >
                    View details
                    <FiZap size={14} aria-hidden />
                  </Link>
                </div>
              </div>
            </article>
          );
          })}

          <article className="group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-[#5890a8] to-[#7fb7cc] text-white shadow-[0_30px_90px_-60px_rgba(0,0,0,0.65)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_40px_120px_-70px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.16),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.18),transparent_42%)]" aria-hidden />
            <div className="relative flex flex-col items-center gap-3 px-6 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-white/80">View</p>
              <h3 className="text-2xl font-semibold leading-tight">All Services</h3>
              <Link
                href="/services"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#5890a8] shadow-[0_14px_40px_-20px_rgba(0,0,0,0.35)] transition duration-200 hover:-translate-y-[2px]"
              >
                view more
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
