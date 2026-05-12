import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: "smartphones",
    name: "Smartphones",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "laptops",
    name: "Laptops",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "gaming",
    name: "Gaming",
    image:
      "https://images.unsplash.com/photo-1603481546579-65d935ba9cdd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "accessories",
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "audio",
    name: "Audio",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "wearables",
    name: "Wearables",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Category() {
  return (
    <section className="px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h1 className="text-4xl font-black">Shop by Category</h1>

          <p className="mt-2 text-gray-400">
            Explore our trending electronics categories.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              href={`/category/${category.id}`}
              key={category.id}
              className="overflow-hidden rounded-3xl border border-gray-800 bg-gray-900 transition hover:-translate-y-1 hover:border-cyan-400"
            >
              <Image
                width={500}
                height={500}
                src={category.image}
                alt={category.name}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold">{category.name}</h2>

                <p className="mt-3 text-gray-400">
                  Premium products and modern accessories.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
