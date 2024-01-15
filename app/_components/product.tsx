import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link prefetch={false} href={`/ppr/${product.id}`}>
      <div className="space-y-2 rounded-3xl border p-4 shadow-sm">
        <div className="relative aspect-video overflow-hidden rounded-xl">
          <Image
            src={product.images[0]}
            alt={product.brand}
            fill
            className="object-cover opacity-90 duration-700 hover:scale-110 hover:opacity-100"
          />
        </div>
        <div>
          <h1 className="line-clamp-1 text-xl font-black text-zinc-600 dark:text-zinc-300">
            {product.title}
          </h1>
          <p>{product.category}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
