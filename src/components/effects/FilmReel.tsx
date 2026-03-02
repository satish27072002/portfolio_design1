"use client";

import { useEffect } from "react";

/**
 * FilmReel — scroll-driven sprocket hole animation.
 *
 * Sets --reel-offset on :root as the user scrolls.
 * The sprocket hole pseudo-elements (::before / ::after on
 * .paper-wrapper) read this value via background-position,
 * making the dots travel upward — just like film feeding
 * through a projector gate.
 *
 * No DOM mutation. No re-renders. Pure CSS compositing.
 */
export default function FilmReel() {
  useEffect(() => {
    // Honour prefers-reduced-motion — leave holes static
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf: number;

    // px of dot travel per px of page scroll.
    // At 0.35: scrolling ~80px advances the pattern one full 28px cycle.
    const SPEED = 0.35;

    const update = () => {
      const offset = window.scrollY * SPEED;
      // The repeating background-size handles the modulo automatically —
      // no need to clamp or wrap in JS.
      document.documentElement.style.setProperty(
        "--reel-offset",
        `${offset}px`
      );
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
