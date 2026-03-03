import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SmoothScroll from "@/components/SmoothScroll";
import LogoFull from "@/components/LogoFull";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Style Guide — GHC",
  description: "GHC brand style guide — colours, typography, spacing, and usage.",
};

function Swatch({ color, name, value }: { color: string; name: string; value: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <div style={{
        width: 56, height: 56, borderRadius: 4,
        background: color,
        border: "1px solid rgba(238,235,227,.12)",
        flexShrink: 0,
      }} />
      <div>
        <div style={{ fontFamily: "var(--ff)", fontSize: 13, fontWeight: 400, color: "var(--text)", marginBottom: 2 }}>{name}</div>
        <div style={{ fontFamily: "var(--ff)", fontSize: 11, fontWeight: 300, color: "var(--muted2)", letterSpacing: ".5px" }}>{value}</div>
      </div>
    </div>
  );
}

export default function StyleGuidePage() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <ScrollReveal />

      {/* INTRO */}
      <div style={{ padding: "140px 44px 0", background: "var(--bg)" }}>
        <div className="ct">
          <div className="ey rv">Brand</div>
          <h1 className="rv d1" style={{
            fontFamily: "var(--ff)", fontWeight: 200,
            fontSize: "clamp(36px, 5vw, 64px)", letterSpacing: "-2px",
            lineHeight: ".95", marginBottom: 16,
          }}>Style Guide</h1>
          <p className="rv d2" style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.8, maxWidth: 560, marginBottom: 56 }}>
            The definitive reference for the GHC visual identity. Covers colour, typography, spacing, logos, and component patterns. See also the{" "}
            <Link href="/components" style={{ color: "var(--text)", textDecoration: "underline" }}>component library</Link>.
          </p>
        </div>
      </div>

      {/* LOGO */}
      <section style={{ padding: "64px 44px", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div className="ct">
          <div className="ey rv" style={{ marginBottom: 40 }}>Logo</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginBottom: 40 }}>
            {/* Light on dark */}
            <div style={{
              background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 4,
              padding: "56px 40px", display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <LogoFull style={{ height: 28, width: "auto" }} />
            </div>
            {/* Dark on light */}
            <div style={{
              background: "#eeebe3", border: "1px solid var(--border)", borderRadius: 4,
              padding: "56px 40px", display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <LogoFull fill="#0d0d0d" style={{ height: 28, width: "auto" }} />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
            <div style={{
              background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 4,
              padding: "40px", display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <LogoIcon style={{ height: 48, width: "auto" }} fill="var(--text)" />
            </div>
            <div style={{
              background: "#eeebe3", border: "1px solid var(--border)", borderRadius: 4,
              padding: "40px", display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <LogoIcon style={{ height: 48, width: "auto" }} fill="#0d0d0d" />
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <p style={{ fontSize: 13, color: "var(--muted2)", fontFamily: "var(--ff)", fontWeight: 300, lineHeight: 1.8 }}>
              The GHC wordmark should always have clear space equal to the height of the &ldquo;G&rdquo; glyph on all sides. Never stretch, rotate, or recolour outside of the approved palette.
            </p>
          </div>
        </div>
      </section>

      {/* COLOURS */}
      <section style={{ padding: "64px 44px", background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
        <div className="ct">
          <div className="ey rv" style={{ marginBottom: 40 }}>Colour Palette</div>

          <h3 style={{ fontFamily: "var(--ff)", fontWeight: 300, fontSize: 18, letterSpacing: "-.5px", marginBottom: 24 }}>Primary</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 24, marginBottom: 48 }}>
            <Swatch color="#0d0d0d" name="Background" value="--bg  #0d0d0d" />
            <Swatch color="#111111" name="Background Alt" value="--bg2  #111" />
            <Swatch color="#eeebe3" name="Text" value="--text  #eeebe3" />
          </div>

          <h3 style={{ fontFamily: "var(--ff)", fontWeight: 300, fontSize: 18, letterSpacing: "-.5px", marginBottom: 24 }}>Muted &amp; Borders</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 24, marginBottom: 48 }}>
            <Swatch color="rgba(238,235,227,0.75)" name="Muted" value="--muted  75% opacity" />
            <Swatch color="rgba(238,235,227,0.48)" name="Muted 2" value="--muted2  48% opacity" />
            <Swatch color="rgba(238,235,227,0.1)" name="Border" value="--border  10% opacity" />
            <Swatch color="rgba(238,235,227,0.18)" name="Border 2" value="--border2  18% opacity" />
          </div>

          <h3 style={{ fontFamily: "var(--ff)", fontWeight: 300, fontSize: 18, letterSpacing: "-.5px", marginBottom: 24 }}>Accents</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 24 }}>
            <Swatch color="#6366f1" name="Accent / Indigo" value="#6366f1" />
            <Swatch color="#22c55e" name="Success / Green" value="#22c55e" />
            <Swatch color="#f59e0b" name="Warning / Amber" value="#f59e0b" />
            <Swatch color="rgba(248,113,113,.8)" name="Error / Red" value="rgba(248,113,113)" />
            <Swatch color="#ec4899" name="Pink" value="#ec4899" />
          </div>
        </div>
      </section>

      {/* TYPOGRAPHY */}
      <section style={{ padding: "64px 44px", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div className="ct">
          <div className="ey rv" style={{ marginBottom: 40 }}>Typography</div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, marginBottom: 56 }}>
            <div>
              <p style={{ fontFamily: "var(--ff)", fontSize: 10, fontWeight: 300, letterSpacing: 2, textTransform: "uppercase", color: "var(--muted2)", marginBottom: 16 }}>Display Font</p>
              <p style={{ fontFamily: "var(--ff)", fontSize: 48, fontWeight: 200, letterSpacing: "-2px", lineHeight: 1, marginBottom: 12 }}>Sora</p>
              <p style={{ fontFamily: "var(--ff)", fontSize: 14, fontWeight: 300, color: "var(--muted)" }}>Used for headings, labels, UI elements, and navigation. Available weights: 100–600.</p>
            </div>
            <div>
              <p style={{ fontFamily: "var(--ff)", fontSize: 10, fontWeight: 300, letterSpacing: 2, textTransform: "uppercase", color: "var(--muted2)", marginBottom: 16 }}>Body Font</p>
              <p style={{ fontFamily: "var(--fb)", fontSize: 48, fontWeight: 300, letterSpacing: "-1px", lineHeight: 1, marginBottom: 12 }}>DM Sans</p>
              <p style={{ fontFamily: "var(--fb)", fontSize: 14, fontWeight: 300, color: "var(--muted)" }}>Used for body text, descriptions, and long-form content. Available weights: 300–400.</p>
            </div>
          </div>

          <h3 style={{ fontFamily: "var(--ff)", fontWeight: 300, fontSize: 18, letterSpacing: "-.5px", marginBottom: 24 }}>Type Scale</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              { label: "Hero", size: "clamp(58px, 7vw, 110px)", weight: 200, tracking: "-4px", font: "var(--ff)" },
              { label: "Display 1", size: "clamp(42px, 5.5vw, 76px)", weight: 200, tracking: "-2px", font: "var(--ff)" },
              { label: "Display 2", size: "clamp(28px, 4vw, 48px)", weight: 200, tracking: "-2px", font: "var(--ff)" },
              { label: "Heading", size: "clamp(22px, 3vw, 32px)", weight: 300, tracking: "-1px", font: "var(--ff)" },
              { label: "Body Large", size: "18px", weight: 300, tracking: "0", font: "var(--fb)" },
              { label: "Body", size: "15px", weight: 300, tracking: "0", font: "var(--fb)" },
              { label: "Caption", size: "13px", weight: 400, tracking: "0.8px", font: "var(--ff)" },
              { label: "Eyebrow", size: "11px", weight: 300, tracking: "3px", font: "var(--ff)" },
            ].map((t) => (
              <div key={t.label} style={{
                display: "flex", alignItems: "baseline", gap: 32, padding: "20px 0",
                borderBottom: "1px solid var(--border)",
              }}>
                <span style={{ fontFamily: "var(--ff)", fontSize: 10, fontWeight: 300, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--muted2)", width: 100, flexShrink: 0 }}>
                  {t.label}
                </span>
                <span style={{
                  fontFamily: t.font, fontSize: t.size, fontWeight: t.weight,
                  letterSpacing: t.tracking, lineHeight: 1.1,
                }}>
                  Making Waves
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPACING */}
      <section style={{ padding: "64px 44px", background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
        <div className="ct">
          <div className="ey rv" style={{ marginBottom: 40 }}>Spacing &amp; Layout</div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginBottom: 48 }}>
            <div>
              <h3 style={{ fontFamily: "var(--ff)", fontWeight: 300, fontSize: 18, letterSpacing: "-.5px", marginBottom: 20 }}>Grid</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { label: "Max content width", value: "1280px" },
                  { label: "Page padding", value: "56px (--page-px)" },
                  { label: "Page padding (mobile)", value: "20px" },
                  { label: "Section padding", value: "80–100px vertical" },
                ].map((s) => (
                  <div key={s.label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid var(--border)" }}>
                    <span style={{ fontFamily: "var(--ff)", fontSize: 13, fontWeight: 300, color: "var(--muted)" }}>{s.label}</span>
                    <span style={{ fontFamily: "var(--ff)", fontSize: 13, fontWeight: 400, color: "var(--text)" }}>{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--ff)", fontWeight: 300, fontSize: 18, letterSpacing: "-.5px", marginBottom: 20 }}>Border Radius</h3>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {[
                  { r: "2px", label: "2px — default" },
                  { r: "3px", label: "3px — buttons" },
                  { r: "4px", label: "4px — cards" },
                  { r: "20px", label: "20px — badges" },
                ].map((b) => (
                  <div key={b.label} style={{ textAlign: "center" }}>
                    <div style={{
                      width: 56, height: 56, borderRadius: b.r,
                      border: "1px solid var(--border2)", marginBottom: 8,
                    }} />
                    <span style={{ fontFamily: "var(--ff)", fontSize: 10, fontWeight: 300, color: "var(--muted2)" }}>{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h3 style={{ fontFamily: "var(--ff)", fontWeight: 300, fontSize: 18, letterSpacing: "-.5px", marginBottom: 20 }}>Spacing Scale</h3>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-end", flexWrap: "wrap" }}>
            {[4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80].map((s) => (
              <div key={s} style={{ textAlign: "center" }}>
                <div style={{
                  width: 32, height: s, background: "rgba(99,102,241,.3)",
                  border: "1px solid rgba(99,102,241,.5)", borderRadius: 2,
                }} />
                <span style={{ fontFamily: "var(--ff)", fontSize: 9, fontWeight: 300, color: "var(--muted2)", marginTop: 6, display: "block" }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUTTONS */}
      <section style={{ padding: "64px 44px", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div className="ct">
          <div className="ey rv" style={{ marginBottom: 40 }}>Buttons</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            <div>
              <p style={{ fontFamily: "var(--ff)", fontSize: 10, fontWeight: 300, letterSpacing: 2, textTransform: "uppercase", color: "var(--muted2)", marginBottom: 16 }}>Solid</p>
              <button className="btn btn-s" style={{ marginBottom: 12 }}>Button Label</button>
              <p style={{ fontSize: 12, color: "var(--muted2)", fontFamily: "var(--ff)", fontWeight: 300, lineHeight: 1.6 }}>
                Primary action. Cream fill, dark text. 14px 30px padding.
              </p>
            </div>
            <div>
              <p style={{ fontFamily: "var(--ff)", fontSize: 10, fontWeight: 300, letterSpacing: 2, textTransform: "uppercase", color: "var(--muted2)", marginBottom: 16 }}>Outlined</p>
              <button className="btn btn-o" style={{ marginBottom: 12 }}>Button Label</button>
              <p style={{ fontSize: 12, color: "var(--muted2)", fontFamily: "var(--ff)", fontWeight: 300, lineHeight: 1.6 }}>
                Secondary action. Transparent with subtle border. 13px 30px padding.
              </p>
            </div>
            <div>
              <p style={{ fontFamily: "var(--ff)", fontSize: 10, fontWeight: 300, letterSpacing: 2, textTransform: "uppercase", color: "var(--muted2)", marginBottom: 16 }}>Accent</p>
              <button className="btn btn-accent" style={{ marginBottom: 12 }}>Button Label</button>
              <p style={{ fontSize: 12, color: "var(--muted2)", fontFamily: "var(--ff)", fontWeight: 300, lineHeight: 1.6 }}>
                High-emphasis action. Indigo fill with glow shadow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ICONOGRAPHY */}
      <section style={{ padding: "64px 44px", background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
        <div className="ct">
          <div className="ey rv" style={{ marginBottom: 40 }}>Iconography</div>
          <p style={{ fontSize: 14, color: "var(--muted)", fontFamily: "var(--ff)", fontWeight: 300, marginBottom: 24, lineHeight: 1.8 }}>
            Icons use inline SVG with <code style={{ background: "rgba(238,235,227,.06)", padding: "2px 8px", borderRadius: 2 }}>stroke=&quot;currentColor&quot;</code> and <code style={{ background: "rgba(238,235,227,.06)", padding: "2px 8px", borderRadius: 2 }}>strokeWidth=&quot;2&quot;</code>. Standard sizes are 10px, 12px, 14px, and 16px.
          </p>
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            {[
              { label: "Lock", paths: <><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></> },
              { label: "Arrow", paths: <><path d="M5 12h14M12 5l7 7-7 7" /></> },
              { label: "External", paths: <><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></> },
              { label: "Check", paths: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></> },
              { label: "Alert", paths: <><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></> },
              { label: "Mail", paths: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" /></> },
            ].map((icon) => (
              <div key={icon.label} style={{ textAlign: "center" }}>
                <div style={{
                  width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center",
                  border: "1px solid var(--border)", borderRadius: 4, marginBottom: 8,
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {icon.paths}
                  </svg>
                </div>
                <span style={{ fontFamily: "var(--ff)", fontSize: 10, fontWeight: 300, color: "var(--muted2)" }}>{icon.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANIMATION */}
      <section style={{ padding: "64px 44px", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div className="ct">
          <div className="ey rv" style={{ marginBottom: 40 }}>Motion &amp; Animation</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
            <div>
              <h4 style={{ fontFamily: "var(--ff)", fontWeight: 300, fontSize: 15, marginBottom: 12 }}>Easing</h4>
              <p style={{ fontSize: 13, color: "var(--muted2)", fontFamily: "var(--ff)", fontWeight: 300, lineHeight: 1.7 }}>
                Primary: <code style={{ background: "rgba(238,235,227,.06)", padding: "2px 6px", borderRadius: 2 }}>cubic-bezier(0.16, 1, 0.3, 1)</code><br />
                Used for reveal animations and button hover.
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: "var(--ff)", fontWeight: 300, fontSize: 15, marginBottom: 12 }}>Durations</h4>
              <p style={{ fontSize: 13, color: "var(--muted2)", fontFamily: "var(--ff)", fontWeight: 300, lineHeight: 1.7 }}>
                Micro interactions: <strong style={{ color: "var(--muted)" }}>0.2s</strong><br />
                Reveals &amp; transitions: <strong style={{ color: "var(--muted)" }}>0.6–1s</strong><br />
                Stagger delay: <strong style={{ color: "var(--muted)" }}>0.16s</strong>
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: "var(--ff)", fontWeight: 300, fontSize: 15, marginBottom: 12 }}>Scroll Reveal</h4>
              <p style={{ fontSize: 13, color: "var(--muted2)", fontFamily: "var(--ff)", fontWeight: 300, lineHeight: 1.7 }}>
                Elements use class <code style={{ background: "rgba(238,235,227,.06)", padding: "2px 6px", borderRadius: 2 }}>.rv</code> with optional stagger classes <code style={{ background: "rgba(238,235,227,.06)", padding: "2px 6px", borderRadius: 2 }}>.d1</code> <code style={{ background: "rgba(238,235,227,.06)", padding: "2px 6px", borderRadius: 2 }}>.d2</code> <code style={{ background: "rgba(238,235,227,.06)", padding: "2px 6px", borderRadius: 2 }}>.d3</code>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DO / DON'T */}
      <section style={{ padding: "64px 44px", background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
        <div className="ct">
          <div className="ey rv" style={{ marginBottom: 40 }}>Usage Guidelines</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <div style={{ padding: 32, border: "1px solid rgba(74,222,128,.2)", borderRadius: 4, background: "rgba(74,222,128,.03)" }}>
              <p style={{ fontFamily: "var(--ff)", fontSize: 11, fontWeight: 400, letterSpacing: 2, textTransform: "uppercase", color: "rgba(74,222,128,.8)", marginBottom: 16 }}>Do</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Use the dark theme consistently across all pages",
                  "Keep headings lightweight (200–300 weight)",
                  "Use the cream (#eeebe3) as primary text colour",
                  "Maintain generous whitespace between sections",
                  "Use eyebrow labels to introduce sections",
                  "Keep button labels short and action-oriented",
                ].map((d) => (
                  <li key={d} style={{ fontFamily: "var(--ff)", fontSize: 13, fontWeight: 300, color: "var(--muted)", display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "rgba(74,222,128,.8)", flexShrink: 0 }}>&#10003;</span> {d}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ padding: 32, border: "1px solid rgba(248,113,113,.2)", borderRadius: 4, background: "rgba(248,113,113,.03)" }}>
              <p style={{ fontFamily: "var(--ff)", fontSize: 11, fontWeight: 400, letterSpacing: 2, textTransform: "uppercase", color: "rgba(248,113,113,.8)", marginBottom: 16 }}>Don&apos;t</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Use light/white backgrounds for main pages",
                  "Mix font families — stick to Sora + DM Sans",
                  "Use heavy font weights (600+) for large headings",
                  "Add colour to backgrounds — keep them neutral dark",
                  "Use rounded corners larger than 4px (except badges)",
                  "Place logo on busy or low-contrast backgrounds",
                ].map((d) => (
                  <li key={d} style={{ fontFamily: "var(--ff)", fontSize: 13, fontWeight: 300, color: "var(--muted)", display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "rgba(248,113,113,.8)", flexShrink: 0 }}>&#10007;</span> {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
