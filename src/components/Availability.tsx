"use client";

import Reveal from "./Reveal";
import { IDENTITY } from "@/lib/content";

/**
 * Section 004 — the availability strip. A single full-width rule with a status
 * dot and the email as an oversized link, mirroring the reference's contact
 * interruption between the work index and the approach.
 */
export default function Availability() {
  return (
    <section className="border-t border-ash px-6 py-20 md:px-12 md:py-24">
      <Reveal className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <p className="label flex items-center gap-3 text-bone">
          <span className="animate-led inline-block h-2 w-2 rounded-full bg-phosphor" />
          Available for collaboration
        </p>

        <a
          href={`mailto:${IDENTITY.email}`}
          className="display break-all text-[clamp(1.5rem,5vw,3.5rem)] text-bone transition-colors hover:text-phosphor"
        >
          {IDENTITY.email}
        </a>
      </Reveal>
    </section>
  );
}
