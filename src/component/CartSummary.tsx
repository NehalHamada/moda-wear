"use client";

import { useCart } from "@/hooks/useCart";
import { useEffect, useState } from "react";
import { getCartTotal } from "@/lib/cartUtils";

export default function CartSummary() {
  const { cart } = useCart();
  const [summary, setSummary] = useState({
    subtotal: 0,
    shipping: 0,
    total: 0,
  });

  useEffect(() => {
    async function fetchTotals() {
      const totals = await getCartTotal(cart);
      setSummary(totals);
    }
    fetchTotals();
  }, [cart]);

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="font-bold text-lg mb-2">Order Summary</h2>
      <p className="flex justify-between">
        <span>Subtotal:</span>
        <span>${summary.subtotal.toFixed(2)}</span>
      </p>
      <p className="flex justify-between">
        <span>Shipping:</span>
        <span>${summary.shipping.toFixed(2)}</span>
      </p>
      <hr className="my-2" />
      <p className="flex justify-between font-semibold">
        <span>Total:</span>
        <span>${summary.total.toFixed(2)}</span>
      </p>
      <button className="w-full mt-4 bg-amber-700 text-white py-2 rounded-lg">
        Checkout
      </button>
    </div>
  );
}
