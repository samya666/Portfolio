"use client";

import { useRef, useState, type ReactNode } from "react";
import { assetPath } from "@/lib/basePath";

/**
 * A vintage CRT television playing a looping video behind its screen.
 *
 * `public/tv/vintage-tv-frame.png` is a 3024x1636 photograph of a CRT with the
 * screen knocked out to transparency. The screen cut-out runs from x 0..2114,
 * y 230..1635 — so the screen runs off the asset's LEFT and BOTTOM edges,
 * while the top bezel and the right-hand speaker grille and dials are present.
 *
 * Asset pixels map 1:1 onto container percentages because the outer container
 * is locked to the asset's aspect ratio (3024/1636).
 */
const FRAME_ASPECT = "3024 / 1636";

export default function CRT({
  src,
  poster,
  children,
}: {
  src: string;
  poster: string;
  children?: ReactNode;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    v.play().catch(() => {});
  };

  return (
    <div
      className="relative w-full"
      style={{ aspectRatio: FRAME_ASPECT }}
    >
      {/* Video behind the bezel's cut-out */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={src}
        poster={poster}
        loop
        muted
        playsInline
        autoPlay
        preload="auto"
        style={{
          // The screen is the left 70% of the asset, vertically 14%..100%.
          clipPath: "polygon(0% 14%, 70% 14%, 70% 100%, 0% 100%)",
        }}
        aria-label="Showreel playing on a vintage television"
      />

      {/* CRT scanline overlay, clipped to the same screen area */}
      <div
        aria-hidden="true"
        className="crt-scanlines pointer-events-none absolute inset-0 opacity-60"
        style={{
          clipPath: "polygon(0% 14%, 70% 14%, 70% 100%, 0% 100%)",
        }}
      />

      {/* TV frame sits on top — alpha cut-out reveals the video behind */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={assetPath("/tv/vintage-tv-frame.png")}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 h-full w-full select-none"
        draggable={false}
      />

      {/* Sound control, parked on the right-hand dial panel */}
      <button
        type="button"
        onClick={toggleMute}
        aria-pressed={!muted}
        className="absolute z-20 flex items-center gap-2 border border-bone/25 bg-void/70 px-3 py-2 text-xs backdrop-blur-sm transition-colors hover:border-phosphor hover:bg-void/90"
        style={{
          right: "3%",
          bottom: "8%",
          fontFamily: "var(--font-mono)",
        }}
      >
        <span
          className={`inline-block h-1.5 w-1.5 rounded-full transition-colors ${
            muted ? "bg-bone/30" : "bg-phosphor"
          }`}
        />
        <span className="text-bone/80">{muted ? "Sound off" : "Sound on"}</span>
      </button>

      {/* Overlay content (the name, etc.) sits on the screen */}
      {children}
    </div>
  );
}
