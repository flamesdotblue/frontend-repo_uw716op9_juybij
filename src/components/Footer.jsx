export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white/80 py-10 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Bloomery. All rights reserved.</p>
          <nav className="flex items-center gap-6">
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
            <a href="#shop" className="hover:text-gray-900">Shop</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
