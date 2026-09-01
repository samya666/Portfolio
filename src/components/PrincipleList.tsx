"use client";

import Reveal from "./Reveal";
import { type Principle } from "@/lib/content";

/**
 * The reference's numbered principle rows: a zero-padded index, an uppercase
 * title, and a sentence of body copy, separated by hairlines. Used by both
 * Approach and Services, which differ only in their heading and data.
 */
export default function PrincipleList({ items }: { items: Principle[] }) {
  return (
    <ul>
      {items.map((item, i) => (
        <Reveal as="li" key={item.title} delay={i * 90} className="border-t border-ash">
          <div className="grid gap-4 py-8 md:grid-cols-12 md:gap-8 md:py-10">
            <span className="label text-phosphor md:col-span-2">
              {String(i + 1).padStart(3, "0")}
            </span>
            <h3 className="label text-bone md:col-span-4">{item.title}</h3>
            <p className="max-w-prose text-sm leading-relaxed text-smoke md:col-span-6 md:text-base">
              {item.body}
            </p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
