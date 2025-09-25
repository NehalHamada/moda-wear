"use client";

import React from "react";
import Pathnamelink from "./Pathnamelink";

const navItem = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/product" },
  { name: "Category", href: "/category" },
  { name: "Cart", href: "/cart" },
  { name: "Login", href: "/login" },
];

export default function Navigation() {
  return (
    <div className="p-2 flex justify-between items-center gap-6">
      {/* Links */}
      <ul className="flex gap-6">
        {navItem.map(({ name, href }) => (
          <li key={name}>
            <Pathnamelink href={href}>{name}</Pathnamelink>
          </li>
        ))}
      </ul>
    </div>
  );
}
