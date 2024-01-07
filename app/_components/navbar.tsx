"use client";
import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className=" flex h-full items-center justify-between px-10 backdrop-blur-sm">
      <Link href={"/"}>
        <h1 className="font-nunito text-3xl font-extrabold">
          <span className="text-rose-600">Cool</span>
          <span>Stuff</span>
        </h1>
      </Link>

      <button
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
        className="border border-dashed p-2"
      >
        {theme === "light" ? <Sun /> : <Moon />}
      </button>
    </div>
  );
};

export default Navbar;
