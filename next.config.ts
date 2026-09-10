import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/artwork",
        has: [{ type: "query", key: "tab", value: "visual-design" }],
        destination: "/ai-practice?tab=visual-design",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
