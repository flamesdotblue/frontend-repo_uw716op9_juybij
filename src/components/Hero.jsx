import Spline from "@splinetool/react-spline";
import { Truck, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden" aria-label="Hero">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_10%,rgba(244,63,94,0.08),transparent_70%)]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pt-28 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pt-36">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white text-rose-700 ring-1 ring-rose-200 px-3 py-1 text-xs font-medium">
            <span className="h-2 w-2 rounded-full bg-rose-500" />
            New: Red Spider Lily Collection
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-6xl">
            Fresh flowers and plants, delivered beautifully
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Minimal, serene and thoughtfully curated blooms. Clean design, calm vibes,
            and fast delivery for every occasion.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#shop"
              className="rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-rose-700"
            >
              Shop now
            </a>
            <a
              href="#about"
              className="rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              Learn more
            </a>
          </div>

          <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-rose-600" />
              <span>Next‑day delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-rose-600" />
              <span>Premium quality</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-0 pointer-events-none rounded-3xl bg-gradient-to-br from-rose-200 to-rose-100 blur-2xl" />
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-rose-100 bg-rose-50/50 shadow-lg">
            <Spline
              scene="https://prod.spline.design/Tu-wEVxfDuICpwJI/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
