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

      {/* Trust Badges */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="text-gray-600 text-xs mt-1">Florida chimney specialists</div>
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
      <section className="py-8 bg-orange-50 border-b border-orange-100">
        <div className="container-custom">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center leading-relaxed">
            <strong>Professional chimney cleaning in Florida typically costs $150-$350</strong> for most homes and takes 1-2 hours. <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold text-base">Get $50 OFF your first service</span> Regular chimney sweeping prevents dangerous chimney fires, removes creosote buildup, and ensures proper ventilation. Our certified chimney technicians provide comprehensive cleaning, inspection, and repair services. We serve major cities across Florida with 24/7 emergency service. <a href={`tel:${PHONE}`} className="text-orange-700 font-semibold hover:underline">Call {PHONE}</a> to claim your discount.
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

      <Reviews />

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
