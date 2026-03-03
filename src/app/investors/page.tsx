import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SmoothScroll from "@/components/SmoothScroll";
import InvestorsFormClient from "@/components/InvestorsFormClient";

export const metadata: Metadata = {
  title: "Investors — GHC",
  description: "Request access to GHC\u2019s investor portal. Exclusive product updates, financial highlights, and co-investment opportunities.",
};

export default function InvestorsPage() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <ScrollReveal />

      {/* Hero */}
      <section className="inv-hero">
        <div className="ct">
          <div className="inv-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
            Private Access
          </div>
          <h1 className="rv">For those building<br />alongside us.</h1>
          <p className="inv-hero-sub rv d1">
            Access exclusive product updates, financial highlights, and early opportunities. For serious investors and qualified partners only.
          </p>
          <div className="inv-hero-acts rv d2">
            <Link href="/login" className="btn btn-o" style={{ minWidth: 180, justifyContent: "center" }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
              Sign in to Portal
            </Link>
            <Link href="/signup" className="btn btn-s" style={{ minWidth: 180, justifyContent: "center" }}>Sign up</Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="inv-feats-section">
        <div className="ct">
          <div className="inv-feats-grid">
            <div className="inv-f-card rv">
              <div className="inv-f-num">01</div>
              <h3>Quarterly Updates</h3>
              <p>Detailed product and financial updates every quarter, covering all portfolio companies and key milestones.</p>
            </div>
            <div className="inv-f-card rv d1">
              <div className="inv-f-num">02</div>
              <h3>Early Access</h3>
              <p>Be the first to know about new platform launches, product developments, and strategic pivots before anyone else.</p>
            </div>
            <div className="inv-f-card rv d2">
              <div className="inv-f-num">03</div>
              <h3>Direct Line</h3>
              <p>Direct access to the founding team. No gatekeepers, no layers — real conversations about what we&apos;re building.</p>
            </div>
            <div className="inv-f-card rv d3">
              <div className="inv-f-num">04</div>
              <h3>Co-Investment</h3>
              <p>Access to the co-investment pipeline across our portfolio of ventures. Get in early on what matters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Request Access Form */}
      <section className="investors" id="apply">
        <div className="ct">
          <div className="inv-g">
            <div className="inv-l">
              <div>
                <div className="ey rv">Investor Portal</div>
                <h2 className="st rv d1">Request access.</h2>
                <p className="rv d2">We review every application personally and respond within 48 hours. Your information is kept strictly confidential.</p>
              </div>
              <div className="inv-feats rv d3">
                <div className="inv-feat">Quarterly product &amp; financial updates</div>
                <div className="inv-feat">Early access to new platform launches</div>
                <div className="inv-feat">Direct line to the founding team</div>
                <div className="inv-feat">Co-investment pipeline access</div>
              </div>
            </div>
            <InvestorsFormClient />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
