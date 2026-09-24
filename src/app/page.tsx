import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { lessons } from "@/lib/lessons";
import { pageMeta } from "@/lib/metadata";
import { modules } from "@/lib/modules";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Life with AI",
  absoluteTitle: "Life with AI — everyday AI, in plain English",
  description: site.description,
  path: "/",
});

const audience = [
  {
    title: "You already have a full week",
    text: "Work, home, and the admin in between. You want help with those jobs, not a new hobby.",
  },
  {
    title: "You can use email and a phone",
    text: "That is the starting point. The course stays in ordinary language and never asks you to code.",
  },
  {
    title: "You want something you can use this month",
    text: "Short lessons you can read today, then a self-paced course when you want the full path.",
  },
];

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
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brick">
              For the UK and Europe
            </p>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight text-ink sm:text-6xl">
              Get comfortable with AI in ordinary life
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              A calm starter course for work, home, and money. Plain English,
              your own pace, and no specialist tools. Read the free lessons
              first. Take the {site.priceLabel} course when you want a path you
              can finish.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/course#enrol"
                className="inline-flex min-h-12 items-center justify-center bg-brick px-5 font-semibold text-paper hover:bg-brick-deep"
              >
                Get the course — {site.priceLabel}
              </Link>
              <Link
                href="/learn/first-month-with-ai"
                className="inline-flex min-h-12 items-center justify-center border border-ink px-5 font-semibold text-ink hover:bg-sand"
              >
                Read a free lesson
              </Link>
            </div>
          </div>
          <aside className="border border-line bg-paper-raised p-6">
            <p className="font-serif text-2xl text-ink">In the course</p>
            <ol className="mt-4 divide-y divide-line">
              {modules.map((module) => (
                <li key={module.number} className="py-3">
                  <p className="text-sm text-ink-soft">0{module.number}</p>
                  <p className="font-semibold text-ink">{module.title}</p>
                  <p className="text-sm text-ink-soft">{module.line}</p>
                </li>
              ))}
            </ol>
            <Link
              href="/modules"
              className="mt-2 inline-block text-ink underline decoration-brick underline-offset-4"
            >
              See the modules
            </Link>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">
          Who it is for
        </h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {audience.map((item) => (
            <li key={item.title} className="border-t border-ink pt-4">
              <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-prose text-base leading-relaxed text-ink-soft">
          A better fit if you want practical help with daily tasks. A poorer
          fit if you want to build software or collect specialist tools.
        </p>
      </section>

      <section className="border-y border-line bg-moss-soft">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">
              Four modules
            </h2>
            <Link
              href="/course"
              className="text-ink underline decoration-moss underline-offset-4"
            >
              The full course is {site.priceLabel}
            </Link>
          </div>
          <ol className="mt-8 grid gap-6 md:grid-cols-2">
            {modules.map((module) => (
              <li key={module.number} className="bg-paper p-6">
                <p className="text-sm font-semibold text-moss">
                  Module {module.number}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-ink">
                  {module.title}
                </h3>
                <p className="mt-1 text-sm text-ink-soft">{module.line}</p>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">
                  {module.summary}
                </p>
                <Link
                  href={`/learn/${module.lessonSlug}`}
                  className="mt-4 inline-block font-semibold text-ink underline decoration-line underline-offset-4 hover:decoration-brick"
                >
                  Free lesson
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">
          Free lessons
        </h2>
        <p className="mt-3 max-w-prose text-lg leading-relaxed text-ink-soft">
          Short pages you can use before you buy anything. Each one points
          back to the course if you want the rest.
        </p>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {lessons.map((lesson) => (
            <li key={lesson.slug}>
              <Link
                href={`/learn/${lesson.slug}`}
                className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <span className="font-serif text-xl text-ink group-hover:underline">
                  {lesson.title}
                </span>
                <span className="text-sm text-ink-soft">
                  {lesson.readingMinutes} min read
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-serif text-3xl tracking-tight text-ink">
              {site.priceLabel}, paid once
            </h2>
            <p className="mt-2 max-w-xl text-lg leading-relaxed text-ink-soft">
              Self-paced. Four modules. Yours to revisit. Checkout is a
              preview until Stripe is connected.
            </p>
          </div>
          <Link
            href="/course#enrol"
            className="inline-flex min-h-12 items-center justify-center bg-ink px-5 font-semibold text-paper hover:bg-brick"
          >
            Get the course — {site.priceLabel}
          </Link>
        </div>
      </section>
    </>
  );
}
