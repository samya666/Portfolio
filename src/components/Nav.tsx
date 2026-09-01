"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  // Scroll-progress readout, as on the reference site.
  const [progress, setProgress] = useState(0);
  const frame = useRef<number | null>(null);

  const [scrolled, setScrolled] = useState(false);

  const measure = useCallback(() => {
    frame.current = null;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const y = window.scrollY;
    setProgress(scrollable > 0 ? Math.min(1, y / scrollable) : 0);
    setScrolled(y > 100);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (frame.current == null) frame.current = requestAnimationFrame(measure);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame.current != null) cancelAnimationFrame(frame.current);
    };
  }, [measure]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[90] border-b border-ash bg-void/80 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-between gap-6 px-6 py-4 md:px-12">
        <a
          href="#top"
          className="label text-bone transition-colors hover:text-phosphor"
        >
          Samya B.
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="label text-smoke transition-colors hover:text-bone"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Progress: a hairline bar plus the reference's percentage readout. */}
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="hidden h-px w-16 bg-ash sm:block"
          >
            <span
              className="block h-px bg-phosphor transition-[width] duration-150 ease-out"
              style={{ width: `${progress * 100}%` }}
            />
          </span>
          <span className="label tabular-nums text-phosphor">
            {String(Math.round(progress * 100)).padStart(2, "0")}%
          </span>
        </div>
      </div>
    </nav>
  );
}
