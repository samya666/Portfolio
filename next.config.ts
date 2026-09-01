import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site to `out/` for GitHub Pages (no Node server).
  output: "export",

  // The default image optimizer needs a server, so disable it for the export.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
