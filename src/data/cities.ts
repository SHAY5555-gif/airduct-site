export interface City {
  slug: string;
  city: string;
  county: string;
  phone: string;
  shortDescription: string;
  fullDescription: string;
  serviceHighlights: string[];
  nearbyAreas: string[];
  lat: number;
  lng: number;
}

/**
 * Haversine formula to calculate distance between two points on Earth
 * @returns Distance in miles
 */
export function getDistanceMiles(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 3959; // Earth's radius in miles
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Get cities within a specified radius of a given city
 * @param citySlug The slug of the city to find nearby cities for
 * @param radiusMiles Maximum distance in miles (default 30)
 * @returns Array of nearby cities sorted by distance
 */
export function getNearbyCities(citySlug: string, radiusMiles: number = 30): City[] {
  const city = getCityBySlug(citySlug);
  if (!city) return [];

  return cities
    .filter(c => c.slug !== citySlug)
    .map(c => ({
      city: c,
      distance: getDistanceMiles(city.lat, city.lng, c.lat, c.lng)
    }))
    .filter(item => item.distance <= radiusMiles)
    .sort((a, b) => a.distance - b.distance)
    .map(item => item.city);
}

/**
 * Get nearby city names within a specified radius
 * @param citySlug The slug of the city to find nearby cities for
 * @param radiusMiles Maximum distance in miles (default 30)
 * @returns Array of nearby city names
 */
export function getNearbyCityNames(citySlug: string, radiusMiles: number = 30): string[] {
  return getNearbyCities(citySlug, radiusMiles).map(c => c.city);
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
    nearbyAreas: ["Hollywood", "Downtown LA", "Westside", "Silver Lake", "Echo Park", "Los Feliz"],
    lat: 34.0522,
    lng: -118.2437
  },
  {
    slug: "long-beach",
    city: "Long Beach",
    county: "Los Angeles County",
    phone: "424-424-1579",
    shortDescription: "Professional air duct and chimney services for Long Beach homes and businesses.",
    fullDescription: "Long Beach's coastal location means homes face unique challenges with moisture and salt air affecting HVAC systems and chimneys. Our technicians are experienced with Long Beach properties and provide thorough cleaning and repair services.",
    serviceHighlights: ["Coastal property specialists", "Same-day service available", "Licensed and insured"],
    nearbyAreas: ["Signal Hill", "Lakewood", "Carson", "Cerritos", "Seal Beach"],
    lat: 33.7701,
    lng: -118.1937
  },
  {
    slug: "santa-monica",
    city: "Santa Monica",
    county: "Los Angeles County",
    phone: "424-424-1579",
    shortDescription: "Expert duct and chimney services for Santa Monica residents.",
    fullDescription: "Santa Monica homes deserve the best care. Our team provides professional air duct cleaning, chimney maintenance, and dryer vent services to keep your beachside home safe and comfortable.",
    serviceHighlights: ["Beach community experts", "Moisture damage prevention", "Emergency response available"],
    nearbyAreas: ["Pacific Palisades", "Venice", "Mar Vista", "Brentwood", "Malibu"],
    lat: 34.0195,
    lng: -118.4912
  },
  {
    slug: "pasadena",
    city: "Pasadena",
    county: "Los Angeles County",
    phone: "424-424-1579",
    shortDescription: "Trusted air duct and chimney services in Pasadena and surrounding areas.",
    fullDescription: "Pasadena is home to many historic properties with older HVAC systems and chimneys that need special attention. Our experienced technicians understand the care these homes require and provide gentle yet thorough services.",
    serviceHighlights: ["Historic home specialists", "Careful restoration approach", "Full inspection services"],
    nearbyAreas: ["Altadena", "South Pasadena", "San Marino", "Arcadia", "La Canada Flintridge"],
    lat: 34.1478,
    lng: -118.1445
  },
  {
    slug: "glendale",
    city: "Glendale",
    county: "Los Angeles County",
    phone: "424-424-1579",
    shortDescription: "Reliable air duct cleaning and chimney services in Glendale.",
    fullDescription: "Glendale residents trust us for professional air duct and chimney services. From the hills to downtown, we serve all Glendale neighborhoods with quality workmanship and honest pricing.",
    serviceHighlights: ["Fast response times", "Competitive pricing", "Bilingual technicians available"],
    nearbyAreas: ["Burbank", "La Crescenta", "Montrose", "Eagle Rock", "Atwater Village"],
    lat: 34.1425,
    lng: -118.2551
  },
  {
    slug: "burbank",
    city: "Burbank",
    county: "Los Angeles County",
    phone: "424-424-1579",
    shortDescription: "Professional duct and chimney services for Burbank homes.",
    fullDescription: "Burbank homeowners and businesses rely on us for clean air ducts and safe chimneys. We provide comprehensive services including cleaning, repairs, and inspections for residential and commercial properties.",
    serviceHighlights: ["Residential and commercial", "Studio lot experience", "Same-day availability"],
    nearbyAreas: ["North Hollywood", "Toluca Lake", "Sun Valley", "Glendale", "Studio City"],
    lat: 34.1808,
    lng: -118.3090
  },
  {
    slug: "torrance",
    city: "Torrance",
    county: "Los Angeles County",
    phone: "424-424-1579",
    shortDescription: "Comprehensive air duct and chimney services in Torrance.",
    fullDescription: "Torrance homes benefit from our professional air duct cleaning and chimney services. We help maintain healthy indoor air quality and fireplace safety for families throughout the South Bay.",
    serviceHighlights: ["South Bay specialists", "Family-owned service", "Honest assessments"],
    nearbyAreas: ["Redondo Beach", "Hermosa Beach", "Palos Verdes", "Gardena", "Carson"],
    lat: 33.8358,
    lng: -118.3406
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
    nearbyAreas: ["Fullerton", "Orange", "Placentia", "Yorba Linda", "Buena Park"],
    lat: 33.8366,
    lng: -117.9143
  },
  {
    slug: "irvine",
    city: "Irvine",
    county: "Orange County",
    phone: "424-424-1579",
    shortDescription: "Professional duct and chimney services for Irvine homes.",
    fullDescription: "Irvine is known for its master-planned communities and well-maintained homes. We help Irvine homeowners keep their HVAC systems and chimneys in top condition with thorough cleaning and expert repairs.",
    serviceHighlights: ["Modern home experts", "HOA-compliant services", "Detailed documentation"],
    nearbyAreas: ["Tustin", "Lake Forest", "Newport Beach", "Costa Mesa", "Laguna Woods"],
    lat: 33.6846,
    lng: -117.8265
  },
  {
    slug: "huntington-beach",
    city: "Huntington Beach",
    county: "Orange County",
    phone: "424-424-1579",
    shortDescription: "Coastal air duct and chimney services in Huntington Beach.",
    fullDescription: "Surf City homes need protection from salt air corrosion and coastal moisture. Our team provides specialized services for Huntington Beach properties to ensure clean air and safe fireplaces.",
    serviceHighlights: ["Coastal property experts", "Corrosion prevention", "Beach community trusted"],
    nearbyAreas: ["Fountain Valley", "Westminster", "Seal Beach", "Costa Mesa", "Newport Beach"],
    lat: 33.6595,
    lng: -117.9988
  },
  {
    slug: "santa-ana",
    city: "Santa Ana",
    county: "Orange County",
    phone: "424-424-1579",
    shortDescription: "Reliable air duct and chimney services in Santa Ana.",
    fullDescription: "As the heart of Orange County, Santa Ana has diverse housing from historic homes to modern developments. We provide tailored services for all property types throughout Santa Ana.",
    serviceHighlights: ["All property types", "Bilingual service", "Flexible scheduling"],
    nearbyAreas: ["Orange", "Tustin", "Costa Mesa", "Garden Grove", "Irvine"],
    lat: 33.7455,
    lng: -117.8677
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
    nearbyAreas: ["Moreno Valley", "Corona", "Norco", "Jurupa Valley", "Rubidoux"],
    lat: 33.9533,
    lng: -117.3962
  },
  {
    slug: "corona",
    city: "Corona",
    county: "Riverside County",
    phone: "424-424-1579",
    shortDescription: "Professional duct and chimney services for Corona homes.",
    fullDescription: "Corona homeowners trust us for air duct cleaning and chimney maintenance. We serve all Corona neighborhoods with quality workmanship and competitive pricing.",
    serviceHighlights: ["Local team", "Same-day service", "Satisfaction guaranteed"],
    nearbyAreas: ["Norco", "Eastvale", "Chino Hills", "Riverside", "Yorba Linda"],
    lat: 33.8753,
    lng: -117.5664
  },
  {
    slug: "temecula",
    city: "Temecula",
    county: "Riverside County",
    phone: "424-424-1579",
    shortDescription: "Expert air duct and chimney services in Temecula wine country.",
    fullDescription: "Temecula's unique climate in wine country means homes need specialized care. From duct cleaning to chimney inspections, we keep Temecula homes comfortable year-round.",
    serviceHighlights: ["Wine country specialists", "New construction services", "Detailed inspections"],
    nearbyAreas: ["Murrieta", "Menifee", "Lake Elsinore", "Wildomar", "Fallbrook"],
    lat: 33.4936,
    lng: -117.1484
  },
  {
    slug: "murrieta",
    city: "Murrieta",
    county: "Riverside County",
    phone: "424-424-1579",
    shortDescription: "Reliable duct cleaning and chimney services in Murrieta.",
    fullDescription: "Murrieta families deserve clean, healthy air and safe fireplaces. Our professional team provides comprehensive air duct and chimney services throughout Murrieta.",
    serviceHighlights: ["Family-focused service", "Newer home expertise", "Transparent pricing"],
    nearbyAreas: ["Temecula", "Menifee", "Wildomar", "Winchester", "French Valley"],
    lat: 33.5539,
    lng: -117.2139
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
    nearbyAreas: ["Colton", "Rialto", "Highland", "Redlands", "Loma Linda"],
    lat: 34.1083,
    lng: -117.2898
  },
  {
    slug: "ontario",
    city: "Ontario",
    county: "San Bernardino County",
    phone: "424-424-1579",
    shortDescription: "Expert duct and chimney services for Ontario homes and businesses.",
    fullDescription: "Ontario's mix of residential and commercial properties benefit from our comprehensive air duct and chimney services. We serve homes, offices, and industrial properties throughout Ontario.",
    serviceHighlights: ["Commercial specialists", "Industrial experience", "Flexible scheduling"],
    nearbyAreas: ["Rancho Cucamonga", "Upland", "Montclair", "Chino", "Fontana"],
    lat: 34.0633,
    lng: -117.6509
  },
  {
    slug: "rancho-cucamonga",
    city: "Rancho Cucamonga",
    county: "San Bernardino County",
    phone: "424-424-1579",
    shortDescription: "Trusted air duct and chimney services in Rancho Cucamonga.",
    fullDescription: "Rancho Cucamonga homeowners appreciate our attention to detail and quality service. From foothill estates to planned communities, we provide expert duct cleaning and chimney care.",
    serviceHighlights: ["Foothill area specialists", "Quality workmanship", "Customer satisfaction focus"],
    nearbyAreas: ["Upland", "Ontario", "Fontana", "Alta Loma", "Etiwanda"],
    lat: 34.1064,
    lng: -117.5931
  },
  {
    slug: "fontana",
    city: "Fontana",
    county: "San Bernardino County",
    phone: "424-424-1579",
    shortDescription: "Reliable air duct and chimney services in Fontana.",
    fullDescription: "Fontana residents trust us for professional air duct cleaning and chimney services. We help maintain healthy indoor air quality and fireplace safety for growing families.",
    serviceHighlights: ["Growing family specialists", "Competitive rates", "Same-day available"],
    nearbyAreas: ["Rialto", "Rancho Cucamonga", "Bloomington", "Lytle Creek", "San Bernardino"],
    lat: 34.0922,
    lng: -117.4350
  },
  {
    slug: "victorville",
    city: "Victorville",
    county: "San Bernardino County",
    phone: "424-424-1579",
    shortDescription: "Professional duct and chimney services for High Desert homes.",
    fullDescription: "High Desert homes face unique challenges with dust, temperature extremes, and dry conditions. Our team provides specialized services for Victorville and surrounding High Desert communities.",
    serviceHighlights: ["High Desert experts", "Dust mitigation focus", "Extreme climate experience"],
    nearbyAreas: ["Hesperia", "Apple Valley", "Adelanto", "Oak Hills", "Phelan"],
    lat: 34.5362,
    lng: -117.2928
  },
  // San Diego County
  {
    slug: "san-diego",
    city: "San Diego",
    county: "San Diego County",
    phone: "424-424-1579",
    shortDescription: "Professional air duct and chimney services throughout San Diego.",
    fullDescription: "San Diego's beautiful climate and coastal location create unique needs for HVAC maintenance. Our team provides expert air duct cleaning, chimney services, and dryer vent cleaning to keep your San Diego home comfortable and safe year-round.",
    serviceHighlights: ["Coastal climate specialists", "Same-day appointments", "All San Diego neighborhoods"],
    nearbyAreas: ["La Jolla", "Pacific Beach", "Mission Valley", "Chula Vista", "Coronado"],
    lat: 32.7157,
    lng: -117.1611
  },
  {
    slug: "chula-vista",
    city: "Chula Vista",
    county: "San Diego County",
    phone: "424-424-1579",
    shortDescription: "Expert air duct and chimney services in Chula Vista.",
    fullDescription: "Chula Vista's diverse communities from established neighborhoods to newer developments all benefit from our professional HVAC and chimney services. We provide thorough cleaning and expert repairs throughout the South Bay.",
    serviceHighlights: ["South Bay specialists", "Bilingual service", "New and older homes"],
    nearbyAreas: ["National City", "Eastlake", "Bonita", "Spring Valley", "San Diego"],
    lat: 32.6401,
    lng: -117.0842
  },
  {
    slug: "oceanside",
    city: "Oceanside",
    county: "San Diego County",
    phone: "424-424-1579",
    shortDescription: "Coastal air duct and chimney services in Oceanside.",
    fullDescription: "Oceanside's beach proximity means homes need extra attention to combat salt air and moisture. Our experienced team provides specialized services to protect your HVAC system and ensure safe fireplace operation.",
    serviceHighlights: ["Coastal property experts", "Camp Pendleton area", "Fast response times"],
    nearbyAreas: ["Carlsbad", "Vista", "San Marcos", "Camp Pendleton", "Fallbrook"],
    lat: 33.1959,
    lng: -117.3795
  },
  {
    slug: "escondido",
    city: "Escondido",
    county: "San Diego County",
    phone: "424-424-1579",
    shortDescription: "Trusted air duct and chimney services in Escondido.",
    fullDescription: "Escondido's inland location and warm climate require HVAC systems that work efficiently. We provide comprehensive duct cleaning and chimney services to keep your home comfortable through the hot summers.",
    serviceHighlights: ["Inland San Diego experts", "Heat system specialists", "Same-day service"],
    nearbyAreas: ["San Marcos", "Valley Center", "Rancho Bernardo", "Poway", "Vista"],
    lat: 33.1192,
    lng: -117.0864
  },
  // Bay Area - San Francisco
  {
    slug: "san-francisco",
    city: "San Francisco",
    county: "San Francisco County",
    phone: "424-424-1579",
    shortDescription: "Professional air duct and chimney services in San Francisco.",
    fullDescription: "San Francisco's historic Victorian homes and modern condos alike need expert HVAC care. Our team specializes in the unique challenges of SF properties, from steep hills affecting chimney draft to foggy conditions impacting air quality.",
    serviceHighlights: ["Victorian home specialists", "All SF neighborhoods", "Historic property care"],
    nearbyAreas: ["Daly City", "South San Francisco", "Brisbane", "Colma", "Pacifica"],
    lat: 37.7749,
    lng: -122.4194
  },
  {
    slug: "oakland",
    city: "Oakland",
    county: "Alameda County",
    phone: "424-424-1579",
    shortDescription: "Expert air duct and chimney services in Oakland.",
    fullDescription: "Oakland's diverse architecture from Craftsman bungalows to modern high-rises requires specialized HVAC knowledge. We serve all Oakland neighborhoods with professional duct cleaning and chimney services.",
    serviceHighlights: ["East Bay specialists", "All property types", "Emergency service available"],
    nearbyAreas: ["Berkeley", "Alameda", "Emeryville", "Piedmont", "San Leandro"],
    lat: 37.8044,
    lng: -122.2712
  },
  {
    slug: "fremont",
    city: "Fremont",
    county: "Alameda County",
    phone: "424-424-1579",
    shortDescription: "Reliable air duct and chimney services in Fremont.",
    fullDescription: "Fremont families trust us for professional air duct cleaning and chimney maintenance. We serve the diverse communities of Fremont with quality workmanship and honest service.",
    serviceHighlights: ["South Bay specialists", "Tech corridor service", "Family-focused"],
    nearbyAreas: ["Newark", "Union City", "Milpitas", "Hayward", "San Jose"],
    lat: 37.5485,
    lng: -121.9886
  },
  // Bay Area - San Jose
  {
    slug: "san-jose",
    city: "San Jose",
    county: "Santa Clara County",
    phone: "424-424-1579",
    shortDescription: "Professional air duct and chimney services in San Jose.",
    fullDescription: "As the heart of Silicon Valley, San Jose homes range from historic properties to modern smart homes. Our team provides expert HVAC and chimney services for all property types throughout the South Bay's largest city.",
    serviceHighlights: ["Silicon Valley specialists", "Smart home compatible", "All neighborhoods served"],
    nearbyAreas: ["Santa Clara", "Sunnyvale", "Campbell", "Milpitas", "Cupertino"],
    lat: 37.3382,
    lng: -121.8863
  },
  {
    slug: "sunnyvale",
    city: "Sunnyvale",
    county: "Santa Clara County",
    phone: "424-424-1579",
    shortDescription: "Expert duct and chimney services for Sunnyvale homes.",
    fullDescription: "Sunnyvale's tech-savvy residents expect quality service. We provide professional air duct cleaning and chimney maintenance with attention to detail and modern scheduling convenience.",
    serviceHighlights: ["Tech-forward service", "Online booking", "Same-day available"],
    nearbyAreas: ["Mountain View", "Santa Clara", "Cupertino", "Los Altos", "San Jose"],
    lat: 37.3688,
    lng: -122.0363
  },
  {
    slug: "santa-clara",
    city: "Santa Clara",
    county: "Santa Clara County",
    phone: "424-424-1579",
    shortDescription: "Trusted air duct and chimney services in Santa Clara.",
    fullDescription: "Santa Clara homeowners and businesses rely on us for clean air ducts and safe chimneys. We provide comprehensive services for the diverse properties in the Mission City.",
    serviceHighlights: ["Residential and commercial", "Tech campus experience", "Flexible scheduling"],
    nearbyAreas: ["San Jose", "Sunnyvale", "Milpitas", "Cupertino", "Campbell"],
    lat: 37.3541,
    lng: -121.9552
  },
  // Sacramento Area
  {
    slug: "sacramento",
    city: "Sacramento",
    county: "Sacramento County",
    phone: "424-424-1579",
    shortDescription: "Professional air duct and chimney services in Sacramento.",
    fullDescription: "Sacramento's hot summers and mild winters create specific HVAC needs. Our team provides expert air duct cleaning and chimney services throughout the capital city, from Land Park to Natomas.",
    serviceHighlights: ["Capital region experts", "Heat system specialists", "All Sacramento areas"],
    nearbyAreas: ["Elk Grove", "Roseville", "Folsom", "Rancho Cordova", "West Sacramento"],
    lat: 38.5816,
    lng: -121.4944
  },
  {
    slug: "elk-grove",
    city: "Elk Grove",
    county: "Sacramento County",
    phone: "424-424-1579",
    shortDescription: "Reliable air duct and chimney services in Elk Grove.",
    fullDescription: "Elk Grove's growing community of families deserves the best in home comfort and safety. We provide thorough duct cleaning and chimney services for homes throughout Elk Grove.",
    serviceHighlights: ["Family community focus", "Newer home expertise", "Same-day service"],
    nearbyAreas: ["Sacramento", "Laguna", "Rancho Cordova", "Galt", "Vineyard"],
    lat: 38.4088,
    lng: -121.3716
  },
  {
    slug: "roseville",
    city: "Roseville",
    county: "Placer County",
    phone: "424-424-1579",
    shortDescription: "Expert air duct and chimney services in Roseville.",
    fullDescription: "Roseville's planned communities and newer developments benefit from our professional HVAC and chimney services. We help maintain optimal air quality and fireplace safety for Roseville families.",
    serviceHighlights: ["Placer County specialists", "New development experts", "Quality workmanship"],
    nearbyAreas: ["Rocklin", "Lincoln", "Granite Bay", "Citrus Heights", "Sacramento"],
    lat: 38.7521,
    lng: -121.2880
  },
  {
    slug: "folsom",
    city: "Folsom",
    county: "Sacramento County",
    phone: "424-424-1579",
    shortDescription: "Trusted air duct and chimney services in Folsom.",
    fullDescription: "Folsom residents appreciate our attention to detail and commitment to quality. From historic Old Folsom to newer communities, we provide expert duct and chimney services throughout the city.",
    serviceHighlights: ["Lake area specialists", "Historic and new homes", "Honest assessments"],
    nearbyAreas: ["El Dorado Hills", "Rancho Cordova", "Orangevale", "Fair Oaks", "Sacramento"],
    lat: 38.6780,
    lng: -121.1761
  },
  // Florida Cities
  {
    slug: "orlando",
    city: "Orlando",
    county: "FL",
    phone: "424-424-1579",
    shortDescription: "Professional air duct cleaning and HVAC services for Orlando homes and businesses.",
    fullDescription: "Orlando's hot, humid climate puts extra strain on your HVAC system year-round. With high humidity levels promoting mold and mildew growth in air ducts, regular professional cleaning is essential for healthy indoor air. Our certified technicians understand the unique challenges Central Florida homes face, from theme park area dust to hurricane season debris. We serve all Orlando neighborhoods with thorough duct cleaning, dryer vent maintenance, and chimney services.",
    serviceHighlights: ["Florida humidity specialists", "Mold prevention experts", "Same-day appointments"],
    nearbyAreas: ["Winter Park", "Kissimmee", "Lake Buena Vista", "Altamonte Springs", "Sanford", "Ocoee"],
    lat: 28.5383,
    lng: -81.3792
  },
  {
    slug: "tampa",
    city: "Tampa",
    county: "FL",
    phone: "424-424-1579",
    shortDescription: "Expert air duct and dryer vent cleaning services throughout Tampa Bay.",
    fullDescription: "Tampa Bay's subtropical climate creates the perfect conditions for dust, allergens, and mold to accumulate in your air ducts. Our professional team provides comprehensive air duct cleaning, dryer vent maintenance, and chimney services to keep your Tampa home safe and comfortable. From South Tampa to New Tampa, we understand the specific needs of Florida homes dealing with year-round AC usage, hurricane season, and coastal humidity.",
    serviceHighlights: ["Tampa Bay area experts", "Hurricane debris cleanup", "24/7 emergency service"],
    nearbyAreas: ["St. Petersburg", "Clearwater", "Brandon", "Temple Terrace", "Carrollwood", "Westchase"],
    lat: 27.9506,
    lng: -82.4572
  },
  {
    slug: "jacksonville",
    city: "Jacksonville",
    county: "FL",
    phone: "424-424-1579",
    shortDescription: "Trusted air duct cleaning and HVAC services for Jacksonville's largest metro area.",
    fullDescription: "As Florida's largest city by area, Jacksonville homes face diverse air quality challenges from coastal salt air to inland humidity. Our experienced technicians provide professional air duct cleaning, dryer vent services, and chimney maintenance throughout Duval County. Whether you're in the Beaches, Riverside, or the Southside, we deliver thorough service that improves indoor air quality and HVAC efficiency.",
    serviceHighlights: ["North Florida specialists", "Coastal and inland service", "Commercial services available"],
    nearbyAreas: ["Jacksonville Beach", "Orange Park", "St. Augustine", "Ponte Vedra", "Mandarin", "Arlington"],
    lat: 30.3322,
    lng: -81.6557
  },
  {
    slug: "miami",
    city: "Miami",
    county: "FL",
    phone: "424-424-1579",
    shortDescription: "Premium air duct cleaning services for Miami homes and commercial properties.",
    fullDescription: "Miami's tropical climate means your AC runs nearly year-round, accumulating dust, allergens, and moisture in your ductwork. Our professional air duct cleaning services help Miami homeowners combat mold growth, improve air quality, and reduce energy costs. From Coral Gables to Brickell, Coconut Grove to Kendall, we serve all Miami-Dade neighborhoods with expert HVAC cleaning and maintenance services.",
    serviceHighlights: ["Tropical climate experts", "Mold remediation specialists", "Bilingual technicians"],
    nearbyAreas: ["Coral Gables", "Miami Beach", "Kendall", "Hialeah", "Coconut Grove", "Doral"],
    lat: 25.7617,
    lng: -80.1918
  },
  {
    slug: "vero-beach",
    city: "Vero Beach",
    county: "FL",
    phone: "424-424-1579",
    shortDescription: "Professional air duct and dryer vent services for Vero Beach and the Treasure Coast.",
    fullDescription: "Vero Beach's beautiful coastal location comes with unique air quality challenges. Salt air, humidity, and seasonal allergens can all affect your home's HVAC system. Our team provides thorough air duct cleaning, dryer vent maintenance, and chimney services to Treasure Coast residents. We help Vero Beach homeowners maintain clean, healthy indoor air while protecting their HVAC investment.",
    serviceHighlights: ["Treasure Coast specialists", "Coastal property experts", "Senior-friendly service"],
    nearbyAreas: ["Sebastian", "Fort Pierce", "Indian River Shores", "Fellsmere", "Winter Beach"],
    lat: 27.6386,
    lng: -80.3973
  },
  {
    slug: "gainesville",
    city: "Gainesville",
    county: "FL",
    phone: "424-424-1579",
    shortDescription: "Reliable air duct cleaning services for Gainesville homes and university area properties.",
    fullDescription: "Gainesville's mix of historic homes, modern developments, and rental properties near the University of Florida all need professional HVAC maintenance. Our air duct cleaning services help Gainesville residents combat North Central Florida's humidity, pollen, and allergens. From downtown to the suburbs, we provide thorough duct cleaning and dryer vent services with flexible scheduling for busy homeowners and property managers.",
    serviceHighlights: ["University area service", "Property management rates", "Allergen reduction focus"],
    nearbyAreas: ["Newberry", "Alachua", "High Springs", "Archer", "Micanopy", "Hawthorne"],
    lat: 29.6516,
    lng: -82.3248
  },
  {
    slug: "sarasota",
    city: "Sarasota",
    county: "FL",
    phone: "424-424-1579",
    shortDescription: "Expert air duct and chimney services for Sarasota's discerning homeowners.",
    fullDescription: "Sarasota homeowners expect quality, and our professional air duct cleaning services deliver. From luxury waterfront properties to charming downtown bungalows, we understand the specific needs of Sarasota homes. Florida's humidity and year-round AC usage mean regular duct cleaning is essential for air quality and energy efficiency. Trust our certified technicians to keep your Sarasota home comfortable and healthy.",
    serviceHighlights: ["Gulf Coast specialists", "Luxury home experience", "Detailed service reports"],
    nearbyAreas: ["Siesta Key", "Longboat Key", "Bradenton", "Lakewood Ranch", "Venice", "Osprey"],
    lat: 27.3364,
    lng: -82.5307
  },
  {
    slug: "palm-coast",
    city: "Palm Coast",
    county: "FL",
    phone: "424-424-1579",
    shortDescription: "Professional air duct cleaning for Palm Coast and Flagler County homes.",
    fullDescription: "Palm Coast's planned communities and beautiful natural surroundings deserve the best in home maintenance. Our air duct cleaning services help Palm Coast homeowners maintain healthy indoor air quality despite Florida's humidity and allergens. From the canals to the hammocks, we provide thorough HVAC cleaning, dryer vent maintenance, and chimney services throughout Flagler County.",
    serviceHighlights: ["Flagler County experts", "HOA experience", "Flexible scheduling"],
    nearbyAreas: ["Flagler Beach", "Bunnell", "Ormond Beach", "St. Augustine", "Daytona Beach"],
    lat: 29.5846,
    lng: -81.2078
  },
  {
    slug: "venice",
    city: "Venice",
    county: "FL",
    phone: "424-424-1579",
    shortDescription: "Trusted air duct and dryer vent services for Venice and South Sarasota County.",
    fullDescription: "Venice's charming downtown, beautiful beaches, and active retirement communities all rely on efficient HVAC systems. Our professional air duct cleaning helps Venice homeowners maintain excellent indoor air quality while reducing energy costs. We understand the unique needs of Southwest Florida homes, from managing humidity to removing allergens, and provide thorough service with attention to detail.",
    serviceHighlights: ["Southwest Florida specialists", "Active adult community experts", "Thorough inspections"],
    nearbyAreas: ["Nokomis", "North Port", "Englewood", "Sarasota", "Port Charlotte"],
    lat: 27.0998,
    lng: -82.4543
  }
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug);
}

export function getCitiesByCounty(county: string): City[] {
  return cities.filter(city => city.county === county);
}

export const counties = [
  // California
  "Los Angeles County",
  "Orange County",
  "Riverside County",
  "San Bernardino County",
  "San Diego County",
  "San Francisco County",
  "Alameda County",
  "Santa Clara County",
  "Sacramento County",
  "Placer County",
  // Florida
  "FL"
];
