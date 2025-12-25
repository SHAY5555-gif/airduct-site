import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Security headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // Redirects for legacy URLs and common variations
  async redirects() {
    return [
      // Redirect old /service-areas/[city] URLs to new /[city] URLs
      {
        source: "/service-areas/:slug",
        destination: "/:slug",
        permanent: true,
      },
      // Legacy /areas/ URLs redirect to new city URLs
      {
        source: "/areas/los-angeles",
        destination: "/los-angeles",
        permanent: true,
      },
      {
        source: "/areas/orange-county",
        destination: "/anaheim",
        permanent: true,
      },
      {
        source: "/areas/riverside",
        destination: "/riverside",
        permanent: true,
      },
      {
        source: "/areas/san-bernardino",
        destination: "/san-bernardino",
        permanent: true,
      },
      // Common URL variations
      {
        source: "/services",
        destination: "/#services",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
