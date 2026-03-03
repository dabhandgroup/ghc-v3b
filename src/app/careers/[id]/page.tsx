import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SmoothScroll from "@/components/SmoothScroll";
import { jobs } from "@/data/jobs";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return jobs.map((job) => ({ id: job.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);
  if (!job) return { title: "Job Not Found — GHC" };
  return {
    title: `${job.title} — Careers — GHC`,
    description: job.desc,
  };
}

export default async function JobPage({ params }: Props) {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);
  if (!job) notFound();

  return (
    <>
      <SmoothScroll />
      <Header />
      <ScrollReveal />

      <div className="jd-page">
        <div className="ct">
          <Link href="/careers" className="jd-back rv">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to all roles
          </Link>

          <div className="jd-page-ey rv d1">{job.dept}</div>
          <h1 className="jd-page-ti rv d1">{job.title}</h1>
          <div className="jd-page-tags rv d2">
            {job.tags.map((t) => <span key={t} className="tg">{t}</span>)}
          </div>

          <div className="jd-page-body rv d2">
            <h3>About the role</h3>
            <p>{job.about}</p>

            <h3>Responsibilities</h3>
            <ul>{job.resp.map((r) => <li key={r}>{r}</li>)}</ul>

            <h3>Requirements</h3>
            <ul>{job.reqs.map((r) => <li key={r}>{r}</li>)}</ul>

            <h3>Compensation</h3>
            <p>{job.comp}</p>
          </div>

          <div className="jd-page-form rv d3" id="apply">
            <h3>Apply for this role</h3>
            <form
              action="https://usebasin.com/f/2a3b4c5d6e7f"
              method="POST"
              encType="multipart/form-data"
            >
              <input type="hidden" name="_subject" value={`Application: ${job.title}`} />
              <input type="hidden" name="role" value={job.title} />
              <div className="jd-form-row">
                <div className="jd-form-group">
                  <label htmlFor="name">Full name *</label>
                  <input type="text" id="name" name="name" required placeholder="Your full name" />
                </div>
                <div className="jd-form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required placeholder="you@example.com" />
                </div>
              </div>
              <div className="jd-form-row">
                <div className="jd-form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" placeholder="+61 4XX XXX XXX" />
                </div>
                <div className="jd-form-group">
                  <label htmlFor="linkedin">LinkedIn / Portfolio</label>
                  <input type="url" id="linkedin" name="linkedin" placeholder="https://" />
                </div>
              </div>
              <div className="jd-form-group">
                <label htmlFor="cover">Cover note</label>
                <textarea id="cover" name="cover_note" rows={4} placeholder="Tell us why you&rsquo;re a great fit for this role..." />
              </div>
              <div className="jd-form-group">
                <label htmlFor="cv">CV / Resume *</label>
                <input type="file" id="cv" name="cv" required accept=".pdf,.doc,.docx" />
                <span className="jd-form-hint">PDF, DOC, or DOCX (max 10MB)</span>
              </div>
              <button type="submit" className="btn btn-accent">
                Submit application &rarr;
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
