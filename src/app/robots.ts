import { MetadataRoute } from "next";

const SITE_URL = "https://airductchimeny.com";

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
          "/*?*msclkid=",
          // Block search and filter pages (duplicate content)
          "/*?*sort=",
          "/*?*filter=",
          "/*?*page=",
          "/*?*session=",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
