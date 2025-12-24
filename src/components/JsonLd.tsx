export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "West Coast Air Duct and Chimney Services",
    "description": "Professional air duct cleaning, duct repair, dryer vent cleaning, and chimney services across Southern California. Same-day appointments and 24/7 emergency service available.",
    "telephone": "424-424-1579",
    "url": "https://westcoastairduct.com",
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
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const SITE_URL = "https://westcoastairductandchimney.com";

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
