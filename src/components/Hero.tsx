"use client";

import { useEffect, useRef, useState } from "react";
import { IDENTITY } from "@/lib/content";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [timeStr, setTimeStr] = useState("00:00 IST");

  // Live time ticker, anchored to the artist's timezone.
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const fmt = new Intl.DateTimeFormat("en-GB", {
        timeZone: IDENTITY.timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTimeStr(`${fmt.format(now)} ${IDENTITY.city}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  // Ensure video plays smoothly
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  // Two-line display name — see IDENTITY.nameFragments in src/lib/content.ts.
  // Both lines share the same display face; only weight + shadow separates them.
  const [lineOne, lineTwo] = IDENTITY.nameFragments;

  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden px-6 py-6 sm:px-10 sm:py-8 md:px-14 md:py-8 selection:bg-phosphor selection:text-void"
      style={{
        // Faded parchment base with a warm sunburst wash at the top and a
        // grunge-brown inset shadow — like an old printed broadside.
        backgroundColor: "#f4efe6",
        backgroundImage: `
          radial-gradient(120% 80% at 50% 0%, rgba(217, 108, 74, 0.20) 0%, rgba(217, 108, 74, 0.00) 55%),
          radial-gradient(60% 50% at 50% 100%, rgba(236, 167, 44, 0.12) 0%, rgba(236, 167, 44, 0.00) 60%),
          repeating-linear-gradient(
            to right,
            rgba(62, 44, 35, 0) 0px,
            rgba(62, 44, 35, 0) 3px,
            rgba(62, 44, 35, 0.025) 3px,
            rgba(62, 44, 35, 0.025) 4px
          )
        `,
        boxShadow:
          "inset 0 0 120px 30px rgba(62, 44, 35, 0.12), inset 0 0 60px 15px rgba(62, 44, 35, 0.10)",
      }}
    >
      {/* ---- Vintage Sunburst Edge Glows ---- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ash/20 via-ash/5 to-transparent blur-xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ash/15 via-ash/5 to-transparent blur-xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-ash/15 via-ash/5 to-transparent blur-xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-ash/15 via-ash/5 to-transparent blur-xl"
      />

      {/* A thin ink-brown rule that frames the section — the "plate" edge. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 sm:inset-4 md:inset-5 rounded-sm border border-ash/30"
      />

      {/* ---- Top Navigation Bar ---- */}
      <header className="relative z-30 flex items-center justify-between w-full pt-1 sm:pt-2">
        {/* Logo (Top-Left) — name in two lines, single display face */}
        <a
          href="#top"
          className="group flex flex-col leading-[0.72] select-none transition-opacity hover:opacity-80"
          aria-label={`${IDENTITY.name} Home`}
        >
          <span className="font-sans text-[20px] sm:text-[23px] font-extrabold uppercase tracking-[-0.03em] text-amber">
            {lineOne.toUpperCase()}
          </span>
          <span className="font-sans text-[20px] sm:text-[23px] font-extrabold uppercase tracking-[-0.03em] text-amber/85 -mt-0.5">
            {lineTwo.toUpperCase()}
          </span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden sm:flex items-center gap-6 md:gap-10">
          <a
            href="#work"
            className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.22em] text-bone/80 font-semibold transition-colors hover:text-phosphor"
          >
            + WORK
          </a>
          <a
            href="#about"
            className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.22em] text-bone/80 font-semibold transition-colors hover:text-phosphor"
          >
            + ABOUT
          </a>
          <a
            href="#services"
            className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.22em] text-bone/80 font-semibold transition-colors hover:text-phosphor"
          >
            + SERVICES
          </a>
        </nav>

        {/* Contact (Top-Right) */}
        <a
          href="#contact"
          className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.22em] text-bone/80 font-semibold transition-colors hover:text-phosphor flex items-center gap-1"
        >
          CONTACT <span className="text-[14px]">↗</span>
        </a>
      </header>

      {/* ---- Main Hero Content (Center) ---- */}
      <div className="relative z-20 flex flex-col items-center justify-center my-auto w-full pt-4 pb-2">
        {/* Giant Display Name — two lines, single face, mustard on parchment */}
        <div className="flex flex-col items-center text-center select-none w-full">
          <h1 className="font-sans text-[clamp(4.6rem,13vw,12.5rem)] font-extrabold uppercase tracking-[-0.04em] text-amber leading-[0.78] m-0 p-0 [text-shadow:0_2px_0_rgba(62,44,35,0.15)]">
            {lineOne.toUpperCase()}
          </h1>
          <h2 className="font-sans text-[clamp(3.4rem,9.4vw,9.2rem)] font-extrabold uppercase tracking-[-0.035em] text-amber/90 leading-[0.82] m-0 p-0 -mt-1 sm:-mt-2 md:-mt-3 [text-shadow:0_2px_0_rgba(62,44,35,0.12)]">
            {lineTwo.toUpperCase()}
          </h2>
        </div>

        {/* TV Set & Beside Description Grid */}
        <div className="relative mt-4 sm:mt-6 md:mt-8 w-full max-w-4xl flex flex-col md:flex-row items-center md:items-end justify-center gap-6 md:gap-8">
          {/* ---- The Vintage Retro Television ---- */}
          <div className="relative w-full max-w-[480px] sm:max-w-[540px] md:max-w-[580px] shrink-0">
            {/* TV Container mapped to asset 2294x1596 */}
            <div
              className="relative w-full"
              style={{ aspectRatio: "2294 / 1596" }}
            >
              {/* ---- The Screen / Video Tube ---- */}
              <div
                className="absolute overflow-hidden bg-black shadow-inner"
                style={{
                  top: "5.2%",
                  left: "5.2%",
                  width: "74.6%",
                  height: "89.6%",
                  borderRadius: "4.5% / 6%",
                }}
              >
                {/* Playing hero.mp4 */}
                <video
                  ref={videoRef}
                  className="h-full w-full object-cover scale-[1.02]"
                  src="/videos/hero.mp4"
                  poster="/videos/hero.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  aria-label="Portfolio reel playing on vintage television"
                />

                {/* CRT Scanlines & Glass Sheen Overlay */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-10 crt-scanlines opacity-40"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-black/40 via-transparent to-amber/10"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-10 shadow-[inset_0_0_24px_rgba(0,0,0,0.8)]"
                />
              </div>

              {/* ---- The Vintage TV Cabinet Frame Overlay ---- */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/tv/eric-tv-frame.png"
                alt="Vintage Television Frame"
                className="pointer-events-none absolute inset-0 z-20 h-full w-full select-none object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
                draggable={false}
              />
            </div>
          </div>

          {/* ---- Monospace Description on the Right ---- */}
          <div className="flex flex-col items-start text-left md:pb-6 max-w-[280px]">
            <div className="mb-3 h-px w-10 bg-phosphor" aria-hidden="true" />
            <p className="font-mono text-[11px] sm:text-[12px] md:text-[12.5px] font-semibold uppercase leading-[1.65] tracking-[0.14em] text-bone/85">
              {IDENTITY.role.toUpperCase()}
              <br />
              FRAMES COMPOSED WITH INTENT.
              <br />
              LIGHT THAT TELLS YOU WHERE TO LOOK.
            </p>
          </div>
        </div>
      </div>

      {/* ---- Bottom Status & Footer ---- */}
      <footer className="relative z-30 flex items-end justify-between w-full pb-1 sm:pb-2">
        {/* Bottom-Left: Location & Live Clock */}
        <div className="flex flex-col items-start gap-1 font-mono text-[11px] sm:text-[12px] font-semibold tracking-[0.16em] text-bone/80 uppercase">
          <div className="flex items-center gap-1.5">
            <span className="text-phosphor text-[14px]">⊕</span>
            <span>SANTIPUR</span>
          </div>
          <div className="text-bone">{timeStr}</div>
        </div>
      </footer>
    </section>
  );
}
