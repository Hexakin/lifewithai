import { modules } from "@/lib/modules";

export type LessonSection = {
  heading: string;
  paragraphs: string[];
  /** A request to show in a card after the paragraphs. */
  example?: string;
  /** Show the broadband before-and-after cards after the paragraphs. */
  showPromptExample?: boolean;
};

export type Lesson = {
  slug: string;
  title: string;
  description: string;
  moduleNumber: (typeof modules)[number]["number"];
  readingMinutes: number;
  dek: string;
  sections: LessonSection[];
  tryThis: string;
};

export const lessons: Lesson[] = [
  {
    slug: "first-month-with-ai",
    title: "Your first month with AI",
    description:
      "A plain four-week rhythm so AI becomes a small daily habit, rather than a project you keep postponing.",
    moduleNumber: 1,
    readingMinutes: 4,
    dek: "You do not need a stack of new apps. You need one chat, one real task a day, and a note of what actually helped.",
    sections: [
      {
        heading: "Start with one chat",
        paragraphs: [
          "Pick the AI chat you can open without fuss. The one in your browser is enough. Switching tools every few days is how people stay beginners.",
          "Give it a job you already have this week: a reply you are putting off, a messy list of notes, a plan for Saturday. If the task is imaginary, you will not learn whether the answer is any good.",
        ],
      },
      {
        heading: "Week one: one real task a day",
        paragraphs: [
          "Five minutes is a fair start. Open the chat, paste or type the task in ordinary words, and read the answer as if a keen colleague wrote it. Keep what is useful. Delete what is waffle.",
          "If the answer is vague, say what is missing. “Make this shorter.” “Use a warmer tone.” “Give me three options, not an essay.” You are allowed to ask twice.",
        ],
      },
      {
        heading: "Weeks two and three: keep a short list",
        paragraphs: [
          "On your phone notes, write one line when something worked: the task, and the sentence you used. That list becomes your own cheat sheet. It will beat any viral prompt you see online.",
          "Also write down a miss. “It invented a fact.” “The tone was too stiff.” Those misses teach you what to check, which is the skill that keeps you safe.",
        ],
      },
      {
        heading: "Week four: decide what stays",
        paragraphs: [
          "Look at the list. Keep two or three uses you will repeat next month. Drop the rest. A small habit you keep is worth more than a perfect system you abandon.",
          "That is the whole first month: one tool, real tasks, a few lines of notes, and a choice about what continues.",
        ],
      },
    ],
    tryThis:
      "Today, take one message you need to send. Ask the chat for a first draft in your own words. Edit it until it sounds like you, then send the edited version, not the raw draft.",
  },
  {
    slug: "work-home-and-money",
    title: "AI for work, home, and money",
    description:
      "Plain examples for emails, household admin, and money questions, with a clear line around private details.",
    moduleNumber: 2,
    readingMinutes: 5,
    dek: "The useful jobs are ordinary: a clearer email, a week of meals, a first pass at comparing two quotes. You still make the decision.",
    sections: [
      {
        heading: "Work: drafts you still edit",
        paragraphs: [
          "AI is good at a first pass. A reply to a customer, an agenda, a summary of a long thread, a polite chase when someone has gone quiet. Ask for the draft, then change the facts, the names, and the tone.",
          "If your workplace has rules about what you can paste into a public chat, follow those rules. When in doubt, remove names, customer details, and anything you would not put on a postcard.",
        ],
      },
      {
        heading: "Home: the boring admin",
        paragraphs: [
          "Household life is full of small writing jobs. A packing list, a message to the school, a plan for a busy week, instructions for someone watering the plants. Describe the constraints: time, budget, who is involved, what you already have in the cupboard.",
          "Treat the result as a draft list, not a verdict. You know your house. The chat does not.",
        ],
      },
      {
        heading: "Money: compare, then check",
        paragraphs: [
          "You can ask it to explain a letter from the bank in plain English, turn a pile of notes into a budget table, or list questions to ask before you sign. That is useful.",
          "Do not paste account numbers, passwords, full card details, or scans of identity documents. Check every figure against the original. A tidy answer can still contain a wrong total. For tax, benefits, and debt, use the official source or a qualified person for the decision. The chat can help you prepare questions. It should not be the person you trust with the final call.",
        ],
      },
      {
        heading: "One rule for all three",
        paragraphs: [
          "If a mistake would cost you money, a relationship, or your job, you read it yourself before it leaves your hands. AI speeds up the blank page. It does not take the responsibility.",
        ],
      },
    ],
    tryThis:
      "Take a household or work task you will do this week. Write three sentences of context, ask for a draft, and correct one fact the chat could not have known.",
  },
  {
    slug: "catch-up-without-shame",
    title: "Catch up this week, without the shame",
    description:
      "A five-day catch-up for people who feel late to AI, with a short list of what you can safely ignore.",
    moduleNumber: 3,
    readingMinutes: 4,
    dek: "Most people are still working out the basics. Feeling behind is common. It is not a measure of your ability.",
    sections: [
      {
        heading: "You are in large company",
        paragraphs: [
          "Headlines make it sound as if everyone else is already fluent. In real kitchens, offices, and group chats, plenty of capable people have opened a chat once, felt foolish, and closed it.",
          "You do not need the history of the technology. You need a few reps with your own tasks. Skill shows up after those reps, not before.",
        ],
      },
      {
        heading: "A five-day catch-up",
        paragraphs: [
          "Day one: open one chat and ask it to explain a news story you already know, in a few short paragraphs. Compare it with what you remember. You are practising judgement, not memorising.",
          "Day two: draft a message you actually need to send, then edit it. Day three: turn a messy note into a list with headings. Day four: ask it to summarise something long you were avoiding, then check two claims against the original. Day five: write down the two uses you will repeat next week.",
        ],
      },
      {
        heading: "What to ignore for now",
        paragraphs: [
          "Ignore tool round-ups, prompt marketplaces, and anyone selling a secret method. Ignore the urge to learn five products. One chat, used on real work, will teach you more than a weekend of browsing.",
          "Also ignore the voice that says you should have started last year. Starting this week is the whole point of the catch-up.",
        ],
      },
      {
        heading: "How to tell if it helped",
        paragraphs: [
          "At the end of the five days, ask one question: did any task take less effort, with an answer you were willing to stand behind? If yes, keep that task. If a task felt slower or less trustworthy, drop it. That is a successful week either way.",
        ],
      },
    ],
    tryThis:
      "Put twenty minutes in the diary for tomorrow. Use it for day one only. Stop when the timer ends.",
  },
  {
    slug: "save-hours-every-week",
    title: "Save hours with three small habits",
    description:
      "Three repeatable habits that give time back: draft then edit, summarise then decide, and reuse a prompt that worked.",
    moduleNumber: 4,
    readingMinutes: 4,
    dek: "Hours come back from tasks you already repeat. They do not come from a new app every Monday.",
    sections: [
      {
        heading: "Habit one: draft, then edit",
        paragraphs: [
          "Blank pages eat time. For emails, posts, agendas, and complaints you need to word carefully, ask for a draft with the points you want included. Then spend your time on the edit: facts, tone, and anything only you know.",
          "The saving is the staring. You still do the thinking. You skip the part where the cursor blinks at you.",
        ],
      },
      {
        heading: "Habit two: summarise, then decide",
        paragraphs: [
          "Long threads, meeting notes, and policy pages are where weeks disappear. Ask for a short summary with the decisions, the dates, and the open questions. Then go back to the original for anything you will act on.",
          "A summary is a map. It is not the territory. If you reply based only on the summary, you will eventually miss a condition that mattered.",
        ],
      },
      {
        heading: "Habit three: reuse what worked",
        paragraphs: [
          "When a request gives you a good result, save the wording. Next time, change the details and keep the shape. “Here is the context. Here is the reader. Here is the length I want. Here is what to leave out.”",
          "Three saved prompts you trust will beat a folder of fifty you never open.",
        ],
      },
      {
        heading: "Where the hours actually go",
        paragraphs: [
          "Look at last week. Which tasks did you do more than once? Drafting, chasing, planning, rewriting, sorting notes. Pick one. Apply one habit to it for seven days. If you saved real minutes, keep it. If you did not, it was the wrong task, not a personal failure.",
        ],
      },
    ],
    tryThis:
      "Choose one repeating task from this week. Write the request once, save it in your notes, and use it twice before you change it.",
  },
  {
    slug: "how-to-ask-for-a-useful-answer",
    title: "How to ask for a useful answer",
    description:
      "A simple way to ask: context, the job, the shape of the answer, and the limits. Includes a before and after.",
    moduleNumber: 1,
    readingMinutes: 4,
    dek: "You do not need a magic sentence. You need to say what you are doing, what you want back, and what the answer must not do.",
    sections: [
      {
        heading: "Say what you are doing",
        paragraphs: [
          "A chat has no idea whether you are writing to your manager, your landlord, or your aunt. One or two sentences of context change the answer more than any clever trick.",
        ],
        example:
          "I am a parent writing to a school about a missed club. I want to sound calm and brief.",
      },
      {
        heading: "Say what you want back",
        paragraphs: [
          "Ask for a shape. A five-line email. Three options. A checklist. A table. “Help me with this” is how you get a lecture. “Give me a five-line email I can edit” is how you get something you can use.",
        ],
      },
      {
        heading: "Give the limits",
        paragraphs: [
          "Say what to leave out, how long it should be, and which facts are fixed. If a number, date, or name matters, put it in yourself and tell the chat not to invent the rest.",
          "Then read the answer once for tone and once for facts. If something looks smooth and specific, and you did not supply it, check it.",
        ],
      },
      {
        heading: "A before and after",
        paragraphs: [
          "The same request, asked two ways. The second one says what you are doing, what you want back, and the limits.",
        ],
        showPromptExample: true,
      },
    ],
    tryThis:
      "Take a vague request you might have typed, and rewrite it with context, the shape of the answer, and one limit. Use the rewritten version.",
  },
  {
    slug: "what-to-keep-private",
    title: "What to keep private",
    description:
      "A plain checklist for what not to paste into an AI chat, at work and at home.",
    moduleNumber: 2,
    readingMinutes: 4,
    dek: "Treat the chat like a postcard. Useful, quick, and not the place for secrets.",
    sections: [
      {
        heading: "A postcard, not a locked drawer",
        paragraphs: [
          "Assume that what you paste could be stored, seen by the company that runs the tool, or used to improve their systems, depending on the settings. You do not need to understand the paperwork to act sensibly. If you would not want it read back to you in a waiting room, leave it out.",
        ],
      },
      {
        heading: "Do not paste these",
        paragraphs: [
          "Passwords, codes from your bank, full card numbers, National Insurance numbers, passport or driving licence details, medical records, and precise home addresses when they are not needed for the task.",
          "Also leave out other people’s private information: a colleague’s salary, a child’s full name and school, a friend’s health. You can often describe the situation without the identifying details. “A pupil in my child’s class” is enough for a draft. The full name is not.",
        ],
      },
      {
        heading: "Work account and home account",
        paragraphs: [
          "If your employer provides an AI tool, use that for work, and follow their rules. Use a personal chat for personal life. Mixing the two is how a private note ends up in the wrong place.",
          "Before you paste a document, delete the header if it has names, reference numbers, or addresses you do not need help with.",
        ],
      },
      {
        heading: "A thirty-second check",
        paragraphs: [
          "Before you press send, scan for names, numbers, and addresses. Remove what the chat does not need in order to help. Ask the question in general terms when you can. “What should I look for in a phone contract?” is safer than pasting the contract with your account details still on it.",
        ],
      },
    ],
    tryThis:
      "Open the last thing you were tempted to paste into a chat. Cross out every name, number, and address. See if the question still makes sense. If it does, paste the crossed-out version only.",
  },
];

/** Lessons in course order: by module, then as listed. */
export const lessonsByModule = [...lessons].sort(
  (a, b) => a.moduleNumber - b.moduleNumber,
);

export function getLesson(slug: string) {
  return lessons.find((lesson) => lesson.slug === slug);
}

export function getLessonModule(lesson: Lesson) {
  return modules.find((module) => module.number === lesson.moduleNumber);
}
