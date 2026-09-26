import { NewsletterForm } from "@/components/newsletter-form";
import { Eyebrow } from "@/components/ui";
import { newsletterOpen } from "@/lib/newsletter";
import { site } from "@/lib/site";

export function NewsletterBand() {
  return (
    <div
      id="newsletter"
      className="grid scroll-mt-28 gap-8 rounded-[1.25rem] bg-tomato px-6 py-9 text-card lg:grid-cols-12 lg:items-center lg:gap-x-6 lg:rounded-3xl lg:px-20 lg:py-18"
    >
      <div className="flex flex-col gap-4 lg:col-span-6 lg:gap-5">
        <Eyebrow tone="inherit">Free, by email</Eyebrow>
        <h2 className="font-serif text-[2.75rem] leading-[1.02] tracking-[-0.02em] lg:text-[4.5rem] lg:leading-[0.98]">
          Get the next one first.
        </h2>
        <p className="max-w-[28.75rem] text-lg leading-relaxed lg:text-[1.3125rem]">
          New lessons, and a heads-up when one of my apps is ready to try.
        </p>
      </div>
      <div className="lg:col-span-5 lg:col-start-8">
        {newsletterOpen ? (
          <NewsletterForm />
        ) : (
          <p className="text-lg leading-relaxed lg:text-xl">
            The email list opens soon. Until then, say hello at{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-bold text-card underline underline-offset-4"
            >
              {site.email}
            </a>
            .
          </p>
        )}
      </div>
    </div>
  );
}
