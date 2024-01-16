import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const MovieListSkeleton = ({ items = 4 }: { items?: number }) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: items }).map((_, i) => (
        <div key={i + 1} className="space-y-2 rounded-3xl border p-5">
          <Skeleton className="aspect-w-3 aspect-h-4 w-full rounded-xl" />
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-1/2 rounded-xl" />

            <Skeleton className="h-4 w-6 rounded-xl" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieListSkeleton;
