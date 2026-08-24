import type { MetadataRoute } from "next";
import { absoluteUrl, liveRoutes } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModifiedByPath: Record<string, string> = {
    "": "2026-08-24",
    "/console": "2026-08-22",
    "/playtest": "2026-08-24",
    "/release-date": "2026-08-24",
    "/price": "2026-08-24",
    "/beginner-guide": "2026-08-24",
  };

  return liveRoutes.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(lastModifiedByPath[path] ?? "2026-08-16"),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
