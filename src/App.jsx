import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#05030e] text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <section id="discover" className="relative py-24 sm:py-28">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_20%_10%,rgba(236,72,153,0.15),transparent_70%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold">Discover the light within the dark</h2>
                <p className="mt-4 text-white/70">
                  Inspired by a purple galaxy with a luminous core, this experience blends
                  cinematic depth with clean, modern design. It’s fast, responsive, and feels
                  at home on any device.
                </p>
                <ul className="mt-6 space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-400" />
                    Interactive 3D hero powered by Spline.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" />
                    Elegant overlays and glassy UI for contrast and clarity.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-purple-400" />
                    Fully responsive layout with smooth visuals.
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 blur-2xl" />
                <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-800/50 to-fuchsia-700/50 grid place-items-center text-center">
                    <div>
                      <p className="text-sm uppercase tracking-widest text-white/70">Theme</p>
                      <h3 className="mt-2 text-2xl font-semibold">Dark space • Purple galaxy • White light</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-white/70">
                    This cover showcases a digital, abstract space vibe that feels futuristic
                    yet calm—perfect for product launches, creative studios, or personal sites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Features />
      </main>
      <Footer />
    </div>
  );
}
