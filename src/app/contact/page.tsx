import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SmoothScroll from "@/components/SmoothScroll";
import ContactFormClient from "@/components/ContactFormClient";

export const metadata: Metadata = {
  title: "Contact — GHC",
  description: "Get in touch with GHC. General enquiries, partnerships, press, and investor relations.",
};

export default function ContactPage() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <ScrollReveal />

      {/* Hero */}
      <section className="contact-hero">
        <div className="ct">
          <div className="ey rv">Get in touch</div>
          <h1 className="st rv d1">Let&apos;s talk.</h1>
          <p className="contact-hero-sub rv d2">
            Whether you&apos;re looking to partner, invest, or just want to say hello — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="contact-body">
        <div className="ct">
          <div className="contact-grid">
            <div className="contact-info rv">
              <h2>Reach us directly.</h2>
              <p>We respond to every enquiry personally. Choose the right channel below or fill out the form and we&apos;ll get back to you within 24 hours.</p>
              <div className="contact-channels">
                <div className="contact-ch">
                  <div className="contact-ch-label">General</div>
                  <div className="contact-ch-body">
                    <a href="mailto:hello@ghc.io">hello@ghc.io</a>
                    <p>Partnerships, collaborations, and general enquiries.</p>
                  </div>
                </div>
                <div className="contact-ch">
                  <div className="contact-ch-label">Investors</div>
                  <div className="contact-ch-body">
                    <a href="mailto:invest@ghc.io">invest@ghc.io</a>
                    <p>Investment opportunities and portal access requests.</p>
                  </div>
                </div>
                <div className="contact-ch">
                  <div className="contact-ch-label">Press</div>
                  <div className="contact-ch-body">
                    <a href="mailto:press@ghc.io">press@ghc.io</a>
                    <p>Media enquiries, interviews, and press assets.</p>
                  </div>
                </div>
                <div className="contact-ch">
                  <div className="contact-ch-label">Careers</div>
                  <div className="contact-ch-body">
                    <a href="mailto:careers@ghc.io">careers@ghc.io</a>
                    <p>Job applications and working with us.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-wrap rv d1">
              <h3>Send us a message</h3>
              <p>We&apos;ll get back to you within 24 hours.</p>
              <ContactFormClient />
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <div className="contact-map">
        <div className="contact-map-inner">
          <div className="contact-loc rv">
            <div className="contact-loc-label">Headquarters</div>
            <h4>Collingwood, Melbourne</h4>
            <p>Our home base in VIC. Product, engineering, and operations are run from here.</p>
          </div>
          <div className="contact-loc rv d1">
            <div className="contact-loc-label">Venue</div>
            <h4>Platform One Melbourne</h4>
            <p>Banana Alley Vaults<br />Melbourne VIC 3000</p>
          </div>
          <div className="contact-loc rv d2">
            <div className="contact-loc-label">Global</div>
            <h4>Remote Team</h4>
            <p>Our team spans 40+ countries, building products for every market on earth.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section style={{ background: "var(--bg)", textAlign: "center" }}>
        <div className="ct">
          <h2 className="st rv">Prefer a quick chat?</h2>
          <p className="rv d1" style={{ fontSize: 18, color: "var(--muted)", lineHeight: 1.78, margin: "24px auto 40px", maxWidth: 480 }}>
            For something more informal, drop us an email and we&apos;ll set up a call.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }} className="rv d2">
            <a href="mailto:hello@ghc.io" className="btn btn-s">Email us</a>
            <Link href="/investors" className="btn btn-o">Investor access &rarr;</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
