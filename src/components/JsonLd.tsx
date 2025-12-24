const SITE_URL = "https://westcoastairductandchimney.com";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#organization`,
    "name": "West Coast Air Duct and Chimney Services",
    "url": SITE_URL,
    "telephone": "424-424-1579",
    "description": "Professional air duct cleaning, duct repair, dryer vent cleaning, and chimney services across Southern California. Same-day appointments and 24/7 emergency service available.",
    "foundingDate": "2015",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      {
        "@type": "County",
        "name": "Los Angeles County",
        "containedInPlace": { "@type": "State", "name": "California" }
      },
      {
        "@type": "County",
        "name": "Orange County",
        "containedInPlace": { "@type": "State", "name": "California" }
      },
      {
        "@type": "County",
        "name": "Riverside County",
        "containedInPlace": { "@type": "State", "name": "California" }
      },
      {
        "@type": "County",
        "name": "San Bernardino County",
        "containedInPlace": { "@type": "State", "name": "California" }
      }
    ],
    "knowsAbout": [
      "Air duct cleaning",
      "HVAC duct repair",
      "Dryer vent cleaning",
      "Chimney cleaning",
      "Chimney repair",
      "Chimney installation",
      "HVAC system inspections"
    ],
    "slogan": "Air Duct & Chimney Services You Can Trust",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Air Duct & Chimney Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Air Duct Cleaning" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Duct Repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dryer Vent Cleaning" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HVAC System Inspections" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Chimney Installation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Chimney Repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Chimney Cleaning" } }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "5",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "West Coast Air Duct and Chimney Services",
    "description": "Professional air duct cleaning, duct repair, dryer vent cleaning, and chimney services across Southern California. Same-day appointments and 24/7 emergency service available.",
    "telephone": "424-424-1579",
    "url": "https://westcoastairductandchimney.com",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      {
        "@type": "County",
        "name": "Los Angeles County",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "County",
        "name": "Orange County",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "County",
        "name": "Riverside County",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "County",
        "name": "San Bernardino County",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Air Duct & Chimney Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Air Duct Cleaning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Duct Repair"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dryer Vent Cleaning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "System Inspections"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chimney Installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chimney Repairs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chimney Cleaning"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "5",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Maria H." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "Amazing service! They cleaned our air ducts and the difference in air quality was noticeable immediately. Very professional team."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "James T." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "Had them clean our dryer vent after we noticed our dryer taking forever. They found a huge lint buildup - glad we called before it became a fire hazard!"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sarah K." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "Great chimney inspection and cleaning service. They explained everything and showed me pictures of the work. Very thorough."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Michael R." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "Honest pricing and quality work. No upselling or surprise charges. Would definitely recommend to anyone in the area."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Linda P." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "We've used them twice now - once for duct cleaning and once for chimney repair. Both times excellent service and results."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.name,
        "item": `${SITE_URL}${item.url}`
      }))
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const BUSINESS_INFO = {
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE_URL}/#organization`,
  "name": "West Coast Air Duct and Chimney Services",
  "telephone": "424-424-1579",
  "url": SITE_URL
};

const AREA_SERVED = [
  {
    "@type": "County",
    "name": "Los Angeles County",
    "containedInPlace": { "@type": "State", "name": "California" }
  },
  {
    "@type": "County",
    "name": "Orange County",
    "containedInPlace": { "@type": "State", "name": "California" }
  },
  {
    "@type": "County",
    "name": "Riverside County",
    "containedInPlace": { "@type": "State", "name": "California" }
  },
  {
    "@type": "County",
    "name": "San Bernardino County",
    "containedInPlace": { "@type": "State", "name": "California" }
  }
];

interface ServiceSchemaProps {
  serviceName: string;
  serviceType: string;
  description: string;
  url: string;
  image?: string;
}

export function ServiceSchema({ serviceName, serviceType, description, url, image }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${url}#service`,
    "name": serviceName,
    "serviceType": serviceType,
    "description": description,
    "url": `${SITE_URL}${url}`,
    "provider": BUSINESS_INFO,
    "areaServed": AREA_SERVED,
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `${SITE_URL}${url}`,
      "servicePhone": "424-424-1579",
      "availableLanguage": ["English", "Spanish"]
    },
    ...(image && {
      "image": `${SITE_URL}${image}`
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What areas do you service in Southern California?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide services throughout Los Angeles County, Orange County, Riverside County, and San Bernardino County. This includes Los Angeles, Long Beach, Santa Monica, Pasadena, Glendale, Burbank, Anaheim, Irvine, and all surrounding communities."
        }
      },
      {
        "@type": "Question",
        "name": "Are your technicians licensed and insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our technicians are fully licensed and insured. We carry comprehensive liability insurance to protect you and your property during service. We've been serving Southern California since 2015 with a commitment to professional, quality work."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer free estimates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We provide free estimates for all our services. Call us at 424-424-1579 or fill out our online form, and we'll give you a clear, upfront quote with no hidden fees or surprise charges."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I clean my air ducts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend cleaning air ducts every 3-5 years for most homes. However, you may need more frequent cleaning if you have pets, allergies, smokers in the home, recent renovations, or notice excessive dust or musty odors."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know if my dryer vent needs cleaning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Warning signs include: clothes taking longer than one cycle to dry, the dryer feeling very hot, a burning smell when running, excessive lint around the dryer, and the vent hood flap not opening properly. We recommend annual dryer vent cleaning for fire prevention."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer same-day or emergency service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer same-day appointments when available and 24/7 emergency service for urgent situations like chimney fires or safety concerns. Call 424-424-1579 to check availability."
        }
      },
      {
        "@type": "Question",
        "name": "What is your workmanship guarantee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We stand behind our work with a 30-day workmanship guarantee. If you're not satisfied with our service, we'll come back and make it right at no additional charge."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide before and after photos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we document every job with time-stamped before and after photos showing the condition of your ducts, vents, or chimney. This ensures transparency and lets you see exactly what we cleaned and the results achieved."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with both residential and commercial properties?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we serve both residential homes and commercial businesses across Southern California. Our team has experience with all types and sizes of HVAC systems and chimneys."
        }
      },
      {
        "@type": "Question",
        "name": "How much does air duct cleaning cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most single-system homes in Southern California pay $300-$700 for a complete HVAC duct cleaning, depending on home size, vent count, and duct condition. We provide detailed quotes upfront with no hidden fees. Call for a free estimate."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
