import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? "/Portfolio" : "");

const nextConfig: NextConfig = {
  // Emit a fully static site to `out/` for GitHub Pages (no Node server).
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,

  // The default image optimizer needs a server, so disable it for the export.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
