import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SmoothScroll from "@/components/SmoothScroll";
import ComponentsFormDemo from "@/components/ComponentsFormDemo";
import LogoFull from "@/components/LogoFull";
import {
  ProfilesArt,
  WardrobeArt,
  RoyaleArt,
  GreatGamingArt,
} from "@/components/ProductArt";

export const metadata: Metadata = {
  title: "Components — GHC",
  description: "GHC component library reference.",
};

export default function ComponentsPage() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <ScrollReveal />

      <div style={{ padding: "140px 44px 0", background: "var(--bg)" }}>
        <div className="ct">
          <div className="ey rv">Reference</div>
          <h1 className="rv d1" style={{
            fontFamily: "var(--ff)", fontWeight: 200,
            fontSize: "clamp(36px, 5vw, 64px)", letterSpacing: "-2px",
            lineHeight: ".95", marginBottom: 16,
          }}>Component Library</h1>
          <p className="rv d2" style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.8, maxWidth: 560, marginBottom: 56 }}>
            All reusable UI components used across the GHC platform. See also the{" "}
            <Link href="/style-guide" style={{ color: "var(--text)", textDecoration: "underline" }}>style guide</Link>.
          </p>
        </div>
      </div>

      {/* ═══ HERO SECTION ═══ */}
      <section style={{ padding: "64px 44px", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div className="ct">
          <div className="ey rv" style={{ marginBottom: 12 }}>Hero Section</div>
          <p className="rv d1" style={{ fontSize: 13, color: "var(--muted2)", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
            Full-viewport hero with video background, gradient vignette overlay, animated headline, subtitle, CTA buttons, and scroll indicator. Used on the homepage.
          </p>
          <div className="comp-hero-preview rv d2">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="https://platformone.com.au/wp-content/uploads/2024/05/IMG_1696-jpg.webp"
            >
              <source src="/assets/platformone-hero.mp4" type="video/mp4" />
            </video>
            <div className="hero-vig" />
            <div className="hero-body">
              <h1>Making Waves.</h1>
              <p>Entertainment, data, fashion, gaming, nightlife — we build disruptive ventures from Australia with global reach.</p>
              <div style={{ display: "flex", gap: 12 }}>
                <span className="btn btn-s" style={{ pointerEvents: "none" }}>Our ventures</span>
                <span className="btn btn-o" style={{ pointerEvents: "none" }}>Our story</span>
              </div>
            </div>
            <div className="scroll-i-demo">
              <span>Scroll</span>
              <div className="scroll-bar-demo" />
            </div>
          </div>
          <div style={{ marginTop: 20, display: "flex", gap: 24, flexWrap: "wrap" }}>
            {["Video background", "HeroCanvas (particles)", "Gradient vignette", "Line-reveal animation", "Scroll indicator"].map((t) => (
              <span key={t} style={{
                fontFamily: "var(--ff)", fontSize: 10, fontWeight: 300, letterSpacing: ".5px",
                padding: "5px 12px", border: "1px solid var(--border)", borderRadius: 2, color: "var(--muted2)",
              }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SIGN IN ═══ */}
      <section style={{ padding: "64px 44px", background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
        <div className="ct">
          <div className="ey rv" style={{ marginBottom: 12 }}>Sign In</div>
          <p className="rv d1" style={{ fontSize: 13, color: "var(--muted2)", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
            Centered card layout with logo, lock badge, Google OAuth, email/password form, passwordless toggle, and signup link. Used on <code style={{ background: "rgba(238,235,227,.06)", padding: "2px 8px", borderRadius: 2 }}>/login</code>.
          </p>
          <div className="rv d2">
            <div className="comp-auth-frame">
              <div className="card-logo">
                <LogoFull />
              </div>

              <div className="lock-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Investor Access
              </div>

              <h3>Welcome back.</h3>
              <div className="card-sub">Sign in to your GHC investor portal.</div>

              <button
                type="button"
                className="btn btn-o"
                style={{ width: "100%", justifyContent: "center", gap: 10, pointerEvents: "none" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Sign in with Google
              </button>

              <div className="divider"><span>or sign in with email</span></div>

              <div className="fi-wrap">
                <div>
                  <label className="fi-lbl">Email address</label>
                  <input className="fi" type="email" placeholder="you@fund.com" readOnly tabIndex={-1} />
                </div>
                <div>
                  <label className="fi-lbl">Password</label>
                  <input className="fi" type="password" placeholder="••••••••" readOnly tabIndex={-1} />
                  <span className="forgot" style={{ pointerEvents: "none" }}>Forgot password?</span>
                </div>
              </div>

              <span className="btn btn-s" style={{ width: "100%", justifyContent: "center", marginTop: 8, pointerEvents: "none" }}>Sign in</span>

              <div style={{ textAlign: "center", marginTop: 16 }}>
                <span style={{
                  fontFamily: "var(--ff)", fontSize: "11px", fontWeight: 300,
                  color: "var(--muted2)", textDecoration: "underline", letterSpacing: "0.5px",
                }}>Use passwordless login instead</span>
              </div>

              <div className="divider"><span>or</span></div>

              <div className="card-foot">
                <p>Don&apos;t have access yet? <span style={{ color: "var(--muted)", textDecoration: "underline" }}>Apply here &rarr;</span></p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 20, display: "flex", gap: 24, flexWrap: "wrap" }}>
            {["Google OAuth", "Password login", "Passwordless (6-digit code)", "Forgot password link", "Memberstack integration"].map((t) => (
              <span key={t} style={{
                fontFamily: "var(--ff)", fontSize: 10, fontWeight: 300, letterSpacing: ".5px",
                padding: "5px 12px", border: "1px solid var(--border)", borderRadius: 2, color: "var(--muted2)",
              }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SIGN UP ═══ */}
      <section style={{ padding: "64px 44px", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div className="ct">
          <div className="ey rv" style={{ marginBottom: 12 }}>Sign Up</div>
          <p className="rv d1" style={{ fontSize: 13, color: "var(--muted2)", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
            Two-column layout with investor value proposition on the left and a comprehensive application form on the right. Google OAuth quick-signup available. Used on <code style={{ background: "rgba(238,235,227,.06)", padding: "2px 8px", borderRadius: 2 }}>/signup</code>.
          </p>
          <div className="comp-signup-preview rv d2">
            {/* Left - info */}
            <div>
              <div className="ey" style={{ marginBottom: 16 }}>Investor Access</div>
              <h2 style={{
                fontFamily: "var(--ff)", fontWeight: 200,
                fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "-1.5px",
                lineHeight: ".95", marginBottom: 16,
              }}>Apply for access.</h2>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.8, marginBottom: 24 }}>
                Once approved, you&apos;ll receive full access to our confidential investor portal&nbsp;&mdash; including product updates, financial highlights, and exclusive briefings.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
                {[
                  "Quarterly financial & product updates",
                  "Exclusive founding team briefings",
                  "Early access to new platform launches",
                  "Co-investment pipeline opportunities",
                ].map((feat) => (
                  <div key={feat} className="inv-feat">{feat}</div>
                ))}
              </div>
              <p style={{ fontSize: 12, color: "var(--muted2)", fontFamily: "var(--ff)", fontWeight: 300 }}>
                Already have access? <span style={{ color: "var(--muted)", textDecoration: "underline" }}>Sign in &rarr;</span>
              </p>
            </div>

            {/* Right - form preview */}
            <div style={{ border: "1px solid var(--border)", borderRadius: 4, background: "var(--bg2)", padding: "28px 24px" }}>
              <h3 style={{ fontFamily: "var(--ff)", fontWeight: 300, fontSize: 18, letterSpacing: "-.5px", marginBottom: 20 }}>Your details</h3>

              <button
                type="button"
                className="btn btn-o"
                style={{ width: "100%", justifyContent: "center", gap: 10, marginBottom: 0, pointerEvents: "none" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Sign up with Google
              </button>

              <div className="divider"><span>or fill in your details</span></div>

              <div className="fg">
                <div className="fr">
                  <div className="fl">
                    <label className="fi-lbl">First name</label>
                    <input className="fi" type="text" placeholder="Jane" readOnly tabIndex={-1} />
                  </div>
                  <div className="fl">
                    <label className="fi-lbl">Last name</label>
                    <input className="fi" type="text" placeholder="Smith" readOnly tabIndex={-1} />
                  </div>
                </div>
                <div className="fl">
                  <label className="fi-lbl">Email address</label>
                  <input className="fi" type="email" placeholder="you@fund.com" readOnly tabIndex={-1} />
                </div>
                <div className="fl">
                  <label className="fi-lbl">Password</label>
                  <input className="fi" type="password" placeholder="Create a password" readOnly tabIndex={-1} />
                </div>
                <div className="fl">
                  <label className="fi-lbl">Company / Fund</label>
                  <input className="fi" type="text" placeholder="Acme Capital" readOnly tabIndex={-1} />
                </div>
                <div className="fr">
                  <div className="fl">
                    <label className="fi-lbl">Your role</label>
                    <input className="fi" type="text" placeholder="Partner" readOnly tabIndex={-1} />
                  </div>
                  <div className="fl">
                    <label className="fi-lbl">Website</label>
                    <input className="fi" type="url" placeholder="https://..." readOnly tabIndex={-1} />
                  </div>
                </div>
              </div>

              <span className="btn btn-s" style={{ width: "100%", justifyContent: "center", marginTop: 16, pointerEvents: "none" }}>Create account</span>
              <p className="fn">By submitting, you agree to our <span style={{ color: "var(--muted)", textDecoration: "underline" }}>privacy policy</span>.</p>
            </div>
          </div>
          <div style={{ marginTop: 20, display: "flex", gap: 24, flexWrap: "wrap" }}>
            {["Two-column layout", "Google OAuth", "Investor type select", "Intl phone input", "Memberstack signup"].map((t) => (
              <span key={t} style={{
                fontFamily: "var(--ff)", fontSize: 10, fontWeight: 300, letterSpacing: ".5px",
                padding: "5px 12px", border: "1px solid var(--border)", borderRadius: 2, color: "var(--muted2)",
              }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VENTURES ═══ */}
      <section style={{ padding: "64px 44px", background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
        <div className="ct">
          <div className="ey rv" style={{ marginBottom: 12 }}>Ventures</div>
          <p className="rv d1" style={{ fontSize: 13, color: "var(--muted2)", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
            Venture showcase cards with custom SVG art, category metadata, description, and external URL. Each card links to a dedicated case study. Homepage uses a horizontal slider; shown here as a 2&times;2 grid.
          </p>
          <div className="comp-ventures-grid rv d2">
            {[
              {
                num: "01",
                category: "Data Intelligence",
                title: "Profiles",
                desc: "The world\u2019s largest contact database. Access 500M+ global records with AI-powered search.",
                url: "www.profiles.io",
                color: "#3b82f6",
                bgClass: "th-p",
                art: <ProfilesArt />,
              },
              {
                num: "02",
                category: "Fashion Tech",
                title: "Wardrobe",
                desc: "The world\u2019s first peer-to-peer fashion rental marketplace. Making fashion circular and accessible.",
                url: "www.wardrobe.app",
                color: "#d97706",
                bgClass: "th-w",
                art: <WardrobeArt />,
              },
              {
                num: "03",
                category: "Online Gaming",
                title: "Royale",
                desc: "Next-generation gaming platform. Provably fair, beautifully designed, engineered for the future.",
                url: "www.royale.us",
                color: "#a78bfa",
                bgClass: "th-r",
                art: <RoyaleArt />,
              },
              {
                num: "04",
                category: "Live Casino Studio",
                title: "GreatGaming",
                desc: "Full-stack live dealer studio. Broadcast-grade production powering the biggest operators on earth.",
                url: "www.greatgaming.com",
                color: "#22d3ee",
                bgClass: "th-g",
                art: <GreatGamingArt />,
              },
            ].map((v) => (
              <div key={v.num} className="comp-venture-card">
                <div className={`comp-vc-art ${v.bgClass}`}>
                  {v.art}
                </div>
                <div className="comp-vc-body">
                  <div className="comp-vc-meta">
                    <span className="comp-vc-num">{v.num} / 06</span>
                    <span className="comp-vc-cat">{v.category}</span>
                  </div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                  <div className="comp-vc-foot">
                    <span className="comp-vc-url">{v.url}</span>
                    <span className="comp-vc-arr">
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 20, display: "flex", gap: 24, flexWrap: "wrap" }}>
            {["SVG art per venture", "Case study links", "Category metadata", "Hover transitions", "5 ventures total"].map((t) => (
              <span key={t} style={{
                fontFamily: "var(--ff)", fontSize: 10, fontWeight: 300, letterSpacing: ".5px",
                padding: "5px 12px", border: "1px solid var(--border)", borderRadius: 2, color: "var(--muted2)",
              }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* BUTTONS */}
      <section style={{ padding: "64px 44px", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div className="ct">
          <div className="ey rv" style={{ marginBottom: 32 }}>Buttons</div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 40 }}>
            <button className="btn btn-s">Solid Button</button>
            <button className="btn btn-o">Outlined Button</button>
            <button className="btn btn-accent">Accent Button</button>
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 40 }}>
            <button className="btn btn-s" style={{ opacity: 0.6 }} disabled>Solid Disabled</button>
            <button className="btn btn-o" style={{ opacity: 0.6 }} disabled>Outlined Disabled</button>
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="#" className="btn btn-s">Link as Button &rarr;</Link>
            <Link href="#" className="btn btn-o">Link Outlined &rarr;</Link>
          </div>
        </div>
      </section>

      {/* EYEBROW & HEADINGS */}
      <section style={{ padding: "64px 44px", background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
        <div className="ct">
          <div className="ey rv" style={{ marginBottom: 32 }}>Eyebrow &amp; Headings</div>
          <div style={{ marginBottom: 32 }}>
            <div className="ey" style={{ marginBottom: 16 }}>Eyebrow label</div>
            <p style={{ fontSize: 12, color: "var(--muted2)", fontFamily: "var(--ff)" }}>
              <code style={{ background: "rgba(238,235,227,.06)", padding: "2px 8px", borderRadius: 2 }}>.ey</code> — uppercase, tracked, muted label with a leading dash
            </p>
          </div>
          <div style={{ marginBottom: 32 }}>
            <h2 className="st" style={{ marginBottom: 16 }}>Section Title</h2>
            <p style={{ fontSize: 12, color: "var(--muted2)", fontFamily: "var(--ff)" }}>
              <code style={{ background: "rgba(238,235,227,.06)", padding: "2px 8px", borderRadius: 2 }}>.st</code> — large display heading, weight 200
            </p>
          </div>
          <div>
            <h1 style={{
              fontFamily: "var(--ff)", fontWeight: 200,
              fontSize: "clamp(40px, 6vw, 84px)", letterSpacing: "-3px", lineHeight: ".9",
            }}>Hero-scale heading</h1>
          </div>
        </div>
      </section>

      {/* LOCK BADGE */}
      <section style={{ padding: "64px 44px", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div className="ct">
          <div className="ey rv" style={{ marginBottom: 32 }}>Badges</div>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
            <div className="lock-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Private Access
            </div>
            <div className="lock-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Investor Access
            </div>
          </div>
        </div>
      </section>

      {/* NAV INVESTOR BUTTON */}
      <section style={{ padding: "64px 44px", background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
        <div className="ct">
          <div className="ey rv" style={{ marginBottom: 32 }}>Navigation Buttons</div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <Link href="#" className="nav-inv">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Investors
            </Link>
            <Link href="#" className="nav-cta">Contact</Link>
          </div>
        </div>
      </section>

      {/* FORM ELEMENTS */}
      <section style={{ padding: "64px 44px", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div className="ct">
          <div className="ey rv" style={{ marginBottom: 32 }}>Form Elements</div>
          <ComponentsFormDemo />
        </div>
      </section>

      {/* ALERTS */}
      <section style={{ padding: "64px 44px", background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
        <div className="ct">
          <div className="ey rv" style={{ marginBottom: 32 }}>Alerts &amp; Feedback</div>
          <div style={{ maxWidth: 480 }}>
            <div className="form-error">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              This is an error message. Something went wrong.
            </div>
            <div className="form-success">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Success! Your action was completed.
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDERS */}
      <section style={{ padding: "64px 44px", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div className="ct">
          <div className="ey rv" style={{ marginBottom: 32 }}>Dividers</div>
          <div style={{ maxWidth: 480 }}>
            <div className="divider"><span>or continue with</span></div>
            <div style={{ marginTop: 24, height: 1, background: "var(--border)" }} />
            <p style={{ fontSize: 12, color: "var(--muted2)", fontFamily: "var(--ff)", marginTop: 12 }}>
              Standard 1px border divider
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT CARD EXAMPLE */}
      <section style={{ padding: "64px 44px", background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
        <div className="ct">
          <div className="ey rv" style={{ marginBottom: 32 }}>Product Card</div>
          <div style={{ maxWidth: 480 }}>
            <div className="pc" style={{ position: "relative" }}>
              <div className="pc-th th-p">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/profiles.jpg" alt="Profiles" className="pc-img" />
              </div>
              <div className="pc-body">
                <div className="pc-meta"><span className="pc-num">01 / 06</span><span className="pc-cat">Data Intelligence</span></div>
                <h3>Profiles</h3>
                <p>The world&apos;s largest database. Access 500M+ global data records.</p>
                <div className="pc-ft">
                  <span className="pc-url">www.profiles.io</span>
                  <span className="pc-arr"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS GRID */}
      <section style={{ padding: "64px 44px", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div className="ct">
          <div className="ey rv" style={{ marginBottom: 32 }}>Stats Grid</div>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1,
            background: "var(--border)", border: "1px solid var(--border)", borderRadius: 2, overflow: "hidden",
            maxWidth: 640,
          }}>
            {[
              { value: "500M+", label: "Global records", color: "#6366f1" },
              { value: "6", label: "Ventures", color: "#22c55e" },
              { value: "4", label: "Countries", color: "#f59e0b" },
              { value: "28mo", label: "Runway", color: "#ec4899" },
            ].map((s) => (
              <div key={s.label} style={{ background: "var(--bg)", padding: "24px 20px" }}>
                <div style={{ fontFamily: "var(--ff)", fontWeight: 200, fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-2px", lineHeight: 1, color: s.color, marginBottom: 6 }}>{s.value}</div>
                <div style={{ fontFamily: "var(--ff)", fontSize: 10, fontWeight: 300, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--muted2)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERED LIST */}
      <section style={{ padding: "64px 44px", background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
        <div className="ct">
          <div className="ey rv" style={{ marginBottom: 32 }}>Numbered List</div>
          <div style={{ maxWidth: 640 }}>
            {["First outcome or result item", "Second outcome or result item", "Third outcome or result item"].map((o, i) => (
              <div key={i} style={{
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
      </section>

      {/* TECH STACK TAGS */}
      <section style={{ padding: "64px 44px", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div className="ct">
          <div className="ey rv" style={{ marginBottom: 32 }}>Tech Tags</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Vercel", "Stripe"].map((t) => (
              <span key={t} style={{
                fontFamily: "var(--ff)", fontSize: 10, fontWeight: 300, letterSpacing: ".5px",
                padding: "5px 12px", border: "1px solid var(--border)", borderRadius: 2, color: "var(--muted2)",
              }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: "80px 44px", background: "var(--bg2)", textAlign: "center", borderTop: "1px solid var(--border)" }}>
        <div className="ct">
          <div className="ey" style={{ justifyContent: "center", margin: "0 auto 20px", width: "fit-content" }}>Call to action</div>
          <h2 className="st" style={{ marginBottom: 20 }}>CTA section heading.</h2>
          <p style={{ fontSize: 16, color: "var(--muted)", marginBottom: 40 }}>Supporting text goes here with a brief description.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="#" className="btn btn-s">Primary Action</Link>
            <Link href="#" className="btn btn-o">Secondary Action &rarr;</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
