export type AppStatus = "in-the-works" | "released";

export type App = {
  slug: string;
  name: string;
  /** Shown under the name while the app has no final name. */
  nameNote?: string;
  platform: string;
  status: AppStatus;
  summary: string;
  /** Store or download link, once the app is out. */
  href?: string;
};

export const statusLabel: Record<AppStatus, string> = {
  "in-the-works": "In the works",
  released: "Out now",
};

export const apps: App[] = [
  {
    slug: "talk-to-text",
    name: "Talk to text",
    nameNote: "Name to come",
    platform: "Platforms to be confirmed",
    status: "in-the-works",
    summary:
      "Speak, and your words appear as text you can use. Built to be simple enough that you never need to read a manual.",
  },
  {
    slug: "wandwork",
    name: "Wandwork",
    nameNote: "Working name",
    platform: "Android",
    status: "in-the-works",
    summary:
      "Control your phone by casting spells. Say the words, and your phone does the rest.",
  },
];
