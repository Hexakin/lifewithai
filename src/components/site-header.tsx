import Link from "next/link";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { NavLink } from "@/components/nav-link";
import { button, container } from "@/components/ui";
import { visibleTips } from "@/lib/tips";

const links = [
  { href: "/learn", label: "Free lessons" },
  // Tips appear in the nav once at least one is live (or on preview builds).
  ...(visibleTips.length ? [{ href: "/tips", label: "Tips" }] : []),
  { href: "/apps", label: "Apps" },
  { href: "/about", label: "About" },
];

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
          href="/learn/how-to-ask-for-a-useful-answer"
          className={`${button.ink} ml-4 min-h-13 px-[1.375rem] max-md:hidden`}
        >
          Read a free lesson
        </Link>
        <MobileMenu links={links} />
      </div>
    </header>
  );
}
