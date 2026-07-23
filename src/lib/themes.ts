/**
 * Path24 CRM theme configuration.
 *
 * The neutral light/dark surfaces live in src/app/globals.css.
 * The official Path24 Laboratories accent is Path24 Red (#ED1C22).
 */

export const THEME_IDS = ["path24"] as const;

export type ThemeId = (typeof THEME_IDS)[number];

export const DEFAULT_THEME: ThemeId = "path24";

export const STORAGE_KEY = "path24crm.theme";

export const MODES = ["light", "dark"] as const;

export type Mode = (typeof MODES)[number];

export const DEFAULT_MODE: Mode = "dark";

export const MODE_STORAGE_KEY = "path24crm.mode";

export function isMode(value: unknown): value is Mode {
  return (
    typeof value === "string" &&
    (MODES as ReadonlyArray<string>).includes(value)
  );
}

export interface ThemeMeta {
  id: ThemeId;
  name: string;
  tagline: string;
  swatch: string;
}

export const THEMES: ReadonlyArray<ThemeMeta> = [
  {
    id: "path24",
    name: "Path24 Red",
    tagline: "The official Path24 Laboratories brand theme.",
    swatch: "#ED1C22",
  },
];

export function isThemeId(value: unknown): value is ThemeId {
  return (
    typeof value === "string" &&
    (THEME_IDS as ReadonlyArray<string>).includes(value)
  );
}
