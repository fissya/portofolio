"use client";

import { useLayoutEffect } from "react";
import { site } from "@/content/site";
import {
  applyTheme,
  DEFAULT_THEME,
  isTheme,
  readStoredTheme,
  saveTheme,
  THEME_STORAGE_KEY,
} from "@/lib/theme";

export function ThemeToggle() {
  useLayoutEffect(() => {
    // Reapply on the development Strict Mode remount, before paint.
    applyTheme(readStoredTheme() ?? DEFAULT_THEME);

    function syncTheme(event: StorageEvent) {
      try {
        if (event.storageArea !== window.localStorage) return;
      } catch {
        return;
      }
      if (event.key === THEME_STORAGE_KEY || event.key === null) {
        applyTheme(isTheme(event.newValue) ? event.newValue : DEFAULT_THEME);
      }
    }

    window.addEventListener("storage", syncTheme);
    return () => window.removeEventListener("storage", syncTheme);
  }, []);

  function toggleTheme() {
    const current = document.documentElement.dataset.theme;
    saveTheme(current === "dark" ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-focus motion-reduce:transition-none"
    >
      <span className="theme-when-dark sr-only">{site.theme.activateLight}</span>
      <span className="theme-when-light sr-only">{site.theme.activateDark}</span>
      <svg className="theme-when-dark size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg className="theme-when-light size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
      </svg>
    </button>
  );
}
