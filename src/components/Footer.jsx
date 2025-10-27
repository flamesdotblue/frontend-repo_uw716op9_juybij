export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Nebula • Built for the curious.</p>
          <nav className="flex items-center gap-6">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#discover" className="hover:text-white transition">Discover</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
