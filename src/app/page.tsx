import Link from "next/link";
import { AppCard } from "@/components/app-card";
import { ArrowIcon, CheckIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { LessonCard } from "@/components/lesson-card";
import { NewsletterBand } from "@/components/newsletter-band";
import { PromptExample } from "@/components/prompt-example";
import { ArrowLink, button, container, Eyebrow } from "@/components/ui";
import { apps } from "@/lib/apps";
import { lessons } from "@/lib/lessons";
import { pageMeta } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Life with AI",
  absoluteTitle: "Life with AI — everyday AI, in plain English",
  description: site.description,
  path: "/",
});

const reassurances = ["Free to read", "No coding", "No sign-up"];

const audience = [
  {
    title: "You already have a full week",
    text: "Work, home and the admin in between. You want help with those jobs, not a new hobby.",
  },
  {
    title: "You can use email and a phone",
    text: "That is the starting point. Everything stays in ordinary language, and you never write code.",
  },
  {
    title: "You want something usable this month",
    text: "Short lessons you can read today and try tomorrow, each one useful on its own.",
  },
];

// The five-day catch-up from the "Catch up this week" lesson.
const catchUpDays = [
  "Ask it to explain a news story you already know. Compare it with what you remember.",
  "Draft a message you actually need to send. Then edit it until it sounds like you.",
  "Turn a messy note into a tidy list with headings.",
  "Summarise something long you’ve been avoiding. Check two claims against the original.",
  "Write down the two uses you’ll repeat next week. Drop the rest.",
];

const keepOut = [
  "Passwords & bank codes",
  "Card & NI numbers",
  "Passport details",
  "Medical records",
  "Other people’s details",
];

const rules = [
  {
    title: "Treat the chat like a postcard.",
    text: "Useful, quick, and not the place for secrets. You can usually describe the situation without the names.",
  },
  {
    title: "Read it before it leaves your hands.",
    text: "If a mistake would cost you money, a relationship or your job, check it yourself. AI speeds up the blank page. It doesn’t take the responsibility.",
  },
];

