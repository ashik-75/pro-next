import { fetchMovies } from "@/lib/data";
import ModalComponent from "./_components/modal-component";
import { Suspense } from "react";
import { Await, sleep } from "@/lib/utils";
import { Movie } from "@/app/(movie)/_types/Movie";

const MovieDetails = ({ params }: { params: { movieId: string } }) => {
  const moviePromise = fetchMovies<Movie>({ url: `movie/${params.movieId}` });

  return <ModalComponent promise={moviePromise} />;
};

export default MovieDetails;
