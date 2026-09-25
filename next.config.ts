import type { NextConfig } from "next";

const CANONICAL_ORIGIN = "https://lifewithai.co.uk";

// Apex and www on the .uk domain are attached to this deployment. Redirect
// them here so search engines only index the .co.uk host. Other hosts
// (lifewithai.co.uk, preview deployments, *.vercel.app, localhost) are left
// alone. Host values are matched as regular expressions, so dots are escaped.
// /_next is excluded by Next.js itself; src/proxy.ts covers that prefix.
const LEGACY_HOSTS = [
  String.raw`lifewithai\.uk`,
  String.raw`www\.lifewithai\.uk`,
];

const nextConfig: NextConfig = {
  async redirects() {
    return LEGACY_HOSTS.map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: `${CANONICAL_ORIGIN}/:path*`,
      permanent: true,
    }));
  },
};

export default nextConfig;
