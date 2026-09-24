import Link from "next/link";
import { pageMeta } from "@/lib/metadata";
import { modules } from "@/lib/modules";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "The four modules",
  description:
    "The Life with AI curriculum: first month, real life, catching up without shame, and simple habits that save hours each week.",
  path: "/modules",
});

export default function ModulesPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brick">
        Curriculum
      </p>
      <h1 className="mt-4 font-serif text-4xl tracking-tight text-ink sm:text-5xl">
        Four modules, one starter course
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-soft">
        This is the spine of the {site.priceLabel} course. Each module has a
        free lesson you can read now. The course is where the practice sits,
        in order, so you are not assembling it yourself.
      </p>
      <ol className="mt-12 space-y-12">
        {modules.map((module) => (
          <li key={module.number} className="border-t border-ink pt-6">
            <p className="text-sm font-semibold text-brick">
              Module {module.number}
            </p>
            <h2 className="mt-2 font-serif text-3xl text-ink">{module.title}</h2>
            <p className="mt-1 text-base text-ink-soft">{module.line}</p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              {module.summary}
            </p>
            <h3 className="mt-5 text-base font-semibold text-ink">
              By the end you can
            </h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-base leading-relaxed text-ink">
              {module.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
            <p className="mt-5">
              <Link
                href={`/learn/${module.lessonSlug}`}
                className="font-semibold text-ink underline decoration-brick underline-offset-4"
              >
                Free lesson: start here
              </Link>
            </p>
          </li>
        ))}
      </ol>
      <div className="mt-14 border border-line bg-paper-raised p-6">
        <h2 className="font-serif text-2xl text-ink">
          The course is {site.priceLabel}
        </h2>
        <p className="mt-2 text-base leading-relaxed text-ink-soft">
          Self-paced, paid once when checkout is live. The free lessons stay
          on the site either way.
        </p>
        <Link
          href="/course#enrol"
          className="mt-5 inline-flex min-h-11 items-center justify-center bg-brick px-5 font-semibold text-paper hover:bg-brick-deep"
        >
          Get the course — {site.priceLabel}
        </Link>
      </div>
    </article>
  );
}
