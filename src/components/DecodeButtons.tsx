"use client";

import { useEffect } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const FRAMES = 18;
const INT = 25;

export default function DecodeButtons() {
  useEffect(() => {
    const active = new WeakSet<HTMLElement>();

    function decode(el: HTMLElement) {
      if (active.has(el)) return;
      active.add(el);

      const orig = el.getAttribute("data-text") || el.textContent || "";
      if (!orig) { active.delete(el); return; }
      el.setAttribute("data-text", orig);

      let f = 0;
      const id = setInterval(() => {
        const p = f / FRAMES;
        el.textContent = orig
          .split("")
          .map((c, i) => {
            if (c === " " || c === "\u00A0") return c;
            if (i / orig.length < p) return orig[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
        if (++f > FRAMES) {
          clearInterval(id);
          el.textContent = orig;
          active.delete(el);
        }
      }, INT);
    }

    function onEnter(e: Event) {
      const target = e.currentTarget as HTMLElement;
      const textEl = target.querySelector("[data-decode]") as HTMLElement | null;
      if (textEl) {
        decode(textEl);
      } else if (target.childNodes.length === 1 && target.childNodes[0].nodeType === Node.TEXT_NODE) {
        decode(target);
      }
    }

    function attach() {
      const btns = document.querySelectorAll<HTMLElement>(".btn, .nav-cta, .ft-cta-btn, .lt-btn-primary, .lt-btn-ghost, .lt-btn-white, .lt-btn-glass, .nav-inv");
      btns.forEach((btn) => {
        if (btn.getAttribute("data-decode-bound")) return;
        btn.setAttribute("data-decode-bound", "1");
        // Lock exact width and prevent wrapping to avoid resize on scramble
        // Skip nav-inv — its internal DecodeText handles width locking
        if (!btn.classList.contains("nav-inv")) {
          const rect = btn.getBoundingClientRect();
          if (rect.width > 0) {
            btn.style.width = rect.width + "px";
            btn.style.whiteSpace = "nowrap";
            btn.style.overflow = "hidden";
            btn.style.textOverflow = "clip";
            btn.style.boxSizing = "border-box";
          }
        }
        btn.addEventListener("mouseenter", onEnter);
      });
    }

    attach();
    const observer = new MutationObserver(attach);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      const btns = document.querySelectorAll<HTMLElement>("[data-decode-bound]");
      btns.forEach((btn) => {
        btn.removeEventListener("mouseenter", onEnter);
        btn.removeAttribute("data-decode-bound");
      });
    };
  }, []);

  return null;
}
