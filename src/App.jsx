import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-rose-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />

        <section id="about" className="relative py-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_15%_20%,rgba(244,63,94,0.08),transparent_70%)]" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-gray-200 bg-white/70 p-8 backdrop-blur">
              <h2 className="text-2xl font-semibold">Clean, calm and carefully made</h2>
              <p className="mt-3 text-gray-600">
                We believe flowers and plants should feel effortless and elevating. Our
                selection focuses on minimal aesthetics, soothing palettes and lasting
                quality—perfect for home, work or gifting.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
