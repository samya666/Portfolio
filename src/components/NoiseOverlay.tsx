// Persistent analog film-grain layer rendered once across the entire site
// (mounted in the root layout). Fixed, non-interactive, and overlaid on the
// near-black surface for a unified vintage texture.

// A tiling fractal-noise tile, desaturated to grayscale so `mix-blend-overlay`
// reads as neutral grain rather than colored static.
const GRAIN =
  "data:image/svg+xml," +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'>" +
      "<filter id='g'>" +
      "<feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/>" +
      "<feColorMatrix type='saturate' values='0'/>" +
      "</filter>" +
      "<rect width='100%' height='100%' filter='url(#g)'/>" +
      "</svg>",
  );

export default function NoiseOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 opacity-[0.055] mix-blend-overlay"
      style={{
        backgroundImage: `url("${GRAIN}")`,
        backgroundSize: "300px 300px",
      }}
    />
  );
}

