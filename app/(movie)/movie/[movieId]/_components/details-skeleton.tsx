import { Skeleton } from "@/components/ui/skeleton";

const MovieDetailsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div className="aspect-w-3 aspect-h-4">
        <Skeleton />
      </div>

      <div className="space-y-4">
        <Skeleton className="h-10" />
        <Skeleton className="h-28" />
        <div className="flex gap-5">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 flex-1" />
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsSkeleton;
