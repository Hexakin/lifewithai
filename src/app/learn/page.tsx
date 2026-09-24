import Link from "next/link";
import { lessons, getLessonModule } from "@/lib/lessons";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Free lessons",
  description:
    "Short, plain-English lessons on using AI in everyday life. A free start before the £39 Life with AI course.",
  path: "/learn",
});

export default function LearnIndexPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brick">
        Free to read
      </p>
      <h1 className="mt-4 font-serif text-4xl tracking-tight text-ink sm:text-5xl">
        Lessons for ordinary weeks
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-soft">
        These pages are the front door. They are useful on their own. If you
        want the four modules in order, with practice, the course is £39 when
        you are ready.
      </p>
      <ul className="mt-10 divide-y divide-line border-y border-line">
        {lessons.map((lesson) => {
          const courseModule = getLessonModule(lesson);
          return (
            <li key={lesson.slug} className="py-6">
              <p className="text-sm text-ink-soft">
                Module {courseModule?.number} · {lesson.readingMinutes} min read
              </p>
              <h2 className="mt-1 font-serif text-2xl text-ink">
                <Link
                  href={`/learn/${lesson.slug}`}
                  className="underline decoration-line underline-offset-4 hover:decoration-brick"
                >
                  {lesson.title}
                </Link>
              </h2>
              <p className="mt-2 text-base leading-relaxed text-ink-soft">
                {lesson.description}
              </p>
            </li>
          );
        })}
      </ul>
      <p className="mt-8">
        <Link
          href="/course"
          className="font-semibold text-ink underline decoration-brick underline-offset-4"
        >
          See the £39 course
        </Link>
      </p>
    </article>
  );
}
