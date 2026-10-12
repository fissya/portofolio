import Link from "next/link";
import { site } from "@/lib/content";
import { getProjectHref, getProjectNeighbors } from "@/lib/projects";

export function ProjectPagination({ slug }: { slug: string }) {
  const { previous, next } = getProjectNeighbors(slug);

  return (
    <nav aria-label={site.projectUi.navigation.label} className="mt-16 grid gap-5 border-t border-border pt-8 sm:grid-cols-2">
      {previous && (
        <Link href={getProjectHref(previous.slug)} rel="prev" className="rounded-2xl border border-border p-6 transition-colors hover:border-focus hover:bg-surface motion-reduce:transition-none">
          <span className="mb-3 block font-mono text-xs text-muted">{site.projectUi.navigation.previous}</span>
          <span className="font-heading text-xl font-medium">{previous.title}</span>
        </Link>
      )}
      {next && (
        <Link href={getProjectHref(next.slug)} rel="next" className="rounded-2xl border border-border p-6 transition-colors hover:border-focus hover:bg-surface motion-reduce:transition-none sm:col-start-2">
          <span className="mb-3 block font-mono text-xs text-muted">{site.projectUi.navigation.next}</span>
          <span className="font-heading text-xl font-medium">{next.title}</span>
        </Link>
      )}
    </nav>
  );
}
