"use client";

import { Loader, Loader2, Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useTransition } from "react";
import { useDebouncedCallback } from "use-debounce";
import { queryStringConverter } from "@/lib/utils";

const MovieSearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultSearchQueryParams = searchParams.get("q");
  const page = searchParams.get("page");

  const [defaultValue, setDefaultValue] = useState(
    () => defaultSearchQueryParams || "",
  );
  const [isPending, startTransition] = useTransition();
  const debaunce = useDebouncedCallback((value) => {
    setDefaultValue(value);

    const query = queryStringConverter({
      q: value,
      page: page,
    });
    startTransition(() => {
      if (value) {
        router.push(`/search?${query}`);
      } else {
        router.push("/");
      }
    });
  }, 1000);

  return (
    <div className="flex max-w-md gap-5 rounded-3xl border px-4 py-2">
      {!isPending && <Search className="opacity-60" />}
      {isPending && <Loader className="animate-spin" />}

      <input
        defaultValue={defaultValue}
        onChange={(e) => debaunce(e.target.value)}
        type="search"
        placeholder={`e.g: search what you want?`}
        className="flex-1 bg-transparent outline-none"
      />
    </div>
  );
};

export default MovieSearchBar;
