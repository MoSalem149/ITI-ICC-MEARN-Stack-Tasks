import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
}

export default async function Products() {
  const products = await getProducts();

  return (
    <section className="px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h1 className="text-4xl font-black">Featured Products</h1>

          <p className="mt-2 text-gray-400">
            Browse live products fetched from the API.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product: Product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-3xl border border-gray-800 bg-gray-900 p-6 transition hover:-translate-y-1 hover:border-cyan-400"
            >
              <div className="mb-6 overflow-hidden rounded-2xl bg-white">
                <Image
                  width={500}
                  height={500}
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-56 w-full object-cover transition hover:scale-105"
                />
              </div>

              <h3 className="mb-3 text-xl font-bold">{product.title}</h3>

              <p className="mb-5 text-lg font-semibold text-cyan-400">
                ${product.price}
              </p>

              <Link
                href={`/product/${product.id}`}
                className="block w-full rounded-xl bg-cyan-500 px-4 py-3 text-center font-semibold text-black transition hover:bg-cyan-400"
              >
                Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
