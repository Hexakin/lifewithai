import Link from "next/link";
import { Logo } from "@/components/logo";
import { container, Eyebrow } from "@/components/ui";
import { site } from "@/lib/site";

const columns = [
  {
    heading: "Learn",
    className: "md:col-span-2 md:col-start-6",
    links: [
      { href: "/learn", label: "Free lessons" },
      { href: "/learn/how-to-ask-for-a-useful-answer", label: "How to ask" },
      { href: "/learn/what-to-keep-private", label: "What to keep private" },
    ],
  },
  {
    heading: "Course",
    className: "md:col-span-2",
    links: [
      { href: "/course", label: "The course" },
      { href: "/course#inside", label: "The four modules" },
      { href: "/course#enrol", label: `Get the course — ${site.priceLabel}` },
    ],
  },
  {
    heading: "Contact",
    className: "col-span-2 md:col-span-3",
    links: [
      { href: `mailto:${site.email}`, label: site.email },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-on-navy">
      <div className={`${container} pb-10 pt-12 lg:pt-18`}>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-12 md:gap-x-6">
          <div className="col-span-2 flex flex-col gap-4 md:col-span-4">
            <Logo />
            <p className="max-w-[21rem] text-[1.0625rem] leading-relaxed text-on-navy-muted lg:text-lg">
              Everyday AI for people in the UK and Europe, in plain English.
            </p>
          </div>
          {columns.map((column) => (
            <nav
              key={column.heading}
              aria-label={column.heading}
              className={`flex flex-col gap-3 ${column.className}`}
            >
              <Eyebrow tone="inherit" className="mb-1 text-[0.8125rem] text-on-navy-muted">
                {column.heading}
              </Eyebrow>
              {column.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-0.5 text-[1.0625rem] text-on-navy no-underline hover:underline hover:underline-offset-4 lg:text-lg"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-navy-line pt-6 text-on-navy-muted md:flex-row md:items-center md:justify-between">
          <p className="text-sm leading-relaxed lg:text-[0.9375rem]">
            General education, not financial, medical or legal advice. Prices
            in pounds.
          </p>
          <p className="font-mono text-[0.8125rem] lg:text-sm">
            {site.domains.join(" · ")}
          </p>
        </div>
      </div>
    </footer>
  );
}
