"use client";

import { Fragment, useEffect } from "react";
import { stagger, useAnimate, type AnimationPlaybackControlsWithThen } from "framer-motion";

type HeroHeadingProps = {
  name: string;
  headline: string;
};

function Words({ text, accentLastWord = false }: { text: string; accentLastWord?: boolean }) {
  const words = text.split(/\s+/);

  return words.map((word, index) => (
    <Fragment key={`${word}-${index}`}>
      {index > 0 ? " " : ""}
      <span
        data-hero-word
        className={`inline-block ${accentLastWord && index === words.length - 1 ? "text-accent-text" : ""}`}
      >
        {word}
      </span>
    </Fragment>
  ));
}

export function HeroHeading({ name, headline }: HeroHeadingProps) {
  const [scope, animate] = useAnimate<HTMLDivElement>();

  useEffect(() => {
    const words = scope.current?.querySelectorAll<HTMLSpanElement>("[data-hero-word]");
    if (!words?.length) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animation: AnimationPlaybackControlsWithThen | undefined;

    function showWordsImmediately() {
      animation?.stop();
      words?.forEach((word) => {
        word.style.opacity = "1";
        word.style.transform = "none";
      });
    }

    // Static HTML starts visible. Only animate after hydration when allowed.
    if (!preference.matches) {
      animation = animate(
        words,
        { opacity: [0, 1], y: [12, 0] },
        { duration: 0.45, delay: stagger(0.08), ease: [0.22, 1, 0.36, 1] },
      );
    }

    // Also stop an in-progress animation if the preference changes.
    preference.addEventListener("change", showWordsImmediately);
    return () => {
      preference.removeEventListener("change", showWordsImmediately);
      animation?.stop();
    };
  }, [animate, scope]);

  return (
    <div ref={scope}>
      <h1
        id="intro-heading"
        className="max-w-5xl font-heading text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.95] font-medium tracking-[-0.055em] text-balance"
      >
        <Words text={name} accentLastWord />
      </h1>
      <p className="mt-6 max-w-5xl font-heading text-[clamp(2rem,5.5vw,4.5rem)] leading-[1.1] font-medium tracking-[-0.045em] text-balance">
        <Words text={headline} />
      </p>
    </div>
  );
}
