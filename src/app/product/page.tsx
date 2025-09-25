import Filter from "@/component/Filter";
import Loading from "@/component/Loading";
import Productlist from "@/component/Productlist";
import { Suspense } from "react";

// dynamic rendering
// export const revalidate = 0;

// static rendering(ISR)
export const revalidate = 15;

interface props {
  searchParams: Promise<{ category: string }>;
}

export default async function Page({ searchParams }: props) {
  const { category } = await searchParams;
  const filterValue = category ?? "All";
  console.log(filterValue);
  return (
    <div className="p-4">
      <h1 className="text-center m-3 text-3xl text-amber-700">Our Produts</h1>
      <Filter />
      <Suspense fallback={<Loading />}>
        <Productlist filterValue={filterValue} />
      </Suspense>
    </div>
  );
}
