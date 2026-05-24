import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Infrabau",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
