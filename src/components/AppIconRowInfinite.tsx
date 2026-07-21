import Image from "next/image";

const CDN = "https://cdn.sanity.io/images/9r24npb8/production";

const icons = [
  { src: `${CDN}/c64b29a8425745b99ef5c5f2b81ae075a3cf8b89-1024x1024.png`, alt: "Bluesky" },
  { src: `${CDN}/af6fce1e85d377496d8db366aab6b2a2038c9b67-225x225.jpg`, alt: "Pizza Hut" },
  { src: `${CDN}/6cea83df40cd6ad564522d7cc22e6b3ae1b675e6-1024x1024.png`, alt: "Coinbase" },
  { src: `${CDN}/02e4ed3355424bed8579b0fad3125db1565dc1ad-200x200.png`, alt: "Replit" },
  { src: `${CDN}/ecf245f860230ad30f28b66266c99cb5b249c9da-1024x1024.png`, alt: "Phantom" },
  { src: `${CDN}/fc1fe50dec3c68ac494fd787cc8322acc515285a-200x200.png`, alt: "Mistral" },
  { src: `${CDN}/4d96f9459dc5151d9bb94e39ab09bd641c45e9fb-1024x1024.png`, alt: "Kraken" },
  { src: `${CDN}/4ec7d9eeced2ced62f0c62123fbfa65a2273f07d-512x512.png`, alt: "PrizePicks" },
  { src: `${CDN}/82aed08e45784b8aec18f8c614607d6dc4578c57-200x200.png`, alt: "Sweetgreen" },
  { src: `${CDN}/48eeac6f65bea50700ce1f99ea485e3f97838f80-200x200.png`, alt: "Brex" },
  { src: `${CDN}/1039bf1858f5c0c2413414022423772ba27eb3fb-350x350.png`, alt: "DailyPay" },
  { src: `${CDN}/0268c80a1d58e71f5ce4c01e5b3a71ce705595b6-512x512.png`, alt: "Mollie" },
  { src: `${CDN}/4707dcef59c768a89089a8724e77c12a1aa8fe59-512x512.png`, alt: "Mission Lane" },
  { src: `${CDN}/e6b569664f17fd68bc47321e24b025c2b271b0bb-512x512.png`, alt: "Hipcamp" },
  { src: `${CDN}/6f13296141189fe9302e66e8f1982cd66d99b204-350x350.png`, alt: "Partiful" },
];

// One set is ~1680px wide; 4 copies (~6720px) keep the track at least 2x the
// viewport. The marquee keyframe must travel 100% / COPIES.
const COPIES = 8;

export function AppIconRowInfinite() {
  return (
    <div className="w-full max-w-7xl overflow-hidden pt-2 pb-12 mask-[linear-gradient(to_right,transparent,black_6rem,black_calc(100%-6rem),transparent)]">
      <div className="flex w-max motion-safe:animate-[marquee_25s_linear_infinite] has-[li:hover]:[animation-play-state:paused]">
        {Array.from({ length: COPIES }, (_, copy) => (
          <ul
            key={copy}
            aria-hidden={copy > 0}
            className="flex items-center gap-4 pr-4 sm:gap-8 sm:pr-8"
          >
            {icons.map((icon) => (
              <li key={icon.src} className="group relative">
                <Image
                  src={icon.src}
                  alt={copy === 0 ? icon.alt : ""}
                  width={80}
                  height={80}
                  className="size-16 rounded-3xl shadow-sm transition-transform duration-200 group-hover:scale-110 sm:size-20"
                />
                <span className="pointer-events-none absolute top-full left-1/2 mt-4 -translate-x-1/2 rounded-full bg-gray-200 px-3 py-1 font-mono text-[13px] whitespace-nowrap text-[#1c2024] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  {icon.alt}
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
