import Link from "next/link";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { NavLink } from "@/components/nav-link";
import { button, container } from "@/components/ui";
import { site } from "@/lib/site";

const links = [
  { href: "/learn", label: "Free lessons" },
  { href: "/course", label: "The course" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div
        className={`${container} relative flex h-16 items-center gap-3 lg:h-22`}
      >
        <Logo />
        <div className="flex-1" />
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Link
          href="/course#enrol"
          className={`${button.ink} ml-4 min-h-13 px-[1.375rem] max-md:hidden`}
        >
          Get the course — {site.priceLabel}
        </Link>
        <MobileMenu links={links} />
      </div>
    </header>
  );
}
