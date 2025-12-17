import Link from "next/link";

const PHONE = "424-424-1579";
const BRAND_NAME = "West Coast Air Duct and Chimney Services";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 md:pt-20">
      <div className="container-custom pb-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div>
            <h3 className="font-bold text-xl mb-4">{BRAND_NAME}</h3>
            <p className="text-gray-300 mb-4">
              Professional air duct and chimney services for homes and businesses across Southern California. Same-day appointments and 24/7 emergency service available.
            </p>
            <a href={`tel:${PHONE}`} className="text-blue-400 font-bold text-lg hover:text-blue-300">
              {PHONE}
            </a>
          </div>

          {/* Services column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/air-duct-cleaning" className="text-gray-300 hover:text-white">
                  Air Duct Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/duct-repair" className="text-gray-300 hover:text-white">
                  Duct Repair
                </Link>
              </li>
              <li>
                <Link href="/services/dryer-vent-cleaning" className="text-gray-300 hover:text-white">
                  Dryer Vent Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/system-inspections" className="text-gray-300 hover:text-white">
                  System Inspections
                </Link>
              </li>
              <li>
                <Link href="/services/chimney-installation" className="text-gray-300 hover:text-white">
                  Chimney Installation
                </Link>
              </li>
              <li>
                <Link href="/services/chimney-repairs" className="text-gray-300 hover:text-white">
                  Chimney Repairs
                </Link>
              </li>
              <li>
                <Link href="/services/chimney-cleaning" className="text-gray-300 hover:text-white">
                  Chimney Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/membership" className="text-gray-300 hover:text-white">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/inspections" className="text-gray-300 hover:text-white">
                  Inspections
                </Link>
              </li>
              <li>
                <Link href="/service-areas" className="text-gray-300 hover:text-white">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-white">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${PHONE}`} className="hover:text-white">{PHONE}</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>24/7 Emergency Service</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Serving Los Angeles, Orange, Riverside & San Bernardino Counties</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 pb-4 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
