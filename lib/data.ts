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
