import { container, Eyebrow } from "@/components/ui";
import { pageMeta } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Privacy",
  description:
    "How the Life with AI website handles information, including the email list.",
  path: "/privacy",
});

const h2 = "font-serif text-[1.75rem] leading-[1.15] lg:text-[2rem]";

export default function PrivacyPage() {
  return (
    <article className={`${container} py-14 lg:py-24`}>
      <div className="max-w-3xl">
      <Eyebrow>Draft</Eyebrow>
      <h1 className="mt-4 font-serif text-[2.875rem] leading-[1.04] tracking-[-0.02em] sm:text-6xl">
        Privacy
      </h1>
      <p className="mt-5 font-mono text-sm text-ink-soft">Last updated 26 September 2026</p>
      <div className="mt-10 space-y-10 border-t-2 border-ink pt-10 text-lg leading-[1.7] lg:text-xl">
        <section>
          <h2 className={h2}>Who I am</h2>
          <p className="mt-3">
            Life with AI is run by {site.author}. It publishes free lessons on
            everyday AI and information about the apps I’m building, for people
            in the UK and Europe. Questions about privacy can go to{" "}
            <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        </section>
        <section>
          <h2 className={h2}>Reading the site</h2>
          <p className="mt-3">
            You don’t need an account to read anything here. The site does not
            run analytics and does not use advertising cookies. Like any
            website, the hosting provider (Vercel) keeps short-lived technical
            logs, such as IP addresses, to keep the site running and secure.
          </p>
        </section>
        <section>
          <h2 className={h2}>The email list</h2>
          <p className="mt-3">
            If you sign up for email updates, your email address is stored
            with Buttondown, the service that sends the emails. You’ll get an
            email asking you to confirm first; nothing else is sent until you
            do. I use your address only to send new lessons and news about my
            apps. I don’t sell it or share it with anyone else.
          </p>
          <p className="mt-3">
            Every email has an unsubscribe link, and unsubscribing takes one
            click. You can also email me to have your address deleted. The
            legal basis is your consent, which you can withdraw at any time.
          </p>
        </section>
        <section>
          <h2 className={h2}>The apps</h2>
          <p className="mt-3">
            Each app will have its own privacy notice, published before it is
            released, saying exactly what it collects and why.
          </p>
        </section>
      </div>
      </div>
    </article>
  );
}
