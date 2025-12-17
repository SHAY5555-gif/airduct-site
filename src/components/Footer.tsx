import Link from "next/link";

const PHONE = "424-424-1579";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">SoCal Air Duct Pros</h3>
            <p className="text-gray-400 mb-4">
              Professional air duct and chimney services for homes and businesses across Southern California.
            </p>
            <a href={`tel:${PHONE}`} className="text-blue-400 font-bold text-lg hover:text-blue-300">
              {PHONE}
            </a>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/air-duct-cleaning" className="text-gray-400 hover:text-white">
                  Air Duct Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/duct-repair" className="text-gray-400 hover:text-white">
                  Duct Repair
                </Link>
              </li>
              <li>
                <Link href="/services/dryer-vent-cleaning" className="text-gray-400 hover:text-white">
                  Dryer Vent Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/system-inspections" className="text-gray-400 hover:text-white">
                  System Inspections
                </Link>
              </li>
              <li>
                <Link href="/services/chimney-installation" className="text-gray-400 hover:text-white">
                  Chimney Installation
                </Link>
              </li>
              <li>
                <Link href="/services/chimney-repairs" className="text-gray-400 hover:text-white">
                  Chimney Repairs
                </Link>
              </li>
              <li>
                <Link href="/services/chimney-cleaning" className="text-gray-400 hover:text-white">
                  Chimney Cleaning
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Service Areas</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/areas/los-angeles" className="text-gray-400 hover:text-white">
                  Los Angeles County
                </Link>
              </li>
              <li>
                <Link href="/areas/orange-county" className="text-gray-400 hover:text-white">
                  Orange County
                </Link>
              </li>
              <li>
                <Link href="/areas/riverside" className="text-gray-400 hover:text-white">
                  Riverside County
                </Link>
              </li>
              <li>
                <Link href="/areas/san-bernardino" className="text-gray-400 hover:text-white">
                  San Bernardino County
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${PHONE}`} className="hover:text-white">{PHONE}</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@socalairductpros.com</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Serving all of Southern California</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SoCal Air Duct Pros. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
