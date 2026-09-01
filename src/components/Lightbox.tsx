"use client";

import { useEffect, useRef, useState } from "react";
import { type Clip } from "@/lib/content";

export default function Lightbox({
  clips,
  index,
  onIndex,
  onClose,
}: {
  clips: Clip[];
  index: number;
  onIndex: (next: number) => void;
  onClose: () => void;
}) {
  const clip = clips[index];
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(false);

  const go = (delta: number) => onIndex((index + delta + clips.length) % clips.length);

  // Lock body scroll while mounted; restore on close.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  // Keyboard: Esc closes, arrows navigate the reel.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, clips.length]);

  // Autoplay with sound after the opening click (a user gesture); if the
  // browser refuses, fall back to a muted autoplay so something always moves.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    let cancelled = false;
    (async () => {
      try {
        v.muted = false;
        await v.play();
        if (!cancelled) setMuted(false);
      } catch {
        v.muted = true;
        if (!cancelled) setMuted(true);
        try {
          await v.play();
        } catch {
          /* ignore */
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [index]);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted) void v.play().catch(() => {});
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${clip.title}, ${clip.year}`}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-void/92 p-4 backdrop-blur-md animate-[lb-fade_220ms_ease-out] md:p-10"
    >
      {/* top bar */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 py-5 md:px-8">
        <span className="label tabular-nums text-phosphor">
          {String(index + 1).padStart(2, "0")} / {String(clips.length).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleMute();
            }}
            className="label text-smoke transition-colors hover:text-phosphor"
          >
            [{muted ? "Unmute" : "Mute"}]
          </button>
          <button
            type="button"
            onClick={onClose}
            className="label text-smoke transition-colors hover:text-phosphor"
          >
            [Close &middot; Esc]
          </button>
        </div>
      </div>

      {/* prev / next */}
      <button
        type="button"
        aria-label="Previous"
        onClick={(e) => {
          e.stopPropagation();
          go(-1);
        }}
        className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ash text-smoke transition-colors hover:border-phosphor hover:text-phosphor md:left-6"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M10 3 5 8l5 5" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={(e) => {
          e.stopPropagation();
          go(1);
        }}
        className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ash text-smoke transition-colors hover:border-phosphor hover:text-phosphor md:right-6"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M6 3l5 5-5 5" />
        </svg>
      </button>

      <figure
        onClick={(e) => e.stopPropagation()}
        className="flex max-w-[94vw] flex-col items-center animate-[lb-rise_300ms_cubic-bezier(0.2,0.7,0.2,1)]"
      >
        <video
          key={clip.id}
          ref={videoRef}
          src={clip.src}
          poster={clip.poster}
          controls
          loop
          playsInline
          className="max-h-[80vh] max-w-[94vw] bg-carbon object-contain shadow-2xl ring-1 ring-ash"
          style={{ aspectRatio: `${clip.w} / ${clip.h}` }}
        />
        <figcaption className="mt-5 flex w-full flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <div className="flex items-baseline gap-4">
            <h2 className="display text-2xl text-bone md:text-3xl">{clip.title}</h2>
            <span className="label text-phosphor">{clip.year}</span>
          </div>
          <div className="label text-right text-smoke">{clip.role}</div>
        </figcaption>
      </figure>
    </div>
  );
}
