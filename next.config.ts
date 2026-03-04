import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bc-bangladesh.com",
      },
    ],
  },
};

export default nextConfig;
