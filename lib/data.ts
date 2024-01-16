import { ProductResponse } from "./types";
import { queryStringConverter } from "./utils";

const BASE_URL = `https://dummyjson.com`;

export async function fetchData<T>({
  url,
  query,
}: {
  url: string;
  query: { [key: string]: string | number };
}): Promise<T> {
  const q = queryStringConverter(query);
  const fullUrl = `${BASE_URL}/${url}?${q}`;

  const chsss = await fetch(fullUrl).then((dt) => dt.json());

  return chsss;
}

const TMDB_BASE_URL = `https://api.themoviedb.org/3/`;
// https://api.themoviedb.org/3/trending/all/day?language=en-US
export async function fetchMovies<T>({
  url,
  query = {},
}: {
  url: string;
  query?: { [key: string]: string | number };
}): Promise<T> {
  const q = queryStringConverter(query);
  const fullUrl = `${TMDB_BASE_URL}/${url}?${q}`;

  console.log({ fullUrl });

  const chsss = await fetch(fullUrl, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
    },
  }).then((dt) => dt.json());

  return chsss;
}
