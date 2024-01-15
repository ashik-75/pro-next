"use client";

import React, { useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader } from "lucide-react";
import { queryStringConverter } from "@/lib/utils";

const CategoryList = ({ categories }: { categories: string[] }) => {
  const searchParams = useSearchParams();
  const [isPending, setTransition] = useTransition();
  const router = useRouter();

  return (
    <Select
      defaultValue={searchParams.get("category") || ""}
      onValueChange={(value) =>
        setTransition(() => {
          router.push(`/${value}`);
        })
      }
    >
      <SelectTrigger className="w-[280px] focus:ring-0">
        {isPending && <Loader className="animate-spin" />}
        <SelectValue placeholder="Select a Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CategoryList;
