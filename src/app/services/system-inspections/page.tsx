import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GoBackButton from "@/components/GoBackButton";
import FinancingSection from "@/components/FinancingSection";
import SecondOpinionCTA from "@/components/SecondOpinionCTA";
import { BreadcrumbSchema } from "@/components/JsonLd";

const PHONE = "424-424-1579";

export const metadata: Metadata = {
  title: "HVAC & Duct System Inspections | West Coast Air Duct and Chimney Services",
  description: "Comprehensive HVAC and duct system inspections in Southern California. Identify issues before they become costly problems. Call 424-424-1579.",
};

export default function SystemInspectionsPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Services", url: "/#services" },
        { name: "System Inspections", url: "/services/system-inspections" }
      ]} />
      <PageHero
        title="HVAC & Duct System Inspections"
        subtitle="Comprehensive inspections to identify problems before they become expensive repairs."
      />

      <section className="section-padding">
        <div className="container-custom">
          <GoBackButton />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Inspect</h2>
              <p className="text-gray-600 mb-4">
                Our thorough system inspection covers your entire HVAC and ductwork system. We check for damage, inefficiencies, safety hazards, and areas that need attention.
              </p>
              <p className="text-gray-600 mb-4">
                After the inspection, you'll receive a detailed report with photos and recommendations. No pressure, just honest information to help you make informed decisions.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Inspection Includes:</h3>
              <ul className="space-y-3">
                {[
                  "Visual inspection of all accessible ductwork",
                  "Air flow testing at vents and registers",
                  "Check for leaks, damage, and disconnections",
                  "Assessment of insulation condition",
                  "Filter and component inspection",
                  "Digital photos of any issues found",
                  "Written report with recommendations"
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
                src="/images/hvac-inspection.png"
                alt="HVAC system inspection with diagnostic equipment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">When to Schedule an Inspection</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Before Buying a Home", desc: "Know what you're getting before you close" },
              { title: "Annual Maintenance", desc: "Yearly inspections catch problems early" },
              { title: "After Renovations", desc: "Ensure ducts weren't damaged during construction" },
              { title: "HVAC Performance Issues", desc: "When your system isn't working as expected" },
              { title: "High Energy Bills", desc: "Find out where you're losing efficiency" },
              { title: "Air Quality Concerns", desc: "Determine if ducts are contributing to issues" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinancingSection />

      <SecondOpinionCTA />

      <section className="py-16 md:py-20 bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Get Peace of Mind</h2>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
            Schedule a comprehensive system inspection today. Know exactly what's going on with your HVAC and ductwork.
          </p>
          <a href={`tel:${PHONE}`} className="btn-secondary inline-block text-lg py-4 px-8">
            Call {PHONE} Now
          </a>
        </div>
      </section>
    </>
  );
}
