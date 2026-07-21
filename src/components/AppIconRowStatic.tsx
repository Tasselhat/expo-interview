import Image from "next/image";
import { AppIconRowInfinite } from "./AppIconRowInfinite";
import icons from "@/data/icons.json";

// The static bar shows only the first five icons from the shared list.
const barIcons = icons.slice(0, 5);

// The bar's natural width is 496px (5 icons * 80px + 4 gaps * 16px + 2 * 16px
// padding). Below that cutoff the static bar cannot fit, so the marquee takes
// over; the max-[496px] / min-[496px] variants must stay in sync with it.

export function AppIconRowStatic() {
  return (
    <>
      <ul className="flex items-center gap-4 rounded-[36px] bg-[#F0F0F3] p-4 shadow-[0_1px_3px_rgba(0,0,0,0.08)] max-[496px]:hidden">
        {barIcons.map((icon) => (
          <li key={icon.src}>
            <Image src={icon.src} alt={icon.alt} width={80} height={80} className="rounded-3xl" />
          </li>
        ))}
      </ul>
      <div className="w-full min-[496px]:hidden">
        <AppIconRowInfinite />
      </div>
    </>
  );
}
