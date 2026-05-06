import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Patricia Tamura | AI Automation & Business Operations",
  description: "AI automation and business operations portfolio for workflow automation, dashboards, trackers, and client-ready systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}<Analytics /></body></html>;
}
