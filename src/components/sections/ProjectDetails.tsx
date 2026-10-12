import Link from "next/link";
import { ProjectPagination } from "@/components/sections/ProjectPagination";
import { PlaceholderBadge } from "@/components/ui/PlaceholderBadge";
import { Tag } from "@/components/ui/Tag";
import { site, type Project } from "@/lib/content";

export function ProjectDetails({ project }: { project: Project }) {
  const { labels } = site.projectUi;
  const caseSections = [
    { id: "problem", title: labels.problem, text: project.problem },
    { id: "solution", title: labels.solution, text: project.solution },
    { id: "result", title: labels.result, text: project.result },
  ];

  return (
    <article className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-20">
      <Link href={site.projectUi.backToProjects.href} className="inline-flex min-h-11 items-center font-mono text-xs text-muted transition-colors hover:text-accent-text motion-reduce:transition-none">
        {site.projectUi.backToProjects.label}
      </Link>
      <header className="mt-8">
        <p className="mb-5 font-mono text-xs tracking-widest text-accent-text uppercase">{site.projectUi.detailEyebrow}</p>
        <h1 className="max-w-4xl font-heading text-4xl leading-tight font-medium tracking-tight text-balance sm:text-6xl">
          {project.title}
        </h1>
        <div className="mt-6"><PlaceholderBadge placeholder={project.placeholder} /></div>
        {project.placeholder && (
          <p className="mt-5 max-w-2xl rounded-2xl border border-border bg-surface p-5 text-sm leading-7 text-muted">
            {site.projectUi.placeholderNotice}
          </p>
        )}
      </header>
      <section aria-labelledby="summary-heading" className="mt-12 border-t border-border pt-8">
        <h2 id="summary-heading" className="font-heading text-2xl font-medium tracking-tight">{labels.summary}</h2>
        <p className="mt-4 max-w-2xl leading-8 text-muted">{project.summary}</p>
        <dl className="mt-8 grid gap-6 rounded-2xl border border-border bg-surface p-6 sm:grid-cols-[2fr_1fr]">
          <div>
            <dt className="font-mono text-xs text-muted">{labels.role}</dt>
            <dd className="mt-3 leading-7">{project.role}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-muted">{labels.year}</dt>
            <dd className="mt-3 font-mono">{project.year}</dd>
          </div>
        </dl>
      </section>
      <div className="mt-12 space-y-10">
        {caseSections.map((section) => (
          <section key={section.id} aria-labelledby={`${section.id}-heading`} className="grid gap-4 border-t border-border pt-8 sm:grid-cols-[1fr_2fr] sm:gap-12">
            <h2 id={`${section.id}-heading`} className="font-heading text-2xl font-medium tracking-tight">{section.title}</h2>
            <p className="max-w-2xl leading-8 text-muted">{section.text}</p>
          </section>
        ))}
        <section aria-labelledby="stack-heading" className="grid gap-4 border-t border-border pt-8 sm:grid-cols-[1fr_2fr] sm:gap-12">
          <h2 id="stack-heading" className="font-heading text-2xl font-medium tracking-tight">{labels.techStack}</h2>
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => <li key={tag}><Tag label={tag} /></li>)}
          </ul>
        </section>
      </div>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-sm border border-accent bg-accent px-6 font-medium text-accent-foreground transition-opacity hover:opacity-85 motion-reduce:transition-none">
          {labels.demo}
        </a>
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-sm border border-border px-6 font-medium transition-colors hover:border-focus hover:bg-surface motion-reduce:transition-none">
          {labels.repo}
        </a>
      </div>
      <ProjectPagination slug={project.slug} />
    </article>
  );
}
