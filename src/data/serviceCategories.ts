export interface ServiceCategory {
  slug: string;
  name: string;
  title: string;
  description: string;
  shortDescription: string;
  services: {
    slug: string;
    name: string;
    description: string;
    icon: string;
  }[];
  benefits: string[];
  icon: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "air-duct",
    name: "Air Duct Services",
    title: "Professional Air Duct Cleaning & HVAC Services",
    description: "Comprehensive air duct cleaning, HVAC maintenance, and dryer vent services to improve your indoor air quality and system efficiency. Our certified technicians use advanced equipment to remove dust, allergens, and debris from your entire duct system.",
    shortDescription: "Expert air duct cleaning and HVAC services for healthier indoor air.",
    icon: "wind",
    services: [
      {
        slug: "air-duct-cleaning",
        name: "Air Duct Cleaning",
        description: "Thorough cleaning of your entire duct system to remove dust, allergens, and contaminants",
        icon: "wind"
      },
      {
        slug: "duct-repair",
        name: "Duct Repair & Sealing",
        description: "Professional repair and sealing of leaks to improve HVAC efficiency",
        icon: "wrench"
      },
      {
        slug: "dryer-vent-cleaning",
        name: "Dryer Vent Cleaning",
        description: "Remove lint buildup and reduce fire hazards with professional dryer vent cleaning",
        icon: "fire"
      },
      {
        slug: "system-inspections",
        name: "HVAC System Inspections",
        description: "Comprehensive inspection of your HVAC system to identify issues and optimize performance",
        icon: "search"
      }
    ],
    benefits: [
      "Improve indoor air quality and reduce allergens",
      "Increase HVAC system efficiency and reduce energy costs",
      "Extend the lifespan of your heating and cooling equipment",
      "Remove dust, mold, and debris from your ductwork",
      "Reduce fire hazards from dryer vent buildup",
      "Same-day appointments available"
    ]
  },
  {
    slug: "chimney",
    name: "Chimney Services",
    title: "Expert Chimney Cleaning, Repair & Installation",
    description: "Professional chimney sweeping, repair, and installation services to keep your fireplace safe and efficient. Our certified chimney specialists provide comprehensive inspections, cleaning, and maintenance for all types of chimneys and fireplaces.",
    shortDescription: "Complete chimney services from cleaning to repair and installation.",
    icon: "home",
    services: [
      {
        slug: "chimney-cleaning",
        name: "Chimney Sweeping & Cleaning",
        description: "Professional chimney sweeping to remove creosote, soot, and blockages",
        icon: "broom"
      },
      {
        slug: "chimney-repairs",
        name: "Chimney Repair",
        description: "Expert repair of chimney crowns, flashing, liners, and structural issues",
        icon: "hammer"
      },
      {
        slug: "chimney-installation",
        name: "Chimney Installation",
        description: "New chimney installation and fireplace setup for homes and businesses",
        icon: "building"
      }
    ],
    benefits: [
      "Prevent dangerous chimney fires and carbon monoxide poisoning",
      "Remove creosote buildup and improve fireplace efficiency",
      "Extend the life of your chimney and fireplace",
      "Ensure proper ventilation and draft",
      "Comply with insurance and safety requirements",
      "24/7 emergency chimney service available"
    ]
  }
];

export function getServiceCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find(category => category.slug === slug);
}

export const floridaCities = [
  "orlando",
  "tampa",
  "jacksonville",
  "miami",
  "vero-beach",
  "gainesville",
  "sarasota",
  "palm-coast",
  "venice"
];
