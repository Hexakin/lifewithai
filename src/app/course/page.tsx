import Link from "next/link";
import { EnrolForm } from "@/components/enrol-form";
import {
  ArrowIcon,
  ChatIcon,
  CheckIcon,
  ClockIcon,
  LayersIcon,
  MonitorIcon,
  PhoneIcon,
  PlusIcon,
  PoundIcon,
} from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { button, container, Eyebrow } from "@/components/ui";
import { courseIncludes } from "@/lib/course";
import { courseFaq } from "@/lib/faq";
import { getLesson } from "@/lib/lessons";
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

const facts = [
  { Icon: LayersIcon, title: "Four modules", text: "In order, with practice for each" },
  { Icon: ClockIcon, title: "Your own pace", text: "Pause and come back any time" },
  { Icon: MonitorIcon, title: "Nothing to install", text: "Use a free AI chat you already have" },
];

const howItWorks = [
  {
    Icon: PhoneIcon,
    title: "How you take it",
    text: "On your own, on a phone or a computer. Pause whenever you need to. No timetable, no classroom.",
  },
  {
    Icon: ChatIcon,
    title: "What you use",
    text: "A free AI chat you can already open in a browser. We don’t sell software or ask you to install anything.",
  },
  {
    Icon: PoundIcon,
    title: "What it costs",
    text: `${site.priceLabel}, once. No subscription. The free lessons stay free either way.`,
  },
];

