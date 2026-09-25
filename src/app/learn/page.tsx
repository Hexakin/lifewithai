import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { LessonCard } from "@/components/lesson-card";
import { ArrowLink, button, container, Eyebrow, StepBadge } from "@/components/ui";
import { getLesson, lessonsByModule } from "@/lib/lessons";
import { pageMeta } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Free lessons",
  description:
    "Short, plain-English lessons on using AI in everyday life. A free start before the £39 Life with AI course.",
  path: "/learn",
});

const featuredSlug = "how-to-ask-for-a-useful-answer";

export default function LearnIndexPage() {
  const featured = getLesson(featuredSlug);
  const rest = lessonsByModule.filter((lesson) => lesson.slug !== featuredSlug);

  return (
    <>
      <section
        className={`${container} grid gap-6 pb-10 pt-10 lg:grid-cols-12 lg:items-end lg:gap-x-6 lg:pb-18 lg:pt-22`}
      >
        <div className="flex flex-col gap-5 lg:col-span-7 lg:gap-6">
          <Eyebrow>Free lessons · no sign-up</Eyebrow>
          <h1 className="font-serif text-[2.875rem] leading-[1.04] tracking-[-0.02em] sm:text-6xl lg:text-[5rem] lg:leading-[1.02]">
            Lessons for <span className="highlight-mark">ordinary weeks</span>
          </h1>
        </div>
        <div className="flex flex-col gap-4 lg:col-span-4 lg:col-start-9">
          <p className="text-lg leading-relaxed text-ink-soft lg:text-xl">
            Short pages that are useful on their own. If you want the four
            modules in order, with practice, the course is {site.priceLabel}{" "}
            when you’re ready.
          </p>
          <ArrowLink href="/course">See the course</ArrowLink>
        </div>
      </section>

      {featured ? (
        <section className={`${container} pb-4 lg:pb-6`}>
          <Link
            href={`/learn/${featured.slug}`}
            className="group grid gap-8 rounded-[1.25rem] bg-ink px-6 py-9 text-on-navy no-underline lg:grid-cols-12 lg:items-center lg:gap-x-6 lg:rounded-3xl lg:px-16 lg:py-14"
          >
            <div className="flex flex-col gap-4 lg:col-span-6 lg:gap-5">
              <Eyebrow tone="highlight">
                Start here · Module {featured.moduleNumber} ·{" "}
                {featured.readingMinutes} min read
              </Eyebrow>
              <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.015em] lg:text-[3.5rem] lg:leading-[1.06]">
                {featured.title}
              </h2>
              <p className="text-lg leading-relaxed text-on-navy-soft lg:text-xl">
                {featured.dek}
              </p>
              <span
                className={`${button.highlight} mt-2 self-start group-hover:bg-card lg:mt-3`}
              >
                Read the lesson
                <ArrowIcon className="size-[1.125rem]" />
              </span>
            </div>
            <ol className="lg:col-span-5 lg:col-start-8">
              {featured.sections
                .filter((section) => !section.showPromptExample)
                .map((section, index) => (
                  <li
                    key={section.heading}
                    className="flex items-center gap-4 border-b border-navy-line py-5 last:border-b-0"
                  >
                    <StepBadge size="lg" tone="highlight">
                      {index + 1}
                    </StepBadge>
                    <span className="font-serif text-[1.375rem] lg:text-2xl">
                      {section.heading}
                    </span>
                  </li>
                ))}
            </ol>
          </Link>
        </section>
      ) : null}

      <section
        className={`${container} grid gap-4 pb-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:pb-28`}
      >
        {rest.map((lesson) => (
          <LessonCard key={lesson.slug} lesson={lesson} />
        ))}
        <Link
          href="/course"
          className="group flex flex-col gap-3.5 rounded-2xl bg-tomato p-6 text-card no-underline sm:p-8"
        >
          <Eyebrow tone="inherit">The full course</Eyebrow>
          <h3 className="font-serif text-2xl leading-[1.15] sm:text-[1.875rem]">
            Want all four modules, in order?
          </h3>
          <p className="flex-1 text-base leading-relaxed sm:text-lg">
            The lessons plus practice for each module. {site.priceLabel}, paid
            once.
          </p>
          <span className={`${button.light} mt-2 min-h-13 self-start px-[1.375rem]`}>
            See the course
            <ArrowIcon className="size-[1.125rem]" />
          </span>
        </Link>
      </section>
    </>
  );
}
