import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FinancingSection from "@/components/FinancingSection";
import SecondOpinionCTA from "@/components/SecondOpinionCTA";
import Reviews from "@/components/Reviews";
import { BreadcrumbSchema, ServiceSchema } from "@/components/JsonLd";
import { serviceCategories } from "@/data/serviceCategories";
import { floridaCities } from "@/data/serviceCategories";
import { cities } from "@/data/cities";

const PHONE = "424-424-1579";

const airDuctCategory = serviceCategories.find(cat => cat.slug === "air-duct")!;

export const metadata: Metadata = {
  title: "Air Duct Cleaning & HVAC Services in Florida | Professional Duct Cleaning",
  description: "Professional air duct cleaning and HVAC services throughout Florida. Remove dust, allergens, and debris. Improve indoor air quality. Same-day appointments. Call 424-424-1579.",
  alternates: {
    canonical: "/air-duct",
  },
};

export default function AirDuctServicesPage() {
  const floridaCityData = cities.filter(city => floridaCities.includes(city.slug));

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Air Duct Services", url: "/air-duct" }
      ]} />
      <ServiceSchema
        serviceName="Air Duct Cleaning Services"
        serviceType="HVAC Duct Cleaning Service"
        description="Professional air duct cleaning and HVAC services in Florida. Remove dust, allergens, mold, and debris from your HVAC ductwork for cleaner, healthier indoor air quality."
        url="/air-duct"
        image="/images/duct-before-after.png"
      />
      <PageHero
        title="Professional Air Duct Cleaning & HVAC Services in Florida"
        subtitle="Expert air duct cleaning, HVAC maintenance, and dryer vent services for healthier indoor air across Florida."
      />

      {/* Trust Badges */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="font-bold text-gray-900 text-sm">Licensed & Insured</div>
              <div className="text-gray-600 text-xs mt-1">Fully certified professionals</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="font-bold text-gray-900 text-sm">5-Star Reviews</div>
              <div className="text-gray-600 text-xs mt-1">Trusted by homeowners</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="font-bold text-gray-900 text-sm">Years of Experience</div>
              <div className="text-gray-600 text-xs mt-1">Florida HVAC specialists</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="font-bold text-gray-900 text-sm">100% Guaranteed</div>
              <div className="text-gray-600 text-xs mt-1">Satisfaction promise</div>
            </div>
          </div>
        </div>
      </section>

      {/* Answer Block for AI Overview optimization */}
      <section className="py-8 bg-blue-50 border-b border-blue-100">
        <div className="container-custom">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center leading-relaxed">
            <strong>Professional air duct cleaning in Florida typically costs $300-$700</strong> for most homes and takes 2-4 hours. <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold text-base">Get $50 OFF your first service</span> Florida's hot, humid climate promotes mold and allergen buildup in air ducts. Our certified technicians remove dust, allergens, mold, and debris from your entire HVAC system. We serve major cities across Florida with same-day appointments. <a href={`tel:${PHONE}`} className="text-blue-800 font-semibold hover:underline">Call {PHONE}</a> to claim your discount.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our Air Duct Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Comprehensive air duct and HVAC services to improve your indoor air quality, reduce energy costs, and extend the life of your heating and cooling system.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {airDuctCategory.services.map((service, idx) => (
              <Link
                key={idx}
                href={`/services/${service.slug}`}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Air Duct Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 lg:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/images/air-duct-cleaning-inside.png"
                alt="Professional air duct cleaning service in Florida"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Air Duct Cleaning is Essential in Florida</h2>
              <p className="text-gray-600 mb-4">
                Florida's hot, humid climate creates the perfect conditions for mold, allergens, and debris to accumulate in your air ducts. With air conditioning running year-round, these contaminants continuously circulate throughout your home, affecting your health and HVAC efficiency.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Benefits of Professional Air Duct Cleaning:</h3>
              <ul className="space-y-3">
                {airDuctCategory.benefits.map((benefit, idx) => (
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

      <Reviews />

      {/* Cities We Serve */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Florida Cities We Serve</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Professional air duct cleaning and HVAC services available throughout Florida. Select your city to learn more about our local services.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {floridaCityData.map((city) => (
              <Link
                key={city.slug}
                href={`/air-duct/${city.slug}`}
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors">
                    {city.city}
                  </h3>
                  <svg className="w-5 h-5 text-blue-800 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-16 md:py-20 bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Cleaner, Healthier Air?</h2>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
            Call today for a free estimate on professional air duct cleaning and HVAC services in Florida.
          </p>
          <a href={`tel:${PHONE}`} className="btn-secondary inline-block text-lg py-4 px-8">
            Call {PHONE} Now
          </a>
        </div>
      </section>
    </>
  );
}
