import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    name: "Men",
    href: "/category/men",
    image: "/men.jpg",
  },
  {
    name: "Women",
    href: "/category/women",
    image: "/women.jpg",
  },
];

export default function CategoryPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Shop by Category</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={cat.href}
            className="block shadow rounded-2xl overflow-hidden hover:shadow-lg transition">
            <Image
              src={cat.image}
              alt={cat.name}
              width={300}
              height={200}
              className="w-full h-40 object-cover"
            />
            <div className="p-3 text-center font-semibold">{cat.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
