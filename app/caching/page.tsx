// export const dynamic = "force-dynamic";
// import { headers, cookies } from "next/headers";
// import { sleep } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  // await sleep();
  const search = searchParams["q"];
  const response = await fetch(
    `https://dog.ceo/api/breeds/image/random?q=${search}`,
  ).then((dt) => dt.json());
  console.log({ search });
  return (
    <div className="flex h-full w-full flex-col items-center justify-center ">
      <Link href={"/"}>Back</Link>
      <br />
      <Link href={`/caching/${Date.now()}`}>
        <div className="max-w-sm rounded-3xl border p-5">
          <img src={response.message} className="rounded-2xl" />
          <div className="mt-2 space-y-2">
            <h1 className="text-lg font-bold">Show the real world </h1>
            <p>{Date.now()}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Page;
