import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Press — GHC",
  description: "Media resources, press releases, and enquiries for GHC and its portfolio of ventures.",
};

const RELEASES = [
  {
    date: "January 2026",
    title: "Profiles.io Surpasses 500 Million Global Records",
    excerpt: "The AI-powered data intelligence platform hits a milestone of 500M+ searchable records, cementing its position as the world\u2019s largest database.",
  },
  {
    date: "December 2025",
    title: "Wardrobe Expands to 40+ Countries",
    excerpt: "The world\u2019s first peer-to-peer fashion rental marketplace extends its global footprint, making circular fashion accessible across four continents.",
  },
  {
    date: "November 2025",
    title: "Platform One Named Melbourne\u2019s Top Nightclub",
    excerpt: "Located in the historic Banana Alley Vaults, Platform One earns the city\u2019s top venue award with three rooms and world-class production.",
  },
  {
    date: "October 2025",
    title: "Royale Secures Gaming Licence for Global Expansion",
    excerpt: "Next-generation provably fair online gaming platform secures regulatory approvals to expand operations internationally.",
  },
];

export default function PressPage() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <ScrollReveal />

      {/* Hero */}
      <section className="press-hero">
        <div className="ct">
          <div className="ey rv">Press &amp; Media</div>
          <h1 className="st rv d1">In the news.</h1>
          <p className="press-hero-sub rv d2">
            For press enquiries, interview requests, or media assets, reach out to our communications team.
          </p>
          <a href="mailto:press@ghc.io" className="btn btn-s rv d3">
            press@ghc.io &rarr;
          </a>
        </div>
      </section>

      {/* Press releases */}
      <section className="press-releases">
        <div className="ct">
          <div className="ey rv">Latest releases</div>
          <div className="press-list">
            {RELEASES.map((r, i) => (
              <div key={r.title} className={`press-item rv${i > 0 ? ` d${Math.min(i, 4)}` : ""}`}>
                <div className="press-date">{r.date}</div>
                <div className="press-body">
                  <h3>{r.title}</h3>
                  <p>{r.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Assets */}
      <section className="press-assets">
        <div className="ct">
          <div className="press-assets-grid">
            <div className="press-asset-info rv">
              <div className="ey">Brand assets</div>
              <h2 className="st">Media kit.</h2>
              <p>Download logos, brand guidelines, and high-resolution images for use in publications and media coverage.</p>
              <a href="mailto:press@ghc.io" className="btn btn-o" style={{ display: "inline-flex", marginTop: 12 }}>
                Request media kit &rarr;
              </a>
            </div>
            <div className="press-asset-card rv d1">
              <div className="press-asset-item">
                <div className="press-asset-label">Logos</div>
                <p>Primary logo, icon mark, mono and colour variants in SVG and PNG formats.</p>
              </div>
              <div className="press-asset-item">
                <div className="press-asset-label">Photography</div>
                <p>High-resolution images of our team, venues, and products for editorial use.</p>
              </div>
              <div className="press-asset-item">
                <div className="press-asset-label">Brand guidelines</div>
                <p>Colour palette, typography, tone of voice, and usage guidelines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="press-cta">
        <div className="ct" style={{ textAlign: "center" }}>
          <h2 className="st rv">Got a story?</h2>
          <p className="rv d1" style={{ fontSize: 18, color: "var(--muted)", lineHeight: 1.78, margin: "24px auto 40px", maxWidth: 480 }}>
            We&apos;re always happy to talk about what we&apos;re building. Get in touch with our press team.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }} className="rv d2">
            <a href="mailto:press@ghc.io" className="btn btn-s">Email press team</a>
            <Link href="/contact" className="btn btn-o">General contact &rarr;</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
