import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

import InstallPrompt from "@/components/InstallPrompt";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import LionParkFooter from "@/components/LionParkFooter";
import LionParkHeader from "@/components/LionParkHeader";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lion Park Desk",
    template: "%s | Lion Park Desk",
  },
  description:
    "A simple shared home for Lion Park Resort operations and visitor information.",
  applicationName: "Lion Park Desk",
  keywords: [
    "Lion Park Resort",
    "resort operations",
    "visitor information",
    "park desk",
  ],
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Lion Park Desk",
    statusBarStyle: "default",
  },
  openGraph: {
    title: "Lion Park Desk",
    description:
      "Your park, in one place.",
    siteName: "Lion Park Desk",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lion Park Desk",
    description:
      "Your park, in one place.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#244d35",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="lion-park"
      className={`${inter.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans antialiased"
      >
        <div className="flex min-h-screen flex-col bg-[var(--background)]">
          <LionParkHeader />
          <main className="flex-1">{children}</main>
          <LionParkFooter />
        </div>

        <ServiceWorkerRegister />
        <InstallPrompt />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
