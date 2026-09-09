import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

import InstallPrompt from "@/components/InstallPrompt";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
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
    "A simple operations desk for Lion Park Resort, with a shared public visitor view.",
  applicationName: "Lion Park Desk",
  keywords: ["Lion Park", "resort operations", "visitor desk", "bookings", "activities"],
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Lion Park Desk",
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    title: "Lion Park Desk",
    description: "Operations desk and visitor information for Lion Park Resort.",
    siteName: "Lion Park Desk",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lion Park Desk",
    description: "Operations desk and visitor information for Lion Park Resort.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060a12",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans antialiased">
        <div className="min-h-screen bg-[var(--background)]">{children}</div>
        <ServiceWorkerRegister />
        <InstallPrompt />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
