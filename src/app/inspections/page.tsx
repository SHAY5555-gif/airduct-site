import Link from "next/link";
import type { Metadata } from "next";

const PHONE = "424-424-1579";
const BRAND_NAME = "West Coast Air Duct and Chimney Services";

export const metadata: Metadata = {
  title: `Professional Inspections | ${BRAND_NAME}`,
  description: "Comprehensive air duct and chimney inspections for home buyers, insurance claims, and annual maintenance. Starting at $179. Call 424-424-1579.",
};

const inspectionTypes = [
  {
    name: "Pre-Purchase Inspection",
    price: "$199",
    description: "Buying a home? Know exactly what you're getting with a thorough inspection of the air duct and chimney systems before you close.",
    features: [
      "Complete air duct system assessment",
      "Chimney and fireplace inspection",
      "Safety hazard identification",
      "Efficiency evaluation",
      "Detailed written report",
      "Photo documentation",
      "Repair cost estimates",
      "Negotiation leverage for buyers"
    ],
    ideal: "Home buyers and real estate agents",
    highlight: "Most Popular"
  },
  {
    name: "Insurance Claim Inspection",
    price: "$249",
    description: "Need documentation for an insurance claim? Our detailed inspection provides the evidence and reports insurance companies require.",
    features: [
      "Comprehensive damage assessment",
      "Detailed photo documentation",
      "Professional written report",
      "Code compliance evaluation",
      "Repair scope documentation",
      "Cost estimation for repairs",
      "Insurance-ready formatting",
      "Expert testimony available"
    ],
    ideal: "Homeowners filing insurance claims",
    highlight: null
  },
  {
    name: "Annual Checkup",
    price: "$179",
    description: "Regular inspections catch small problems before they become big expenses. Keep your systems safe and efficient year after year.",
    features: [
      "Visual duct inspection",
      "Chimney condition check",
      "Safety assessment",
      "Efficiency evaluation",
      "Maintenance recommendations",
      "Written summary report",
      "Priority scheduling",
      "Member discount eligible"
    ],
    ideal: "All homeowners (recommended annually)",
    highlight: "Best Value"
  }
];

const whatWeInspect = [
  {
    category: "Air Duct System",
    items: [
      "Supply and return ducts",
      "Duct connections and seals",
      "Insulation condition",
      "Signs of contamination or mold",
      "Airflow efficiency",
      "Filter housing and accessibility"
    ]
  },
  {
    category: "Chimney System",
    items: [
      "Chimney cap and crown",
      "Flue liner condition",
      "Masonry and mortar joints",
      "Damper operation",
      "Smoke chamber",
      "Creosote buildup levels"
    ]
  },
  {
    category: "Dryer Vent",
    items: [
      "Vent line condition",
      "Lint buildup assessment",
      "Exterior vent cap",
      "Connection integrity",
      "Airflow measurement",
      "Fire hazard evaluation"
    ]
  }
];

export default function InspectionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Professional Inspections
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Comprehensive air duct and chimney inspections for home buyers, insurance claims, and annual maintenance. Know exactly what's going on with your systems.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-green-500/20 text-green-200 px-4 py-2 rounded-full text-sm font-medium">
                Same-Day Appointments
              </span>
              <span className="bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm font-medium">
                Starting at $179
              </span>
            </div>
            <a href={`tel:${PHONE}`} className="btn-secondary inline-block text-lg py-4 px-8">
              Call {PHONE} to Schedule
            </a>
          </div>
        </div>
      </section>

      {/* Inspection Types */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Inspection
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer specialized inspections for different needs. Each includes a detailed written report and professional recommendations.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {inspectionTypes.map((type, idx) => (
              <div
                key={idx}
                className={`relative bg-white rounded-xl shadow-lg overflow-hidden ${
                  type.highlight === "Most Popular" ? "ring-2 ring-blue-500" : ""
                }`}
              >
                {type.highlight && (
                  <div className={`absolute top-0 right-0 px-4 py-1 text-sm font-semibold ${
                    type.highlight === "Most Popular" ? "bg-blue-500 text-white" : "bg-green-500 text-white"
                  }`}>
                    {type.highlight}
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{type.name}</h3>
                  <div className="text-3xl font-bold text-blue-800 mb-4">{type.price}</div>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <div className="text-sm text-gray-500 mb-4">
                    <span className="font-medium">Ideal for:</span> {type.ideal}
                  </div>
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2 text-sm">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`tel:${PHONE}`}
                    className="block text-center bg-blue-800 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Schedule This Inspection
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Inspect */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What We Inspect
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our inspections are thorough and comprehensive. Here's what we examine during each inspection.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whatWeInspect.map((category, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, iidx) => (
                    <li key={iidx} className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-blue-800 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Inspections Matter */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Professional Inspections Matter
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Safety Hazards</h3>
                    <p className="text-gray-600 text-sm">Damaged ducts can leak carbon monoxide, and chimney issues can cause house fires. Inspections identify these dangers before they cause harm.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Cost Savings</h3>
                    <p className="text-gray-600 text-sm">Catching problems early means cheaper repairs. A small crack found today could prevent a major rebuild tomorrow.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Peace of Mind</h3>
                    <p className="text-gray-600 text-sm">Know exactly what condition your systems are in. No surprises, no guessing about whether it's safe to use your fireplace.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Schedule Your Inspection</h3>
              <p className="text-gray-600 mb-6">
                Our experienced technicians are ready to provide a thorough, professional inspection of your air duct and chimney systems.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Same-day appointments available",
                  "Detailed written reports",
                  "No obligation to purchase repairs",
                  "Honest, transparent assessments"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <a href={`tel:${PHONE}`} className="btn-primary w-full text-center block">
                Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Member Discount */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Save More with Membership
            </h2>
            <p className="text-gray-600 mb-6">
              Members get exclusive discounts on all inspections plus a complimentary annual checkup included with their membership. Want to learn more?
            </p>
            <Link href="/membership" className="btn-primary inline-block">
              Explore Membership Benefits
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Inspection?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Call today to schedule your professional inspection. We offer same-day appointments throughout Southern California.
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
