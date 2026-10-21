import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const siteUrl = "https://rohitsharma.dev";
const title = "Rohit Kumar Sharma — Frontend & Shopify Developer";
const description =
  "Portfolio of Rohit Kumar Sharma, a frontend and Shopify developer focused on responsive interfaces, e-commerce storefronts, and WordPress development. Currently working at The Fabcode Solutions LLP.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Rohit Kumar Sharma",
    "Frontend Developer",
    "Shopify Developer",
    "Web Designer",
    "WordPress Developer",
  ],
  authors: [{ name: "Rohit Kumar Sharma" }],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Rohit Kumar Sharma",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper font-sans text-ink">
        <a
          href="#main-content"
          className="focus-ring sr-only rounded-sm bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
