type TagProps = { label: string };

export function Tag({ label }: TagProps) {
  return (
    <span className="inline-flex rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
      {label}
    </span>
  );
}
