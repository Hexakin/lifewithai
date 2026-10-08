import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CopyBlock } from "@/components/copy-block";
import { ArrowIcon, CheckIcon, CrossIcon, PencilIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { NewsletterBand } from "@/components/newsletter-band";
import { container, Eyebrow } from "@/components/ui";
import { pageMeta } from "@/lib/metadata";
import { site } from "@/lib/site";
import { formatTipDate, getTip, reachableTips, showDrafts, visibleTips } from "@/lib/tips";

type TipPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return reachableTips.map((tip) => ({ slug: tip.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: TipPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tip = getTip(slug);
  if (!tip) {
    return { title: "Tip not found" };
  }
  const meta = pageMeta({ title: tip.title, description: tip.description, path: `/tips/${tip.slug}` });
  // Unlisted until the X post is out.
  return tip.status === "live" ? meta : { ...meta, robots: { index: false, follow: true } };
}

export default async function TipPage({ params }: TipPageProps) {
  const { slug } = await params;
  const tip = getTip(slug);
  if (!tip) {
    notFound();
  }
  const index = visibleTips.findIndex((item) => item.slug === tip.slug);
  const older = index >= 0 ? visibleTips[index + 1] : visibleTips[0];

  return (
    <>
      <div className={`${container} pb-14 pt-8 lg:pb-28 lg:pt-16`}>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: tip.title,
            description: tip.description,
            datePublished: tip.date,
            inLanguage: "en-GB",
            mainEntityOfPage: `${site.url}/tips/${tip.slug}`,
            author: { "@type": "Person", name: site.author },
            publisher: { "@type": "Organization", name: site.name, url: site.url },
          }}
        />
        <article className="mx-auto min-w-0 max-w-[47.5rem]">
          <nav aria-label="Breadcrumb" className="font-mono text-sm text-ink-soft">
            <Link href="/tips" className="text-ink-soft underline underline-offset-4">
              Tips
            </Link>
          </nav>
          {tip.status !== "live" && showDrafts ? (
            <p className="mt-5 rounded-lg bg-highlight-soft px-4 py-2 font-mono text-sm">
              {tip.status.toUpperCase()}: {tip.status === "draft"
                ? "preview builds only. Goes up when you keep the X draft."
                : "reachable by link, unlisted. Listed when the X post goes out."}
            </p>
          ) : null}
          <h1 className="mt-5 font-serif text-[2.625rem] leading-[1.06] tracking-[-0.02em] sm:text-5xl lg:mt-6 lg:text-[3.5rem] lg:leading-[1.05]">
            {tip.title}
          </h1>
          <p className="mt-4 font-mono text-[0.9375rem] text-ink-soft lg:mt-5">
            {formatTipDate(tip.date)} · 2 min read
          </p>
          <hr className="my-9 border-0 border-t-2 border-ink lg:my-11" />

          <section className="flex flex-col gap-5">
            <h2 className="font-serif text-[1.75rem] leading-[1.15] lg:text-4xl">What happened</h2>
            {tip.story.map((p) => (
              <p key={p} className="text-lg leading-[1.7] lg:text-xl">
                {p}
              </p>
            ))}
          </section>

          {tip.image ? (
            <figure className="mt-10 lg:mt-12">
              {/* A static image in public/; plain img keeps it simple and lets the reader open it full size. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tip.image.src}
                alt={tip.image.alt}
                width={tip.image.width}
                height={tip.image.height}
                loading="lazy"
                className="h-auto w-full rounded-[14px] border-2 border-ink"
              />
            </figure>
          ) : null}

          <section className="mt-12 flex flex-col gap-5 lg:mt-14">
            <h2 className="font-serif text-[1.75rem] leading-[1.15] lg:text-4xl">Before and after</h2>
            <div className="flex flex-col gap-2.5 rounded-[14px] border border-line bg-card px-6 py-5">
              <p className="flex items-center gap-2 font-mono text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-ink-soft">
                <CrossIcon />
                {tip.before.label}
              </p>
              <p className="font-mono text-[1.0625rem] leading-relaxed">{tip.before.text}</p>
              <p className="text-base text-ink-soft">→ {tip.before.result}</p>
            </div>
            <div className="flex flex-col gap-2.5 rounded-[14px] border-2 border-ink bg-card px-6 py-6 shadow-[6px_6px_0_var(--ink)] sm:px-7">
              <p className="flex items-center gap-2 font-mono text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-tomato-deep">
                <CheckIcon className="size-4" />
                {tip.after.label}
              </p>
              <p className="font-mono text-[1.0625rem] leading-relaxed">
                <span className="bg-highlight-soft px-0.5 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                  {tip.after.text}
                </span>
              </p>
              <p className="text-[1.0625rem] font-bold">→ {tip.after.result}</p>
            </div>
          </section>

          <section className="mt-12 flex flex-col gap-5 lg:mt-14">
            <h2 className="font-serif text-[1.75rem] leading-[1.15] lg:text-4xl">Why it works</h2>
            {tip.why.map((p) => (
              <p key={p} className="text-lg leading-[1.7] lg:text-xl">
                {p}
              </p>
            ))}
          </section>

          <aside
            id="try-this"
            className="mt-12 flex flex-col gap-5 rounded-2xl bg-highlight-soft px-6 py-7 sm:flex-row sm:gap-6 lg:mt-14 lg:px-9 lg:py-8"
          >
            <span className="flex size-13 shrink-0 items-center justify-center rounded-full bg-ink text-highlight">
              <PencilIcon />
            </span>
            <div>
              <h2 className="font-mono text-sm font-semibold uppercase tracking-[0.08em]">Try this today</h2>
              <p className="mt-2.5 text-xl leading-[1.55] lg:text-[1.375rem]">{tip.tryThis}</p>
            </div>
          </aside>

          {tip.copyBlock ? (
            <CopyBlock title={tip.copyBlock.title} intro={tip.copyBlock.intro} text={tip.copyBlock.text} />
          ) : null}

          {tip.xPost ? (
            <p className="mt-8 text-base text-ink-soft">
              This tip started as{" "}
              <a href={tip.xPost} className="underline underline-offset-4" target="_blank" rel="noopener">
                a post on X
              </a>
              .
            </p>
          ) : null}

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-18">
            {older ? (
              <Link
                href={`/tips/${older.slug}`}
                className="group flex flex-col gap-3 rounded-2xl border border-line bg-card p-7 text-ink no-underline transition-colors hover:border-ink"
              >
                <Eyebrow tone="muted" className="text-[0.8125rem]">
                  Previous tip
                </Eyebrow>
                <p className="font-serif text-[1.75rem] leading-[1.15]">{older.title}</p>
                <p className="flex-1 text-[1.0625rem] leading-normal text-ink-soft">{older.description}</p>
                <span className="inline-flex items-center gap-2 text-[1.0625rem] font-bold text-tomato-deep group-hover:underline group-hover:underline-offset-4">
                  Read it
                  <ArrowIcon className="size-[1.125rem]" />
                </span>
              </Link>
            ) : null}
            <Link
              href="/learn"
              className={`group flex flex-col gap-3 rounded-2xl bg-ink p-7 text-on-navy no-underline ${
                older ? "" : "md:col-span-2"
              }`}
            >
              <Eyebrow tone="highlight" className="text-[0.8125rem]">
                Want the basics?
              </Eyebrow>
              <p className="font-serif text-[1.75rem] leading-[1.15]">The free lessons</p>
              <p className="flex-1 text-[1.0625rem] leading-normal text-on-navy-soft">
                Longer, step-by-step pages for getting started with AI in everyday life.
              </p>
              <span className="inline-flex items-center gap-2 text-[1.0625rem] font-bold text-highlight group-hover:underline group-hover:underline-offset-4">
                Start with the lessons
                <ArrowIcon className="size-[1.125rem]" />
              </span>
            </Link>
          </div>
        </article>
      </div>

      <section className={`${container} pb-14 lg:pb-28`}>
        <NewsletterBand />
      </section>
    </>
  );
}
