// export const dynamic = "force-dynamic";
// import { headers, cookies } from "next/headers";
import { sleep } from "@/lib/utils";
import Link from "next/link";
import React, { Suspense } from "react";
import { unstable_noStore as noStore } from "next/cache";
import RevalidateButton from "./revalidate-button";
import BlurImage from "@/components/blur-image";

const Page = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string };
}) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center ">
      <Link href={"/"}>Details</Link>
      <br />
      <Suspense fallback={<div>Loading ...</div>}>
        <FetchDog />
      </Suspense>
    </div>
  );
};

export default Page;

const FetchDog = async () => {
  // noStore();
  // await sleep();
  const response = await fetch(`https://dog.ceo/api/breeds/image/random`, {
    next: { revalidate: 0 },
  }).then((dt) => dt.json());
  return (
    <div className="max-w-sm rounded-3xl border p-5">
      <BlurImage url={response.message} />
      <div className="mt-2 space-y-2">
        <h1 className="text-lg font-bold">Show the real world </h1>
        <p>{Date.now()}</p>
      </div>

      <RevalidateButton />
    </div>
  );
};
