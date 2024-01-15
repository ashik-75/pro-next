import ProductsLoading from "@/app/_components/products-loading";
import { fetchData } from "@/lib/data";
import { ProductResponse } from "@/lib/types";
import { Await } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";
import InfiniteLoading from "../../_components/infinite-loading";

const PageCategoryProducts = ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const q = searchParams["q"] ?? "";
  const url = `products/search`;
  const response = fetchData<ProductResponse>({ url, query: { q } });
  return (
    <div className="space-y-5">
      <Link
        href={"/store"}
        className="inline-flex items-center gap-2 rounded-lg border px-4 py-2"
      >
        {" "}
        <ChevronLeft size={16} /> Back
      </Link>
      <h1>search by - {q}</h1>

      <Suspense fallback={<ProductsLoading />} key={q}>
        <Await promise={response}>
          {(data) => {
            return (
              <>
                <InfiniteLoading payload={data} url={url} query={{ q }} />
              </>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};

export default PageCategoryProducts;
