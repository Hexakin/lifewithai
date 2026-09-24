import type { Metadata } from "next";
import { site } from "@/lib/site";

export function pageMeta({
  title,
  description,
  path,
  absoluteTitle,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: string;
}): Metadata {
  const resolvedTitle = absoluteTitle ?? title;

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: path,
      siteName: site.name,
      title: resolvedTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
    },
  };
}
