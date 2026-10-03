/**
 * Tips: one short page per tip, each from something that really happened while
 * building the Hillmade studio. Every tip starts life as an X post; the post's
 * first reply links here.
 *
 * Status:
 *   draft    - visible on local dev and Vercel preview builds only.
 *   approved - Jonathan kept the matching X draft. The page works by direct link
 *              (so the X post's first reply never 404s) but is unlisted and noindex.
 *   live     - the X post is out. Listed on /tips, in the nav and the sitemap.
 * Hermes flips these with HQ\\harvest\\lwai_tips.py, driven by the content queue.
 * Every few tips on one theme get folded into a full lesson in lessons.ts.
 */

export type TipStatus = "draft" | "approved" | "live";

export type Tip = {
  slug: string;
  title: string;
  /** One line for cards, meta description and social previews. */
  description: string;
  /** ISO date the tip went live (or the planned date, for drafts). */
  date: string;
  status: TipStatus;
  /** What happened, in a few short paragraphs. */
  story: string[];
  before: { label: string; text: string; result: string };
  after: { label: string; text: string; result: string };
  /** Why the "after" works, one or two paragraphs. */
  why: string[];
  tryThis: string;
  /** The X post this tip came from, once posted. */
  xPost?: string;
};

export const tips: Tip[] = [
  // Newest first.
  {
    slug: "check-the-licence-territory",
    title: "Read the licence: search for “territory”",
    description:
      "Free AI tools are not always free to use where you live. Two words to search for before you build on one.",
    date: "2026-10-03",
    status: "draft",
    story: [
      "This week I was choosing tools for the games I make. One of them, Hunyuan3D from Tencent, turns pictures into 3D models. It is free to download.",
      "The first line of its licence says it does not apply in the European Union, the United Kingdom or South Korea. Further down, it says any use outside its allowed territory is unlicensed. I am in the UK, so it was out, however good it is.",
      "Free to download and free to use are two different things. The download page will not tell you. The licence will.",
    ],
    before: {
      label: "What most of us do",
      text: "Find a free tool, download it, start building.",
      result: "Weeks of work on something you may have no right to use, or to sell.",
    },
    after: {
      label: "Two minutes first",
      text: "Open the licence (usually a file called LICENSE). Press Ctrl+F and search for “territory”, then “commercial”.",
      result: "You know before you start whether you can use it where you live, and whether you can sell what you make.",
    },
    why: [
      "Those two words are where the limits usually sit: where you may use the tool, and whether you may make money from it. You do not need to read the whole thing to find out whether it is a no.",
      "If the licence is unclear, ask your AI chat to explain those sections in plain English, then check its answer against the text yourself. If you are going to sell something, ask a person who knows.",
    ],
    tryThis:
      "Pick one free AI tool you use. Find its licence and search it for “territory” and “commercial”. Note what you find.",
  },
  {
    slug: "back-up-check-then-delete",
    title: "Back up, check the backup, then delete",
    description:
      "Clearing out old files is easy. Getting them back is not. The three-step order that keeps a clear-out safe.",
    date: "2026-10-02",
    status: "live",
    xPost: "https://x.com/Hexakin/status/2105983635484561411",
    story: [
      "I deleted 170,000 files in one go. Old AI experiments I had stopped using, 8 GB of them. 1,175 files were left.",
      "Before deleting anything, I copied everything I could not rebuild to another drive. Then I checked the copy was all there: the same number of files on both drives. Only then did I delete.",
      "I had learned that lesson the week before, the hard way.",
    ],
    before: {
      label: "The risky way",
      text: "“Delete everything in this folder I’m not using any more.”",
      result: "Fast, until you find out something you needed was in there.",
    },
    after: {
      label: "The safe way",
      text: "“Copy this folder to my backup drive. Then tell me how many files are in each, so I can check they match. Don’t delete anything until I say.”",
      result: "A clear-out you can undo.",
    },
    why: [
      "A backup you have not checked is a hope. Counting the files turns it into a fact. Opening a few makes it even safer.",
      "This matters even more when an AI assistant does the tidying. It will do exactly what you ask, quickly. Make it copy and count first, and keep the delete for last, on your say-so.",
    ],
    tryThis:
      "Before your next clear-out, copy the folder somewhere else and compare the file counts. Delete only when they match.",
  },
  {
    slug: "done-means-live",
    title: "“Done” means you’ve seen it live",
    description:
      "An AI can finish a job, pass every test, and still leave it sitting on your computer. How to know it is really done.",
    date: "2026-10-01",
    status: "live",
    xPost: "https://x.com/Hexakin/status/2105621246708957529",
    story: [
      "My AI agent finished a job: music for my games, with every test passing. It said it was done.",
      "It never went live. The work sat on my PC, and the website still showed the old version. I only noticed because a check I run every night flagged it.",
      "The agent was not lying. It had done the work. Putting it on the website was a separate step, and nobody had asked for it.",
    ],
    before: {
      label: "What I asked",
      text: "“Add music to my games.”",
      result: "Finished, tested, and invisible to everyone but me.",
    },
    after: {
      label: "What I ask now",
      text: "“Add music to my games, put it live, then give me the link so I can check it myself.”",
      result: "A link I open, and music I can hear.",
    },
    why: [
      "“Done” means different things to you and to the tool. To you, it means people can see it. To an AI, it often means the task in front of it is finished.",
      "Asking for the link puts the last step in the request, and opening it yourself is the check. If the link shows the old version, it is not done.",
    ],
    tryThis:
      "Next time an AI says a job is finished, ask “where can I see it?” and open the answer yourself.",
  },
  {
    slug: "tell-your-ai-what-not-to-save",
    title: "Tell your AI what not to save",
    description:
      "AI tools that build things save everything by default. One small file stops your project quietly filling up.",
    date: "2026-09-30",
    status: "live",
    xPost: "https://x.com/Hexakin/status/2105348196755243390",
    story: [
      "My music project quietly saved every video render and audio file for four months. It grew to 2.4 GB.",
      "I keep my projects on GitHub, which is like an online backup for code. GitHub refuses any single upload over 2 GB, so one day it simply refused, and I had to strip all the big files back out.",
    ],
    before: {
      label: "Day one, the usual way",
      text: "“Set up a project for my music videos.”",
      result: "Everything gets saved, including gigabytes of files you can make again in seconds.",
    },
    after: {
      label: "Day one, with one extra line",
      text: "“Set up a project for my music videos. Add a .gitignore so videos and audio stay on my PC and are never uploaded.”",
      result: "Your words and settings are backed up. The heavy files stay local.",
    },
    why: [
      "A .gitignore is a small text file that lists what not to save. Your AI can write it for you in seconds, but only if you ask.",
      "Big files that you can make again (renders, exports, downloads) do not need backing up. The things you cannot recreate, like your notes, settings and writing, do.",
    ],
    tryThis:
      "If you build anything with an AI assistant, ask it: “Is there a .gitignore? What is it keeping out?”",
  },
];

export const showDrafts =
  process.env.NODE_ENV !== "production" || process.env.VERCEL_ENV === "preview";

/** Listed on /tips, the nav and the sitemap. */
export const visibleTips = tips.filter((tip) => tip.status === "live" || showDrafts);

/** Reachable by direct link: listed tips plus approved ones. */
export const reachableTips = tips.filter(
  (tip) => tip.status === "live" || tip.status === "approved" || showDrafts,
);

export function getTip(slug: string) {
  return reachableTips.find((tip) => tip.slug === slug);
}

export function formatTipDate(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
