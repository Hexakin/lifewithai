"use client";

import { useState } from "react";

// A long block a reader copies whole (a prompt to paste into their own AI), with one Copy button.
export function CopyBlock({ title, intro, text }: { title: string; intro?: string; text: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="copy" className="mt-12 flex flex-col gap-5 lg:mt-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-serif text-[1.75rem] leading-[1.15] lg:text-4xl">{title}</h2>
        <button
          type="button"
          onClick={copy}
          className="rounded-full border-2 border-ink bg-highlight px-5 py-2 font-mono text-sm font-semibold uppercase tracking-[0.08em] text-ink shadow-[3px_3px_0_var(--ink)] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          aria-live="polite"
        >
          {copied ? "Copied" : "Copy it all"}
        </button>
      </div>
      {intro ? <p className="text-lg leading-[1.7] lg:text-xl">{intro}</p> : null}
      <pre
        tabIndex={0}
        className="max-h-[32rem] overflow-auto whitespace-pre-wrap rounded-[14px] border-2 border-ink bg-card px-6 py-5 font-mono text-[0.9375rem] leading-relaxed"
      >
        {text}
      </pre>
    </section>
  );
}
