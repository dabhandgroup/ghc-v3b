import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SmoothScroll from "@/components/SmoothScroll";
import CareersClient from "@/components/CareersClient";

export const metadata: Metadata = {
  title: "Careers \u2014 GHC",
  description: "Join GHC and build the next wave of entertainment, data, fashion, and gaming products.",
};

export default function CareersPage() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <ScrollReveal />

      {/* PAGE HEADER */}
      <div className="ph" style={{
        padding: "160px 44px 80px", borderBottom: "1px solid var(--border)",
      }}>
        <div className="ct">
          <div className="ey rv">Work with us</div>
          <h1 className="rv d1" style={{
            fontFamily: "var(--ff)", fontWeight: 200,
            fontSize: "clamp(48px, 7vw, 96px)", letterSpacing: "-3px",
            lineHeight: ".92", marginBottom: 28, paddingBottom: ".06em",
          }}>
            Build the<br />next wave.
          </h1>
          <p className="rv d2" style={{
            fontSize: 17, color: "var(--muted)", maxWidth: 560, lineHeight: 1.88,
          }}>
            We&apos;re a small, relentlessly ambitious team shipping products that redefine industries. If you want to do the best work of your career, you&apos;re in the right place.
          </p>
        </div>
      </div>

      <CareersClient />

      {/* PERKS */}
      <div className="perks" style={{
        padding: "80px 44px", background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
      }}>
        <div className="ct">
          <h2 className="rv" style={{
            fontFamily: "var(--ff)", fontWeight: 200,
            fontSize: "clamp(32px, 4vw, 54px)", letterSpacing: "-2px", marginBottom: 52,
          }}>
            Why GHC?
          </h2>
          <div className="pg">
            {[
              { icon: "\ud83d\udcb0", title: "Equity from day one", desc: "Every team member receives equity. We\u2019re building something big and everyone should benefit from that." },
              { icon: "\ud83c\udf0f", title: "Fully remote-first", desc: "Work from anywhere. We have team members across 20+ countries and run async-first operations." },
              { icon: "\ud83d\ude80", title: "Ship at speed", desc: "No bureaucracy. Small teams with full ownership. Your work ships to users in days, not quarters." },
              { icon: "\ud83c\udfd6\ufe0f", title: "Unlimited leave", desc: "Take the time you need. We trust our team to deliver and to look after themselves." },
              { icon: "\ud83d\udcda", title: "Learning budget", desc: "$3,000 AUD annually for courses, conferences, books, and anything that makes you better at your craft." },
              { icon: "\u26a1", title: "Top-spec equipment", desc: "MacBook Pro, external display, and any peripherals you need. We invest in your setup so you can do your best work." },
            ].map((perk, i) => (
              <div key={perk.title} className={`pk rv${i > 0 ? ` d${Math.min(i, 3)}` : ""}`} style={{
                background: "var(--bg)", padding: "36px 32px",
              }}>
                <div style={{ fontSize: 22, marginBottom: 16 }}>{perk.icon}</div>
                <h4 style={{
                  fontFamily: "var(--ff)", fontWeight: 400, fontSize: 14,
                  marginBottom: 10, letterSpacing: "-.2px",
                }}>{perk.title}</h4>
                <p style={{ fontSize: "13.5px", color: "var(--muted)", lineHeight: 1.72 }}>{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* INVESTOR CTA */}
      <section className="cta-section">
        <div className="cta-in">
          <div className="ey rv" style={{ justifyContent: "center", margin: "0 auto 20px", width: "fit-content" }}>Invest with us</div>
          <h2 className="st rv d1">Back the next wave.</h2>
          <p className="rv d2">Get exclusive access to our portfolio, co-investment pipeline, and direct line to the founding team.</p>
          <div className="cta-acts rv d3">
            <Link href="/investors" className="btn btn-s">Investor access</Link>
            <Link href="/contact" className="btn btn-o">Direct enquiry &rarr;</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
