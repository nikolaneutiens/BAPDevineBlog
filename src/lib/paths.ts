const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefixes an internal link, because GitHub Pages serves the site from /<repo-name>/. */
export function withBase(path: string) {
  return `${base}${path}`;
}
