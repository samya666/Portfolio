import Reveal from "./Reveal";
import { BANNER } from "@/lib/content";

/**
 * Section 011 — the statement banner. One word per line at full bleed, each
 * rising in after the one above it, alternating flush-left / flush-right so the
 * block reads as a stacked column rather than a paragraph.
 */
export default function Banner() {
  return (
    <section
      aria-label="Good frames start with a good story"
      className="relative overflow-hidden border-y border-ash px-6 py-24 md:px-12 md:py-32"
    >
      {/* faint tube glow behind the type */}
      <div
        aria-hidden="true"
        className="animate-room-bloom pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[60%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-phosphor/10 blur-[110px]"
      />

      <Reveal className="flex items-baseline justify-between gap-6 border-t border-ash pt-5">
        <span className="label text-phosphor">011</span>
        <span className="label text-smoke">[Working principle]</span>
      </Reveal>

      <div className="mt-10">
        {BANNER.map((word, i) => (
          <Reveal key={`${word}-${i}`} delay={i * 80}>
            <p
              aria-hidden="true"
              className={`display text-[clamp(2.4rem,13vw,11rem)] ${
                i % 2 === 1 ? "text-right text-smoke" : "text-bone"
              }`}
            >
              {word}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
