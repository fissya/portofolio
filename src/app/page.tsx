import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { SkillMarquee } from "@/components/sections/SkillMarquee";
import { site } from "@/lib/content";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <Hero />
      <Projects />
      <SkillMarquee skills={site.skills} labels={site.marquee} />
      <About />
      <Contact />
    </div>
  );
}
