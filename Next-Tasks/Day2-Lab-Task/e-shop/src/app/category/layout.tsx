import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories - Electronics Shop",
  description: "Browse products by category",
};

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="category-layout">{children}</div>;
}
