import "server-only";

// The mailing list lives in MailerLite, in the same account as the hillmade.uk
// novel list, with its own Life with AI group. This is the only file that knows
// that, so switching provider means rewriting `addSubscriber` and nothing else.
const apiKey = process.env.MAILERLITE_API_KEY;
const groupId = process.env.MAILERLITE_GROUP_ID;
// An operator acknowledgement: set to "true" only after turning on
// "Double opt-in for API and integrations" in MailerLite's subscribe settings.
const doubleOptIn = process.env.MAILERLITE_DOUBLE_OPT_IN_CONFIRMED === "true";

/** False until all three settings are in place, and the signup form stays hidden. */
export const newsletterOpen = Boolean(apiKey && groupId && doubleOptIn);

export type AddResult = "added" | "already" | "failed";

export async function addSubscriber(email: string): Promise<AddResult> {
  if (!newsletterOpen) return "failed";

  // With double opt-in on, new subscribers get MailerLite's confirmation email,
  // so nobody can be signed up with an address they don't control.
  try {
    const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, groups: [groupId] }),
      signal: AbortSignal.timeout(8000),
      cache: "no-store",
    });
    // MailerLite answers 201 for a new subscriber and 200 for an existing one.
    if (response.status === 201) return "added";
    if (response.status === 200) return "already";
    console.error("MailerLite signup failed", response.status);
    return "failed";
  } catch {
    console.error("MailerLite could not be reached");
    return "failed";
  }
}
