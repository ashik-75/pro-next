import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
