import React from "react";
import Product from "@/types/product";
import Link from "next/link";
import Image from "next/image";
import Counter from "../component/Counter";
import AddToCartButton from "../component/AddToCartButton";


interface props {
  filterValue: string;
}

export default async function Productlist({ filterValue }: props) {
  new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  let filterProducts: Product[] = [];
  if (filterValue === "All") {
    filterProducts = products;
  }
  if (filterValue === "men'sclothing") {
    filterProducts = products.filter(
      (product) => product.category === "men's clothing"
    );
  }
  if (filterValue === "women'sclothing") {
    filterProducts = products.filter(
      (product) => product.category === "women's clothing"
    );
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {filterProducts.map((product) => (
        <div
          key={product.id}
          className="cards p-4 text-center shadow rounded-2xl hover:shadow-lg transition mt-3">
          <Link href={`/product/${product.id}`}>
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              className="mx-auto mb-2 w-full h-auto max-w-[150px]"
            />
            <h3 className="font-semibold">title: {product.title}</h3>
            <p className="text-gray-600">Price: {product.price}$</p>
            <p className="text-gray-600">Category: {product.category}</p>
          </Link>

          <Counter />
          <AddToCartButton product={product} />
        </div>
      ))}
    </div>
  );
}
