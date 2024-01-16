"use client";

import ProductList from "@/app/(movie)/_components/movie-list";
import Oval from "@/components/spinner/oval";
import { fetchData } from "@/lib/data";
import { useInVisible } from "@/lib/hooks";
import { Product, ProductResponse } from "@/lib/types";
import { useTheme } from "next-themes";
import React, { useEffect, useRef, useState } from "react";

const InfiniteLoading = ({
  payload,
  url,
  query,
}: {
  payload: ProductResponse;
  url: string;
  query: { [key: string]: string };
}) => {
  const [data, setData] = useState<ProductResponse>(payload);
  const themeResponse = useTheme();
  const ref = useRef(null);
  const visible = useInVisible(ref);

  useEffect(() => {
    if (visible) {
      const length = data.products?.length || 0;
      fetchData<ProductResponse>({
        url,
        query: { ...query, limit: 20, skip: length },
      }).then((res) => {
        setData({
          products: [...data.products, ...res.products],
          total: res.total,
          limit: res.skip,
          skip: res.skip,
        });
      });
    }
  }, [visible, url, query, data]);

  return (
    <>
      <ProductList products={data.products} />
      {data.total !== data?.products?.length && (
        <div ref={ref} className="flex h-40 items-center justify-center">
          <Oval color={themeResponse.theme === "light" ? "black" : "white"} />
        </div>
      )}
    </>
  );
};

export default InfiniteLoading;
