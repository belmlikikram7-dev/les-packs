import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["localhost", "127.0.0.1", "192.168.11.*", "192.168.3.*", "192.168.*"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
