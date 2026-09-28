import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about-amol-kadam", destination: "/about", permanent: true },
      { source: "/case-studies", destination: "/work", permanent: true },
      { source: "/case-studies/:slug", destination: "/work/:slug", permanent: true },
      { source: "/insights", destination: "/blog", permanent: true },
      { source: "/insights/:slug", destination: "/blog/:slug", permanent: true },
      { source: "/services/analytics-tracking", destination: "/services/analytics", permanent: true },
      { source: "/services/landing-pages", destination: "/services/web-development", permanent: true },
    ];
  },
};

export default nextConfig;
