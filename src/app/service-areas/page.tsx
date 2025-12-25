import Link from "next/link";
import type { Metadata } from "next";
import { cities, counties, getCitiesByCounty } from "@/data/cities";
import { BreadcrumbSchema } from "@/components/JsonLd";

const PHONE = "424-424-1579";
const BRAND_NAME = "West Coast Air Duct and Chimney Services";

export const metadata: Metadata = {
  title: `Service Areas | ${BRAND_NAME}`,
  description: "Professional air duct and chimney services across California and Florida. Same-day appointments and 24/7 emergency service available.",
  alternates: {
    canonical: "/service-areas",
  },
};

export default function ServiceAreasPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Service Areas", url: "/service-areas" }
      ]} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Service Areas
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Professional air duct and chimney services across California and Florida. Same-day appointments and 24/7 emergency service available.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-green-500/20 text-green-200 px-4 py-2 rounded-full text-sm font-medium">
                Same-Day Appointments
              </span>
              <span className="bg-orange-500/20 text-orange-200 px-4 py-2 rounded-full text-sm font-medium">
                24/7 Emergency Service
              </span>
            </div>
            <a href={`tel:${PHONE}`} className="btn-secondary inline-block text-lg py-4 px-8">
              Call {PHONE} for Service
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas by County */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find Your Area
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Click on your city to learn more about our services in your area, or call us at{" "}
              <a href={`tel:${PHONE}`} className="text-blue-800 font-semibold hover:underline">
                {PHONE}
              </a>{" "}
              to speak with a team member.
            </p>
          </div>

          <div className="space-y-12">
            {counties.map((county) => {
              const countyCities = getCitiesByCounty(county);
              return (
                <div key={county}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {county}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {countyCities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/${city.slug}`}
                        className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-blue-200"
                      >
                        <h4 className="font-bold text-gray-900 mb-2">{city.city}</h4>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {city.shortDescription}
                        </p>
                        <span className="text-blue-800 text-sm font-medium flex items-center gap-1">
                          View services
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Don't See Your Area */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Don't See Your City?
            </h2>
            <p className="text-gray-600 mb-6">
              We serve many more areas throughout California and Florida. If you don't see your city listed, give us a call. We're likely able to service your area!
            </p>
            <a href={`tel:${PHONE}`} className="btn-primary inline-block">
              Call {PHONE} to Check Availability
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Customers Trust Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600 text-sm">Fully licensed professionals with comprehensive insurance coverage.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Same-Day Service</h3>
              <p className="text-gray-600 text-sm">Need service today? Call now for same-day appointments.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">24/7 Emergency</h3>
              <p className="text-gray-600 text-sm">Emergency chimney and HVAC issues? We're available 24/7.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Fair Pricing</h3>
              <p className="text-gray-600 text-sm">Transparent, upfront pricing with no hidden fees or surprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Call today for a free estimate. We provide fast, professional service throughout California and Florida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHONE}`} className="btn-secondary text-lg py-4 px-8">
              Call {PHONE} Now
            </a>
            <Link href="/#contact" className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg transition-colors">
              Request Online Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
