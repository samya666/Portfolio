"use client";

import PrincipleList from "./PrincipleList";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IDENTITY, services } from "@/lib/content";

/** Section 006 — what I take on. */
export default function Services() {
  return (
    <section id="services" className="px-6 py-24 md:px-12 md:py-32">
      <SectionHeading index="006" kicker="How I help" title="Services" />

      <Reveal className="mt-10 mb-14 max-w-2xl">
        <p className="text-base leading-relaxed text-smoke md:text-lg">
          Post-production, animation, and generative work — as a full pipeline or
          dropped into yours at whatever stage it is stuck.
        </p>
      </Reveal>

      <PrincipleList items={services} />

      {/* CTA, echoing the reference's "HAVE A PROJECT? / LET'S CHAT" */}
      <Reveal className="mt-16 flex flex-col gap-6 border-t border-ash pt-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="display text-[clamp(1.75rem,6vw,4rem)] text-bone">
          Have a project?
        </p>
        <a
          href={`mailto:${IDENTITY.email}`}
          className="label shrink-0 border border-bone/30 px-6 py-4 text-bone transition-colors hover:border-phosphor hover:text-phosphor"
        >
          [Let&rsquo;s talk]
        </a>
      </Reveal>
    </section>
  );
}
