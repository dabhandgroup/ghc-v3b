"use client";

import { useLang } from "./LanguageProvider";

export default function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <button
      className="lang-toggle"
      onClick={() => setLang(lang === "en" ? "el" : "en")}
      aria-label={lang === "en" ? "Switch to Greek" : "Switch to English"}
      type="button"
    >
      <span className={`lang-opt${lang === "en" ? " lang-opt-active" : ""}`}>EN</span>
      <span className="lang-sep">/</span>
      <span className={`lang-opt${lang === "el" ? " lang-opt-active" : ""}`}>EL</span>
    </button>
  );
}
