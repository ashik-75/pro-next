import { Button } from "@/components/ui/button";
import { fetchMovies } from "@/lib/data";
import { ChevronLeft, Star } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";
import { Movie } from "../../_types/Movie";
import { Await } from "@/lib/utils";
import BlurImage from "@/components/blur-image";
import MovieDetailsSkeleton from "./_components/details-skeleton";
import SimilarMovies from "./_components/similar-movies";

const MovieDetails = ({ params }: { params: { movieId: string } }) => {
  const response = fetchMovies<Movie>({ url: `movie/${params.movieId}` });
  return (
    <div className=" space-y-4">
      <Link
        href={"/"}
        className="inline-flex items-center gap-2 rounded-lg border px-3 py-1 text-sm"
      >
        {" "}
        <ChevronLeft size={16} /> Back
      </Link>

      <Suspense fallback={<MovieDetailsSkeleton />}>
        <Await promise={response}>
          {(movie) => (
            <div key={movie.id} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <BlurImage
                  url={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                />
                <div className="space-y-4">
                  <h1 className="text-4xl font-black">
                    {movie.title || movie.name}
                  </h1>
                  <p>{movie.overview}</p>
                  <p>Released: {movie.release_date}</p>
                  <div className="flex items-center gap-1">
                    <Star size={22} className="text-orange-400" />
                    <span className="text-base">
                      {movie.vote_average.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <SimilarMovies movieId={params.movieId} />
            </div>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

export default MovieDetails;
