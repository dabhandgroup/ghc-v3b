"use client";

import { useRef, useState, useCallback, useEffect } from "react";

export default function VenturesSlider({ children }: { children: React.ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    // Drag to scroll on desktop
    let isDown = false;
    let startX = 0;
    let scrollStart = 0;
    let hasDragged = false;
    const onDown = (e: MouseEvent) => {
      isDown = true;
      hasDragged = false;
      startX = e.pageX - el.offsetLeft;
      scrollStart = el.scrollLeft;
      el.style.scrollBehavior = "auto";
      el.style.cursor = "grabbing";
    };
    const onUp = () => {
      isDown = false;
      el.style.scrollBehavior = "";
      el.style.cursor = "";
      if (hasDragged) {
        // Block click on links after drag
        const blocker = (ev: MouseEvent) => { ev.preventDefault(); ev.stopPropagation(); };
        el.addEventListener("click", blocker, { capture: true, once: true });
      }
    };
    const onMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = x - startX;
      if (Math.abs(walk) > 4) hasDragged = true;
      el.scrollLeft = scrollStart - walk;
    };
    el.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mousemove", onMove);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
      el.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mousemove", onMove);
    };
  }, [checkScroll]);

  const scroll = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    // Scroll by one card width
    const card = el.querySelector<HTMLElement>(".pc");
    const amount = card ? card.offsetWidth + 2 : el.clientWidth / 4;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="vs-wrap">
      <div className="vs-track" ref={trackRef}>
        {children}
      </div>
      <button
        className={`vs-arr vs-arr-l${canScrollLeft ? "" : " vs-arr-hide"}`}
        onClick={() => scroll(-1)}
        aria-label="Scroll left"
      >
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" width="16" height="16">
          <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" />
        </svg>
      </button>
      <button
        className={`vs-arr vs-arr-r${canScrollRight ? "" : " vs-arr-hide"}`}
        onClick={() => scroll(1)}
        aria-label="Scroll right"
      >
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" width="16" height="16">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" />
        </svg>
      </button>
    </div>
  );
}
