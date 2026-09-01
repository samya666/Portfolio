import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { disciplines, aiTools, software } from "@/lib/content";

function Marquee({
  items,
  duration,
  reverse = false,
}: {
  items: string[];
  duration: number;
  reverse?: boolean;
}) {
  return (
    <div className="marquee group relative overflow-hidden py-1">
      {/* edge fades — void, so chips dissolve into the page */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-void to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-void to-transparent" />

      <div
        className={`marquee-track flex w-max gap-3 ${reverse ? "marquee-reverse" : ""}`}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 gap-3" aria-hidden={copy === 1}>
            {items.map((it) => (
              <span
                key={it}
                className="label whitespace-nowrap border border-ash bg-carbon px-4 py-3 text-smoke transition-colors duration-300 hover:border-phosphor hover:text-phosphor"
              >
                {it}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Section 009 — disciplines as a numbered grid, tools as opposing marquees. */
export default function Toolbox() {
  return (
    <section
      id="toolbox"
      className="scroll-mt-20 border-y border-ash bg-carbon/40 px-6 py-24 md:px-12 md:py-32"
    >
      <SectionHeading index="009" kicker="Disciplines and tools" title="Toolbox" />

      {/* Disciplines */}
      <Reveal delay={80} className="mt-14">
        <h3 className="label border-t border-ash pt-5 text-smoke">
          Core disciplines — {String(disciplines.length).padStart(2, "0")}
        </h3>
        <div className="mt-6 grid grid-cols-1 gap-px bg-ash sm:grid-cols-2 md:grid-cols-3">
          {disciplines.map((d, i) => (
            <div
              key={d}
              className="group flex items-baseline gap-4 bg-void px-5 py-7 transition-colors duration-300 hover:bg-carbon"
            >
              <span className="label shrink-0 text-phosphor">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="display text-lg text-bone transition-colors group-hover:text-phosphor md:text-xl">
                {d}
              </span>
            </div>
          ))}
        </div>
      </Reveal>

      {/* AI tools + software marquees */}
      <div className="mt-16 space-y-12">
        <Reveal delay={120}>
          <h3 className="label mb-6 border-t border-ash pt-5 text-smoke">
            AI toolkit — {String(aiTools.length).padStart(2, "0")}
          </h3>
          <Marquee items={aiTools} duration={48} />
        </Reveal>

        <Reveal delay={160}>
          <h3 className="label mb-6 border-t border-ash pt-5 text-smoke">
            Software — {String(software.length).padStart(2, "0")}
          </h3>
          <Marquee items={software} duration={40} reverse />
        </Reveal>
      </div>
    </section>
  );
}
