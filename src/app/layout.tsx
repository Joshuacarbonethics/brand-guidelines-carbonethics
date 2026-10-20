import type { Metadata, Viewport } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import "./link-animations.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-public-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CarbonEthics - Brand Guidelines & Design System",
  description: "CarbonEthics Brand Guidelines, Design Tokens, Typography, Color System, and Reusable UI Components.",
  icons: {
    icon: "/logo/CarbonEthics_Favicon_Navy.webp",
    shortcut: "/logo/CarbonEthics_Favicon_Navy.webp",
    apple: "/logo/CarbonEthics_Favicon_Navy.webp",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={publicSans.variable}
      data-color-scheme="light"
      suppressHydrationWarning
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
