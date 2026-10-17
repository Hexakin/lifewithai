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

// Summaries are the launch-strip lines on hillmade.uk's front page
// (Brand/hillmade-uk/app/page.tsx), so the two sites say the same thing.
export const apps: App[] = [
  {
    // Strip line approved by Jonathan, 17 Oct 2026.
    slug: "aether",
    name: "Aether",
    platform: "Android",
    status: "released",
    summary:
      "Talk, and clean British English lands in whatever box you’re typing in.",
    href: "https://hillmade.uk/aether",
  },
  {
    // Strip line published at Jonathan's word, 17 Oct 2026.
    slug: "wandwork",
    name: "Wandwork",
    platform: "Android",
    status: "released",
    summary:
      "Say a spell, flick your phone, and the magic happens. For young witches and wizards, with a Parent Lock.",
    href: "https://hillmade.uk/wandwork",
  },
  {
    // AI DRAFT (Claude), 17 Oct 2026: the strip line is still an AI draft on
    // hillmade.uk, and the platform is from hillmade.uk/no-live. Jonathan to approve.
    slug: "no-live",
    name: "No Live",
    platform: "Chrome, Edge, Brave and Firefox on a computer",
    status: "released",
    summary:
      "Stops every live stream on YouTube, live TV like BBC News included. Videos, clips and replays still play.",
    href: "https://hillmade.uk/no-live",
  },
];
