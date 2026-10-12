export const THEME_STORAGE_KEY = "portfolio-theme";
export const DEFAULT_THEME = "dark";

export type Theme = "dark" | "light";

export function isTheme(value: unknown): value is Theme {
  return value === "dark" || value === "light";
}

export function readStoredTheme(): Theme | null {
  try {
    const value = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isTheme(value) ? value : null;
  } catch {
    return null;
  }
}

export function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
}

export function saveTheme(theme: Theme): void {
  applyTheme(theme);
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Keep the toggle usable for this visit when storage is blocked.
  }
}

// Trusted constants only. Runs synchronously in <head>, before first paint.
export const themeInitScript = `(() => {
  let theme = ${JSON.stringify(DEFAULT_THEME)};
  try {
    const saved = localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
    if (saved === "dark" || saved === "light") theme = saved;
  } catch {}
  document.documentElement.dataset.theme = theme;
})();`;
