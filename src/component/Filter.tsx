"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Filter() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set("category", filter);
    router.replace(`${pathname}?${params}`);
  }
  return (
    <div className="m-3">
      <button
        className="btn cursor-pointer p-2 bg-amber-700 m-2 rounded text-white"
        onClick={() => handleFilter("All")}>
        All
      </button>
      <button
        className="btn cursor-pointer p-2 bg-amber-700 m-2 rounded text-white"
        onClick={() => handleFilter("men'sclothing")}>
        Men
      </button>
      <button
        className="btn cursor-pointer p-2 bg-amber-700 m-2 rounded text-white"
        onClick={() => handleFilter("women'sclothing")}>
        Women
      </button>
    </div>
  );
}
