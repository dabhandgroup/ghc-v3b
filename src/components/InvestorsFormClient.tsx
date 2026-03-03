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

export default function InvestorsFormClient() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
          "first-name": fd.get("first-name") as string || "",
          "last-name": fd.get("last-name") as string || "",
          phone: fd.get("phone") as string || "",
          company: fd.get("company") as string || "",
          website: fd.get("website") as string || "",
          "investor-type": fd.get("investor-type") as string || "",
          "referral-source": fd.get("referral-source") as string || "",
        },
      });

      setSuccess(true);
      window.location.href = "/investor-portal/home";
    } catch (err: any) {
      console.error("MemberStack signup error:", err);
      const msg = err?.message || err?.data?.message || "Something went wrong. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="inv-r">
        <div className="form-success" style={{ marginBottom: 0 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          Account created — redirecting to portal&hellip;
        </div>
      </div>
    );
  }

  return (
    <div className="inv-r">
      <h3>Request Access</h3>
      <p>We review applications and respond within 48 hours.</p>

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

      <form onSubmit={handleSubmit}>
        <div className="fr">
          <input className="fi" type="text" name="first-name" placeholder="First name" />
          <input className="fi" type="text" name="last-name" placeholder="Last name" />
        </div>
        <input className="fi" type="email" name="email" placeholder="Email address" required />
        <input className="fi" type="password" name="password" placeholder="Create a password" required />
        <div className="fl">
          <label className="fi-lbl">Phone (optional)</label>
          <IntlPhoneInput name="phone" />
        </div>
        <input className="fi" type="text" name="company" placeholder="Company / Fund" />
        <div className="fl">
          <label className="fi-lbl">Investor type</label>
          <CustomSelect options={investorTypes} placeholder="Select investor type" name="investor-type" />
        </div>
        <input className="fi" type="url" name="website" placeholder="Website (optional)" />
        <input className="fi" type="text" name="referral-source" placeholder="How did you hear about us?" />

        <button
          type="submit"
          className="btn btn-s"
          disabled={loading}
          style={{ justifyContent: "center", width: "100%", fontSize: 12, marginTop: 8, opacity: loading ? 0.6 : 1 }}
        >
          {loading ? "Creating account\u2026" : "Request Access"}
        </button>
      </form>

      <p className="fnote">Strictly confidential. Your information is never shared with third parties.</p>
      <p className="fnote" style={{ marginTop: 6 }}>
        Already have access? <Link href="/login">Sign in &rarr;</Link>
      </p>
    </div>
  );
}
