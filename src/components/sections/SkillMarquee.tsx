"use client";

import { useState } from "react";
import type { Site } from "@/lib/content";

type SkillMarqueeProps = {
  skills: Site["skills"];
  labels: Site["marquee"];
};

export function SkillMarquee({ skills, labels }: SkillMarqueeProps) {
  const [paused, setPaused] = useState(false);

  return (
    <aside aria-label={labels.label} data-paused={paused} className="skill-marquee flex min-w-0 items-stretch border-y border-border bg-surface">
      <div className="min-w-0 flex-1 overflow-hidden py-3">
        <div className="skill-marquee-track">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1 ? true : undefined} className={`skill-marquee-group ${copy === 1 ? "skill-marquee-copy" : ""}`}>
              {skills.map((skill) => (
                <li key={skill} className="flex shrink-0 items-center gap-4 font-mono text-xs text-muted">
                  <span aria-hidden="true" className="size-1 rounded-full bg-accent" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <button
        type="button"
        aria-label={paused ? labels.resumeLabel : labels.pauseLabel}
        aria-pressed={paused}
        onClick={() => setPaused((value) => !value)}
        className="skill-marquee-control flex min-h-11 w-11 shrink-0 cursor-pointer items-center justify-center border-l border-border text-muted transition-colors hover:text-foreground motion-reduce:transition-none"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="currentColor">
          {paused ? <path d="m8 5 11 7-11 7V5Z" /> : <path d="M6 5h4v14H6zm8 0h4v14h-4z" />}
        </svg>
      </button>
    </aside>
  );
}
