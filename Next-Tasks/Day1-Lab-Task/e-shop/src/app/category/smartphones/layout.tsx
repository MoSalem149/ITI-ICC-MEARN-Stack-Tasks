import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smartphones - Electronics Shop",
  description:
    "Discover the latest smartphones from top brands like Apple, Samsung, Google and more",
};

export default function SmartphonesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
