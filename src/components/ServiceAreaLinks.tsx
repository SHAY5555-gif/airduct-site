import Link from "next/link";

interface ServiceAreaLinksProps {
  serviceName: string;
}

const popularCities = [
  { slug: "los-angeles", name: "Los Angeles", county: "LA County" },
  { slug: "long-beach", name: "Long Beach", county: "LA County" },
  { slug: "anaheim", name: "Anaheim", county: "Orange County" },
  { slug: "irvine", name: "Irvine", county: "Orange County" },
  { slug: "riverside", name: "Riverside", county: "Riverside County" },
  { slug: "san-bernardino", name: "San Bernardino", county: "San Bernardino County" },
  { slug: "pasadena", name: "Pasadena", county: "LA County" },
  { slug: "santa-monica", name: "Santa Monica", county: "LA County" },
];

export default function ServiceAreaLinks({ serviceName }: ServiceAreaLinksProps) {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
          {serviceName} Near You
        </h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          We provide professional {serviceName.toLowerCase()} services throughout Southern California.
          Find your local service area:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {popularCities.map((city) => (
            <Link
              key={city.slug}
              href={`/service-areas/${city.slug}`}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center group"
            >
              <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {city.name}
              </span>
              <span className="block text-sm text-gray-500">{city.county}</span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
          >
            View All Service Areas
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
