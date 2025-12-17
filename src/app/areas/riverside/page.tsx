import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const PHONE = "424-424-1579";

export const metadata: Metadata = {
  title: "Air Duct & Chimney Services in Riverside County | SoCal Air Duct Pros",
  description: "Professional air duct cleaning, chimney services, and dryer vent cleaning in Riverside County. Serving Riverside, Corona, Temecula, Palm Springs & more. Call 424-424-1579.",
};

const cities = [
  "Riverside", "Corona", "Moreno Valley", "Temecula", "Murrieta",
  "Palm Springs", "Hemet", "Menifee", "Indio", "Perris",
  "Lake Elsinore", "Palm Desert", "Eastvale", "San Jacinto", "Beaumont",
  "Jurupa Valley", "Cathedral City", "La Quinta", "Coachella", "Norco",
  "Banning", "Wildomar", "Desert Hot Springs", "Rancho Mirage", "Indian Wells",
  "Calimesa", "Canyon Lake", "Blythe", "Idyllwild", "Temecula Wine Country"
];

const services = [
  { name: "Air Duct Cleaning", slug: "air-duct-cleaning" },
  { name: "Duct Repair", slug: "duct-repair" },
  { name: "Dryer Vent Cleaning", slug: "dryer-vent-cleaning" },
  { name: "System Inspections", slug: "system-inspections" },
  { name: "Chimney Installation", slug: "chimney-installation" },
  { name: "Chimney Repairs", slug: "chimney-repairs" },
  { name: "Chimney Cleaning", slug: "chimney-cleaning" }
];

export default function RiversidePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Link href="/#areas" className="text-blue-300 hover:text-white mb-4 inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Service Areas
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Air Duct & Chimney Services in Riverside County
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Professional air duct cleaning, chimney services, and dryer vent cleaning for homes and businesses throughout Riverside County.
            </p>
            <a href={`tel:${PHONE}`} className="btn-secondary inline-block text-lg py-4 px-8">
              Call {PHONE} for Service in Riverside County
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Serving All of Riverside County</h2>
              <p className="text-gray-600 mb-4">
                From the growing communities of Corona and Temecula to the desert cities of Palm Springs and Indio, SoCal Air Duct Pros provides expert air duct and chimney services throughout Riverside County.
              </p>
              <p className="text-gray-600 mb-4">
                Riverside County's diverse climate - from the hot desert valleys to the cooler mountain communities - creates unique challenges for HVAC systems. Desert dust, extreme heat, and varying humidity levels all impact air quality. Our technicians are experienced with the specific needs of Riverside County homes.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Our Services in Riverside County:</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-blue-800 hover:text-blue-600 flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 lg:h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/socal-neighborhood.png"
                alt="Riverside County neighborhood"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cities We Serve in Riverside County</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {cities.map((city) => (
              <div key={city} className="bg-white px-4 py-3 rounded-lg shadow-sm text-center">
                <span className="text-gray-700">{city}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6">
            Don't see your city? We likely serve your area too! Call us at{" "}
            <a href={`tel:${PHONE}`} className="text-blue-800 font-semibold hover:underline">{PHONE}</a> to confirm.
          </p>
        </div>
      </section>

      <section className="section-padding bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Service in Riverside County?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Call today for a free estimate. We provide fast, professional service throughout Riverside County.
          </p>
          <a href={`tel:${PHONE}`} className="btn-secondary inline-block text-lg py-4 px-8">
            Call {PHONE} Now
          </a>
        </div>
      </section>
    </>
  );
}
