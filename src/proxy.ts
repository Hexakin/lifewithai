import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_ORIGIN = "https://lifewithai.co.uk";

// next.config redirects cannot match /_next (Next.js excludes that prefix).
// This proxy only runs for that prefix on the legacy hosts, so the canonical
// host, previews, and localhost never invoke it.
export function proxy(request: NextRequest) {
  const destination = new URL(
    `${request.nextUrl.pathname}${request.nextUrl.search}`,
    CANONICAL_ORIGIN,
  );
  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: [
    {
      source: "/_next/:path*",
      has: [{ type: "host", value: "lifewithai\\.uk" }],
    },
    {
      source: "/_next/:path*",
      has: [{ type: "host", value: "www\\.lifewithai\\.uk" }],
    },
  ],
};
