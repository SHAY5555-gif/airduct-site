import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/JsonLd";

const PHONE = "424-424-1579";
const BRAND_NAME = "West Coast Air Duct and Chimney Services";

export const metadata: Metadata = {
  title: `Resources & Education | ${BRAND_NAME}`,
  description: "Learn about air duct cleaning, chimney safety, and indoor air quality from trusted industry resources. Educational guides and links to authoritative organizations.",
  alternates: {
    canonical: "/resources",
  },
};

const industryOrganizations = [
  {
    name: "NADCA (National Air Duct Cleaners Association)",
    url: "https://nadca.com",
    description: "The leading trade association for HVAC inspection, cleaning, and restoration. NADCA sets industry standards and certifies professionals.",
    category: "Air Duct Cleaning"
  },
  {
    name: "EPA Indoor Air Quality",
    url: "https://www.epa.gov/indoor-air-quality-iaq",
    description: "The Environmental Protection Agency's comprehensive resource on indoor air quality, including information about air duct cleaning and when it's necessary.",
    category: "Indoor Air Quality"
  },
  {
    name: "CSIA (Chimney Safety Institute of America)",
    url: "https://www.csia.org",
    description: "The premier chimney and venting safety organization. CSIA educates homeowners and certifies chimney professionals.",
    category: "Chimney Safety"
  },
  {
    name: "NFPA (National Fire Protection Association)",
    url: "https://www.nfpa.org",
    description: "The authority on fire, electrical, and building safety. Their codes and standards help prevent chimney fires and other hazards.",
    category: "Fire Safety"
  },
  {
    name: "American Lung Association",
    url: "https://www.lung.org",
    description: "Leading organization dedicated to lung health. Provides information on how indoor air quality affects respiratory health.",
    category: "Health"
  },
  {
    name: "ENERGY STAR",
    url: "https://www.energystar.gov",
    description: "EPA's program for energy efficiency. Learn how proper HVAC maintenance and sealing ducts can save energy and money.",
    category: "Energy Efficiency"
  }
];

const educationalTopics = [
  {
    title: "How Often Should You Clean Your Air Ducts?",
    content: "The EPA recommends cleaning air ducts as needed, particularly if you notice visible mold, pest infestations, or excessive dust. Most homes benefit from cleaning every 3-5 years. However, homes with pets, smokers, or allergy sufferers may need more frequent cleaning."
  },
  {
    title: "Signs Your Chimney Needs Attention",
    content: "Watch for these warning signs: white staining on exterior bricks (efflorescence), damaged mortar joints, rust on the damper, smoke entering your home, strong odors from the fireplace, or a buildup of creosote visible inside the flue. Annual inspections can catch issues early."
  },
  {
    title: "The Importance of Dryer Vent Cleaning",
    content: "Clogged dryer vents are a leading cause of house fires. The U.S. Fire Administration reports that dryer fires cause approximately $35 million in property damage annually. Signs of a clogged vent include longer drying times, a hot dryer exterior, and burning smells."
  },
  {
    title: "Understanding Creosote Buildup",
    content: "Creosote is a natural byproduct of burning wood. It accumulates in chimney flues and is highly flammable. There are three stages of creosote buildup, with Stage 3 being the most dangerous. Regular cleaning removes creosote before it becomes a fire hazard."
  },
  {
    title: "Indoor Air Quality and Your Health",
    content: "Poor indoor air quality can cause or worsen allergies, asthma, and other respiratory conditions. Contaminants in your ductwork can include dust, mold spores, pet dander, bacteria, and chemical pollutants. Clean ducts contribute to healthier indoor air."
  },
  {
    title: "When to Replace vs. Repair Ductwork",
    content: "Ductwork typically lasts 15-25 years. If your ducts are older, showing significant damage, or you're experiencing major efficiency problems, replacement may be more cost-effective than repeated repairs. A professional inspection can help you decide."
  }
];

const tips = [
  {
    title: "Change Your Air Filters",
    tip: "Replace HVAC filters every 1-3 months. Dirty filters restrict airflow and reduce system efficiency while allowing more contaminants into your ductwork."
  },
  {
    title: "Don't Close Too Many Vents",
    tip: "Closing more than 20% of your vents can create pressure imbalances that damage your ductwork and reduce efficiency."
  },
  {
    title: "Have Your Chimney Inspected Annually",
    tip: "Even if you don't use your fireplace often, annual inspections catch structural issues and animal intrusions before they become serious problems."
  },
  {
    title: "Clean Your Dryer Lint Trap Every Load",
    tip: "A clean lint trap improves drying efficiency and reduces the amount of lint that reaches your vent line. But remember, the vent line still needs periodic professional cleaning."
  },
  {
    title: "Use Your Bathroom Exhaust Fans",
    tip: "Running exhaust fans during and after showers helps remove moisture that can lead to mold growth in your ductwork and throughout your home."
  },
  {
    title: "Burn Seasoned Wood Only",
    tip: "Burning wet or green wood creates more creosote buildup than dry, seasoned wood. Properly seasoned wood has been dried for at least 6 months."
  }
];

export default function ResourcesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Resources", url: "/resources" }
      ]} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Resources & Education
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Learn about air duct cleaning, chimney safety, and indoor air quality from trusted industry resources and our educational guides.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Organizations */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted Industry Organizations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These organizations set industry standards, provide education, and help homeowners make informed decisions about air duct and chimney services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryOrganizations.map((org, idx) => (
              <a
                key={idx}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-blue-200 group"
              >
                <div className="text-xs text-blue-600 font-medium mb-2">{org.category}</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors">
                  {org.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{org.description}</p>
                <span className="text-blue-800 text-sm font-medium flex items-center gap-1">
                  Visit Website
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Topics */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Educational Topics
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn more about maintaining your home's air quality and fire safety systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {educationalTopics.map((topic, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">{topic.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{topic.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Tips for Homeowners
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple things you can do to maintain your systems between professional services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((item, idx) => (
              <div key={idx} className="bg-blue-50 p-6 rounded-xl">
                <div className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="section-padding bg-orange-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Warning Signs: When to Call a Professional
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Air Duct Warning Signs
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Visible mold in or around vents</li>
                  <li>Musty or unpleasant odors from vents</li>
                  <li>Excessive dust on furniture</li>
                  <li>Inconsistent airflow between rooms</li>
                  <li>Increased allergy symptoms at home</li>
                  <li>Unexplained respiratory issues</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                  Chimney Warning Signs
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Smoke entering your home</li>
                  <li>Strong odors from the fireplace</li>
                  <li>White staining on chimney exterior</li>
                  <li>Crumbling mortar or bricks</li>
                  <li>Rust on damper or firebox</li>
                  <li>Damaged chimney cap</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                If you notice any of these signs, don't wait. Call us for a professional inspection.
              </p>
              <a href={`tel:${PHONE}`} className="btn-primary inline-block">
                Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Questions? We're Here to Help</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Our knowledgeable team is happy to answer your questions about air duct cleaning, chimney services, and indoor air quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHONE}`} className="btn-secondary text-lg py-4 px-8">
              Call {PHONE}
            </a>
            <Link href="/#contact" className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg transition-colors">
              Send Us a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
