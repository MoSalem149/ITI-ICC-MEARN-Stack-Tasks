"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UseClient() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/category", label: "Category" },
    { href: "/products", label: "Products" },
  ];

  return (
    <div className="flex items-center gap-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`transition ${
            pathname === link.href
              ? "font-bold text-cyan-400"
              : "text-gray-300 hover:text-cyan-300"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
