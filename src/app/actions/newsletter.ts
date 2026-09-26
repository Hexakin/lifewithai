"use server";

import { addSubscriber } from "@/lib/newsletter";

export type SignupState =
  | { status: "idle" }
  | { status: "done"; email: string }
  | { status: "error"; message: string };

const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function signUp(
  _previous: SignupState,
  formData: FormData,
): Promise<SignupState> {
  // Bots fill every field; people never see this one.
  if (formData.get("website")) return { status: "idle" };

  const email = String(formData.get("email") ?? "").trim();
  if (email.length > 254 || !looksLikeEmail.test(email)) {
    return {
      status: "error",
      message: "That email address doesn’t look right. Check it and try again.",
    };
  }

  const result = await addSubscriber(email);
  if (result === "failed") {
    return {
      status: "error",
      message: "Something went wrong on our side. Please try again in a minute.",
    };
  }
  return { status: "done", email };
}
