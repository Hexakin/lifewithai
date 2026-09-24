import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-md">
          <p className="font-serif text-xl text-ink">{site.name}</p>
          <p className="mt-2 text-base leading-relaxed text-ink-soft">
            Everyday AI for people in the UK and Europe. Prices in pounds.
            General education, not financial, medical, or legal advice.
          </p>
          <p className="mt-3 text-sm text-ink-soft">
            {site.domains.join(" · ")}
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
          <Link
            href="/learn"
            className="text-ink underline decoration-line underline-offset-4 hover:decoration-brick"
          >
            Free lessons
          </Link>
          <Link
            href="/course"
            className="text-ink underline decoration-line underline-offset-4 hover:decoration-brick"
          >
            Course
          </Link>
          <Link
            href="/privacy"
            className="text-ink underline decoration-line underline-offset-4 hover:decoration-brick"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-ink underline decoration-line underline-offset-4 hover:decoration-brick"
          >
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}
