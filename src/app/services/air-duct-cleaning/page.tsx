import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GoBackButton from "@/components/GoBackButton";
import FinancingSection from "@/components/FinancingSection";
import SecondOpinionCTA from "@/components/SecondOpinionCTA";
import { BreadcrumbSchema, ServiceSchema } from "@/components/JsonLd";

const PHONE = "424-424-1579";

export const metadata: Metadata = {
  title: "Air Duct Cleaning Services | West Coast Air Duct and Chimney Services",
  description: "Professional air duct cleaning services in Southern California. Remove dust, allergens, and debris from your HVAC system. Same-day appointments available. Call 424-424-1579.",
  alternates: {
    canonical: "/services/air-duct-cleaning",
  },
};

export default function AirDuctCleaningPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Services", url: "/#services" },
        { name: "Air Duct Cleaning", url: "/services/air-duct-cleaning" }
      ]} />
      <ServiceSchema
        serviceName="Air Duct Cleaning"
        serviceType="HVAC Duct Cleaning Service"
        description="Professional air duct cleaning service in Southern California. Remove dust, allergens, mold, and debris from your HVAC ductwork for cleaner, healthier indoor air quality."
        url="/services/air-duct-cleaning"
        image="/images/duct-before-after.png"
      />
      <PageHero
        title="Air Duct Cleaning in Los Angeles, Orange, Riverside & San Bernardino Counties"
        subtitle="Remove dust, allergens, mold, and debris from your HVAC system for cleaner, healthier indoor air."
      />

      <section className="section-padding">
        <div className="container-custom">
          <GoBackButton />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Air Duct Cleaning?</h2>
              <p className="text-gray-600 mb-4">
                Air duct cleaning involves the thorough removal of dust, debris, allergens, and contaminants from your home's HVAC ductwork. Over time, your air ducts collect dust, pet dander, pollen, mold spores, and other particles that circulate throughout your home every time your heating or cooling system runs.
              </p>
              <p className="text-gray-600 mb-4">
                Our professional air duct cleaning service uses powerful vacuum equipment and specialized tools to clean your entire duct system, including supply and return air ducts, registers, grilles, diffusers, heat exchangers, and more.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">What's Included:</h3>
              <ul className="space-y-3">
                {[
                  "Complete inspection of your duct system",
                  "Cleaning of all supply and return ducts",
                  "Register and grille cleaning",
                  "Removal of dust, debris, and contaminants",
                  "Before and after photos",
                  "Final system inspection"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 lg:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/images/duct-before-after.png"
                alt="Before and after air duct cleaning showing dramatic improvement"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">When Should You Clean Your Air Ducts?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "After Home Renovation", desc: "Construction dust and debris can clog your ducts" },
              { title: "Moving Into a New Home", desc: "Start fresh with clean air in your new space" },
              { title: "Every 3-5 Years", desc: "Regular maintenance for optimal air quality" },
              { title: "Visible Mold Growth", desc: "If you see or smell mold, call immediately" },
              { title: "Pest Infestation", desc: "After rodents or insects have been in your ducts" },
              { title: "Allergy Symptoms Worsen", desc: "Dirty ducts can trigger allergies and asthma" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Benefits of Clean Air Ducts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Healthier Air</h3>
              <p className="text-gray-600">Reduce allergens, dust, and contaminants circulating in your home.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lower Energy Bills</h3>
              <p className="text-gray-600">Clean ducts allow your HVAC system to run more efficiently.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Extended System Life</h3>
              <p className="text-gray-600">Regular cleaning helps your HVAC system last longer.</p>
            </div>
          </div>
        </div>
      </section>

      <FinancingSection />

      <SecondOpinionCTA />

      <section className="py-16 md:py-20 bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Cleaner Air?</h2>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
            Call today for a free estimate on professional air duct cleaning in Los Angeles, Orange, Riverside, or San Bernardino County.
          </p>
          <a href={`tel:${PHONE}`} className="btn-secondary inline-block text-lg py-4 px-8">
            Call {PHONE} Now
          </a>
        </div>
      </section>
    </>
  );
}
