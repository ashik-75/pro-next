import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Movie } from "../_types/Movie";
import BlurImage from "@/components/blur-image";
import { Star } from "lucide-react";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <Link prefetch={false} href={`/movie/${movie.id}`}>
      <div className="space-y-2 rounded-3xl border p-4 shadow-sm">
        <BlurImage
          url={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
        />
        <div>
          <h1 className="line-clamp-1 text-xl font-black text-zinc-600 dark:text-zinc-300">
            {movie.title || movie?.name}
          </h1>

          <div className="flex items-center gap-1">
            <Star size={16} className="text-orange-400" />
            <span className="text-sm">{movie.vote_average.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
