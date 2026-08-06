/** Prefix public asset paths when hosted under a GitHub Pages project URL. */
export function withBasePath(path = "/") {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path) return base || "/";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
