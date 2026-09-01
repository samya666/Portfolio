"use client";

import Reveal from "./Reveal";

/**
 * The reference site's fractured heading: an oversized uppercase word whose
 * glyphs rise into place one after another, so "SELECTED WORKS" reads as
 * "SE LEC TED W O RKS" while it animates.
 *
 * Each glyph gets its own `--glyph-index`, which `.glyph` in globals.css turns
 * into a transition-delay. Spaces are emitted as real spaces (not animated) so
 * the word can still wrap, and the whole string stays in the accessibility
 * tree as one label via `aria-label` on the heading.
 */
export default function SectionHeading({
  index,
  kicker,
  title,
  id,
  className = "",
}: {
  /** Zero-padded section number, e.g. "003". */
  index: string;
  /** Bracketed aside shown above the title, e.g. "A few recent projects". */
  kicker?: string;
  title: string;
  id?: string;
  className?: string;
}) {
  const glyphs = [...title];

  return (
    <Reveal className={`border-t border-ash pt-5 ${className}`}>
      <div className="flex items-baseline justify-between gap-6">
        <span className="label text-phosphor">{index}</span>
        {kicker && (
          <span className="label max-w-[26ch] text-right text-smoke">
            [{kicker}]
          </span>
        )}
      </div>

      <h2
        id={id}
        aria-label={title}
        className="display mt-6 text-[clamp(2.5rem,11vw,9rem)]"
      >
        {glyphs.map((ch, i) =>
          ch === " " ? (
            <span key={i}> </span>
          ) : (
            <span
              key={i}
              aria-hidden="true"
              className="glyph"
              style={{ ["--glyph-index" as string]: i }}
            >
              {ch}
            </span>
          ),
        )}
      </h2>
    </Reveal>
  );
}
