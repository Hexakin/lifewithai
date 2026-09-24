"use client";

import { useId, useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "ready";

export function EnrolForm() {
  const emailId = useId();
  const helpId = useId();
  const statusId = useId();
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
      id="enrol"
      onSubmit={onSubmit}
      className="scroll-mt-24 border border-line bg-paper-raised p-5 sm:p-8"
      aria-describedby={helpId}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brick">
        Checkout preview
      </p>
      <h2 className="mt-2 font-serif text-3xl tracking-tight text-ink">
        Get the course — {site.priceLabel}
      </h2>
      <p id={helpId} className="mt-3 max-w-prose text-base leading-relaxed text-ink-soft">
        One payment of {site.priceLabel} when Stripe is connected. This preview
        checks that the form works. It does not save your email, send you
        mail, or take a payment.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label htmlFor={emailId} className="block text-sm font-semibold text-ink">
            Email address
          </label>
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
            className="mt-2 w-full border border-line bg-paper px-3 py-3 text-base text-ink placeholder:text-ink-soft/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brick"
          />
        </div>
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center bg-brick px-5 py-3 text-base font-semibold text-paper hover:bg-brick-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          Get the course — {site.priceLabel}
        </button>
      </div>
      {status === "ready" ? (
        <p id={statusId} role="status" className="mt-4 max-w-prose text-base leading-relaxed text-moss">
          The form works. Nothing was saved, and no email will be sent from
          this preview. When checkout is live, this button will take{" "}
          {site.priceLabel} once through Stripe and you can start straight away.
        </p>
      ) : null}
    </form>
  );
}
