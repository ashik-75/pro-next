import React from "react";
import SearchBar from "./_components/search-bar";
import Category from "./_components/category";

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-5 md:flex-row md:gap-10">
        <SearchBar />
        <Category />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default StoreLayout;
