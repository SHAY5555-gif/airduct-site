import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { OrganizationSchema } from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const BRAND_NAME = "West Coast Air Duct and Chimney Services";
const SITE_URL = "https://westcoastairductandchimney.com";

export const metadata: Metadata = {
  title: `Air Duct & Chimney Services You Can Trust | ${BRAND_NAME}`,
  description: "Professional air duct cleaning, duct repair, dryer vent cleaning, and chimney services across Southern California. Same-day appointments and 24/7 emergency service. Call 424-424-1579.",
  keywords: "air duct cleaning, chimney cleaning, dryer vent cleaning, duct repair, chimney repair, Los Angeles, Orange County, Riverside, San Bernardino, same day service, emergency service",
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: `Air Duct & Chimney Services You Can Trust | ${BRAND_NAME}`,
    description: "Professional air duct and chimney services across Southern California. Same-day appointments and 24/7 emergency service. Call 424-424-1579.",
    type: "website",
    url: SITE_URL,
    siteName: BRAND_NAME,
    images: [
      {
        url: "/og-image.png",
        width: 800,
        height: 800,
        alt: BRAND_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Air Duct & Chimney Services You Can Trust | ${BRAND_NAME}`,
    description: "Professional air duct and chimney services across Southern California. Same-day appointments and 24/7 emergency service.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <OrganizationSchema />
        <Header />
        <main className="pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
