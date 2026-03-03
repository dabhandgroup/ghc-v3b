import type { Metadata } from "next";
import Link from "next/link";
import LogoFull from "@/components/LogoFull";

export const metadata: Metadata = {
  title: "Access Denied \u2014 GHC",
  description: "You need investor access to view this page.",
};

export default function AccessDeniedPage() {
  return (
    <div className="card card-fixed">
      <div className="bg-glow" />
      <div className="card-inner" style={{ textAlign: "center" }}>
        <div className="card-logo card-logo-lg">
          <Link href="/">
            <LogoFull />
          </Link>
        </div>

        <div style={{
          width: 64, height: 64, borderRadius: "50%",
          border: "1px solid var(--border2)", display: "flex",
          alignItems: "center", justifyContent: "center",
          margin: "0 auto 28px",
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--muted2)" strokeWidth="1.5">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>

        <h1 style={{
          fontFamily: "var(--ff)", fontWeight: 200,
          fontSize: "clamp(28px, 5vw, 40px)", letterSpacing: "-1.5px",
          marginBottom: 12,
        }}>
          Access denied.
        </h1>
        <p style={{
          fontSize: 14, color: "var(--muted)", lineHeight: 1.78,
          marginBottom: 36, maxWidth: 340, margin: "0 auto 36px",
        }}>
          This area is restricted to approved GHC investors. If you believe you should have access, please sign in or apply below.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/login" className="btn btn-s">Sign in</Link>
          <Link href="/signup" className="btn btn-o">Apply for access &rarr;</Link>
        </div>

        <div style={{ marginTop: 40 }}>
          <Link href="/" style={{
            fontFamily: "var(--ff)", fontSize: 11, fontWeight: 300,
            color: "var(--muted2)", textDecoration: "none", letterSpacing: "0.5px",
          }}>
            &larr; Back to GHC
          </Link>
        </div>
      </div>
    </div>
  );
}
