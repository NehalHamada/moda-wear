"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { CartItem } from "@/types/cart";

let cartData: CartItem[] = []; // Mock cart in memory

export function useCart() {
  const queryClient = useQueryClient();

  // 🛒 get cart
  const { data: cart = [] } = useQuery<CartItem[]>({
    queryKey: ["cart"],
    queryFn: async () => cartData,
  });

  // ➕ add item
  const addItem = useMutation<CartItem[], Error, CartItem>({
    mutationFn: async (item) => {
      const exists = cartData.find((i) => i.id === item.id);
      if (exists) {
        cartData = cartData.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        cartData = [...cartData, { ...item, quantity: 1 }];
      }
      return cartData;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
  });

  // 🔄 update quantity
  const updateQuantity = useMutation<
    CartItem[],
    Error,
    { id: number; quantity: number }
  >({
    mutationFn: async ({ id, quantity }) => {
      cartData = cartData.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      );
      return cartData;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
  });

  // ❌ remove item
  const removeItem = useMutation<CartItem[], Error, number>({
    mutationFn: async (id) => {
      cartData = cartData.filter((item) => item.id !== id);
      return cartData;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
  });

  return {
    cart,
    addItem: addItem.mutate,
    updateQuantity: updateQuantity.mutate,
    removeItem: removeItem.mutate,
  };
}
