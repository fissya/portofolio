import { site } from "@/content/site";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <section aria-labelledby="intro-heading" className="py-20 sm:py-32">
        <p className="mb-6 font-mono text-xs tracking-widest text-accent-text uppercase">
          {site.intro.eyebrow}
        </p>
        <h1 id="intro-heading" className="max-w-4xl font-heading text-5xl leading-[1.05] font-medium tracking-tight sm:text-7xl lg:text-8xl">
          {site.intro.title}
        </h1>
        <p className="mt-8 max-w-xl text-base leading-8 text-muted sm:text-lg">
          {site.intro.description}
        </p>
      </section>
      {site.sections.map((section) => (
        <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`} className="scroll-mt-36 border-t border-border py-12 sm:scroll-mt-24 sm:py-16">
          <div className="grid gap-5 sm:grid-cols-[1fr_2fr] sm:gap-12">
            <h2 id={`${section.id}-heading`} className="font-heading text-3xl font-medium tracking-tight">
              {section.title}
            </h2>
            <div className="max-w-xl">
              {section.status && (
                <p className="mb-4 inline-flex rounded-sm border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted">
                  {section.status}
                </p>
              )}
              <p className="leading-8 text-muted">{section.description}</p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
