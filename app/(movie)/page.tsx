import { fetchMovies } from "@/lib/data";
import React, { Suspense } from "react";
import MovieList from "./_components/movie-list";
import { MoviesResponse } from "./_types/Movie";
import Pagination from "../_components/pagination";
import { Await } from "@/lib/utils";
import MovieListSkeleton from "./_components/movie-list-skeleton";

const MoviePage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const page = searchParams["page"] ?? "1";

  const promise = fetchMovies<MoviesResponse>({
    url: "trending/all/day",
    query: { page },
  });
  return (
    <div className="pb-10">
      <Suspense key={page} fallback={<MovieListSkeleton />}>
        <Await promise={promise}>
          {({ results, total_pages }) => (
            <>
              <MovieList movies={results} />
              <Pagination total_page={total_pages} />
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

export default MoviePage;
