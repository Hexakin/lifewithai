import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import type { Lesson } from "@/lib/lessons";

export function LessonCard({ lesson }: { lesson: Lesson }) {
  return (
    <Link
      href={`/learn/${lesson.slug}`}
      className="group flex flex-col gap-3.5 rounded-2xl border border-line bg-card p-6 text-ink no-underline transition hover:border-ink motion-safe:hover:-translate-y-0.5 sm:p-8"
    >
      <p className="font-mono text-sm tracking-[0.04em] text-ink-soft">
        Module {lesson.moduleNumber} · {lesson.readingMinutes} min read
      </p>
      <h3 className="font-serif text-2xl leading-[1.15] sm:text-[1.875rem]">
        {lesson.title}
      </h3>
      <p className="flex-1 text-base leading-relaxed text-ink-soft sm:text-lg">
        {lesson.description}
      </p>
      <span className="mt-2 inline-flex items-center gap-2 text-lg font-bold text-tomato-deep group-hover:underline group-hover:underline-offset-4">
        Read the lesson
        <ArrowIcon className="size-[1.125rem]" />
      </span>
    </Link>
  );
}
