"use client";

import { useActionState, useId } from "react";
import { signUp, type SignupState } from "@/app/actions/newsletter";

const initialState: SignupState = { status: "idle" };

export function NewsletterForm() {
  const emailId = useId();
  const messageId = useId();
  const [state, formAction, pending] = useActionState(signUp, initialState);

  if (state.status === "done") {
    return (
      <p
        role="status"
        className="rounded-xl bg-card px-6 py-5 text-lg leading-relaxed text-ink"
      >
        <strong>Nearly there.</strong> Check {state.email} for an email asking
        you to confirm, and click the link in it. If it hasn’t arrived in a few
        minutes, look in your spam folder.
      </p>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-2.5">
      <label htmlFor={emailId} className="text-lg font-bold">
        Email address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={state.status === "error" || undefined}
          aria-describedby={state.status === "error" ? messageId : undefined}
          placeholder="you@example.com"
          className="min-h-16 min-w-0 flex-1 rounded-xl border-2 border-ink bg-white px-5 text-xl text-ink placeholder:text-ink-soft/70"
        />
        <button
          type="submit"
          disabled={pending}
          className="min-h-16 shrink-0 cursor-pointer rounded-xl bg-ink px-7 text-lg font-bold text-paper transition-colors hover:bg-card hover:text-ink disabled:cursor-wait disabled:opacity-70"
        >
          {pending ? "Signing you up…" : "Sign me up"}
        </button>
      </div>
      {/* Hidden from people; bots that fill it in are ignored. */}
      <div aria-hidden="true" className="hidden">
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {state.status === "error" ? (
        <p
          id={messageId}
          role="alert"
          className="mt-1 rounded-xl bg-card px-5 py-3 text-[1.0625rem] font-semibold text-tomato-deep"
        >
          {state.message}
        </p>
      ) : null}
      <p className="mt-1 text-base leading-relaxed">
        One email when there’s something new. Unsubscribe with one click.
      </p>
    </form>
  );
}
