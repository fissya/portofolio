import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-5 py-8 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex flex-col gap-2">
          <p className="text-foreground">{site.footer.copyright}</p>
          <p>{site.footer.description}</p>
        </div>
        <a href={site.footer.backToTop.href} className="inline-flex min-h-11 w-fit items-center transition-colors hover:text-foreground motion-reduce:transition-none">
          {site.footer.backToTop.label}
        </a>
      </div>
    </footer>
  );
}
