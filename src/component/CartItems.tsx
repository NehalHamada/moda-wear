"use client";

import CartItem from "./CartItem";
import { useCart } from "@/hooks/useCart";

export default function CartItems() {
  const { cart } = useCart();

  if (!cart || cart.length === 0) {
    return <p>Your cart is empty 🛒</p>;
  }

  return (
    <div className="space-y-4">
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
