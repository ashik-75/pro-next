import { fetchMovies } from "@/lib/data";
import React, { Suspense } from "react";
import { Await } from "@/lib/utils";
import { MoviesResponse } from "../_types/Movie";
import MovieListSkeleton from "../_components/movie-list-skeleton";
import MovieList from "../_components/movie-list";
import Pagination from "@/app/_components/pagination";

const MoviePage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const page = searchParams["page"] ?? "1";
  const query = searchParams["q"] ?? "";

  const promise = fetchMovies<MoviesResponse>({
    url: "/search/movie",
    query: { page, query },
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
