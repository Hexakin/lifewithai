"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const active =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`rounded-full px-[1.125rem] py-2.5 text-lg font-semibold text-ink no-underline transition-colors ${
        active ? "bg-sand" : "hover:bg-sand/60"
      }`}
    >
      {children}
    </Link>
  );
}
