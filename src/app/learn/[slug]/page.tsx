import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowIcon, PencilIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { PromptExample } from "@/components/prompt-example";
import { container, Eyebrow, StepBadge } from "@/components/ui";
import { getLesson, getLessonModule, lessons } from "@/lib/lessons";
import { pageMeta } from "@/lib/metadata";
import { site } from "@/lib/site";

type LessonPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return lessons.map((lesson) => ({ slug: lesson.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: LessonPageProps): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) {
    return { title: "Lesson not found" };
  }
  return pageMeta({
    title: lesson.title,
    description: lesson.description,
    path: `/learn/${lesson.slug}`,
  });
}

function sectionId(index: number) {
  return `section-${index + 1}`;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) {
    notFound();
  }

  const courseModule = getLessonModule(lesson);
  const index = lessons.findIndex((item) => item.slug === lesson.slug);
  const next = lessons[index + 1];
  const nextModule = next ? getLessonModule(next) : undefined;

  return (
    <div
      className={`${container} grid gap-10 pb-14 pt-8 lg:grid-cols-[17.5rem_minmax(0,47.5rem)] lg:gap-x-28 lg:pb-28 lg:pt-16`}
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: lesson.title,
          description: lesson.description,
          inLanguage: "en-GB",
          mainEntityOfPage: `${site.url}/learn/${lesson.slug}`,
          author: {
            "@type": "Organization",
            name: site.name,
            url: site.url,
          },
          publisher: {
            "@type": "Organization",
            name: site.name,
            url: site.url,
          },
        }}
      />

      <aside className="order-last flex flex-col gap-7 lg:sticky lg:top-30 lg:order-none lg:self-start lg:pt-2">
        <nav aria-label="In this lesson" className="hidden flex-col gap-3.5 lg:flex">
          <Eyebrow tone="muted" className="text-[0.8125rem]">
            In this lesson
          </Eyebrow>
          <ol className="flex flex-col gap-1 text-[1.0625rem]">
            {lesson.sections.map((section, sectionIndex) => (
              <li key={section.heading}>
                <a
                  href={`#${sectionId(sectionIndex)}`}
                  className="flex items-center gap-2.5 py-2 text-ink-soft no-underline hover:text-ink"
                >
                  <span className="size-2 shrink-0 rounded-full border-[1.5px] border-[#9aa1ae]" />
                  {section.heading}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#try-this"
                className="flex items-center gap-2.5 py-2 text-ink-soft no-underline hover:text-ink"
              >
                <span className="size-2 shrink-0 rounded-full bg-tomato" />
                Try this today
              </a>
            </li>
          </ol>
        </nav>
        {courseModule ? (
          <div className="flex flex-col gap-2.5 rounded-[14px] border border-line bg-card px-6 py-5">
            <Eyebrow tone="muted" className="text-[0.8125rem]">
              Part of module {courseModule.number}
            </Eyebrow>
            <p className="font-serif text-[1.375rem] leading-[1.2]">
              {courseModule.title}
            </p>
            <p className="text-base leading-normal text-ink-soft">
              The {site.priceLabel} course adds practice for this module and
              three more.
            </p>
            <Link
              href="/course"
              className="mt-1 inline-flex items-center gap-2 text-base font-bold text-tomato-deep underline underline-offset-4"
            >
              See the course
              <ArrowIcon className="size-4" />
            </Link>
          </div>
        ) : null}
      </aside>

      <article className="min-w-0">
        <nav aria-label="Breadcrumb" className="font-mono text-sm text-ink-soft">
          <Link href="/learn" className="text-ink-soft underline underline-offset-4">
            Free lessons
          </Link>
          {courseModule ? <> / Module {courseModule.number}</> : null}
        </nav>
        <h1 className="mt-5 font-serif text-[2.625rem] leading-[1.06] tracking-[-0.02em] sm:text-5xl lg:mt-6 lg:text-[4rem] lg:leading-[1.05]">
          {lesson.title}
        </h1>
        <p className="mt-4 font-mono text-[0.9375rem] text-ink-soft lg:mt-5">
          {lesson.readingMinutes} min read
          {courseModule
            ? ` · Module ${courseModule.number}: ${courseModule.title}`
            : null}
        </p>
        <p className="mt-7 font-serif text-2xl leading-[1.4] lg:mt-8 lg:text-[1.75rem]">
          {lesson.dek}
        </p>
        <hr className="my-9 border-0 border-t-2 border-ink lg:my-11" />

        <div className="flex flex-col gap-12 lg:gap-14">
          {lesson.sections.map((section, sectionIndex) => (
            <section
              key={section.heading}
              id={sectionId(sectionIndex)}
              className="flex flex-col gap-5"
            >
              <h2 className="flex items-center gap-3.5 font-serif text-[1.75rem] leading-[1.15] lg:text-4xl">
                <StepBadge size="lg">{sectionIndex + 1}</StepBadge>
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-[1.7] lg:text-xl">
                  {paragraph}
                </p>
              ))}
              {section.example ? (
                <div className="flex flex-col gap-2 rounded-xl border border-line bg-card px-6 py-5">
                  <Eyebrow tone="muted" className="text-[0.8125rem]">
                    Example
                  </Eyebrow>
                  <p className="font-mono text-[1.0625rem] leading-relaxed lg:text-lg">
                    “{section.example}”
                  </p>
                </div>
              ) : null}
              {section.showPromptExample ? <PromptExample /> : null}
            </section>
          ))}
        </div>

        <aside
          id="try-this"
          className="mt-12 flex flex-col gap-5 rounded-2xl bg-highlight-soft px-6 py-7 sm:flex-row sm:gap-6 lg:mt-14 lg:px-9 lg:py-8"
        >
          <span className="flex size-13 shrink-0 items-center justify-center rounded-full bg-ink text-highlight">
            <PencilIcon />
          </span>
          <div>
            <h2 className="font-mono text-sm font-semibold uppercase tracking-[0.08em]">
              Try this today
            </h2>
            <p className="mt-2.5 text-xl leading-[1.55] lg:text-[1.375rem]">
              {lesson.tryThis}
            </p>
          </div>
        </aside>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-18">
          {next ? (
            <Link
              href={`/learn/${next.slug}`}
              className="group flex flex-col gap-3 rounded-2xl border border-line bg-card p-7 text-ink no-underline transition-colors hover:border-ink"
            >
              <Eyebrow tone="muted" className="text-[0.8125rem]">
                Next lesson
                {nextModule ? ` · Module ${nextModule.number}` : null}
              </Eyebrow>
              <p className="font-serif text-[1.75rem] leading-[1.15]">
                {next.title}
              </p>
              <p className="flex-1 text-[1.0625rem] leading-normal text-ink-soft">
                {next.description}
              </p>
              <span className="inline-flex items-center gap-2 text-[1.0625rem] font-bold text-tomato-deep group-hover:underline group-hover:underline-offset-4">
                Read next
                <ArrowIcon className="size-[1.125rem]" />
              </span>
            </Link>
          ) : null}
          <Link
            href="/course"
            className={`group flex flex-col gap-3 rounded-2xl bg-ink p-7 text-on-navy no-underline ${
              next ? "" : "md:col-span-2"
            }`}
          >
            <Eyebrow tone="highlight" className="text-[0.8125rem]">
              The full course · {site.priceLabel}
            </Eyebrow>
            <p className="font-serif text-[1.75rem] leading-[1.15]">
              Want all four modules, in order?
            </p>
            <p className="flex-1 text-[1.0625rem] leading-normal text-on-navy-soft">
              Practice for each module, at your own pace. Paid once. This lesson
              stays free.
            </p>
            <span className="inline-flex items-center gap-2 text-[1.0625rem] font-bold text-highlight group-hover:underline group-hover:underline-offset-4">
              See the course
              <ArrowIcon className="size-[1.125rem]" />
            </span>
          </Link>
        </div>
      </article>
    </div>
  );
}
