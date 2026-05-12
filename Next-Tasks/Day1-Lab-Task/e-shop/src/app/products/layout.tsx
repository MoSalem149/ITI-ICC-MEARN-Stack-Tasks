import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - Electronics Shop",
  description: "Browse our collection of electronic products",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
