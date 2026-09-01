import type { Metadata } from "next";
import { Geist, Archivo, Space_Mono } from "next/font/google";
import "./globals.css";
import NoiseOverlay from "@/components/NoiseOverlay";

// Clean grotesque for body copy.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Heavy grotesque for the oversized display headings. Variable weight, so the
// 900 used by `.display` costs no extra request.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "800", "900"],
});

// Tactile, analog monospace for labels + technical metadata.
const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Samya Bhattacharjee — Visual Artist",
  description:
    "Visual artist, animator, and post-production specialist. Concept art, 3D lighting & texturing, compositing, and AI-assisted motion — selected works and reel.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${archivo.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-void text-bone">
        <NoiseOverlay />
        {children}
      </body>
    </html>
  );
}
