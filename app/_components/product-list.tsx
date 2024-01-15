import React from "react";

import ProductCard from "./product";
import { Product } from "@/lib/types";

const ProductList = ({ products }: { products: Product[] | undefined }) => {
  // console.log(products);
  if (!products || products.length === 0) {
    return <div>Uff, nothing found</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
