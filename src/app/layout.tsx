import type { Metadata } from "next";
import {
  Atkinson_Hyperlegible_Mono,
  Atkinson_Hyperlegible_Next,
  Young_Serif,
} from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

// Atkinson Hyperlegible is designed for low-vision readers; Young Serif is
// the display face for headings.
const atkinson = Atkinson_Hyperlegible_Next({
  subsets: ["latin"],
  variable: "--font-atkinson",
  display: "swap",
});

const atkinsonMono = Atkinson_Hyperlegible_Mono({
  subsets: ["latin"],
  variable: "--font-atkinson-mono",
  display: "swap",
});

const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-young-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Life with AI — everyday AI, in plain English",
    template: "%s · Life with AI",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: site.name,
    title: "Life with AI — everyday AI, in plain English",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Life with AI — everyday AI, in plain English",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${atkinson.variable} ${atkinsonMono.variable} ${youngSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-highlight focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
