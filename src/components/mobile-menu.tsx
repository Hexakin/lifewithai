"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { CrossIcon, MenuIcon } from "@/components/icons";
import { button } from "@/components/ui";
import { site } from "@/lib/site";

export function MobileMenu({
  links,
}: {
  links: readonly { href: string; label: string }[];
}) {
  const panelId = useId();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Menu"}
        onClick={() => setOpen((value) => !value)}
        className="flex size-11 items-center justify-center rounded-[10px] border-2 border-ink text-ink"
      >
        {open ? <CrossIcon className="size-5" /> : <MenuIcon className="size-[1.375rem]" />}
      </button>
      <nav
        id={panelId}
        aria-label="Primary"
        hidden={!open}
        onKeyDown={(event) => {
          if (event.key === "Escape") close();
        }}
        className="absolute inset-x-0 top-full border-b border-line bg-paper px-5 pb-6 pt-3"
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={close}
            className="block border-b border-line py-4 font-serif text-2xl text-ink no-underline"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/course#enrol"
          onClick={close}
          className={`${button.primary} mt-5 w-full`}
        >
          Get the course — {site.priceLabel}
        </Link>
      </nav>
    </div>
  );
}
