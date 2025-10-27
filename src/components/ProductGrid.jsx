import { Flower2, Leaf, Sprout } from "lucide-react";

const products = [
  { id: 1, name: "Red Spider Lily", price: 36, accent: "from-rose-400/20 to-rose-200/20", Icon: Flower2 },
  { id: 2, name: "Monstera Deliciosa", price: 42, accent: "from-emerald-400/20 to-emerald-200/20", Icon: Leaf },
  { id: 3, name: "Baby Rubber Plant", price: 28, accent: "from-green-400/20 to-lime-200/20", Icon: Sprout },
  { id: 4, name: "Peony Blush Bundle", price: 48, accent: "from-pink-400/20 to-rose-200/20", Icon: Flower2 },
  { id: 5, name: "Lavender Calm Set", price: 32, accent: "from-purple-400/20 to-violet-200/20", Icon: Flower2 },
  { id: 6, name: "Eucalyptus Stems", price: 24, accent: "from-teal-400/20 to-cyan-200/20", Icon: Leaf },
];

export default function ProductGrid() {
  return (
    <section id="shop" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Curated picks</h2>
          <p className="mt-2 text-gray-600">Clean design, calm colors, and plants that make spaces feel alive.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(({ id, name, price, accent, Icon }) => (
            <article key={id} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className={`pointer-events-none absolute -inset-px bg-gradient-to-br ${accent}`} />
              <div className="relative">
                <div className="grid aspect-[4/3] place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-white to-rose-50">
                  <Icon className="h-12 w-12 text-gray-800" />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">{name}</h3>
                    <p className="mt-1 text-sm text-gray-600">In stock</p>
                  </div>
                  <div className="text-right">
                    <p className="text-base font-semibold text-gray-900">${price}</p>
                    <button className="mt-2 inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-900 hover:bg-gray-50">Add</button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
