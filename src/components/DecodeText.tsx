"use client";

import { useRef, useCallback } from "react";

// Clean character set — no noisy symbols like !@#$%
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

interface DecodeTextProps {
  children: string;
  className?: string;
  href?: string;
  as?: "a" | "span" | "div";
  onClick?: () => void;
}

export default function DecodeText({ children, className, href, as = "span", onClick }: DecodeTextProps) {
  const elRef = useRef<HTMLElement>(null);
  const decoding = useRef(false);
  const origRef = useRef(children);

  const decode = useCallback(() => {
    const el = elRef.current;
    if (!el || decoding.current) return;
    decoding.current = true;

    const orig = origRef.current;
    // Lock width on first hover to prevent layout shift
    if (!el.style.width) {
      const w = el.getBoundingClientRect().width;
      if (w > 0) {
        el.style.width = w + "px";
        el.style.display = "inline-block";
        el.style.overflow = "hidden";
      }
    }

    const len = orig.length;
    const DURATION = 550;
    const FPS = 30;
    const INT = 1000 / FPS;
    const TOTAL = Math.ceil(DURATION / INT);
    let f = 0;

    const id = setInterval(() => {
      const progress = f / TOTAL;
      // Left-to-right resolve with stagger
      const resolved = Math.floor(progress * len);

      el.textContent = orig
        .split("")
        .map((c, i) => {
          if (c === " ") return " ";
          if (i < resolved) return orig[i];
          // Characters near the resolve edge flicker toward correct value
          if (i === resolved && Math.random() > 0.4) return orig[i];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      if (++f > TOTAL) {
        clearInterval(id);
        el.textContent = orig;
        decoding.current = false;
      }
    }, INT);
  }, []);

  const Tag = as;
  const props: Record<string, unknown> = {
    ref: elRef,
    className,
    onMouseEnter: decode,
    onClick,
  };
  if (as === "a" && href) {
    props.href = href;
  }

  return <Tag {...props} data-decode="">{children}</Tag>;
}
