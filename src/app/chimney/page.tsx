import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FinancingSection from "@/components/FinancingSection";
import SecondOpinionCTA from "@/components/SecondOpinionCTA";
import { BreadcrumbSchema, ServiceSchema } from "@/components/JsonLd";
import { serviceCategories } from "@/data/serviceCategories";
import { floridaCities } from "@/data/serviceCategories";
import { cities } from "@/data/cities";

const PHONE = "424-424-1579";

const chimneyCategory = serviceCategories.find(cat => cat.slug === "chimney")!;

export const metadata: Metadata = {
  title: "Chimney Cleaning, Repair & Installation Services in Florida | Expert Chimney Services",
  description: "Professional chimney sweeping, repair, and installation services throughout Florida. Keep your fireplace safe and efficient. 24/7 emergency service. Call 424-424-1579.",
  alternates: {
    canonical: "/chimney",
  },
};

export default function ChimneyServicesPage() {
  const floridaCityData = cities.filter(city => floridaCities.includes(city.slug));

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Chimney Services", url: "/chimney" }
      ]} />
      <ServiceSchema
        serviceName="Chimney Services"
        serviceType="Chimney Cleaning and Repair Service"
        description="Professional chimney sweeping, repair, and installation services in Florida. Remove creosote, fix structural issues, and ensure safe fireplace operation."
        url="/chimney"
        image="/images/chimney-cleaning-brush.png"
      />
      <PageHero
        title="Professional Chimney Cleaning, Repair & Installation in Florida"
        subtitle="Expert chimney sweeping, repair, and installation services to keep your fireplace safe and efficient across Florida."
      />

      {/* Answer Block for AI Overview optimization */}
      <section className="py-8 bg-blue-50 border-b border-blue-100">
        <div className="container-custom">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center leading-relaxed">
            <strong>Professional chimney cleaning in Florida typically costs $150-$350</strong> for most homes and takes 1-2 hours. Regular chimney sweeping prevents dangerous chimney fires, removes creosote buildup, and ensures proper ventilation. Our certified chimney technicians provide comprehensive cleaning, inspection, and repair services. We serve major cities across Florida with 24/7 emergency service. <a href={`tel:${PHONE}`} className="text-blue-800 font-semibold hover:underline">Call {PHONE}</a> for a free estimate.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our Chimney Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Comprehensive chimney services to keep your fireplace safe, efficient, and in top condition. From cleaning to repair to new installations.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chimneyCategory.services.map((service, idx) => (
              <Link
                key={idx}
                href={`/services/${service.slug}`}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Chimney Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 lg:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/images/chimney-cleaning-brush.png"
                alt="Professional chimney cleaning service in Florida"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Regular Chimney Maintenance is Essential</h2>
              <p className="text-gray-600 mb-4">
                Even in Florida's warm climate, regular chimney maintenance is crucial for safety and efficiency. Whether you use your fireplace occasionally during winter or have a decorative chimney, professional cleaning and inspection prevent dangerous situations like chimney fires and carbon monoxide poisoning.
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

      {/* Cities We Serve */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Florida Cities We Serve</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Professional chimney cleaning, repair, and installation services available throughout Florida. Select your city to learn more about our local services.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {floridaCityData.map((city) => (
              <Link
                key={city.slug}
                href={`/chimney/${city.slug}`}
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors">
                    {city.city}
                  </h3>
                  <svg className="w-5 h-5 text-orange-700 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-gray-600 text-sm mb-2">{city.county}</p>
                <p className="text-gray-500 text-sm">{city.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinancingSection />

      <SecondOpinionCTA />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-orange-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Safe, Efficient Fireplace Operation?</h2>
          <p className="text-xl text-orange-200 mb-10 max-w-2xl mx-auto">
            Call today for a free estimate on professional chimney cleaning, repair, or installation services in Florida.
          </p>
          <a href={`tel:${PHONE}`} className="btn-secondary inline-block text-lg py-4 px-8">
            Call {PHONE} Now
          </a>
        </div>
      </section>
    </>
  );
}
