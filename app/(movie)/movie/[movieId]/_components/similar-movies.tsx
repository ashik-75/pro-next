import { fetchMovies } from "@/lib/data";
import React, { Suspense } from "react";

import { Await } from "@/lib/utils";
import { MoviesResponse } from "@/app/(movie)/_types/Movie";
import MovieListSkeleton from "@/app/(movie)/_components/movie-list-skeleton";
import MovieList from "@/app/(movie)/_components/movie-list";

const SimilarMovies = async ({ movieId }: { movieId: string }) => {
  const promise = fetchMovies<MoviesResponse>({
    url: `movie/${movieId}/similar`,
  });
  return (
    <div className="space-y-4 pb-10">
      <h1 className="text-2xl font-bold">Similar Movies</h1>
      <Suspense key={movieId} fallback={<MovieListSkeleton items={4} />}>
        <Await promise={promise}>
          {({ results }) => (
            <>
              <MovieList movies={results?.slice(0, 4)} />
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

export default SimilarMovies;
