import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
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
