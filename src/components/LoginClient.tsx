"use client";

import { useState } from "react";
import Link from "next/link";
import LogoFull from "./LogoFull";

export default function LoginClient() {
  const [mode, setMode] = useState<"password" | "passwordless">("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [codeSent, setCodeSent] = useState(false);

  const handlePasswordLogin = async (e: React.FormEvent) => {
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
      await ms.loginMemberEmailPassword({ email, password });
      window.location.href = "/investor-portal/home";
    } catch (err: any) {
      setError(err?.message || err?.data?.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordlessSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const ms = (window as any).$memberstackDom;
      if (!ms) {
        setError("Authentication is still loading. Please try again.");
        setLoading(false);
        return;
      }
      await ms.sendMemberLoginPasswordlessEmail({ email });
      setCodeSent(true);
      setSuccess("Check your email for a 6-digit login code.");
    } catch (err: any) {
      setError(err?.message || err?.data?.message || "Could not send login code.");
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordlessVerify = async (e: React.FormEvent) => {
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
      await ms.loginMemberPasswordless({ passwordlessToken: code, email });
      window.location.href = "/investor-portal/home";
    } catch (err: any) {
      setError(err?.message || err?.data?.message || "Invalid or expired code.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card card-fixed">
      <div className="bg-glow" />
      <div className="card-inner">
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
          Investor Access
        </div>

        <h1>Welcome back.</h1>
        <p className="card-sub">Sign in to your GHC investor portal.</p>

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

        {/* Google sign-on */}
        <form data-ms-form="login" style={{ marginBottom: 0 }}>
          <button
            type="button"
            data-ms-auth-provider="google"
            className="btn btn-o"
            style={{ width: "100%", justifyContent: "center", gap: 10 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Sign in with Google
          </button>
        </form>

        <div className="divider">
          <span>{mode === "password" ? "or sign in with email" : "or use passwordless"}</span>
        </div>

        {mode === "password" ? (
          <form onSubmit={handlePasswordLogin}>
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
              <div>
                <label className="fi-lbl">Password</label>
                <input
                  className="fi"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Link href="/forgot-password" className="forgot">
                  Forgot password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-s"
              disabled={loading}
              style={{ width: "100%", justifyContent: "center", marginTop: 8, opacity: loading ? 0.6 : 1 }}
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>
        ) : (
          <>
            {!codeSent ? (
              <form onSubmit={handlePasswordlessSend}>
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
                  {loading ? "Sending…" : "Send login code"}
                </button>
              </form>
            ) : (
              <form onSubmit={handlePasswordlessVerify}>
                <div className="fi-wrap">
                  <div>
                    <label className="fi-lbl">6-digit code</label>
                    <input
                      className="fi"
                      type="text"
                      placeholder="000000"
                      inputMode="numeric"
                      autoComplete="one-time-code"
                      required
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      style={{ letterSpacing: "4px", textAlign: "center", fontSize: "18px" }}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-s"
                  disabled={loading}
                  style={{ width: "100%", justifyContent: "center", marginTop: 8, opacity: loading ? 0.6 : 1 }}
                >
                  {loading ? "Verifying…" : "Verify & sign in"}
                </button>
              </form>
            )}
          </>
        )}

        <div style={{ textAlign: "center", marginTop: 16 }}>
          <button
            type="button"
            onClick={() => { setMode(mode === "password" ? "passwordless" : "password"); setError(""); setSuccess(""); setCodeSent(false); }}
            style={{
              background: "none", border: "none", cursor: "pointer", padding: 0,
              fontFamily: "var(--ff)", fontSize: "11px", fontWeight: 300,
              color: "var(--muted2)", textDecoration: "underline", letterSpacing: "0.5px",
            }}
          >
            {mode === "password" ? "Use passwordless login instead" : "Use password login instead"}
          </button>
        </div>

        <div className="divider">
          <span>or</span>
        </div>

        <div className="card-foot">
          <p>
            Don&apos;t have access yet?{" "}
            <Link href="/signup">Apply here &rarr;</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
