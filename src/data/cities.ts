export interface City {
  slug: string;
  city: string;
  county: string;
  phone: string;
  shortDescription: string;
  fullDescription: string;
  serviceHighlights: string[];
  nearbyAreas: string[];
}

export const cities: City[] = [
  // Los Angeles County
  {
    slug: "los-angeles",
    city: "Los Angeles",
    county: "Los Angeles County",
    phone: "424-424-1579",
    shortDescription: "Serving the heart of LA with professional air duct and chimney services.",
    fullDescription: "From Downtown LA to the Westside, our team provides expert air duct cleaning, chimney services, and dryer vent cleaning throughout Los Angeles. We understand the unique challenges LA homes face, from Santa Ana winds bringing dust and debris to aging ductwork in historic properties.",
    serviceHighlights: ["Same-day appointments in LA", "24/7 emergency chimney service", "Serving all LA neighborhoods"],
    nearbyAreas: ["Hollywood", "Downtown LA", "Westside", "Silver Lake", "Echo Park", "Los Feliz"]
  },
  {
    slug: "long-beach",
    city: "Long Beach",
    county: "Los Angeles County",
    phone: "424-424-1579",
    shortDescription: "Professional air duct and chimney services for Long Beach homes and businesses.",
    fullDescription: "Long Beach's coastal location means homes face unique challenges with moisture and salt air affecting HVAC systems and chimneys. Our technicians are experienced with Long Beach properties and provide thorough cleaning and repair services.",
    serviceHighlights: ["Coastal property specialists", "Same-day service available", "Licensed and insured"],
    nearbyAreas: ["Signal Hill", "Lakewood", "Carson", "Cerritos", "Seal Beach"]
  },
  {
    slug: "santa-monica",
    city: "Santa Monica",
    county: "Los Angeles County",
    phone: "424-424-1579",
    shortDescription: "Expert duct and chimney services for Santa Monica residents.",
    fullDescription: "Santa Monica homes deserve the best care. Our team provides professional air duct cleaning, chimney maintenance, and dryer vent services to keep your beachside home safe and comfortable.",
    serviceHighlights: ["Beach community experts", "Moisture damage prevention", "Emergency response available"],
    nearbyAreas: ["Pacific Palisades", "Venice", "Mar Vista", "Brentwood", "Malibu"]
  },
  {
    slug: "pasadena",
    city: "Pasadena",
    county: "Los Angeles County",
    phone: "424-424-1579",
    shortDescription: "Trusted air duct and chimney services in Pasadena and surrounding areas.",
    fullDescription: "Pasadena is home to many historic properties with older HVAC systems and chimneys that need special attention. Our experienced technicians understand the care these homes require and provide gentle yet thorough services.",
    serviceHighlights: ["Historic home specialists", "Careful restoration approach", "Full inspection services"],
    nearbyAreas: ["Altadena", "South Pasadena", "San Marino", "Arcadia", "La Canada Flintridge"]
  },
  {
    slug: "glendale",
    city: "Glendale",
    county: "Los Angeles County",
    phone: "424-424-1579",
    shortDescription: "Reliable air duct cleaning and chimney services in Glendale.",
    fullDescription: "Glendale residents trust us for professional air duct and chimney services. From the hills to downtown, we serve all Glendale neighborhoods with quality workmanship and honest pricing.",
    serviceHighlights: ["Fast response times", "Competitive pricing", "Bilingual technicians available"],
    nearbyAreas: ["Burbank", "La Crescenta", "Montrose", "Eagle Rock", "Atwater Village"]
  },
  {
    slug: "burbank",
    city: "Burbank",
    county: "Los Angeles County",
    phone: "424-424-1579",
    shortDescription: "Professional duct and chimney services for Burbank homes.",
    fullDescription: "Burbank homeowners and businesses rely on us for clean air ducts and safe chimneys. We provide comprehensive services including cleaning, repairs, and inspections for residential and commercial properties.",
    serviceHighlights: ["Residential and commercial", "Studio lot experience", "Same-day availability"],
    nearbyAreas: ["North Hollywood", "Toluca Lake", "Sun Valley", "Glendale", "Studio City"]
  },
  {
    slug: "torrance",
    city: "Torrance",
    county: "Los Angeles County",
    phone: "424-424-1579",
    shortDescription: "Comprehensive air duct and chimney services in Torrance.",
    fullDescription: "Torrance homes benefit from our professional air duct cleaning and chimney services. We help maintain healthy indoor air quality and fireplace safety for families throughout the South Bay.",
    serviceHighlights: ["South Bay specialists", "Family-owned service", "Honest assessments"],
    nearbyAreas: ["Redondo Beach", "Hermosa Beach", "Palos Verdes", "Gardena", "Carson"]
  },
  // Orange County
  {
    slug: "anaheim",
    city: "Anaheim",
    county: "Orange County",
    phone: "424-424-1579",
    shortDescription: "Expert air duct and chimney services in Anaheim.",
    fullDescription: "Anaheim residents trust us for professional air duct cleaning and chimney services. From the Hills to Platinum Triangle, we serve all of Anaheim with reliable, quality service.",
    serviceHighlights: ["Anaheim Hills specialists", "Commercial services available", "24/7 emergency calls"],
    nearbyAreas: ["Fullerton", "Orange", "Placentia", "Yorba Linda", "Buena Park"]
  },
  {
    slug: "irvine",
    city: "Irvine",
    county: "Orange County",
    phone: "424-424-1579",
    shortDescription: "Professional duct and chimney services for Irvine homes.",
    fullDescription: "Irvine is known for its master-planned communities and well-maintained homes. We help Irvine homeowners keep their HVAC systems and chimneys in top condition with thorough cleaning and expert repairs.",
    serviceHighlights: ["Modern home experts", "HOA-compliant services", "Detailed documentation"],
    nearbyAreas: ["Tustin", "Lake Forest", "Newport Beach", "Costa Mesa", "Laguna Woods"]
  },
  {
    slug: "huntington-beach",
    city: "Huntington Beach",
    county: "Orange County",
    phone: "424-424-1579",
    shortDescription: "Coastal air duct and chimney services in Huntington Beach.",
    fullDescription: "Surf City homes need protection from salt air corrosion and coastal moisture. Our team provides specialized services for Huntington Beach properties to ensure clean air and safe fireplaces.",
    serviceHighlights: ["Coastal property experts", "Corrosion prevention", "Beach community trusted"],
    nearbyAreas: ["Fountain Valley", "Westminster", "Seal Beach", "Costa Mesa", "Newport Beach"]
  },
  {
    slug: "santa-ana",
    city: "Santa Ana",
    county: "Orange County",
    phone: "424-424-1579",
    shortDescription: "Reliable air duct and chimney services in Santa Ana.",
    fullDescription: "As the heart of Orange County, Santa Ana has diverse housing from historic homes to modern developments. We provide tailored services for all property types throughout Santa Ana.",
    serviceHighlights: ["All property types", "Bilingual service", "Flexible scheduling"],
    nearbyAreas: ["Orange", "Tustin", "Costa Mesa", "Garden Grove", "Irvine"]
  },
  // Riverside County
  {
    slug: "riverside",
    city: "Riverside",
    county: "Riverside County",
    phone: "424-424-1579",
    shortDescription: "Trusted air duct and chimney services in Riverside.",
    fullDescription: "Riverside's warm climate and occasional Santa Ana winds create unique challenges for HVAC systems. Our team provides thorough duct cleaning and chimney services to keep Riverside homes comfortable and safe.",
    serviceHighlights: ["Inland Empire experts", "Heat-related system care", "Fast response times"],
    nearbyAreas: ["Moreno Valley", "Corona", "Norco", "Jurupa Valley", "Rubidoux"]
  },
  {
    slug: "corona",
    city: "Corona",
    county: "Riverside County",
    phone: "424-424-1579",
    shortDescription: "Professional duct and chimney services for Corona homes.",
    fullDescription: "Corona homeowners trust us for air duct cleaning and chimney maintenance. We serve all Corona neighborhoods with quality workmanship and competitive pricing.",
    serviceHighlights: ["Local team", "Same-day service", "Satisfaction guaranteed"],
    nearbyAreas: ["Norco", "Eastvale", "Chino Hills", "Riverside", "Yorba Linda"]
  },
  {
    slug: "temecula",
    city: "Temecula",
    county: "Riverside County",
    phone: "424-424-1579",
    shortDescription: "Expert air duct and chimney services in Temecula wine country.",
    fullDescription: "Temecula's unique climate in wine country means homes need specialized care. From duct cleaning to chimney inspections, we keep Temecula homes comfortable year-round.",
    serviceHighlights: ["Wine country specialists", "New construction services", "Detailed inspections"],
    nearbyAreas: ["Murrieta", "Menifee", "Lake Elsinore", "Wildomar", "Fallbrook"]
  },
  {
    slug: "murrieta",
    city: "Murrieta",
    county: "Riverside County",
    phone: "424-424-1579",
    shortDescription: "Reliable duct cleaning and chimney services in Murrieta.",
    fullDescription: "Murrieta families deserve clean, healthy air and safe fireplaces. Our professional team provides comprehensive air duct and chimney services throughout Murrieta.",
    serviceHighlights: ["Family-focused service", "Newer home expertise", "Transparent pricing"],
    nearbyAreas: ["Temecula", "Menifee", "Wildomar", "Winchester", "French Valley"]
  },
  // San Bernardino County
  {
    slug: "san-bernardino",
    city: "San Bernardino",
    county: "San Bernardino County",
    phone: "424-424-1579",
    shortDescription: "Professional air duct and chimney services in San Bernardino.",
    fullDescription: "San Bernardino's diverse geography from valleys to mountains means varied HVAC and chimney needs. Our experienced technicians serve all of San Bernardino with expert services.",
    serviceHighlights: ["Mountain and valley service", "Emergency response", "All property types"],
    nearbyAreas: ["Colton", "Rialto", "Highland", "Redlands", "Loma Linda"]
  },
  {
    slug: "ontario",
    city: "Ontario",
    county: "San Bernardino County",
    phone: "424-424-1579",
    shortDescription: "Expert duct and chimney services for Ontario homes and businesses.",
    fullDescription: "Ontario's mix of residential and commercial properties benefit from our comprehensive air duct and chimney services. We serve homes, offices, and industrial properties throughout Ontario.",
    serviceHighlights: ["Commercial specialists", "Industrial experience", "Flexible scheduling"],
    nearbyAreas: ["Rancho Cucamonga", "Upland", "Montclair", "Chino", "Fontana"]
  },
  {
    slug: "rancho-cucamonga",
    city: "Rancho Cucamonga",
    county: "San Bernardino County",
    phone: "424-424-1579",
    shortDescription: "Trusted air duct and chimney services in Rancho Cucamonga.",
    fullDescription: "Rancho Cucamonga homeowners appreciate our attention to detail and quality service. From foothill estates to planned communities, we provide expert duct cleaning and chimney care.",
    serviceHighlights: ["Foothill area specialists", "Quality workmanship", "Customer satisfaction focus"],
    nearbyAreas: ["Upland", "Ontario", "Fontana", "Alta Loma", "Etiwanda"]
  },
  {
    slug: "fontana",
    city: "Fontana",
    county: "San Bernardino County",
    phone: "424-424-1579",
    shortDescription: "Reliable air duct and chimney services in Fontana.",
    fullDescription: "Fontana residents trust us for professional air duct cleaning and chimney services. We help maintain healthy indoor air quality and fireplace safety for growing families.",
    serviceHighlights: ["Growing family specialists", "Competitive rates", "Same-day available"],
    nearbyAreas: ["Rialto", "Rancho Cucamonga", "Bloomington", "Lytle Creek", "San Bernardino"]
  },
  {
    slug: "victorville",
    city: "Victorville",
    county: "San Bernardino County",
    phone: "424-424-1579",
    shortDescription: "Professional duct and chimney services for High Desert homes.",
    fullDescription: "High Desert homes face unique challenges with dust, temperature extremes, and dry conditions. Our team provides specialized services for Victorville and surrounding High Desert communities.",
    serviceHighlights: ["High Desert experts", "Dust mitigation focus", "Extreme climate experience"],
    nearbyAreas: ["Hesperia", "Apple Valley", "Adelanto", "Oak Hills", "Phelan"]
  }
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug);
}

export function getCitiesByCounty(county: string): City[] {
  return cities.filter(city => city.county === county);
}

export const counties = [
  "Los Angeles County",
  "Orange County",
  "Riverside County",
  "San Bernardino County"
];
