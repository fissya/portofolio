"use client";

import { useEffect, useRef, type PointerEvent, type ReactNode } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

export function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const media = useRef<MediaQueryList | null>(null);
  const frame = useRef<number | null>(null);
  const pointer = useRef<{ target: HTMLElement; x: number; y: number } | null>(null);

  function resetPointer() {
    if (frame.current !== null) window.cancelAnimationFrame(frame.current);
    frame.current = null;
    pointer.current = null;
  }

  useEffect(() => {
    media.current = window.matchMedia(
      "(min-width: 64rem) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    return () => {
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
      media.current = null;
    };
  }, []);

  function trackPointer(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse" || !media.current?.matches) return;
    pointer.current = { target: event.currentTarget, x: event.clientX, y: event.clientY };
    if (frame.current !== null) return;

    frame.current = window.requestAnimationFrame(() => {
      frame.current = null;
      const point = pointer.current;
      if (!point || !media.current?.matches) return;
      const bounds = point.target.getBoundingClientRect();
      point.target.style.setProperty("--spotlight-x", `${point.x - bounds.left}px`);
      point.target.style.setProperty("--spotlight-y", `${point.y - bounds.top}px`);
    });
  }

  return (
    <article
      onPointerMove={trackPointer}
      onPointerLeave={resetPointer}
      className={`project-card relative isolate min-w-0 overflow-hidden rounded-2xl border border-border bg-surface ${className}`}
    >
      <span aria-hidden="true" className="project-card-spotlight pointer-events-none absolute inset-0" />
      {children}
    </article>
  );
}
