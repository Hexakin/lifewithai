"use client";

import Link from "next/link";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { CrossIcon, MenuIcon } from "@/components/icons";
import { button } from "@/components/ui";

export function MobileMenu({
  links,
}: {
  links: readonly { href: string; label: string }[];
}) {
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Escape closes the menu from the button or the panel, and puts focus back
  // on the button so it isn't lost when the panel hides.
  const closeOnEscape = (event: KeyboardEvent) => {
    if (event.key !== "Escape" || !open) return;
    close();
    toggleRef.current?.focus();
  };

  return (
    <div className="md:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Menu"}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={closeOnEscape}
        className="flex size-11 items-center justify-center rounded-[10px] border-2 border-ink text-ink"
      >
        {open ? <CrossIcon className="size-5" /> : <MenuIcon className="size-[1.375rem]" />}
      </button>
      <nav
        id={panelId}
        aria-label="Primary"
        hidden={!open}
        onKeyDown={closeOnEscape}
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
          href="/learn/how-to-ask-for-a-useful-answer"
          onClick={close}
          className={`${button.primary} mt-5 w-full`}
        >
          Read a free lesson
        </Link>
      </nav>
    </div>
  );
}
