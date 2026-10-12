import { HeroHeading } from "@/components/sections/HeroHeading";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section aria-labelledby="intro-heading" className="pt-16 pb-12 sm:pt-24 sm:pb-16">
      <p className="mb-6 font-mono text-xs tracking-widest text-muted uppercase">
        {site.intro.eyebrow}
      </p>
      <HeroHeading name={site.name} headline={site.headline} />
      <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
        {site.bio}
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={site.intro.primaryAction.href}
          className="inline-flex min-h-12 items-center justify-center rounded-sm border border-accent bg-accent px-6 font-medium text-accent-foreground transition-opacity hover:opacity-85 motion-reduce:transition-none"
        >
          {site.intro.primaryAction.label}
        </a>
        <a
          href={site.intro.secondaryAction.href}
          className="inline-flex min-h-12 items-center justify-center rounded-sm border border-border px-6 font-medium text-foreground transition-colors hover:border-focus hover:bg-surface motion-reduce:transition-none"
        >
          {site.intro.secondaryAction.label}
        </a>
      </div>
    </section>
  );
}
