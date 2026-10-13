import { SectionHeader } from "@/components/sections/SectionHeader";
import { PlaceholderBadge } from "@/components/ui/PlaceholderBadge";
import { Tag } from "@/components/ui/Tag";
import { site } from "@/lib/content";

export function About() {
  const section = site.sections.find((entry) => entry.id === site.aboutUi.sectionId);
  if (!section) throw new Error("About section is missing from site content.");

  return (
    <section id={section.id} aria-labelledby={`${section.id}-heading`} className="scroll-mt-36 border-t border-border py-12 sm:scroll-mt-24 sm:py-16">
      <SectionHeader section={section} />
      <div className="mt-10 grid gap-10 sm:grid-cols-[1fr_2fr] sm:gap-12">
        <section aria-labelledby="skills-heading">
          <h3 id="skills-heading" className="font-heading text-xl font-medium tracking-tight">{site.aboutUi.skillsTitle}</h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {site.skills.map((skill) => <li key={skill}><Tag label={skill} /></li>)}
          </ul>
        </section>
        <section aria-labelledby="education-heading">
          <h3 id="education-heading" className="font-heading text-xl font-medium tracking-tight">{site.aboutUi.educationTitle}</h3>
          <ol className="mt-6 space-y-8 border-l border-border pl-6">
            {site.education.map((entry) => (
              <li key={entry.id} className="relative">
                <span aria-hidden="true" className="absolute top-1 -left-[29px] size-2 rounded-full bg-accent" />
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-mono text-xs text-muted">{entry.period}</p>
                  <PlaceholderBadge placeholder={entry.placeholder} />
                </div>
                <h4 className="mt-3 font-heading text-xl font-medium tracking-tight">{entry.degree}</h4>
                <p className="mt-1 text-sm text-foreground">{entry.institution}</p>
                <p className="mt-3 max-w-xl text-sm leading-7 text-muted">{entry.description}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </section>
  );
}
