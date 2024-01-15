import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "query-string";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep(duration = 3000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve("fucked");
    }, duration);
  });
}

export function queryStringConverter(payload: {
  [key: string]: string | undefined | null;
}) {
  return qs.stringify(payload, { skipEmptyString: true, skipNull: true });
}

export async function Await<T>({
  promise,
  children,
}: {
  promise: Promise<T>;
  children: (value: T) => JSX.Element;
}) {
  let data = await promise;

  return children(data);
}
