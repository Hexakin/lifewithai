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
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brick">
        Draft
      </p>
      <h1 className="mt-4 font-serif text-4xl tracking-tight text-ink sm:text-5xl">
        Terms
      </h1>
      <p className="mt-4 text-sm text-ink-soft">Last updated 24 September 2026</p>
      <div className="mt-8 space-y-8 text-lg leading-relaxed text-ink">
        <section>
          <h2 className="font-serif text-2xl">The site and the course</h2>
          <p className="mt-3">
            Life with AI offers free lessons and a self-paced starter course
            priced at {site.priceLabel}. These pages are a draft for{" "}
            {site.domains[0]} and {site.domains[1]}. Checkout is not taking
            payment yet. Nothing on the course form is an order.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl">What you are buying, later</h2>
          <p className="mt-3">
            When payment is live, the course will be a one-off digital
            purchase for your own learning. It is not a live class, a
            qualification, or a subscription. The refund window will be stated
            on the course page before you pay. Until then, do not send money
            to anyone claiming to sell this course.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl">Not professional advice</h2>
          <p className="mt-3">
            Lessons are general education. They are not financial, medical,
            legal, or employment advice. You check important facts yourself,
            and you follow your workplace rules about what you may paste into
            an AI chat.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl">Using the pages</h2>
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
    </article>
  );
}
