import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel deploy: standalone output for optimal performance
  output: "standalone",

  // Allow external images (Unsplash etc.)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    unoptimized: true,
  },

  // Suppress build warnings
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
