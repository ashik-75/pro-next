"use client";
import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import MovieSearchBar from "../(movie)/_components/movie-search-bar";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className=" flex h-full items-center justify-between px-10 backdrop-blur-sm">
      <Link href={"/"}>
        <h1 className=" text-3xl font-extrabold">Store Front</h1>
      </Link>

      <MovieSearchBar />

      <button
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
        className="rounded-full border border-dashed border-zinc-500 p-2 dark:border-zinc-300"
      >
        {theme === "light" ? <Sun /> : <Moon />}
      </button>
    </div>
  );
};

export default Navbar;
