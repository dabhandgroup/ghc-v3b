"use client";

import { useState, useRef, useEffect } from "react";
import { useLang } from "./LanguageProvider";
import { LANGUAGES } from "./LanguageProvider";

export default function LanguageToggle() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="lang-dropdown" ref={ref}>
      <button
        className="lang-dropdown-btn"
        onClick={() => setOpen(!open)}
        type="button"
        aria-label="Select language"
      >
        <span className="lang-flag">{current.flag}</span>
        <svg className={`lang-chev${open ? " lang-chev-open" : ""}`} width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className={`lang-menu${open ? " lang-menu-open" : ""}`}>
        {LANGUAGES.map((l) => (
          <button
            key={l.code}
            className={`lang-menu-item${l.code === lang ? " lang-menu-active" : ""}`}
            onClick={() => { setLang(l.code); setOpen(false); }}
            type="button"
          >
            <span className="lang-flag">{l.flag}</span>
            <span className="lang-menu-label">{l.label}</span>
            {l.code === lang && (
              <svg className="lang-menu-check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
