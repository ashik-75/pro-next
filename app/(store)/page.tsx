import ProductList from "@/app/_components/product-list";
import { fetchData } from "@/lib/data";
import { ProductResponse } from "@/lib/types";
import React, { Suspense } from "react";
import CategoryList from "./_components/category-list";
import SearchBar from "./_components/search-bar";
import { Await } from "@/lib/utils";
import ProductsLoading from "../_components/products-loading";

const Store = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const search = searchParams["q"] ?? "";
  const url = search ? `products/search?q=${search}` : "products";
  const response = fetchData<ProductResponse>(url);
  const categories = await fetchData<string[]>("products/categories");

  return (
    <div className="space-y-4">
      <SearchBar />
      <CategoryList categories={categories} />
      <Suspense key={search} fallback={<ProductsLoading />}>
        <Await promise={response}>
          {({ products }) => {
            return <ProductList products={products} />;
          }}
        </Await>
      </Suspense>
    </div>
  );
};

export default Store;
