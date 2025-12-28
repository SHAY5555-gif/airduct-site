import { MetadataRoute } from "next";
import { cities } from "@/data/cities";
import { floridaCities } from "@/data/serviceCategories";

const SITE_URL = "https://airductchimeny.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/service-areas`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/membership`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/inspections`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/second-opinion`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/resources`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Service pages
  const services = [
    "air-duct-cleaning",
    "duct-repair",
    "dryer-vent-cleaning",
    "system-inspections",
    "chimney-installation",
    "chimney-repairs",
    "chimney-cleaning",
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/services/${service}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Service category pages
  const serviceCategoryPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/air-duct`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/chimney`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
  ];

  // Florida cities - Air Duct service pages
  const floridaCityData = cities.filter(city => floridaCities.includes(city.slug));

  const airDuctCityPages: MetadataRoute.Sitemap = floridaCityData.map((city) => ({
    url: `${SITE_URL}/air-duct/${city.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Florida cities - Chimney service pages
  const chimneyCityPages: MetadataRoute.Sitemap = floridaCityData.map((city) => ({
    url: `${SITE_URL}/chimney/${city.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...serviceCategoryPages, ...airDuctCityPages, ...chimneyCityPages];
}
