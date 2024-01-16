import React from "react";

import ProductCard from "./movie";
import { Movie } from "../_types/Movie";

const MovieList = ({ movies }: { movies: Movie[] | undefined }) => {
  if (!movies || movies.length === 0) {
    return <div>Uff, nothing found</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie) => (
        <ProductCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
