"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function Pathnamelink({ href, children }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={
        isActive
          ? "bg-amber-700 text-white p-2 rounded"
          : "hover:text-amber-700 p-2 rounded"
      }>
      {children}
    </Link>
  );
}
