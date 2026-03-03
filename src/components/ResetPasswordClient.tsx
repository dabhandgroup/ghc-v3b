"use client";

import { useState } from "react";
import Link from "next/link";
import LogoFull from "./LogoFull";

export default function ResetPasswordClient() {
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const ms = (window as any).$memberstackDom;
      if (!ms) {
        setError("Authentication is still loading. Please wait a moment and try again.");
        setLoading(false);
        return;
      }
      await ms.resetMemberPassword({ token, newPassword });
      setSuccess(true);
    } catch (err: any) {
      const msg = err?.message || err?.data?.message || "Invalid or expired code. Please try again.";
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

        {success ? (
          <>
            <h1>Password updated.</h1>
            <p className="card-sub">
              Your password has been reset successfully. You can now sign in with your new password.
            </p>
            <Link
              href="/login"
              className="btn btn-s"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Sign in &rarr;
            </Link>
          </>
        ) : (
          <>
            <h1>Set new password.</h1>
            <p className="card-sub">
              Enter the 6-digit code from your email and choose a new password.
            </p>

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
                  <label className="fi-lbl">Reset code</label>
                  <input
                    className="fi"
                    type="text"
                    placeholder="6-digit code"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    required
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    style={{ letterSpacing: "4px", textAlign: "center", fontSize: "18px" }}
                  />
                </div>
                <div>
                  <label className="fi-lbl">New password</label>
                  <input
                    className="fi"
                    type="password"
                    placeholder="Choose a new password"
                    autoComplete="new-password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-s"
                disabled={loading}
                style={{ width: "100%", justifyContent: "center", marginTop: 8, opacity: loading ? 0.6 : 1 }}
              >
                {loading ? "Resetting…" : "Reset password"}
              </button>
            </form>

            <div className="card-foot" style={{ marginTop: 28 }}>
              <p>
                Didn&apos;t get a code?{" "}
                <Link href="/forgot-password">Send again &rarr;</Link>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
