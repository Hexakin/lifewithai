import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { NewsletterBand } from "@/components/newsletter-band";
import { container, Eyebrow } from "@/components/ui";
import { pageMeta } from "@/lib/metadata";
import { formatTipDate, visibleTips } from "@/lib/tips";

export const metadata = pageMeta({
  title: "Tips",
  description:
    "Short, real tips on using AI, each from something that actually happened while I build my studio. A two-minute read, with a before and after.",
  path: "/tips",
});

export default function TipsIndexPage() {
  return (
    <>
      <section
        className={`${container} grid gap-6 pb-10 pt-10 lg:grid-cols-12 lg:items-end lg:gap-x-6 lg:pb-18 lg:pt-22`}
      >
        <div className="flex flex-col gap-5 lg:col-span-7 lg:gap-6">
          <Eyebrow>Tips · two-minute reads</Eyebrow>
          <h1 className="font-serif text-[2.875rem] leading-[1.04] tracking-[-0.02em] sm:text-6xl lg:text-[5rem] lg:leading-[1.02]">
            Learned <span className="highlight-mark">the real way</span>
          </h1>
        </div>
        <div className="flex flex-col gap-4 lg:col-span-4 lg:col-start-9">
          <p className="text-lg leading-relaxed text-ink-soft lg:text-xl">
            I build games, apps and music with AI every day. When something goes
            wrong, or right, I write it up here: what happened, a before and
            after, and one thing to try.
          </p>
        </div>
      </section>

      <section className={`${container} grid gap-4 pb-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:pb-28`}>
        {visibleTips.map((tip) => (
          <Link
            key={tip.slug}
            href={`/tips/${tip.slug}`}
            className="group flex flex-col gap-3.5 rounded-2xl border border-line bg-card p-6 text-ink no-underline transition hover:border-ink motion-safe:hover:-translate-y-0.5 sm:p-8"
          >
            <p className="font-mono text-sm tracking-[0.04em] text-ink-soft">
              {formatTipDate(tip.date)}
              {tip.status !== "live" ? ` · ${tip.status.toUpperCase()}` : ""}
            </p>
            <h2 className="font-serif text-2xl leading-[1.15] sm:text-[1.875rem]">{tip.title}</h2>
            <p className="flex-1 text-base leading-relaxed text-ink-soft sm:text-lg">{tip.description}</p>
            <span className="mt-2 inline-flex items-center gap-2 text-lg font-bold text-tomato-deep group-hover:underline group-hover:underline-offset-4">
              Read the tip
              <ArrowIcon className="size-[1.125rem]" />
            </span>
          </Link>
        ))}
        {visibleTips.length === 0 ? (
          <p className="text-lg text-ink-soft">The first tips are on their way.</p>
        ) : null}
      </section>

      <section className={`${container} pb-14 lg:pb-28`}>
        <NewsletterBand />
      </section>
    </>
  );
}
