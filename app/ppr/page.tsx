import { getCharacters } from "@/lib/data";
import React, { Suspense } from "react";
import CharacterList from "../_components/chracter-list";
import CharacterLoading from "../_components/character-loading";

const Page = () => {
  return (
    <div className=" space-y-5">
      <h1 className="text-2xl font-bold">Show the latest output</h1>

      <Suspense fallback={<CharacterLoading />}>
        <FetchChh />
      </Suspense>
    </div>
  );
};

export default Page;

const FetchChh = async () => {
  const chList = await getCharacters();

  return <CharacterList characters={chList.results} />;
};
