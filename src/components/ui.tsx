import Link from "next/link";
import { ArrowIcon } from "@/components/icons";

export const container = "mx-auto w-full max-w-7xl px-5 sm:px-8";

const buttonBase =
  "inline-flex min-h-14 items-center justify-center gap-3 rounded-xl px-7 text-lg font-bold no-underline transition-colors";

export const button = {
  primary: `${buttonBase} bg-tomato text-card hover:bg-tomato-deep`,
  secondary: `${buttonBase} border-2 border-ink text-ink hover:bg-sand`,
  ink: `${buttonBase} bg-ink text-paper hover:bg-tomato`,
  light: `${buttonBase} bg-card text-ink hover:bg-highlight`,
  highlight: `${buttonBase} bg-highlight text-ink hover:bg-card`,
};

const eyebrowTones = {
  tomato: "text-tomato-deep",
  highlight: "text-highlight",
  muted: "text-ink-soft",
  inherit: "",
};

export function Eyebrow({
  children,
  tone = "tomato",
  className = "",
}: {
  children: React.ReactNode;
  tone?: keyof typeof eyebrowTones;
  className?: string;
}) {
  return (
    <p
      className={`font-mono text-sm font-semibold uppercase tracking-[0.08em] ${eyebrowTones[tone]} ${className}`}
    >
      {children}
    </p>
  );
}

export function ArrowLink({
  href,
  children,
  className = "text-ink decoration-tomato",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2.5 text-lg font-bold underline underline-offset-[6px] hover:decoration-2 ${className}`}
    >
      {children}
      <ArrowIcon />
    </Link>
  );
}

export function StepBadge({
  children,
  size = "sm",
  tone = "ink",
}: {
  children: React.ReactNode;
  size?: "sm" | "lg";
  tone?: "ink" | "highlight";
}) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center rounded-full font-sans font-bold ${
        tone === "ink" ? "bg-ink text-highlight" : "bg-highlight text-ink"
      } ${size === "lg" ? "size-9 text-[1.0625rem]" : "size-6 text-[0.8125rem]"}`}
    >
      {children}
    </span>
  );
}
