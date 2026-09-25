import Link from "next/link";
import { site } from "@/lib/site";

export function LogoMark({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" aria-hidden="true" className={className}>
      <rect x="2" y="3" width="32" height="25" rx="8" fill="#c8421f" />
      <path d="M9 26 L9 34 L18 27 Z" fill="#c8421f" />
      <path
        d="M10 12.5 H26 M10 19 H20"
        stroke="#fffdf8"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-2.5 whitespace-nowrap text-current no-underline lg:gap-3"
    >
      <LogoMark className="size-8 lg:size-9" />
      <span className="font-serif text-[1.375rem] tracking-[-0.01em] lg:text-[1.625rem]">
        {site.name}
      </span>
    </Link>
  );
}
