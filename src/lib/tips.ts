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
    slug: "ask-where-the-time-went",
    title: "Ask your AI where the time went",
    description:
      "When an AI project feels slow, ask it to split the time into making, checking, fixing and waiting. The numbers tell you what to change.",
    date: "2026-10-06",
    status: "draft",
    story: [
      "For two days, two AI assistants built my game while I was at work and asleep. One wrote each piece, the other checked it, and nothing went in until both were happy. It sounded careful. It felt slow.",
      "After two days, only 20 of the 76 pieces were done. So I asked one of the AIs to read back through every log and tell me where the time had gone.",
      "Across about 85 hours of AI work, 31% went on building. Reviewing took 29% and fixing took 20%. The rest was running checks, setting up and waiting. Most of the effort went on proving the work, not making it. One fix of just two lines set off an hour of checks, and then the same hour again.",
    ],
    before: {
      label: "Asking how it’s going",
      text: "“Why is this taking so long?”",
      result: "You get a polite, reassuring paragraph. Nothing to act on, and no idea which part to change.",
    },
    after: {
      label: "Asking for the split",
      text: "“Go back through everything you’ve done on this. Split the time into making, checking, fixing and waiting. Give me rough numbers for each, and the three biggest time sinks.”",
      result: "You get a short list you can act on. Mine showed the checking was the problem, so the heavy checks now run overnight and the evenings are for making.",
    },
    why: [
      "Ask a vague question and AI gives a vague, cheerful answer. Ask for categories and numbers and it has to look at what actually happened.",
      "Treat its numbers as rough. It can only count what it can see, so check anything that surprises you before you change how you work.",
    ],
    tryThis:
      "Next time an AI chat or project drags on, ask: “Look back over this. How much of your work was making something new, and how much was fixing earlier mistakes?” If fixing wins, start a fresh chat with a clearer request.",
  },
  {
    slug: "ask-which-rules-it-broke",
    title: "Ask your AI which of your instructions it didn’t follow",
    description:
      "AI sometimes decides it knows better and quietly bends your rules. One line at the end of your request brings those choices into the open.",
    date: "2026-10-05",
    status: "live",
    xPost: "https://x.com/Hexakin/status/2107217766021247395",
    story: [
      "My game has a simple rule: the first time you meet a new sheep, block or hazard, a picture card pops up to explain it. I wrote that rule down and gave it to the AI building that part.",
      "It decided it knew better. No cards on the first level, so players could get straight to aiming. No more than two cards per level, with the rest held back until later. Its own instructions also said to stop and ask me if the job needed files it hadn’t been given. It wrote: “Spec 2.3 says to stop and report in this case. I built the work instead.”",
      "The saving grace was that it wrote all of this down, under the heading “Decisions I made”. A second AI read that list, spotted the broken rule and sent the work back. Every card now shows the first time you meet the thing it explains.",
    ],
    before: {
      label: "Rules, then trust",
      text: "“Every new item gets an explanation the first time it appears.” The AI says the job is done.",
      result: "It looks finished. The changes it made to your rule are buried in the work, where you won’t notice them for weeks.",
    },
    after: {
      label: "Rules, then a confession list",
      text: "Same request, plus: “If you think one of my rules is wrong, stop and ask me. Don’t make exceptions. At the end, list every instruction you didn’t follow exactly, and why.”",
      result: "Its shortcuts arrive as a short list you can read in a minute, and you decide which ones to allow.",
    },
    why: [
      "AI is built to be helpful, and sometimes that means improving on what you asked for without telling you. Its reasons can even be good ones. The problem is you never got to say yes.",
      "Asking for the list doesn’t stop every shortcut, but it makes most of them visible. Read the list before you use the work, and check anything that matters yourself.",
    ],
    tryThis:
      "Next time you give an AI a job with rules, such as a word limit, a tone or a deadline, add: “At the end, list every instruction you didn’t follow exactly, and why.”",
  },
  {
    slug: "ask-a-second-ai-to-check",
    title: "Ask a second AI to check the first one’s work",
    description:
      "An AI will tell you its work is finished. Another AI, asked to look for problems, often finds some. How to set that up.",
    date: "2026-10-04",
    status: "live",
    xPost: "https://x.com/Hexakin/status/2106678212092981303",
    story: [
      "Last night two AI assistants from two different companies worked on my game. Whichever one wrote a piece of work, the other had to check it before it was allowed in. Neither could approve its own work.",
      "Seven pieces of work went in overnight. Five of them came back from the checker with problems on the first try. Every one was fixed and checked again before it was accepted.",
      "One of the problems mattered to my wallet. The tool that makes the game’s sound effects uses a paid service. The checker tested it and found it could ask for the same sound twice, and could go past the nightly limit I had set. The first AI had reported the job as done.",
    ],
    before: {
      label: "Trusting the first answer",
      text: "“Build this for me.” The AI says it is finished, so you use it.",
      result: "Mistakes get found later, by you, usually at a bad moment.",
    },
    after: {
      label: "A second pair of eyes",
      text: "Open a different AI, or a fresh chat. Paste in the work and say: “Another AI made this. Check it for mistakes, risks and anything missing. List what you find. Don’t rewrite it.”",
      result: "A list of problems to fix before you rely on it, not after.",
    },
    why: [
      "An AI that made something tends to agree with itself. A second one, asked only to find problems, has no reason to be kind. A different company’s AI is best, because it tends to make different mistakes. A fresh chat is the next best thing.",
      "Asking for a list, not a rewrite, keeps you in charge. You decide which points are real, and you can send the list back to the first AI to fix. Check the fixes yourself before you trust them.",
    ],
    tryThis:
      "Take something an AI made for you this week, such as an email, a plan or a spreadsheet formula. Paste it into a different AI and ask it to list mistakes, risks and anything missing.",
  },
  {
    slug: "check-the-licence-territory",
    title: "Read the licence: search for “territory”",
    description:
      "Free AI tools are not always free to use where you live. Two words to search for before you build on one.",
    date: "2026-10-03",
    status: "live",
    xPost: "https://x.com/Hexakin/status/2106346022926700650",
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
