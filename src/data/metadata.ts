import type { Metadata } from "next";

/**
 * Metadata is intentionally limited to `title` and `description`.
 * `metadataBase` is not configured in the root layout yet (the production
 * domain has not been confirmed), so no canonical URL or Open Graph image
 * URL is emitted here — relative URLs would be resolved against a wrong
 * or missing base and produce broken absolute links. Revisit once the
 * production domain is decided; then add `metadataBase` in the root layout
 * and expand this helper with `alternates.canonical` and `openGraph`.
 */
export function buildHubMetadata({
  title,
  description,
}: {
  title: string;
  description: string;
}): Metadata {
  return { title, description };
}
