import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education } from "@/lib/content";

/** Section 010 — training and study, five entries. */
export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 px-6 py-24 md:px-12 md:py-32">
      <SectionHeading index="010" kicker="Training and study" title="Education" />

      <ul className="mt-14 border-t border-ash">
        {education.map((s, i) => (
          <Reveal
            as="li"
            key={`${s.org}-${i}`}
            delay={(i % 5) * 70}
            className="group border-b border-ash"
          >
            <div className="grid gap-3 py-7 md:grid-cols-12 md:items-baseline md:gap-8 md:py-8">
              <span className="label text-phosphor md:col-span-1">
                {s.year ?? "—"}
              </span>

              <div className="md:col-span-7">
                <h3 className="text-lg leading-snug text-bone transition-colors group-hover:text-phosphor md:text-2xl">
                  {s.title}
                </h3>
                <p className="label mt-2 text-smoke">{s.org}</p>
              </div>

              <span className="label text-smoke md:col-span-4 md:text-right">
                {s.location}
              </span>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
