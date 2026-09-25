import Link from "next/link";
import { ArrowIcon, CheckIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { LessonCard } from "@/components/lesson-card";
import { PromptExample } from "@/components/prompt-example";
import { ArrowLink, button, container, Eyebrow } from "@/components/ui";
import { courseIncludes } from "@/lib/course";
import { lessonsByModule } from "@/lib/lessons";
import { pageMeta } from "@/lib/metadata";
import { modules } from "@/lib/modules";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Life with AI",
  absoluteTitle: "Life with AI — everyday AI, in plain English",
  description: site.description,
  path: "/",
});

const reassurances = ["No coding", "Nothing to install", "Your own pace"];

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
    text: "Short lessons you can read today, then the full course when you want the whole path.",
  },
];

// The five-day catch-up from module 3's free lesson.
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
            A starter course for the UK &amp; Europe
          </Eyebrow>
          <h1 className="mt-5 font-serif text-[2.875rem] leading-[1.04] tracking-[-0.02em] sm:text-6xl lg:mt-7 lg:text-[5rem] lg:leading-[1.02]">
            Get comfortable with AI in{" "}
            <span className="highlight-mark">ordinary life</span>.
          </h1>
          <p className="mt-5 max-w-[37.5rem] text-lg leading-relaxed text-ink-soft sm:text-xl lg:mt-7 lg:text-[1.375rem]">
            A calm starter course for work, home and money. Plain English, your
            own pace, nothing to install. Read the free lessons first, then take
            the {site.priceLabel} course when you want a path you can finish.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-10 lg:gap-4">
            <Link href="/course#enrol" className={button.primary}>
              Get the course — {site.priceLabel}
              <ArrowIcon />
            </Link>
            <Link
              href="/learn/how-to-ask-for-a-useful-answer"
              className={button.secondary}
            >
              Read a free lesson
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
              opened a chat once, felt foolish, and closed it. This course starts
              right there.
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
              <Eyebrow tone="highlight">The course</Eyebrow>
              <h2 className={h2}>Four modules. One path you can finish.</h2>
            </div>
            <ArrowLink
              href="/course#inside"
              className="shrink-0 text-on-navy decoration-highlight"
            >
              See what’s in each module
            </ArrowLink>
          </div>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
            {modules.map((module) => (
              <li
                key={module.number}
                className="flex flex-col gap-3.5 rounded-2xl border border-navy-line bg-navy-raised p-6 lg:px-7 lg:py-8"
              >
                <p
                  aria-hidden="true"
                  className="font-serif text-4xl leading-none text-highlight lg:text-[3.5rem]"
                >
                  0{module.number}
                </p>
                <h3 className="font-serif text-2xl leading-[1.15] lg:mt-2 lg:text-[1.875rem]">
                  <span className="sr-only">Module {module.number}: </span>
                  {module.title}
                </h3>
                <p className="font-mono text-[0.9375rem] leading-snug text-on-navy-muted">
                  {module.line}
                </p>
                <p className="flex-1 text-[1.0625rem] leading-relaxed text-on-navy-soft lg:text-lg">
                  {module.summary}
                </p>
                <Link
                  href={`/learn/${module.lessonSlug}`}
                  className="mt-2 inline-flex items-center gap-2 text-lg font-bold text-highlight underline-offset-[5px] hover:underline"
                >
                  Free lesson
                  <ArrowIcon />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${container} py-14 lg:py-28`}>
        <div className="grid gap-4 lg:grid-cols-12 lg:items-end lg:gap-x-6">
          <div className="flex flex-col gap-4 lg:col-span-7 lg:gap-5">
            <Eyebrow>A taste of module 3</Eyebrow>
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
              <Eyebrow>Two rules we keep coming back to</Eyebrow>
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
              Short pages you can use before you buy anything. Each one is
              useful on its own.
            </p>
          </div>
          <ArrowLink href="/learn" className="shrink-0 text-ink decoration-tomato">
            All {lessonsByModule.length} lessons
          </ArrowLink>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {lessonsByModule.map((lesson) => (
            <LessonCard key={lesson.slug} lesson={lesson} />
          ))}
        </div>
      </section>

      <section className={`${container} pb-14 lg:pb-28`}>
        <PriceBand />
      </section>
    </>
  );
}

function PriceBand() {
  return (
    <div className="grid gap-8 rounded-[1.25rem] bg-tomato px-6 py-9 text-card lg:grid-cols-12 lg:items-center lg:gap-x-6 lg:rounded-3xl lg:px-20 lg:py-18">
      <div className="flex flex-col gap-4 lg:col-span-6 lg:gap-5">
        <Eyebrow tone="inherit">The starter course</Eyebrow>
        <h2 className="font-serif text-[3.5rem] leading-none tracking-[-0.02em] lg:text-8xl lg:leading-[0.98]">
          {site.priceLabel},
          <br />
          paid once.
        </h2>
        <p className="max-w-[28.75rem] text-lg leading-relaxed lg:text-[1.3125rem]">
          No subscription. Four modules, in order, and yours to come back to.
        </p>
      </div>
      <div className="flex flex-col gap-8 lg:col-span-5 lg:col-start-8">
        <ul className="flex flex-col gap-3.5 text-[1.0625rem] leading-normal lg:text-[1.1875rem]">
          {courseIncludes.map((item) => (
            <li key={item} className="flex gap-3">
              <CheckIcon className="mt-0.5 size-6 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
          <Link href="/course#enrol" className={`${button.light} whitespace-nowrap`}>
            Get the course — {site.priceLabel}
          </Link>
          <Link
            href="/learn"
            className="self-center whitespace-nowrap text-base text-card underline underline-offset-[5px] sm:self-auto lg:text-lg"
          >
            Or read a free lesson first
          </Link>
        </div>
      </div>
    </div>
  );
}
