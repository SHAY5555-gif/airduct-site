import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GoBackButton from "@/components/GoBackButton";
import FinancingSection from "@/components/FinancingSection";
import SecondOpinionCTA from "@/components/SecondOpinionCTA";

const PHONE = "424-424-1579";

export const metadata: Metadata = {
  title: "Chimney Repair Services | West Coast Air Duct and Chimney Services",
  description: "Professional chimney repair in Southern California. Fix cracks, leaks, damaged liners, and masonry issues. Call 424-424-1579 for expert repairs.",
};

export default function ChimneyRepairsPage() {
  return (
    <>
      <PageHero
        title="Chimney Repair Services"
        subtitle="Expert repairs for cracks, damaged liners, caps, and masonry issues."
      />

      <section className="section-padding">
        <div className="container-custom">
          <GoBackButton />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Chimney Repair Solutions</h2>
              <p className="text-gray-600 mb-4">
                Damaged chimneys can lead to water leaks, structural problems, fire hazards, and carbon monoxide risks. Our experienced technicians can diagnose and repair any chimney issue quickly and professionally.
              </p>
              <p className="text-gray-600 mb-4">
                From minor mortar repairs to complete chimney rebuilds, we have the expertise and equipment to restore your chimney to safe, proper working condition.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Repair Services We Offer:</h3>
              <ul className="space-y-3">
                {[
                  "Crack and joint repair",
                  "Chimney liner repair or replacement",
                  "Cap repair and replacement",
                  "Crown repair and waterproofing",
                  "Masonry restoration (tuckpointing)",
                  "Flashing repair",
                  "Damper repair or replacement",
                  "Smoke chamber repair"
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
                  src="/images/chimney-exterior-repair.png"
                  alt="Chimney masonry repair before and after"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/images/fireplace-repair.png"
                  alt="Fireplace and chimney interior repair"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Signs Your Chimney Needs Repair</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Visible Cracks", desc: "Cracks in the chimney crown, cap, or masonry" },
              { title: "White Staining", desc: "Efflorescence (white residue) on bricks indicates moisture" },
              { title: "Damaged Mortar", desc: "Crumbling or missing mortar between bricks" },
              { title: "Water in Fireplace", desc: "Signs of water leaks or staining" },
              { title: "Damaged Wallpaper", desc: "Peeling wallpaper or stains near the chimney" },
              { title: "Rusty Damper", desc: "Difficulty operating or rust on the damper" }
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
          <h2 className="text-3xl font-bold mb-6">Don't Ignore Chimney Damage</h2>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
            Small problems become big (and expensive) if left unaddressed. Call today for a thorough inspection and honest assessment.
          </p>
          <a href={`tel:${PHONE}`} className="btn-secondary inline-block text-lg py-4 px-8">
            Call {PHONE} Now
          </a>
        </div>
      </section>
    </>
  );
}
