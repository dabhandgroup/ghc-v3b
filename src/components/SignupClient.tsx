"use client";

import { useState } from "react";
import Link from "next/link";
import CustomSelect from "./CustomSelect";
import IntlPhoneInput from "./IntlPhoneInput";

const investorTypes = [
  { label: "Venture Capital", value: "Venture Capital" },
  { label: "Angel / HNW Individual", value: "Angel / HNW Individual" },
  { label: "Family Office", value: "Family Office" },
  { label: "Private Equity", value: "Private Equity" },
  { label: "Strategic / Corporate", value: "Strategic / Corporate" },
  { label: "Other", value: "Other" },
];

const primaryInterests = [
  { label: "General portfolio investment", value: "General portfolio investment" },
  { label: "Profiles.io", value: "Profiles.io" },
  { label: "Wardrobe", value: "Wardrobe" },
  { label: "Royale", value: "Royale" },
  { label: "GreatGaming", value: "GreatGaming" },
  { label: "Strategic partnership", value: "Strategic partnership" },
];

export default function SignupClient() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleGoogleSignup = async () => {
    setError("");
    setGoogleLoading(true);
    try {
      const ms = (window as any).$memberstackDom;
      if (!ms) {
        setError("Authentication is still loading. Please try again in a moment.");
        setGoogleLoading(false);
        return;
      }
      await ms.signupWithProvider({ provider: "google" });
      window.location.href = "/investor-portal/home";
    } catch (err: any) {
      const msg = err?.message || err?.data?.message || "Google sign-up failed. Please try again.";
      setError(msg);
      setGoogleLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const ms = (window as any).$memberstackDom;
      if (!ms) {
        setError("Authentication is still loading. Please try again in a moment.");
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
          phone: (fd.get("phone") as string) || "",
          company: (fd.get("company") as string) || "",
          role: (fd.get("role") as string) || "",
          website: (fd.get("website") as string) || "",
          "investor-type": (fd.get("investor-type") as string) || "",
          "referral-source": (fd.get("referral-source") as string) || "",
          "primary-interest": (fd.get("primary-interest") as string) || "",
          message: (fd.get("message") as string) || "",
        },
      });

      setSuccess(true);
      window.location.href = "/investor-portal/home";
    } catch (err: any) {
      const msg = err?.message || err?.data?.message || "Something went wrong. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section className="signup-section">
        <div className="ct">
          <div className="signup-grid">
            <div className="signup-info">
              <div className="ey rv">Investor Access</div>
              <h2 className="st rv d1">Apply for access.</h2>
            </div>
            <div className="signup-form rv d2">
              <div className="signup-form-inner">
                <div className="form-success" style={{ marginBottom: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  Account created &mdash; redirecting to portal&hellip;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="signup-section">
      <div className="ct">
        <div className="signup-grid">
          <div className="signup-info">
            <div className="ey rv">Investor Access</div>
            <h2 className="st rv d1">Apply for access.</h2>
            <p className="rv d2">
              Once approved, you&apos;ll receive full access to our confidential
              investor portal&nbsp;&mdash; including product updates, financial
              highlights, and exclusive briefings.
            </p>
            <div className="signup-feats rv d3">
              <div className="inv-feat">Quarterly financial &amp; product updates</div>
              <div className="inv-feat">Exclusive founding team briefings</div>
              <div className="inv-feat">Early access to new platform launches</div>
              <div className="inv-feat">Co-investment pipeline opportunities</div>
              <div className="inv-feat">Confidential industry research</div>
            </div>
            <p className="signup-note rv d4">
              Already have access?{" "}
              <Link href="/login">Sign in &rarr;</Link>
            </p>
          </div>

          <div className="signup-form rv d2">
            <div className="signup-form-inner">
              <h3>Your details</h3>

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

              {/* Google sign-up */}
              <button
                type="button"
                onClick={handleGoogleSignup}
                className="btn btn-o"
                disabled={googleLoading}
                style={{ width: "100%", justifyContent: "center", gap: 10, marginBottom: 0, opacity: googleLoading ? 0.6 : 1 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                {googleLoading ? "Connecting\u2026" : "Sign up with Google"}
              </button>

              <div className="divider"><span>or fill in your details</span></div>

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
                    <label className="fi-lbl">Phone (optional)</label>
                    <IntlPhoneInput name="phone" />
                  </div>
                  <div className="fl">
                    <label className="fi-lbl">Company / Fund</label>
                    <input className="fi" type="text" name="company" placeholder="Acme Capital" />
                  </div>
                  <div className="fr">
                    <div className="fl">
                      <label className="fi-lbl">Your role</label>
                      <input className="fi" type="text" name="role" placeholder="Partner" />
                    </div>
                    <div className="fl">
                      <label className="fi-lbl">Website</label>
                      <input className="fi" type="url" name="website" placeholder="https://..." />
                    </div>
                  </div>
                  <div className="fl">
                    <label className="fi-lbl">Investor type</label>
                    <CustomSelect
                      name="investor-type"
                      placeholder="Select investor type"
                      options={investorTypes}
                    />
                  </div>
                  <div className="fl">
                    <label className="fi-lbl">How did you hear about us?</label>
                    <input className="fi" type="text" name="referral-source" placeholder="Referral, event, press..." />
                  </div>
                  <div className="fl">
                    <label className="fi-lbl">Primary interest</label>
                    <CustomSelect
                      name="primary-interest"
                      placeholder="Select primary interest"
                      options={primaryInterests}
                    />
                  </div>
                  <div className="fl">
                    <label className="fi-lbl">Message (optional)</label>
                    <textarea
                      className="fi"
                      rows={3}
                      name="message"
                      placeholder="Anything you'd like us to know..."
                      style={{ resize: "vertical" }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-s"
                  disabled={loading}
                  style={{ width: "100%", justifyContent: "center", marginTop: 16, opacity: loading ? 0.6 : 1 }}
                >
                  {loading ? "Creating account\u2026" : "Create account"}
                </button>

                <p className="fn">
                  By submitting, you agree to our{" "}
                  <a href="/privacy-policy" style={{ color: "var(--muted)", textDecoration: "underline" }}>
                    privacy policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
