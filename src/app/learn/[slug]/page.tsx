import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
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

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) {
    notFound();
  }

  const courseModule = getLessonModule(lesson);
  const index = lessons.findIndex((item) => item.slug === lesson.slug);
  const next = lessons[index + 1];

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
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
      <p className="text-sm text-ink-soft">
        <Link href="/learn" className="underline underline-offset-4">
          Free lessons
        </Link>
        {courseModule ? (
          <>
            {" "}
            · Module {courseModule.number}: {courseModule.title}
          </>
        ) : null}
        {" "}
        · {lesson.readingMinutes} min read
      </p>
      <h1 className="mt-4 font-serif text-4xl tracking-tight text-ink sm:text-5xl">
        {lesson.title}
      </h1>
      <p className="mt-5 text-xl leading-relaxed text-ink-soft">{lesson.dek}</p>
      <div className="mt-10 space-y-10">
        {lesson.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-serif text-2xl text-ink">{section.heading}</h2>
            <div className="mt-3 space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lg leading-relaxed text-ink"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
      <aside className="mt-12 border-l-4 border-brick bg-sand px-5 py-4">
        <h2 className="font-semibold text-ink">Try this</h2>
        <p className="mt-2 text-base leading-relaxed text-ink">{lesson.tryThis}</p>
      </aside>
      <div className="mt-12 border border-line bg-paper-raised p-6">
        <h2 className="font-serif text-2xl text-ink">
          Want the rest in order?
        </h2>
        <p className="mt-2 text-base leading-relaxed text-ink-soft">
          The starter course is {site.priceLabel}, self-paced, with all four
          modules. This lesson stays free.
        </p>
        <Link
          href="/course#enrol"
          className="mt-5 inline-flex min-h-11 items-center justify-center bg-brick px-5 font-semibold text-paper hover:bg-brick-deep"
        >
          Get the course — {site.priceLabel}
        </Link>
      </div>
      {next ? (
        <p className="mt-8 text-base text-ink-soft">
          Next lesson:{" "}
          <Link
            href={`/learn/${next.slug}`}
            className="text-ink underline decoration-brick underline-offset-4"
          >
            {next.title}
          </Link>
        </p>
      ) : null}
    </article>
  );
}
