import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nolan Pollack - Resume",
  description: "Nolan Pollack's resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className + " bg-gradient-to-b from-white to-purple-100"
        }
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
