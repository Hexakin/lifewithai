import { pageMeta } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Privacy",
  description:
    "How the Life with AI website handles information on this preview, and what will change when checkout opens.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brick">
        Draft
      </p>
      <h1 className="mt-4 font-serif text-4xl tracking-tight text-ink sm:text-5xl">
        Privacy
      </h1>
      <p className="mt-4 text-sm text-ink-soft">Last updated 24 September 2026</p>
      <div className="mt-8 space-y-8 text-lg leading-relaxed text-ink">
        <section>
          <h2 className="font-serif text-2xl">Who we are</h2>
          <p className="mt-3">
            Life with AI publishes free lessons and a {site.priceLabel}{" "}
            self-paced course for people in the UK and Europe. The site is
            intended for {site.domains[0]} and {site.domains[1]}. Questions
            about privacy can go to{" "}
            <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl">What this preview collects</h2>
          <p className="mt-3">
            This preview does not run analytics and does not use advertising
            cookies. The email box on the course page stays in your browser.
            It checks that the address looks valid, then shows a message. It
            does not send the address to us, store it, or add you to a list.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl">When checkout opens</h2>
          <p className="mt-3">
            Payment is planned through Stripe. Card details would be handled
            by Stripe, not stored on this site. We will update this page
            before that switch, including what we keep (such as your email and
            the fact you bought the course) and how long we keep it.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl">Lessons and the course</h2>
          <p className="mt-3">
            There is no account and no learning platform on this site yet. You
            do not need to sign in to read the free lessons.
          </p>
        </section>
      </div>
    </article>
  );
}
