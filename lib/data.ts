const BASE_URL = `https://dummyjson.com`;

export async function fetchData<T>(url: string): Promise<T> {
  const chsss = await fetch(`${BASE_URL}/${url}`).then((dt) => dt.json());

  return chsss;
}
