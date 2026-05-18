import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Pin Turbopack to this directory; the repo root contains another lockfile
  // (marketing-screenshots/) and Next would otherwise pick the wrong one.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
