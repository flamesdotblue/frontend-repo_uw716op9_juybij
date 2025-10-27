import { Rocket, Star, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#05030e]/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <Sparkles className="h-6 w-6 text-purple-400 transition-transform group-hover:rotate-12" />
            </div>
            <span className="text-sm font-semibold tracking-wider text-white/90">NEBULA</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-white/70">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#discover" className="hover:text-white transition">Discover</a>
            <a href="#" className="hover:text-white transition">Docs</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#discover"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition"
            >
              <Star className="h-4 w-4 text-yellow-300" />
              Explore
            </a>
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 hover:shadow-fuchsia-500/40 transition"
            >
              <Rocket className="h-4 w-4" />
              Launch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
