import Link from "next/link";
import { NavLink } from "@/components/nav-link";
import { site } from "@/lib/site";

const links = [
  { href: "/learn", label: "Free lessons" },
  { href: "/course", label: "The course" },
  { href: "/modules", label: "Modules" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center gap-x-4 gap-y-3 px-4 py-3 sm:px-6 md:grid-cols-[auto_1fr_auto]">
        <Link
          href="/"
          className="font-serif text-xl tracking-tight text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brick"
        >
          {site.name}
        </Link>
        <nav
          aria-label="Primary"
          className="col-span-2 flex flex-wrap gap-x-5 gap-y-2 text-base md:col-span-1 md:justify-end"
        >
          {links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Link
          href="/course#enrol"
          className="inline-flex min-h-11 items-center justify-center justify-self-end bg-brick px-4 text-sm font-semibold text-paper hover:bg-brick-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:text-base"
        >
          <span className="sm:hidden">{site.priceLabel} course</span>
          <span className="hidden sm:inline">
            Get the course — {site.priceLabel}
          </span>
        </Link>
      </div>
    </header>
  );
}
