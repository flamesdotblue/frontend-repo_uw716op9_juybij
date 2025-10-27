import { Rocket, Star, Sparkles, Shield, Globe } from "lucide-react";

const features = [
  {
    title: "Cinematic 3D",
    desc: "Immersive space rendered in real time with interactive depth and motion.",
    icon: Sparkles,
    tone: "from-fuchsia-500/20 to-indigo-500/20",
  },
  {
    title: "Hyperspeed Ready",
    desc: "Smooth performance across devices with optimized assets and effects.",
    icon: Rocket,
    tone: "from-indigo-500/20 to-blue-500/20",
  },
  {
    title: "Cosmic Clarity",
    desc: "Dark UI with luminous highlights for perfect contrast and readability.",
    icon: Star,
    tone: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Secure Orbit",
    desc: "Solid foundations and best practices to keep your journey safe.",
    icon: Shield,
    tone: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Global Reach",
    desc: "Designed to feel magical everywhere on Earth—and beyond.",
    icon: Globe,
    tone: "from-cyan-500/20 to-sky-500/20",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 -z-0 pointer-events-none bg-[radial-gradient(800px_400px_at_80%_10%,rgba(99,102,241,0.1),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Designed for wonder</h2>
          <p className="mt-4 text-white/70">
            Everything you need to craft a mesmerizing, futuristic presence.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, desc, icon: Icon, tone }) => (
            <div
              key={title}
              className={`group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden`}
            >
              <div className={`pointer-events-none absolute -inset-px opacity-60 bg-gradient-to-br ${tone}`} />
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
