import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities, getCityBySlug, getNearbyCities } from "@/data/cities";
import { serviceCategories, floridaCities } from "@/data/serviceCategories";
import PageHero from "@/components/PageHero";
import FinancingSection from "@/components/FinancingSection";
import SecondOpinionCTA from "@/components/SecondOpinionCTA";
import { BreadcrumbSchema, ServiceSchema } from "@/components/JsonLd";

const BRAND_NAME = "West Coast Air Duct and Chimney Services";

const chimneyCategory = serviceCategories.find(cat => cat.slug === "chimney")!;

export async function generateStaticParams() {
  return floridaCities.map((citySlug) => ({
    city: citySlug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city || !floridaCities.includes(citySlug)) {
    return {
      title: "Service Area Not Found",
    };
  }

  return {
    title: `Chimney Cleaning & Repair Services in ${city.city}, FL | ${BRAND_NAME}`,
    description: `Professional chimney sweeping, repair, and installation services in ${city.city}, ${city.county}. Keep your fireplace safe and efficient. 24/7 emergency service. Call ${city.phone}.`,
    alternates: {
      canonical: `/chimney/${citySlug}`,
    },
  };
}

export default async function ChimneyCityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city || !floridaCities.includes(citySlug)) {
    notFound();
  }

  // Get nearby Florida cities within 30-mile radius
  const nearbyCitiesAll = getNearbyCities(citySlug, 30);
  const nearbyCitiesWithPages = nearbyCitiesAll.filter(c => floridaCities.includes(c.slug));

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Chimney Services", url: "/chimney" },
        { name: city.city, url: `/chimney/${city.slug}` }
      ]} />
      <ServiceSchema
        serviceName={`Chimney Services in ${city.city}`}
        serviceType="Chimney Cleaning and Repair Service"
        description={`Professional chimney sweeping, repair, and installation services in ${city.city}, ${city.county}. Remove creosote, fix structural issues, and ensure safe fireplace operation.`}
        url={`/chimney/${city.slug}`}
        image="/images/chimney-cleaning-brush.png"
      />
      <PageHero
        title={`Chimney Cleaning & Repair Services in ${city.city}`}
        subtitle={city.shortDescription}
        serviceHighlights={city.serviceHighlights}
        phone={city.phone}
        cityName={city.city}
      />

      {/* Answer Block for AI Overview optimization */}
      <section className="py-8 bg-orange-50 border-b border-orange-100">
        <div className="container-custom">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center leading-relaxed">
            <strong>Professional chimney cleaning in {city.city} typically costs $150-$350</strong> for most homes and takes 1-2 hours. Regular chimney sweeping prevents dangerous chimney fires, removes creosote buildup, and ensures proper ventilation. Our certified chimney technicians provide comprehensive cleaning, inspection, and repair services. 24/7 emergency service available in {city.city}. <a href={`tel:${city.phone}`} className="text-orange-800 font-semibold hover:underline">Call {city.phone}</a> for a free estimate.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Chimney Services in {city.city}, {city.county}
              </h2>
              <p className="text-gray-600 mb-6">
                {city.fullDescription}
              </p>
              <p className="text-gray-600 mb-6">
                Our expert chimney technicians specialize in chimney sweeping, repair, and installation services for {city.city} homes. Even in Florida's warm climate, regular chimney maintenance is essential for safety. We remove creosote buildup, repair structural damage, and ensure your fireplace operates safely and efficiently year-round.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg mb-6">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-orange-800">24/7 Emergency Service</p>
                    <p className="text-orange-700 text-sm">Call now for emergency chimney service in {city.city}</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-blue-800">Financing Available</p>
                    <p className="text-blue-700 text-sm">Flexible payment options for your convenience</p>
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
                  <a href={`tel:${city.phone}`} className="text-orange-800 font-semibold hover:underline">
                    {city.phone}
                  </a>{" "}
                  to confirm service availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Our Chimney Services in {city.city}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Comprehensive chimney services to keep your fireplace safe, efficient, and in top condition. From cleaning to repair to new installations.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chimneyCategory.services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 group"
              >
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                <span className="text-orange-800 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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

      {/* Why Choose Our Chimney Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 lg:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/images/chimney-cleaning-brush.png"
                alt={`Chimney cleaning service in ${city.city}, Florida`}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Regular Chimney Maintenance is Essential in {city.city}</h2>
              <p className="text-gray-600 mb-4">
                Even in Florida's warm climate, regular chimney maintenance is crucial for safety and efficiency. Whether you use your fireplace occasionally during winter or have a decorative chimney in {city.city}, professional cleaning and inspection prevent dangerous situations like chimney fires and carbon monoxide poisoning.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Benefits of Professional Chimney Services:</h3>
              <ul className="space-y-3">
                {chimneyCategory.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why {city.city} Residents Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Florida Chimney Experts</h3>
              <p className="text-gray-600">We understand {city.city}'s unique climate and chimney maintenance needs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Emergency Service</h3>
              <p className="text-gray-600">Emergency chimney service available anytime you need us.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Certified & Insured</h3>
              <p className="text-gray-600">Fully licensed chimney specialists committed to safety and quality.</p>
            </div>
          </div>
        </div>
      </section>

      <FinancingSection />

      <SecondOpinionCTA />

      {/* Nearby Service Areas with Pages (30-mile radius) */}
      {nearbyCitiesWithPages.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Nearby Service Areas</h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              We also provide chimney services in these cities near {city.city}:
            </p>
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
              {nearbyCitiesWithPages.map((nearbyCity) => (
                <Link
                  key={nearbyCity.slug}
                  href={`/chimney/${nearbyCity.slug}`}
                  className="bg-white px-4 py-3 rounded-lg shadow-sm text-orange-700 hover:bg-orange-50 hover:shadow-md transition-all font-medium"
                >
                  {nearbyCity.city}
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                href="/chimney"
                className="text-orange-700 font-semibold inline-flex items-center gap-2 hover:underline"
              >
                View all Florida cities
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-orange-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Safe Fireplace Operation in {city.city}?</h2>
          <p className="text-xl text-orange-200 mb-8 max-w-2xl mx-auto">
            Call today for a free estimate on chimney cleaning, repair, or installation services. We provide fast, professional service throughout {city.city} and {city.county}.
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
