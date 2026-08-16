import type { MetadataRoute } from "next";
import { absoluteUrl, liveRoutes } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap { return liveRoutes.map(path => ({ url: absoluteUrl(path), lastModified: new Date("2026-08-16"), changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : .8 })); }
