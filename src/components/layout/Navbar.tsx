import { Suspense } from "react";
import Link from "next/link";
import { SectionLinks, SectionNavigation } from "@/components/layout/SectionNavigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { site } from "@/lib/content";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[1fr_auto] items-center gap-x-6 px-5 pt-3 sm:grid-cols-[1fr_auto_auto] sm:px-8 sm:py-4">
        <Link
          href={site.homeHref}
          aria-label={site.accessibility.homeLabel}
          className="inline-flex min-h-11 w-fit items-center gap-2 font-heading text-2xl font-semibold tracking-tight"
        >
          <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
          {site.name}
        </Link>
        <Suspense fallback={<SectionLinks label={site.navigationLabel} links={site.navigation} />}>
          <SectionNavigation label={site.navigationLabel} links={site.navigation} />
        </Suspense>
        <div className="flex items-center gap-3">
          <a
            href={site.cv.href}
            download
            className="hidden min-h-11 items-center justify-center rounded-sm border border-border px-4 font-mono text-xs text-foreground transition-colors hover:border-focus hover:bg-surface motion-reduce:transition-none md:inline-flex"
          >
            {site.cv.label}
          </a>
          <ThemeToggle labels={site.theme} />
        </div>
      </div>
    </header>
  );
}
