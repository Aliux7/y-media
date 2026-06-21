import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    const origin = process.env.NEXT_PUBLIC_SITE_URL ?? "https://y-media.vercel.app/";
    return [
      {
        source: "/assets/fonts/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: origin },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
