"use client";

import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import { CartItem as CartItemType } from "@/types/cart";

export default function CartItem({ item }: { item: CartItemType }) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex items-center justify-between border p-4 rounded-lg shadow-sm">
      <div className="flex items-center gap-4">
        <Image
          src={item.image || "/placeholder.png"} // ✅ fallback لو مفيش صورة
          alt={item.title}
          width={64}
          height={64}
          className="w-16 h-16 object-contain"
        />
        <div>
          <h2 className="font-semibold">{item.title}</h2>
          <p className="text-gray-500">${item.price}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="px-2 border rounded"
          onClick={() =>
            updateQuantity({ id: item.id, quantity: item.quantity - 1 })
          }>
          -
        </button>
        <span>{item.quantity}</span>
        <button
          className="px-2 border rounded"
          onClick={() =>
            updateQuantity({ id: item.id, quantity: item.quantity + 1 })
          }>
          +
        </button>
        <button
          className="text-red-500 ml-4"
          onClick={() => removeItem(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}
