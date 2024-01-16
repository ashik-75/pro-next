"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Movie } from "@/app/(movie)/_types/Movie";
import React, { Suspense } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Star } from "lucide-react";
import { Await } from "@/lib/utils";
import MovieDetailsSkeleton from "@/app/(movie)/movie/[movieId]/_components/details-skeleton";

const ModalComponent = ({ promise }: { promise: Promise<Movie> }) => {
  const router = useRouter();
  return (
    <Dialog open={true} onOpenChange={() => router.back()}>
      <DialogContent>
        <Suspense fallback={<MovieDetailsSkeleton />}>
          <Await promise={promise}>
            {(movie) => (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-2xl">
                  <Image
                    src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                    alt={movie.name || ""}
                    fill
                  />
                </div>

                <div className="space-y-4">
                  <h1 className="text-2xl font-black">{movie.title}</h1>
                  <p className="line-clamp-4">{movie.overview}</p>
                  <p>Released: {movie.release_date}</p>
                  <div className="flex items-center gap-1">
                    <Star size={22} className="text-orange-400" />
                    <span className="text-base">
                      {movie.vote_average?.toFixed(2) ?? "0.00"}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </Await>
        </Suspense>
      </DialogContent>
    </Dialog>
  );
};

export default ModalComponent;
