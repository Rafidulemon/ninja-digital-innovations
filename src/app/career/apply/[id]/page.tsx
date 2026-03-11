import { notFound } from "next/navigation";
import jobsData from "@/app/data/jobs.json";
import ApplyForm from "../ApplyForm";

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

const jobs = jobsData as Job[];

export default async function ApplyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = jobs.find((item) => item.id === id);
  if (!job) return notFound();
  return <ApplyForm job={job} />;
}

export function generateStaticParams() {
  return jobs.map((job) => ({ id: job.id }));
}
