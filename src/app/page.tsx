import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <section className="bg-amber-700 text-white text-center p-20 mt-3">
        <h1 className="text-4xl font-bold mb-4">Welcome to Moda Wear</h1>
        <p className="text-lg mb-6">
          Discover the latest trends in fashion for men & women
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/product"
            className="bg-white text-amber-700 font-semibold px-6 py-2 rounded hover:bg-gray-100">
            Shop Now
          </Link>
          <Link
            href="/category"
            className="border border-white px-6 py-2 rounded hover:bg-amber-600">
            Browse Categories
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Link
            href="/category/men"
            className="block text-center shadow rounded-lg overflow-hidden">
            <Image
              src="/men.jpg"
              alt="Men"
              width={300}
              height={200}
              className="w-full h-40 object-cover"
            />
            <p className="py-2 font-semibold">Men</p>
          </Link>
          <Link
            href="/category/women"
            className="block text-center shadow rounded-lg overflow-hidden">
            <Image
              src="/women.jpg"
              alt="Women"
              width={300}
              height={200}
              className="w-full h-40 object-cover"
            />
            <p className="py-2 font-semibold">Women</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
