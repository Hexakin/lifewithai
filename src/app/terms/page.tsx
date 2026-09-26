import { container, Eyebrow } from "@/components/ui";
import { pageMeta } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Terms",
  description: "Terms for using the Life with AI website and its free lessons.",
  path: "/terms",
});

const h2 = "font-serif text-[1.75rem] leading-[1.15] lg:text-[2rem]";

export default function TermsPage() {
  return (
    <article className={`${container} py-14 lg:py-24`}>
      <div className="max-w-3xl">
      <Eyebrow>Draft</Eyebrow>
      <h1 className="mt-4 font-serif text-[2.875rem] leading-[1.04] tracking-[-0.02em] sm:text-6xl">
        Terms
      </h1>
      <p className="mt-5 font-mono text-sm text-ink-soft">Last updated 26 September 2026</p>
      <div className="mt-10 space-y-10 border-t-2 border-ink pt-10 text-lg leading-[1.7] lg:text-xl">
        <section>
          <h2 className={h2}>The site</h2>
          <p className="mt-3">
            Life with AI publishes free lessons on everyday AI and information
            about apps in development. Nothing on the site is for sale, and
            reading it is free.
          </p>
        </section>
        <section>
          <h2 className={h2}>Not professional advice</h2>
          <p className="mt-3">
            Lessons are general education. They are not financial, medical,
            legal, or employment advice. You check important facts yourself,
            and you follow your workplace rules about what you may paste into
            an AI chat.
          </p>
        </section>
        <section>
          <h2 className={h2}>The apps</h2>
          <p className="mt-3">
            Each app will come with its own terms when it is released.
            Descriptions of apps that are still in the works may change
            before release.
          </p>
        </section>
        <section>
          <h2 className={h2}>Using the pages</h2>
          <p className="mt-3">
            You may read, print and share links to the lessons for your own
            use. Please don’t copy them wholesale onto another site or sell
            them. These terms are written with England and Wales in mind.
            Contact{" "}
            <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>{" "}
            with questions.
          </p>
        </section>
      </div>
      </div>
    </article>
  );
}
