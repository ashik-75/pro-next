"use client";

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" flex h-full items-center justify-between px-10 backdrop-blur-sm">
      <div className="container">
        <Link href={"/"}>
          <h1 className=" text-3xl font-extrabold">Next JS API Masterclass</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
