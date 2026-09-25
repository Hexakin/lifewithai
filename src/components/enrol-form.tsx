"use client";

import { useId, useState } from "react";
import { LockIcon } from "@/components/icons";
import { site } from "@/lib/site";

type Status = "idle" | "ready";

export function EnrolForm() {
  const emailId = useId();
  const helpId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) {
      setStatus("idle");
      return;
    }
    setStatus("ready");
  }

  return (
    <form
      onSubmit={onSubmit}
      aria-describedby={helpId}
      className="flex flex-col gap-2.5"
    >
      <label htmlFor={emailId} className="text-lg font-bold">
        Email address
      </label>
      <p id={helpId} className="text-base leading-relaxed text-ink-soft">
        Checkout preview: payment isn’t switched on yet, so this form doesn’t
        save your email or charge you.
      </p>
      <div className="mt-1.5 flex flex-col gap-3 sm:flex-row">
        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === "ready") setStatus("idle");
          }}
          placeholder="you@example.com"
          className="min-h-16 min-w-0 flex-1 rounded-xl border-2 border-ink bg-white px-5 text-xl text-ink placeholder:text-ink-soft/70"
        />
        <button
          type="submit"
          className="min-h-16 shrink-0 cursor-pointer rounded-xl bg-tomato px-7 text-lg font-bold text-card transition-colors hover:bg-tomato-deep"
        >
          Continue to payment
        </button>
      </div>
      <p className="mt-1.5 flex items-center gap-2 text-[0.9375rem] text-ink-soft">
        <LockIcon />
        Payment will be handled by Stripe · {site.priceLabel} GBP
      </p>
      {status === "ready" ? (
        <p
          role="status"
          className="mt-2 rounded-xl bg-highlight-soft px-5 py-4 text-[1.0625rem] leading-relaxed"
        >
          The form works. Nothing was saved, and no email will be sent from
          this preview. When checkout is live, this button will take{" "}
          {site.priceLabel} once through Stripe and you can start straight away.
        </p>
      ) : null}
    </form>
  );
}
