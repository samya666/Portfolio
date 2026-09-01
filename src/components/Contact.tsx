import Clock from "./Clock";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IDENTITY } from "@/lib/content";

const YEAR = 2026; // static export — no runtime date, no hydration risk

const CHANNELS = [
  { k: "Email", v: IDENTITY.email, href: `mailto:${IDENTITY.email}` },
  {
    k: "Phone",
    v: IDENTITY.phone,
    href: `tel:${IDENTITY.phone.replace(/\s+/g, "")}`,
  },
  { k: "LinkedIn", v: "Samya Bhattacharjee", href: "https://www.linkedin.com/in/samya-bhattacharjee/" },
  { k: "Based in", v: IDENTITY.location },
];

/** Section 012 — contact and footer. Closes the page on the live IST clock. */
export default function Contact() {
  return (
    <footer id="contact" className="scroll-mt-20 px-6 pt-24 pb-10 md:px-12 md:pt-32">
      <SectionHeading index="012" kicker="Start something" title="Contact" />

      <Reveal delay={80} className="mt-12">
        <a
          href={`mailto:${IDENTITY.email}`}
          className="display block break-all text-[clamp(1.4rem,5.5vw,4rem)] text-bone transition-colors hover:text-phosphor"
        >
          {IDENTITY.email}
        </a>
      </Reveal>

      <dl className="mt-16 grid gap-px border border-ash bg-ash md:grid-cols-3">
        {CHANNELS.map((c, i) => (
          <Reveal key={c.k} delay={120 + i * 60} className="bg-void px-6 py-8">
            <dt className="label text-smoke">{c.k}</dt>
            <dd className="mt-3">
              {c.href ? (
                <a
                  href={c.href}
                  className="display block break-words text-lg text-bone transition-colors hover:text-phosphor md:text-xl"
                >
                  {c.v}
                </a>
              ) : (
                <span className="display block text-lg text-bone md:text-xl">
                  {c.v}
                </span>
              )}
            </dd>
          </Reveal>
        ))}
      </dl>

      {/* colophon */}
      <div className="mt-20 flex flex-col gap-6 border-t border-ash pt-8 md:flex-row md:items-center md:justify-between">
        <span className="label text-bone">
          &copy; {YEAR} {IDENTITY.name}
        </span>

        <span className="label flex items-center gap-3 text-smoke">
          <span className="animate-led inline-block h-1.5 w-1.5 rounded-full bg-phosphor" />
          {IDENTITY.city} <Clock />
        </span>

        <a
          href="#top"
          className="label text-smoke transition-colors hover:text-phosphor md:text-right"
        >
          [Back to top &uarr;]
        </a>
      </div>
    </footer>
  );
}
