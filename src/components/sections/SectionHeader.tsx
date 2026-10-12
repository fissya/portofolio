import type { Site } from "@/lib/content";

type SectionHeaderProps = { section: Site["sections"][number] };

export function SectionHeader({ section }: SectionHeaderProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-[1fr_2fr] sm:gap-12">
      <h2 id={`${section.id}-heading`} className="font-heading text-3xl font-medium tracking-tight">
        <span className="mr-3 font-mono text-sm tracking-normal text-accent-text">{section.number} /{" "}</span>
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
  );
}
