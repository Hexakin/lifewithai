import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brick">
        404
      </p>
      <h1 className="mt-3 font-serif text-4xl tracking-tight text-ink sm:text-5xl">
        That page is not here
      </h1>
      <p className="mt-4 max-w-prose text-lg leading-relaxed text-ink-soft">
        The link may be out of date. The lessons and the course are still
        where you left them.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center justify-center bg-brick px-5 font-semibold text-paper hover:bg-brick-deep"
        >
          Back to the homepage
        </Link>
        <Link
          href="/learn"
          className="inline-flex min-h-11 items-center justify-center border border-ink px-5 font-semibold text-ink hover:bg-sand"
        >
          Read a free lesson
        </Link>
      </div>
    </div>
  );
}
