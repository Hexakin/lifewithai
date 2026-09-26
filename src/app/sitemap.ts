import type { MetadataRoute } from "next";
import { lessons } from "@/lib/lessons";
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
    ...lessons.map((lesson) => `/learn/${lesson.slug}`),
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: path === "" || path === "/learn" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/learn" ? 0.9 : 0.7,
  }));
}
