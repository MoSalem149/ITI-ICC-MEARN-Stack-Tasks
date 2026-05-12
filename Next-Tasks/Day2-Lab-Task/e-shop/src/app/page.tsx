import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Wireless Headphones",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Gaming Keyboard",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Smart Watch",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "4K Monitor",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Home() {
  // throw new Error("Test error page");
  return (
    <section className="min-h-[90vh] px-6 py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <span className="inline-block rounded-full bg-cyan-500/20 px-4 py-1 text-sm text-cyan-300">
            New Collection 2026
          </span>

          <h1 className="text-5xl font-black leading-tight md:text-6xl">
            Smart Tech for Your Everyday Life
          </h1>

          <p className="text-lg text-gray-300">
            Explore premium electronics, accessories, and gadgets with a clean
            modern shopping experience powered by Next.js and Tailwind CSS.
          </p>

          <div className="flex gap-4">
            <Link
              href="/products"
              className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
            >
              Shop Now
            </Link>

            <Link
              href="/category"
              className="rounded-xl border border-gray-700 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Browse Categories
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-gray-800 bg-linear-to-br from-cyan-500/20 to-blue-500/10 p-8 shadow-2xl">
            <div className="grid grid-cols-2 gap-4">
              {products.map((item) => (
                <div
                  key={item.name}
                  className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/70"
                >
                  <Image
                    width={500}
                    height={500}
                    src={item.image}
                    alt={item.name}
                    className="h-40 w-full object-cover"
                  />

                  <div className="p-4 text-center">
                    <h3 className="font-semibold">{item.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
