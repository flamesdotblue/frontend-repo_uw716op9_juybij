import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden" aria-label="Galaxy Hero">
      {/* 3D Galaxy Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Soft vignette and glow overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#05030e]/30 via-transparent to-[#05030e]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_center,rgba(168,85,247,0.25),transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
            Live cosmic scene powered by 3D
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white drop-shadow-[0_4px_30px_rgba(168,85,247,0.35)]">
            Journey through the purple cosmos
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80">
            Drift into a dark, futuristic galaxy lit by a radiant white core. Explore
            starlit horizons, discover new worlds, and feel the serenity of space.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3" id="get-started">
            <a
              href="#features"
              className="rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 border border-white/15 transition"
            >
              Learn More
            </a>
            <a
              href="#discover"
              className="rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 hover:shadow-fuchsia-500/40 transition"
            >
              Enter the Galaxy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
