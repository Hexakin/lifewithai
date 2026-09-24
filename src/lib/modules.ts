export const modules = [
  {
    number: 1,
    title: "First month with AI",
    line: "Zero to comfortable daily use",
    summary:
      "A four-week rhythm so a chat tool becomes something you actually open, not another tab you feel guilty about.",
    outcomes: [
      "Pick one chat tool and use it for a real task each day",
      "Tell a useful answer from a polished one that says nothing",
      "Finish the month with a habit small enough to keep",
    ],
    lessonSlug: "first-month-with-ai",
  },
  {
    number: 2,
    title: "Real life",
    line: "Work, home, and money, in plain English",
    summary:
      "Everyday jobs: emails, household plans, and money admin. You stay in charge of anything that matters.",
    outcomes: [
      "Draft messages and notes you would be happy to send after a quick edit",
      "Use AI for lists, plans, and household admin",
      "Handle money questions without pasting private details",
    ],
    lessonSlug: "work-home-and-money",
  },
  {
    number: 3,
    title: "Catch up without shame",
    line: "Usable this week",
    summary:
      "A short catch-up for people who feel late. Five ordinary days, then you can judge it for yourself.",
    outcomes: [
      "Drop the idea that everyone else already has this sorted",
      "Follow a five-day practice you can do in spare minutes",
      "Ignore the noise and keep what helped",
    ],
    lessonSlug: "catch-up-without-shame",
  },
  {
    number: 4,
    title: "Save hours every week",
    line: "Simple habits, repeated",
    summary:
      "Three habits that give time back: draft then edit, summarise then decide, and reuse a prompt that worked.",
    outcomes: [
      "Turn a blank page into a first draft you can fix",
      "Shrink a long email or document before you reply",
      "Keep a tiny set of prompts you trust",
    ],
    lessonSlug: "save-hours-every-week",
  },
] as const;

export type Module = (typeof modules)[number];

export function getModule(number: Module["number"]) {
  return modules.find((module) => module.number === number);
}
