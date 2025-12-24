import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities, getCityBySlug, getNearbyCities } from "@/data/cities";
import PageHero from "@/components/PageHero";
import GoBackButton from "@/components/GoBackButton";
import FinancingSection from "@/components/FinancingSection";
import SecondOpinionCTA from "@/components/SecondOpinionCTA";
import { BreadcrumbSchema } from "@/components/JsonLd";

const BRAND_NAME = "West Coast Air Duct and Chimney Services";

const services = [
  { name: "Air Duct Cleaning", slug: "air-duct-cleaning", description: "Remove dust, allergens, and debris from your ductwork" },
  { name: "Duct Repair", slug: "duct-repair", description: "Fix leaks, gaps, and damaged ductwork" },
  { name: "Dryer Vent Cleaning", slug: "dryer-vent-cleaning", description: "Prevent fires and improve dryer efficiency" },
  { name: "System Inspections", slug: "system-inspections", description: "Comprehensive HVAC and chimney inspections" },
  { name: "Chimney Installation", slug: "chimney-installation", description: "Professional chimney and fireplace installation" },
  { name: "Chimney Repairs", slug: "chimney-repairs", description: "Fix cracks, leaks, and structural issues" },
  { name: "Chimney Cleaning", slug: "chimney-cleaning", description: "Remove creosote and debris for safe operation" }
];

export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    return {
      title: "Service Area Not Found",
    };
  }

  return {
    title: `Air Duct & Chimney Services in ${city.city} | ${BRAND_NAME}`,
    description: `Professional air duct cleaning, chimney services, and dryer vent cleaning in ${city.city}, ${city.county}. Same-day appointments available. Call ${city.phone}.`,
    alternates: {
      canonical: `/service-areas/${slug}`,
    },
  };
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  // Get nearby cities within 30-mile radius
  const nearbyCitiesWithPages = getNearbyCities(slug, 30);

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Service Areas", url: "/service-areas" },
        { name: city.city, url: `/service-areas/${city.slug}` }
      ]} />
      <PageHero
        title={`Air Duct & Chimney Services in ${city.city}`}
        subtitle={city.shortDescription}
        serviceHighlights={city.serviceHighlights}
        phone={city.phone}
        cityName={city.city}
      />

      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <GoBackButton />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Service in {city.city}, {city.county}
              </h2>
              <p className="text-gray-600 mb-6">
                {city.fullDescription}
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-6">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-green-800">Same-Day Appointments Available</p>
                    <p className="text-green-700 text-sm">Call now for same-day service in {city.city}</p>
                  </div>
                </div>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-orange-800">24/7 Emergency Service</p>
                    <p className="text-orange-700 text-sm">We're here when you need us most</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Also Serving Nearby Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {city.nearbyAreas.map((area, idx) => (
                    <span key={idx} className="bg-white px-3 py-2 rounded-lg shadow-sm text-gray-700">
                      {area}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  Don't see your area? Call us at{" "}
                  <a href={`tel:${city.phone}`} className="text-blue-800 font-semibold hover:underline">
                    {city.phone}
                  </a>{" "}
                  to confirm service availability.
                </p>
              </div>

              {/* Nearby Service Areas with Pages (30-mile radius) */}
              {nearbyCitiesWithPages.length > 0 && (
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Nearby Service Areas</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    We also serve these cities within 30 miles of {city.city}:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {nearbyCitiesWithPages.slice(0, 8).map((nearbyCity) => (
                      <Link
                        key={nearbyCity.slug}
                        href={`/service-areas/${nearbyCity.slug}`}
                        className="bg-white px-3 py-2 rounded-lg shadow-sm text-blue-800 hover:bg-blue-100 transition-colors"
                      >
                        {nearbyCity.city}
                      </Link>
                    ))}
                  </div>
                  {nearbyCitiesWithPages.length > 8 && (
                    <Link
                      href="/service-areas"
                      className="text-blue-800 text-sm font-medium mt-3 inline-flex items-center gap-1 hover:underline"
                    >
                      View all service areas
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Services in {city.city}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                <span className="text-blue-800 text-sm font-medium flex items-center gap-1">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why {city.city} Residents Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Local Experts</h3>
              <p className="text-gray-600">We know {city.city} homes and the specific challenges they face.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Response</h3>
              <p className="text-gray-600">Same-day appointments and 24/7 emergency service available.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted Service</h3>
              <p className="text-gray-600">Fully licensed, insured, and committed to quality work.</p>
            </div>
          </div>
        </div>
      </section>

      <FinancingSection />

      <SecondOpinionCTA />

      {/* CTA Section */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Service in {city.city}?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Call today for a free estimate. We provide fast, professional service throughout {city.city} and {city.county}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${city.phone}`} className="btn-secondary text-lg py-4 px-8">
              Call {city.phone} Now
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
