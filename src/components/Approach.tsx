"use client";

import PrincipleList from "./PrincipleList";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { approach } from "@/lib/content";

/** Section 005 — how the work gets made. */
export default function Approach() {
  return (
    <section id="approach" className="px-6 py-24 md:px-12 md:py-32">
      <SectionHeading
        index="005"
        kicker="How the work gets made"
        title="Approach"
      />

      <Reveal className="mt-10 mb-14 max-w-2xl">
        <p className="text-base leading-relaxed text-smoke md:text-lg">
          I care about work that survives the edit — reliable to produce, clear
          to hand over, and still watchable once the novelty wears off.
        </p>
      </Reveal>

      <PrincipleList items={approach} />
    </section>
  );
}
