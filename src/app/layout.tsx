import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const BRAND_NAME = "West Coast Air Duct and Chimney Services";

export const metadata: Metadata = {
  title: `Air Duct & Chimney Services You Can Trust | ${BRAND_NAME}`,
  description: "Professional air duct cleaning, duct repair, dryer vent cleaning, and chimney services across Southern California. Same-day appointments and 24/7 emergency service. Call 424-424-1579.",
  keywords: "air duct cleaning, chimney cleaning, dryer vent cleaning, duct repair, chimney repair, Los Angeles, Orange County, Riverside, San Bernardino, same day service, emergency service",
  openGraph: {
    title: `Air Duct & Chimney Services You Can Trust | ${BRAND_NAME}`,
    description: "Professional air duct and chimney services across Southern California. Same-day appointments and 24/7 emergency service. Call 424-424-1579.",
    type: "website",
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
