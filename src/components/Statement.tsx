"use client";

import Reveal from "./Reveal";
import { STATEMENT } from "@/lib/content";

/**
 * Section 002 — the opening statement. Deliberately the only place on the page
 * with generous sentence-case body copy, so it reads as a held breath between
 * the hero and the numbered index below it.
 */
export default function Statement() {
  return (
    <section className="border-t border-ash px-6 py-24 md:px-12 md:py-32">
      <div className="grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-3">
          <span className="label text-phosphor">002</span>
        </Reveal>

        <div className="md:col-span-9">
          <Reveal>
            <p className="max-w-3xl text-lg leading-relaxed text-bone/90 md:text-2xl md:leading-relaxed">
              {STATEMENT.intro}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="label mt-10 text-smoke">[{STATEMENT.locator}]</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