const h2 =
  "font-serif text-4xl leading-[1.08] tracking-[-0.015em] lg:text-[3.5rem] lg:leading-[1.06]";

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: site.name,
          url: site.url,
          description: site.description,
          inLanguage: "en-GB",
        }}
      />

      <section
        className={`${container} grid gap-12 pb-14 pt-9 lg:grid-cols-[minmax(0,1fr)_30rem] lg:items-center lg:gap-18 lg:pb-26 lg:pt-22`}
      >
        <div>
          <Eyebrow className="flex items-center gap-2.5">
            <span aria-hidden="true" className="size-2.5 rounded-full bg-tomato" />
            Free help for the UK &amp; Europe
          </Eyebrow>
          <h1 className="mt-5 font-serif text-[2.875rem] leading-[1.04] tracking-[-0.02em] sm:text-6xl lg:mt-7 lg:text-[5rem] lg:leading-[1.02]">
            Get comfortable with AI in{" "}
            <span className="highlight-mark">ordinary life</span>.
          </h1>
          <p className="mt-5 max-w-[37.5rem] text-lg leading-relaxed text-ink-soft sm:text-xl lg:mt-7 lg:text-[1.375rem]">
            Free, plain-English lessons for work, home and money, and simple
            apps I’m building to make everyday jobs easier. Read at your own
            pace. Nothing to buy.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-10 lg:gap-4">
            <Link
              href="/learn/how-to-ask-for-a-useful-answer"
              className={button.primary}
            >
              Read a free lesson
              <ArrowIcon />
            </Link>
            <Link href="/apps" className={button.secondary}>
              See what I’m building
            </Link>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-2.5 text-base text-ink-soft lg:mt-9 lg:text-[1.0625rem]">
            {reassurances.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckIcon className="size-5 text-tomato-deep" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <PromptExample tilted />
          <Link
            href="/learn/how-to-ask-for-a-useful-answer"
            className="mt-7 text-base text-ink underline underline-offset-4 lg:ml-6 lg:mt-8 lg:text-[1.0625rem]"
          >
            From the free lesson: How to ask for a useful answer
          </Link>
        </div>
      </section>

      <section className="border-t border-line">
        <div
          className={`${container} grid gap-8 py-14 lg:grid-cols-12 lg:gap-x-6 lg:py-28`}
        >
          <div className="flex flex-col gap-4 lg:col-span-5 lg:gap-5">
            <Eyebrow>Who it’s for</Eyebrow>
            <h2 className={h2}>Feeling behind is common.</h2>
            <p className="text-lg leading-relaxed text-ink-soft lg:text-[1.3125rem]">
              It is not a measure of your ability. Plenty of capable people have
              opened a chat once, felt foolish, and closed it. These lessons
              start right there.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="border-t-2 border-ink">
              {audience.map((item) => (
                <li
                  key={item.title}
                  className="flex gap-4 border-b border-line py-6 lg:gap-5 lg:py-7"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-highlight lg:size-11">
                    <CheckIcon className="size-[1.125rem] lg:size-[1.375rem]" />
                  </span>
                  <div>
                    <h3 className="font-serif text-[1.375rem] leading-[1.2] lg:text-[1.75rem]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[1.0625rem] leading-relaxed text-ink-soft lg:text-[1.1875rem]">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-xl bg-sand px-5 py-4 text-base leading-relaxed lg:mt-7 lg:px-6 lg:py-5 lg:text-lg">
              <strong>Probably not for you</strong> if you want to build software
              or collect specialist tools.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink text-on-navy">
        <div className={`${container} py-14 lg:py-28`}>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12">
            <div className="flex max-w-[47.5rem] flex-col gap-4 lg:gap-5">
              <Eyebrow tone="highlight">What I’m building</Eyebrow>
              <h2 className={h2}>Apps for ordinary days.</h2>
              <p className="text-lg leading-relaxed text-on-navy-soft lg:text-[1.3125rem]">
                Small, simple tools made with the same idea as the lessons: they
                should just work, without a manual.
              </p>
            </div>
            <ArrowLink
              href="/apps"
              className="shrink-0 text-on-navy decoration-highlight"
            >
              All apps
            </ArrowLink>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-16 lg:gap-6">
            {apps.map((app) => (
              <AppCard key={app.slug} app={app} tone="navy" />
            ))}
          </div>
        </div>
      </section>

      <section className={`${container} py-14 lg:py-28`}>
        <div className="grid gap-4 lg:grid-cols-12 lg:items-end lg:gap-x-6">
          <div className="flex flex-col gap-4 lg:col-span-7 lg:gap-5">
            <Eyebrow>From a free lesson</Eyebrow>
            <h2 className={h2}>Catch up this week, without the shame.</h2>
          </div>
          <p className="text-lg leading-relaxed text-ink-soft lg:col-span-4 lg:col-start-9 lg:text-xl">
            Five short sessions using tasks you already have. At the end, keep
            what helped and drop what didn’t. That’s a successful week either
            way.
          </p>
        </div>
        <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5 lg:gap-5">
          {catchUpDays.map((task, index) => {
            const last = index === catchUpDays.length - 1;
            return (
              <li
                key={task}
                className={`flex flex-col overflow-hidden rounded-[14px] border ${
                  last
                    ? "border-[#e8d27e] bg-highlight-soft [--lined-rule:#e8d27e]"
                    : "border-line bg-card"
                }`}
              >
                <p className="flex items-baseline gap-2.5 border-b-2 border-ink px-5 pb-3 pt-4">
                  <span className="font-mono text-sm font-semibold uppercase tracking-[0.08em] text-ink-soft">
                    Day
                  </span>
                  <span className="font-serif text-4xl leading-none">
                    {index + 1}
                  </span>
                </p>
                <p className="lined flex-1 px-5 pb-6 pt-3 text-[1.1875rem]">
                  {task}
                </p>
              </li>
            );
          })}
        </ol>
        <div className="mt-8 flex lg:justify-end">
          <ArrowLink href="/learn/catch-up-without-shame">
            Read the full lesson free
          </ArrowLink>
        </div>
      </section>

      <section className="overflow-x-clip bg-sand">
        <div
          className={`${container} grid gap-12 py-14 lg:grid-cols-12 lg:items-center lg:gap-x-6 lg:py-28`}
        >
          <div className="lg:col-span-6 lg:p-4">
            <div className="grid -rotate-[1.5deg] gap-6 rounded-md bg-card p-6 shadow-[0_24px_48px_rgba(27,36,51,0.14)] sm:grid-cols-2 sm:gap-8 lg:-rotate-2 lg:p-9">
              <div className="flex flex-col gap-3.5 sm:border-r sm:border-line sm:pr-8">
                <Eyebrow tone="muted" className="text-[0.8125rem]">
                  The postcard test
                </Eyebrow>
                <p className="font-serif text-2xl leading-[1.15] lg:text-[2rem]">
                  Would you write it on the back of a postcard?
                </p>
                <p className="text-[1.0625rem] leading-relaxed text-ink-soft lg:text-lg">
                  If not, leave it out of the chat.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  aria-hidden="true"
                  className="flex h-[6.75rem] w-[5.75rem] items-center justify-center self-end rounded border-2 border-dashed border-tomato text-center font-mono text-xs font-semibold uppercase leading-snug tracking-[0.06em] text-tomato-deep"
                >
                  Not for
                  <br />
                  the chat
                </div>
                <ul aria-label="Leave these out of the chat">
                  {keepOut.map((item) => (
                    <li
                      key={item}
                      className="border-b border-rule py-2 font-mono text-[0.9375rem] text-ink-soft line-through decoration-tomato decoration-2 lg:text-base"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 lg:col-span-5 lg:col-start-8">
            <div className="flex flex-col gap-4 lg:gap-5">
              <Eyebrow>Two rules I keep coming back to</Eyebrow>
              <h2 className={h2}>You stay in charge.</h2>
            </div>
            <ol className="flex flex-col gap-6 lg:gap-7">
              {rules.map((rule, index) => (
                <li key={rule.title} className="flex gap-4 lg:gap-5">
                  <span
                    aria-hidden="true"
                    className="w-7 shrink-0 font-serif text-[1.75rem] leading-none text-tomato-deep lg:w-10 lg:text-[2.5rem]"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-[1.3125rem] leading-[1.2] lg:text-[1.625rem]">
                      {rule.title}
                    </h3>
                    <p className="mt-2 text-[1.0625rem] leading-relaxed text-ink-soft lg:text-[1.1875rem]">
                      {rule.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <ArrowLink href="/learn/what-to-keep-private">
              Read: What to keep private
            </ArrowLink>
          </div>
        </div>
      </section>

      <section className={`${container} py-14 lg:py-28`}>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="flex max-w-[45rem] flex-col gap-4 lg:gap-5">
            <Eyebrow>Free to read · no sign-up</Eyebrow>
            <h2 className={h2}>Start with a free lesson</h2>
            <p className="text-lg leading-relaxed text-ink-soft lg:text-[1.3125rem]">
              Short pages you can use today. Each one is useful on its own.
            </p>
          </div>
          <ArrowLink href="/learn" className="shrink-0 text-ink decoration-tomato">
            All {lessons.length} lessons
          </ArrowLink>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.slug} lesson={lesson} />
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-card">
        <div
          className={`${container} grid gap-6 py-14 lg:grid-cols-12 lg:items-center lg:gap-x-6 lg:py-22`}
        >
          <div className="flex flex-col gap-4 lg:col-span-5 lg:gap-5">
            <Eyebrow>Who I am</Eyebrow>
            <h2 className={h2}>Hello, I’m {site.author}.</h2>
          </div>
          <div className="flex flex-col gap-5 lg:col-span-6 lg:col-start-7">
            <p className="text-lg leading-relaxed text-ink-soft lg:text-[1.3125rem]">
              I use AI every day, for ordinary jobs and for building my own
              apps. This site is where I share what works, in plain English,
              for free. No jargon, no secret method.
            </p>
            <ArrowLink href="/about">More about me</ArrowLink>
          </div>
        </div>
      </section>

      <section className={`${container} py-14 lg:py-28`}>
        <NewsletterBand />
      </section>
    </>
  );
}
