import React from "react";
import Product from "@/types/product";
import Link from "next/link";
import Image from "next/image";
import Counter from "../component/Counter";

export default async function Productlist() {
  new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.id}`}
          className="cards p-4 text-center shadow rounded-2xl hover:shadow-lg transition mt-3">
          <Image
            src={product.image}
            alt={product.title}
            width={100}
            height={100}
            className="mx-auto mb-2"
          />
          {/* {jbjsbdjbsb} */}
          <h3 className="font-semibold">title: {product.title}</h3>
          <p className="text-gray-600">Price: {product.price}$</p>
          <Counter />
          More Info
        </Link>
      ))}
    </div>
  );
}
