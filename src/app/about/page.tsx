import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { NewsletterBand } from "@/components/newsletter-band";
import { container, Eyebrow } from "@/components/ui";
import { pageMeta } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "About",
  description: `Who writes Life with AI: ${site.author}, sharing free, plain-English help with everyday AI and building simple apps.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: `${site.url}/about`,
          mainEntity: {
            "@type": "Person",
            name: site.author,
            url: `${site.url}/about`,
          },
        }}
      />

      <article className={`${container} py-14 lg:py-24`}>
        <div className="max-w-3xl">
          <Eyebrow>Who I am</Eyebrow>
          <h1 className="mt-4 font-serif text-[2.875rem] leading-[1.04] tracking-[-0.02em] sm:text-6xl lg:text-[4.5rem]">
            Hello, I’m <span className="highlight-mark">{site.author}</span>.
          </h1>
          <div className="mt-10 space-y-6 border-t-2 border-ink pt-10 text-lg leading-[1.7] lg:text-xl">
            <p>
              I use AI every day, for the ordinary jobs everyone has and for
              building my own apps. Along the way I’ve worked out what helps,
              what wastes time, and what you should never paste into a chat.
            </p>
            <p>
              Life with AI is where I share that, for free and in plain
              English. The{" "}
              <Link href="/learn" className="underline underline-offset-4">
                lessons
              </Link>{" "}
              are for people who want AI to help with work, home and money, not
              to become a new hobby. The{" "}
              <Link href="/apps" className="underline underline-offset-4">
                apps
              </Link>{" "}
              are small tools I’m building on the same idea: they should just
              work.
            </p>
            <p>
              Questions, or something you’d like a lesson on? Email me at{" "}
              <a
                href={`mailto:${site.email}`}
                className="underline underline-offset-4"
              >
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </article>

      <section className={`${container} pb-14 lg:pb-28`}>
        <NewsletterBand />
      </section>
    </>
  );
}
