import { site } from "@/lib/content";

export function PlaceholderBadge({ placeholder }: { placeholder: boolean }) {
  if (!placeholder) return null;

  return (
    <span className="inline-flex rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-muted">
      {site.projectUi.placeholderBadge}
    </span>
  );
}
