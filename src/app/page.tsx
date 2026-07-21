import { AppIconRowStatic } from "@/components/AppIconRowStatic";
import { AppIconRowInfinite } from "@/components/AppIconRowInfinite";

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center overflow-x-clip">
      <section className="flex w-full items-center justify-center rounded-lg bg-white py-8">
        <AppIconRowStatic />
      </section>
      <section className="flex w-full items-center justify-center rounded-lg bg-white py-8">
        <AppIconRowInfinite />
      </section>
    </main>
  );
}
