export type SectionPosition = {
  id: string;
  top: number;
};

export function getActiveSection(
  sections: readonly SectionPosition[],
  activationLine: number,
  isAtBottom: boolean,
): string | null {
  if (isAtBottom) return sections.at(-1)?.id ?? null;

  let activeSection: string | null = null;
  for (const section of sections) {
    if (section.top <= activationLine) activeSection = section.id;
  }
  return activeSection;
}
