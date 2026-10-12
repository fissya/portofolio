import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { site } from "@/lib/content";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <Hero />
      <Projects />
      {site.sections.filter((section) => section.id !== site.projectUi.sectionId).map((section) => (
        <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`} className="scroll-mt-36 border-t border-border py-12 sm:scroll-mt-24 sm:py-16">
          <SectionHeader section={section} />
        </section>
      ))}
    </div>
  );
}
