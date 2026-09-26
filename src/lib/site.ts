export const site = {
  name: "Life with AI",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://lifewithai.co.uk").replace(
    /\/$/,
    "",
  ),
  domains: ["lifewithai.co.uk", "lifewithai.uk"] as const,
  email: "hello@lifewithai.co.uk",
  author: "Jonathan",
  description:
    "Free, plain-English lessons on using AI in everyday life, for people in the UK and Europe, and simple apps built to make ordinary jobs easier.",
} as const;

export const updated = "2026-09-26";
