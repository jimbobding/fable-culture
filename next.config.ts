import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["img.youtube.com"],
  },
} satisfies Partial<NextConfig>;

export default nextConfig;
