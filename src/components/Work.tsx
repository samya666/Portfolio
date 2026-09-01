"use client";

import { useRef, useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { clips, type Clip } from "@/lib/content";

type View = "column" | "list";

/** Muted hover preview shared by both views. */
function useHoverPreview() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    void v.play().catch(() => {});
  };

  const stop = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return { videoRef, play, stop };
}

// ---------------------------------------------------------------------------
// [COLUMN] — the broken editorial grid, each clip placed by its own className.
// ---------------------------------------------------------------------------

function ColumnTile({
  clip,
  index,
  onSelect,
}: {
  clip: Clip;
  index: number;
  onSelect: (c: Clip) => void;
}) {
  const { videoRef, play, stop } = useHoverPreview();

  return (
    <figure>
      <button
        type="button"
        onClick={() => onSelect(clip)}
        onMouseEnter={play}
        onMouseLeave={stop}
        onFocus={play}
        onBlur={stop}
        aria-label={`Play ${clip.title}, ${clip.year}`}
        className="group block w-full cursor-pointer text-left"
      >
        <div
          className="relative overflow-hidden bg-carbon ring-1 ring-ash"
          style={{ aspectRatio: `${clip.w} / ${clip.h}` }}
        >
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
            src={clip.src}
            poster={clip.poster}
            muted
            loop
            playsInline
            preload="none"
          />

          {/* legibility gradient + hover wash */}
          <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

          <span className="label absolute left-3 top-3 text-bone/70">
            {String(index + 1).padStart(3, "0")}
          </span>

          {/* play affordance — grows in on hover */}
          <span className="pointer-events-none absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 scale-90 items-center justify-center rounded-full border border-bone/70 bg-void/30 text-bone opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M4 2.5v11l9-5.5-9-5.5z" />
            </svg>
          </span>

          <figcaption className="absolute inset-x-0 bottom-0 translate-y-1 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="label text-bone/85">{clip.role}</span>
          </figcaption>
        </div>
      </button>

      <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-ash pt-3">
        <h3 className="label text-bone">{clip.title}</h3>
        <span className="label shrink-0 text-smoke">{clip.year}</span>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {clip.tags.map((t) => (
          <span key={t} className="label border border-ash px-2 py-1 text-smoke">
            {t}
          </span>
        ))}
      </div>
    </figure>
  );
}

// ---------------------------------------------------------------------------
// [LIST] — a numbered index. Hovering a row peeks the clip on the right.
// ---------------------------------------------------------------------------

function ListRow({
  clip,
  index,
  onSelect,
}: {
  clip: Clip;
  index: number;
  onSelect: (c: Clip) => void;
}) {
  const { videoRef, play, stop } = useHoverPreview();

  return (
    <button
      type="button"
      onClick={() => onSelect(clip)}
      onMouseEnter={play}
      onMouseLeave={stop}
      onFocus={play}
      onBlur={stop}
      aria-label={`Play ${clip.title}, ${clip.year}`}
      className="group grid w-full cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-4 border-t border-ash py-5 text-left transition-colors hover:bg-carbon md:grid-cols-[4rem_1fr_1fr_6rem_5rem] md:gap-6 md:py-6"
    >
      <span className="label text-phosphor">{String(index + 1).padStart(3, "0")}</span>

      <span className="display text-lg text-bone transition-colors group-hover:text-phosphor md:text-2xl">
        {clip.title}
      </span>

      <span className="label hidden text-smoke md:block">{clip.role}</span>

      <span className="label hidden text-smoke md:block">{clip.tags[0]}</span>

      {/* Peek thumbnail — replaces the year cell on hover at md and up. */}
      <span className="relative ml-auto block h-10 w-16 shrink-0 overflow-hidden bg-carbon ring-1 ring-ash md:h-12 md:w-20">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover opacity-45 transition-opacity duration-500 group-hover:opacity-100"
          src={clip.src}
          poster={clip.poster}
          muted
          loop
          playsInline
          preload="none"
        />
      </span>
    </button>
  );
}

// ---------------------------------------------------------------------------

export default function Work({ onSelectClip }: { onSelectClip: (clip: Clip) => void }) {
  const [view, setView] = useState<View>("column");

  return (
    <section id="work" className="scroll-mt-20 px-6 py-24 md:px-12 md:py-32">
      <SectionHeading
        index="003"
        kicker="A few projects I've worked on recently"
        title="Selected works"
      />

      {/* View toggle */}
      <Reveal className="mt-10 mb-14 flex items-center justify-between gap-6 border-t border-ash pt-5">
        <span className="label text-smoke">
          {String(clips.length).padStart(2, "0")} films / motion
        </span>

        <div role="group" aria-label="Change layout" className="flex items-center gap-2">
          {(["column", "list"] as View[]).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setView(v)}
              aria-pressed={view === v}
              className={`label border px-3 py-2 transition-colors ${
                view === v
                  ? "border-phosphor text-phosphor"
                  : "border-ash text-smoke hover:border-bone/40 hover:text-bone"
              }`}
            >
              [{v}]
            </button>
          ))}
        </div>
      </Reveal>

      {view === "column" ? (
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-12 md:gap-x-12 md:gap-y-24">
          {clips.map((c, i) => (
            <Reveal key={c.id} className={c.className} delay={(i % 3) * 90}>
              <ColumnTile clip={c} index={i} onSelect={onSelectClip} />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="border-b border-ash">
          {clips.map((c, i) => (
            <ListRow key={c.id} clip={c} index={i} onSelect={onSelectClip} />
          ))}
        </div>
      )}
    </section>
  );
}
