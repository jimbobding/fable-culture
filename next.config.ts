import { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      // your remote patterns here
    ],
  },
  // experimental: {
  //   appDir: true, // <-- remove this line
  // },
} satisfies Partial<NextConfig>;

export default nextConfig;
