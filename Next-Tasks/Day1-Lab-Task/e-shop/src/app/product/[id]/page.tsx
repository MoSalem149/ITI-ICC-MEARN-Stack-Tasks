import Image from "next/image";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  brand: string;
  category: string;
};

async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
}

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product: Product = await getProduct(id);

  return (
    <section className="px-6 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-gray-800 bg-white">
          <Image
            width={500}
            height={500}
            src={product.thumbnail}
            alt={product.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm text-cyan-300">
            {product.category}
          </span>

          <h1 className="text-5xl font-black">{product.title}</h1>

          <p className="text-lg leading-relaxed text-gray-300">
            {product.description}
          </p>

          <div className="space-y-2">
            <p className="text-xl">
              Brand:
              <span className="ml-2 font-semibold text-cyan-400">
                {product.brand}
              </span>
            </p>

            <p className="text-3xl font-black text-cyan-400">
              ${product.price}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
