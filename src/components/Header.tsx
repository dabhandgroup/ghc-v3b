"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import LogoFull from "./LogoFull";
import DecodeText from "./DecodeText";

const VENTURES = [
  { name: "Profiles", href: "/case-study/profiles", logo: "/images/logos/profiles.svg" },
  { name: "Wardrobe", href: "/case-study/wardrobe", logo: "/images/logos/wardrobe.svg" },
  { name: "Royale", href: "/case-study/royale", logo: "/images/logos/royale.svg" },
  { name: "GreatGaming", href: "/case-study/greatgaming", logo: "/images/logos/greatgaming.svg" },
  { name: "Platform One", href: "/case-study/platformone", logo: "/images/logos/platformone-white.png" },
  { name: "Grit Entertainment", href: "/case-study/gritentertainment", logo: "/images/logos/gritentertainment.svg" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [invDropOpen, setInvDropOpen] = useState(false);
  const invDropTimer = useRef<ReturnType<typeof setTimeout>>(null);
  const megaTimer = useRef<ReturnType<typeof setTimeout>>(null);

  const closeMega = useCallback(() => {
    megaTimer.current = setTimeout(() => setMegaOpen(false), 200);
  }, []);

  const openMega = useCallback(() => {
    if (megaTimer.current) clearTimeout(megaTimer.current);
    setMegaOpen(true);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (megaOpen) setMegaOpen(false);
        if (menuOpen) setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, megaOpen]);

  useEffect(() => {
    if (menuOpen) {
      const scrollbarW = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarW}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const navClass = `main-nav${megaOpen ? " mega-active" : ""}`;

  return (
    <>
      {/* Mobile Menu */}
      <div className={`mm${menuOpen ? " open" : ""}`}>
        <div className="mm-bg" />
        <div className="mm-inner">
          <nav className="mm-links">
            <Link href="/#home" className="mm-a" onClick={closeMenu}>Home</Link>
            <Link href="/#about" className="mm-a" onClick={closeMenu}>About</Link>
            <Link href="/#products" className="mm-a" onClick={closeMenu}>Ventures</Link>
            <span data-ms-content="!members">
              <Link href="/investors" className="mm-a" onClick={closeMenu}>Investors</Link>
            </span>
            <span data-ms-content="members">
              <Link href="/investor-portal/home" className="mm-a" onClick={closeMenu}>Dashboard</Link>
            </span>
            <Link href="/careers" className="mm-a" onClick={closeMenu}>Careers</Link>
            <Link href="/press" className="mm-a" onClick={closeMenu}>Press</Link>
          </nav>
          <div className="mm-acts" data-ms-content="!members">
            <Link href="/login" className="btn btn-o mm-btn" onClick={closeMenu}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Log in
            </Link>
            <Link href="/signup" className="btn btn-s mm-btn" onClick={closeMenu}>Become an investor</Link>
          </div>
          <div className="mm-acts" data-ms-content="members">
            <Link href="/investor-portal/home" className="btn btn-s mm-btn" onClick={closeMenu}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
              Dashboard
            </Link>
          </div>
          <div className="mm-foot">
            <p>&copy; 2026 GHC Pty Ltd</p>
            <p>48 Smith Street, Collingwood</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className={navClass}>
        <Link href="/#home" className="nav-logo">
          <LogoFull className="logo-full" />
        </Link>
        <ul className="nav-center">
          <li><Link href="/#home"><DecodeText>Home</DecodeText></Link></li>
          <li><Link href="/#about"><DecodeText>About</DecodeText></Link></li>
          <li
            className="nav-ventures-li"
            onMouseEnter={openMega}
            onMouseLeave={closeMega}
          >
            <Link href="/#products"><DecodeText>Ventures</DecodeText></Link>
            <div className={`v-drop${megaOpen ? " v-drop-open" : ""}`}>
              {VENTURES.map((v) => (
                <Link
                  key={v.name}
                  href={v.href}
                  className="v-drop-item"
                  onClick={() => setMegaOpen(false)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={v.logo} alt="" className="v-drop-logo" />
                  {v.name}
                </Link>
              ))}
              <Link href="/#products" className="v-drop-all" onClick={() => setMegaOpen(false)}>
                View all ventures &rarr;
              </Link>
            </div>
          </li>
          <li><Link href="/careers"><DecodeText>Careers</DecodeText></Link></li>
          <li><Link href="/press"><DecodeText>Press</DecodeText></Link></li>
        </ul>
        <div className="nav-right">
          <span data-ms-content="!members">
            <div
              className="nav-inv-wrap"
              onMouseEnter={() => { if (invDropTimer.current) clearTimeout(invDropTimer.current); setInvDropOpen(true); }}
              onMouseLeave={() => { invDropTimer.current = setTimeout(() => setInvDropOpen(false), 200); }}
            >
              <button className="nav-inv" type="button">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <DecodeText>Investors</DecodeText>
                <svg className="nav-inv-chev" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className={`nav-inv-drop${invDropOpen ? " nav-inv-drop-open" : ""}`}>
                <Link href="/login" className="nav-inv-drop-item" onClick={() => setInvDropOpen(false)}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" />
                    <polyline points="10 17 15 12 10 7" />
                    <line x1="15" y1="12" x2="3" y2="12" />
                  </svg>
                  Sign In
                </Link>
                <Link href="/signup" className="nav-inv-drop-item" onClick={() => setInvDropOpen(false)}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <line x1="20" y1="8" x2="20" y2="14" />
                    <line x1="23" y1="11" x2="17" y2="11" />
                  </svg>
                  Apply Now
                </Link>
              </div>
            </div>
          </span>
          <span data-ms-content="members">
            <Link href="/investor-portal/home" className="nav-inv">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
              <DecodeText>Dashboard</DecodeText>
            </Link>
          </span>
          <Link href="/contact" className="nav-cta nav-cta-contact">Contact</Link>
          <button
            className={`hamb${menuOpen ? " x" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
    </>
  );
}
