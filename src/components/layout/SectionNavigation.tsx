"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { Site } from "@/lib/content";
import { getActiveSection } from "@/lib/navigation";

type SectionNavigationProps = {
  label: string;
  links: Site["navigation"];
};

export function SectionNavigation({ label, links }: SectionNavigationProps) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const header = document.querySelector("header");
    const sections = links.flatMap((link) => {
      const element = document.getElementById(link.sectionId);
      return element ? [{ id: link.sectionId, element }] : [];
    });
    let frame = 0;
    let disposed = false;

    function updateActiveSection() {
      frame = 0;
      const activationLine = (header?.getBoundingClientRect().bottom ?? 0) + 48;
      const isAtBottom = window.scrollY > 0 &&
        Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 2;
      const positions = sections.map(({ id, element }) => ({
        id,
        top: element.getBoundingClientRect().top,
      }));
      setActiveSection(getActiveSection(positions, activationLine, isAtBottom));
    }

    function scheduleUpdate() {
      if (!disposed && !frame) frame = window.requestAnimationFrame(updateActiveSection);
    }

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);
    const resizeObserver = new ResizeObserver(scheduleUpdate);
    if (header) resizeObserver.observe(header);
    void document.fonts.ready.then(scheduleUpdate);

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
      resizeObserver.disconnect();
    };
  }, [links, pathname]);

  return <SectionLinks label={label} links={links} activeSection={activeSection} />;
}

export function SectionLinks({ label, links, activeSection = null }: SectionNavigationProps & { activeSection?: string | null }) {
  return (
    <nav aria-label={label} className="order-3 col-span-2 sm:order-none sm:col-span-1">
      <ul className="flex items-center justify-between gap-4 sm:gap-6">
        {links.map((link) => {
          const active = activeSection === link.sectionId;
          return (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active ? "location" : undefined}
                className={`group relative inline-flex min-h-11 min-w-11 items-center justify-center font-mono text-xs transition-colors hover:text-accent-text motion-reduce:transition-none ${active ? "text-accent-text" : "text-muted"}`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute right-0 bottom-2 left-0 h-px origin-left bg-accent-text transition-transform duration-200 group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none ${active ? "scale-x-100" : "scale-x-0"}`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
