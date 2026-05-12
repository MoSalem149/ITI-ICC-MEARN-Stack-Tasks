import Link from "next/link";

export default async function Cart({
  searchParams,
}: {
  searchParams: Promise<{ productId?: string }>;
}) {
  const params = await searchParams;
  const productId = params.productId;

  if (!productId) {
    return (
      <section className="px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-black">Shopping Cart</h1>
          <p className="mt-4 text-gray-400">Your cart is empty.</p>
          <Link
            href="/products"
            className="mt-6 inline-block rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return <div></div>;
}
