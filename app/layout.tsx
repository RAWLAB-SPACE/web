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
  title: "RAWLAB_",
  description: "Movement, code, design and human experiences.",

  keywords: [
    "Frontend Developer",
    "React",
    "React Native",
    "Creative Developer",
    "Portfolio",
    "RAWLAB",
    "Design Engineer",
    "Motion Design",
    "Interactive Experience",
    "Climbing",
    "Digital Archive",
  ],

  authors: [
    {
      name: "Raúl Ruiz",
    },
  ],

  creator: "Raúl Ruiz",

  openGraph: {
    title: "RAWLAB_",
    description:
      "Movement, code, design and human experiences.",
    url: "https://rawlab-space.vercel.app",
    siteName: "RAWLAB_",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "RAWLAB_",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "RAWLAB_",
    description:
      "Movement, code, design and human experiences.",
    images: ["/opengraph-image"]
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