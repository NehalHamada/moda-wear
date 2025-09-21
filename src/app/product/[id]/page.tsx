import Image from "next/image";
import Counter from "../../../component/Counter";
import Product from "@/types/product";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const { id } = params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product: Product = await res.json();
  return {
    title: product.title, // ✅ بدل name
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product: Product = await res.json();

  return (
    <div className="max-w-2xl mx-auto p-6 shadow rounded-2xl">
      <Image
        src={product.image}
        alt={product.title}
        width={250}
        height={250}
        className="mx-auto mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-lg font-semibold mb-4">Price: ${product.price}</p>
      <Counter />
    </div>
  );
}
