import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SmoothScroll from "@/components/SmoothScroll";
import InterestButton from "@/components/InterestButton";
import CaseStudyCTA from "@/components/CaseStudyCTA";
import { caseStudies } from "@/data/case-studies";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies[slug];
  if (!cs) return { title: "Not Found" };
  return {
    title: `${cs.slug.charAt(0).toUpperCase() + cs.slug.slice(1)} \u2014 GHC`,
    description: cs.about.slice(0, 160),
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const cs = caseStudies[slug];
  if (!cs) notFound();

  const productName = cs.aboutTitle.replace("About ", "");

  return (
    <>
      <SmoothScroll />
      <Header />
      <ScrollReveal />

      {/* HEADER */}
      <div className="cs-header">
        <div className="ct">
          <div className="ey rv">{cs.subtitle}</div>
          {cs.logo && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={cs.logo}
              alt={`${cs.slug} logo`}
              className="rv"
              style={{ height: 48, width: "auto", display: "block", margin: "24px 0 20px", opacity: 0.9 }}
            />
          )}
          <h1 className="rv d1" style={{
            fontFamily: "var(--ff)", fontWeight: 200,
            fontSize: "clamp(40px, 6vw, 84px)", letterSpacing: "-3px",
            lineHeight: ".9", paddingBottom: ".06em", marginBottom: 36, whiteSpace: "pre-line",
          }}>{cs.title}</h1>
          <div className="rv d2" style={{
            display: "flex", alignItems: "center", gap: 32,
            padding: "28px 0", borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)", flexWrap: "wrap",
          }}>
            <span style={{ fontFamily: "var(--ff)", fontSize: 11, fontWeight: 300, color: "var(--muted2)", letterSpacing: 1 }}>
              Product<span style={{ color: "var(--text)", marginLeft: 8 }}>{productName}</span>
            </span>
            <span style={{ fontFamily: "var(--ff)", fontSize: 11, fontWeight: 300, color: "var(--muted2)", letterSpacing: 1 }}>
              Category<span style={{ color: "var(--text)", marginLeft: 8 }}>{cs.category}</span>
            </span>
            <span style={{ fontFamily: "var(--ff)", fontSize: 11, fontWeight: 300, color: "var(--muted2)", letterSpacing: 1 }}>
              URL<span style={{ color: "var(--text)", marginLeft: 8 }}>
                <a href={cs.url} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text)", textDecoration: "none" }}>{cs.urlDisplay}</a>
              </span>
            </span>
            <span style={{ fontFamily: "var(--ff)", fontSize: 11, fontWeight: 300, color: "var(--muted2)", letterSpacing: 1 }}>
              Built by<span style={{ color: "var(--text)", marginLeft: 8 }}>GHC</span>
            </span>
          </div>
        </div>
      </div>

      {/* HERO IMAGE */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={cs.heroImage}
        alt={`${cs.slug} hero`}
        style={{ width: "100%", aspectRatio: "16/7", objectFit: "cover", display: "block", borderBottom: "1px solid var(--border)" }}
      />

      {/* SUMMARY */}
      <div className="cs-section cs-section-alt">
        <div className="ct">
          <div className="cs-summary-grid">
            <div className="rv">
              <h2 style={{ fontFamily: "var(--ff)", fontWeight: 200, fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-2px", marginBottom: 24 }}>{cs.aboutTitle}</h2>
              <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.9, marginBottom: 20 }}>{cs.about}</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
                <a href={cs.url} target="_blank" rel="noopener noreferrer" className="btn btn-o" style={{ display: "inline-flex" }}>Visit {cs.urlDisplay} &rarr;</a>
                <InterestButton projectSlug={cs.slug} projectName={productName} />
              </div>
            </div>
            <div className="rv d1" style={{
              display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1,
              background: "var(--border)", border: "1px solid var(--border)", borderRadius: 2, overflow: "hidden",
            }}>
              {cs.stats.map((s) => (
                <div key={s.label} style={{ background: "var(--bg)", padding: "24px 20px" }}>
                  <div style={{ fontFamily: "var(--ff)", fontWeight: 200, fontSize: "clamp(28px, 4vw, 40px)", letterSpacing: "-2px", lineHeight: 1, color: s.color, marginBottom: 6 }}>{s.value}</div>
                  <div style={{ fontFamily: "var(--ff)", fontSize: 10, fontWeight: 300, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--muted2)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="cs-section" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="ct">
          <div className="cs-body-grid">
            <div className="rv">
              <h3 style={{ fontFamily: "var(--ff)", fontWeight: 300, fontSize: "clamp(22px, 3vw, 32px)", letterSpacing: "-1px", marginBottom: 20 }}>The challenge</h3>
              <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.88 }}>{cs.challenge}</p>
            </div>
            <div className="rv d1">
              <h3 style={{ fontFamily: "var(--ff)", fontWeight: 300, fontSize: "clamp(22px, 3vw, 32px)", letterSpacing: "-1px", marginBottom: 20 }}>Our solution</h3>
              <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.88 }}>{cs.solution}</p>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGES */}
      <div className="cs-images-grid">
        {cs.images.map((img) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img key={img.alt} src={img.src} alt={img.alt} style={{ width: "100%", aspectRatio: "3/2", objectFit: "cover", display: "block" }} loading="lazy" />
        ))}
      </div>

      {/* MID-PAGE INTEREST BANNER */}
      <div className="cs-mid-banner">
        <div className="ct">
          <div className="cs-mid-banner-inner rv">
            <div className="cs-mid-banner-copy">
              <h3 className="cs-mid-banner-title">Interested in investing in {productName}?</h3>
              <p className="cs-mid-banner-desc">Get exclusive investor access to updates, financials, and co-investment opportunities.</p>
            </div>
            <div className="cs-mid-banner-action">
              <InterestButton projectSlug={cs.slug} projectName={productName} />
            </div>
          </div>
        </div>
      </div>

      {/* OUTCOMES */}
      <div className="cs-section cs-section-alt" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="ct">
          <div className="cs-outcomes-grid">
            <div className="rv">
              <h2 style={{ fontFamily: "var(--ff)", fontWeight: 200, fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-2px" }}>Key outcomes &amp; results.</h2>
            </div>
            <div>
              {cs.outcomes.map((o, i) => (
                <div key={i} className={`rv d${i + 1}`} style={{
                  display: "flex", alignItems: "flex-start", gap: 16, padding: "20px 0",
                  borderBottom: "1px solid var(--border)",
                  ...(i === 0 ? { borderTop: "1px solid var(--border)" } : {}),
                }}>
                  <div style={{ fontFamily: "var(--ff)", fontSize: 9, fontWeight: 300, color: "var(--muted2)", flexShrink: 0, paddingTop: 3, width: 24 }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.78 }}>{o}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TECH */}
      <div className="cs-section cs-section-sm" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="ct">
          <div className="rv" style={{ display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--ff)", fontSize: 10, fontWeight: 300, letterSpacing: 2, textTransform: "uppercase", color: "var(--muted2)", whiteSpace: "nowrap" }}>Built with</span>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {cs.techStack.map((t) => (
                <span key={t} style={{
                  fontFamily: "var(--ff)", fontSize: 10, fontWeight: 300, letterSpacing: ".5px",
                  padding: "5px 12px", border: "1px solid var(--border)", borderRadius: 2, color: "var(--muted2)",
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM CTA — Apply / Register Interest Form */}
      <CaseStudyCTA slug={cs.slug} productName={productName} />

      <Footer />
    </>
  );
}
