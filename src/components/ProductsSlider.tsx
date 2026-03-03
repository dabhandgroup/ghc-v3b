"use client";

import { useRef, useState, useCallback, useEffect } from "react";

export default function ProductsSlider({ children }: { children: React.ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [total, setTotal] = useState(0);

  const updateState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>(".pc");
    setTotal(cards.length);
    if (cards.length === 0) return;
    const scrollPos = el.scrollLeft;
    const cardWidth = cards[0].offsetWidth;
    const idx = Math.round(scrollPos / (cardWidth + 2)); // 2px gap
    setCurrent(Math.min(idx, cards.length - 1));
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateState();
    el.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);
    return () => {
      el.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, [updateState]);

  const scrollTo = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>(".pc");
    if (cards.length === 0) return;
    const next = Math.max(0, Math.min(current + dir, cards.length - 1));
    const cardWidth = cards[0].offsetWidth;
    el.scrollTo({ left: next * (cardWidth + 2), behavior: "smooth" });
  };

  return (
    <div className="pr-slider-wrap">
      <div className="pr-grid" ref={trackRef}>
        {children}
      </div>
      {total > 1 && (
        <div className="pr-nav">
          <button
            className={`pr-arr${current <= 0 ? " pr-arr-hide" : ""}`}
            onClick={() => scrollTo(-1)}
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="pr-dots">
            {Array.from({ length: total }).map((_, i) => (
              <span key={i} className={`pr-dot${i === current ? " pr-dot-active" : ""}`} />
            ))}
          </span>
          <button
            className={`pr-arr${current >= total - 1 ? " pr-arr-hide" : ""}`}
            onClick={() => scrollTo(1)}
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
