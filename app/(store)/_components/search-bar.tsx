"use client";

import { Loader, Loader2, Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useTransition } from "react";
import { useDebouncedCallback } from "use-debounce";
import { queryStringConverter } from "@/lib/utils";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultSearchQueryParams = searchParams.get("q");
  const categoryQuery = searchParams.get("category");

  const [defaultValue, setDefaultValue] = useState(
    () => defaultSearchQueryParams || "",
  );
  const [isPending, startTransition] = useTransition();
  const debaunce = useDebouncedCallback((value) => {
    setDefaultValue(value);

    const query = queryStringConverter({
      q: value,
      category: categoryQuery,
    });
    startTransition(() => router.push(`?${query}`));
  }, 1000);

  return (
    <div className="flex max-w-md gap-5 rounded-3xl border px-4 py-2">
      {!isPending && <Search />}
      {isPending && <Loader className="animate-spin" />}

      <input
        defaultValue={defaultValue}
        onChange={(e) => debaunce(e.target.value)}
        placeholder={`e.g: search what you want?`}
        className="flex-1 bg-transparent outline-none"
      />
    </div>
  );
};

export default SearchBar;
