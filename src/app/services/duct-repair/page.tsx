import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GoBackButton from "@/components/GoBackButton";
import FinancingSection from "@/components/FinancingSection";
import SecondOpinionCTA from "@/components/SecondOpinionCTA";

const PHONE = "424-424-1579";

export const metadata: Metadata = {
  title: "Duct Repair Services | West Coast Air Duct and Chimney Services",
  description: "Professional duct repair services in Southern California. Fix leaks, damaged sections, and airflow problems. Same-day service available. Call 424-424-1579.",
};

export default function DuctRepairPage() {
  return (
    <>
      <PageHero
        title="Duct Repair Services in Southern California"
        subtitle="Fix leaks, damaged ductwork, and airflow issues to restore your HVAC system's efficiency."
      />

      <section className="section-padding">
        <div className="container-custom">
          <GoBackButton />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Duct Repair Matters</h2>
              <p className="text-gray-600 mb-4">
                Leaky or damaged ductwork can waste up to 30% of the air that moves through your system. This means higher energy bills, uneven heating and cooling, and reduced comfort in your home.
              </p>
              <p className="text-gray-600 mb-4">
                Our duct repair services address leaks, disconnected sections, crushed ducts, and other damage that compromises your system's performance. We use professional-grade materials and techniques to ensure long-lasting repairs.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Common Duct Problems We Fix:</h3>
              <ul className="space-y-3">
                {[
                  "Leaking joints and connections",
                  "Crushed or collapsed ductwork",
                  "Disconnected duct sections",
                  "Holes and tears in ducts",
                  "Poor insulation causing energy loss",
                  "Improper duct sizing"
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
                alt="HVAC duct repair showing clean ductwork"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Signs You Need Duct Repair</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "High Energy Bills", desc: "Unexplained increases in heating or cooling costs" },
              { title: "Uneven Temperatures", desc: "Some rooms too hot or cold compared to others" },
              { title: "Weak Airflow", desc: "Little air coming from vents in certain rooms" },
              { title: "Dusty Home", desc: "Excessive dust despite regular cleaning" },
              { title: "Strange Noises", desc: "Rattling, whistling, or banging from ducts" },
              { title: "Visible Damage", desc: "Obvious gaps, holes, or disconnected sections" }
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
          <h2 className="text-3xl font-bold mb-6">Stop Wasting Money on Lost Air</h2>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
            Professional duct repair can improve your system's efficiency and lower your energy bills. Call for a free inspection today.
          </p>
          <a href={`tel:${PHONE}`} className="btn-secondary inline-block text-lg py-4 px-8">
            Call {PHONE} Now
          </a>
        </div>
      </section>
    </>
  );
}
