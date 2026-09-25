import { container, Eyebrow } from "@/components/ui";
import { pageMeta } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Terms",
  description:
    "Draft terms for the Life with AI website and the £39 self-paced starter course.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <article className={`${container} py-14 lg:py-24`}>
      <div className="max-w-3xl">
      <Eyebrow>Draft</Eyebrow>
      <h1 className="mt-4 font-serif text-[2.875rem] leading-[1.04] tracking-[-0.02em] sm:text-6xl">
        Terms
      </h1>
      <p className="mt-5 font-mono text-sm text-ink-soft">Last updated 24 September 2026</p>
      <div className="mt-10 space-y-10 border-t-2 border-ink pt-10 text-lg leading-[1.7] lg:text-xl">
        <section>
          <h2 className="font-serif text-[1.75rem] leading-[1.15] lg:text-[2rem]">The site and the course</h2>
          <p className="mt-3">
            Life with AI offers free lessons and a self-paced starter course
            priced at {site.priceLabel}. These pages are a draft for{" "}
            {site.domains[0]} and {site.domains[1]}. Checkout is not taking
            payment yet. Nothing on the course form is an order.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-[1.75rem] leading-[1.15] lg:text-[2rem]">What you are buying, later</h2>
          <p className="mt-3">
            When payment is live, the course will be a one-off digital
            purchase for your own learning. It is not a live class, a
            qualification, or a subscription. The refund window will be stated
            on the course page before you pay. Until then, do not send money
            to anyone claiming to sell this course.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-[1.75rem] leading-[1.15] lg:text-[2rem]">Not professional advice</h2>
          <p className="mt-3">
            Lessons are general education. They are not financial, medical,
            legal, or employment advice. You check important facts yourself,
            and you follow your workplace rules about what you may paste into
            an AI chat.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-[1.75rem] leading-[1.15] lg:text-[2rem]">Using the pages</h2>
          <p className="mt-3">
            You may read the free lessons for your own use. Please do not copy
            the course materials to resell them. These draft terms are written
            with England and Wales in mind and will be replaced by a full set
            before checkout opens. Contact{" "}
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
