import { AppCard } from "@/components/app-card";
import { NewsletterBand } from "@/components/newsletter-band";
import { container, Eyebrow } from "@/components/ui";
import { apps } from "@/lib/apps";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Apps",
  description:
    "Simple apps for everyday life, built with AI: a talk-to-text app and Wandwork, spell-casting voice control for Android.",
  path: "/apps",
});

export default function AppsPage() {
  return (
    <>
      <section
        className={`${container} grid gap-6 pb-10 pt-10 lg:grid-cols-12 lg:items-end lg:gap-x-6 lg:pb-18 lg:pt-22`}
      >
        <div className="flex flex-col gap-5 lg:col-span-7 lg:gap-6">
          <Eyebrow>Apps</Eyebrow>
          <h1 className="font-serif text-[2.875rem] leading-[1.04] tracking-[-0.02em] sm:text-6xl lg:text-[5rem] lg:leading-[1.02]">
            Things I’m <span className="highlight-mark">building</span>
          </h1>
        </div>
        <p className="text-lg leading-relaxed text-ink-soft lg:col-span-4 lg:col-start-9 lg:text-xl">
          Small apps for ordinary days. Each one should do one job well, without
          a manual. They’ll appear here as they’re ready.
        </p>
      </section>

      <section
        className={`${container} grid gap-4 pb-14 md:grid-cols-2 lg:gap-6 lg:pb-20`}
      >
        {apps.map((app) => (
          <AppCard key={app.slug} app={app} />
        ))}
      </section>

      <section className={`${container} pb-14 lg:pb-28`}>
        <NewsletterBand />
      </section>
    </>
  );
}
