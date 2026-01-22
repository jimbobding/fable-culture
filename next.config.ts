import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["img.youtube.com"],
  },
  experimental: {
    appDir: true, // runtime works
  },
} satisfies Partial<NextConfig>;

export default nextConfig;
