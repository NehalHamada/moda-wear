import React from "react";
import Link from "next/link";

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-6 border-r border-gray-300">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <ul className="space-y-3">
          <li>
            <Link
              href="/category/men"
              className="block p-2 rounded hover:bg-amber-700 hover:text-white transition">
              Men
            </Link>
          </li>
          <li>
            <Link
              href="/category/women"
              className="block p-2 rounded hover:bg-amber-700 hover:text-white transition">
              Women
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
