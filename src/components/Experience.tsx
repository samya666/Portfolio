import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/content";

/**
 * Section 008 — the full résumé, all ten roles, as a numbered index rather than
 * a timeline: zero-padded number, role in display type, then org / location /
 * period as mono meta. Rows are hairline-separated, matching the work list.
 */
export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 px-6 py-24 md:px-12 md:py-32">
      <SectionHeading
        index="008"
        kicker="Studios, broadcast and the classroom"
        title="Experience"
      />

      <Reveal className="mt-10 mb-8 flex flex-wrap items-baseline justify-between gap-4 border-t border-ash pt-5">
        <span className="label text-smoke">
          {String(experience.length).padStart(2, "0")} roles
        </span>
        <span className="label max-w-[36ch] text-smoke sm:text-right">
          [From master lighting to pre-production and faculty]
        </span>
      </Reveal>

      <ol>
        {experience.map((job, i) => (
          <Reveal
            as="li"
            key={`${job.org}-${i}`}
            delay={(i % 4) * 70}
            className="group border-t border-ash last:border-b"
          >
            <div className="grid gap-3 py-7 transition-colors md:grid-cols-12 md:items-baseline md:gap-8 md:py-8">
              <span className="label text-phosphor md:col-span-1">
                {String(i + 1).padStart(3, "0")}
              </span>

              <div className="md:col-span-5">
                <h3 className="display text-xl text-bone transition-colors group-hover:text-phosphor md:text-3xl">
                  {job.role}
                </h3>
                <p className="label mt-2 text-smoke">{job.org}</p>
              </div>

              <p className="max-w-prose text-sm leading-relaxed text-smoke md:col-span-4">
                {job.note}
              </p>

              <div className="md:col-span-2 md:text-right">
                <p className="label text-smoke">{job.location}</p>
                {job.period && (
                  <p className="label mt-2 text-phosphor">{job.period}</p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
