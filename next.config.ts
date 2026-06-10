import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF where supported (smaller than WebP), fall back to WebP.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
