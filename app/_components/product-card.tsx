import React from "react";

import Link from "next/link";
import BlurImage from "@/components/blur-image";
import { Star } from "lucide-react";
import { Product } from "@/lib/types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link prefetch={false} href={`/product/${product.id}`}>
      <div className="space-y-2 rounded-3xl border p-4 shadow-sm">
        <BlurImage url={`${product.images[0]}`} />
        <div>
          <h1 className="line-clamp-1 text-xl font-black text-zinc-600 dark:text-zinc-300">
            {product.title}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
