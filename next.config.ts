import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    qualities: [25, 50, 75, 85, 90, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'icons.veryicon.com',
      },
    ],
  },
};

export default nextConfig;
