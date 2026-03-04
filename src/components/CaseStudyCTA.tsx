"use client";

import { useState } from "react";
import Link from "next/link";

interface CaseStudyCTAProps {
  slug: string;
  productName: string;
}

export default function CaseStudyCTA({ slug, productName }: CaseStudyCTAProps) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleGoogleSignup = async () => {
    setError("");
    setLoading(true);
    try {
      const ms = (window as any).$memberstackDom;
      if (!ms) {
        setError("Authentication is still loading. Please try again.");
        setLoading(false);
        return;
      }
      await ms.signupWithProvider({ provider: "google" });
      // Tag the project interest
      try {
        const member = await ms.getCurrentMember();
        if (member?.data) {
          const existing = member.data.customFields?.["followed-projects"] || "";
          const projects = existing ? existing.split(",") : [];
          if (!projects.includes(slug)) {
            projects.push(slug);
            await ms.updateMember({
              customFields: {
                "followed-projects": projects.join(","),
                "primary-interest": productName,
              },
            });
          }
        }
      } catch { /* best-effort */ }
      window.location.href = "/investor-portal/home";
    } catch (err: any) {
      setError(err?.message || err?.data?.message || "Google sign-up failed.");
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const ms = (window as any).$memberstackDom;
      if (!ms) {
        setError("Authentication is still loading. Please try again.");
        setLoading(false);
        return;
      }

      const fd = new FormData(e.currentTarget);
      const email = fd.get("email") as string;
      const password = fd.get("password") as string;

      if (!email || !password) {
        setError("Email and password are required.");
        setLoading(false);
        return;
      }

      await ms.signupMemberEmailPassword({
        email,
        password,
        planConnections: [{ planId: "pln_investor-portal-mep90u6c" }],
        customFields: {
          "first-name": (fd.get("first-name") as string) || "",
          "last-name": (fd.get("last-name") as string) || "",
          company: (fd.get("company") as string) || "",
          "primary-interest": productName,
          "followed-projects": slug,
        },
      });

      setSuccess(true);
      window.location.href = "/investor-portal/home";
    } catch (err: any) {
      setError(err?.message || err?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="cs-cta-section">
        <div className="ct">
          <div className="cs-interest-done rv">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <h2 className="cs-cta-title" style={{ marginBottom: 8 }}>You&rsquo;re in.</h2>
            <p className="cs-cta-desc" style={{ marginBottom: 0 }}>Redirecting to your investor portal&hellip;</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cs-cta-section">
      <div className="ct">
        <div className="cs-interest-grid">
          {/* Left — copy */}
          <div className="cs-interest-info rv">
            <div className="ey" style={{ marginBottom: 16 }}>Investor Access</div>
            <h2 className="cs-interest-heading">
              Interested in {productName}?
            </h2>
            <p className="cs-interest-sub">
              Register for investor access to get exclusive updates on {productName},
              financial highlights, and direct line to the founding team.
            </p>
            <div className="cs-interest-feats">
              <div className="cs-interest-feat">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="20 6 9 17 4 12" /></svg>
                Product &amp; financial updates
              </div>
              <div className="cs-interest-feat">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="20 6 9 17 4 12" /></svg>
                Exclusive team briefings
              </div>
              <div className="cs-interest-feat">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="20 6 9 17 4 12" /></svg>
                Co-investment opportunities
              </div>
            </div>
            <p className="cs-interest-login">
              Already have access? <Link href="/login">Sign in &rarr;</Link>
            </p>
          </div>

          {/* Right — form */}
          <div className="cs-interest-form rv d1">
            <div className="cs-interest-form-inner">
              <h3>Register your interest</h3>

              {error && (
                <div className="form-error">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  {error}
                </div>
              )}

              <button
                type="button"
                onClick={handleGoogleSignup}
                className="btn btn-o"
                disabled={loading}
                style={{ width: "100%", justifyContent: "center", gap: 10, opacity: loading ? 0.6 : 1 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                {loading ? "Connecting\u2026" : "Sign up with Google"}
              </button>

              <div className="divider"><span>or register with email</span></div>

              <form onSubmit={handleSubmit}>
                <div className="fg">
                  <div className="fr">
                    <div className="fl">
                      <label className="fi-lbl">First name</label>
                      <input className="fi" type="text" name="first-name" placeholder="Jane" />
                    </div>
                    <div className="fl">
                      <label className="fi-lbl">Last name</label>
                      <input className="fi" type="text" name="last-name" placeholder="Smith" />
                    </div>
                  </div>
                  <div className="fl">
                    <label className="fi-lbl">Email address</label>
                    <input className="fi" type="email" name="email" placeholder="you@fund.com" required />
                  </div>
                  <div className="fl">
                    <label className="fi-lbl">Password</label>
                    <input className="fi" type="password" name="password" placeholder="Create a password" required />
                  </div>
                  <div className="fl">
                    <label className="fi-lbl">Company / Fund</label>
                    <input className="fi" type="text" name="company" placeholder="Acme Capital" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-s"
                  disabled={loading}
                  style={{ width: "100%", justifyContent: "center", marginTop: 16, opacity: loading ? 0.6 : 1 }}
                >
                  {loading ? "Creating account\u2026" : "Register Interest"}
                </button>

                <p className="fn">
                  By submitting, you agree to our{" "}
                  <a href="/privacy-policy" style={{ color: "var(--muted)", textDecoration: "underline" }}>
                    privacy policy
                  </a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
