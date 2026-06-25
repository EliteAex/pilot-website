import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/audit/:slug",
        destination: "https://leads-crm-rouge.vercel.app/audit/:slug",
      },
    ];
  },
};

export default nextConfig;
