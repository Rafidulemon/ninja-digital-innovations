"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { FiArrowLeft, FiCheckCircle, FiClipboard, FiMail, FiMapPin, FiUser } from "react-icons/fi";
import Button from "@/components/button/Button";

type Job = {
  id: string;
  title: string;
  summary: string;
  description: string;
  location: string;
  type: string;
  tags: string[];
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  perks: string[];
};

const applicationSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  location: z.string().min(2, "Location is required"),
  phone: z
    .string()
    .min(7, "Phone is required"),
  linkedin: z.string().url("Enter a valid URL").optional().or(z.literal("")),
  portfolio: z.string().url("Enter a valid URL").optional().or(z.literal("")),
  resumeFile: z.custom<File>((val) => val instanceof File && val.size > 0, "Please upload your resume"),
  coverLetter: z.string().min(30, "Share a short note (30+ characters)"),
  consent: z.boolean().refine((val) => val, "Please confirm consent"),
});

const ApplyForm = ({ job }: { job: Job }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    location: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    resumeFile: null as File | null,
    coverLetter: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const relatedPerks = useMemo(() => job.perks, [job.perks]);

  const handleChange = (field: keyof typeof formData, value: string | boolean | File | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting" || status === "success") return;
    setStatus("submitting");
    const parsed = applicationSchema.safeParse(formData);
    if (!parsed.success) {
      const formErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const path = issue.path[0] as string;
        formErrors[path] = issue.message;
      });
      setErrors(formErrors);
      setStatus("idle");
      return;
    }

    setErrors({});
    await new Promise((resolve) => setTimeout(resolve, 500));
    setStatus("success");
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      router.push("/career");
    }, 1800);
  };

  return (
    <div className="bg-white text-slate-900">
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="flex items-center gap-3 rounded-2xl bg-white px-6 py-5 text-slate-900 shadow-2xl">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <FiCheckCircle size={20} aria-hidden />
            </div>
            <div className="flex flex-col">
              <p className="text-base font-semibold">We received your application</p>
              <p className="text-sm text-slate-600">Redirecting you to Careers…</p>
            </div>
          </div>
        </div>
      )}
      {/* Header */}
      <section className="relative isolate -mt-16 overflow-hidden bg-gradient-to-b from-black via-[#0b2f72] to-[#051331] text-white md:-mt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-45"
          style={{
            background:
              "radial-gradient(circle at 18% 22%, rgba(88,116,168,0.32), transparent 32%), radial-gradient(circle at 82% 12%, rgba(34,197,94,0.22), transparent 30%), radial-gradient(circle at 70% 68%, rgba(14,165,233,0.18), transparent 32%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-35"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02), rgba(255,255,255,0.04))",
            backgroundSize: "220% 220%",
            animation: "gradient-shift 16s ease-in-out infinite",
          }}
        />

        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 pb-16 pt-24 sm:px-6 md:pb-20 md:pt-28">
          <div className="flex flex-wrap items-center gap-3 text-[12px] uppercase tracking-[0.28em] text-white/80">
            <Link
              href="/career#roles"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white transition hover:border-white/40 hover:text-white"
            >
              <FiArrowLeft size={14} aria-hidden /> Back
            </Link>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur">
              {job.type}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur">
              {job.location}
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/70">Apply</p>
            <h1 className="font-spaceGrotesk text-4xl font-semibold leading-tight sm:text-5xl md:text-[52px]">
              {job.title}
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-white/80">{job.summary}</p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="relative -mt-12 bg-white pb-16 pt-8 sm:pt-12 md:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(88,116,168,0.08),transparent_28%),radial-gradient(circle_at_82%_14%,rgba(88,144,168,0.08),transparent_30%),radial-gradient(circle_at_70%_74%,rgba(88,116,168,0.08),transparent_28%)]" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 md:px-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Job description */}
          <div className="flex flex-col gap-6 rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_26px_90px_-52px_rgba(15,23,42,0.32)]">
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary">
                <FiMapPin size={14} aria-hidden /> {job.location}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                {job.type}
              </span>
            </div>
            <p className="text-base leading-relaxed text-slate-700">{job.description}</p>

            <JobList title="Responsibilities" items={job.responsibilities} />
            <JobList title="Requirements" items={job.requirements} />
            {job.niceToHave && job.niceToHave.length > 0 && (
              <JobList title="Nice to have" items={job.niceToHave} subtle />
            )}

            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
              <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Perks & benefits</p>
              <JobList title="" items={relatedPerks} subtle />
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_26px_90px_-52px_rgba(15,23,42,0.32)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Application</p>
                <h3 className="text-xl font-semibold text-slate-900">Tell us about you</h3>
                <p className="text-sm text-slate-600">We respond to every application. Required fields are marked *</p>
              </div>
              {status === "success" && (
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  <FiCheckCircle size={14} aria-hidden /> Submitted
                </span>
              )}
            </div>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  label="Full name"
                  required
                  value={formData.fullName}
                  placeholder="Rakib Hasan"
                  onChange={(val) => handleChange("fullName", val)}
                  error={errors.fullName}
                  icon={<FiUser size={16} aria-hidden />}
                />
                <FormField
                  label="Email"
                  required
                  value={formData.email}
                  placeholder="rakib.hasan@example.com"
                  onChange={(val) => handleChange("email", val)}
                  error={errors.email}
                  type="email"
                  icon={<FiMail size={16} aria-hidden />}
                />
              </div>

              <FormField
                label="Location"
                required
                value={formData.location}
                placeholder="Dhaka, Bangladesh"
                onChange={(val) => handleChange("location", val)}
                error={errors.location}
                icon={<FiMapPin size={16} aria-hidden />}
              />

              <FormField
                label="Phone"
                required
                value={formData.phone}
                placeholder="+8801XXXXXXXXX"
                onChange={(val) => handleChange("phone", val)}
                error={errors.phone}
                type="tel"
              />

              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  label="LinkedIn"
                  value={formData.linkedin}
                  placeholder="https://linkedin.com/in/rakib-hasan"
                  onChange={(val) => handleChange("linkedin", val)}
                  error={errors.linkedin}
                />
                <FormField
                  label="Portfolio / GitHub"
                  value={formData.portfolio}
                  placeholder="https://github.com/rakibhasan"
                  onChange={(val) => handleChange("portfolio", val)}
                  error={errors.portfolio}
                />
              </div>

              <ResumeField
                label="Resume"
                required
                onFile={(file) => handleChange("resumeFile", file)}
                error={errors.resumeFile}
                currentFile={formData.resumeFile}
              />

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-800">
                  Cover letter <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.coverLetter}
                  onChange={(e) => handleChange("coverLetter", e.target.value)}
                  placeholder="Share context on your fit and what you want to build."
                  className={`h-32 rounded-2xl border px-3 py-3 text-sm text-slate-800 outline-none transition focus:border-primary/60 focus:bg-white ${
                    errors.coverLetter ? "border-red-300" : "border-slate-200 bg-slate-50"
                  }`}
                />
                {errors.coverLetter && <p className="text-xs text-red-600">{errors.coverLetter}</p>}
              </div>

              <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => handleChange("consent", e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                />
                <span>
                  <span className="text-red-500">*</span>{" "}
                  I agree to let NDI store my application for the purpose of this role and related opportunities.
                  {errors.consent && <p className="text-xs text-red-600">{errors.consent}</p>}
                </span>
              </label>

              <div className="flex flex-wrap items-center gap-3">
                <Button
                  type="submit"
                  className="px-6 py-2 text-sm font-semibold"
                  theme="primary"
                  disabled={status !== "idle"}
                >
                  {status === "submitting" ? "Submitting…" : status === "success" ? "Submitted" : "Submit application"}
                </Button>
                <Link href="/career" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  <FiArrowLeft size={14} aria-hidden />
                  Back to roles
                </Link>
                {status === "success" && (
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600">
                    <FiClipboard size={14} aria-hidden /> We received your application
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

const JobList = ({ title, items, subtle }: { title: string; items: string[]; subtle?: boolean }) => (
  <div className="space-y-3">
    <p className={`text-[11px] uppercase tracking-[0.24em] ${subtle ? "text-slate-500" : "text-slate-600"}`}>{title}</p>
    <ul className="grid gap-2 list-disc list-inside sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="text-sm text-slate-700 marker:text-primary">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const FormField = ({ label, value, onChange, placeholder, error, type = "text", icon, required }: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  error?: string;
  type?: string;
  icon?: ReactNode;
  required?: boolean;
}) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-semibold text-slate-800">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div
      className={`flex items-center gap-2 rounded-2xl border px-3 py-2 ${
        error ? "border-red-300 bg-red-50" : "border-slate-200 bg-slate-50"
      } focus-within:border-primary/60 focus-within:bg-white`}
    >
      {icon && <span className="text-slate-500">{icon}</span>}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-slate-800 outline-none"
      />
    </div>
    {error && <p className="text-xs text-red-600">{error}</p>}
  </div>
);

const ResumeField = ({
  label,
  currentFile,
  onFile,
  error,
  required,
}: {
  label: string;
  currentFile: File | null;
  onFile: (file: File | null) => void;
  error?: string;
  required?: boolean;
}) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-semibold text-slate-800">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div
      className={`flex items-center justify-between gap-3 rounded-2xl border px-3 py-3 ${
        error ? "border-red-300 bg-red-50" : "border-slate-200 bg-slate-50"
      } focus-within:border-primary/60 focus-within:bg-white`}
    >
      <input
        type="file"
        accept=".pdf,.doc,.docx,.txt"
        onChange={(e) => onFile(e.target.files?.[0] ?? null)}
        className="w-full text-sm text-slate-800 file:mr-3 file:cursor-pointer file:rounded-lg file:border-0 file:bg-primary/10 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-primary focus:outline-none"
      />
      {currentFile && <span className="text-xs text-slate-600 truncate">{currentFile.name}</span>}
    </div>
    {error && <p className="text-xs text-red-600">{error}</p>}
  </div>
);

export default ApplyForm;
