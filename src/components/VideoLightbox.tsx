"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

export default function VideoLightbox() {
  const [open, setOpen] = useState(false);
  const [stickyDismissed, setStickyDismissed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => {
    setOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  const dismissSticky = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setStickyDismissed(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  const lightbox = open ? (
    <div className="vl-backdrop" onClick={close}>
      <button className="vl-close" onClick={close} aria-label="Close video">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <div className="vl-wrap" onClick={(e) => e.stopPropagation()}>
        <video
          ref={videoRef}
          className="vl-video"
          autoPlay
          controls
          playsInline
          poster="https://platformone.com.au/wp-content/uploads/2024/05/IMG_1696-jpg.webp"
        >
          <source src="/assets/platformone-hero.mp4" type="video/mp4" />
          <source src="https://platformone.com.au/wp-content/uploads/2023/10/GIFS_19.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* Desktop video card */}
      <div className="hero-panel">
        <button className="hero-vid-card" onClick={() => setOpen(true)} aria-label="Watch promo video">
          <video
            className="hero-vid-player"
            autoPlay
            muted
            loop
            playsInline
            poster="https://platformone.com.au/wp-content/uploads/2024/05/IMG_1696-jpg.webp"
          >
            <source src="/assets/platformone-hero.mp4" type="video/mp4" />
            <source src="https://platformone.com.au/wp-content/uploads/2023/10/GIFS_19.mp4" type="video/mp4" />
          </video>
          <div className="hero-vid-overlay" />
          <div className="hero-vid-badge">
            <div className="hero-vid-play">
              <svg viewBox="0 0 24 24" fill="currentColor" width="10" height="10">
                <polygon points="8,5 19,12 8,19" />
              </svg>
            </div>
            <span>Watch Promo</span>
          </div>
        </button>
      </div>

      {/* Mobile video card – shown below hero title */}
      {!stickyDismissed && (
        <div className="hero-mobile-vid">
          <button
            className="hero-vid-close"
            onClick={dismissSticky}
            aria-label="Close sticky video"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <button className="hero-vid-card" onClick={() => setOpen(true)} aria-label="Watch promo video">
            <video
              className="hero-vid-player"
              autoPlay
              muted
              loop
              playsInline
              poster="https://platformone.com.au/wp-content/uploads/2024/05/IMG_1696-jpg.webp"
            >
              <source src="/assets/platformone-hero.mp4" type="video/mp4" />
              <source src="https://platformone.com.au/wp-content/uploads/2023/10/GIFS_19.mp4" type="video/mp4" />
            </video>
            <div className="hero-vid-overlay" />
            <div className="hero-vid-badge">
              <div className="hero-vid-play">
                <svg viewBox="0 0 24 24" fill="currentColor" width="10" height="10">
                  <polygon points="8,5 19,12 8,19" />
                </svg>
              </div>
              <span>Watch Promo</span>
            </div>
          </button>
        </div>
      )}

      {/* Lightbox – portaled to body */}
      {mounted && lightbox && createPortal(lightbox, document.body)}
    </>
  );
}
