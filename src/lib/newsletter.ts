import "server-only";

// The mailing list lives in Buttondown. This is the only file that knows
// that, so switching provider means rewriting `addSubscriber` and nothing else.
const apiKey = process.env.BUTTONDOWN_API_KEY;

/** False until the API key is set, and the signup form stays hidden. */
export const newsletterOpen = Boolean(apiKey);

export type AddResult = "added" | "already" | "failed";

export async function addSubscriber(email: string): Promise<AddResult> {
  if (!apiKey) return "failed";

  // New subscribers get Buttondown's confirmation email (double opt-in), so
  // nobody can be signed up with an address they don't control.
  const response = await fetch("https://api.buttondown.com/v1/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Token ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email_address: email, tags: ["website"] }),
    cache: "no-store",
  });

  if (response.ok) return "added";
  if (response.status === 400) {
    const body = await response.text();
    if (/already/i.test(body)) return "already";
  }
  console.error("Buttondown signup failed", response.status);
  return "failed";
}
