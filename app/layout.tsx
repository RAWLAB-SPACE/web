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

  title: "RAWLAB_",

  description:
    "RAWLAB_ is a digital archive of movement, climbing, design systems, frontend engineering, visual experimentation and human-centered interactive experiences.",

  openGraph: {
    title: "RAWLAB_",
    description:
      "Movement, code, design and human experiences.",
    url: "https://web-raus-projects.vercel.app",
    siteName: "RAWLAB_",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "RAWLAB_",
    description:
      "Movement, code, design and human experiences.",
    images: ["/opengraph-image"],
  },

  icons: {
    icon: "/icon",
    shortcut: "/icon",
    apple: "/icon",
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