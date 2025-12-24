import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GoBackButton from "@/components/GoBackButton";
import FinancingSection from "@/components/FinancingSection";
import SecondOpinionCTA from "@/components/SecondOpinionCTA";
import ServiceAreaLinks from "@/components/ServiceAreaLinks";
import { BreadcrumbSchema, ServiceSchema } from "@/components/JsonLd";

const PHONE = "424-424-1579";

export const metadata: Metadata = {
  title: "Chimney Cleaning Services | West Coast Air Duct and Chimney Services",
  description: "Professional chimney cleaning in Southern California. Remove creosote, debris, and blockages for safe fireplace operation. Call 424-424-1579.",
  alternates: {
    canonical: "/services/chimney-cleaning",
  },
};

export default function ChimneyCleaningPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Services", url: "/#services" },
        { name: "Chimney Cleaning", url: "/services/chimney-cleaning" }
      ]} />
      <ServiceSchema
        serviceName="Chimney Cleaning"
        serviceType="Chimney Sweep Service"
        description="Professional chimney cleaning in Southern California. Remove dangerous creosote buildup, soot, and debris for safe, efficient fireplace operation and fire prevention."
        url="/services/chimney-cleaning"
        image="/images/chimney-flue-cleaning.png"
      />
      <PageHero
        title="Chimney Cleaning Services"
        subtitle="Remove dangerous creosote buildup and debris for safe, efficient fireplace operation."
      />

      <section className="section-padding">
        <div className="container-custom">
          <GoBackButton />

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl mb-12">
            <div className="flex items-start gap-4">
              <svg className="w-8 h-8 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              </svg>
              <div>
                <h3 className="text-lg font-bold text-orange-800 mb-2">Chimney Fire Prevention</h3>
                <p className="text-orange-700">
                  The Chimney Safety Institute of America recommends annual chimney inspections and cleaning as needed. Creosote buildup is the leading cause of chimney fires.
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Chimney Cleaning Matters</h2>
              <p className="text-gray-600 mb-4">
                Every time you burn wood in your fireplace, creosote forms inside your chimney. This tar-like substance is highly flammable and builds up over time. When creosote accumulates to dangerous levels, it can ignite and cause a chimney fire.
              </p>
              <p className="text-gray-600 mb-4">
                Our professional chimney cleaning removes creosote, soot, debris, and any blockages (like bird nests) from your chimney. This keeps your chimney functioning safely and efficiently.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Our Cleaning Process:</h3>
              <ul className="space-y-3">
                {[
                  "Initial inspection to assess condition",
                  "Protection of your home's interior",
                  "Thorough brushing of entire flue",
                  "Removal of creosote, soot, and debris",
                  "Smoke shelf and damper cleaning",
                  "Final inspection with photos",
                  "Clean-up of work area"
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
            <div className="space-y-6">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/images/chimney-flue-cleaning.png"
                  alt="Before and after chimney flue cleaning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/images/cozy-fireplace.png"
                  alt="Clean fireplace ready for safe use"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How Often Should You Clean Your Chimney?</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-4 px-6 font-bold text-gray-900">Usage Level</th>
                    <th className="text-left py-4 px-6 font-bold text-gray-900">Recommended Cleaning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="py-4 px-6 text-gray-700">Heavy use (3+ times per week)</td>
                    <td className="py-4 px-6 text-gray-600">Twice per year</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-4 px-6 text-gray-700">Moderate use (1-2 times per week)</td>
                    <td className="py-4 px-6 text-gray-600">Once per year</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-4 px-6 text-gray-700">Light use (occasional)</td>
                    <td className="py-4 px-6 text-gray-600">Annual inspection, clean as needed</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 text-center mt-4 text-sm">
              Note: If you notice any signs of problems (smoke in the home, strong odors, visible buildup), schedule a cleaning immediately regardless of last cleaning date.
            </p>
          </div>
        </div>
      </section>

      <FinancingSection />

      <ServiceAreaLinks serviceName="Chimney Cleaning" />

      <SecondOpinionCTA />

      <section className="py-16 md:py-20 bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Keep Your Family Safe This Season</h2>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
            Schedule your chimney cleaning before the cold season. Enjoy your fireplace with peace of mind.
          </p>
          <a href={`tel:${PHONE}`} className="btn-secondary inline-block text-lg py-4 px-8">
            Call {PHONE} Now
          </a>
        </div>
      </section>
    </>
  );
}
