"use client";

import { useCart } from "@/hooks/useCart";
import Product from "@/types/product";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <button
      onClick={() =>
        addItem({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
        })
      }
      className="bg-amber-700 px-4 py-2 rounded hover:bg-amber-600 text-white mt-3">
      Add to Cart
    </button>
  );
}
