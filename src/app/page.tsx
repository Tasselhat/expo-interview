/* eslint-disable @next/next/no-img-element -- Preserve the animated party parrot GIF. */
const parrots = [
  { x: "10.8s", y: "7.4s", delay: "-2.3s", size: "4.5rem" },
  { x: "14.2s", y: "9.1s", delay: "-6.7s", size: "5.5rem" },
  { x: "8.9s", y: "12.6s", delay: "-11.4s", size: "3.75rem" },
  { x: "15.7s", y: "10.3s", delay: "-4.1s", size: "4.75rem" },
  { x: "12.3s", y: "13.8s", delay: "-8.6s", size: "4rem" },
  { x: "9.7s", y: "15.2s", delay: "-13.1s", size: "3.9rem" },
] as const;

export default function Home() {
  return (
    <main className="relative grid min-h-svh place-items-center overflow-hidden bg-[#f4f0ff] px-6 text-[#1f1638]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9),rgba(255,255,255,0)_55%)]" />

      <section className="relative z-10 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#7759c2]">
          One quick thing
        </p>
        <h1 className="text-6xl font-bold tracking-[-0.06em] sm:text-8xl">Hi Colin!</h1>
      </section>

      <div className="parrot-field" aria-hidden="true">
        {parrots.map((parrot) => (
          <div
            className="parrot-x"
            key={parrot.delay}
            style={
              {
                "--x-duration": parrot.x,
                "--delay": parrot.delay,
                "--size": parrot.size,
              } as React.CSSProperties
            }
          >
            <img
              className="parrot-y"
              src="/parrot.gif"
              alt=""
              style={{ "--y-duration": parrot.y } as React.CSSProperties}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
