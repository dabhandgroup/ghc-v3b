"use client";

import { useState } from "react";
import Link from "next/link";
import IntlPhoneInput from "./IntlPhoneInput";

const QUICK_LINKS = [
  { label: "About", href: "/#about", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Ventures", href: "/#products", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { label: "Careers", href: "/careers", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { label: "Investors", href: "/investors", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
];

export default function FloatingWidget() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<"links" | "form">("links");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const handleClose = () => {
    setOpen(false);
    // Reset to links after close animation
    setTimeout(() => { setView("links"); setSent(false); }, 300);
  };

  return (
    <>
      {/* Backdrop */}
      <div className={`fw-backdrop${open ? " fw-backdrop-show" : ""}`} onClick={handleClose} />

      {/* Panel */}
      <div className={`fw-panel${open ? " fw-panel-open" : ""}`}>
        <div className="fw-panel-header">
          <div>
            <h4 className="fw-panel-title">
              {view === "links" ? "How can we help?" : "Send us a message"}
            </h4>
            <p className="fw-panel-sub">
              {view === "links" ? "Quick links or send us a message." : "We\u2019ll get back to you within 24 hours."}
            </p>
          </div>
          <button className="fw-close" onClick={handleClose} aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="fw-panel-body">
          {view === "links" && (
            <>
              <div className="fw-links">
                {QUICK_LINKS.map((l) => (
                  <Link key={l.label} href={l.href} className="fw-link" onClick={handleClose}>
                    <svg className="fw-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18"><path d={l.icon} /></svg>
                    <span>{l.label}</span>
                    <svg className="fw-link-arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                ))}
              </div>
              <div className="fw-divider">
                <span>or</span>
              </div>
              <button className="btn btn-s fw-form-btn" onClick={() => setView("form")}>
                Send us a message &rarr;
              </button>
            </>
          )}

          {view === "form" && !sent && (
            <div className="fw-form">
              <div className="fr">
                <input className="fi" type="text" placeholder="First name" required />
                <input className="fi" type="text" placeholder="Last name" required />
              </div>
              <input className="fi" type="email" placeholder="Email address" required />
              <IntlPhoneInput value={phone} onChange={setPhone} name="widget-phone" />
              <textarea className="fi" placeholder="Your message" rows={3} />
              <button
                className="btn btn-s"
                style={{ width: "100%", justifyContent: "center" }}
                onClick={() => setSent(true)}
              >
                Send message &rarr;
              </button>
              <button className="fw-back" onClick={() => setView("links")} type="button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                Back to quick links
              </button>
            </div>
          )}

          {view === "form" && sent && (
            <div className="fw-sent">
              <div className="fw-sent-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32"><path d="M20 6L9 17l-5-5" /></svg>
              </div>
              <h4>Message sent</h4>
              <p>We&apos;ll get back to you within 24 hours.</p>
              <button className="btn btn-o" style={{ marginTop: 16 }} onClick={handleClose}>
                Close
              </button>
            </div>
          )}
        </div>
      </div>

      {/* FAB */}
      <button
        className={`fw-fab${open ? " fw-fab-active" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Contact us"
      >
        <svg className="fw-fab-chat" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <svg className="fw-fab-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </>
  );
}
