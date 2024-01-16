import ProductList from "@/app/(movie)/_components/movie-list";
import { fetchData } from "@/lib/data";
import { ProductResponse } from "@/lib/types";
import React, { Suspense } from "react";
import { Await } from "@/lib/utils";
import ProductsLoading from "../../_components/products-loading";
import InfiniteLoading from "../_components/infinite-loading";

const Store = async () => {
  const url = "products";
  const response = fetchData<ProductResponse>({ url, query: { limit: 20 } });

  return (
    <div className="space-y-4">
      <Suspense key={url} fallback={<ProductsLoading />}>
        <Await promise={response}>
          {(data) => {
            return (
              <>
                <InfiniteLoading payload={data} url={url} query={{}} />
              </>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};

export default Store;
