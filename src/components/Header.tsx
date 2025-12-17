"use client";

import Link from "next/link";
import { useState } from "react";

const PHONE = "424-424-1579";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">SA</span>
            </div>
            <span className="font-bold text-xl text-gray-900 hidden sm:block">
              SoCal Air Duct Pros
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/services/air-duct-cleaning" className="text-gray-700 hover:text-blue-800 font-medium">
              Air Duct Services
            </Link>
            <Link href="/services/chimney-cleaning" className="text-gray-700 hover:text-blue-800 font-medium">
              Chimney Services
            </Link>
            <Link href="/areas/los-angeles" className="text-gray-700 hover:text-blue-800 font-medium">
              Service Areas
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-blue-800 font-medium">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${PHONE}`}
              className="hidden md:flex items-center gap-2 text-blue-800 font-bold text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {PHONE}
            </a>

            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 border-t pt-4">
            <div className="flex flex-col gap-3">
              <Link
                href="/services/air-duct-cleaning"
                className="text-gray-700 hover:text-blue-800 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Air Duct Services
              </Link>
              <Link
                href="/services/chimney-cleaning"
                className="text-gray-700 hover:text-blue-800 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Chimney Services
              </Link>
              <Link
                href="/areas/los-angeles"
                className="text-gray-700 hover:text-blue-800 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Service Areas
              </Link>
              <Link
                href="/#contact"
                className="text-gray-700 hover:text-blue-800 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
