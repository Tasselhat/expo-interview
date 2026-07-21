import Image from "next/image";
import icons from "@/data/icons.json";

// One set is ~1680px wide; 4 copies (~6720px) keep the track at least 2x the
// viewport. The marquee keyframe must travel 100% / COPIES.
const COPIES = 4;

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
                  className="size-16 rounded-3xl shadow-md shadow-gray-200 transition-transform duration-200 group-hover:scale-110 sm:size-20"
                />
                <span className="pointer-events-none absolute top-full left-1/2 mt-4 -translate-x-1/2 rounded-full bg-gray-200 px-3 py-1 font-mono text-[13px] whitespace-nowrap text-[#60646c] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
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
