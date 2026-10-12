import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { site } from "@/content/site";

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
        <nav aria-label={site.navigationLabel} className="order-3 col-span-2 sm:order-none sm:col-span-1">
          <ul className="flex items-center justify-between gap-4 sm:gap-6">
            {site.navigation.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-flex min-h-11 min-w-11 items-center justify-center font-mono text-xs text-muted transition-colors hover:text-foreground motion-reduce:transition-none">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
