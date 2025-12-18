"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const PHONE = "424-424-1579";
const BRAND_NAME = "West Coast Air Duct and Chimney Services";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/membership", label: "Membership" },
    { href: "/inspections", label: "Inspections" },
    { href: "/service-areas", label: "Service Areas" },
    { href: "/resources", label: "Resources" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/west-coast-logo-new.jpg"
              alt="West Coast Air Duct and Chimney Services"
              width={280}
              height={70}
              className="w-[160px] sm:w-[200px] md:w-[240px] rounded-lg"
              priority
            />
          </Link>

          <nav className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-800 font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
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
              className="xl:hidden p-2"
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

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="xl:hidden pb-4 border-t pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-800 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 text-blue-800 font-bold py-2 md:hidden"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {PHONE}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
