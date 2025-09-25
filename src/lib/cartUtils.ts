import Product from "@/types/product"; // ✅ default import

export async function getCartTotal(cart: { id: number; quantity: number }[]) {
  // fetch all products from FakeStore API
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  const subtotal = cart.reduce((acc, item) => {
    const product = products.find((p: Product) => p.id === item.id);
    return acc + (product?.price || 0) * item.quantity;
  }, 0);

  const shipping = subtotal > 200 ? 0 : 20;
  const total = subtotal + shipping;

  return { subtotal, shipping, total };
}
