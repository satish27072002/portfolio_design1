"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorSpotlight() {
  const spotRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(true); // default hidden until we confirm pointer

  useEffect(() => {
    // Only activate for pointer devices (mouse), not touch screens
    const mq = window.matchMedia("(pointer: fine)");
    setIsTouch(!mq.matches);

    const onMouseMove = (e: MouseEvent) => {
      const el = spotRef.current;
      if (!el) return;
      const wrapper = el.parentElement;
      if (!wrapper) return;
      const rect = wrapper.getBoundingClientRect();
      el.style.left = `${e.clientX - rect.left}px`;
      el.style.top = `${e.clientY - rect.top}px`;
    };

    if (mq.matches) {
      window.addEventListener("mousemove", onMouseMove, { passive: true });
    }

    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  if (isTouch) return null;

  return (
    <div
      ref={spotRef}
      aria-hidden
      className="pointer-events-none absolute z-0 -translate-x-1/2 -translate-y-1/2 rounded-full
                 dark:[mix-blend-mode:overlay] [mix-blend-mode:multiply]"
      style={{
        width: 600,
        height: 600,
        background:
          "radial-gradient(circle, rgba(169,63,85,0.10) 0%, rgba(169,63,85,0.03) 40%, transparent 70%)",
      }}
    />
  );
}
