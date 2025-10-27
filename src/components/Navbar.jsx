import { Leaf, ShoppingCart, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-rose-100 text-rose-600">
              <Leaf className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold tracking-wide text-gray-900">Bloomery</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#shop" className="hover:text-gray-900 transition">Shop</a>
            <a href="#about" className="hover:text-gray-900 transition">About</a>
            <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm hover:bg-gray-50">
              <Search className="h-4 w-4" />
              Search
            </button>
            <a
              href="#cart"
              className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-700"
            >
              <ShoppingCart className="h-4 w-4" />
              Cart
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
