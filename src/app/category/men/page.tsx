// app/category/men/page.tsx
import React from "react";
import Image from "next/image";
import Counter from "../../../component/Counter";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

export default async function MenPage() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  // فلترة المنتجات الخاصة بالرجال
  const menProducts = products.filter((p) => p.category === "men's clothing");

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {menProducts.map((product) => (
        <div
          key={product.id}
          className="cards p-4 text-center shadow rounded-2xl">
          <Image
            className="flex justify-center m-auto mb-2"
            src={product.image}
            alt={product.title}
            width={120}
            height={120}
          />
          <h3 className="font-semibold">{product.title}</h3>
          <p className="text-gray-600">Price: {product.price}$</p>
          <Counter />
        </div>
      ))}
    </div>
  );
}
