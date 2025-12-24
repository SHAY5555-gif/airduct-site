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
      // Legacy /areas/ URLs redirect to /service-areas/
      {
        source: "/areas/los-angeles",
        destination: "/service-areas/los-angeles",
        permanent: true,
      },
      {
        source: "/areas/orange-county",
        destination: "/service-areas/anaheim",
        permanent: true,
      },
      {
        source: "/areas/riverside",
        destination: "/service-areas/riverside",
        permanent: true,
      },
      {
        source: "/areas/san-bernardino",
        destination: "/service-areas/san-bernardino",
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
