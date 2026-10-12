import { ProjectCard } from "@/components/sections/ProjectCard";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { projects, site } from "@/lib/content";

export function Projects() {
  const section = site.sections.find((entry) => entry.id === site.projectUi.sectionId);
  if (!section) throw new Error("Project section is missing from site content.");

  return (
    <section id={section.id} aria-labelledby={`${section.id}-heading`} className="scroll-mt-36 border-t border-border py-12 sm:scroll-mt-24 sm:py-16">
      <SectionHeader section={section} />
      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} featured={index === 0} />
        ))}
      </div>
    </section>
  );
}
