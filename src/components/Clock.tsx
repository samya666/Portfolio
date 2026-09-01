"use client";

import { useSyncExternalStore } from "react";
import { IDENTITY } from "@/lib/content";

/**
 * Live clock in Samya's timezone, as on the reference site's hero + footer.
 *
 * The site is a static export (`output: "export"`), so the HTML is generated at
 * build time — rendering a real time on the server would guarantee a hydration
 * mismatch. `useSyncExternalStore` is the built-in answer: React uses
 * `getServerSnapshot` for both the prerender and the hydration pass, then swaps
 * to the client snapshot, so the markup always agrees and no `useEffect` has to
 * call `setState` on mount.
 */
const formatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: IDENTITY.timeZone,
});

/** Re-read the clock every 15s — well inside a one-minute display resolution. */
function subscribe(onStoreChange: () => void) {
  const id = setInterval(onStoreChange, 15_000);
  return () => clearInterval(id);
}

// Returns a primitive, so React's Object.is check is stable between ticks
// within the same minute and no extra render is queued.
const getSnapshot = () => formatter.format(new Date());
const getServerSnapshot = () => "--:--";

export default function Clock({ className = "" }: { className?: string }) {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <span className={className}>
      <time>{time}</time>
    </span>
  );
}
