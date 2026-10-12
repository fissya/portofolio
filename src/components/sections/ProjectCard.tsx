import Link from "next/link";
import { PlaceholderBadge } from "@/components/ui/PlaceholderBadge";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Tag } from "@/components/ui/Tag";
import { site, type Project } from "@/lib/content";
import { getProjectHref } from "@/lib/projects";

type ProjectCardProps = { project: Project; featured?: boolean };

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <SpotlightCard className={featured ? "lg:col-span-2 lg:row-span-2" : ""}>
      <Link
        href={getProjectHref(project.slug)}
        aria-labelledby={`${project.slug}-title`}
        className={`relative z-10 flex h-full min-h-80 flex-col p-6 focus-visible:outline-offset-[-4px] ${featured ? "lg:p-10" : ""}`}
      >
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <PlaceholderBadge placeholder={project.placeholder} />
          <span className="font-mono text-xs text-muted">{project.year}</span>
        </div>
        <h3
          id={`${project.slug}-title`}
          className={`font-heading leading-tight font-medium tracking-tight text-balance ${featured ? "text-3xl lg:max-w-lg lg:text-5xl" : "text-2xl"}`}
        >
          {project.title}
        </h3>
        <p className="mt-4 max-w-xl text-sm leading-7 text-muted">{project.summary}</p>
        {featured && <p className="mt-6 text-sm leading-7 text-muted">{project.role}</p>}
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => <li key={tag}><Tag label={tag} /></li>)}
        </ul>
        <div className="mt-auto flex items-center justify-between gap-4 pt-8 text-sm text-foreground">
          <span>{site.projectUi.detailLinkLabel}</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5 shrink-0">
            <path d="M5 19 19 5M5 5h14v14" />
          </svg>
        </div>
      </Link>
    </SpotlightCard>
  );
}
