import Link from "next/link";
import { site } from "@/lib/content";

export default function ProjectNotFound() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <p className="font-mono text-xs tracking-widest text-accent-text">{site.projectUi.notFound.eyebrow}</p>
      <h1 className="mt-6 max-w-3xl font-heading text-4xl font-medium tracking-tight text-balance sm:text-6xl">
        {site.projectUi.notFound.title}
      </h1>
      <p className="mt-6 max-w-xl leading-8 text-muted">{site.projectUi.notFound.description}</p>
      <Link href={site.projectUi.backToProjects.href} className="mt-8 inline-flex min-h-12 items-center justify-center rounded-sm bg-accent px-6 font-medium text-accent-foreground transition-opacity hover:opacity-85 motion-reduce:transition-none">
        {site.projectUi.backToProjects.label}
      </Link>
    </section>
  );
}
