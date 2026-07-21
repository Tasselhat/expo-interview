import Image from "next/image";
import { AppIconRowInfinite } from "./AppIconRowInfinite";
import icons from "@/data/icons.json";

const BAR_COUNT = 7;
const barIcons = icons.slice(0, BAR_COUNT);
// Natural bar width: 96px per icon (80 + 16 gap) + 16px leftover padding.
const BAR_WIDTH = BAR_COUNT * 96 + 16;

export function AppIconRowStatic() {
  return (
    <>
      <style>{`
        @media (min-width: ${BAR_WIDTH}px) { .app-icon-marquee { display: none } }
        @media not (min-width: ${BAR_WIDTH}px) { .app-icon-static { display: none } }
      `}</style>
      <ul className="app-icon-static flex items-center gap-4 rounded-[36px] bg-[#F0F0F3] p-4 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
        {barIcons.map((icon) => (
          <li key={icon.src}>
            <Image
              src={icon.src}
              alt={icon.alt}
              width={80}
              height={80}
              className="rounded-3xl shadow-icon"
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
