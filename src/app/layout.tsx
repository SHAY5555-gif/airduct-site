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

export const metadata: Metadata = {
  title: "Air Duct & Chimney Cleaning | Los Angeles, Orange, Riverside & San Bernardino Counties | SoCal Air Duct Pros",
  description: "Professional air duct cleaning, duct repair, dryer vent cleaning, and chimney services across Los Angeles, Orange, Riverside, and San Bernardino Counties. Call 424-424-1579 for fast, reliable service.",
  keywords: "air duct cleaning, chimney cleaning, dryer vent cleaning, duct repair, chimney repair, Los Angeles, Orange County, Riverside, San Bernardino",
  openGraph: {
    title: "Air Duct & Chimney Services | Southern California",
    description: "Professional air duct and chimney services across LA, Orange, Riverside & San Bernardino Counties. Call 424-424-1579.",
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
