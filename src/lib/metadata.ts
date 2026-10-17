import type { Metadata } from "next";
import { site } from "@/lib/site";

// The site's share card, drawn by src/app/opengraph-image.tsx (keep the two in
// step). A page that sets openGraph replaces the whole inherited object, image
// included, so every page names the card again here.
const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Life with AI — get comfortable with AI in ordinary life",
  type: "image/png",
};

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
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [shareImage],
    },
  };
}
