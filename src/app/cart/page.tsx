import CartItems from "@/component/CartItems";
import CartSummary from "@/component/CartSummary";

export default function CartPage() {
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Items Section */}
      <div className="md:col-span-2">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <CartItems />
      </div>

      {/* Summary Section */}
      <div>
        <CartSummary />
      </div>
    </div>
  );
}
