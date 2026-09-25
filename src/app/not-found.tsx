import Link from "next/link";
import { button, container, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <div className={`${container} py-16 lg:py-28`}>
      <div className="max-w-3xl">
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-4 font-serif text-[2.875rem] leading-[1.04] tracking-[-0.02em] sm:text-6xl">
          That page is <span className="highlight-mark">not here</span>
        </h1>
        <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-soft sm:text-xl">
          The link may be out of date. The lessons and the course are still
          where you left them.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className={button.primary}>
            Back to the homepage
          </Link>
          <Link href="/learn" className={button.secondary}>
            Read a free lesson
          </Link>
        </div>
      </div>
    </div>
  );
}
