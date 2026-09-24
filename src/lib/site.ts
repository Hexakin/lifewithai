export const site = {
  name: "Life with AI",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://lifewithai.co.uk").replace(
    /\/$/,
    "",
  ),
  domains: ["lifewithai.co.uk", "lifewithai.uk"] as const,
  priceGbp: 39,
  priceLabel: "£39",
  email: "hello@lifewithai.co.uk",
  description:
    "A calm, plain-English starter course for people in the UK and Europe who want to use AI in everyday life. Read the free lessons, then take the £39 self-paced course when you want a path you can finish.",
} as const;

export const updated = "2026-09-24";
