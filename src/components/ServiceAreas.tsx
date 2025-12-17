import Link from "next/link";
import Image from "next/image";

const areas = [
  {
    name: "Los Angeles County",
    slug: "los-angeles",
    cities: [
      "Los Angeles", "Long Beach", "Santa Monica", "Pasadena", "Glendale",
      "Burbank", "Torrance", "Inglewood", "West Hollywood", "Culver City",
      "Beverly Hills", "Malibu", "Downey", "Pomona", "El Monte"
    ]
  },
  {
    name: "Orange County",
    slug: "orange-county",
    cities: [
      "Anaheim", "Santa Ana", "Irvine", "Huntington Beach", "Garden Grove",
      "Orange", "Fullerton", "Costa Mesa", "Mission Viejo", "Newport Beach",
      "Laguna Beach", "Lake Forest", "Tustin", "Yorba Linda", "San Clemente"
    ]
  },
  {
    name: "Riverside County",
    slug: "riverside",
    cities: [
      "Riverside", "Corona", "Moreno Valley", "Temecula", "Murrieta",
      "Palm Springs", "Hemet", "Menifee", "Indio", "Perris",
      "Lake Elsinore", "Palm Desert", "Eastvale", "San Jacinto", "Beaumont"
    ]
  },
  {
    name: "San Bernardino County",
    slug: "san-bernardino",
    cities: [
      "San Bernardino", "Fontana", "Rancho Cucamonga", "Ontario", "Victorville",
      "Rialto", "Chino", "Upland", "Redlands", "Chino Hills",
      "Apple Valley", "Hesperia", "Colton", "Highland", "Yucaipa"
    ]
  }
];

export default function ServiceAreas() {
  return (
    <section className="section-padding bg-gray-50" id="areas">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Service Areas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide air duct and chimney services throughout Los Angeles, Orange, Riverside, and San Bernardino Counties.
          </p>
        </div>

        <div className="mb-8 relative h-48 md:h-64 rounded-xl overflow-hidden">
          <Image
            src="/images/socal-neighborhood.png"
            alt="Southern California neighborhood we serve"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
            <p className="text-white text-xl md:text-2xl font-bold p-6">
              Proudly Serving Southern California Homes & Businesses
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area) => (
            <div key={area.slug} className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {area.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Serving homes and businesses across {area.name}.
              </p>
              <ul className="space-y-1 mb-4 text-sm text-gray-600">
                {area.cities.slice(0, 8).map((city) => (
                  <li key={city} className="flex items-center gap-2">
                    <svg className="w-3 h-3 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {city}
                  </li>
                ))}
                <li className="text-gray-500 italic">+ many more cities</li>
              </ul>
              <Link
                href={`/areas/${area.slug}`}
                className="text-blue-800 font-semibold hover:text-blue-600 inline-flex items-center gap-1"
              >
                View all cities
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
