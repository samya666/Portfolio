import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IDENTITY, STATEMENT } from "@/lib/content";

const MARKERS = [
  { k: "Based in", v: "Santipur, Nadia · WB" },
  { k: "Focus", v: "Animation · Lighting · Compositing" },
  { k: "Also", v: "AI-assisted motion & concept" },
  { k: "Years in", v: "15+" },
];

/**
 * Section 007 — about. The portrait (public/artist-hero.png) is pushed through
 * a grayscale + amber duotone and given the same scanlines as the hero tube, so
 * the one photographic element on the page belongs to the CRT world too.
 */
export default function About() {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-24 md:px-12 md:py-32">
      <SectionHeading index="007" kicker="Who is behind the work" title="About" />

      <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-12">
        {/* Portrait plate */}
        <Reveal className="md:col-span-5">
          <div className="relative overflow-hidden bg-carbon ring-1 ring-ash">
            <Image
              src="/artist-hero.png"
              alt={`${IDENTITY.name}, ${IDENTITY.role}`}
              width={816}
              height={1296}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="h-full w-full object-cover grayscale contrast-[1.15] brightness-[0.92]"
            />
            {/* amber duotone + tube texture */}
            <div className="pointer-events-none absolute inset-0 bg-phosphor/20 mix-blend-color" />
            <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-40" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void via-void/10 to-transparent" />

            <span className="label absolute bottom-4 left-4 text-bone/80">
              [{IDENTITY.role}]
            </span>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="md:col-span-7 md:pl-4">
          <Reveal delay={90}>
            <p className="display text-[clamp(1.5rem,3.6vw,2.6rem)] normal-case text-bone">
              {STATEMENT.about}
            </p>
          </Reveal>

          <Reveal delay={150} className="mt-8 space-y-6">
            <p className="text-base leading-relaxed text-smoke md:text-lg">
              {STATEMENT.aboutBody}
            </p>
            <p className="text-base leading-relaxed text-smoke md:text-lg">
              {IDENTITY.summary}
            </p>
            <p className="border-l border-phosphor/50 pl-5 text-base leading-relaxed text-bone/85 md:text-lg">
              {STATEMENT.philosophy}
            </p>
          </Reveal>

          <Reveal delay={210} className="mt-12">
            <dl className="border-t border-ash">
              {MARKERS.map((m) => (
                <div
                  key={m.k}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-ash py-4"
                >
                  <dt className="label text-smoke">{m.k}</dt>
                  <dd className="label text-bone">{m.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
