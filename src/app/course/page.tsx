import Link from "next/link";
import { EnrolForm } from "@/components/enrol-form";
import { JsonLd } from "@/components/json-ld";
import { courseFaq } from "@/lib/faq";
import { pageMeta } from "@/lib/metadata";
import { modules } from "@/lib/modules";
import { site } from "@/lib/site";

const description =
  "A £39 self-paced starter course for everyday AI: four modules covering your first month, real life, catching up, and simple habits that save time.";

export const metadata = pageMeta({
  title: "The starter course",
  description,
  path: "/course",
});

export default function CoursePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Life with AI starter course",
          description,
          provider: {
            "@type": "Organization",
            name: site.name,
            url: site.url,
          },
          inLanguage: "en-GB",
          offers: {
            "@type": "Offer",
            price: site.priceGbp.toFixed(2),
            priceCurrency: "GBP",
            availability: "https://schema.org/PreOrder",
            url: `${site.url}/course`,
          },
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "online",
          },
        }}
      />
      <article className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brick">
          Self-paced · {site.priceLabel}
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight text-ink sm:text-6xl">
          The starter course for everyday AI
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
          Four modules that take you from a first careful try to a few habits
          you can keep. Written for people in the UK and Europe who want plain
          English, not a career change.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#enrol"
            className="inline-flex min-h-12 items-center justify-center bg-brick px-5 font-semibold text-paper hover:bg-brick-deep"
          >
            Get the course — {site.priceLabel}
          </a>
          <p className="text-base text-ink-soft">
            One payment. No subscription. Preview checkout below.
          </p>
        </div>

        <section className="mt-16" aria-labelledby="inside-heading">
          <h2
            id="inside-heading"
            className="font-serif text-3xl tracking-tight text-ink"
          >
            What is inside
          </h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-2">
            {modules.map((module) => (
              <li key={module.number} className="border border-line p-6">
                <p className="text-sm font-semibold text-brick">
                  Module {module.number}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-ink">
                  {module.title}
                </h3>
                <p className="mt-1 text-sm text-ink-soft">{module.line}</p>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">
                  {module.summary}
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-ink">
                  {module.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
                <Link
                  href={`/learn/${module.lessonSlug}`}
                  className="mt-4 inline-block text-ink underline decoration-line underline-offset-4 hover:decoration-brick"
                >
                  Read the free lesson
                </Link>
              </li>
            ))}
          </ol>
          <p className="mt-6">
            <Link
              href="/modules"
              className="text-ink underline decoration-brick underline-offset-4"
            >
              Module overview
            </Link>
          </p>
        </section>

        <section className="mt-16 grid gap-6 bg-sand p-6 sm:p-8 md:grid-cols-3">
          <div>
            <h2 className="font-serif text-2xl text-ink">How you take it</h2>
            <p className="mt-2 text-base leading-relaxed text-ink-soft">
              On your own, on a phone or a computer. Pause whenever you need
              to.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-ink">What you use</h2>
            <p className="mt-2 text-base leading-relaxed text-ink-soft">
              A free AI chat you already have. We do not ask you to buy
              software.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-ink">What it costs</h2>
            <p className="mt-2 text-base leading-relaxed text-ink-soft">
              {site.priceLabel}, once, when payment is switched on. The free
              lessons stay free.
            </p>
          </div>
        </section>

        <section className="mt-16" aria-labelledby="faq-heading">
          <h2
            id="faq-heading"
            className="font-serif text-3xl tracking-tight text-ink"
          >
            Questions
          </h2>
          <div className="mt-6 divide-y divide-line border-y border-line">
            {courseFaq.map((item) => (
              <details key={item.question} className="group py-4">
                <summary className="cursor-pointer text-lg font-semibold text-ink">
                  {item.question}
                </summary>
                <p className="mt-3 max-w-prose text-base leading-relaxed text-ink-soft">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <EnrolForm />
          <p className="mt-4 text-sm text-ink-soft">
            Prefer to read first?{" "}
            <Link href="/learn" className="underline underline-offset-4">
              Start with the free lessons
            </Link>
            .
          </p>
        </section>
      </article>
    </>
  );
}
