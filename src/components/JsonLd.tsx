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
        "name": "How often should I clean my air ducts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend cleaning your air ducts every 3-5 years. However, you may need more frequent cleaning if you have pets, allergies, recent home renovations, or notice excessive dust in your home."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know if my dryer vent is clogged?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Signs of a clogged dryer vent include: clothes taking longer than one cycle to dry, the dryer feeling very hot to the touch, a burning smell when the dryer runs, excessive lint around the dryer, and the vent hood flap not opening properly."
        }
      },
      {
        "@type": "Question",
        "name": "Do you service all of Los Angeles County?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We provide services throughout Los Angeles County, including Los Angeles, Long Beach, Santa Monica, Pasadena, Glendale, Burbank, and all surrounding areas. We also serve Orange, Riverside, and San Bernardino Counties."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer chimney cleaning and inspection in one visit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we can perform both chimney cleaning and inspection in a single visit. In fact, we always inspect the chimney before cleaning to identify any issues that need attention."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a typical air duct cleaning take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A typical residential air duct cleaning takes 2-4 hours, depending on the size of your home and the condition of your ductwork. Larger homes or heavily contaminated systems may take longer."
        }
      },
      {
        "@type": "Question",
        "name": "Are your technicians licensed and insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our technicians are fully licensed and insured. We carry comprehensive liability insurance to protect you and your property during our service."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer free estimates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We provide free estimates for all our services. Call us at 424-424-1579 or fill out our online form, and we'll give you a clear, upfront quote with no hidden fees."
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
