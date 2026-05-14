import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://web-raus-projects.vercel.app"),

  title: {
    default: "RAWLAB_ — Raúl Ruiz",
    template: "%s · RAWLAB_",
  },

  description:
    "Portfolio of Raúl Ruiz, Senior Frontend & Mobile Developer focused on React Native, Next.js, design systems, motion UI, performance and creative frontend engineering.",

  keywords: [
    "Raúl Ruiz",
    "Frontend Developer",
    "Mobile Developer",
    "React Native",
    "Next.js",
    "TypeScript",
    "Design Systems",
    "Motion UI",
    "Creative Frontend",
    "Santiago Chile",
  ],

  authors: [{ name: "Raúl Ruiz", url: "https://www.linkedin.com/in/adhesiboss/" }],
  creator: "Raúl Ruiz",
  publisher: "RAWLAB_",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "RAWLAB_ — Raúl Ruiz",
    description:
      "Senior Frontend & Mobile Developer focused on React Native, Next.js, design systems, motion UI and creative frontend engineering.",
    url: "/",
    siteName: "RAWLAB_",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "RAWLAB_ — Raúl Ruiz portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "RAWLAB_ — Raúl Ruiz",
    description:
      "Senior Frontend & Mobile Developer focused on React Native, Next.js, design systems, motion UI and creative frontend engineering.",
    images: ["/opengraph-image"],
  },

  icons: {
    icon: "/icon",
    shortcut: "/icon",
    apple: "/icon",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          bg-black
          text-white
          overflow-x-hidden
        `}
      >
        {children}

        {/* Analytics */}
        <Analytics />

        {/* Performance */}
        <SpeedInsights />
      </body>
    </html>
  );
}