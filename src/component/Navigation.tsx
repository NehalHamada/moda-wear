import React from "react";
import Pathnamelink from "./Pathnamelink";

const navItem = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/product" },
  { name: "Category", href: "/category" },
];

export default function Navigation() {
  return (
    <div className="p-2">
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
