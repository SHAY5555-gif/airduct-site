import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GoBackButton from "@/components/GoBackButton";
import FinancingSection from "@/components/FinancingSection";
import SecondOpinionCTA from "@/components/SecondOpinionCTA";

const PHONE = "424-424-1579";

export const metadata: Metadata = {
  title: "Chimney Installation Services | West Coast Air Duct and Chimney Services",
  description: "Professional chimney installation in Southern California. New chimney construction, liner installation, and code-compliant work. Call 424-424-1579.",
};

export default function ChimneyInstallationPage() {
  return (
    <>
      <PageHero
        title="Chimney Installation Services"
        subtitle="Professional installation of new chimneys, liners, and related components."
      />

      <section className="section-padding">
        <div className="container-custom">
          <GoBackButton />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Chimney Installation</h2>
              <p className="text-gray-600 mb-4">
                Whether you're adding a new fireplace to your home, replacing an old chimney, or need a new liner for an existing chimney, our team provides professional installation that meets all local codes and safety standards.
              </p>
              <p className="text-gray-600 mb-4">
                We work with all types of chimneys including masonry, prefabricated, and metal chimneys. Our installations are built to last and designed for safe, efficient operation.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Installation Services:</h3>
              <ul className="space-y-3">
                {[
                  "New chimney construction",
                  "Chimney liner installation (stainless steel, aluminum, clay)",
                  "Chimney cap installation",
                  "Prefabricated chimney systems",
                  "Chimney chase construction",
                  "Code-compliant installations"
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
                src="/images/cozy-fireplace.png"
                alt="Professionally installed fireplace and chimney"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Professional Installation?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safety Compliance</h3>
              <p className="text-gray-600">All installations meet or exceed local building codes and safety standards.</p>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Optimal Performance</h3>
              <p className="text-gray-600">Properly installed chimneys draw correctly and operate efficiently.</p>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Long-Lasting</h3>
              <p className="text-gray-600">Quality materials and professional workmanship for years of reliable service.</p>
            </div>
          </div>
        </div>
      </section>

      <FinancingSection />

      <SecondOpinionCTA />

      <section className="py-16 md:py-20 bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Planning a New Chimney?</h2>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
            Get a free consultation and estimate for your chimney installation project. We'll help you choose the right solution for your home.
          </p>
          <a href={`tel:${PHONE}`} className="btn-secondary inline-block text-lg py-4 px-8">
            Call {PHONE} Now
          </a>
        </div>
      </section>
    </>
  );
}