const h2 =
  "font-serif text-4xl leading-[1.08] tracking-[-0.015em] lg:text-[3.5rem] lg:leading-[1.06]";

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

      <section
        className={`${container} grid gap-12 pb-14 pt-8 lg:grid-cols-[minmax(0,1fr)_27.5rem] lg:gap-24 lg:pb-28 lg:pt-18`}
      >
        <div>
          <nav
            aria-label="Breadcrumb"
            className="font-mono text-sm text-ink-soft"
          >
            <Link href="/" className="text-ink-soft underline underline-offset-4">
              Home
            </Link>{" "}
            / The course
          </nav>
          <Eyebrow className="mt-8 lg:mt-10">
            Self-paced · {site.priceLabel} once
          </Eyebrow>
          <h1 className="mt-4 font-serif text-[2.875rem] leading-[1.04] tracking-[-0.02em] sm:text-6xl lg:mt-5 lg:text-[5rem] lg:leading-[1.02]">
            The starter course for{" "}
            <span className="highlight-mark">everyday AI</span>
          </h1>
          <p className="mt-5 max-w-[40rem] text-lg leading-relaxed text-ink-soft sm:text-xl lg:mt-7 lg:text-[1.375rem]">
            Four modules that take you from a first careful try to a few habits
            you can keep. Written for people in the UK and Europe who want plain
            English, not a career change.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-3 lg:mt-12">
            {facts.map(({ Icon, title, text }) => (
              <li
                key={title}
                className="flex flex-col gap-2 border-t-2 border-ink pt-4"
              >
                <Icon className="size-7 text-tomato-deep" />
                <p className="font-serif text-[1.375rem]">{title}</p>
                <p className="text-[1.0625rem] leading-normal text-ink-soft">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6 self-start rounded-[1.25rem] border-2 border-ink bg-card p-7 shadow-[8px_8px_0_var(--ink)] sm:p-9 lg:mt-14">
          <Eyebrow tone="muted">Life with AI starter course</Eyebrow>
          <div className="flex items-center gap-5">
            <p className="font-serif text-8xl leading-[0.9] tracking-[-0.02em]">
              {site.priceLabel}
            </p>
            <p className="text-[1.0625rem] leading-snug text-ink-soft">
              One payment.
              <br />
              No subscription.
            </p>
          </div>
          <ul className="flex flex-col gap-3 border-t border-line pt-5 text-lg leading-normal">
            {courseIncludes.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckIcon className="mt-0.5 size-[1.375rem] shrink-0 text-tomato-deep" />
                {item}
              </li>
            ))}
          </ul>
          <a href="#enrol" className={`${button.primary} min-h-16 w-full`}>
            Get the course — {site.priceLabel}
          </a>
          <Link
            href="/learn"
            className="self-center text-base text-ink-soft underline underline-offset-4"
          >
            Or read a free lesson first
          </Link>
        </div>
      </section>

      <section
        id="inside"
        aria-labelledby="inside-heading"
        className="border-t border-line bg-card"
      >
        <div className={`${container} py-14 lg:py-28`}>
          <div className="flex max-w-[45rem] flex-col gap-4 lg:gap-5">
            <Eyebrow>What’s inside</Eyebrow>
            <h2 id="inside-heading" className={h2}>
              Four modules, in order
            </h2>
            <p className="text-lg leading-relaxed text-ink-soft lg:text-[1.3125rem]">
              Each module has a free lesson you can read now. The course is
              where the practice sits, in order, so you aren’t piecing it
              together yourself.
            </p>
          </div>
          <ol className="mt-10 border-b border-line lg:mt-14">
            {modules.map((module) => {
              const lesson = getLesson(module.lessonSlug);
              return (
                <li
                  key={module.number}
                  className="grid gap-6 border-t border-line py-10 lg:grid-cols-12 lg:items-start lg:gap-x-6 lg:py-12"
                >
                  <p
                    aria-hidden="true"
                    className="font-serif text-6xl leading-[0.9] text-tomato lg:col-span-2 lg:text-8xl"
                  >
                    0{module.number}
                  </p>
                  <div className="flex flex-col gap-3 lg:col-span-5">
                    <Eyebrow tone="muted" className="tracking-[0.06em]">
                      {module.line}
                    </Eyebrow>
                    <h3 className="font-serif text-[2rem] leading-[1.1] lg:text-[2.5rem]">
                      <span className="sr-only">Module {module.number}: </span>
                      {module.title}
                    </h3>
                    <p className="mt-1 text-lg leading-relaxed text-ink-soft lg:text-xl">
                      {module.summary}
                    </p>
                    {lesson ? (
                      <Link
                        href={`/learn/${lesson.slug}`}
                        className="mt-2 inline-flex items-center gap-2 text-lg font-bold text-ink underline decoration-tomato underline-offset-[5px]"
                      >
                        Free lesson: {lesson.title}
                        <ArrowIcon className="size-[1.125rem] shrink-0" />
                      </Link>
                    ) : null}
                  </div>
                  <div className="rounded-[14px] bg-paper px-6 py-6 lg:col-span-5 lg:col-start-8 lg:px-7">
                    <h4 className="font-mono text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-ink-soft">
                      By the end you can
                    </h4>
                    <ul className="mt-3.5 flex flex-col gap-3 text-lg leading-normal">
                      {module.outcomes.map((outcome) => (
                        <li key={outcome} className="flex gap-3">
                          <CheckIcon className="mt-0.5 size-[1.375rem] shrink-0 text-tomato-deep" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="bg-ink text-on-navy">
        <div
          className={`${container} grid gap-10 py-14 md:grid-cols-3 md:gap-12 lg:py-22`}
        >
          {howItWorks.map(({ Icon, title, text }) => (
            <div key={title} className="flex flex-col gap-3.5">
              <Icon className="size-8 text-highlight" />
              <h2 className="font-serif text-[1.625rem] lg:text-[1.875rem]">
                {title}
              </h2>
              <p className="text-lg leading-relaxed text-on-navy-soft lg:text-[1.1875rem]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="faq-heading"
        className={`${container} grid gap-8 py-14 lg:grid-cols-12 lg:gap-x-6 lg:py-28`}
      >
        <div className="flex flex-col gap-4 lg:col-span-4 lg:gap-5">
          <Eyebrow>Questions</Eyebrow>
          <h2 id="faq-heading" className={h2}>
            Before you buy
          </h2>
          <p className="text-lg leading-relaxed text-ink-soft lg:text-[1.1875rem]">
            Something we haven’t answered? Email{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-ink underline underline-offset-4"
            >
              {site.email}
            </a>
          </p>
        </div>
        <div className="border-t-2 border-ink lg:col-span-7 lg:col-start-6">
          {courseFaq.map((item, index) => (
            <details
              key={item.question}
              open={index === 0}
              className="group border-b border-line"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 font-serif text-[1.375rem] leading-[1.25] lg:py-[1.625rem] lg:text-[1.625rem]">
                {item.question}
                <PlusIcon className="size-7 shrink-0 transition-transform group-open:rotate-45" />
              </summary>
              <p className="mb-7 max-w-[38.75rem] text-lg leading-relaxed text-ink-soft lg:text-[1.1875rem]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section id="enrol" className={`${container} pb-14 lg:pb-28`}>
        <div className="grid gap-8 rounded-[1.25rem] border-2 border-ink bg-card px-6 py-9 lg:grid-cols-12 lg:items-center lg:gap-x-6 lg:rounded-3xl lg:px-18 lg:py-16">
          <div className="flex flex-col gap-4 lg:col-span-5">
            <Eyebrow>Get the course</Eyebrow>
            <h2 className="font-serif text-[2.75rem] leading-[1.04] tracking-[-0.015em] lg:text-[3.75rem]">
              {site.priceLabel}, once
            </h2>
            <p className="text-lg leading-relaxed text-ink-soft lg:text-xl">
              One payment, no subscription. When checkout is live you can start
              module 1 straight away, and come back whenever you like.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <EnrolForm />
          </div>
        </div>
        <p className="mt-5 text-base text-ink-soft">
          Prefer to read first?{" "}
          <Link href="/learn" className="text-ink underline underline-offset-4">
            Start with the free lessons
          </Link>
          .
        </p>
      </section>
    </>
  );
}
