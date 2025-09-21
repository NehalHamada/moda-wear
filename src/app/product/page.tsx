import Loading from "@/component/Loading";
import Productlist from "@/component/Productlist";
import { Suspense } from "react";

export default async function Page() {
  return (
    <div className="p-4">
      <h1 className="text-center m-3 text-3xl text-amber-700">Our Produts</h1>
      <Suspense fallback={<Loading />}>
        <Productlist />
      </Suspense>
    </div>
  );
}
