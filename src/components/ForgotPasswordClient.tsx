"use client";

import { useState } from "react";
import Link from "next/link";
import LogoFull from "./LogoFull";

export default function ForgotPasswordClient() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const ms = (window as any).$memberstackDom;
      if (!ms) {
        setError("Authentication is still loading. Please wait a moment and try again.");
        setLoading(false);
        return;
      }
      await ms.sendMemberResetPasswordEmail({ email });
      setSuccess("If this email exists, you'll receive a reset code shortly. Check your inbox and spam folder.");
    } catch (err: any) {
      const msg = err?.message || err?.data?.message || "Could not send reset email. Please check the address and try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card card-fixed">
      <div className="bg-glow" />
      <div className="card-inner" style={{ textAlign: "center" }}>
        <div className="card-logo card-logo-lg">
          <Link href="/">
            <LogoFull />
          </Link>
        </div>

        <div className="lock-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          Password Reset
        </div>

        <h1>Reset password.</h1>
        <p className="card-sub">
          Enter your email address and we&apos;ll send you a code to reset your password.
        </p>

        {success && (
          <div className="form-success">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            {success}
          </div>
        )}

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
          <div className="fi-wrap">
            <div>
              <label className="fi-lbl">Email address</label>
              <input
                className="fi"
                type="email"
                placeholder="you@fund.com"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-s"
            disabled={loading}
            style={{ width: "100%", justifyContent: "center", marginTop: 8, opacity: loading ? 0.6 : 1 }}
          >
            {loading ? "Sending…" : "Send reset code"}
          </button>
        </form>

        {success && (
          <Link
            href="/reset-password"
            className="btn btn-o"
            style={{ width: "100%", justifyContent: "center", marginTop: 12 }}
          >
            Enter reset code &rarr;
          </Link>
        )}

        <div className="card-foot" style={{ marginTop: 28 }}>
          <p>
            Remember your password?{" "}
            <Link href="/login">Sign in &rarr;</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
