import ProductList from "@/app/_components/product-list";
import ProductsLoading from "@/app/_components/products-loading";
import { fetchData } from "@/lib/data";
import { ProductResponse } from "@/lib/types";
import { Await } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";

const PageCategoryProducts = ({ params }: { params: { category: string } }) => {
  const response = fetchData<ProductResponse>(
    `products/category/${params.category}`,
  );
  return (
    <div className="space-y-5">
      <Link
        href={"/"}
        className="inline-flex items-center gap-2 rounded-lg border px-4 py-2"
      >
        {" "}
        <ChevronLeft size={16} /> Back
      </Link>
      <h1>Category - {params.category}</h1>

      <Suspense fallback={<ProductsLoading />} key={params.category}>
        <Await promise={response}>
          {({ products }) => {
            return <ProductList products={products} />;
          }}
        </Await>
      </Suspense>
    </div>
  );
};

export default PageCategoryProducts;
