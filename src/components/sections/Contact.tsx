import { SectionHeader } from "@/components/sections/SectionHeader";
import { site } from "@/lib/content";

export function Contact() {
  const section = site.sections.find((entry) => entry.id === site.contactUi.sectionId);
  if (!section) throw new Error("Contact section is missing from site content.");

  const socialLinks = [
    { label: site.contactUi.githubLabel, href: site.githubUrl },
    { label: site.contactUi.linkedinLabel, href: site.linkedinUrl },
  ];

  return (
    <section id={section.id} aria-labelledby={`${section.id}-heading`} className="scroll-mt-36 border-t border-border py-12 sm:scroll-mt-24 sm:py-16">
      <SectionHeader section={section} />
      <div className="mt-10 grid gap-10 sm:grid-cols-[1fr_2fr] sm:gap-12">
        <div className="min-w-0">
          <p className="font-mono text-xs text-muted">{site.contactUi.emailLabel}</p>
          <a href={`mailto:${site.email}`} className="mt-3 inline-flex min-h-11 items-center break-all font-heading text-xl font-medium tracking-tight text-accent-text underline-offset-4 hover:underline sm:text-2xl">
            {site.email}
          </a>
          <ul className="mt-5 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-sm border border-border px-4 font-mono text-xs transition-colors hover:border-focus hover:bg-surface motion-reduce:transition-none">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-surface p-6">
          <p className="max-w-xl text-sm leading-7 text-muted">{site.contactUi.cvNotice}</p>
          <a href={site.cv.href} download className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-sm border border-accent bg-accent px-6 font-medium text-accent-foreground transition-opacity hover:opacity-85 motion-reduce:transition-none sm:w-auto">
            {site.cv.label}
          </a>
        </div>
      </div>
    </section>
  );
}
