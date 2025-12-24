import { MetadataRoute } from "next";

const SITE_URL = "https://westcoastairductandchimney.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/private/",
          // Block URL parameters that could cause duplicate content
          "/*?*utm_",
          "/*?*ref=",
          "/*?*source=",
          "/*?*fbclid=",
          "/*?*gclid=",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
