import type { MetadataRoute } from "next";
import { lessons } from "@/lib/lessons";
import { visibleTips } from "@/lib/tips";
import { site, updated } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(updated);
  const paths = [
    "",
    "/learn",
    "/apps",
    "/about",
    "/privacy",
    "/terms",
    ...(visibleTips.length ? ["/tips"] : []),
    ...lessons.map((lesson) => `/learn/${lesson.slug}`),
    ...visibleTips.map((tip) => `/tips/${tip.slug}`),
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: path === "" || path === "/learn" || path === "/tips" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/learn" ? 0.9 : 0.7,
  }));
}
