import Image from "next/image";
import { AppIconRowInfinite } from "./AppIconRowInfinite";

const CDN = "https://cdn.sanity.io/images/9r24npb8/production";

const icons = [
  { src: `${CDN}/c64b29a8425745b99ef5c5f2b81ae075a3cf8b89-1024x1024.png`, alt: "Bluesky" },
  { src: `${CDN}/af6fce1e85d377496d8db366aab6b2a2038c9b67-225x225.jpg`, alt: "Pizza Hut" },
  { src: `${CDN}/6cea83df40cd6ad564522d7cc22e6b3ae1b675e6-1024x1024.png`, alt: "Coinbase" },
  { src: `${CDN}/02e4ed3355424bed8579b0fad3125db1565dc1ad-200x200.png`, alt: "Replit" },
  { src: `${CDN}/ecf245f860230ad30f28b66266c99cb5b249c9da-1024x1024.png`, alt: "Phantom" },
];

const ICON = 80;
const GAP = 16;
const PADDING = 16;

// The bar's natural size. BAR_WIDTH is also the viewport cutoff: below it the
// static bar cannot fit, so the marquee takes over.
const BAR_WIDTH = icons.length * ICON + (icons.length - 1) * GAP + PADDING * 2;
const BAR_HEIGHT = ICON + PADDING * 2;

export function AppIconRowStatic() {
  return (
    <>
      <style>{`
        @media (min-width: ${BAR_WIDTH}px) { .app-icon-marquee { display: none } }
        @media not (min-width: ${BAR_WIDTH}px) { .app-icon-static { display: none } }
      `}</style>
      <ul
        className="app-icon-static flex items-center justify-center rounded-[36px] bg-[#F0F0F3] shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
        style={{ width: BAR_WIDTH, height: BAR_HEIGHT, gap: GAP }}
      >
        {icons.map((icon) => (
          <li key={icon.src}>
            <Image
              src={icon.src}
              alt={icon.alt}
              width={ICON}
              height={ICON}
              className="rounded-3xl"
            />
          </li>
        ))}
      </ul>
      <div className="app-icon-marquee w-full">
        <AppIconRowInfinite />
      </div>
    </>
  );
}
